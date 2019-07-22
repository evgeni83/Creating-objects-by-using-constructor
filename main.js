'use strict';

var userList = new UserList();
var user;

do {

  var answer = prompt('Введите Ваши фамилию и имя:', 'Иванов Иван');

  if (answer) {
    user = new User(answer);
    userList.add();
  } else {
    userList.getAllUsers();
  };

} while (answer);



function UserList() {
  this.users = [];

  this.add = function () {
    this.users.push(user);
  };

  this.getAllUsers = function () {
    for (var index = 0; index < this.users.length; index++) {
      var userListItem = this.users[index];
      console.log(userListItem);
    }
  };
};


// Разделение строки на отдельные строки с именем и фамилией и создание объекта, имеющего свойства: имя, фамилия, текущее время

function User(userFullName) {
  this.lastName = getLastName();
  this.firstName = getFirstName();
  this.regDate = new Date();

  function getLastName() {
    var split = userFullName.split(' ');
    return split[0];
  };

  function getFirstName() {
    var split = userFullName.split(' ');
    return split[1];
  };
};