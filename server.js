const express = require('express');
const User = require('./models/user'); // Corrected path and capitalization
const Product = require('./models/product')
require('./config/connect');

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// POST request to add a new user
//req parameter>>>> باخد من الحاجات اللي بعتها في الريكويست
//res parameter>>>> لو عاوز ارجع ارد معين بالداتا اللي ضفتها
app.post('/add', (req, res) => {
    data = req.body;
    usr = new User(data);
    usr.save()
        .then(
            (saveduser) => {
                res.send(saveduser)
            })
        .catch((err) => { res.send(err) })
});
///////////////////////////////////////////////////////////////
app.post('/create', async (req, res) => {
    try {
        data = req.body
        usr = new User(data)
        savedusr = await usr.save()
        res.send(savedusr)
    }
    catch (err) {
        res.send(err)
    }
})

// GET request to get all users
app.get('/getall', async (req, res) => {
    try {
        users = await User.find({ age: 3 })
        res.send(users)
    }
    catch (err) {
        res.send(err)
    }
});
//////////////////////////////////////////////////

app.get('/getbyid/:id', async (req, res) => {
    try {
        myid = req.params.id
        user = await User.findById({ _id: myid })
        res.send(user)
    }
    catch (error) {
        res.send(error)
    }
}
)
//////////////////////////////////////////////////
app.delete('/delete/:id', (req, res) => {
    id = req.params.id
    User.findOneAndDelete({ _id: id })
        .then((deleteduser) => {
            res.send(deleteduser)
        }).catch((err) => {
            res.send(err)
        })
})
//////////////////////////////////////////////
//delete with await and asynch
app.delete('/deleteone/:id', async (req, res) => {
    try {
        id = req.params.id
        deleteduser = await User.find({ _id: id })
        res.send(deleteduser)
    } catch (error) {
        res.send(error)
    }
})
/////////////////////////////////////////////////
// PUT request to update a user
app.put('/update/:id', (req, res) => {
    id = req.params.id
    newData = req.body
    User.findByIdAndUpdate({ _id: id }, newData)
        .then((updated) => {
            res.send(updated)
        })
        .catch((err) => {
            res.send(err)
        }
        )
})
/////////////////////////////////////////////////
// PUT request to update a user with await and asynch
app.put('/updateone/:id', async (req, res) => {
    try {
        id = req.params.id
        updatereq = req.body
        updateduser = await User.findByIdAndUpdate({ _id: id }, updatereq)
        res.send(updateduser)
    } catch (error) {
        res.send(error)
    }
})
/////////////////////////////////////////////////
// crud product model 
/////////////////////////////////////////////////
//add product
app.post('/addProduct', async (req, res) => {
    try {
        dataa = req.body
        prod = new Product(dataa)
        savedprod = await prod.save()
        res.send(savedprod)
    } catch (error) {
        res.status(500).send(error.message)
    }
})
////////////////////////////////////////////////
//get all product
app.get('/getallproducts', async (req, res) => {
    try {
        allproducts = await Product.find()
        res.send(allproducts)
    } catch (error) {
        res.status(500).send(error.message)
    }
})
/////////////////////////////////////////////////
//get by id
app.get('/getProductById/:id', async (req, res) => {
    try {
        id = req.params.id
        productbyid = await Product.find({ _id: id })
        res.send(productbyid)
    } catch (error) {
        res.status(500).send(error.message)
    }
})
/////////////////////////////////////////////////
//delete by id
app.delete('/deleteproduct/:id', async (req, res) => {
    try {
        myid = req.params.id
        deletedproduct = await Product.findByIdAndDelete({ _id: myid })
        res.send(deletedproduct)
    } catch (error) {
        res.status(500).send(error.message)
    }
})
/////////////////////////////////////////////////
//update product
app.put('/updateproduct/:id', async (req, res) => {
    try {
        myid = req.params.id
        reqdata = req.body
        productafterupdate =await Product.findByIdAndUpdate({ _id: myid },reqdata)
        res.send(productafterupdate)
    } catch (error) {
        res.status(500).send(error.message)
    }
})
/////////////////////////////////////////////////
// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
