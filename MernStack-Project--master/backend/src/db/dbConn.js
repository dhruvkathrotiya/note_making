const mongoose = require("mongoose");

//creation connection to database olympics
mongoose
  .connect("mongodb+srv://22it057:Kingdhruv18@cluster0.kfwc5uz.mongodb.net/", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("database connected successful");
  })
  .catch((e) => {
    console.log("Oops! No connection found");
  });
