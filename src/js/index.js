window.addEventListener("mousemove", (e) => {
    const w = window.innerWidth / 2;
    const h = window.innerHeight / 2;

    const x = e.clientX;
    const y = e.clientY;

    const deltaX = w - x;
    const deltaY = h - y;

    const rad = Math.atan2(deltaY, deltaX);
    let deg = Math.round(rad * (180 / Math.PI));
    let degString = deg + "deg";

    let element = document.getElementById("cons");
    element.style.background = `-webkit-linear-gradient(${degString}, rgb(173, 139, 115), rgb(206, 171, 147))`;
    element.style.webkitBackgroundClip = 'text';
    element.style.webkitTextFillColor = 'transparent'
    console.log(deg + "deg")
});