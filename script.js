function fullPhoto(event) {
    const content = document.getElementById('content');
    const photo = event.target;

    let OldContent = content.innerHTML;
    content.innerHTML = "";

    let a = document.createElement('a')
    a.innerHTML = "Back"
    a.id = "jslink"
    content.appendChild(a)

    let br = document.createElement('br')
    content.append(br)

    a.addEventListener('click', function () {
        content.innerHTML = OldContent
    }) //juu

    photo.id = "fullscreen"
    photo.removeAttribute('onclick')
    content.appendChild(photo)
}

function openTab(event, tabName) { //Lainattu https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_tabs
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}