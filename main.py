from fastapi import FastAPI, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import requests
import logging
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = FastAPI(title="Contact Form API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify your domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@app.post("/submit-contact")
async def submit_contact(
    name: str = Form(...),
    email: str = Form(...),
    phone: str = Form(None),
    service: str = Form(...),
    message: str = Form(...),
    additionalNotes: str = Form(None)
):
    """Handle contact form submission"""

    # Validate required fields
    if not name or not email or not service or not message:
        raise HTTPException(status_code=400, detail="Missing required fields")

    # Email configuration
    email_user = os.getenv("EMAIL_SERVER_USER")
    email_password = os.getenv("EMAIL_SERVER_PASSWORD")

    if not email_user or not email_password:
        logger.error("Email credentials not configured")
        raise HTTPException(status_code=500, detail="Email service not configured")

    # Telegram configuration
    telegram_token = os.getenv("TELEGRAM_BOT_TOKEN")
    telegram_chat_id = os.getenv("TELEGRAM_CHAT_ID")

    try:
        # Send email notification
        await send_email_notification(name, email, phone, service, message, additionalNotes, email_user, email_password)

        # Send Telegram notification
        if telegram_token and telegram_chat_id:
            await send_telegram_notification(name, email, phone, service, message, additionalNotes, telegram_token, telegram_chat_id)

        return {
            "success": True,
            "message": "Thank you for your message! We will get back to you soon."
        }

    except Exception as e:
        logger.error(f"Error processing form submission: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to process form submission")

async def send_email_notification(name, email, phone, service, message, additionalNotes, email_user, email_password):
    """Send email notification"""
    msg = MIMEMultipart()
    msg['From'] = f'"{name}" <{email}>'
    msg['To'] = 'kilarimohansai@gmail.com'  # Change this to your email
    msg['Subject'] = 'New Contact Form Submission from your Website'

    body = f"""
    New Contact Form Submission

    Name: {name}
    Email: {email}
    Phone: {phone or 'Not provided'}
    Service: {service}
    Message: {message}
    Additional Notes: {additionalNotes or 'Not provided'}
    """

    msg.attach(MIMEText(body, 'plain'))

    try:
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(email_user, email_password)
        text = msg.as_string()
        server.sendmail(email_user, 'kilarimohansai@gmail.com', text)
        server.quit()
        logger.info("Email sent successfully")
    except Exception as e:
        logger.error(f"Failed to send email: {str(e)}")
        raise

async def send_telegram_notification(name, email, phone, service, message, additionalNotes, token, chat_id):
    """Send Telegram notification"""
    telegram_message = f"""
🔔 <b>New Contact Form Submission</b>

📝 <b>Name:</b> {name}
📧 <b>Email:</b> {email}
📞 <b>Phone:</b> {phone or 'Not provided'}
🔧 <b>Service:</b> {service}
💬 <b>Message:</b> {message}
{additionalNotes if additionalNotes else ''}
    """.strip()

    url = f"https://api.telegram.org/bot{token}/sendMessage"
    payload = {
        'chat_id': chat_id,
        'text': telegram_message,
        'parse_mode': 'HTML'
    }

    try:
        response = requests.post(url, json=payload)
        response.raise_for_status()
        logger.info("Telegram message sent successfully")
    except Exception as e:
        logger.error(f"Failed to send Telegram message: {str(e)}")
        # Don't raise exception for Telegram failures, just log them

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
