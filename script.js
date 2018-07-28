    let setProgress;
    function woodProgress() {
        let processBar = document.querySelector(".woodProgressBar");
        if (setProgress) {
            clearInterval(setProgress);
            setProgress = null;
        }
        setProgress = setInterval(progressBar, 100);
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
        setProgress = setInterval(progressBar, 250);
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
