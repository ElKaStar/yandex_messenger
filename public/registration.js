document.getElementById("regForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const inputTags = document.getElementsByTagName("input");
    for (let i=0; i < inputTags.length; i++) {
        console.log(`${inputTags[i].name}: ${inputTags[i].value}`)
    }
});