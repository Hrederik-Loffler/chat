const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const { addUser, removeUser, getUser, getUserInRoom } = require('./users.js')


const PORT = process.env.PORT || 3000

const router = require('./router')


const app = express();

const server = http.createServer(app)


/* {
    cors: { origin: "*" }
} */
const io = socketio(server, {
    cors: { origin: "*" }
})


app.use(router)


io.on('connection', (socket) => {
    socket.on('join', ({ name, room }, callback) => {
        const { error, user } = addUser({ id: socket.id, name, room })

        //get with dynamically from user.js (user already taken...) by default
        if (error) return callback(error)

        //default message when a user got new connection
        socket.emit('message', { user: 'admin', text: `${user.name}, welcome to the room ${user.room}` } )
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name}, has joined!`})

        socket.join(user.room)

        callback()
    })

    //after event in frontend we can use this handel for work
    socket.on('sendMessage', ( message, callback ) => {
        const user = getUser(socket.id)

        io.to(user.room).emit('message', { user: user.name, text: message })

        //do smth after message was send in frontend
        callback()
    } )

    socket.on('disconnect', () => {
        console.log('disconnect')
    })
})
















// io.on('connection', (socket) => {
//     console.log('We have a new connection!..')
//
//     socket.on('join', ({ name, room }, callback) => {
//         console.log(name, room)
//
//         const error = true
//
//         if (error) {
//             callback({ error: 'error' })
//         }
//
//     })
//
//     socket.on('disconnect', () => {
//         console.log('User had left!');
//     })
// })


server.listen(PORT, () => {
    console.log(`Server has started on port  ${PORT}`)
});
