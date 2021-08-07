const renderToDom = (divId, textToPrint) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = textToPrint;
  };

const headingBlock = () => {
    const cardString = `  
    <div id = "headingBlockCard" class="card-header">
        <h1>Welcome to Hogity Hog Warts</h1>
        <p>All students get sorted into a house that best suits their personalities, goals, and personal styles.</p>
        <hr>
        <h3 class="card-title">Let us begin sorting!</h3>
        <button type="button" id="btnStartSorting" class="btn btn-Sorting btn-primary">Start Sorting</button>
    </div>`;

    renderToDom("#titleBlock", cardString);
};

const printSortingForm = (studentObject = {}) => {
    const formString = `
        <form id="studentForm">
            <div id="formTitle"><h3>Enter First Year's Name</h3></div>
            <div id="errorText"></div> 
            <div id="submitBlock"> 
                <div id=formId class="mb-3"?>
                    <label for="Student" class="sorting-form"> Student </label>
                    <input required type="text" class="sorting-form" placeholder="Luna Lovegood" value="${studentObject.studentName || ""}" id="stdName"/>
                </div>
                <button type="submit" id="btnNewStudent" class="btn btn-Sorting btn-primary sorting-form">Sort</button>
            </div>
        </form>
    `;
    renderToDom("#formBlock", formString);
    document.querySelector("#btnNewStudent").addEventListener("click", formSubmit);
};

const firstYearCardBlock = () => {
    const cardString = `
    <div class="card peopleCards" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">First Year's</h5>
        </div>
        <div id="studentArrayBody"></div>
    </div>
    `;
    renderToDom("#studentBlock", cardString);
};

const studentArray = [];

const studentCard = (stdCardArray) => { 
    let cardString = "";
    stdCardArray.forEach((student, i) => {

        cardString += ` 
                <div id="stdCard" class="card mb-3" style="width: 18rem;">
                    <div class="row g-0">
                        <div class="col-md-4" id="hseColorBlock" style="background-color: ${student.houseColor}"></div>
                        <div class="col-md-8">
                            <div class="card-body">
                              <h5 id="studentName" class="card-title">${student.studentName}</h5>
                              <h5 id="studentHouse" class="card-body">${student.studentHouse}</h5>
                              <button type="expelButton" id=delete--${i} class="btn btn-danger btn-expel" >Expel!</button>
                            </div>
                        </div>
                    </div>
                </div>`;

    });
    
    renderToDom("#studentArrayBody", cardString); 
    
    stdCardArray.forEach((_, i) => {
        document.querySelector(`#delete--${i}`).addEventListener("click", expelStudent);
    });
};

hseColor = (studentHouse) => {
    if (studentHouse === "Gryffindor"){
        return "red";
    }
    if (studentHouse === "Hufflepuff"){
        return "yellow";
    }
    if (studentHouse === "Ravenclaw"){
        return "blue";
    }
    if (studentHouse === "Slytherin"){
        return "green";
    }
}

const houseArray = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

const randomHouse = () => {
    const chosenHouse = houseArray[Math.floor(Math.random() * houseArray.length)];
    return chosenHouse;
};

const formSubmit = (event) =>{
    event.preventDefault();
    const nameEntry = document.querySelector("#stdName").value;
    let errorMessage = `Please enter a valid name.`

    if (nameEntry === '' || nameEntry=== null){
        renderToDom("#errorText", errorMessage);
    }

    else{
        const house = randomHouse();
        errorMessage = "";
        const newStudent = {
            studentName:  nameEntry,         
            studentHouse: house,
            houseColor: hseColor(house),
        };
        studentArray.push(newStudent);
        studentCard(studentArray);
        renderToDom("#errorText", errorMessage);        
    }
    document.forms["studentForm"].reset();
};


const deathEaterCardBlock = () => {
    const cardString = `
        <div class="card peopleCards" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">He Who Shall Not Be Named's Army</h5>
            </div>
            <div id="voldyArmy">${anyDeathEaters()} </div>
        </div>
    `;
    renderToDom("#deathEaterBlock", cardString);
};


const anyDeathEaters = () => {
       return "No Death Eaters... yet." 
    }

const deathEaterArray = [];

const traitorCard = (vldCardArray) => { 
    let cardString = "";
    vldCardArray.forEach((traitor) => {
        cardString += `  
            <div class="card" style="width: 18rem;">
                <img src="data:image/jpeg;base64,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" class="card-img-top" alt="3 death eaters with wands">
                <div class="card-body">
                <h5 id="studentName" class="card-title">${traitor.studentName}</h5>
                </div>
            </div>`
    })
    renderToDom("#voldyArmy", cardString);
}

const expelStudent = (event) => {
    const targetId = event.target.id;
    deathEaterArray.push(studentArray.splice(targetId,1)[0]);
    studentCard(studentArray);
    traitorCard(deathEaterArray);
}

  const btnClicks = (event) => {
    if (event.target.id === "btnStartSorting"){
        printSortingForm();    
    }
};

  const btnEvents = () => {
    document.querySelector("#btnStartSorting").addEventListener("click", btnClicks);
  };

const init = () => {
    headingBlock ();                  
    firstYearCardBlock ();
    deathEaterCardBlock ();
    studentCard (studentArray);
    btnEvents ();
};

init();