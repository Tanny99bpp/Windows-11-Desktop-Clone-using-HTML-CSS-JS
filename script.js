let taskbar = document.getElementsByClassName("taskbar")[0];
let startmenu = document.getElementsByClassName("startmenu")[0];

taskbar.addEventListener('click',()=>{
    // console.log("clicked");
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-655px";
    }
    else{
        startmenu.style.bottom = "50px";
    }
})

document.onkeydown = function (e) { 
    if (event.keyCode == 123) { 
        return false; 
    } 
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) { 
        return false; 
    } 
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) { 
        return false; 
    } 
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) { 
        return false; 
    } 
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) { 
        return false; 
    } 
} 