// Dark/Light mode switcher
dark_mode = true;
// Get Button TO Add SVG
darkBtn = document.getElementById("darkBtn").addEventListener("click", () => {
  // document.body.classList.toggle('dark-mode');
  if (dark_mode == false) {
    document.documentElement.style.setProperty("--bg-color", "#e6f4ff");
    document.documentElement.style.setProperty("--text-color", "#000000");

    document.documentElement.style.setProperty("--bg-blue", "#cce8ff");
    document.documentElement.style.setProperty("--bg-banner", "#80c6ff");

    document.documentElement.style.setProperty("--bg-benefit", "#9fdfca");    
    document.documentElement.style.setProperty("--text-benefit", "#267359"); 
    document.documentElement.style.setProperty("--bg-harm", "#f7879a"); 
    document.documentElement.style.setProperty("--text-harm", "#900920"); 


    dark_mode = true;
    document.getElementById("darkBtn").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
</svg>`;
  } else if (dark_mode == true) {
    document.documentElement.style.setProperty("--bg-color", "#000e1a");
    document.documentElement.style.setProperty("--text-color", "#ffffff");

    document.documentElement.style.setProperty("--bg-banner", "#004680");
    document.documentElement.style.setProperty("--bg-blue", "#001c33");

    document.documentElement.style.setProperty("--bg-benefit", "#20604a");  
    document.documentElement.style.setProperty("--text-benefit", "#8cd9bf"); 
    document.documentElement.style.setProperty("--bg-harm", "#78081a"); 
    document.documentElement.style.setProperty("--text-harm", "#f66f86"); 

    dark_mode = false;

    document.getElementById("darkBtn").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
</svg>`;
  }
});

var side = document.getElementById('sideMenu');

function toggleSideMenu(){
  if (side.style.display === 'none') {
    side.style.display = 'flex';
  } else {
    side.style.display = 'none';
  }
}

window.addEventListener("resize",()=>{
  if(window.screen.width>=1140){
    side.style.display = 'none';
  }
});

var list = document.getElementById('showMoreList');

function toggleMoreList(){
  if (list.style.display === 'none') {
    list.style.display = 'flex';
    document.getElementById('btnMoreList').innerText="نمایش کمتر";
    } else {
    list.style.display = 'none';
    document.getElementById('btnMoreList').innerText="نمایش بیشتر";

  }
}

function changeInput(value){
  document.getElementById('coin1').value=value;
}

document.getElementById('convertBtn').addEventListener("click",(e)=>{
  e.preventDefault();
  
  alert(`تبدیل ارز از ${document.getElementById('coin1').value} به ارز ${document.getElementById('coin2').value} انجام شده است`)
});