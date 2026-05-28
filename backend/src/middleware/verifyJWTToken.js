import jwt from "jsonwebtoken";

export default function verifyJWTToken(req, res, next) {
    console.log('Verifying JWT token...');

    const token = req.cookies.access_token;

    if (!token) return res.status(403).json({ message: 'No token provided' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        console.log('Token verified successfully:', decoded);
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token' });
    }
}