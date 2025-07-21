/* INCLUDE HTML */

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}

includeHTML()

// LIGHT/DARK MODE

const darkmodeButton = document.getElementById('darkmodeButton');
const mobileButton = document.getElementById('mobileLightButton');
const darkIcon = document.getElementById('darkmodeIcon');   
  
let theme = localStorage.getItem('theme') ?? 'system';
if (theme == 'system') {                  
  var prefersLightMode = window.matchMedia('(prefers-color-scheme: light)').matches; 
  if (prefersLightMode) {
    theme = 'light';
  } else {
    theme = 'dark';
  }
  console.log("Theme set to:",theme);
}

function setTheme(theme) {                  
  document.documentElement.dataset.theme = theme;

  // Update Icons/Emblems
  if (theme == 'light') {
    darkIcon.src = './img/bulb-off.png';   
  } else {
    darkIcon.src = './img/bulb-on.png';   
  }
}

setTheme(theme);                      

darkmodeButton.addEventListener('click', () => {
  console.log("Toggling theme!");
  if (theme == 'light') {
    theme = 'dark';
  } else {
    theme = 'light';
  }
  localStorage.setItem('theme', theme);           
  setTheme(theme);                    
});

mobileButton.addEventListener('click', () => {
  console.log("Toggling theme!");
  if (theme == 'light') {
    theme = 'dark';
  } else {
    theme = 'light';
  }
  localStorage.setItem('theme', theme);           
  setTheme(theme);                    
});

