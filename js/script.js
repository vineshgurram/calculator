const allButton = document.querySelectorAll(".btn");
const clickSound = document.getElementById('clickSound');

allButton.forEach(function (button) {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        clickSound.play();
        allButton.forEach(function (btn) {
            btn.classList.remove('active');
        });
        this.classList.add('active');
    })
});