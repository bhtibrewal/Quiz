const modeBtn = document.querySelector('.mode-btn');
const rootDoc = document.querySelector(':root');

const darkmode = () => {
    modeBtn.classList.remove("fa-moon");
    modeBtn.classList.add("fa-sun");

    rootDoc.style.setProperty("--quiz-bg", "#272a2c");
    rootDoc.style.setProperty("--primary-text", "#f1f1f1");
    rootDoc.style.setProperty("--light-bg", "#0e131f");
}
const lightmode = () => {
    modeBtn.classList.remove("fa-sun");
    modeBtn.classList.add("fa-moon");

    rootDoc.style.setProperty("--quiz-bg", "#dfe2eb");
    rootDoc.style.setProperty("--primary-text", "#2e2e2e");
    rootDoc.style.setProperty("--light-bg", "#fcfcfc");
}
modeBtn.addEventListener("click", () => {
    console.log(modeBtn.className);
    if (modeBtn.classList.contains("fa-moon")) {
        darkmode();
    }
    else {
        lightmode();
    }
}
)
