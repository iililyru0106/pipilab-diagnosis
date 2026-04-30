export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, quizType } = req.body;

  // Validate email
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email' });
  }

  // Brevo API credentials from environment variables
  const brevoApiKey = process.env.BREVO_API_KEY;
  const brevoListId = 3; // Your list ID

  if (!brevoApiKey) {
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    // Add contact to Brevo
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': brevoApiKey,
      },
      body: JSON.stringify({
        email: email,
        listIds: [brevoListId],
        updateEnabled: true,
        attributes: {
          QUIZ_TYPE: quizType || 'unknown',
          SIGNUP_DATE: new Date().toISOString(),
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Brevo API error:', data);
      return res.status(response.status).json({ error: 'Failed to subscribe' });
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Successfully subscribed',
      contactId: data.id,
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
