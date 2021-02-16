var themeValue = window.localStorage.getItem('theme');
if (themeValue != undefined) {
    if (themeValue == 1) {
        changeTheme(themeValue);
    } else {
        changeTheme(themeValue);
    }
}


var themeBtn = document.getElementById('ChangeTheme');
themeBtn.addEventListener('click', function() {
    if (window.localStorage.getItem('theme') == 1) {
        changeTheme(2);
    } 
    else {
        changeTheme(1);
    } 
});


function changeTheme(theme) {
    var stylesheet = document.getElementById('themeCSSLink');
    var theimage = document.getElementById('NightMod');
    var doctitle = document.title;
    if (doctitle == "Projet WhatsApp")
    {
        stylesheet.setAttribute('href', './CSS/NightMod'+theme+'.css');
        theimage.setAttribute('src', './Images/ThemeMod'+theme+'.png'); 
    }
    else
    {
        stylesheet.setAttribute('href', '../CSS/NightMod'+theme+'.css');
        theimage.setAttribute('src', '../Images/ThemeMod'+theme+'.png'); 
    }
     
    window.localStorage.setItem('theme', theme);      
}