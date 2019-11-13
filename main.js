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

class User {
  constructor(name){
    this.name = name
    this.inbox = []
  }
  sendMessage(receiver, content){
    let msg = new Message(receiver, content)
    receiver.inbox.push(msg)
    return `Your message to ${receiver} has been sent`
  }
  readMessage(i) {
    return this.inbox[i].content
  }
}
class Message {
  constructor(receiver, content){
  this.receiver = receiver
  this.content = content
  }
}
let user1 = new User('nadira')
let user2 = new User ('dereck')
