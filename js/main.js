const serviceListAnimation = (function() {
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