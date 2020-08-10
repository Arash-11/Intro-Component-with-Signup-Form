const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

let inputs = document.querySelectorAll('.form-wrapper input');

document.querySelector('.btn').addEventListener('click', () => {
    inputs.forEach(item => {
        if (item.value === '') {
            showError(item);
        }
        if (item === 'input.email' && item.value !== regex) {
            showError(item);
        }
    });
});

// Prevent "invalid" event from triggering and showing browser pop-up.
// useCapture MUST be true. If false, the event ('e') will be prevented in the bubbling phase, but by
// then the e will still run in the capturing phase of the event propagation.
document.addEventListener('invalid', (e) => {
    e.preventDefault();
}, true);


function showError(element) {
    let className = element.className;
    document.querySelector(`.error-msg-${className}`).style.display = 'block';

    element.classList.add('icon-error');
}