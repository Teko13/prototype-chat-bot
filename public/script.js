const chat = document.querySelector("#chat");
const input = document.querySelector("#input");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    const msgContainer = document.createElement('div');
    const userMsg = document.createElement("div");
    msgContainer.classList.add("msg-container")
    userMsg.classList.add("user-msg");
    userMsg.textContent = input.value;
    msgContainer.appendChild(userMsg);
    chat.appendChild(msgContainer);
    chat.scrollTop = chat.scrollHeight;
    input.value = "";
    fetch("http://localhost:8000/").then((result) => {
        return result.json();
    }).then((data) => {
        console.log(data);
        // const botMsgContainer = document.createElement("div");
        // const botMsg = document.createElement("div");
        // botMsgContainer.classList.add("msg-container");
        // botMsg.classList.add("bot-msg");
        // botMsg.textContent = data;
        // botMsgContainer.appendChild(botMsg);
        // chat.appendChild(botMsgContainer);
        // chat.scrollTop = chat.scrollHeight;
    });
});
