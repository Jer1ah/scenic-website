//mobile nav dropdown functionality
const mobileNavController = (function() {
    const _menuIcon = document.querySelector(".menuIcon");
    const _closeIcon = document.querySelector(".closeIcon");
    const _menuList = document.querySelector(".navigation__list");
    const menuListStyles = window.getComputedStyle(_menuList);
    
    _menuIcon.addEventListener("click", () => {
        if(menuListStyles.getPropertyValue("display") === "none") {
            _menuList.style.display = "flex";
            _closeIcon.style.display = "inline-block";
            _menuIcon.style.display = "none";
        }
    });

    _closeIcon.addEventListener("click", () => {
       if(menuListStyles.getPropertyValue("display") === "flex") {
            _menuList.style.display = "none";
            _closeIcon.style.display = "none";
            _menuIcon.style.display = "inline-block";
       }
    });
}());


//making sure the navigation displays
const innerWidthController = (function() {
    window.onresize = () => {
        if(window.innerWidth > 995) {
            document.querySelector(".navigation__list").style.display = "flex";
            document.querySelector(".menuIcon").style.display = "none";
        } else {
            document.querySelector(".navigation__list").style.display = "none";
            document.querySelector(".menuIcon").style.display = "inline-block";
        }
    }
}());


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