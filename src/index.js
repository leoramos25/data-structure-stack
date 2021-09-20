const express = require("express");

const app = express();

app.use(express.json());

app.listen(4444, () => console.log("Server is running"));

