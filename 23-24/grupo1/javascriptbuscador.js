function pulsar(e) {
    
    if (e.keyCode === 13 && !e.shiftKey) {
        e.preventDefault();
        var buscador1 = document.getElementById("buscador1");
        window.location.href = "https://www.google.com/search?q="+buscador1.value;
    }
}
