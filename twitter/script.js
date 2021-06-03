var placeholder1 = document.getElementById("placeholder1");
var placeholder2 = document.getElementById("placeholder2");
var ersteInput = document.getElementById("ersteInput");
var zweiteInput = document.getElementById("zweiteInput");



function fc(element,text)
{
    element.style.borderColor = "blue";
    element.style.outline ="none";
    text.style.fontSize = "0.9em";
    text.style.top = "-68px";
    text.style.color = "blue";
}
function fb(element, text) {
    element.style.borderColor = "#2f3336";
    element.style.outline = "none";
    text.style.color = "darkgrey";
    
    if (element.value == "") {
        text.style.top = "-44px";
        text.style.fontSize = "1.2em";
    }
}