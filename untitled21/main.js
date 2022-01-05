
document.forms.publish.onsubmit = function() {
    let message = this.message.value;

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${message}&appid=1db8ff782e87fb04869d2bb62b829987`)
        .then(function (resp) {return resp.json() })
        .then(function (data){
            document.querySelector('.icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`
            document.querySelector('.city-name').innerHTML = data.name
            document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273) + '&deg'
            document.querySelector('.wind').innerHTML = data.weather[0]['description']


        })
    return false;
};





