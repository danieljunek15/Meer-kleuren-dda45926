var inputtitle;
var inputbackgroundcolor;
var inputequip;

function backGroundColorSave() {
    inputtitle = document.getElementById('backGroundColor').value;
    console.log(inputbackgroundcolor);
}

function titleColorSave() {
    inputbackgroundcolor = document.getElementById('backGroundColor').value;
}

function equipColor() {
    document.getElementById('bodyBackGroundColor').style.backgroundColor = inputtitle;
    document.getElementById('titleBackGroundColor').style.color = inputbackgroundcolor;
}