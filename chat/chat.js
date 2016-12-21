/*********************************************************
gets the value of a cookie
**********************************************************/
document.getCookie = function(sName)
{
    sName = sName.toLowerCase();
    var oCrumbles = document.cookie.split(';');
    for(var i=0; i<oCrumbles.length;i++)
    {
        var oPair= oCrumbles[i].split('=');
        var sKey = decodeURIComponent(oPair[0].trim().toLowerCase());
        var sValue = oPair.length>1?oPair[1]:'';
        if(sKey == sName)
            return decodeURIComponent(sValue);
    }
    return '';
}
/*********************************************************
sets the value of a cookie
**********************************************************/
document.setCookie = function(sName,sValue)
{
    var oDate = new Date();
    oDate.setYear(oDate.getFullYear()+1);
    var sCookie = encodeURIComponent(sName) + '=' + encodeURIComponent(sValue) + ';expires=' + oDate.toGMTString() + ';path=/';
    document.cookie= sCookie;
}
/*********************************************************
removes the value of a cookie
**********************************************************/
document.clearCookie = function(sName)
{
    setCookie(sName,'');
}

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

$(function() {
    console.log("=====Loaded Cookies");
  loadCookies();
});

$(window).bind('beforeunload', function(){
  saveCookies();
});

function saveCookies(){
    var username = $("#nameDisp").val();
    var color = $("#nameColor").val();
    var server = $("#server").val();
    var port = $("#port").val();
    var timestamps = document.getElementById('timestamps').checked;
    var night = document.getElementById('night').checked;
    var message = $("#message").val();
    
    console.log("=====Saved Cookies");
    console.log("username   = " + username);
    console.log("color      = " + color);
    console.log("server     = " + server);
    console.log("port       = " + port);
    console.log("timestamps = " + timestamps);
    console.log("night      = " + night);
    console.log("message    = " + message);
    
    document.setCookie("username", username);
    document.setCookie("color", color);
    document.setCookie("server", server);
    document.setCookie("port", port);
    document.setCookie("timestamps", timestamps);
    document.setCookie("night", night);
    document.setCookie("message", message);
}

function loadCookies(){
    
    var username = document.getCookie("username");
    var color =  document.getCookie("color");
    var server = document.getCookie("server");
    var port = document.getCookie("port");
    var timestamps = document.getCookie("timestamps");
    var night =  document.getCookie("night");
    var message = document.getCookie("message");
    
    console.log("=====Loaded Cookies");
    console.log("username   = " + username);
    console.log("color      = " + color);
    console.log("server     = " + server);
    console.log("port       = " + port);
    console.log("timestamps = " + timestamps);
    console.log("night      = " + night);
    console.log("message    = " + message);
    
    if(username != ""){
        $("#nameDisp").val(username);
    }
    if(color != ""){
        $("#nameColor").val(color);
    }
    if(server != ""){
         $("#server").val(server);
    }
    if(port != ""){
        $("#port").val(port);
    }
    if(timestamps != ""){
        document.getElementById('timestamps').checked = (timestamps === 'true');
    }
    if(night != ""){
         document.getElementById('night').checked = (night === 'true');
    }
    if(message != ""){
        $("#message").val(message);
    }
}