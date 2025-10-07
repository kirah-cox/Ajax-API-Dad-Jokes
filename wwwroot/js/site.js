window.onload = function(){
    getDadJoke();
}

function getDadJoke(){
    let xhr = new XMLHttpRequest();
    let url = 'https://icanhazdadjoke.com';

    xhr.open('GET', url, true);
    
    xhr.setRequestHeader('Accept', 'application/json');

    xhr.onload = function () {
        $('#myButton').click(function() {
            if (xhr.status == 200){
    
                let data = JSON.parse(xhr.responseText);
    
                document.getElementById('result').innerHTML = `
                    <p>${data.joke}</p>
                `;
            }
            else {
                document.getElementById('result').innerHTML = 'Error: ' + xhr.status;
            }
        });
    }
    xhr.send();
}