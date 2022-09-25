const express = require("express");
const db = require('./connection');
const userModel = require('./userModel');
const cors = require("cors");
const PORT = 8081;



const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());


app.post("/login", (req, res)=> {
    const { email, password} = req.body
    userModel.findOne({ email: email}, (err, user) => {
        if(user){
            if(password == user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
                console.log(password)
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 

app.post("/register", (req, res)=> {
    const { name, email, password} = req.body
    userModel.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new userModel({
                name,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}) 





app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})




