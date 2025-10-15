import User from "../db/models/User.js"
import bcrypt from "bcrypt"

export const registerUser = async (payload) => {
 console.log(payload)
 const {password} = payload
 const hashPassword = await bcrypt.hash(password, 10)
 console.log(hashPassword)
}

