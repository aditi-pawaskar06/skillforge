const skillsList = document.getElementById('skills-list');

export function renderSkills(skills) {
    skillsList.innerHTML = "";

    skills.forEach((skill)=>{
        const li = document.createElement("li");
        li.textContent = skill;
        skillsList.appendChild(li);
    });  
}