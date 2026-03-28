let voices: SpeechSynthesisVoice[] = [];

function loadVoices() {
    voices = speechSynthesis.getVoices();
}

if (typeof window !== "undefined") {
    loadVoices();
    speechSynthesis.onvoiceschanged = loadVoices;
}

export function speak(text: string) {
    if (!("speechSynthesis" in window)) return;

    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);

    // Try Telugu voice first
    let voice =
        voices.find(v => v.lang === "te-IN") ||
        voices.find(v => v.lang.startsWith("te"));

    // Fallback to any voice
    if (!voice) {
        voice = voices[0];
    }

    if (voice) {
        utterance.voice = voice;
    }

    utterance.rate = 0.8;

    speechSynthesis.speak(utterance);
}
