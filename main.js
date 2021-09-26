function saveToLocalStorage(event){
    event.preventDefault();
        const name = event.target.username.value;
        const email = event.target.emailId.value;
        const phonenumber = event.target.phonenumber.value;
       
        const obj = {
            name,
            email,
            phonenumber
        }
        axios.post("https://crudcrud.com/api/d7b6b5927e6745d09201fd709626a695/AppoinmentData", obj)
            .then((response) => {
                showNewUserOnScreen(response.data)
                console.log(response)
            })
            .catch((err) => {
                console.log(err)
            })

        // localStorage.setItem(obj.email ,JSON.stringify(obj));
        // showNewUserOnScreen(obj);
    
}

function showNewUserOnScreen(user){
    const parentNode = document.getElementById('listOfUsers');
    const childHTML = `<li id=${user.email}> ${user.name} - ${user.email} 
                      <button onclick=deleteUser('${user.email}')> Delete User
                      </li>`

    parentNode.innerHTML = parentNode.innerHTML + childHTML; 
}

function deleteUser(emailId){
    console.log(emailId)
    localStorage.removeItem(emailId);
    removeUserFromScreen(emailId);
}

function removeUserFromScreen(emailId){
    const parentNode = document.getElementById('listOfUsers');
    const childNodeToBeDeleted = document.getElementById(emailId);

    parentNode.removeChild(childNodeToBeDeleted);
}