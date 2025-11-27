function pigLatinTranslator(text) {
    // Split on ANY whitespace, prevents empty words from being created
    const words = text.trim().split(/\s+/);
    let translation = '';

    for (const word of words) {
        const translatedWord = pigLatinTranslatorWord(word);
        translation += translatedWord + ' ';
    }

    return translation.trim();
}

function pigLatinTranslatorWord(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    // Word starts with a vowel
    if (vowels.includes(word[0])) {
        return word + 'way';
    }

    // Find first vowel position
    let firstVowelIndex = -1;
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            firstVowelIndex = i;
            break;
        }
    }

    // No vowel found → just append "ay"
    if (firstVowelIndex === -1) {
        return word + 'ay';
    }

    // Move consonant cluster
    return word.slice(firstVowelIndex) + word.slice(0, firstVowelIndex) + 'ay';
}

function translateSentence() {
    const input = document.getElementById('sentenceInput');
    const text = input.value.trim();

    if (text !== '') {
        const result = pigLatinTranslator(text.toLowerCase());
        input.value = result; // replace original text (your intended behavior)
    } else {
        input.value = '';
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const actionButton = document.getElementById("actionButton");
    const input = document.getElementById("sentenceInput");

    actionButton.addEventListener("click", () => {
        if (!actionButton.classList.contains("clicked")) {
            // First click → translate
            translateSentence();
            actionButton.classList.add("clicked");
        } else {
            // Second click → reset
            actionButton.classList.remove("clicked");
            input.value = '';
        }
    });
});