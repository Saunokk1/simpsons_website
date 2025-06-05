
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