//Name Display
document.addEventListener('DOMContentLoaded', function () {
  getval();
});

function getval(){
    $("#nameColor").removeClass();
    $("#nameDisp").removeClass();
    $("#nameColor").addClass($("#nameColor").val());
    $("#nameDisp").addClass($("#nameColor").val());
}
