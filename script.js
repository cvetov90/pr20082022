document.addEventListener('DOMContentLoaded', function () {
    var content = document.getElementById('content');

    // Создание кнопок
    var button_signin = document.createElement("button");
    button_signin.innerHTML = "Вход";

    var button_reg = document.createElement('button');
    button_reg.innerHTML = "Регистрация";

    var select_button = document.getElementById('select_button');
    select_button.appendChild(button_signin);
    select_button.appendChild(button_reg);  

    // Добавление событий на кнопки
    button_signin.addEventListener('click', function () {
        select_button.innerHTML = "";
        content.appendChild(BuildForm.login_textbox());
        content.appendChild(BuildForm.password());
        content.appendChild(BuildForm.submit_btn())
    })

    button_reg.addEventListener('click', function () {
        select_button.innerHTML = "";
        content.appendChild(BuildForm.login_textbox());
        content.appendChild(BuildForm.email());
        content.appendChild(BuildForm.password());
        content.appendChild(BuildForm.retype_password());
        content.appendChild(BuildForm.submit_btn())
        // alert('регистрация');
    })

    let BuildForm = {
        'login_textbox': function () {
            return HTMLDefaultTags.input('login', 'text', 'login');
        },

        'email': function () {
            return HTMLDefaultTags.input('email', 'email', 'email');
        },

        'password': function () {
            return HTMLDefaultTags.input('password','password', 'password')
        },

        'retype_password': function () {
            return HTMLDefaultTags.input('password','password', 'retype_password')
        },

        'submit_btn': function () {
            let submit_btn = HTMLDefaultTags.button('Отправить', 'submit', 'submit');
            return submit_btn;
        }
    }

    let HTMLDefaultTags = {
        'button': function (title, name, type = "submit") {
            let btn = document.createElement('button');
            btn.name = name;
            btn.innerText = title;
            btn.type = type;

            return btn;
        },

        'input': function (name, type = "", placeholder = "") {
            let input = document.createElement('input');
            input.placeholder = placeholder;
            input.name = name;
            input.type = type;

            return input;
        },

        // 'email': function (name, type = "email") {
        //     let email  = documentcr
        // }


    }

    // content.appendChild(BuildForm.login_textbox());
    // content.appendChild(BuildForm.submit_btn());
})

// document.appendChild(BuildForm);

/*
    // Создание кнопок


 */



// document.getElementById('select_button') = function() {
    // document.getElementById('select_button').innerHTML = "<button>Вход</button>"
    // document.getElementById('select_button').innerHTML = "<button>Регистрация</button>"
// };