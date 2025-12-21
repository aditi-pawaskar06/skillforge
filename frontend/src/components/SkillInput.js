import { renderSkills } from "./SkillList.js";

let skills = JSON.parse(localStorage.getItem("skills")) || [];

export function setupSkillInput() {
  const skillInput = document.getElementById("skill-input");
  const addSkillBtn = document.getElementById("add-skill-btn");

  function handleDelete(index) {
    skills = skills.filter((_, i) => i !== index);
    localStorage.setItem("skills", JSON.stringify(skills));
    renderSkills(skills, handleDelete);
  }

  renderSkills(skills, handleDelete);

  addSkillBtn.addEventListener("click", () => {
    const value = skillInput.value.trim();
    if (value == "") return;

    skills = [...skills, value];
    localStorage.setItem("skills", JSON.stringify(skills));
    renderSkills(skills, handleDelete);

    skillInput.value = "";
  });
}
