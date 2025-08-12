document.onkeydown = function(e) {
  if(event.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}

window.onload = function() { 
  // ---- passcode ---- //
  var passcode = document.getElementById('passcode-input');
  passcode.addEventListener('keydown', function (e) {
    if (e.key === "Enter") {
      if (btoa(passcode.value) === "Q29yc2VyYTEyODI1") {
        revealWindow();
      }
    }
  });

  function revealWindow() {
    var brandingImage = document.getElementById('branding-box');
    brandingImage.style.visibility = 'hidden';

    var contextScreen = document.getElementById('landing');
    contextScreen.style.display = 'none';

    var progressPage = document.getElementById('progress-page');
    progressPage.style.display = 'inline-flex';
  }
};