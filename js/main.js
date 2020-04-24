//portfolio nav active link functionality
const portfolioActiveLinkController = (function() {
    const _navigation = document.querySelector("ul.mainPortfolio__navList");
    const _navigationLinks = document.querySelectorAll(".mainPortfolio__navListItem");
    _navigation.addEventListener("click", (event) => {
        if(event.target.tagName === "LI") {
            _navigationLinks.forEach((item) => {
                item.classList.remove("navActive");
            });
            event.target.classList.add("navActive");
        }
    });
}());


//portfolio image slider functionality 
const imageSlideController = (function() {
    const _images = document.querySelectorAll(".mainPortfolio__image");
    const _navigation = document.querySelector(".mainPortfolio__navList");
    _navigation.addEventListener("click", (event) => {
        _images.forEach((item) => {
            if(event.target.innerHTML === "WEB" && item.classList[1] === "web") {
                item.style.display = "none";
            } else if(event.target.innerHTML === "DESIGN" && item.classList[1] === "design") {
                item.style.display = "none";
            } else if(event.target.innerHTML === "BRAND" && item.classList[1] === "brand") {
                item.style.display = "none";
            } else {
                item.style.display = "block";
            }
        });
    });
}());