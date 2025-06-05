let convo = [
    {
        "sender": "mr customer",
        "date": "2010-05-10",
        "title": "looking for someone",
        "body": "Hi, I'm looking for someone I used to know in high school. I'm wondering if I could find him here?"
    },
    {
        "sender": "Moe",
        "date": "2010-05-10",
        "title": "re: looking for someone",
        "body": "Let's ask around. What's his name?"
    },
    {
        "sender": "mr customer",
        "date": "2010-05-10",
        "title": "re: looking for someone",
        "body": "Yeah, his name is Seymore Butz."
    },
    {
        "sender": "Moe",
        "date": "2010-05-10",
        "title": "re: looking for someone",
        "body": "Is there a Butz here? Everybody! I wanna Seymore Butz!"
    },
    {
        "sender": "Barney",
        "date": "2010-05-10",
        "title": "re: looking for someone",
        "body": "LOL"
    },
    {
        "sender": "Moe",
        "date": "2010-05-10",
        "title": "re: looking for someone",
        "body": "Oh, wait a minute. Listen you little scum-sucking pus bucket. When I get my hands on you, I'm gonna pull out your eyeballs with a corkscrew!"
    },
    {
        "sender": "mr customer",
        "date": "2010-05-10",
        "title": "re: looking for someone",
        "body": "😂😂😂😂😂😂😂😂😂😂😂"
    }
]

function renderConvo() {

let contentDiv = document.getElementById("content");

contentDiv.innerHTML = ""

    convo.forEach(message => {
        let messageDiv = document.createElement("div");
        messageDiv.classList.add("message");

        let titleDiv = document.createElement("h2");
        titleDiv.classList.add("title");
        titleDiv.textContent = message.title;

        let senderDiv = document.createElement("p");
        senderDiv.classList.add("sender");
        senderDiv.textContent = `From: ${message.sender}`;

        let dateDiv = document.createElement("p");
        dateDiv.classList.add("date");
        dateDiv.textContent = `Date: ${message.date}`;

        let bodyDiv = document.createElement("p");
        bodyDiv.classList.add("body");
        bodyDiv.textContent = message.body;

        messageDiv.appendChild(titleDiv);
        messageDiv.appendChild(senderDiv);
        messageDiv.appendChild(dateDiv);
        messageDiv.appendChild(bodyDiv);

        contentDiv.appendChild(messageDiv) });
        }

const dialog = document.getElementById("dialogi")

    function showDialog() {
        let dialog = document.getElementById("dialogi");
        dialog.showModal();
    }

    function closeDialog() {
        let dialog = document.getElementById("dialogi");
        dialog.close();
    }

function send(event) {
    let message = {}

    event.preventDefault();
    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;
    let sender = document.getElementById('from').value;
    let currentdate = new Date();
    let date = currentdate.toLocaleDateString("sv-SE");

    message.sender = sender
    message.date = date
    message.title = title
    message.body = body

    convo.push(message)

    renderConvo()
}

renderConvo()