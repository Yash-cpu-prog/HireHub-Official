import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRouter from "./routes/user.routes.js";
import companyRouter from "./routes/company.routes.js";
import jobRouter from "./routes/job.routes.js";
import applicantionRouter from "./routes/application.routes.js";

dotenv.config();

const app = express();

connectDB();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// CORS FIX (Vercel + Render)
const corsOptions = {
  origin: [
    process.env.FRONTEND_URL,     // Deployed Vercel frontend
    "http://localhost:5173"       // Local development
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Welcome to the server");
});

const PORT = process.env.PORT || 3000;

// Routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/company", companyRouter);
app.use("/api/v1/job", jobRouter);
app.use("/api/v1/application", applicantionRouter);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});

