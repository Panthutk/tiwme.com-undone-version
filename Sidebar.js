function openSB() {
    var open = document.getElementById('SB');
    var btn = document.getElementById('buttombox');
    if (open.style.transform === "translateX(-350px)") {
        open.style.transform = "translateX(0)";
        open.style.transition = "1.5s ease";
        btn.style.left = "16.8%";
        btn.style.transition = "1.5s ease";
    }
    else {
        open.style.transform = "translateX(-350px)";
        open.style.transition = "1.5s ease";
        btn.style.left = "-1.7%";
        btn.style.transition = "1.5s ease";
    }
    console.log(app);
}