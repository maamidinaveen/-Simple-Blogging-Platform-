Project description: 

1) creating node js project - open the terminal and follow the commands (mkdir project_name),(cd project_name),(npm init -y);

2) installing all the dependencies - i) express - for building a backend with node.js , we need framework like express, create a file("index.js") for server, and setup a basic express server by assigning port number (3000)
ii) mongoose - it is a schema-based abstraction over the MongoDB JavaScript driver, making it easier to work with MongoDB databases in a Node.js environment.
iii) nodemon - it will automatically restarts the server whenever code changes 

3) blogs database schema will be {
    title:{
        type:String,
        require:true
    },
    imageUrl:{
        type:String,
        require:true
    },
    avatarUrl:{
        type:String,
        require:true
    },
    author:{
        type:String,
        require:true
    },
    topic:{
        type:String,
        require:true
    }
}

4) blogDescription schema will be {
    id:{
        type:Number,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    imageUrl:{
        type:String,
        require:true
    },
    avatarUrl:{
        type:String,
        require:true
    },
    author:{
        type:String,
        require:true
    },
    content:{
        type:String,
        require:true
    },
    topic:{
        type:String,
        require:true
    }
}


Now creating frontend using React Js 
create a file (ReactProject), now change the directory (cd ReactProject) , 
                                    