const questions = document.querySelectorAll('.question')

questions.forEach((question) => {
    const btn = question.querySelector('.question-btn')

    btn.addEventListener('click', (event) => {

        questions.forEach((q) => {
            q.classList.remove('show-text')
        })

        question.classList.toggle('show-text')
    })
})