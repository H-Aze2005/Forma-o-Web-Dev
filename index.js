function addSkill(skill) {
    if (!skill) {
        return;
    }
    const skillList = document.getElementById('skillList');

    const newSkill = document.createElement('li');

    newSkill.textContent = skill;

    skillList.appendChild(newSkill);

    document.getElementById('skillInput').value = '';
}