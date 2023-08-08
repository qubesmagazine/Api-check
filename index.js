const express = require("express");
const connectDB = require("./config/dbconnection");
const errorHandler = require("./middleware/errorHandler");
const cors = require('cors')
const dotenv = require("dotenv").config()



connectDB()
const app = express();

const port = process.env.PORT || 5000;


// middleware
app.use(express.json())
app.use(cors())
app.use("/api/search", require("./routes/contactRoutes"))
app.use(errorHandler)



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

