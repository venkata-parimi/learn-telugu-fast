export function speak(text: string) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "te-IN";
    utterance.rate = 0.8;
    speechSynthesis.speak(utterance);
}
