const jwt = require('jsonwebtoken');

// function getUserIdFromToken(req) {
//   console.log('req authoriuztoin', req)
//   const token = req.headers.authorization.split(' ')[1];
//   const decodedToken = jwt.decode(token);
//   const userId = decodedToken.userId;
//   return userId;
// }

module.exports = {
  getUserIdFromToken
}