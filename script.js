    let setProgress;
function calc() {
     let wood;
     let stone;
     let result;
        wood = document.getElementById('allWood').value;
        wood = parseInt(wood);
        stone = document.getElementById('allStone').value;
        stone = parseInt(stone);
        result = wood + stone;
        document.getElementById('allMoney').innerHTML = result;
    }
    function woodProgress() {
        let processBar = document.querySelector(".woodProgressBar");
        if (setProgress) {
            clearInterval(setProgress);
            setProgress = null;
        }
        setProgress = setInterval(progressBar, 10);
        let width = 0;
        let widthMax = 100;
        function progressBar() {
            if (width >= widthMax) {
                clearInterval(setProgress);
            }
            else {
                width += 1;
                processBar.style.width = width + "%";
                processBar.textContent = width + "%";
            }
        }
    }

    function stoneProgress() {
        let processBar = document.querySelector(".stoneProgressBar");
        if (setProgress) {
            clearInterval(setProgress);
            setProgress = null;
        }
        setProgress = setInterval(progressBar, 25);
        let width = 0;
        let widthMax = 100;

        function progressBar() {
            if (width >= widthMax) {
                clearInterval(setProgress);
            }
            else {
                width += 1;
                processBar.style.width = width + "%";
                processBar.textContent = width + "%";
            }
        }
    }
