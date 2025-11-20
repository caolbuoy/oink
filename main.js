function pigLatinTranslator(text) {
    const words = text.split(' ');
    let translation = '';

    for (const word of words) {
        const translatedWord = pigLatinTranslatorWord(word);
        translation += translatedWord + ' ';
    }

    return translation.trim(); // remove trailing space
}

function pigLatinTranslatorWord(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    // Word starts with a vowel
    if (vowels.includes(word[0])) {
        return word + 'way';
    }

    // Find the index of the first vowel
    let firstVowelIndex = -1;
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            firstVowelIndex = i;
            break;
        }
    }

    // No vowel found (all consonants)
    if (firstVowelIndex === -1) {
        return word + 'ay';
    }

    // Move consonant cluster to the end and add 'ay'
    return word.slice(firstVowelIndex) + word.slice(0, firstVowelIndex) + 'ay';
}


    function translateSentence() {
    const input = document.getElementById('sentenceInput');
    const text = input.value.trim();

    if (text !== '') {
        const result = pigLatinTranslator(text.toLowerCase());
        input.value = result; // replace the text in the input box
    } else {
        input.value = ''; // clear input if empty
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const actionButton = document.getElementById("actionButton");
    const input = document.getElementById("sentenceInput");
    const output = document.getElementById("output");

    actionButton.addEventListener("click", () => {
        if (!actionButton.classList.contains("clicked")) {
            // First click → translate & change image
            translateSentence();
            actionButton.classList.add("clicked");
        } else {
            // Second click → reset everything
            actionButton.classList.remove("clicked");
            input.value = '';
            output.innerText = '';
        }
    });
});
