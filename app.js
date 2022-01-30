const express = require("express");

const app = express();

//displaying simple hello world
app.get("/", (req, res) => {
   res.send("Hello this is the node app to test with Docker and Jenkins.");
});

app.listen(5000, () => {
   console.log(`Server running at http://0.0.0.0:5000/`);
});
