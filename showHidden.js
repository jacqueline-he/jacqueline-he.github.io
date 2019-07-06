function showHidden(x) {

  var x = document.getElementById(x);
  if (x.style.display === "none") {
    $('.name').hide();
    $('.links').hide();
    x.style.display = "block";
  } else {
    $('.name').show();
    $('.links').show();
    x.style.display = "none";
  }
}