import { renderSkills } from "./SkillList.js";

let skills = JSON.parse(localStorage.getItem("skills")) || [];

export function setupSkillInput() {
  const skillInput = document.getElementById("skill-input");
  const addSkillBtn = document.getElementById("add-skill-btn");

  renderSkills(skills);

  addSkillBtn.addEventListener("click", () => {
    const value = skillInput.value.trim();
    if (value == "") return;

    skills.push(value);
    localStorage.setItem("skills", JSON.stringify(skills));
    renderSkills(skills);

    skillInput.value = "";
  });
}
