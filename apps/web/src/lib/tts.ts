export function speak(text: string) {

if (!("speechSynthesis" in window)) {
console.warn("Speech synthesis not supported");
return;
}

speechSynthesis.cancel();

const utterance = new SpeechSynthesisUtterance(text);
utterance.lang = "te-IN";
utterance.rate = 0.8;

speechSynthesis.speak(utterance);
}
