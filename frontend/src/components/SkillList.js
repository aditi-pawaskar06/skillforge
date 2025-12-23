
export function renderSkills(skills, onDelete, onEdit) {
    const skillsList = document.getElementById('skills-list');
    skillsList.innerHTML = "";

    skills.forEach((skill)=>{
        const li = document.createElement("li");
        li.textContent = skill.name + " ";

        const editBtn = document.createElement("button");
        editBtn.textContent = "✏️";
        editBtn.addEventListener("click", () => {
            const newName = prompt("Edit skill:", skill.name);
            if(newName) onEdit(skill.id, newName);
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent  = "❌";
        deleteBtn.addEventListener("click", () => {
            onDelete(skill.id);
        });

        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        skillsList.appendChild(li);
    });  
}