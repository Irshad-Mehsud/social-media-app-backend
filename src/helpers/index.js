import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();



const authentication = (req, res, next) => {
    try {
        const { authorization } = req.headers;
        if (!authorization) {
            return res.status(401).json({ message: 'No token provided'});

        }

        const token = authorization.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        } else {
            jwt.verify(token, process.env.JWT_SECRET, (err, result) => {
                if (result) {
                    next();
                } else {
                    return res.status(403).json({ status: 403, message: "unauthorized access" });
                }
            });
        }

    } catch (error) {
        return res.status(500).json({ status: 500, message: "Internal server error", error: error.message });
    }
}




export {
    authentication
};