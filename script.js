function getSrc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let list = JSON.parse(this.responseText);
            let rndNumber = Math.floor(Math.random() * list.length);
            let srcText = list[rndNumber].code;
            let titleText = list[rndNumber].title;

            document.getElementById("frameVideo").src = "https://www.youtube.com/embed/" + srcText;
            document.getElementById("videoText").innerText = titleText;
        }
    };
    xhttp.open("GET", "https://raw.githubusercontent.com/stranlist/data/master/list.json", true);
    xhttp.send();
}

getSrc();