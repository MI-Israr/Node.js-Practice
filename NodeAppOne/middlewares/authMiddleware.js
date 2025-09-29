import jwt from "jsonwebtoken";

export const tokenValidate = (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).json({ error: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

//Authorization middleware
export const authorizeRoles = (roles) => {
  return (req, res, next) => {
     if (typeof roles === "string") {
      roles = [roles];
    }
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: "Access denied. Not authorized" });
    }
    next();
  };
};
