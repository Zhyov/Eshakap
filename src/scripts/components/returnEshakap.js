const charPath = "./assets/char/";
const consonants = ["p", "b", "f", "v", "w", "k", "g", "t", "d", "đ", "z", "ž", "h", "j", "l", "m", "n", "ň", "r", "s", "š", "c", "č", "ç"];
const vowels = ["a", "ä", "ą", "i", "į", "o", "ö"];

export const order = ["a", "ä", "ą", "p", "b", "f", "v", "w", "k", "g", "t", "d", "đ", "z", "ž", "i", "į", "h", "j", "l", "m", "n", "ň", "o", "ö", "r", "s", "š", "c", "č", "ç"];
export function getEshakap(word) {
    let characters = word.split("");
    let eshakap = [];
    let final = [];
    let count = 0;

    for (let i = 0; i < characters.length; i++) {
        const char = characters[i];
        const prev = characters[i - 1];
        const next = characters[i + 1];

        if (vowels.includes(char) && !consonants.includes(prev)) {
            final.push({ id: crypto.randomUUID(), path: charPath + "aläp.svg" });
            final.push({ id: crypto.randomUUID(), path: charPath + char + ".svg" });
            count += 2;
        } else if (consonants.includes(char) && (!next || consonants.includes(next)))  {
            final.push({ id: crypto.randomUUID(), path: charPath + char + ".svg" });
            final.push({ id: crypto.randomUUID(), path: charPath + "∅.svg" });
            count += 2;
        } else if (consonants.includes(char) && vowels.includes(next)) {
            final.push({ id: crypto.randomUUID(), path: charPath + char + ".svg" });
            final.push({ id: crypto.randomUUID(), path: charPath + next + ".svg" });
            count += 2;
            i++;
        } else {
            final.push({ id: crypto.randomUUID(), path: charPath + char + ".svg" });
            count++;
        }

        if (final.length === 2) {
            eshakap.push({ id: crypto.randomUUID(), syllable: final });
            final = [];
        }
    }

    if (final.length > 0) {
        eshakap.push({ id: crypto.randomUUID(), syllable: final });
    }

    return eshakap;
}