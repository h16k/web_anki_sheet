const maxHeight = window.screen.availHeight;

function changeSheetColor(colorname) {
    var obj = document.getElementById('anki-sheet');
    obj.style.backgroundColor = colorname;

}

function spoit() {
    const eyeDropper = new EyeDropper();

    eyeDropper
      .open()
      .then((colorSelectionResult) => {
        changeSheetColor(colorSelectionResult.sRGBHex);
      })
      .catch((error) => {
        // キャンセルした場合の例: `DOMException: The user canceled the selection.`
        console.error(error);
      });

}

function toggleHidden(idname) {
    var obj = document.getElementById(idname);
    obj.classList.toggle("hidden")
}

function sheetUp() {
    var obj = document.getElementById('anki-sheet');
    height = obj.offsetHeight;
    if (height + 70 < maxHeight) {
        obj.style.height = height + 70 + "px";
    }
}

function sheetDown() {
    var obj = document.getElementById('anki-sheet');
    height = obj.offsetHeight;
    if (height - 70 > 50) {
        obj.style.height = height - 70 + "px";
    }
}

function loadMaterial() {
    let material = document.getElementById("materialURI").value;
    document.getElementById('material').innerHTML = `<iframe src="${material}" frameborder="0"></iframe> `;
}

function enter(e) {
    if (e === 'Enter') {
        loadMaterial();
    }
    return false;
}