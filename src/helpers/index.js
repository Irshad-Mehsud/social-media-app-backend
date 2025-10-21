import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const authentication = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const token = authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).json({ status: 403, message: 'Unauthorized access' });
      }
      
      // ✅ Attach decoded info (like id) to request
      req.user = decoded;
      next();
    });

  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: 'Internal server error',
      error: error.message,
    });
  }
};

export { authentication };
