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

let newsletter = document.querySelector(".letter")
newsletter.addEventListener("click",()=>{
    alert("Tu es inscrit a la Newsletter")
})


let bouton = document.querySelectorAll(".btn")
bouton[0].addEventListener("click", ()=>{
    window.location.href ="./pages/pageCarpaccio.html"
});

bouton[1].addEventListener("click", ()=>{
    window.location.href ="./pages/pageCroquettes.html"
});

bouton[2].addEventListener("click", ()=>{
    window.location.href ="./pages/pageTomates.html"
});