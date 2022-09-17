const mongoose = require('mongoose');

// const DB = "mongodb+srv://laptop_user:laptop@cluster0.56zovnc.mongodb.net/?retryWrites=true&w=majority";
const DB = process.env.DATABASE;

mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connection Successful');
}).catch((err) => {
    console.log(err);
});
