var list = '[';
for (var x = 550; x < 1000; ++x) {
    for (var y = 0; y < 600; ++y) {
        var rgb = ctx.getImageData(x * 5, y * 5, 5, 5).data;
        if ((rgb[0] == 255 && rgb[1] == 235 && rgb[2] == 59 || rgb[0] == 215 && rgb[1] == 255 && rgb[2] == 7) && y < 400 && !(x <= 766 && y <= 244)) {
            list = list + '{x:' + x + ',y:' + y + '},';
        }
    }
}
document.getElementById('areaarea').value = list + ']';