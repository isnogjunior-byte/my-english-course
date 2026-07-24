class EnglishTeacherApp {
    constructor() {
        this.speech = new SpeechManager();
        this.currentLesson = 1;
        this.currentPhraseIndex = 0;
        this.isLessonActive = false;
        this.totalCorrect = 0;
        this.totalPhrases = 0;
        
        // Chat variables
        this.currentScenario = 1;
        this.currentQuestionIndex = 0;
        this.chatCorrect = 0;
        this.chatTotal = 0;
        this.isChatActive = false;
        this.isWaitingForAnswer = false;
        
        this.initElements();
        this.initEventListeners();
        this.checkBrowserSupport();
        this.loadLessonContent();
        this.initChat();
    }
    
    initElements() {
        // Botões de prática
        this.btnStart = document.getElementById('btnStart');
        this.btnSpeak = document.getElementById('btnSpeak');
        this.btnRepeat = document.getElementById('btnRepeat');
        this.btnNext = document.getElementById('btnNext');
        this.btnStop = document.getElementById('btnStop');
        
        // Seletor de lição
        this.lessonSelect = document.getElementById('lessonSelect');
        this.lessonLevel = document.getElementById('lessonLevel');
        this.lessonDuration = document.getElementById('lessonDuration');
        
        // Área do professor
        this.teacherText = document.getElementById('teacherText');
        this.teacherStatus = document.getElementById('teacherStatus');
        this.teacherAvatar = document.getElementById('teacherAvatar');
        this.messages = document.getElementById('messages');
        this.expectedText = document.getElementById('expectedText');
        this.yourSpeechText = document.getElementById('yourSpeechText');
        this.accuracyPercent = document.getElementById('accuracyPercent');
        this.accuracyFill = document.getElementById('accuracyFill');
        this.pronunciationFeedback = document.getElementById('pronunciationFeedback');
        this.progressFill = document.getElementById('progressFill');
        this.progressText = document.getElementById('progressText');
        this.speechBubble = document.getElementById('speechBubble');
        
        // Abas
        this.tabBtns = document.querySelectorAll('.tab-btn');
        this.tabContents = document.querySelectorAll('.tab-content');
        
        // Áreas de conteúdo
        this.vocabularyList = document.getElementById('vocabularyList');
        this.grammarContent = document.getElementById('grammarContent');
        this.conversationsList = document.getElementById('conversationsList');
        
        // Chat elements
        this.chatArea = document.getElementById('chatArea');
        this.chatMessages = document.getElementById('chatMessages');
        this.chatInput = document.getElementById('chatInput');
        this.btnChatSpeak = document.getElementById('btnChatSpeak');
        this.btnChatSend = document.getElementById('btnChatSend');
        this.btnChatReset = document.getElementById('btnChatReset');
        this.scenarioSelect = document.getElementById('scenarioSelect');
        this.chatTeacherStatus = document.getElementById('chatTeacherStatus');
        this.chatHint = document.getElementById('chatHint');
        this.chatCorrectEl = document.getElementById('chatCorrect');
        this.chatTotalEl = document.getElementById('chatTotal');
        this.chatAccuracyEl = document.getElementById('chatAccuracy');
    }
    
    initEventListeners() {
        // Botões de prática
        this.btnStart.addEventListener('click', () => this.startLesson());
        this.btnSpeak.addEventListener('click', () => this.toggleListening());
        this.btnRepeat.addEventListener('click', () => this.repeatPhrase());
        this.btnNext.addEventListener('click', () => this.nextPhrase());
        this.btnStop.addEventListener('click', () => this.stopLesson());
        
        // Seletor de lição
        this.lessonSelect.addEventListener('change', (e) => {
            this.currentLesson = parseInt(e.target.value);
            this.loadLessonContent();
            this.resetLesson();
        });
        
        // Abas
        this.tabBtns.forEach(btn => {
            btn.addEventListener('click', () => this.switchTab(btn.dataset.tab));
        });
        
        // Speech callbacks
        this.speech.onResult = (transcript, confidence) => {
            if (this.isWaitingForAnswer) {
                this.handleChatAnswer(transcript, confidence);
            } else {
                this.handleSpeechResult(transcript, confidence);
            }
        };
        
        this.speech.onEnd = () => {
            this.btnSpeak.classList.remove('recording');
            this.btnSpeak.innerHTML = '<span class="btn-icon">🎤</span> Falar';
            this.btnChatSpeak.classList.remove('recording');
            this.btnChatSpeak.innerHTML = '<span class="btn-icon">🎤</span> Falar';
            this.teacherStatus.textContent = 'Professor aguardando...';
            this.chatTeacherStatus.textContent = 'Online agora';
        };
        
        this.speech.onError = (error) => {
            this.showError(error);
        };
        
        // Chat event listeners
        this.btnChatSpeak.addEventListener('click', () => this.toggleChatListening());
        this.btnChatSend.addEventListener('click', () => this.sendChatMessage());
        this.btnChatReset.addEventListener('click', () => this.resetChat());
        
        this.chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendChatMessage();
            }
        });
        
        this.scenarioSelect.addEventListener('change', (e) => {
            this.currentScenario = parseInt(e.target.value);
            this.resetChat();
        });
    }
    
    checkBrowserSupport() {
        if (!this.speech.isRecognitionSupported()) {
            this.showError('Reconhecimento de voz não suportado. Use Microsoft Edge ou Google Chrome.');
            this.btnSpeak.disabled = true;
        }
        
        if (!this.speech.isSynthesisSupported()) {
            this.showError('Síntese de voz não suportada.');
            this.btnRepeat.disabled = true;
        }
    }
    
    switchTab(tabName) {
        // Atualizar botões
        this.tabBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.tab === tabName) {
                btn.classList.add('active');
            }
        });
        
        // Atualizar conteúdo
        this.tabContents.forEach(content => {
            content.classList.remove('active');
            if (content.id === `tab-${tabName}`) {
                content.classList.add('active');
            }
        });
    }
    
    loadLessonContent() {
        const lesson = getLesson(this.currentLesson);
        
        // Atualizar informações da lição
        this.lessonLevel.textContent = lesson.level;
        this.lessonDuration.textContent = lesson.duration;
        
        // Carregar vocabulário
        this.loadVocabulary(lesson.vocabulary);
        
        // Carregar números (se existirem)
        this.loadNumbers(lesson.numbers);
        
        // Carregar gramática
        this.loadGrammar(lesson.grammar);
        
        // Carregar conversações
        this.loadConversations(lesson.conversations);
    }
    
    loadVocabulary(vocabulary) {
        this.vocabularyList.innerHTML = '';
        
        vocabulary.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'vocab-card';
            card.innerHTML = `
                <div class="word">${item.word}</div>
                <div class="pronunciation">[${item.pronunciation}]</div>
                <div class="translation">${item.translation}</div>
                <div class="example">${item.example}</div>
            `;
            
            card.addEventListener('click', () => {
                this.speech.speak(item.word);
                card.style.transform = 'scale(1.02)';
                setTimeout(() => {
                    card.style.transform = '';
                }, 200);
            });
            
            this.vocabularyList.appendChild(card);
        });
    }
    
    loadNumbers(numbers) {
        const existingSection = document.getElementById('numbersSection');
        if (existingSection) existingSection.remove();
        
        if (!numbers || numbers.length === 0) return;
        
        const section = document.createElement('div');
        section.id = 'numbersSection';
        section.className = 'numbers-section';
        
        let html = '<h3 class="numbers-title">Números (Numbers)</h3><p class="numbers-subtitle">Clique para ouvir a pronúncia</p><div class="numbers-grid">';
        numbers.forEach(item => {
            html += `
                <div class="number-card" data-number="${item.number}">
                    <div class="number-value">${item.number}</div>
                    <div class="number-word">${item.word}</div>
                    <div class="number-pronunciation">[${item.pronunciation}]</div>
                </div>
            `;
        });
        html += '</div>';
        
        section.innerHTML = html;
        this.vocabularyList.appendChild(section);
        
        section.querySelectorAll('.number-card').forEach(card => {
            card.addEventListener('click', () => {
                const word = card.querySelector('.number-word').textContent;
                this.speech.speak(word);
                card.style.transform = 'scale(1.05)';
                setTimeout(() => { card.style.transform = ''; }, 200);
            });
        });
    }
    
    loadGrammar(grammar) {
        if (!grammar) {
            this.grammarContent.innerHTML = '<p>Gramática não disponível para esta lição.</p>';
            return;
        }
        
        let html = `
            <h3 class="grammar-title">${grammar.title}</h3>
            <div class="grammar-explanation">${grammar.explanation}</div>
        `;
        
        // Regras
        if (grammar.rules && grammar.rules.length > 0) {
            html += '<div class="grammar-rules"><h3>Regras:</h3>';
            grammar.rules.forEach((rule, index) => {
                html += `
                    <div class="rule-card clickable" data-speak="${rule.example.split('(')[0].trim()}" title="Clique para ouvir a pronúncia">
                        <div class="rule">${rule.rule}</div>
                        <div class="example">${rule.example}</div>
                        <div class="note">${rule.note}</div>
                        <div class="click-hint">🔊 Clique para ouvir</div>
                    </div>
                `;
            });
            html += '</div>';
        }
        
        // Frases de Exemplo (sentences)
        if (grammar.sentences && grammar.sentences.length > 0) {
            html += '<div class="grammar-sentences"><h3>Frases de Exemplo:</h3>';
            grammar.sentences.forEach(sentence => {
                html += `
                    <div class="sentence-card clickable" data-speak="${sentence.english}" title="Clique para ouvir a pronúncia">
                        <div class="sentence-english">${sentence.english}</div>
                        <div class="sentence-portuguese">${sentence.portuguese}</div>
                        <div class="sentence-structure">${sentence.structure}</div>
                        <div class="click-hint">🔊 Clique para ouvir</div>
                    </div>
                `;
            });
            html += '</div>';
        }
        
        this.grammarContent.innerHTML = html;
        
        // Adicionar eventos de clique para pronúncia
        this.grammarContent.querySelectorAll('.clickable').forEach(el => {
            el.addEventListener('click', () => {
                const text = el.dataset.speak;
                if (text) {
                    this.speech.speak(text);
                    el.style.transform = 'scale(1.02)';
                    setTimeout(() => { el.style.transform = ''; }, 300);
                }
            });
        });
    }
    
    loadConversations(conversations) {
        this.conversationsList.innerHTML = '';
        
        conversations.forEach((conv, index) => {
            const card = document.createElement('div');
            card.className = 'conversation-card';
            
            let dialogueHtml = '';
            conv.lines.forEach((line, lineIndex) => {
                dialogueHtml += `
                    <div class="dialogue-line">
                        <div class="speaker-badge speaker-${line.speaker.toLowerCase()}">${line.speaker}</div>
                        <div class="dialogue-text">
                            <div class="english">${line.english}</div>
                            <div class="portuguese">${line.portuguese}</div>
                        </div>
                        <button class="btn-play-line" data-conv="${index}" data-line="${lineIndex}">
                            <span class="btn-icon">🔊</span>
                        </button>
                    </div>
                `;
            });
            
            card.innerHTML = `
                <div class="conversation-header">
                    <h3>${conv.title}</h3>
                    <p>${conv.context}</p>
                </div>
                <div class="conversation-body">
                    ${dialogueHtml}
                    <div class="dialogue-controls">
                        <button class="btn-dialogue-control btn-play-all" data-conv-index="${index}">
                            <span class="btn-icon">▶</span> Ouvir Tudo
                        </button>
                        <button class="btn-dialogue-control btn-pause-dialogue" data-conv-index="${index}" disabled>
                            <span class="btn-icon">⏸</span> Pausar
                        </button>
                        <button class="btn-dialogue-control btn-stop-dialogue" data-conv-index="${index}" disabled>
                            <span class="btn-icon">⏹</span> Parar
                        </button>
                        <button class="btn-dialogue-control btn-skip-dialogue" data-conv-index="${index}" disabled>
                            <span class="btn-icon">⏭</span> Próxima Frase
                        </button>
                    </div>
                </div>
            `;
            
            this.conversationsList.appendChild(card);
        });
        
        // Add event listeners for dialogue controls
        this.initDialogueControls();
    }
    
    initDialogueControls() {
        // Play individual lines
        document.querySelectorAll('.btn-play-line').forEach(btn => {
            btn.addEventListener('click', () => {
                const convIndex = parseInt(btn.dataset.conv);
                const lineIndex = parseInt(btn.dataset.line);
                this.playDialogueLine(convIndex, lineIndex);
            });
        });
        
        // Play all dialogue
        document.querySelectorAll('.btn-play-all').forEach(btn => {
            btn.addEventListener('click', () => {
                const convIndex = parseInt(btn.dataset.convIndex);
                this.playConversation(convIndex);
            });
        });
        
        // Pause dialogue
        document.querySelectorAll('.btn-pause-dialogue').forEach(btn => {
            btn.addEventListener('click', () => {
                this.pauseDialogue();
            });
        });
        
        // Stop dialogue
        document.querySelectorAll('.btn-stop-dialogue').forEach(btn => {
            btn.addEventListener('click', () => {
                this.stopDialogue();
            });
        });
        
        // Skip to next line
        document.querySelectorAll('.btn-skip-dialogue').forEach(btn => {
            btn.addEventListener('click', () => {
                this.skipDialogueLine();
            });
        });
    }
    
    playDialogueLine(convIndex, lineIndex) {
        const lesson = getLesson(this.currentLesson);
        const conv = lesson.conversations[convIndex];
        
        if (!conv || !conv.lines[lineIndex]) return;
        
        const line = conv.lines[lineIndex];
        this.speech.speak(line.english);
    }
    
    playConversation(convIndex) {
        const lesson = getLesson(this.currentLesson);
        const conv = lesson.conversations[convIndex];
        
        if (!conv) return;
        
        this.stopDialogue();
        
        this.currentDialogueConvIndex = convIndex;
        this.currentDialogueLineIndex = 0;
        this.isPlayingDialogue = true;
        this.isPausedDialogue = false;
        
        // Enable/disable buttons
        this.updateDialogueButtons(convIndex, true);
        
        this.playNextDialogueLine();
    }
    
    playNextDialogueLine() {
        if (!this.isPlayingDialogue) return;
        
        const lesson = getLesson(this.currentLesson);
        const conv = lesson.conversations[this.currentDialogueConvIndex];
        
        if (!conv || this.currentDialogueLineIndex >= conv.lines.length) {
            this.stopDialogue();
            return;
        }
        
        const line = conv.lines[this.currentDialogueLineIndex];
        
        // Highlight current line
        this.highlightDialogueLine(this.currentDialogueConvIndex, this.currentDialogueLineIndex);
        
        this.speech.speak(line.english, () => {
            this.currentDialogueLineIndex++;
            
            if (this.isPlayingDialogue && this.currentDialogueLineIndex < conv.lines.length) {
                setTimeout(() => {
                    this.playNextDialogueLine();
                }, 1000);
            } else {
                this.stopDialogue();
            }
        });
    }
    
    highlightDialogueLine(convIndex, lineIndex) {
        // Remove previous highlights
        document.querySelectorAll('.dialogue-line').forEach(line => {
            line.classList.remove('active');
        });
        
        // Add highlight to current line
        const dialogueLines = document.querySelectorAll('.conversation-card')[convIndex]?.querySelectorAll('.dialogue-line');
        if (dialogueLines && dialogueLines[lineIndex]) {
            dialogueLines[lineIndex].classList.add('active');
            dialogueLines[lineIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
    
    pauseDialogue() {
        if (this.isPlayingDialogue) {
            if (this.isPausedDialogue) {
                this.speech.resume();
                this.isPausedDialogue = false;
            } else {
                this.speech.pause();
                this.isPausedDialogue = true;
            }
        }
    }
    
    stopDialogue() {
        this.isPlayingDialogue = false;
        this.isPausedDialogue = false;
        this.speech.stopSpeaking();
        
        // Remove highlights
        document.querySelectorAll('.dialogue-line').forEach(line => {
            line.classList.remove('active');
        });
        
        // Update buttons
        document.querySelectorAll('.dialogue-controls').forEach(controls => {
            const playBtn = controls.querySelector('.btn-play-all');
            const pauseBtn = controls.querySelector('.btn-pause-dialogue');
            const stopBtn = controls.querySelector('.btn-stop-dialogue');
            const skipBtn = controls.querySelector('.btn-skip-dialogue');
            
            if (playBtn) playBtn.disabled = false;
            if (pauseBtn) pauseBtn.disabled = true;
            if (stopBtn) stopBtn.disabled = true;
            if (skipBtn) skipBtn.disabled = true;
        });
    }
    
    skipDialogueLine() {
        if (this.isPlayingDialogue) {
            this.speech.stopSpeaking();
            this.currentDialogueLineIndex++;
            
            if (this.currentDialogueLineIndex < this.getConversationLength(this.currentDialogueConvIndex)) {
                setTimeout(() => {
                    this.playNextDialogueLine();
                }, 500);
            } else {
                this.stopDialogue();
            }
        }
    }
    
    getConversationLength(convIndex) {
        const lesson = getLesson(this.currentLesson);
        const conv = lesson.conversations[convIndex];
        return conv ? conv.lines.length : 0;
    }
    
    updateDialogueButtons(convIndex, isPlaying) {
        document.querySelectorAll('.dialogue-controls').forEach((controls, index) => {
            const playBtn = controls.querySelector('.btn-play-all');
            const pauseBtn = controls.querySelector('.btn-pause-dialogue');
            const stopBtn = controls.querySelector('.btn-stop-dialogue');
            const skipBtn = controls.querySelector('.btn-skip-dialogue');
            
            if (index === convIndex) {
                if (playBtn) playBtn.disabled = isPlaying;
                if (pauseBtn) pauseBtn.disabled = !isPlaying;
                if (stopBtn) stopBtn.disabled = !isPlaying;
                if (skipBtn) skipBtn.disabled = !isPlaying;
            }
        });
    }
    
    startLesson() {
        this.isLessonActive = true;
        this.currentPhraseIndex = 0;
        this.totalCorrect = 0;
        
        this.btnStart.disabled = true;
        this.btnSpeak.disabled = false;
        this.btnRepeat.disabled = false;
        this.btnNext.disabled = false;
        this.btnStop.disabled = false;
        this.lessonSelect.disabled = true;
        
        this.clearMessages();
        this.loadPhrase();
    }
    
    stopLesson() {
        this.isLessonActive = false;
        this.speech.stopListening();
        this.speech.stopSpeaking();
        
        this.btnStart.disabled = false;
        this.btnSpeak.disabled = true;
        this.btnRepeat.disabled = true;
        this.btnNext.disabled = true;
        this.btnStop.disabled = true;
        this.lessonSelect.disabled = false;
        
        this.teacherStatus.textContent = 'Aula encerrada';
        this.updateTeacherText('Aula encerrada. Clique em "Iniciar Aula" para começar novamente!');
        
        this.showMessage('Sistema', 'Aula encerrada. Você acertou ' + this.totalCorrect + ' de ' + this.totalPhrases + ' frases.');
    }
    
    loadPhrase() {
        const lesson = getLesson(this.currentLesson);
        const phrase = getPhrase(this.currentLesson, this.currentPhraseIndex);
        
        if (!phrase) {
            this.finishLesson();
            return;
        }
        
        this.updateTeacherText(phrase.expected);
        this.teacherStatus.textContent = 'Professor falando...';
        this.expectedText.textContent = phrase.expected;
        this.yourSpeechText.textContent = '-';
        this.accuracyPercent.textContent = '0%';
        this.accuracyFill.style.width = '0%';
        this.pronunciationFeedback.classList.remove('active');
        
        this.updateProgress();
        
        setTimeout(() => {
            this.speech.speak(phrase.expected, () => {
                this.teacherStatus.textContent = 'Sua vez de falar!';
                this.btnSpeak.disabled = false;
            });
        }, 500);
    }
    
    toggleListening() {
        if (this.speech.isListening) {
            this.speech.stopListening();
            this.btnSpeak.classList.remove('recording');
            this.btnSpeak.innerHTML = '<span class="btn-icon">🎤</span> Falar';
            this.teacherStatus.textContent = 'Professor aguardando...';
        } else {
            if (this.speech.startListening()) {
                this.btnSpeak.classList.add('recording');
                this.btnSpeak.innerHTML = '<span class="btn-icon">⏹</span> Parar de Falar';
                this.teacherStatus.textContent = 'Ouvindo...';
            }
        }
    }
    
    handleSpeechResult(transcript, confidence) {
        const phrase = getPhrase(this.currentLesson, this.currentPhraseIndex);
        
        if (!phrase) return;
        
        this.speech.stopListening();
        this.btnSpeak.classList.remove('recording');
        this.btnSpeak.innerHTML = '<span class="btn-icon">🎤</span> Falar';
        
        const accuracy = this.speech.calculateAccuracy(phrase.expected, transcript);
        
        this.yourSpeechText.textContent = transcript;
        this.accuracyPercent.textContent = accuracy + '%';
        this.accuracyFill.style.width = accuracy + '%';
        this.pronunciationFeedback.classList.add('active');
        
        this.showMessage('Você', transcript);
        
        if (accuracy >= 80) {
            this.totalCorrect++;
            this.teacherStatus.textContent = 'Muito bem!';
            this.showMessage('Professor', 'Excelente! Sua pronúncia está muito boa!');
            
            setTimeout(() => {
                this.speech.speak('Excellent! Your pronunciation is very good!', () => {
                    this.teacherStatus.textContent = 'Clique em "Próxima" para continuar';
                });
            }, 1000);
        } else if (accuracy >= 50) {
            this.teacherStatus.textContent = 'Quase lá!';
            this.showMessage('Professor', 'Bom esforço! Tente falar mais claro.');
            
            setTimeout(() => {
                this.speech.speak('Good try! Speak more clearly, please.', () => {
                    this.teacherStatus.textContent = 'Clique em "Repetir" ou "Próxima"';
                });
            }, 1000);
        } else {
            this.teacherStatus.textContent = 'Tente novamente';
            this.showMessage('Professor', 'Não desista! Ouça a frase e tente novamente.');
            
            setTimeout(() => {
                this.speech.speak("Don't give up! Listen and try again.", () => {
                    this.teacherStatus.textContent = 'Clique em "Repetir" para ouvir novamente';
                });
            }, 1000);
        }
    }
    
    repeatPhrase() {
        const phrase = getPhrase(this.currentLesson, this.currentPhraseIndex);
        
        if (phrase) {
            this.teacherStatus.textContent = 'Repetindo...';
            this.speech.speak(phrase.expected, () => {
                this.teacherStatus.textContent = 'Sua vez de falar!';
            });
        }
    }
    
    nextPhrase() {
        this.currentPhraseIndex++;
        this.loadPhrase();
    }
    
    finishLesson() {
        const lesson = getLesson(this.currentLesson);
        const percentage = Math.round((this.totalCorrect / lesson.phrases.length) * 100);
        
        this.isLessonActive = false;
        
        this.updateTeacherText(`Parabéns! Você completou a lição "${lesson.title}"!`);
        
        let message = '';
        if (percentage >= 80) {
            message = `Excelente! Você acertou ${this.totalCorrect} de ${lesson.phrases.length} frases (${percentage}%).`;
        } else if (percentage >= 50) {
            message = `Bom trabalho! Você acertou ${this.totalCorrect} de ${lesson.phrases.length} frases (${percentage}%).`;
        } else {
            message = `Continue praticando! Você acertou ${this.totalCorrect} de ${lesson.phrases.length} frases (${percentage}%).`;
        }
        
        this.showMessage('Sistema', message);
        
        this.btnSpeak.disabled = true;
        this.btnRepeat.disabled = true;
        this.btnNext.disabled = true;
        this.btnStop.disabled = true;
        this.btnStart.disabled = false;
        this.lessonSelect.disabled = false;
        
        setTimeout(() => {
            this.speech.speak(`Congratulations! You completed the lesson ${lesson.title}!`, () => {
                this.teacherStatus.textContent = 'Aula concluída!';
            });
        }, 1000);
    }
    
    resetLesson() {
        this.currentPhraseIndex = 0;
        this.totalCorrect = 0;
        this.updateProgress();
        this.pronunciationFeedback.classList.remove('active');
        this.updateTeacherText('Lição alterada. Clique em "Iniciar Aula" para começar!');
    }
    
    updateTeacherText(text) {
        this.teacherText.textContent = text;
    }
    
    showMessage(sender, text) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender === 'Você' ? 'student' : 'teacher'}`;
        messageDiv.innerHTML = `
            <span class="sender">${sender}:</span>
            <span class="text">${text}</span>
        `;
        this.messages.appendChild(messageDiv);
        this.messages.scrollTop = this.messages.scrollHeight;
    }
    
    clearMessages() {
        this.messages.innerHTML = '';
    }
    
    updateProgress() {
        const lesson = getLesson(this.currentLesson);
        const total = lesson.phrases.length;
        const current = this.currentPhraseIndex + 1;
        
        const percentage = (this.currentPhraseIndex / total) * 100;
        this.progressFill.style.width = percentage + '%';
        this.progressText.textContent = `${this.currentPhraseIndex} de ${total} frases completadas`;
    }
    
    showError(message) {
        this.teacherStatus.textContent = 'Erro: ' + message;
        console.error(message);
    }
    
    // Chat methods
    initChat() {
        this.loadScenario(1);
    }
    
    loadScenario(scenarioId) {
        const scenario = getScenario(scenarioId);
        if (!scenario) return;
        
        this.clearChat();
        this.currentQuestionIndex = 0;
        this.chatCorrect = 0;
        this.chatTotal = 0;
        this.updateChatScore();
        
        // Add context message with translation
        if (scenario.context) {
            this.addChatMessage('teacher', 
                `${scenario.context}\n\n🇧🇷 ${scenario.contextTranslation || ''}`, 
                ''
            );
        }
        
        // Start conversation
        setTimeout(() => {
            this.askNextQuestion();
        }, 2000);
    }
    
    askNextQuestion() {
        const scenario = getScenario(this.currentScenario);
        const question = getQuestion(this.currentScenario, this.currentQuestionIndex);
        
        if (!question) {
            this.finishChat();
            return;
        }
        
        // Add thinking message occasionally
        if (this.currentQuestionIndex > 0 && Math.random() > 0.7) {
            const thinking = getRandomThinking();
            this.addChatMessage('teacher', 
                `${thinking.text}\n\n🇧🇷 ${thinking.translation}`, 
                ''
            );
        }
        
        setTimeout(() => {
            // Show question with translation
            this.addChatMessage('teacher', 
                `${question.question}\n\n🇧🇷 ${question.translation}`, 
                ''
            );
            
            // Speak the question
            this.speech.speak(question.question);
            
            this.isWaitingForAnswer = true;
            this.chatTeacherStatus.textContent = 'Aguardando sua resposta...';
            
            // Show tips with translation
            this.chatHint.innerHTML = `
                <p>💡 <strong>Como responder:</strong> ${question.tips[0]}</p>
                <p>📝 <strong>Respostas aceitas:</strong> <em>${question.expectedAnswers.slice(0, 3).join(', ')}...</em></p>
                <p>🎤 <strong>Dica:</strong> Clique no microfone e fale em inglês, ou digite na caixa de texto</p>
            `;
        }, 1500);
    }
    
    handleChatAnswer(transcript, confidence) {
        this.isWaitingForAnswer = false;
        
        const result = checkAnswer(this.currentScenario, this.currentQuestionIndex, transcript);
        const question = getQuestion(this.currentScenario, this.currentQuestionIndex);
        
        this.chatTotal++;
        
        // Add student message
        this.addChatMessage('student', transcript, `Você disse: "${transcript}"`);
        
        // Add feedback with translation
        if (result.match) {
            this.chatCorrect++;
            const encouragement = getRandomEncouragement(this.currentScenario);
            
            this.addChatMessage('teacher', 
                `✅ ${result.feedback}\n\n🇧🇷 Resposta correta!`, 
                ''
            );
            
            setTimeout(() => {
                this.addChatMessage('teacher', 
                    `${encouragement.text}\n\n🇧🇷 ${encouragement.translation}`, 
                    ''
                );
                this.speech.speak(encouragement.text);
            }, 1500);
        } else {
            this.addChatMessage('teacher', 
                `❌ ${result.feedback}\n\n💡 Tente: "${question.expectedAnswers[0]}" ou similar`, 
                ''
            );
            this.speech.speak(result.feedback);
        }
        
        this.updateChatScore();
        
        // Move to next question after delay
        setTimeout(() => {
            this.currentQuestionIndex++;
            this.askNextQuestion();
        }, 4000);
    }
    
    sendChatMessage() {
        const text = this.chatInput.value.trim();
        if (!text) return;
        
        this.chatInput.value = '';
        
        if (this.isWaitingForAnswer) {
            this.handleChatAnswer(text, 1.0);
        } else {
            // Free conversation - just add the message
            this.addChatMessage('student', text, `Você: ${text}`);
            
            // Generate a simple response
            setTimeout(() => {
                const responses = [
                    "That's interesting! Tell me more.",
                    "I see! Can you explain that in English?",
                    "Good! Let's continue with the lesson.",
                    "Nice! Now, let me ask you something.",
                    "Great! You're doing well!"
                ];
                const response = responses[Math.floor(Math.random() * responses.length)];
                this.addChatMessage('teacher', response, '');
                this.speech.speak(response);
            }, 1000);
        }
    }
    
    toggleChatListening() {
        if (this.speech.isListening) {
            this.speech.stopListening();
            this.btnChatSpeak.classList.remove('recording');
            this.btnChatSpeak.innerHTML = '<span class="btn-icon">🎤</span> Falar';
            this.chatTeacherStatus.textContent = 'Online agora';
        } else {
            if (this.speech.startListening()) {
                this.btnChatSpeak.classList.add('recording');
                this.btnChatSpeak.innerHTML = '<span class="btn-icon">⏹</span> Parar';
                this.chatTeacherStatus.textContent = 'Ouvindo...';
            }
        }
    }
    
    addChatMessage(sender, text, translation) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${sender}`;
        
        const avatar = sender === 'teacher' ? '👩‍🏫' : '👤';
        const translationHtml = translation ? `<p class="chat-translation">${translation}</p>` : '';
        
        messageDiv.innerHTML = `
            <div class="chat-avatar">${avatar}</div>
            <div class="chat-bubble">
                <p>${text}</p>
                ${translationHtml}
            </div>
        `;
        
        this.chatMessages.appendChild(messageDiv);
        this.chatArea.scrollTop = this.chatArea.scrollHeight;
    }
    
    clearChat() {
        this.chatMessages.innerHTML = '';
        
        const scenario = getScenario(this.currentScenario);
        
        // Apresentação da Professora Sarah
        this.addChatMessage('teacher', 
            `Olá! Eu sou a Professora Sarah! 👩‍🏫\n\nVou ser sua professora de inglês. Vamos praticar juntos?\n\nPrimeiro, me conta: qual é o seu nome? (What is your name?)\n\n🗣️ Responda: "My name is..." ou "I'm..." seguido do seu nome.`,
            `Hello! I'm Teacher Sarah! I'll be your English teacher. Let's practice together!\n\nFirst, tell me: what is your name?\n\n🗣️ Answer: "My name is..." or "I'm..." followed by your name.`
        );
        
        // Falar a introdução
        setTimeout(() => {
            this.speech.speak("Hello! I am Teacher Sarah. I will be your English teacher. What is your name?");
        }, 1000);
    }
    
    updateChatScore() {
        this.chatCorrectEl.textContent = this.chatCorrect;
        this.chatTotalEl.textContent = this.chatTotal;
        const accuracy = this.chatTotal > 0 ? Math.round((this.chatCorrect / this.chatTotal) * 100) : 0;
        this.chatAccuracyEl.textContent = accuracy + '%';
    }
    
    resetChat() {
        this.currentQuestionIndex = 0;
        this.chatCorrect = 0;
        this.chatTotal = 0;
        this.isWaitingForAnswer = false;
        this.updateChatScore();
        this.loadScenario(this.currentScenario);
    }
    
    finishChat() {
        const percentage = this.chatTotal > 0 ? Math.round((this.chatCorrect / this.chatTotal) * 100) : 0;
        
        let message = '';
        if (percentage >= 80) {
            message = `Parabéns! Você acertou ${this.chatCorrect} de ${this.chatTotal} perguntas (${percentage}%). Excelente trabalho!`;
        } else if (percentage >= 50) {
            message = `Bom trabalho! Você acertou ${this.chatCorrect} de ${this.chatTotal} perguntas (${percentage}%). Continue praticando!`;
        } else {
            message = `Você acertou ${this.chatCorrect} de ${this.chatTotal} perguntas (${percentage}%). Não desista! Tente novamente!`;
        }
        
        this.addChatMessage('teacher', message, `Resultado: ${message}`);
        this.speech.speak(message);
        
        this.chatTeacherStatus.textContent = 'Conversa finalizada';
        this.chatHint.innerHTML = `
            <p>🎉 <strong>Conversa finalizada!</strong> Clique em "Recomeçar" para praticar novamente.</p>
        `;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.app = new EnglishTeacherApp();
});