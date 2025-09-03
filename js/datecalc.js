const currentYear = new Date().getFullYear();

const years = currentYear - 2017;

document.addEventListener("DOMContentLoaded", () => {
    const element = document.getElementById("art-experience");
    if(element){
        element.textContent = "I've been practicing digital art for ${years} years. Nice to meet you!";
    }
})