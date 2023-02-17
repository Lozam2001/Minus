const filtresbox = document.querySelector(".filtresbox"),
arrowIcons = document.querySelectorAll(".icon i");

let isDragging = false;

const handleIcons = () => {
    let scrollVal = Math.round(filtresbox.scrollLeft);
    let maxScrollableWidth = filtresbox.scrollWidth - filtresbox.clientWidth;
    arrowIcons[0].parentElement.style.display = scrollVal > 0 ? "flex" : "none" ;
    arrowIcons[1].parentElement.style.display = maxScrollableWidth > scrollVal ? "flex" : "none" ;

}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        filtresbox.scrollLeft += icon.id === "left" ? -350 : 350;
        setTimeout(() => handleIcons(),50);
    });
});

const dragging = (e) => {
    if(!isDragging) return;
    filtresbox.classList.add("dragging");
    filtresbox.scrollLeft -= e.movementX;
}

const dragStop = () => {
    isDragging = false;
    filtresbox.classList.remove("dragging");
 }

filtresbox.addEventListener("mousedown",() => isDragging = true );
filtresbox.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);