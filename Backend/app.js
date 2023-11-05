const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/book_routes");
const cors=require('cors');
const app = express();

// middle wares
app.use(express.json());
app.use(cors());

app.use("/books",router);
mongoose.connect(
    "mongodb+srv://b_kasturi:Kasturi%402810@cluster0.4rjgfn6.mongodb.net/?retryWrites=true&w=majority"
).then(() => console.log("Connected To Database"))
   .then(() => {
    app.listen(5000)
   }).catch((err) => console.log(err));