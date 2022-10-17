import jwt from "jsonwebtoken";
export const auth = async (req, res, next) => {
  try {
    console.log(req.headers.authorization);
    const payload = await verifyToken(req.headers.authorization);
    req.userId = payload.userId;

    next();
  } catch (error) {
    res.status(401).json(error);
  }
};

const verifyToken = (token) => {
  return new Promise(function (resolve, reject) {
    jwt.verify(token, "secret", (err, decoded) => {
      if (err) {
        reject(err);
      } else {
        resolve(decoded);
      }

      //
    });
  });
};
