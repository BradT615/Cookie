const crypto = require('crypto');

exports.handler = async (event, context) => {
  // Generate a 16-character random string
  const value = crypto.randomBytes(8).toString('hex');

  // Set the cookie with a specific name and the generated value
  return {
    statusCode: 200,
    headers: {
      'Set-Cookie': `myCookie=${value}; Path=/; HttpOnly; SameSite=Lax`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message: 'Cookie set successfully!' }),
  };
};