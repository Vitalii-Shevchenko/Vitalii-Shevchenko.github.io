const API = "https://test-users-api.herokuapp.com/";
let users = [];
const container = document.querySelector('.users');
const newName = document.querySelector('#newUserName');
const newAge = document.querySelector('#newUserAge');
const create = document.querySelector('#createNewUser');
create.onclick = function(){
    createUser();

};

let buttonDelete;
let buttonChanged;


const getUsers = () => {
    return fetch(API + 'users')
        .then(res => res.json())
};

getUsers().then(res =>{
    users = res.data;
    console.log(users);
    showUsers();
});

function showUsers() {
    container.innerHTML = '';
    users.forEach((user) =>{
        const div = document.createElement('div');
        div.className = 'user';

        const inputName = document.createElement('input');
        inputName.className = 'inputName';
        inputName.defaultValue = user.name;

        const inputAge = document.createElement('input');
        inputAge.className = 'inputAge';
        inputAge.defaultValue = user.age;


        buttonDelete = document.createElement('button');
        buttonDelete.className = 'delete';
        buttonDelete.textContent = 'DELETE';
        buttonDelete.onclick = function () {
            deleteUser(user.id);
        };

        buttonChanged = document.createElement('button');
        buttonChanged.className = 'changed';
        buttonChanged.textContent = 'CHANGED';
        // buttonChanged.onclick = function () {
        //     // changedUser(user.id, user.name, user.age)
        // };

        container.append(div);
        div.append(inputName);
        div.append(inputAge);
        div.append(buttonDelete);
        div.append(buttonChanged);
    })
}

async function deleteUser(id) {
    await fetch(API + 'users/' + id, {
        method: 'DELETE'
    });
    users = users.filter((user) => user.id !== id);
    showUsers();
}


// async function changedUser(id, name, age) {
//     await fetch(API + 'users/' + id, {
//         method: 'PUT',
//         body: JSON.stringify(user),
//         headers: { 'Content-Type': 'application/json' }
//     });
//
//     showUsers();
// }


async function createUser() {
    const user = {
        name: newName.value,
        age: newAge.value
    };
    fetch(API + 'users', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: { 'Content-Type': 'application/json' }
    }).then((res) => {
        return res.json();
    })
        .then((data) => {
            user.id = data.id;
            users.unshift(user);
            showUsers();
        })
}