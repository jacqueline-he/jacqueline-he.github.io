var img=$('.spotlt');
$(document).ready(function(e) {
    $(document).mousemove(function(e) {
        var positionLeft = e.clientX - img.width()/2;
        var positionTop = e.clientY - img.height()/2;
        img.css({'position': 'fixed', 'left': positionLeft, 'top': positionTop});
    });
});