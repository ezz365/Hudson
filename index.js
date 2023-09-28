const username = document.getElementById("username")
const password = document.getElementById("password")
const login = document.getElementById("login")

login.addEventListener("click", (e)=>{
    e.preventDefault()
    const data = {
        username: username.value,
        password: password.value
    }

    console.log(data)
})