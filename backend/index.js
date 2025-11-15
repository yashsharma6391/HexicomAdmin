import express from 'express';
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import serviceRoutes from "./routes/serviceRoutes.js";
const envFile =
  process.env.NODE_ENV === "production"
    ? ".env.production"
    : ".env.development";
dotenv.config({path: envFile});
const app = express();

const allowedOrigins = [process.env.FRONTEND_URL, process.env.ADMIN_URL]

app.use(cors({
    origin: function(origin, callback){
        //  console.log("Incoming request from origin:", origin);
    if(!origin) return callback(null, true); // allow non-browser requests like Postman
    if(allowedOrigins.includes(origin)){
      return callback(null, true);
    } else {
      //  console.log("Blocked by CORS:", origin);
      return callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI,
   
)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.log(err));

app.get(process.env.BASE_ROUTE, (req, res) => {
  
  res.send("Backend running successfully 🚀");
});
app.use(process.env.API_ROUTE, serviceRoutes);

const PORT = process.env.PORT || 5000;
console.log(`Environment: ${process.env.NODE_ENV}`);
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));