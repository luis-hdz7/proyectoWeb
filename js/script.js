const btn = document.querySelector(".theme")
const icon = btn.querySelector(".changeTheme")
btn.addEventListener("click",()=>{
    document.body.classList.toggle('dark-mode')
    icon.classList.toggle("fa-sun")
    icon.classList.toggle("fa-moon")
})