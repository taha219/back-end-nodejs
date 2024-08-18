const express = require('express');
const productroute=require('./routes/product')
const userroute=require('./routes/user')
require('./config/connect');

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());
app.use('/product',productroute)
app.use('/user',userroute)


/////////////////////////////////////////////////
// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
