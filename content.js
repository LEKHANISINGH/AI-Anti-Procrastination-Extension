// Smart Keyword Scanner (AI alternative for testing)
const badWords = ["shorts", "meme", "funny", "game", "roast", "vlog", "comedy"];

function scanPage() {
    const pageText = document.body.innerText.toLowerCase();
    let foundBadStuff = false;

    badWords.forEach(word => {
        if (pageText.includes(word)) {
            foundBadStuff = true;
        }
    });

    if (foundBadStuff) {
        blockSite();
    }
}

function blockSite() {
    document.body.style.filter = "blur(30px)";
    if (!document.getElementById("ai-warning")) {
        const div = document.createElement("div");
        div.id = "ai-warning";
        div.style = "position:fixed; top:50%; left:50%; transform:translate(-50%,-50%); z-index:999999; background:black; color:white; padding:40px; border:5px solid red; text-align:center; border-radius:15px;";
        div.innerHTML = "<h1>🛑 AI DETECTED DISTRACTION</h1><p>YouTube Shorts/Entertainment detected. Go back to study!</p>";
        document.body.appendChild(div);
    }
}

// Har 2 second mein page scan karo
setInterval(scanPage, 2000);