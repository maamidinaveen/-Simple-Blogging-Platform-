const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors())

const mongoose = require('mongoose');

const Blogs = require('./models/blogModel');


app.use(express.json())

//connecting to the mongoDB database using connection string 

mongoose.
connect("mongodb+srv://naveen:1234@cluster0.azfv39z.mongodb.net/Cluster0?retryWrites=true&w=majority")
.then(()=>{
    console.log('connected to mongoDB')
    app.listen(3000,()=>{
        console.log('server is running')
    })
})

.catch((error)=>{
    console.log(error)
})

// CRUD operation APIs 

//create a blog 

app.post('/blog',async(request,response)=>{
    try{
        const{id} = request.body
        const blog = await Blogs.find({id:id})
        if(blog.length>0){
            response.status(400).json({message:'blog already exists'})
        } else{
            const blog = await Blogs.create(request.body)
            response.status(200).json(blog)
        }
       
    }catch(error){
        console.log(error.message)
        response.status(500).json({message:error.message})
    }
})

// get all blogs from the database 

app.get('/blog', async(request,response)=>{
    try{
        const blogs = await Blogs.find({})
        response.status(200).json(blogs)
    } catch(error){
        console.log(error.message)
        response.status(500).json({message:error.message})
    }
})


//get blockdescription API based on ID 

app.get('/blogDescription/:id',async(request,response)=>{
    try{
        const {id} = request.params;
        const blogItem = await Blogs.find({id:id})
        if(blogItem.length>0){
            response.status(200).json(blogItem[0])
        } else{
            response.status(400).json({message:'blog item not found'})
        }
    }catch(error){
        console.log(error.message)
        response.status(500).json({message:error.message})
    }
})


// update blog id using id 

app.put('/blog/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const blog = await Blogs.findOneAndUpdate({ id: id }, request.body, { new: true });

        // If no blog is found in the database
        if (!blog) {
            return response.status(404).json({ message: `Cannot find any blog with ID: ${id}` });
        }

        response.send(`Blog item updated successfully: ${blog}`);
    } catch (error) {
        console.log(error.message);
        response.status(500).json({ message: error.message });
    }
});
