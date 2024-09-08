const express = require('express')
const dotenv = require('dotenv')
const connectDb = require('./config/db')
const cors = require('cors')
const bodyParser = require('body-parser')


const app = express()
dotenv.config()
connectDb()
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())


const userRoutes = require('./Routes/userRoutes')
app.use('/api/user',userRoutes)

const chat_router = require('./Routes/chatRoute')
app.use('/api/chat',chat_router)

const messageRouter = require('./Routes/messageRoute')
app.use('/api/message',messageRouter)

const PORT = process.env.PORT || 5000
const server = app.listen(5000,()=>console.log("Port No at 5000"))


const io = require('socket.io')(server,{
    pingTimeout:60000,
    cors:{
        origin:"http://localhost:3000",
        methods:['GET','POST']
    }
})


io.on("connection",(socket)=>{
    console.log("connection to socket.io")

    socket.on('setup',(userData)=>{
        socket.join(userData._id)
        socket.emit('connected')
    })

    socket.on('join chat',(room)=>{
        socket.join(room)
        console.log("User joined")
    })

    socket.on('typing',(room)=>socket.in(room).emit('typing'))
    socket.on('stop typing',(room)=>socket.in(room).emit('stop typing'))
    
    socket.on('new message',(newMessageRecieved)=>{
        let chat = newMessageRecieved.chat

        if(!chat.users) return console.log("chat.user not defined")

        chat.users.forEach(user =>{
            if(user._id == newMessageRecieved.sender._id) return

            socket.in(user._id).emit('message recieved',newMessageRecieved)
        })
    })
    
    socket.off("setup",()=>{
        socket.leave(userData._id)
    })
})