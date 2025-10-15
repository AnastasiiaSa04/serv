import {registerUser} from "../services/auth.service.js"

export const registerController = async (req, res) => {
    // const result =  await 
    await registerUser(req.body)
    res.status(201).json({message: "Register successefull"})
}

