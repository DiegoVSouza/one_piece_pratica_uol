document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');
    const images = document.querySelectorAll('.bounty');
    const totalImages = images.length;
    let index = 0;

    const verifyNextImage = () => {
        if (index + 1 >= totalImages) 
            arrowRight.style.display = 'none';
        else
            arrowRight.style.display = 'block';

        if (index - 1 < 0) 
            arrowLeft.style.display = 'none';
        else
            arrowLeft.style.display = 'block';
    }
    const nextImage = () => {

        const nextValue = -index * 100 + '%';
        if(images[index - 1])
            images[index - 1].style.opacity = 0
        if(images[index + 1])
            images[index + 1].style.opacity = 0
        
        images[index].style.opacity = 1;
        carousel.style.transform = 'translateX(' + nextValue + ')';
    }

    const initPage = (images) => {
        images[index].style.opacity = 1
        verifyNextImage()
    }

    initPage(images);


    arrowLeft.addEventListener('click', function () {
        if (index > 0) {
            index--;
            verifyNextImage()
            nextImage();

        }
    });

    arrowRight.addEventListener('click', function () {
        if (index < totalImages - 1) {
            index++;
            verifyNextImage()
            nextImage();
        }
    });




});