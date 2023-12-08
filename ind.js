const t=document.querySelector(".toggle")
const links=document.querySelector(".navlinks")
t.addEventListener('click',function(){
    links.classList.toggle('active')
    console.log(links)
})