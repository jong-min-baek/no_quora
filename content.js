if (window.location.href.includes("google.com/search?")) {

    let u = window.location.href;
    let u_changed = false;
    const arr = u.split("&");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes("q=")
            && !arr[i].includes("+-quora.com")) {
            arr[i] = arr[i].concat("+-quora.com");
            u_changed = true;
        }
    }
    if (u_changed) {
        let result = arr.join("&");
        window.location.replace(result);
    }
}
