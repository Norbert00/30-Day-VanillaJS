document.addEventListener("DOMContentLoaded", function () {
    console.log("Hello World!");

    let secondHand = document.querySelector(".second-hand")
    let minHand = document.querySelector(".min-hand");
    let houerHand = document.querySelector(".hour-hand");

    function setDate() {
        const now = new Date();
        // second
        const second = now.getSeconds();
        const secondDegrees = ((second / 60) * 360) + 90;
        secondHand.style.transform = `rotate(${secondDegrees}deg)`

        // minuts
        const minutes = now.getMinutes();
        const minutsDegrees = ((minutes / 60) * 360) + 90;
        minHand.style.transform = `rotate(${minutsDegrees}deg)`

        // houer
        const hour = now.getHours();
        const hourDegrees = ((hour / 12) * 360) + 90;
        houerHand.style.transform = `rotate(${hourDegrees}deg)`;
    }
    setInterval(setDate, 1000);

});