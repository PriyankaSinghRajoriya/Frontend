const addUddBtn = document.getElementById("btn");
const textField = document.getElementById("username");
const displayRecords = document.getElementById("records")
const btntxt = addUddBtn.innerText;

let userArray = [];
let edit_id = null;

let objstr = localStorage.getItem('users');
userArray = JSON.parse(objstr);

displayInfo();
addUddBtn.onclick = () => {
    const user = textField.value;
    if (edit_id != null) {
        // edit
        userArray.splice(edit_id, 1, { 'name': user })
        edit_id = null;
    }
    else {
        // insert

        userArray.push({ 'name': user })
    }

    saveInfo(userArray);
    textField.value = ' ';
   
    addUddBtn.innerText = btntxt;
}

function saveInfo(userArray) {
    let str = JSON.stringify(userArray)
    localStorage.setItem('users', str)
    displayInfo();
}


function displayInfo() {
    let statement = ' ';
    userArray.forEach((users, i) => {
        statement += ` <tr>
    <td>${i + 1}</td>
    <td>${users.name}</td>
    <td id="button">
        <button id="Edit" onclick="editInfo(${i})">Edit</button>
        <button id="Delete" onclick="deleteInfo(${i})">Delete</button>
    </td>
</tr>`

        displayRecords.innerHTML = statement;

    });
}


function editInfo(id) {
    edit_id = id;
    textField.value = userArray[id].name;
    addUddBtn.innerText = "Save Changes"
}

function deleteInfo(id) {
    userArray.splice(id, 1);
    saveInfo(userArray);
   
}