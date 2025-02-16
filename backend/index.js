const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser')
require("dotenv").config();
const connectDB = require("./config/db");
const router = require('./routes/index');
const app = express();
app.get

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
// Middleware to parse JSON bodies
app.use(express.json());
const cors = require('cors');

const corsOptions = {
  origin: 'https://full-ecommerce-app-frontend.onrender.com', // Allow this domain
  credentials: true, // Allow credentials (cookies, etc.)
};

app.use(cors(corsOptions));

app.use(cookieParser())

// Routes
app.use("/api", router);

const port =process.env.PORT || 8080;
connectDB().then(() => {
    app.listen(port, () => {
        console.log("Connected to DB");
        console.log("Server is running on port " + port);
    });
});
