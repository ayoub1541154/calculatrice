let ecran = document.querySelector(".ecran");
let groupBtn = document.querySelectorAll(".btn");

let listeBtn = Array.from(groupBtn);

listeBtn.forEach(el =>{
    el.addEventListener("click", ()=>{
        if (el.textContent === "AC"){
            ecran.textContent = 0
        }else if(el.textContent==="DEL"){
            if (ecran.textContent.length > 1) {
                ecran.textContent = ecran.textContent.slice(0, ecran.textContent.length - 1);
            }else{
                ecran.textContent = 0;
            }
            console.log(ecran.textContent.length);
            
        }else if(el.textContent==="="){
            ecran.textContent = eval(ecran.textContent)
        }else if(el.textContent==="%"){
            ecran.textContent = ecran.textContent/100
            
        }else{
            if(ecran.textContent == 0){
               ecran.textContent = el.textContent 
            }else{

                ecran.textContent += el.textContent
            }
        }
        //console.log(el.textContent);


    })
})



