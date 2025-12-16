import { renderSkills } from "./SkillList.js";

let skills = [];
export function setupSkillInput() {
  const skillInput = document.getElementById("skill-input");
  const addSkillBtn = document.getElementById("add-skill-btn");

  addSkillBtn.addEventListener("click", () => {
    const value = skillInput.value.trim();
    if (value == "") return;

    skills.push(value);
    renderSkills(skills);

    skillInput.value = "";
  });
}
