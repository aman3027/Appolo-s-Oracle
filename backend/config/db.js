import mongoose from "mongoose";
import dotenv from "dotenv";
//db connection code
dotenv.config();
const url = "mongodb+srv://chandra:chandra@cluster0.dkxkfo1.mongodb.net/QuizDatabse";
// console.log(url);
connectDB().catch((err) => console.log(err));
async function connectDB() {
  await mongoose.connect(url);
  console.log(`Quiz database connected Successfully to ${url}`);
}
export default connectDB;
