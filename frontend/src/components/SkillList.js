
export function renderSkills(skills, onDelete) {
    const skillsList = document.getElementById('skills-list');
    skillsList.innerHTML = "";

    skills.forEach((skill, index)=>{
        const li = document.createElement("li");
        li.textContent = skill + " ";

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", () => {
            onDelete(index);
        });

        li.appendChild(deleteBtn);
        skillsList.appendChild(li);
    });  
}