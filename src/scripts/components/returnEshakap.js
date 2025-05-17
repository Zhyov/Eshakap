const charPath = "./assets/char/";
const consonants = ["p", "b", "f", "v", "w", "k", "g", "t", "d", "đ", "z", "ž", "h", "j", "l", "m", "n", "ň", "r", "s", "š", "c", "č", "ç"];
const vowels = ["a", "ä", "ą", "i", "į", "o", "ö"];

export const order = ["a", "ä", "ą", "p", "b", "f", "v", "w", "k", "g", "t", "d", "đ", "z", "ž", "i", "į", "h", "j", "l", "m", "n", "ň", "o", "ö", "r", "s", "š", "c", "č", "ç"];
export function getEshakap(word) {
    let characters = word.split("");
    let eshakap = [];
    let final = [];
    let count = 0;

    characters.map((char, index) => {
        let path = charPath + char + ".svg";

        if (!consonants.includes(characters[index - 1]) && vowels.includes(char)) {
            final.push({id: crypto.randomUUID(), path: charPath + "aläp.svg"})
            final.push({id: crypto.randomUUID(), path: path})
            count++;
        } else if ((consonants.includes(characters[index + 1])) && consonants.includes(char)) {
            final.push({id: crypto.randomUUID(), path: path})
            final.push({id: crypto.randomUUID(), path: charPath + "∅.svg"})
            count++;
        } else if (char === "'") {
            final.push({id: crypto.randomUUID(), path: path})
        } else {
            final.push({id: crypto.randomUUID(), path: path})
        }

        count++;
        console.log(index + 1)
        if (count === 2) {
            eshakap.push({id: crypto.randomUUID(), syllable: final});
            final = [];
            count = 0;
        }
    });

    console.log(word, eshakap);
    return eshakap;
}