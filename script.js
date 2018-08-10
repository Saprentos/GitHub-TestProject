$(document).ready(function() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCtJcqiNa1cfnA0FH-phsbdgTjtdHLECmQ",
        authDomain: "saprentos-github-project.firebaseapp.com",
        databaseURL: "https://saprentos-github-project.firebaseio.com",
        projectId: "saprentos-github-project",
        storageBucket: "saprentos-github-project.appspot.com",
        messagingSenderId: "1019701600914"
    };
    firebase.initializeApp(config);

    // Получаем все элементы
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogout = document.getElementById('btnLogout');

    // Событие входа
    btnLogin.addEventListener('click', e =>  {
        //Получаем Емейл и Пароль
        const email = txtEmail.value;
        const  pass = txtPassword.value;
        const auth = firebase.auth();
        //Вход
        const  promise = auth.signInWithEmailAndPassword(email, pass);

        promise.catch(e => console.log(e.message));
    });

    //Событие регистрации
    btnSignUp.addEventListener('click', e =>{
        //Получаем Емейл и Пароль
        const email = txtEmail.value;
        const  pass = txtPassword.value;
        const auth = firebase.auth();
        //Регистрация
        const  promise = auth.createUserWithEmailAndPassword(email, pass);

        promise.catch(e => console.log(e.message));
    });

    //Прячем кнопку Выхода
    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
    });

    //Добавляем realtime Listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser){
            console.log(firebaseUser);
            btnLogout.classList.remove('hide');
            alert("Вы вошли в свой аккаунт!");
        }
        else {
            console.log('not loggeed in');
            btnLogout.classList.add('hide');
            alert("Вы вышли из аккаунта!");
        }
    });
});


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
        let oneWood = 0;
        function progressBar() {
            if (width >= widthMax) {
                oneWood += 1;
                clearInterval(setProgress);
            }
            else {
                width += 1;
                processBar.style.width = width + "%";
                processBar.textContent = width + "%";
            }
            document.getElementById('allWood').innerHTML = oneWood;
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
        let oneStone = 0;

        function progressBar() {
            if (width >= widthMax) {
                clearInterval(setProgress);
                oneStone +=1;
            }
            else {
                width += 1;
                processBar.style.width = width + "%";
                processBar.textContent = width + "%";
            }
            document.getElementById('allStone').innerHTML = oneStone;
        }
    }

