// a user needs to be able to send messages
//messages need to be stored somewhere
//read to be able to read individual messages

//classes stast with a capital letter
// 95% of the time are singular in

// let inbox = []
// class Message{
//   constructor(content){
//   this.content = content
//   inbox.push(this)
//   }
// }
// let  msg1 =  new Message('This is the first message')
// let  msg2 =  new Message('This is the second message')

// any object based on a class is called an instance
// an instance represents one object based on the class name


// a user needs to be able to send messages
//messages need to be stored with the user they belong to
//read to be able to read individual messages

// user.inbox --> that person's messages

const Conversations = []

class Conversation {
  constructor() {
    this.id = Conversations.length + 1
    this.messages = []
    this.users = []
  }
  add(user) {
    this.users.push(user)
  }
}



class User {
  constructor(name){
    this.name = name
    this.inbox = []
    this.blockedUser = []
  }
  block(user){
    this.blockedUser.push(user)
  }
  sendMessage(convo, content){
    // if (convo.blockedUser.includes(this)) return 'You have been blocked '
    let msg = new Message( content)
    convo.inbox.push(msg)
    return `Your message to ${receiver} has been sent`
  }
  readMessage(i) {
    this.inbox[i].seen = true
    this.inbox[i].seenAt = new Date()
    return this.inbox[i].content
  }
  unreadMessages(){
    let unread = []
    for (let msg of this.inbox){
      if (msg.seen === false){
        unread.push(msg)
        console.log(msg.content)
      }
    }
    return unread
  }
}

readMessages() {
  let read = []
  for (let msg of this.inbox){
    if (msg.seen === true){
      read.push(msg)
      console.log(msg.content)
    }
  }
  return read
}

class Message{
  constructor(convo, content){
  this.convo = convo
  this.content = content
  this.seen = false
  this.seenAt = null
  }
}
let user1 = new User('nadira')
let user2 = new User ('dereck')
