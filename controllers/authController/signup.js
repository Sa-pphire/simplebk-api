import Users from "../../models/users.js";
import bcrypt from "bcrypt"

const signup = async function (req, res) {
  try {
    const { email, password } = req.body;
    const saltRounds = 10;
    const userCollection = await Users()
    const user = await userCollection.findOne({ email: email });
    if (user) {
      return res.status(400).json({
        error: "Sorry, already a user with this email already exists",
      });
    }
    //hash password
    const hash = await bcrypt.hash(password, saltRounds)
    const newUser = {
        password: hash,
        email: email
      };
    const data = await userCollection.insertOne(newUser);
    return res.status(200).json({
      status: 200,
      message: "User created successfully!",
      data: data
    });
  } catch (error) {
    return res.status(500).json({
        status: 500,
        message: "Internal Server Error",
        err: error.message,
    });
  }
};

export default signup;
