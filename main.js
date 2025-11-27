function pigLatinTranslator(text) {
    const words = text.split(' ');
    let translation = '';

    for (const word of words) {
        const translatedWord = pigLatinTranslatorWord(word);
        translation += translatedWord + ' ';
    }

    return translation.trim();
}

function pigLatinTranslatorWord(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    if (vowels.includes(word[0])) {
        return word + 'way';
    }

    let firstVowelIndex = -1;
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            firstVowelIndex = i;
            break;
        }
    }

    if (firstVowelIndex === -1) {
        return word + 'ay';
    }

    return word.slice(firstVowelIndex) + word.slice(0, firstVowelIndex) + 'ay';
}

function translateSentence() {
    const input = document.getElementById('sentenceInput