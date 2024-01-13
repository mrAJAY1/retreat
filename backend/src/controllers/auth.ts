import { Request, Response } from "express";
import User from "../model/users";

const authController = {
  checkEmail: async (req: Request, res: Response) => {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (user) res.send(user);
  },
  signUp: async (req: Request, res: Response) => {
    try {
      const user = new User(req.body);
      await user.save();
      return res.status(201).send({
        message: "user created",
        data: {
          email: user.email,
          name: user.firstName + " " + user.lastName,
        },
      });
    } catch (e) {
      console.log(e);
      res.status(500).send({ message: "some error has occured" });
    }
  },
};

export default authController;
