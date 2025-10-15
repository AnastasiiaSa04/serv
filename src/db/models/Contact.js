import sequelize from "../sequelize.js";
import{ DataTypes} from "sequelize"

 


const Contact = sequelize.define("Contact", {
  fullname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email:{
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
        is: {
            args: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            msg: "Email must be expression: @"

        }
    }

  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
        args: true,
        msg: "Phone number is already exist"
    },
    validate: {
        // is: /^(?:\+49|0049|0)\s?(?:\d[\s\-()]?){7,14}\d$/
        // is: {
        //     args: /^(?:\+49|0049|0)\s?(?:\d[\s\-()]?){7,14}\d$/,
        //     msg: "Phone number must be expression: +49-XX-XX-XXX" 
        // }
          is: {
            args: /^\+?[1-9]\d{7,14}$/,
            msg: "Phone number must be expression: +49-XX-XX-XXX" 
        }
    }
  
  }
});

Contact.sync({forse:true})

export default Contact;


