import axios from "axios";
import userModel from "../models/userModel.js";
import FormData from "form-data";

export const imageGenerator = async (req, res) => {
  try {
    const userId = req.user.id
    const {  prompt } = req.body;

    const user = await userModel.findById(userId);
    if (!user || !prompt) {
      return res.json({ success: false, message: "Missing details" });
    }
    if (user.creditNumber === 0 || user.creditNumber < 0) {
      return res.json({
        success: false,
        message: "no credit balance",
        creditBalance: user.creditNumber,
      });
    }

    const formData = new FormData();
    formData.append("prompt", prompt);

    const {data} = await axios.post("https://clipdrop-api.co/text-to-image/v1", formData, {
      headers: {
        'x-api-key': process.env.CLIPDROP_API
    },
      responseType:'arraybuffer'
    });

    const base64Image = Buffer.from(data,'binary').toString('base64')
    const resImage = `data:Image/png;base64,${base64Image}`

    await userModel.findByIdAndUpdate(user._id, {creditNumber: user.creditNumber - 1})
    res.json({success:true, message:'image Generated', creditBalance: user.creditNumber-1, resImage})
    await user.save();
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};
