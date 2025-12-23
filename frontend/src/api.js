const STORAGE_KEY = "skills"

export function getSkills() {
    return JSIN.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function saveSkills(skills) {
localStorage.setItem(STORAGE_KEY, JSON.stringify(skills));
}