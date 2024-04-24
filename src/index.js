import express from "express";
import configDB from "./db/configDB.js";
import { User } from "./models/user_model.js";

const app = express();
app.use(express.json());
configDB();


/* Get all blogs */
app.get("/blog", async (req, res) => {
    const users = await User.find();
    // console.log(users);

    res.status(200).json(users);
}); 

/* Blog Store */
app.post('/blog/store', async (req, res) => {
    // console.log(req.body);

    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        email: req.body.email,
        password: req.body.password,
        status: req.body.status
    });
    

    const saveUser = await newUser.save();

    res.status(201).json(saveUser);
});

/* Find Blog */ 
app.get('/blog/:id', async (req, res)=>{
    // console.log(req.params.id);
    const user = await User.findById(req.params.id);  

    // console.log(user);
    res.status(200).json(user);
});

/* Blog Update */
app.put('/blog/update/:id', async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    console.log(user);

    res.status(200).json(user);
});

/* Blog Delete */
app.delete('/blog/delete/:id', async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    console.log(user);
    res.status(200).json(user);
});

app.get('*', (req, res) =>{
    res.send('Sorry this route is not exist!')
} )

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});