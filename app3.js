const image_input = document.querySelector("#image_input");
var upload_image = "";

document.querySelector("#image_input").addEventListener("change", function () {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        localStorage.setItem("recent-image", reader.result);
    });

    reader.readAsDataURL(this.file[0]);
})