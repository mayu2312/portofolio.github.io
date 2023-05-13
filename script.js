function checkMode() {
    let checkbox = document.querySelector("#switch")
    let background = document.querySelector("#background")

        if (checkbox.checked == false) {
            checkbox.checked = true;
        } else{
            checkbox.checked = false;
        }
}