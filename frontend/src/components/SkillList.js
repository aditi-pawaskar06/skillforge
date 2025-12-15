const skillsList = document.getElementById('skills-list');

export function addSkillToList(skill) {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);

}