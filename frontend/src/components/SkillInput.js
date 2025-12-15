import { addSkillToList } from "./SkillList.js";

const skillInput = document.getElementById("skill-input");
const addSkillBtn = document.getElementById("add-skill-btn");

export function setupSkillInput() {
  addSkillBtn.addEventListener("click", () => {
    const value = skillInput.value.trim();
    if (value == "") return;

    addSkillToList(value);
    skillInput.value = "";
  });
}
