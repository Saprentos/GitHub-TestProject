
let setProgress;

function progress () {
    let processBar = document.querySelector(".progressBar");
    if (setProgress){
        clearInterval(setProgress);
        setProgress = null;
    }
    setProgress = setInterval(progressBar, 100);
    let width = 0;
    let widthMax = 100;

     let levelUpButton = document.getElementsByClassName('upgradingButton');
    function lvlUpButton() {

    }
       function progressBar() {
        if (width >= widthMax) {
            clearInterval(setProgress);
        } else {
            width += 1;
            processBar.style.width = width + "%";
            processBar.textContent = width + "%";
        }
    }
}