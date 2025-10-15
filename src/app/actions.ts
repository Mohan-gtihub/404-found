'use server';

import { z } from 'zod';
import { sendTelegramMessage } from '../lib/telegram';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email.'),
  phone: z.string().optional(),
  service: z.enum(['web-development', 'iot-automation', 'both'], {
    errorMap: () => ({ message: 'Please select a service.' }),
  }),
  message: z.string().min(5, 'Message must be at least 5 characters.'),
  additionalNotes: z.string().optional(),
});

type State = {
  success?: boolean;
  message?: string;
  errors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
    service?: string[];
    message?: string[];
    additionalNotes?: string[];
  };
};

export async function submitContactForm(
  prevState: State,
  formData: FormData
): Promise<State> {
  console.log('🚀 Form submission started');

  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    service: formData.get('service'),
    message: formData.get('message'),
    additionalNotes: formData.get('additionalNotes'),
  });

  console.log('📝 Form data received:', {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    service: formData.get('service'),
    message: formData.get('message'),
    additionalNotes: formData.get('additionalNotes'),
  });

  if (!validatedFields.success) {
    console.error('❌ Form validation failed:', validatedFields.error.flatten().fieldErrors);
    return {
      success: false,
      message: 'Please fix the errors below.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, phone, service, message, additionalNotes } = validatedFields.data;
  console.log('✅ Form validation passed for:', name, email);

  try {
    // Send Telegram notification
    console.log('🤖 Starting Telegram notification...');
    const telegramMessage = `
🔔 <b>New Contact Form Submission</b>

📝 <b>Name:</b> ${name}
📧 <b>Email:</b> ${email}
📞 <b>Phone:</b> ${phone || 'Not provided'}
🔧 <b>Service:</b> ${service}
💬 <b>Message:</b> ${message}
${additionalNotes ? `📋 <b>Additional Notes:</b> ${additionalNotes}` : ''}
    `.trim();

    console.log('📱 Sending Telegram message...');
    await sendTelegramMessage(telegramMessage, [
      '711707163', // Your chat ID
      // Add more chat IDs here for multiple recipients
      // '123456789', // Another person's chat ID
      // '987654321', // Another person's chat ID
    ]);
    console.log('✅ Telegram message sent successfully.');

    return {
      success: true,
      message: 'Thank you for your message! We will get back to you soon.',
    };
  } catch (error) {
    console.error('💥 Form submission error:', error);
    return {
      success: false,
      message: 'Something went wrong on our end. Please try again later.',
    };
  }
}
