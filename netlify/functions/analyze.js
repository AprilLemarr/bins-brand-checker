// netlify/functions/analyze.js
export default async (req, context) => {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }
 
  const apiKey = context.env.ANTHROPIC_API_KEY;
  
  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: 'API key not configured' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
 
  try {
    const body = await req.json();
    
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey
      },
      body: JSON.stringify(body)
    });
 
    const data = await response.json();
 
    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: data.error?.message || 'API error' }),
        { status: response.status, headers: { 'Content-Type': 'application/json' } }
      );
    }
 
    return new Response(
      JSON.stringify(data),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
