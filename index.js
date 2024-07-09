document.addEventListener("DOMContentLoaded", ()=> {

const socials = document.getElementById("show1");
const share = document.getElementById("icon-share");
const shared = document.getElementById("share1");
const pointer = document.getElementById("pointer");


share.addEventListener("click", ()=> {
    socials.style.display = "flex";
    share.style.display = "none";
    pointer.style.display = "block";
})

shared.addEventListener("click", ()=>{
    share.style.display = "flex";
    socials.style.display = "none";
    pointer.style.display = "none";
})
       
    
    
    
    
   
   
    
});


// document.addEventListener('DOMContentLoaded', () => {
//     const shareButton = document.getElementById('icon-share');
//     const authorDetails = document.getElementById('show0');
//     const socialLinks = document.getElementById('show1');

//     shareButton.addEventListener('click', () => {
//         authorDetails.classList.toggle('hidden');
//         socialLinks.classList.toggle('hidden');
//     });
// });

