// element to hold all items
// const container = document.getElementById("container");

// creates project when title is submitted
// let newProject = () => {
//     // create div for project and list items
//     const projectDiv = document.createElement('div');
//     projectDiv.className = "project";

//     // get project title input
//     const pInput = document.getElementById("projecttitle").value;
//     let projectTitle = document.createTextNode(pInput);
//     // put title of project in div
//     projectDiv.appendChild(projectTitle);

//     // create an unordered list for list items
//     const projectUl = document.createElement("ul");

//     // create list 
//     const list = (() => {
//         const li = document.createElement("li");
//         // create input for list item to add
//         let getListItem = document.createElement("input");
//         getListItem.id = "getListItem";
//         getListItem.placeholder = "Add a task to your list";
//         projectDiv.appendChild(getListItem);
//         // button to submit list item
//         const liButton = document.createElement("button");
//         liButton.textContent = "Add to list";
//         projectDiv.appendChild(liButton);
//         liButton.addEventListener("click", () => {
//             let liInput = getListItem.value;
//             let listItem = document.createTextNode(liInput);
//             projectUl.appendChild(listItem);
//             // clear input after adding to list
//             getListItem.value = '';
//         });
//     })();


//     projectDiv.appendChild(projectUl);
//     container.appendChild(projectDiv);
// }

// NEW CODE//
let projects = [];


class project {
    constructor(title, description, dueDate, priority, notes) {
        this.title = title,
            this.description = description,
            this.dueDate = dueDate,
            this.priority = priority,
            this.notes = notes
    }
}

const render = () => {
    projectsDiv.textContent = "";


    projects.forEach(project => {
        projectCard = document.createElement('div');
        projectCard.className = "projectcard";

        projectTitle = document.createElement('h2');
        projectTitle.textContent = project.title;
        projectCard.appendChild(projectTitle);

        projectDescription = document.createElement('p');
        projectDescription.textContent = `Description: ${project.description}`;
        projectCard.appendChild(projectDescription);

        projectDue = document.createElement('h4');
        projectDue.textContent = `Due: ${project.dueDate}`;
        projectCard.appendChild(projectDue);

        projectPriority = document.createElement('p');
        projectPriority.textContent = `Importance: ${project.priority}`;
        projectCard.appendChild(projectPriority);

        projectNotes = document.createElement('p');
        projectNotes.textContent = `Notes: ${project.notes}`;
        projectCard.appendChild(projectNotes);



        // all todo elements go into this div
        taskDiv = document.createElement('div');
        taskDiv.id = "taskdiv";
        projectCard.appendChild(taskDiv);

        // input and button go in this div
        inputDiv = document.createElement('div');
        inputDiv.id = "inputdiv";

        // create input to add task title
        inputTask = document.createElement("input");
        inputTask.id = "getListItem";
        inputTask.placeholder = "Add a task to your list";
        inputDiv.appendChild(inputTask);


        // button to submit task
        inputButton = document.createElement("button");
        inputButton.textContent = "Add to list";
        inputDiv.appendChild(inputButton);
        inputButton.addEventListener("click", () => {

            todos = [];

            task = document.createElement("div");
            task.id = "task";
            todos.push(task);

            // if input is empty, alert 
            taskTitle = inputTask.value;
            if (inputTask.value == "") {
                alert("You have to type something")
            } else {
                
                taskTitle = document.createTextNode(taskTitle);
                task.appendChild(taskTitle);
                taskDiv.appendChild(task);

                // clear input after adding to list
                inputTask.value = '';

                // checkbox for each item on list
                taskCheck = document.createElement('input');
                taskCheck.type = "checkbox";
                taskCheck.id = "check";
                task.appendChild(taskCheck)

                // remove button for each item on list
                removeTask = document.createElement('button');
                removeTask.id = 'removetask'
                removeTask.textContent = "X";
                task.appendChild(removeTask);

                

                removeTask.addEventListener('click', function () {
                    // task.remove();

                    // listItem.remove();
                    // newCheck.remove();
                    // removeB.remove();

                    const index = todos.indexOf(task);
                    if (index > -1) {
                        todos.splice(index, 1);
                    }
                    render()
                });
            }
        });


        taskDiv.appendChild(inputDiv);





        // label on check to complete task
        checkLabel = document.createElement('label');
        checkLabel.textContent = "Completed:";
        checkLabel.id = "checklabel"
        projectCard.appendChild(checkLabel);

        // check to complete task
        newCheck = document.createElement('input');
        newCheck.type = "checkbox";
        newCheck.id = "check";
        projectCard.appendChild(newCheck)

        newCheck.addEventListener('change', () => {
            // move project to completed folder
        })

        // remove project
        removeB = document.createElement('button');
        removeB.textContent = "Remove Project";
        removeB.id = "removeB";
        projectCard.appendChild(removeB);

        removeB.addEventListener('click', function () {
            const index = projects.indexOf(project);
            if (index > -1) {
                projects.splice(index, 1);
            }
            render()
        });

        projectsDiv.append(projectCard);
    })
}



let projectsDiv = document.getElementById('projectsdiv');
let form = document.querySelector("form");

// prevents submit button from reloading page when clicked
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);


form.onsubmit = function () {
    title = document.getElementById("projecttitle").value;
    description = document.getElementById("projectdescription").value;
    dueDate = document.getElementById("projectdue").value;
    priority = document.getElementById("projectpriority").value;
    notes = document.getElementById("projectnotes").value;

    newProject = new project(title, description, dueDate, priority, notes);
    projects.push(newProject);

    // reset dom
    render()

}


let newProjectButton = document.getElementById('newprojectbutton');
newProjectButton.id = "newprojectbutton";

form.style.visibility = "hidden";
newProjectButton.addEventListener("click", function () {
    const form = document.getElementById('form');

    if (form.style.visibility === 'hidden') {
        // shows form
        form.style.visibility = 'visible';
    } else {
        // hides form
        form.style.visibility = "hidden";
    }
});