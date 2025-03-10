let taskElement = document.getElementById("task");
console.log(taskElement.innerText);

let newDiv = document.createElement('div');
newDiv.className = 'task-div';
let newContent = document.createElement('ul');
newContent.className = 'task-list';
newDiv.appendChild(newContent);
document.body.appendChild(newDiv);

function addTask(str) {
    if(str==''){
        return;
    }
    //create child elements
    let listItem = document.createElement('li');
    let listCheckItem = document.createElement('input');
    listCheckItem.setAttribute('type', 'checkbox');
    let checkLabel = document.createElement('label');
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'delete';

    let uniqueId = 'checkbox-'+Date.now();
    listCheckItem.setAttribute('id',uniqueId);
    checkLabel.setAttribute('for',uniqueId);

    listCheckContent = document.createTextNode(str);
    //append child elements to parent
    checkLabel.appendChild(listCheckContent);

    listItem.appendChild(listCheckItem);
    listItem.appendChild(checkLabel);
    listItem.appendChild(deleteBtn);
    newContent.insertBefore(listItem, newContent.firstChild);

    deleteBtn.onclick = () => {listItem.remove()}
    clearInput();
}

function clearInput() {
    document.getElementById('task').value = '';
}
