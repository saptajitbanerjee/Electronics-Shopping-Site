let counter = 1;
setInterval(function() {
    try {
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if (counter > 5) {
            counter = 1;
        }
    } catch (err) {}
}, 5000);