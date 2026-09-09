function startInvitation() {

    const message = document.getElementById("message");

    message.style.display = "block";

    message.scrollIntoView({
        behavior: "smooth"
    });

    const music = document.getElementById("music");

    music.play().catch(function(error) {
        console.log("Music could not start automatically.");
    });

}