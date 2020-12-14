const express = require('express')
const server = require('http').createServer(express)
const io = require('socket.io')(server)
const mongoose = require('mongoose')

const PORT = process.env.PORT || 3000

const app = express()

// app.use('/user', require('./api/users.js'))
// app.use('/galery', require('./api/galery.js'))

async function start () {
  try {
    await mongoose.connect(
      'mongodb+srv://admin:admin@cluster0-9hxqm.mongodb.net/user',
      {
        useNewUrlParser: true,
        useFindAndModify: false
      }
    )
    app.listen(PORT, () => {
      console.log('Server has been started...')
    })
  } catch (e) {
    console.log(e)
  }
}

start()

// io.on('connection', (socket) => {
//   // socket.on('createUser', (user) => {
//   //   usersDB.addUser({
//   //     ...user,
//   //     id: socket.id
//   //   })
//   //   const userNiow = new Users({
//   //     username: user.name
//   //   })
//   //   userNiow.save()
//   //   return { id: socket.id }
//   // })
//   //
//   // socket.on('joinRoom', ({ name, room }) => {
//   //   socket.join(room)
//   //   io.to(room).emit('updateUsers', usersDB.getUsersByRoom(room))
//   //   socket.emit('newMessage', new Message('admin', `Hello, ${name}`))
//   //   socket.broadcast
//   //     .to(room)
//   //     .emit(
//   //       'newMessage',
//   //       new Message('admin', `User ${name} connected to chat`)
//   //     )
//   // })
//   //
//   // socket.on('createMessage', ({ id, msg }) => {
//   //   const gg = Users.find({})
//   //   console.log(gg)
//   //   const user = usersDB.getUser(id)
//   //   if (user) {
//   //     io.to(user.room).emit('newMessage', new Message(user.name, msg, id))
//   //   }
//   // })
//   //
//   // const exitEvents = ['leftChat', 'disconnect']
//
//   exitEvents.forEach((event) => {
//     socket.on(event, () => {
//       const id = socket.id
//       const user = usersDB.getUser(id)
//       if (!user) { return }
//       const { room, name } = user
//       usersDB.removeUser(id)
//       socket.leave(room)
//       io.to(room).emit('updateUsers', usersDB.getUsersByRoom(room))
//       io.to(room).emit(
//         'newMessage',
//         new Message('admin', `User ${name} left chat`)
//       )
//     })
//   })
// })

module.exports = {
  app,
  server
}
