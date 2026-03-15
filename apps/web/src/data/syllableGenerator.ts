export const vowelMarks = [
"",
"ా",
"ి",
"ీ",
"ు",
"ూ",
"ె",
"ే",
"ై",
"ొ",
"ో",
"ౌ"
];

export const consonants = [
"క","ఖ","గ","ఘ","ఙ",
"చ","ఛ","జ","ఝ","ఞ",
"ట","ఠ","డ","ఢ","ణ",
"త","థ","ద","ధ","న",
"ప","ఫ","బ","భ","మ",
"య","ర","ల","వ",
"శ","ష","స","హ",
"ళ","క్ష","ఱ"
];

export function generateSyllables() {
return consonants.flatMap(c =>
vowelMarks.map(v => c + v)
);
}
