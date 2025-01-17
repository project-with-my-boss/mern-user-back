import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/user.route.js"
import cors from "cors"

dotenv.config()


const app = express();


//connect port
const PORT = process.env.PORT || 8080;


app.get("/", (req, res) => {
  res.send("Hello World!");
});


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", userRoutes)
app.use(cors())



app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
})
