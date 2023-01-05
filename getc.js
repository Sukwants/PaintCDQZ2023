$('#mycanvas').bind('click', function(event) {
    console.log(parseInt(event.offsetX / scale), parseInt(event.offsetY / scale));
});