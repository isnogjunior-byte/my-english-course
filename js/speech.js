class SpeechManager {
    constructor() {
        this.recognition = null;
        this.synthesis = window.speechSynthesis;
        this.isListening = false;
        this.isSpeaking = false;
        this.isPaused = false;
        this.onResult = null;
        this.onEnd = null;
        this.onError = null;
        this.selectedVoice = null;
        this.currentUtterance = null;
        this.currentCallback = null;
        
        this.initRecognition();
        this.initVoices();
    }
    
    initRecognition() {
        if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
            console.error('Speech Recognition não suportado neste navegador');
            return;
        }
        
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        this.recognition = new SpeechRecognition();
        this.recognition.continuous = false;
        this.recognition.interimResults = false;
        this.recognition.lang = 'en-US';
        this.recognition.maxAlternatives = 3;
        
        this.recognition.onresult = (event) => {
            const result = event.results[0];
            const transcript = result[0].transcript;
            const confidence = result[0].confidence;
            
            if (this.onResult) {
                this.onResult(transcript, confidence);
            }
        };
        
        this.recognition.onend = () => {
            this.isListening = false;
            if (this.onEnd) {
                this.onEnd();
            }
        };
        
        this.recognition.onerror = (event) => {
            console.error('Erro no reconhecimento:', event.error);
            this.isListening = false;
            if (this.onError) {
                this.onError(event.error);
            }
        };
    }
    
    initVoices() {
        const loadVoices = () => {
            const voices = this.synthesis.getVoices();
            // Prefer Google voices for English
            this.selectedVoice = voices.find(voice => 
                voice.lang === 'en-US' && voice.name.includes('Google')
            ) || voices.find(voice => 
                voice.lang === 'en-US'
            ) || voices.find(voice => 
                voice.lang.startsWith('en')
            ) || voices[0];
            
            console.log('Voz selecionada:', this.selectedVoice?.name);
        };
        
        loadVoices();
        if (this.synthesis.onvoiceschanged !== undefined) {
            this.synthesis.onvoiceschanged = loadVoices;
        }
    }
    
    startListening() {
        if (!this.recognition) {
            console.error('Reconhecimento de voz não disponível');
            return false;
        }
        
        if (this.isListening) {
            return false;
        }
        
        this.isListening = true;
        this.recognition.start();
        return true;
    }
    
    stopListening() {
        if (this.recognition && this.isListening) {
            this.recognition.stop();
            this.isListening = false;
        }
    }
    
    speak(text, callback) {
        if (!this.synthesis) {
            console.error('Síntese de voz não disponível');
            return;
        }
        
        // Cancel any ongoing speech
        this.synthesis.cancel();
        this.isPaused = false;
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.voice = this.selectedVoice;
        utterance.lang = 'en-US';
        utterance.rate = 0.8; // Slower for learners
        utterance.pitch = 1;
        utterance.volume = 1;
        
        this.currentUtterance = utterance;
        this.currentCallback = callback;
        
        utterance.onstart = () => {
            this.isSpeaking = true;
            this.isPaused = false;
        };
        
        utterance.onend = () => {
            this.isSpeaking = false;
            this.isPaused = false;
            this.currentUtterance = null;
            if (this.currentCallback) {
                this.currentCallback();
                this.currentCallback = null;
            }
        };
        
        utterance.onerror = (event) => {
            console.error('Erro na síntese:', event.error);
            this.isSpeaking = false;
            this.isPaused = false;
            this.currentUtterance = null;
        };
        
        utterance.onpause = () => {
            this.isPaused = true;
        };
        
        utterance.onresume = () => {
            this.isPaused = false;
        };
        
        this.synthesis.speak(utterance);
    }
    
    speakSlow(text, callback) {
        if (!this.synthesis) {
            console.error('Síntese de voz não disponível');
            return;
        }
        
        this.synthesis.cancel();
        this.isPaused = false;
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.voice = this.selectedVoice;
        utterance.lang = 'en-US';
        utterance.rate = 0.6; // Very slow for beginners
        utterance.pitch = 1;
        utterance.volume = 1;
        
        this.currentUtterance = utterance;
        this.currentCallback = callback;
        
        utterance.onstart = () => {
            this.isSpeaking = true;
            this.isPaused = false;
        };
        
        utterance.onend = () => {
            this.isSpeaking = false;
            this.isPaused = false;
            this.currentUtterance = null;
            if (this.currentCallback) {
                this.currentCallback();
                this.currentCallback = null;
            }
        };
        
        utterance.onerror = (event) => {
            console.error('Erro na síntese:', event.error);
            this.isSpeaking = false;
            this.isPaused = false;
            this.currentUtterance = null;
        };
        
        this.synthesis.speak(utterance);
    }
    
    pause() {
        if (this.synthesis && this.isSpeaking && !this.isPaused) {
            this.synthesis.pause();
            this.isPaused = true;
        }
    }
    
    resume() {
        if (this.synthesis && this.isPaused) {
            this.synthesis.resume();
            this.isPaused = false;
        }
    }
    
    stopSpeaking() {
        if (this.synthesis) {
            this.synthesis.cancel();
            this.isSpeaking = false;
            this.isPaused = false;
            this.currentUtterance = null;
            this.currentCallback = null;
        }
    }
    
    repeatLast(callback) {
        if (this.currentUtterance) {
            const text = this.currentUtterance.text;
            this.speak(text, callback);
        }
    }
    
    isRecognitionSupported() {
        return !!(this.recognition);
    }
    
    isSynthesisSupported() {
        return !!(this.synthesis);
    }
    
    calculateAccuracy(expected, spoken) {
        const normalize = (str) => {
            return str.toLowerCase()
                .replace(/[^\w\s]/g, '')
                .replace(/\s+/g, ' ')
                .trim();
        };
        
        const expectedNormalized = normalize(expected);
        const spokenNormalized = normalize(spoken);
        
        if (expectedNormalized === spokenNormalized) {
            return 100;
        }
        
        const expectedWords = expectedNormalized.split(' ');
        const spokenWords = spokenNormalized.split(' ');
        
        let matches = 0;
        const totalWords = expectedWords.length;
        
        expectedWords.forEach(word => {
            if (spokenWords.includes(word)) {
                matches++;
            }
        });
        
        const accuracy = (matches / totalWords) * 100;
        return Math.round(accuracy);
    }
    
    highlightWords(expected, spoken) {
        const normalize = (str) => {
            return str.toLowerCase()
                .replace(/[^\w\s]/g, '')
                .replace(/\s+/g, ' ')
                .trim();
        };
        
        const expectedNormalized = normalize(expected);
        const spokenNormalized = normalize(spoken);
        
        const expectedWords = expectedNormalized.split(' ');
        const spokenWords = spokenNormalized.split(' ');
        
        const result = {
            expectedHighlighted: [],
            spokenHighlighted: []
        };
        
        expectedWords.forEach(word => {
            if (spokenWords.includes(word)) {
                result.expectedHighlighted.push(`<span class="correct">${word}</span>`);
            } else {
                result.expectedHighlighted.push(`<span class="incorrect">${word}</span>`);
            }
        });
        
        spokenWords.forEach(word => {
            if (expectedWords.includes(word)) {
                result.spokenHighlighted.push(`<span class="correct">${word}</span>`);
            } else {
                result.spokenHighlighted.push(`<span class="incorrect">${word}</span>`);
            }
        });
        
        return result;
    }
}