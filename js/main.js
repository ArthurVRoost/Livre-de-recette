let card = document.querySelectorAll(".card")
card.forEach(card => {
    card.addEventListener("click",()=>{
        card.style.boxShadow = "10px 20px 5px rgb(0,0,0)"

    })
});

let cardbody = document.querySelectorAll(".card-body")
cardbody.forEach(card => {
    card.addEventListener("mouseover", ()=>{
        card.style.backgroundColor = "rgba(41, 40, 40, 0.33)"
        
    })
    
});