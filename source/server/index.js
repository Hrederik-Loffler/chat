// const express = require('express')
// const app = express()
// const http = require('http').createServer(app)
// const cors = require('cors')
//
// const io = require('socket.io')(http)
//
//
// app.use(cors)
//
// const PORT = process.env.PORT || 3000
//
//
// app.get('/', function (req, res, next) {
//     res.send('success');
// })
//
// http.listen(PORT, () => {
//     console.log(`Server has started on port  ${PORT}`)
// });
//
// const subscriber = require('redis').createClient({
//     host: 'laravel-react-redis',
//     port: 6379,
//     password: 'password'
// });
//
// io.on('connection', function(socket) {
//     subscriber.subscribe('chat')
// })
//
// subscriber.on('message', function(channel, message) {
//     io.emit('chat', message)
// })
//
//
// // const express = require('express')
// // const socketio = require('socket.io')
// // const http = require('http')
// // const { addUser, removeUser, getUser, getUsersInRoom, users } = require('./users.js')
// //
// // const app = express();
// // const PORT = process.env.PORT || 3000
// //
// // // const router = require('./router')
// // const server = http.createServer(app)
// // /* {
// //     cors: { origin: "*" }
// // } */
// // const io = socketio(server, {
// //     cors: { origin: "*" }
// // })
// // // //
// // app.use(router)
// // // //
// // // // io.on('connection', (socket) => {
// // // //     console.log('new connection')
// // // //
// // // //     socket.on('disconnect', () => {
// // // //         console.log('disconnect')
// // // //     })
// // // // })
// // //
// // // io.on('connection', (socket) => {
// // //     socket.on('join', ({ name, room }, callback) => {
// // //         const id = socket.it
// // //
// // //         // const { error, user } = addUser({ id:socket.id, name:name, room:room })
// // //         const { error, user } = addUser({ id:socket.id, name:name, room:room })
// // //
// // //         console.log(user)
// // //
// // //         //get with dynamically from user.js (user already taken...) by default
// // //         if (error) return callback(error);
// // //         socket.join(user.room)
// // //
// // //         //default message when a user got new connection
// // //         socket.emit('message', { user: 'admin', text: `${user.name}, welcome to the room ${user.room}` } )
// // //         socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name}, has joined!`})
// // //
// // //         io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
// // //
// // //         callback()
// // //
// // //         return user
// // //     })
// // //
// // //     //after event in frontend we can use this handel for work
// // //     socket.on('sendMessage', ( message, callback ) => {
// // //         const user = getUser(socket.id)
// // //         // const user = users[0][socket.id]
// // //
// // //         console.log(user)
// // //         return false
// // //
// // //         /*
// // //             console.log(users[0]['room'])
// // //             if (users[1] !== undefined) {
// // //                 console.log(users[1]['room'])
// // //             }
// // //          */
// // //
// // //         io.to(user.room).emit('message', { user: user.name, text: message })
// // //
// // //         //do smth after message was send in frontend
// // //         callback()
// // //     } )
// // //
// // //     socket.on('disconnect', () => {
// // //         console.log('DISCKONNECT...')
// // //     })
// // // })
// // // server.listen(PORT, () => {
// // //     console.log(`Server has started on port  ${PORT}`)
// // // });
