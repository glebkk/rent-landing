
function Slider(slider) {
    const sliderDots = document.createElement("div")
    sliderDots.classList.add("slider-dots")
    for (let i = 0; i < slider.childElementCount; i++) {
        let dot = document.createElement("div")
        dot.classList.add("slider-dot")
        sliderDots.appendChild(dot)
    }
    sliderDots.children[0].classList.add("active")
    slider.parentElement.appendChild(sliderDots)
    let onePartWidth = slider.offsetWidth / slider.childElementCount
    slider.addEventListener('mousemove', function (event) {
        const offsetX = event.offsetX;
        let part = Math.abs(Math.floor(offsetX / onePartWidth))
        console.log(part)
        if(part === slider.childElementCount){
            part = slider.childElementCount - 1
        }
        slider.style.transform = `translateX(${-part * 100}%)`
        changeActive(part)
    });

    function changeActive(ind) {

        for (const dot of sliderDots.children) {
            dot.classList.remove("active")
        }
        sliderDots.children[ind].classList.add("active")
    }
}
const sliderElements = document.querySelectorAll('.slider');

for (var i = 0; i < sliderElements.length; i++) {
    Slider(sliderElements[i]);
}