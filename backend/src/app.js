import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

//route import
import data from "./routes/data.routes.js";

//route declaration
app.use("/api/v1/data", data);

// http://localhost:8000/api/v1/data/jsondata

export { app };
