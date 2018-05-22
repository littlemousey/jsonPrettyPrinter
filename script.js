function convertJSON () {
    let input = document.getElementById('input-field').value;
    input = JSON.parse(input);
    input = JSON.stringify(input, undefined, 4);
    document.getElementById('output-field').innerHTML = input;

}

function copyAll () {
    document.getElementById('output-field').select();
    document.execCommand('copy');
    document.getElementById('output-field').blur();

    let flashMessage = document.getElementById('flash-message');
    
    flashMessage.classList.remove('is-hidden');
    setTimeout(function() {
        flashMessage.classList.add('is-hidden');
    }, 2500);
}

function showFlashMessage() {
    let flashMessage = document.getElementById('flash-message');
    
    flashMessage.classList.add('is-hidden');
    setTimeout(function() {
        flashMessage.classList.remove('is-hidden');
    }, 2500);
}