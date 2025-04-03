import axios from 'axios';
import querystring from 'querystring';

export const handler = async (event) => {
  const queryParams = event.queryStringParameters;
  const name = queryParams?.name;
  const email = queryParams?.email;
  const message = queryParams?.message;
  if (!name || !email || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message:
          'Required query parameters not given. name, email, and message are required.',
      }),
    };
  }
  const url = 'https://api.web3forms.com/submit';
  const postData = querystring.stringify({
    access_key: process.env.WEB3FORMS_ACCESS_KEY,
    name: name,
    email: email,
    message: message,
  });
  try {
    await axios.post(url, postData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Success' }),
    };
  } catch (error) {
    return {
      statusCode: error.response ? error.response.status : 500,
      body: JSON.stringify({ message: error.message }),
    };
  }
};
