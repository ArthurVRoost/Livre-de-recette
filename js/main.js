let card = document.querySelectorAll(".card")
card.forEach(card => {
    card.addEventListener("click",()=>{
        card.style.boxShadow = "10px 20px 5px rgb(0,0,0)"

    })
});