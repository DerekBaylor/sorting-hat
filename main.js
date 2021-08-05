

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
            <div id="entryError"></div> 
            <div id="submitBlock"> 
                <div id=formId class="mb-3"?>
                    <label for="Student" class="sorting-form"> Student </label>
                    <input required type="text" class="sorting-form" placeholder="Luna Lovegood" value="${studentObject.studentName || ""}" id="stdName">
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
                        <div class="col-md-4" id="hseColorBlock">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                              <h5 id="studentName" class="card-title">${student.studentName}</h5>
                              <h5 id="studentHouse" class="card-body">${student.studentHouse}</h5>
                              <button type="button" class="btn btn-danger btn-expel" id=delete--${i} >Expel!</button>
                            </div>
                        </div>
                    </div>
                </div>`;
        renderToDom("#studentArrayBody", cardString);  
        document.querySelector("#stdCard").addEventListener("click", expelStudent);
    });
    
};

const houseArray = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

const randomHouse = () => {
    const chosenHouse = houseArray[Math.floor(Math.random() * houseArray.length)];
    return chosenHouse;
};

const formSubmit = (event) =>{
    event.preventDefault();
    const newStudent = {
        studentName: document.querySelector("#stdName").value,
        studentHouse: randomHouse (),
    };
    studentArray.push(newStudent);
    studentCard(studentArray);
    document.forms["studentForm"].reset();
};

const deathEaterCardBlock = () => {
    const cardString = `
        <div class="card peopleCards" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">He Who Shall Not Be Named's Army</h5>
            </div>
            <div id="voldyArmy"></div>
            <div> ${anyDeathEaters()} </div>
        </div>
    `;
    renderToDom("#deathEaterBlock", cardString);
   
};

const anyDeathEaters = () => {
    if (deathEaterArray > 0 ){
        return "";
    }else {
       return "No Death Eaters... yet." 
    }
}

const deathEaterArray = [];



// const expelStudent = (event) => {
//     event.preventDefault();
//     const newTraitor = {
//         studentName: 
//     }
//             studentArray.splice(event.target.id,1)[0];
//             studentArray.push(deathEaterArray.splice()[0]);
//             traitorCard();
// }         




const traitorCard = (vldCardArray) => { 
    let cardString = "";
    vldCardArray.forEach((traitor, i) => {
        cardString += `  
            <div class="card" style="width: 18rem;">
                <img src="https://static.wikia.nocookie.net/harrypotter/images/d/d4/Death_Eaters_WBST.png/revision/latest?cb=20161205041948" class="card-img-top" alt="3 death eaters with wands">
                <div class="card-body">
                <h5 id="studentName" class="card-title">${traitor.studentName}</h5>
                </div>
            </div>`

        renderToDom("#voldyArmy", cardString);
    })
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