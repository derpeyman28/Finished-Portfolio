letterCounts = {};
wordCounts = {};
document.getElementById("countButton").onclick = function() {
    console.log("Button clicked")
    var typedText = document.getElementById("textInput").value;
    typedText = typedText.toLowerCase();
    console.log("set text in typedText to lower case")
    typedText = typedText.replace(/[^a-z'\s]+/g, "");
    console.log("replaced odd characters")
    for(let i = 0; i < typedText.length; i++) {
        currentLetter = typedText[i];
        if(letterCounts[currentLetter] === undefined) {
            console.log("new character \"" + currentLetter + "\" detected")
            letterCounts[currentLetter] = 1;
            console.log("added new letter \"" + currentLetter + "\" to array and set it to 1")
        } else {
            letterCounts[currentLetter]++;
            console.log("added 1 to count for \"" + currentLetter + "\"")

        }
    }
    for(letter in letterCounts) {
        let span = document.createElement("span");
        console.log("new span created")
        let textContent = document.createTextNode('"' + letter + "\": " + letterCounts[letter] + ", ");
        console.log("new span text content updated")
        span.appendChild(textContent);
        console.log("appended text content in span")
        document.getElementById("lettersDiv").appendChild(span);
        console.log("span appended")
    }
    var words = typedText.split(" ")
    console.log("split typedText into an array")
    for(let i = 0; i < words.length; i++) {
        currentWord = words[i];
        if(wordCounts[currentWord] === undefined) {
            console.log("new word \"" + currentWord + "\" detected")
            wordCounts[currentWord] = 1
            console.log("added new word \"" + currentWord + "\" to array and set it to 1")
        } else {
            wordCounts[currentWord]++;
            console.log("added 1 to count for \"" + currentWord + "\"")
        }
    }
    for(word in wordCounts) {
        let span = document.createElement("span");
        console.log("new span created")
        let textContent = document.createTextNode('"' + word + "\": " + wordCounts[word] + ", ");
        console.log("new span text content updated")
        span.appendChild(textContent);
        console.log("appended text content in span")
        document.getElementById("wordsDiv").appendChild(span);
        console.log("span appended")
    }
}
