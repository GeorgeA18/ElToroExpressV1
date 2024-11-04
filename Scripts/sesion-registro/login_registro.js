

const sigupForm = document.querySelector("#registro_form");
sigupForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const name_registro = document.querySelector("#name_registro").value;
    const email_registro = document.querySelector("#email_registro").value;
    const password_registro = document.querySelector("#password_registro").value;

    const Users = JSON.parse(localStorage.getItem("users")) || [];
    const isUserRegistrado = Users.find(user => user.email === email_registro);
    if(isUserRegistrado){
        return alert("El usuario ya esta registrado.");
    }
    Users.push({nombre: name_registro, email: email_registro, password: password_registro});
    localStorage.setItem("users", JSON.stringify(Users));
    alert("Registro Exitoso");
})