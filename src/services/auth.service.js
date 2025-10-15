import User from "../db/models/User.js"
import bcrypt from "bcrypt"

export const registerUser = async (payload) => {
 const {password} = payload
 const hashPassword = await bcrypt.hash(password, 10)
 console.log(hashPassword)
 console.log(payload)
 return User.create({...payload, password:hashPassword})
}



