const maxHeight = window.screen.availHeight;

function changeSheetColor(colorname){
  var obj = document.getElementById('anki-sheet');
  obj.style.backgroundColor=colorname;

}

function toggleHidden(idname){
    var obj = document.getElementById(idname);
    obj.classList.toggle("hidden")
}

function sheetUp(){
    var obj = document.getElementById('anki-sheet');
    height = obj.offsetHeight;
    if(height+70<maxHeight){
        obj.style.height = height+70 + "px";
    }
}

function sheetDown(){
    var obj = document.getElementById('anki-sheet');
    height = obj.offsetHeight;
    if(height-70>50){
        obj.style.height = height-70 + "px";
    }
}