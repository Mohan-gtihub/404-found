export async function sendTelegramMessage(message: string, chatIds: string[] = ['711707163']) {
  console.log('🤖 Telegram: Starting message send to multiple recipients...');

  const botToken = '8231082532:AAGygzhV4rWjFE5wQU5AopkkKuCyw0GUBs8'; // ⚠️ Your bot token

  console.log('🤖 Telegram: Bot token loaded');

  if (!botToken) {
    console.error('❌ Telegram: Bot token not configured');
    return false;
  }

  if (!chatIds || chatIds.length === 0) {
    console.error('❌ Telegram: No chat IDs provided');
    return false;
  }

  let successCount = 0;

  for (const chatId of chatIds) {
    if (!chatId) continue;

    try {
      console.log(`🤖 Telegram: Sending to chat ID: ${chatId}...`);
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: 'HTML',
          }),
        }
      );

      console.log(`🤖 Telegram: Response status for ${chatId}:`, response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`❌ Telegram: API error for ${chatId}:`, response.status, errorText);
        continue; // Continue to next chat ID even if one fails
      }

      const result = await response.json();
      console.log(`✅ Telegram: Message sent successfully to ${chatId}:`, result);
      successCount++;

    } catch (error) {
      console.error(`💥 Telegram: Error sending to ${chatId}:`, error);
      // Continue to next chat ID
    }
  }

  const allSuccessful = successCount === chatIds.length;
  console.log(`🤖 Telegram: Sent to ${successCount}/${chatIds.length} recipients`);

  return successCount > 0; // Return true if at least one message was sent successfully
}
