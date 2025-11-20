def pigLatinTranslator(text):
    translation = ''
    for word in words:
        translatedWord = pigLatinTranslatorWord(word)
        translation = translation + translatedWord + ' '
    return translation
    

def pigLatinTranslatorWord(word):
    letters = []
    for letter in word:
        letters.append(letter)
    if word[0] in ('a', 'e', 'i', 'o', 'u'):
        translation = word + 'way'
    elif word[1] in ('a', 'e', 'i', 'o', 'u'):
        translation = ''.join(letters[1:]) + ''.join(letters[:1]) + 'ay'
    elif len(word) <= 2 or word[2] in ('a', 'e', 'i', 'o', 'u'):
        translation = ''.join(letters[2:]) + ''.join(letters[:2]) + 'ay'
    elif len(word) <=3 or word[3] in ('a', 'e', 'i', 'o', 'u'):
        translation = ''.join(letters[3:]) + ''.join(letters[:3]) + 'ay'
    return translation


while True:
    
    text = input("Please enter a sentence to translate:>")
    text = text.lower()
    words = text.split()
    translation = pigLatinTranslator(text)
    print(translation)




















