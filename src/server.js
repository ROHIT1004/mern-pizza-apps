const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const Pizza = require('./models/pizzaModel')


// parse application/x-www-form-urlencoded
///app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
//app.use(bodyParser.json())
app.use(express.json());
const pizzasRoute = require('./routes/pizzasRoute')
const userRoute = require('./routes/userRoute')
const ordersRoute = require('./routes/ordersRoute')
//bodyParser Middlepare

app.use('/api/pizzas/',pizzasRoute);
app.use('/api/users/',userRoute);
app.use('/api/orders/', ordersRoute);
app.get("/", (req,res)=> {
  res.send("working fine !@");
})

//app.use(express.urlencoded({extended: true}));
//Db config
//const db = require('./config/keys').mongoURI;


/*/
//connect to Mongo
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Mongodb is connected"))
    .catch(err => console.log(err+"error ouccessssssssssssds"));
/*/
//mongodb+srv://rajat:rajatpw@cluster0.1bdwh.mongodb.net/mern-pizza
//'mongodb://localhost:27017/
///mongoose.connect("'mongodb://localhost:27017/mern-pizza", {
////mongoose.connect("mongodb+srv://rajat:rajatpw@cluster0.1bdwh.mongodb.net/mern-pizza", {
  mongoose.connect("'mongodb://localhost:27017/mern-pizza", {
      useUnifiedTopology: true,
			useNewUrlParser: true,
			useCreateIndex: true,
		})
        .then(() => console.log("Mongodb is connected"))
        .catch(err => console.log(err+"error Mongodb connections"));
        const port = process.env.PORT || 5000;
  
app.listen(port, () => console.log('Server started on port '+port)); 