const students = [
    {
        name: 'Ryan',
        groupHouse: 'Hufflepuff',
        Age: 18,
        imgUrl: 'https://www.irishtimes.com/polopoly_fs/1.3170107.1501253408!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg'
    },
    {
        name: 'Andrew',
        groupHouse: 'Gryffindor',
        Age: 20,
        imgUrl: 'https://www.irishtimes.com/polopoly_fs/1.3170107.1501253408!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg'
    },
    {
        name: 'Kaily',
        groupHouse: 'Ravenclaw',
        Age: 21,
        imgUrl: 'https://www.irishtimes.com/polopoly_fs/1.3170107.1501253408!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg'
    },
    {
        name: 'Nathan',
        groupHouse: 'Slytherin',
        Age: 20,
        imgUrl: 'https://www.irishtimes.com/polopoly_fs/1.3170107.1501253408!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg'
    } 
];

const groupHouses = [
    {
        name: 'Hufflepuff',
        imgUrl: 'https://wizardingwonders.com/wp-content/uploads/harry-potter-hogwarts-house-flag-banner.jpg'
    },
    {
        name: 'Gryffindor',
        imgUrl: 'https://wizardingwonders.com/wp-content/uploads/harry-potter-hogwarts-house-flag-banner.jpg'
    },
    {
        name: 'Ravenclaw',
        imgUrl: 'https://wizardingwonders.com/wp-content/uploads/harry-potter-hogwarts-house-flag-banner.jpg'
    },
    {
        name: 'Slytherin',
        imgUrl: 'https://wizardingwonders.com/wp-content/uploads/harry-potter-hogwarts-house-flag-banner.jpg'
    } 
];
// A function to select the inerr html (form, id)
const printToDom = (divId, textToDom) => {
    const selectedForm = document.querySelector(divId);
    selectedForm.innerHTML = textToDom;
};
// A function to handle the "get started" btn click to target the form html

const cardBuilder = (e) => {
    let studentDom = "";
    e.forEach((item, i) => {
     
        studentDom += `<div id=${i} class="card">
              <div class="card-body">
                    <p class="cardText">${item.groupHouse}</p>
                    <p class="cardName">${item.name}</p>
                    <button type="btn" id=${i} class="btn btn-primary" id="expelBtn">EXPELLED</button>
              </div>
            </div>`
    });
printToDom("#cardContainer", studentDom);
};

const handleBtnClick = (e) => {
    const btnId = e.target.id;
    if(btnId === "getStarted") {
        document.getElementById("infoForm").style.visibility = "visible"
    }        
};

// selecting btn id adding click event listener 
const pullForm = (e) => {
    e.preventDefault();

    const name = document.querySelector("#student-name").value;
    const randomHouseGroup = Math.floor(Math.random() * groupHouses.length);
    const houseGroup = groupHouses[randomHouseGroup];

    const studentObject = {
    name,
    houseGroup,
};

    students.push(studentObject);
    cardBuilder(students);

    document.querySelector("infoForm").reset = "";
};

const cardRemoval = (e) => {
    const targetType = e.target.type;
    const targetId = Number(e.target.id);
  
            if (targetType === "btn") {
            const studentIndex = students.findIndex(
                (student) => student.id === targetId
            );
            students.splice(studentIndex, 1);
            }
  
    cardBuilder(students);
  };

const btnEvents = () => {
    document.querySelector("#getStarted").addEventListener("click", handleBtnClick);
    document.querySelector("#submitBtn").addEventListener("click", pullForm);
    document.querySelector("#students").addEventListener("click", cardRemoval);
};

// created a function to handle all btn events 

const init = () => {
    btnEvents();
    cardBuilder(students);
  };
  
  init();


// make objects
// push obj pass array

