const express = require('express')
const app = express()

// Setting Views engine
/* app.set("view engine", "html");
app.set("views", process.cwd() + "/Views/pages/login"); */
 
// Include all CSS, images, etc...;
app.use(express.static("./Views/pages/login/assets"));
// app.use(express.static("./Views/pages/login/assets/images"));

app.get('/', (req, res) => {
  res.sendFile("./Views/pages/login/index.html", { root: __dirname });
  
})
 
app.listen(3000)