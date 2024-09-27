

const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

let input = document.getElementById('input');
let password= document.getElementById('pass');
let btn = document.getElementById('btn');


registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

function addNewlogin(){
    let data = input.value;
    let pass=password.value;
    if(data.length ==' ' || pass.length==' '){
        window.alert("Please Enter Valid Data");
    }else{
        window.location.href="index.html"
    }
}

btn.addEventListener('click', function(event) {
    event.preventDefault();  // لمنع إعادة تحميل الصفحة
    addNewlogin();
});


btn.addEventListener('click',addNewlogin );









