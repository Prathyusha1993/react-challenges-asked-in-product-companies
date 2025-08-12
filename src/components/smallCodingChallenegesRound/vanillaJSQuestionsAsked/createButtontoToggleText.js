// HTML file lo:

// <button id='toggleButton'>Toggle Text</button>
// <p id='myText' style='disply:none;'>This text will be toggled.</p>


document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const myText = document.getElementById('myText');

    toggleButton.addEventListener('click', function() {
        if(myText.style.display === 'none') {
            myText.style.display = 'block';
        }else{
            myText.style.display = 'none';
        }
    })
})