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
let todos = [];


class project {
    constructor(title, description, dueDate, priority, notes) {
        this.title = title,
            this.description = description,
            this.dueDate = dueDate,
            this.priority = priority,
            this.notes = notes
    }
}

class todo {
    constructor(task) {
        this.task = task
    }
}
// trying to fix contributions graph

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




        // create input to add list item
        let getListItem = document.createElement("input");
        getListItem.id = "getListItem";
        getListItem.placeholder = "Add a task to your list";

        const inputDiv = document.createElement('div');
        inputDiv.id = "inputdiv"
        inputDiv.appendChild(getListItem)
        // projectCard.appendChild(inputDiv);
        // button to submit list item
        const liButton = document.createElement("button");
        liButton.textContent = "Add to list";

        inputDiv.appendChild(liButton)
        projectCard.appendChild(inputDiv);
        liButton.addEventListener("click", () => {
            projectLi = document.createElement("div");
            projectLi.id = "listitem"
            // if input is empty, alert 
            let liInput = getListItem.value;
            if (getListItem.value == "") {
                alert("You have to type something")
            }
            let listItem = document.createTextNode(liInput);
            // listItem.id = "listitem";
            projectLi.appendChild(listItem);
            projectCard.appendChild(projectLi);
            // clear input after adding to list
            getListItem.value = '';

            // checkbox for each item on list
            newCheck = document.createElement('input');
            newCheck.type = "checkbox";
            newCheck.id = "check";
            projectLi.appendChild(newCheck)

            // remove button for each item on list
            removeB = document.createElement('button');
            removeB.id = 'removelistitem'
            removeB.textContent = "X";
            projectLi.appendChild(removeB);

            removeB.addEventListener('click', function () {
                projectLi.remove();

                // listItem.remove();
                // newCheck.remove();
                // removeB.remove();

                // const index = projectLi.indexOf(listItem);
                // if (index > -1) {
                //     projectLi.splice(index, 1);
                // }
                // render()
            });
        });





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

// const todoMaker = () => {
//     todos.forEach(todo => {
//         getListItem = document.createElement("input");
//         getListItem.id = "getListItem";
//         getListItem.placeholder = "Add a task to your list";

//         const inputDiv = document.createElement('div');
//         inputDiv.id = "inputdiv"
//         inputDiv.appendChild(getListItem)
//         // projectCard.appendChild(inputDiv);
//         // button to submit list item
//         const liButton = document.createElement("button");
//         liButton.textContent = "Add to list";

//         inputDiv.appendChild(liButton)
//         projectCard.appendChild(inputDiv);
//         liButton.addEventListener("click", () => {
//             projectLi = document.createElement("div");
//             projectLi.id = "listitem"
//             // if input is empty, alert 
//             let liInput = getListItem.value;
//             if (getListItem.value == "") {
//                 alert("You have to type something")
//             }
//             let listItem = document.createTextNode(liInput);
//             // listItem.id = "listitem";
//             projectLi.appendChild(listItem);
//             projectCard.appendChild(projectLi);
//             // clear input after adding to list
//             getListItem.value = '';

//             // checkbox for each item on list
//             newCheck = document.createElement('input');
//             newCheck.type = "checkbox";
//             newCheck.id = "check";
//             projectLi.appendChild(newCheck)

//             // remove button for each item on list
//             removeB = document.createElement('button');
//             removeB.id = 'removelistitem'
//             removeB.textContent = "X";
//             projectLi.appendChild(removeB);

//             removeB.addEventListener('click', function () {
//                 projectLi.remove(-1);

//                 // listItem.remove();
//                 // newCheck.remove();
//                 // removeB.remove();

//                 // const index = projectLi.indexOf(listItem);
//                 // if (index > -1) {
//                 //     projectLi.splice(index, 1);
//                 // }
//                 // render()
//             });

//         })
//     })
// }





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

    // title.value = '';

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