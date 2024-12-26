import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: decoded.userId, role: decoded.role };

    next();
  } catch (error) {
    return res.status(401).json({ message: "Authentication failed" });
  }
};

export default authMiddleware;
