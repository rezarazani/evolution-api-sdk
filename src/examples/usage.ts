import { EvolutionClient } from '../evolution-api-client';

// Initialize the Evolution API client
const client = new EvolutionClient({
  baseUrl: 'https://your-evolution-api-server.com',
  apiKey: 'your-api-key-here'
});

async function messageExamples() {
  const instanceName = 'your-instance-name';

  try {
    // Send a plain text message
    const textMessage = await client.message.sendText(instanceName, {
      number: '5591233233233',
      text: 'Hello! This is a test message.',
      delay: 1000,
      linkPreview: true
    });
    console.log('Text message sent:', textMessage);

    // Send a text message with mentions
    const mentionedMessage = await client.message.sendText(instanceName, {
      number: '5522323223233',
      text: 'Hello @everyone!',
      mentionsEveryOne: true,
      mentioned: ['1234567890@s.whatsapp.net']
    });
    console.log('Mentioned message sent:', mentionedMessage);


  } catch (error) {
    console.error('Error sending messages:', error);
  }
}

// Run the examples
messageExamples();
