// const jwt = require('jsonwebtoken');

// const requireAuth = (req, res, next) => {
//     const token = req.cookies.jwt;
//     if (token) {
//         jwt.verify(token, 'ovo je neki secret', (err, decodedToken) => {
//             if (err) {
//                 console.log(err.message);
//                 res.redirect('/Log')
//             } else {
//                 console.log(decodedToken);
//                 next();
//             }
//         })
//     } else {
//         res.redirect('/Log');
//     }
// }
// module.exports = { requireAuth }