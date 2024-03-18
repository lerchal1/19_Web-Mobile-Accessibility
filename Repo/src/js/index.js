function adjustFontSize() {
    var html = document.documentElement;
    var fontSize = parseFloat(window.getComputedStyle(html).fontSize);

    document.getElementById('font-increase-button').addEventListener('click', function() {
        fontSize += 1;
        html.style.fontSize = fontSize + 'px';
    });

    document.getElementById('font-decrease-button').addEventListener('click', function() {
        fontSize -= 1;
        html.style.fontSize = fontSize + 'px';
    });
}

// Call the function
adjustFontSize();