//opens the document and add an event listener to the whole document
//event type is submit

document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault(); //prevent default actions on the event

    let taskInput = document.getElementById('taskInput'); // it gets the the input by a specific ID
    let taskText = taskInput.value.trim(); //these functions get the value and trims the spaces, and assign it to a variable

    //checks a boolean if it's true. the function continues. and it has no return type because it's void.
    if (taskText) {
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(taskText) {
    let taskList = document.getElementById('taskList');

    let listItem = document.createElement('li');

    let taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskSpan.addEventListener('click', function() {
        listItem.classList.toggle('completed');
    });

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(listItem);
    });

    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);
}
