document.addEventListener("DOMContentLoaded", function () {
    console.log("Hello World");

    const inputs = document.querySelectorAll(".controls input");

    function update() {
        const set = this.dataset.sizing || "";
        document.documentElement.style.setProperty(`--${this.name}`, this.value + set);
    }

    inputs.forEach(input => input.addEventListener("change", update));

});