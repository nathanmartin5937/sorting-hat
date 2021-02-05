const students = [

];

const groupHouses = [
    
        'Hufflepuff',
        // imgUrl: 'https://wizardingwonders.com/wp-content/uploads/harry-potter-hogwarts-house-flag-banner.jpg'
    
        'Gryffindor',
        // imgUrl: 'https://wizardingwonders.com/wp-content/uploads/harry-potter-hogwarts-house-flag-banner.jpg'
    
        'Ravenclaw',
        // imgUrl: 'https://wizardingwonders.com/wp-content/uploads/harry-potter-hogwarts-house-flag-banner.jpg'
    
        'Slytherin',
    //     imgUrl: 'https://wizardingwonders.com/wp-content/uploads/harry-potter-hogwarts-house-flag-banner.jpg'

];

const printToDom = (divId, textToDom) => {
    const selectedForm = document.querySelector(divId);
    selectedForm.innerHTML = textToDom;
};

const hatBuilder = (taco) => {
    let studentDom = "";
    taco.forEach((item, i) => {
        studentDom += `<div id=${i} class="card">
              <div class="card-body">
                    <p class="cardText">${item.house}</p>
                    <p class="cardName">${item.name}</p>
                    <button type="button" id=${i} class="btn btn-primary" id="expelBtn">EXPELLED</button>
              </div>
            </div>`
    });

printToDom("#students", studentDom);
};

const handleBtnClick = (e) => {
    const btnId = e.target.id;
    if(btnId === "getStarted") {
        document.getElementById("infoForm").style.visibility = "visible"
    }        
};

const pullForm = (e) => {
    e.preventDefault();

    const name = document.querySelector("#student-name").value;
    const randomHouseGroup = Math.floor(Math.random() * groupHouses.length);
    const house = groupHouses[randomHouseGroup];

    const studentObject = {
    name,
    house,
};

const helpfulForm = () => {
    let reminder = `<p class="text-white">Name required.</p>`;
    printToDom('#requiredMessage', reminder);
  }
  if (name.length === 0) {
      helpfulForm();
  } else {
    students.push(studentObject);
  }

    hatBuilder(students);

    document.querySelector("form").reset();
};

const cardRemoval = (e) => {
    const targetType = e.target.type;
    const targetId = Number(e.target.id);
  
            if (targetType === "button") {
            const studentIndex = students.findIndex(
                (student) => student.id === targetId
            );
            students.splice(studentIndex, 1);
            }
  
    hatBuilder(students);
  };

const btnEvents = () => {
    document.querySelector("#getStarted").addEventListener("click", handleBtnClick);
    document.querySelector("#submitBtn").addEventListener("click", pullForm);
    document.querySelector("#students").addEventListener("click", cardRemoval);
};

const init = () => {
    btnEvents();
    hatBuilder(students);
  };
  
  init();