require("dotenv").config();

const app = require("./app");

const PORT = process.env.PORT || 4000;
//const PORT = 4000;
//const PORT = process.env.PORT;




app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});