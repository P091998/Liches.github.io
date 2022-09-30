let registers=document.getElementById('registers');

registers.addEventListener('click',registerYourSelf);

function registerYourSelf()
{
    registers.style.display="none";
    let form=document.getElementById('form');
    form.style.display="block";
    
    let reload=document.getElementById('reload');
    reload.style.display="block";

    let text=document.getElementById('text');
    text.innerText="Enter your details and click on submit to register yourself";
}

// let button=document.querySelectorAll('button');

// button.forEach(function(btn){
//     btn.addEventListener('click',function(e)
//     {
//         if(e.target.class=='dashboard')       
//         {   
//     `<a href="https://lichess.org/@/DASHBOARD" </a>`
//     `<form action="https://lichess.org/@/DASHBOARD">`
//             btn.innerHTML="https://lichess.org/@/DASHBOARD";
//         }
//         else if(e.target.class=='tournament')       
//         {   
//             btn.innerHTML="https://lichess.org/tournament";
//         }
//         else if(e.target.class=='training')       
//         {   
//             btn.innerHTML="https://lichess.org/training";
//         }
//         else if(e.target.class=='practice')   
//         {
//             btn.innerHTML="https://lichess.org/practice";
//         }
//     })
// })