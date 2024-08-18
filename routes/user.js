const express=require('express')
const User = require('../models/user'); // Corrected path and capitalization

const router =express.Router()

router.post('/add', (req, res) => {
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
router.post('/create', async (req, res) => {
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
router.get('/getall', async (req, res) => {
    try {
        users = await User.find({ age: 3 })
        res.send(users)
    }
    catch (err) {
        res.send(err)
    }
});
//////////////////////////////////////////////////

router.get('/getbyid/:id', async (req, res) => {
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
router.delete('/delete/:id', (req, res) => {
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
router.delete('/deleteone/:id', async (req, res) => {
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
router.put('/update/:id', (req, res) => {
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
router.put('/updateone/:id', async (req, res) => {
    try {
        id = req.params.id
        updatereq = req.body
        updateduser = await User.findByIdAndUpdate({ _id: id }, updatereq)
        res.send(updateduser)
    } catch (error) {
        res.send(error)
    }
})




module.exports=router