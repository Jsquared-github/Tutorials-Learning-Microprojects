const input= document.getElementById('input-lbs');

const visibility = document.getElementById('output')

visibility.style.visibility = 'hidden'

input.addEventListener('input', function(e){
    let pounds = e.target.value;
    
    document.getElementById('grams').innerHTML = pounds/.0022046;

    document.getElementById('kilograms').innerHTML = pounds/ 2.2046;

    document.getElementById('ounces').innerHTML = pounds * 16;

    visibility.style.visibility = ''
});

