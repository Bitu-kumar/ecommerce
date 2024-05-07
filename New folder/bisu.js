function openCity(evt, cityName) {
    // Declare all variables
    var i, accordance, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    accordance = document.getElementsByClassName("accordance");
    for (i = 0; i < accordance.length; i++) {
      accordance[i].style.display = "none";
      accordance[i].style.transition = "30s ease";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "flex";
    evt.currentTarget.className += " active";
  }