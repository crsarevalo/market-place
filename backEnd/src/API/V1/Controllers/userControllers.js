import { byEmail, createUser } from "../Models/userModels.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const createNewUser = async (req, res) => {
  const { data } = req.body;

  try {
    const newUser = await createUser(data);

    res.status(201).json({ success: true, newUser });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const loginUser = async (req, res) => {
  const { data } = req.body;
  console.log(data);

  try {
    const findUser = await byEmail(data);
    console.log(findUser);

    if (!findUser) {
      res.status(500).json({ error: "User not found" });
    } else {
      const validPassword = bcrypt.compareSync(
        data.password,
        findUser.password
      );
      if (!validPassword) {
        res.status(500).json({ error: "Invalid password" });
      } else {
        const { email, firstname, lastname, role_id } = findUser;
        const token = jwt.sign({ email, role_id }, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
        res.status(200).json({
          message: `Welcome ${firstname} ${lastname}, you have logged in`,
          code: 200,
          token,
          userData: { email, firstname, lastname, role_id },
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export { createNewUser, loginUser };
