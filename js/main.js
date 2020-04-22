//service list item slide up animation
const serviceListAnimationController = (function() {
    const _serviceList = document.querySelector(".mainServices__list");
    _serviceList.addEventListener("mouseover", () => {
        if(event.target.tagName === "LI") {
            console.log("in");
        }
    });
    _serviceList.addEventListener("mouseout", () => {
        if(event.target.tagName === "LI") {
            console.log("out");
        }
    });
}());


//portfolio nav active link functionality
const portfolioActiveLinkController = (function() {
    const _navigation = document.querySelector("ul.mainPortfolio__navList");
    const _navigationLinks = document.querySelectorAll(".mainPortfolio__navListItem");
    _navigation.addEventListener("click", (event) => {
        if(event.target.tagName === "LI") {
            _navigationLinks.forEach((item) => {
                item.classList.remove("active");
            });
            event.target.classList.add("active");
        }
    });
}());