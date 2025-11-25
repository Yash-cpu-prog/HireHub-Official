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

// Connect Database
connectDB();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// CORS FIX (Render Backend + Vercel Frontend)
const corsOptions = {
  origin: [
    process.env.FRONTEND_URL,   // Vercel deployed frontend
    "http://localhost:5173",    // Local frontend
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,            // IMPORTANT for cookies
};

app.use(cors(corsOptions));

// Without this, Cookie won’t go to Vercel frontend
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

// Default Route
app.get("/", (req, res) => {
  res.send("Welcome to the server");
});

// Routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/company", companyRouter);
app.use("/api/v1/job", jobRouter);
app.use("/api/v1/application", applicantionRouter);

const PORT = process.env.PORT || 3000;

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});


