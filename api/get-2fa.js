
const pyotp = require('pyotp');

module.exports = (req, res) => {
  const secret = 'MTQ4S3RHBQJGD2KCPOYDD6F5MWZ2K25I';
  const totp = pyotp.TOTP(secret);
  const token = totp.now();
  res.status(200).send(token.toString());
};
