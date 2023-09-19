const imageSlider = {

    getPic: function() {
        const pic = document.querySelector('.pictures');
        return pic;
    },

    getRightPx: function() {
        const rightpx = parseInt(window.getComputedStyle(this.getPic()).getPropertyValue('right').replace('px', ''));
        return rightpx;
    },

    setRightPx: function(px) {
        imageSlider.getPic().style.right = `${px}px`;
    },

    scrollRight: function() {
        let pix = imageSlider.getRightPx();
        if (pix !== 2400) {
            pix += 600;
            imageSlider.setRightPx(pix);
        } else {
            pix = 0;
            imageSlider.setRightPx(pix);
        };
        imageSlider.toggleActiveDot(pix);
    },

    scrollLeft: function() {
        let pix = imageSlider.getRightPx();
        if (pix !== 0) {
            pix -= 600;
            imageSlider.setRightPx(pix);
        } else {
            pix = 2400
            imageSlider.setRightPx(pix);
        };
        imageSlider.toggleActiveDot(pix);

        

    },

    leftRightButtons: function() {
        const pictureFrame = document.querySelector('.picture-frame-container');
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');
        const leftScrollButton = document.createElement('button');
        const leftScrollButtonArrow = document.createElement('img');
        leftScrollButtonArrow.setAttribute('src', './assets/chevron-left.svg');
        leftScrollButton.append(leftScrollButtonArrow);
        leftScrollButton.classList.add('arrow');

        const rightScrollButton = document.createElement('button');
        const rightScrollButtonArrow = document.createElement('img');
        rightScrollButtonArrow.setAttribute('src', './assets/chevron-right.svg');
        rightScrollButton.append(rightScrollButtonArrow);
        rightScrollButton.classList.add('arrow');

        buttonContainer.append(leftScrollButton, rightScrollButton);
        pictureFrame.append(buttonContainer);

        leftScrollButton.addEventListener(('click'), function() {
            imageSlider.scrollLeft();
        });
        rightScrollButton.addEventListener(('click'), function() {
            imageSlider.scrollRight();
        });
    },

    createNavigationDots: function() {
        const pictureFrame = document.querySelector('.picture-frame-container');
        const dotsContainer = document.createElement('div');
        dotsContainer.classList.add('dot-container');
        for (let i = 0; i < 5; i++) {
            const navDot = document.createElement('div');
            navDot.dataset.index = `${i}`;
            navDot.classList.add('dot');
            navDot.addEventListener(('click'), function() {
                console.log(this.dataset.index);
                let pix;
                switch (this.dataset.index) {
                    case '0':
                        pix = 0;
                        break;
                    case '1':
                        pix = 600;
                        break;
                    case '2':
                        pix = 1200;
                        break;
                    case '3':
                        pix = 1800;
                        break;
                    case '4':
                        pix = 2400;
                        break;
                };
                imageSlider.setRightPx(pix);
                imageSlider.toggleActiveDot(pix);


            })
            dotsContainer.append(navDot);
            pictureFrame.append(dotsContainer);
        };
        const dots = document.querySelectorAll('.dot');
        dots[0].classList.add('active');

    },

    toggleActiveDot: function(pix) {
        const activePic = imageSlider.getRightPx();
        const dots = document.querySelectorAll('.dot');
        const activeDot = document.querySelector('.active');
        activeDot.classList.remove('active');
        console.log(activePic);
        switch (pix) {
            case 0:
                dots[0].classList.add('active');
                break;
            case 600:
                dots[1].classList.add('active');
                break;
            case 1200:
                dots[2].classList.add('active');
                break;
            case 1800:
                dots[3].classList.add('active');
                break;
            case 2400:
                dots[4].classList.add('active');
                break;
        };
    },

    dotSwitchPic: function() {

    },


    slideshow: function() {
        slideshow = setInterval(() => {
            imageSlider.scrollRight();
         }, 3000);
    },

    pauseSlideShow: function() {
        clearInterval(slideshow);
    },
    
}




imageSlider.leftRightButtons();


imageSlider.createNavigationDots();

imageSlider.slideshow();

