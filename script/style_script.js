function getTime() {
    let now = new Date(),
        hour = now.getHours();

    return hour
}

function setGreetings(time) {
    let greetings = document.getElementById("greetings");
    let wrapper = document.getElementById("wrapper");

    if (time >= 0 && time < 6) {
        greetings.textContent = '...good night';
        greetings.style.color = "white";
        wrapper.style.backgroundImage = "url('images/night.jpg')";
    } else if (time >= 6 && time < 12) {
        greetings.textContent = '...good morning';
        wrapper.style.backgroundImage = "url('images/morning.jpg')";
    } else if (time >= 12 && time < 18) {
        greetings.textContent = '...good afternoon';
        wrapper.style.backgroundImage = "url('images/noon.jpg')";
    } else if (time >= 18 && time < 24) {
        greetings.textContent = '...good evening';
        wrapper.style.backgroundImage = "url('images/dusk.jpg')";
    } else {
        console.log('Def');
    }
}



setGreetings(getTime());

