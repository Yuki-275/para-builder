var inputs1 = [];
function para2() {
    for (var i = 1; i <= 12; i++) {
        inputs1.push(document.getElementById("t" + i).value);
    }
    document.getElementById("para2").innerHTML = inputs1.join(". ");
}