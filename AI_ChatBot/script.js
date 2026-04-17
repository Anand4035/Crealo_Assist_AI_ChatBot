//  Elements
const input = document.getElementById("inputMessage");
const btn = document.getElementById("sendBtn");
const chatbox = document.getElementById("chatbox");
const typing = document.getElementById("typing");

/* =========================
    SIMPLE RIPPLE
========================= */
document.addEventListener("click", (e) => {
    let ripple = document.createElement("div");
    ripple.classList.add("ripple");

    ripple.style.left = e.clientX + "px";
    ripple.style.top = e.clientY + "px";
    ripple.style.width = ripple.style.height = "20px";

    document.body.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
});

/* =========================
   💬 CHAT FUNCTION
========================= */
function addMsg(text, cls) {
    let div = document.createElement("div");
    div.classList.add("message", cls);
    div.innerText = text;

    chatbox.appendChild(div);

    chatbox.scrollTo({
        top: chatbox.scrollHeight,
        behavior: "smooth"
    });
}

/* =========================
   🚀 SEND MESSAGE
========================= */
async function send() {
    let msg = input.value.trim();
    if (!msg) return;

    addMsg(msg, "user");
    input.value = "";
    typing.classList.remove("hidden");
    btn.disabled = true;

    try {
        let res = await fetch("http://127.0.0.1:8000/chat", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ message: msg })
        });

        let data = await res.json();

        setTimeout(() => {
            typing.classList.add("hidden");
            addMsg(data.reply, "bot");
        }, 500);

    } catch (error) {
        typing.classList.add("hidden");
        addMsg("⚠️ Server error", "bot");
    } finally {
        btn.disabled = false;
        input.focus();
    }
}

/* =========================
   ⌨️ EVENTS
========================= */
btn.addEventListener("click", send);

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") send();
})