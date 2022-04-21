const preloaderElement = document.querySelector('.preloader-container')
const switchBtn = document.querySelector('.switch-btn')
const videoEl = document.querySelector('.video-container')


window.addEventListener('load', () => {
    preloaderElement.classList.add('hidden')
})

switchBtn.addEventListener('click', (event) => {
    if(!switchBtn.classList.contains('slide')) {
        switchBtn.classList.add('slide')
        videoEl.pause()
    }

    else {
        switchBtn.classList.remove('slide')
        videoEl.play()
    }
})

