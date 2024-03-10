import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const jwtKeys = process.env.JWT_SECRET
const generateAccessToken = (userId) => {
    const payload = {
        sub: userId,
    }
    const token = jwt.sign(payload, jwtKeys, { expiresIn: 600 });
    return token;
}



const hashPassword = async (password, salt = 10) => {
    return await bcrypt.hash(password, salt)
}

export { hashPassword,generateAccessToken }