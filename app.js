document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const userName = formData.get("name");

    if (userName.startsWith("Omer")) {
        document.body.style.background = "navy";
    }

    alert(`Hello ${userName}`);
});