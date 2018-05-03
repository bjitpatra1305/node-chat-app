[{
  id: '/@eeeeee123444asd',
  name: 'Biswajit Patra',
  room: 'Office sucs'
}]

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   getUserDescription () {
//     return `${this.name} is ${this.age} years old.`;
//   }
// }
//
// var me = new Person("Biswajit", 25);
// var description = me.getUserDescription();
// console.log(description);

class Users {
  constructor() {
    this.users = [];
  }
  addUser (id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }
  removeUser (id) {
    var user = this.getUser(id);
    if (user) {
      this.users = this.users.filter((user) => user.id !== id )
    }
    return user;
  }
  getUser (id) {
    var user = this.users.filter((user) => user.id === id);
    return user[0];
  }
  getUserList (room) {
    var users = this.users.filter((user) => user.room === room);
    var namesArray = users.map((user) => user.name);
    return namesArray;
  }
}
module.exports = {Users};
