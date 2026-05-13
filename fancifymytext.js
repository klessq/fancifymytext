// Runs when user clicks the "Bigger!" button
function makeBigger() {

    // Popup message for testing
    alert("Hello, world!");

    // Increase text size
    document.getElementById("myTextArea").style.fontSize = "24pt";
}


// Runs when the user clicks a radio button
function applyStyle() {

    // Grab text area element
    var textArea = document.getElementById("myTextArea");

    // Check if FancyShmancy is selected
    var isFancy = document.getElementById("fancyShmancy").checked;

    if (isFancy) {
        // Apply fancy styles
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } 
    else {
        // Remove fancy styles
        textArea.style.fontWeight = "normal";
        textArea.style.color = "";
        textArea.style.textDecoration = "none";
    }
}


// Runs when the user clicks "Moo"
function addMoo() {

    // Grab text area element
    var textArea = document.getElementById("myTextArea");

    // toUpper to make text uppercase
    var text = textArea.value.toUpperCase();

    // Use "." to split text like a divider
    var sentences = text.split(".");

    // Looping through each sentence
    for (var i = 0; i < sentences.length; i++) {
        var sentence = sentences[i];

        // Skip spaces
        if (sentence.trim().length > 0) {

            // Split the sentence into individual words
            var words = sentence.split(" ");

            // Add -Moo to last word
            for (var j = words.length - 1; j >= 0; j--) {
                if (words[j].trim().length > 0) {
                    words[j] = words[j] + "-Moo";
                    break;
                }
            }

            // Join words back together to create sentence
            sentences[i] = words.join(" ");
        }
    }

    // Add periods back to sentence, update text
    textArea.value = sentences.join(".");
}
