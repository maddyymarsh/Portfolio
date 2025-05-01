const header = document.querySelector("#sticky-parallax-header");
const navLinks = document.querySelectorAll(".navList");

header.style.position = 'fixed';
header.style.top = '0';
header.style.left = '0';
header.style.width = '100vw';
header.style.height = '100vh';

document.body.style.paddingTop = '100vh';

if ('ScrollTimeline' in window) {
    const maxScroll = 700;

    function updateAnimation() {
        const scrollProgress = Math.min(window.scrollY / maxScroll, 1); 

        header.style.backgroundPosition = `50% ${scrollProgress * 100}%`;
        header.style.height = `${100 - scrollProgress * 90}vh`;
        header.style.fontSize = `calc(${15 - scrollProgress * 12}vw)`;

        navLinks.forEach(link => {
            link.style.fontSize = `calc(${3 - scrollProgress * 2}vw)`;
        });
    }

    window.addEventListener("scroll", updateAnimation);
} else {
    console.warn("ScrollTimeline is not supported in this browser.");
}

//Image Project anims
// Select all images with class "imgProject"
var img = document.querySelectorAll(".imgProject");

img.forEach(image => {
    image.addEventListener("mouseenter", function () {
        img.forEach(otherImage => {
            if (otherImage !== this) {
                otherImage.classList.add("filter");
            }
        });
    });

    image.addEventListener("mouseleave", function () {
        img.forEach(otherImage => {
            otherImage.classList.remove("filter");
        });
    });
});
