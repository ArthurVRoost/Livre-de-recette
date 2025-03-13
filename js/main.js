let card = document.querySelectorAll(".card")
card.forEach(card => {
    card.addEventListener("click",()=>{
        card.style.boxShadow = "10px 20px 5px rgb(0,0,0)"

    })

let img = card.querySelector(".card-img-top")
    img.addEventListener("dblclick", () =>{
        card.remove();
    })

})

let cardBody = document.querySelectorAll(".card-body")
cardBody.forEach(card => {
    card.addEventListener("mouseover", ()=>{
        card.style.backgroundColor = "rgba(41, 40, 40, 0.33)"
        
    });
    
});
cardBody.forEach(card => {
    card.addEventListener("mouseout", ()=>{
        card.style.backgroundColor="white"
        
    })
    
});


