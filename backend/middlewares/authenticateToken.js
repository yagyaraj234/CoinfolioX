import Jwt from "jsonwebtoken";

const authenticateToken = (req, res, next) => {
  let token = req.headers["authorization"];
  if (token) {
    token = token.split(" ")[1];
    Jwt.verify(token, process.env.JWTPRIVATEKEY, (err, valid) => {
      if (err) {
        res.status(401).send({ result: "Please provide valid token" });
      } else {
        req.token = token;
        next();
      }
    });
  }
};

export default authenticateToken;
