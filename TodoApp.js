const addUserBtn = document.getElementById('addUser');
const textField = document.getElementById('username');
const displayRecords = document.getElementById('records');
const btntxt = addUserBtn.innerText;
let userArray = [];
let edit_id = null;

let objstr = localStorage.getItem('users');
userArray = JSON.parse(objstr);



displayDetails()
addUserBtn.onclick = () => {

    const user = textField.value;
    if(edit_id!=null)
    {
        // edit
        userArray.splice(edit_id,1,{ 'name': user });
        edit_id = null;
    }
    else
    {
        // insert
       
    userArray.push({ 'name': user });
    }
    
    saveDetails(userArray);
    displayDetails();
    textField.value = '';
    addUserBtn.innerText = btntxt;

}

function saveDetails(userArray) {
    let str = JSON.stringify(userArray);
    localStorage.setItem('users', str);
}


function displayDetails() {
    let statement = '';
    userArray.forEach((users, i) => {
        statement += ` <tr>
       <th scope="row">${i + 1}</th>
       <td>${users.name}</td>
       <td>
           <i class="btn text-white fa fa-edit btn-info mx-3" onclick="editDetails(${i})"></i>
           <i class="btn text-white fa fa-trash-o btn-danger" onclick="deleteDetails(${i})"></i>
       </td>

   </tr>`

        displayRecords.innerHTML = statement;

    });
}


function editDetails(id) {
edit_id = id;
textField.value = userArray[id].name;
addUserBtn.innerText = "Save Changes";
}


function deleteDetails(id) {
    userArray.splice(id, 1);
    saveDetails(userArray);
    displayDetails();
}