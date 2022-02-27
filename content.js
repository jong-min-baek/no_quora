var quora_gone = false;
if (window.location.href.includes("google.com/search?")
    && !quora_gone) {

    let u = window.location.href;
    const arr = u.split("&");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes("google.com/search?")) {
            arr[i] = arr[i].concat("+-quora.com");
        }
    }
    let result = arr.join("&");

    quora_gone = true;
    window.location.replace(result);
}
