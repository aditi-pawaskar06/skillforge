// select DOM elements
const skillInput = document.getElementById('skill-input');
const addSkillBtn = document.getElementById('add-skill-btn');
const skillsList = document.getElementById('skills-list');

// handle button click
addSkillBtn.addEventListener("click", ()=>{
    const value = skillInput.value.trim();

    if(value == "") return;
    // create list item
    const li = document.createElement("li");
    li.textContent = value;
    skillsList.appendChild(li);

    // clear input field
    skillInput.value = "";
})
