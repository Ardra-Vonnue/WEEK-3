function myButton(){
    const isDark=document.body.classList.toggle('dark-mode')
    console.log(isDark)
    if(isDark){
        localStorage.setItem('theme',"dark-mode")
        document.getElementById('toggle-button').ariaPressed=true
    }
    else{
        localStorage.setItem('theme',"light")
        document.getElementById('toggle-button').ariaPressed=false
    }
};
const newTheme=localStorage.getItem("theme");
if(newTheme){
    document.body.classList.add(newTheme)
}
else{
const systemThemeDark=window.matchMedia("(prefer-color-scheme:dark)")
const systemThemeLight=window.matchMedia("(prefer-color-scheme:light)")
setTheme(themePreference());
}
function themePreference(){
if(systemThemeLight.matches){
    return "light";
}
if(systemThemeDark.matches){
    return "dark";
}}
  document.getElementById('toggle-button').ariaPressed=true
function setTheme(newTheme){
    localStorage.setItem('theme',newTheme)
     document.body.classList.add(newTheme)
} 
let element=document.getElementById('toggle-button')
console.log(element.ariaPressed)

