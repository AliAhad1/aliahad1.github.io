//querySelector allow to select html element or class
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav= document.getElementById('nav');
const toggleIcone= document.getElementById('toggle-icon');
const image1= document.getElementById('image1');
const image2= document.getElementById('image2');
const image3= document.getElementById('image3');
const image4= document.getElementById('image4');
const image5= document.getElementById('image5');
const image6= document.getElementById('image6');
const textBox= document.getElementById('text-box');


// Dark or Light Image
function imageMode(color){
    image1.src= `img/responsive-${color}.svg`;
    image2.src= `img/slider-${color}.svg`;
    image3.src= `img/tabs-${color}.svg`;
    image4.src= `img/responsive-${color}.svg`;
    image5.src= `img/slider-${color}.svg`;
    image6.src= `img/tabs-${color}.svg`;

}

// darkMode style
function darkMode(){
    nav.style.backgroundColor= 'rgb(0 0 0/50%)';
    textBox.style.backgroundColor ='rgb(255 255 255/50%)';
    toggleIcone.children[0].textContent='Dark Mode';
    toggleIcone.children[1].classList.replace('fa-sun', 'fa-moon');
    imageMode('dark');
    
  

}

// darkMode style
function lightMode(){
    nav.style.backgroundColor= 'rgb(255 255 255/50%)';
    textBox.style.backgroundColor ='rgb(0 0 0 /50%)';
    toggleIcone.children[0].textContent='Light Mode';
    toggleIcone.children[1].classList.replace('fa-moon', 'fa-sun');
    
    imageMode('light');


}

// switch theme Dynamically
function switchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');// we get data-theme from css
        localStorage.setItem('theme', 'dark');// local storage set
        darkMode();
    }else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'dark'); // local storage set
        lightMode();
    }
}


// eventlistener that will change event
toggleSwitch.addEventListener('change', switchTheme);





// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    darkMode();
  }
}