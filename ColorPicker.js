function changeColor() {
    let newColor = '#'+ Math.random().toString(16).substr(2,6);
    document.body.style.background = "none";
    document.body.style.backgroundColor = newColor;
    document.getElementById("result").textContent = newColor;
}
function copyText() {
    let copiedText = document.getElementById("result")
    let temp = document.createElement("textarea")
    temp.value = copiedText.textContent;
    document.body.appendChild(temp);
    temp.select()
    document.execCommand("copy");
    temp.remove();
    copiedText.textContent = "Copied " + copiedText.textContent + " !";
}
function changeGradient() {
    let color1 = document.getElementById("color1").value;
    let color2 = document.getElementById("color2").value;
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundImage = "linear-gradient(" + color1 + "," + color2 + ")";
}
function randomGradient() {
    let color1 = '#'+ Math.random().toString(16).substr(2,6);
    let color2 = '#'+ Math.random().toString(16).substr(2,6);
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundImage = "linear-gradient(" + color1 + "," + color2 + ")";
}