const modeBtn = document.querySelector('.mode-btn');
const rootDoc = document.querySelector(':root');

const darkmode = () => {
    modeBtn.classList.remove("fa-cloud-moon");
    modeBtn.classList.add("fa-cloud-sun");

    rootDoc.style.setProperty("--quiz-bg", "#272a2c");
    rootDoc.style.setProperty("--primary-text", "#f1f1f1");
    rootDoc.style.setProperty("--light-bg", "#0e131f");
}
const lightmode = () => {
    modeBtn.classList.remove("fa-cloud-sun");
    modeBtn.classList.add("fa-cloud-moon");

    rootDoc.style.setProperty("--quiz-bg", "#dfe2eb");
    rootDoc.style.setProperty("--primary-text", "#2e2e2e");
    rootDoc.style.setProperty("--light-bg", "#fcfcfc");
}
modeBtn.addEventListener("click", () => {

    if (modeBtn.classList.contains("fa-cloud-moon")) {
        darkmode();
    }
    else {
        lightmode();
    }
}
)
