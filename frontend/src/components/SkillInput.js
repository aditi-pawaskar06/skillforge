import { renderSkills } from "./SkillList.js";

let skills = JSON.parse(localStorage.getItem("skills")) || [];

export function setupSkillInput() {
  const skillInput = document.getElementById("skill-input");
  const addSkillBtn = document.getElementById("add-skill-btn");

  function saveAndRender() {
    localStorage.setItem("skills", JSON.stringify(skills));
    renderSkills(skills, handleDelete, handleEdit);
  }

  function handleDelete(id) {
    skills = skills.filter(skill => skill.id !== id);
    saveAndRender();
  }

  function handleEdit(id, newName) {
    skills = skills.map(skill =>
      skill.id === id ? { ...skill, name: newName } : skill
    );
    saveAndRender();
  }

  renderSkills(skills, handleDelete, handleEdit);

  addSkillBtn.addEventListener("click", () => {
    const value = skillInput.value.trim();
    if (!value) return;

    skills = [...skills, { id: Date.now(), name: value }];
    
    saveAndRender();
    skillInput.value = "";
  });
}
