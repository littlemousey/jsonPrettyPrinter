function convertJSON () {
    let input = document.getElementById('input-field').value;
    try {
        input = JSON.parse(input);
        input = JSON.stringify(input, undefined, 4);
        document.getElementById('output-field').innerHTML = input;
    }
    catch(error) {
        alert('Something seems to be wrong with the input JSON. Check the console log for more info');
        console.log(error);
    }


}

function copyAll () {
    if (document.getElementById('output-field').value !== "") {
        document.getElementById('output-field').select();
        document.execCommand('copy');
        document.getElementById('output-field').blur();
    
        let flashMessage = document.getElementById('flash-message');
        
        flashMessage.classList.remove('is-hidden');
        setTimeout(function() {
            flashMessage.classList.add('is-hidden');
        }, 2500);
        
        if (document.getElementById('error-message').classList.length < 1) {
            document.getElementById('error-message').classList.add('is-hidden');  
        }
    } else {
        document.getElementById('error-message').classList.remove('is-hidden');
    }

}