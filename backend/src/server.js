
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

// const cors = require('cors');
// app.use(cors());

// app.get('/',(req, res)=>{
    
//     res.send("hello")
// })

app.get('/api/jokes',(req, res)=>{
    const jokes = [
        
        {
            id:1,
            title:'A joke',
            content:'This is a joke'
            
        },
        {
            id:2,
            title:'Another joke',
            content:'This is another joke'
            
        },
        {
            id:3,
            title:'third joke',
            content:'This is a third joke'
            
        },
        {
            id:4,
            title:'Fourth joke',
            content:'This is a fourth joke'
            
        },
        {
            id:5,
            title:'Fifth joke',
            content:'This is a fifth joke'
            
        },
    ];
    res.send(jokes);
})
app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT}`);
})
