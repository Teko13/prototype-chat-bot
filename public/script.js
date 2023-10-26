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
    const inputValue = input.value;
    input.value = "";
    fetch(`http://localhost:8000/?question=${inputValue}`).then((result) => {
        return result.json();
    }).then((data) => {
        const dataObj = JSON.parse(data);
        //console.log(dataObj.assistant);
        const botMsgContainer = document.createElement("div");
        const botMsg = document.createElement("div");
        botMsgContainer.classList.add("msg-container");
        botMsg.classList.add("bot-msg");
        botMsg.textContent = dataObj.assistant;
        botMsgContainer.appendChild(botMsg);
        chat.appendChild(botMsgContainer);
        chat.scrollTop = chat.scrollHeight;
    });
});
