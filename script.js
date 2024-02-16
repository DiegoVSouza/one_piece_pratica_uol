import { InitPage, AjustBoatPosition, NextImage, VerifyNextImage, changeSelected  } from './functions.js'
import { bountysArray } from './bountys.js'

document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');
    const images = document.querySelectorAll('.bounty');
    const boat = document.getElementById('boat');

    const title = document.getElementById('selected-bounty-title');
    const description = document.getElementById('selected-bounty-description');

    const totalImages = images.length;
    let index = 0;

    AjustBoatPosition(boat)
    console.log(boat)
    InitPage(index, images, totalImages, arrowRight, arrowLeft);
    changeSelected(index, bountysArray, title, description)

    arrowLeft.addEventListener('click', function () {
        if (index > 0) {
            index--;
            VerifyNextImage(index, totalImages, arrowRight, arrowLeft)
            NextImage(index, carousel, images);
            changeSelected(index, bountysArray, title, description)
        }
    });

    arrowRight.addEventListener('click', function () {
        if (index < totalImages - 1) {
            index++;
            VerifyNextImage(index, totalImages, arrowRight, arrowLeft)
            NextImage(index, carousel, images);
            changeSelected(index, bountysArray, title, description)
        }
    });

});