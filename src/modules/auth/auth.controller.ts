import { Request, Response } from "express";
import { AuthServices } from "./auth.service";

const loginWithEmailAndPassword = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const result = await AuthServices.loginWithEmailAndPassword(req.body);
    console.log(result);
    res.status(200).json(result);
  } catch (error: any) {
    if (error.message === "User Not Found!") {
      return res.status(404).json({ success: false, message: error.message });
    }
    if (error.message === "Password Incorrect!") {
      return res.status(401).json({ success: false, message: error.message });
    }
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      error: error.message,
    });
    console.log(error);
  }
};

export const AuthController = {
  loginWithEmailAndPassword,
};
