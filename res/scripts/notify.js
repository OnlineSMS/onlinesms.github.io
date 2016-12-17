function Notify(name, action, timestamp){
    if(!$("#notif").is(":checked")){
         DesktopNotify("@" + name + " " + action, "/res/media/favicon.png", "In Your Chatroom, @" + name + " " + action, timestamp);
        $("#notif").prop('checked', true);
        $(".notification a").prop("href", "#" + timestamp);
        $(".notification name").text(name);
        $(".notification action").text(action);
        setTimeout(function(){
            $("#notif").prop('checked', false);
        }, 6000)
    }
}

// request permission on page load
document.addEventListener('DOMContentLoaded', function () {
  if (!Notification) {
    alert('Desktop notifications not available in your browser. Try Chromium.'); 
    return;
  }

  if (Notification.permission !== "granted")
    Notification.requestPermission();
});

function DesktopNotify(title, icon, body, timestamp) {
  if (Notification.permission !== "granted")
    Notification.requestPermission();
  else {
    var notification = new Notification(title, {
      icon: icon,
      body: body,
    });

    notification.onclick = function () {
      window.location = "#" + timestamp;
        this.close();
    };

  }

}