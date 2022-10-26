const questions = document.querySelectorAll('.questions-answers');

questions.forEach(function(question){
    const btn = question.querySelector('.question-btn');
    btn.addEventListener("click", function(){
        questions.forEach(function(item) {
            if (item !== question){
                item.classList.remove("show-text")
            }
        })
        question.classList.toggle("show-text");
    })
})
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
