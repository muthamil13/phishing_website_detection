/* ==========================
   DARK MODE TOGGLE
========================== */
document.getElementById("themeToggle")?.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Save theme
    localStorage.setItem("theme",
        document.body.classList.contains("dark-mode") ? "dark" : "light"
    );
});

// Load saved mode
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

/* ==========================
   TYPING EFFECT (HOME PAGE)
========================== */
const typingElement = document.getElementById("typingText");

if (typingElement) {
    const message = typingElement.dataset.text;
    let index = 0;

    function type() {
        if (index < message.length) {
            typingElement.textContent += message.charAt(index);
            index++;
            setTimeout(type, 25);
        }
    }
    type();
}

/* ==========================
   CHECK URL + SCANNER EFFECT
========================== */
const form = document.getElementById("checkForm");

if (form) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const url = document.getElementById("url").value;
        const scanner = document.getElementById("scanner");
        const result = document.getElementById("result");

        result.textContent = "";
        scanner.style.display = "block";

        // Wait for scanner animation (1.5 sec)
        await new Promise(res => setTimeout(res, 1500));

        // === Simple Phishing Detection Logic ===
        const suspiciousPatterns = [
            "login", "verify", "update", "free", "secure",
            "account", "bank", ".ru", ".tk", "@", "%", "-"
        ];

        let matchCount = suspiciousPatterns.filter(p => url.toLowerCase().includes(p)).length;

        scanner.style.display = "none";

        // === RISK PERCENTAGE ===
        const riskPercentage = Math.min(100, Math.round((matchCount / suspiciousPatterns.length) * 100));

        if (matchCount > 0) {
            result.innerHTML = `
                ⚠ <span class='phishing'>This URL looks like a phishing link!</span><br><br>
                🔥 <strong>Risk Level: ${riskPercentage}%</strong>
            `;
        } else {
            result.innerHTML = `
                ✅ <span class='safe'>This URL seems safe.</span><br><br>
                🟢 <strong>Risk Level: ${riskPercentage}%</strong>
            `;
        }
    });
}
