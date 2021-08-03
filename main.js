// const houseArray = [
//     {
//         studentName: "studentNameFunction",
//         house: "Gryfindoor",
//         imageURL: "red",
//     },
//     {
//         studentName: "studentNameFunction",
//         house: "Hufflepuff",
//         imageURL: "yellow",
//     },
//     {
//         studentName: "studentNameFunction",
//         house: "Ravenclaw",
//         imageURL: "blue",
//     },
//     {
//         studentName: "studentNameFunction",
//         house: "Slytherin",
//         imageURL: "green",
//     },
//     {
//         studentName: "studentNameFunction",
//         house: "deathEater",
//         imageURL: "black",
//     }
// ];
// const studentArray =[

// ],
// const deathEaterArray = [

// ],

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
        <a id = "btnStartSorting" class="btn btn-Sorting btn-primary">Start Sorting</a>
    </div>`;

    renderToDom("#titleBlock", cardString);
};

const studentSortingForm = () =>{
    const formString = `
        <form id="studentForm">
            <div id="formTitle"><h3>Enter First Year's Name</h3></div>
            <div id="entryError"></div> 
            <div id="submitBlock"> 
                <div id=formId class="mb-3"?>
                    <label for="Student" class="sorting-form"> Student </label>
                    <input type="text" class="sorting-form" placeholder="Luna Lovegood">
                </div>
                
                <button type="submit" class="btn btn-Sorting btn-primary sorting-form">Submit</button>
            </div>
        </form>
    `;

    // change to call renderToDom on click
    renderToDom("#formBlock", formString);
};



const firstYearCardBlock = () => {
    const cardString = `
    <div class="card peopleCards">
        <div class="card-body">
            <h5 class="card-title">First Year's</h5>
        </div>
    </div>
    `;

    renderToDom("#studentBlock", cardString);
};

const deathEaterCardBlock = () => {
    const cardString = `
    <div class="card peopleCards">
    <div class="card-body">
      <h5 class="card-title">He Who Shall Not Be Named's Army</h5>
    </div>
  </div>
    `;
    // need to add function for "No Death Eaters...yet"


    renderToDom("#deathEaterBlock", cardString);
};

// Student Card
//         <div class="card mb-3" style="max-width: 540px;">
//         <div class="row g-0">
//             <div class="col-md-4">
//             <img src="..." class="img-fluid rounded-start" alt="...">
//             </div>
//             <div class="col-md-8">
//             <div class="card-body">
//                 <h5 class="card-title">Card title</h5>
//                 <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                 <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//             </div>
//             </div>
//         </div>
//         </div>
        
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


const init = () => {
    headingBlock ();                  
    firstYearCardBlock ();
    deathEaterCardBlock ();


     studentSortingForm (); //delete this!!!
};

init();