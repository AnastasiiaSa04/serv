import sequelize from "../sequelize.js"
import{ DataTypes} from "sequelize"



const User = sequelize.define("user", {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    }

})

export default User;