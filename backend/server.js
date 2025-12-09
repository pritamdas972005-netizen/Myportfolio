import express from "express";
const app = express();
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contact.js";

import databaseConnect from "./config/database.js";

dotenv.config({
     path : 'backend/config/config.env'
})
// API Routes


app.use(cors());
app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5000
app.get('/', (req, res)=>{
     res.send('This is from backend Sever')
})
databaseConnect();
app.listen(PORT, ()=>{
     console.log(`Server is running on port ${PORT}`)
})