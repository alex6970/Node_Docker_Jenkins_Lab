const express = require("express");

const app = express();

//displaying simple hello world
app.get("/", (req, res) => {
   res.send("Hello from my sample Express app");
});

app.listen(5000, () => {
   console.log(`Server running at http://0.0.0.0:5000/`);
});
