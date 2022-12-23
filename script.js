let projects = [];


class Project {
    constructor(title, description, dueDate, priority, notes) {
        this.title = title,
            this.description = description,
            this.dueDate = dueDate,
            this.priority = priority,
            this.notes = notes,
            this.complete = false,
            this.tasks = []
    }
}

class Task {
    constructor(title) {
        this.title = title,
            this.dueDate = new Date(),
            this.complete = false
    }
}

const render = () => {
    $projectsDiv.textContent = "";


    projects.forEach(project => {


        if (project.complete == true) {
            // append to done div
            // const $completedFolder = document.createElement('div');
            // $completedFolder.classList = "completedfolder";
            // $completedFolder.textContent = "Completed Projects";
            // $completedFolder.appendChild(project);
                
        } else {
            // append to not done div

        }

        const $projectCard = document.createElement('div');
        $projectCard.className = "projectcard";

        const $titleCheckDiv = document.createElement('div');
        $titleCheckDiv.id = "titlecheckdiv";

        // check to complete task
        const $newCheck = document.createElement('input');
        $newCheck.type = "checkbox";
        $newCheck.classList = "check";
        $newCheck.checked = project.complete;
        $titleCheckDiv.appendChild($newCheck)

        $newCheck.addEventListener('change', () => {
            project.complete = !project.complete;
        })


        // const $completedFolder = document.createElement('div');
        // $completedFolder.classList = "completedfolder";
        // $completedFolder.textContent = "Completed Projects";

        // const index = projects.indexOf(project);
        // if (index > -1) {
        //     let completed = projects.splice(index, 1);
        //     $completedFolder.appendChild(completed);
        // }

        // $projectsDiv.appendChild($completedFolder);
        // 

        const $projectTitle = document.createElement('h2');
        $projectTitle.textContent = project.title;
        $titleCheckDiv.appendChild($projectTitle)
        $projectCard.appendChild($titleCheckDiv);

        const $projectDescription = document.createElement('p');
        $projectDescription.textContent = `Description: ${project.description}`;
        $projectCard.appendChild($projectDescription);

        const $projectDue = document.createElement('h4');
        $projectDue.textContent = `Due: ${project.dueDate}`;
        $projectCard.appendChild($projectDue);

        const $projectPriority = document.createElement('p');
        $projectPriority.textContent = `Importance: ${project.priority}`;
        $projectCard.appendChild($projectPriority);

        const $projectNotes = document.createElement('p');
        $projectNotes.textContent = `Notes: ${project.notes}`;
        $projectCard.appendChild($projectNotes);

        // Render all todo's here
        const $taskDiv = document.createElement('div');
        $taskDiv.id = "taskdiv";
        $projectCard.appendChild($taskDiv);


        // input and button go in this div
        let $inputDiv = document.createElement('div');
        $inputDiv.id = "inputdiv";

        // create input to add task title
        let $inputTask = document.createElement("input");
        $inputTask.id = "getListItem";
        $inputTask.placeholder = "Add a task to your list";
        $inputDiv.appendChild($inputTask);


        // button to submit task
        const $inputButton = document.createElement("button");
        $inputButton.textContent = "Add to list";
        $inputDiv.appendChild($inputButton);
        $taskDiv.appendChild($inputDiv);



        // 
        $inputButton.addEventListener("click", () => {
            // DO NOT RENDER STUFF HERE (do not push/append html to the dom = render) => ONLY THE render() FUNCTION IS ALLOWED TO DO THAT
            // Only modify logic => re-render page
            let taskTitle = $inputTask.value;
            console.log("Task Title", taskTitle);

            if ($inputTask.value == "") {
                alert("Empty tasks cannot be submitted.")
            } else {
                const newTask = new Task(taskTitle);
                // console.log("Task", newTask);

                // On update of Model => Must re-render
                project.tasks.push(newTask);
                render();
            }

        })

        // ===========================================================
        // task stuff
        // ===========================================================


        // Render Tasks
        // Model =(representing model in view)=> Viewing
        project.tasks.forEach(taskObj => {

            console.log("render tasks", taskObj)

            // 1) make parent div
            const $taskContainer = document.createElement('div');
            $taskContainer.classList = "taskcontainer";

            // 2) make html elements for taskObj properties
            let $taskComplete = document.createElement("input");
            $taskComplete.type = "checkbox";
            $taskComplete.checked = taskObj.complete;
            $taskComplete.addEventListener('change', () => {
                taskObj.complete = !taskObj.complete;
            })

            let $taskTitle = document.createElement("h4");
            $taskTitle.textContent = taskObj.title;

            let $taskDate = document.createElement("h6");
            $taskDate.id = "taskdate";
            $taskDate.textContent = ` Due: ${taskObj.dueDate}`;

            let $removeTask = document.createElement("button");
            $removeTask.textContent = "X";
            $removeTask.addEventListener("click", () => {
                const index = project.tasks.indexOf(taskObj);
                if (index > -1) {
                    project.tasks.splice(index, 1);
                }
                render()
            })

            // 3) append the html elements from #2 to #1
            $taskContainer.appendChild($taskComplete);
            $taskContainer.appendChild($taskTitle);
            $taskContainer.appendChild($taskDate);
            $taskContainer.appendChild($removeTask);
            // 4) append #1 (parent div) to project
            $projectCard.appendChild($taskContainer);
        })


        // remove project
        const $removeB = document.createElement('button');
        $removeB.textContent = "Remove Project";
        $removeB.id = "removeB";
        $projectCard.appendChild($removeB);

        $removeB.addEventListener('click', function () {
            const index = projects.indexOf(project);
            if (index > -1) {
                projects.splice(index, 1);
            }
            render()
        });

        $projectsDiv.append($projectCard);
    })

}



let $projectsDiv = document.getElementById('projectsdiv');
let $form = document.querySelector("form");

// prevents submit button from reloading page when clicked
function handleForm(event) { event.preventDefault(); }
$form.addEventListener('submit', handleForm);


form.onsubmit = function () {
    const title = document.getElementById("projecttitle").value;
    const description = document.getElementById("projectdescription").value;
    const dueDate = document.getElementById("projectdue").value;
    const priority = document.getElementById("projectpriority").value;
    const notes = document.getElementById("projectnotes").value;

    const newProject = new Project(title, description, dueDate, priority, notes);
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

function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

if (storageAvailable('localStorage')) {
    // Yippee! We can use localStorage awesomeness
    console.log("bean");
  }
  else {
    // Too bad, no localStorage for us
  }