document.addEventListener("DOMContentLoaded", function() {
    const darkModeButton = document.getElementById("darkModeButton");
    const body = document.body;
    let isDarkMode = false;

    darkModeButton.addEventListener("click", function() {
        isDarkMode = !isDarkMode;
        if (isDarkMode) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    });

    const swiper = new Swiper('.mon-slider', {
        loop: false,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // autoplay: {
        //     delay: 2000,
        //   },
    });
    let forms = document.querySelector('.forms')
        
    forms.addEventListener("click", function () {
        document.querySelector('.forms1').classList.toggle('open')
    })
    let form = document.querySelector('form')

form.addEventListener('submit', function (event) {
    event.preventDefault()

    let errorContainer = document.querySelector('.message-error')
    let errorList = document.querySelector('.message-error ul')
    let succesContainer = document.querySelector('.message-success')

    errorList.innerHTML=""
    errorContainer.classList.remove('visible')

    let email = document.querySelector('#email')
    if (email.value === ''){
        errorContainer.classList.add('visible')
        email.classList.remove('success')

        let err = document.createElement('li')
        err.innerText = "Aucun email"

        errorList.appendChild(err)
    } else {
        email.classList.add('success')
    }

    let pseudo = document.querySelector('#pseudo')
    if (pseudo.value.length < 6) {
        errorContainer.classList.add('visible')
        pseudo.classList.remove('success')

        let err = document.createElement('li')
        err.innerText = "Le pseudo ne fait pas minimun 6 caractères"

        errorList.appendChild(err)
    } else {
        pseudo.classList.add('success')
    }
    let passCheck = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
    )

    let password = document.querySelector('#password')
    if (password.value.length < 10 || passCheck.test(password.value) === false) {
        errorContainer.classList.add('visible')
        password.classList.remove('success')

        let err = document.createElement('li')
        err.innerText = "Le mot de passe ne fait pas minimun 10 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial"

        errorList.appendChild(err)
    } else {
        password.classList.add('success')
    }
    let passwordConfirm = document.querySelector('#password2')
    if ( password.value !== ''  && password.value !== passwordConfirm.value) {
        errorContainer.classList.add('visible')
        password.classList.remove('success')

        let err = document.createElement('li')
        err.innerText = "Les deux mots de passe ne sont pas identiques"

        errorList.appendChild(err)
    } else {
        passwordConfirm.classList.add('success')
    }
    if (!errorContainer.classList.contains('visible')){
        succesContainer.classList.add('visible')
    }
})

let tabs = document.querySelectorAll("li");
let div = document.querySelectorAll("content");

tabs.forEach(function(tab){
    tab.addEventListener("click", function(){
        document.querySelector(".tab-active").classList.remove("tab-active");
        document.querySelector(".div-active").classList.remove("div-active");

        this.classList.add("tab-active");

        if(this.classList.contains("tab-db")) {

            document.querySelector(".div-db").classList.add("div-active");
      
        }
        if(this.classList.contains("tab-op")) {

            document.querySelector(".div-op").classList.add("div-active");
      
        }

        if(this.classList.contains("tab-jjk")) {

            document.querySelector(".div-jjk").classList.add("div-active");
      
        }
        if(this.classList.contains("tab-bl")) {

            document.querySelector(".div-bl").classList.add("div-active");
      
        }

        if(this.classList.contains("tab-na")) {

            document.querySelector(".div-na").classList.add("div-active");
      
        }

        if(this.classList.contains("tab-hx")) {

            document.querySelector(".div-hx").classList.add("div-active");
      
        }

        if(this.classList.contains("tab-kny")) {

            document.querySelector(".div-kny").classList.add("div-active");
      
        }
    })
})
});
