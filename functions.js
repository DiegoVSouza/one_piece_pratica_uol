export const VerifyNextImage = (index, totalImages, arrowRight, arrowLeft) => {
    if (index + 1 >= totalImages)
        arrowRight.style.display = 'none';
    else
        arrowRight.style.display = 'block';

    if (index - 1 < 0)
        arrowLeft.style.display = 'none';
    else
        arrowLeft.style.display = 'block';
}
const OpacityNextImage = (index, images) => {
    if (images[index - 1])
        images[index - 1].style.opacity = 0
    if (images[index + 1])
        images[index + 1].style.opacity = 0
    images[index].style.opacity = 1;
}

export const changeSelected = (index, bountysArray, title, description)=>{
    if(bountysArray[index]){
        title.innerHTML  = bountysArray[index].title
        description.innerHTML  = bountysArray[index].description
    }
    else{
        title.innerHTML  = ""
        description.innerHTML  = ""
    }
    
}

export const NextImage = (index, carousel, images) => {
    const nextValue = -index * 100 + '%';
    OpacityNextImage(index, images)
    carousel.style.transform = 'translateX(' + nextValue + ')';
}

export const AjustBoatPosition = (boat) => {
    boat.style.bottom = 0
    boat.style.opacity = 0
    setTimeout(() => {
        boat.style.opacity = 1
        boat.style.bottom = "25%"
    }, 2000)
}

export const InitPage = (index, images, totalImages, arrowRight, arrowLeft) => {
    images[index].style.opacity = 1
    VerifyNextImage(index, totalImages, arrowRight, arrowLeft)
}

