const studentArray = [];
const deathEaterArray = [];
const houseArray = ["Gryffindor", "Hufflepuff", "Ravenclar", "Slytherin"]

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
        <a id="btnStartSorting" class="btn btn-Sorting btn-primary">Start Sorting</a>
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
                    <input type="text" class="sorting-form" placeholder="Luna Lovegood" value="${studentObject.studentName || ""}" id="stdName">
                </div>
                <button type="submit" id="btnNewStudent" class="btn btn-Sorting btn-primary sorting-form">Sort</button>
            </div>
        </form>
    `;

    renderToDom("#formBlock", formString);
};

const firstYearCardBlock = () => {
    const cardString = `
    <div class="card peopleCards">
        <div class="card-body">
            <h5 class="card-title">First Year's</h5>
        </div>
        <div id="studentArrayBody"></div>
    </div>
    `;

    renderToDom("#studentBlock", cardString);
};

const studentCard = (stdCardArray) => { 
    let CardString = "";
    stdCardArray.forEach((student) => {
        CardString += ` 
            <div class="card mb-3">
                <div class="card-body">
                    <h5 id="studentName" class="card-title">${student.studentName}</h5>
                    <h5 id="studentHouse" class="card-body">${student.studentHouse}</h5>
                </div>
                <a type="button" class="btn btn-danger" id="btnExpel">Expel!</a>
            </div>`;
 });
 console.log(studentArray);
    renderToDom("#studentArrayBody", studentArray);
};

const chosenHouse = () => {

};

const hseColor = () => {

};

const newStudentSubmit = (event) =>{
    event.preventDefault();

const newStudent = {
        studentName: document.querySelector("#stdName").value,
        studentHouse: chosenHouse,
        houseColor: hseColor,
};
    studentArray.push(newStudent);


}

const newStudentEvent = () => {
    const stduentElement = document.querySelector("#btnNewStudent");
    stduentElement.addEventListener("submit", newStudentSubmit); 
};





const deathEaterCardBlock = () => {
    const cardString = `
    <div class="card peopleCards" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">He Who Shall Not Be Named's Army</h5>
    </div>
  </div>
    `;
    // need to add function for "No Death Eaters...yet"


    renderToDom("#deathEaterBlock", cardString);
};


//         Death Eater Card
//         </div>/
//         <div class="card" style="width: 18rem;">
//           <img src="..." class="card-img-top" alt="...">
//           <div class="card-body">
//             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//           </div>
//         </div>
//     )
//     }


  const btnClicks = (event) => {
      if (event.target.id === "btnStartSorting"){
        printSortingForm();    
      }
    //   else if (event.target.id === "btnNewStudent"){
    //     studentCard(studentArray);
    //   }
      else {
        console.log(null);
      }
  };

  const btnEvents = () => {
      document.querySelector("#btnStartSorting").addEventListener("click", btnClicks);
      document.querySelector("#btnNewStudent").addEventListener("submit", btnClicks);
  };


const init = () => {
    headingBlock ();                  
    firstYearCardBlock ();
    deathEaterCardBlock ();

    
    btnEvents ();
    newStudentEvent ();
};

init();