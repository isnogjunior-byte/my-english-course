const conversationScenarios = {
    1: {
        title: "Conversação Livre",
        description: "Pratique o que você aprendeu com perguntas abertas",
        icon: "🗣️",
        questions: [
            {
                id: "q1",
                question: "What is your name?",
                translation: "Qual é o seu nome?",
                expectedAnswers: ["my name is", "i am", "i'm", "name is", "call me"],
                exampleAnswers: ["My name is Maria.", "I'm João.", "I am Pedro.", "Call me Ana."],
                followUp: {
                    success: ["Nice to meet you, {name}!", "Great name! I like it!", "That's a beautiful name!"],
                    fail: ["Tente: My name is... (Meu nome é...)", "Ou: I'm... (Eu sou...)"]
                },
                tips: ["Diga 'My name is...' + seu nome", "Ou 'I'm...' + seu nome", "Exemplo: My name is Maria"]
            },
            {
                id: "q2",
                question: "Where are you from?",
                translation: "De onde você é?",
                expectedAnswers: ["i am from", "i'm from", "i come from", "from brazil", "from sao paulo"],
                exampleAnswers: ["I'm from Brazil.", "I am from São Paulo.", "I come from Rio de Janeiro."],
                followUp: {
                    success: ["Brazil is a beautiful country!", "I love Brazil!", "That's a great place!"],
                    fail: ["Tente: I am from... (Eu sou de...)", "Ou: I'm from... + cidade/país"]
                },
                tips: ["Use 'I am from...' + cidade ou país", "Exemplo: I'm from Brazil"]
            },
            {
                id: "q3",
                question: "How old are you?",
                translation: "Quantos anos você tem?",
                expectedAnswers: ["i am", "i'm", "years old", "i have", "i'm years"],
                exampleAnswers: ["I'm 25 years old.", "I am 30.", "I have 20 years."],
                followUp: {
                    success: ["That's a great age!", "You're young!", "That's wonderful!"],
                    fail: ["Diga: I am... years old", "Ou: I'm... (idade)"]
                },
                tips: ["Diga 'I am...' + idade + 'years old'", "Exemplo: I'm 25 years old"]
            },
            {
                id: "q4",
                question: "How many brothers or sisters do you have?",
                translation: "Quantos irmãos ou irmãs você tem?",
                expectedAnswers: ["i have", "i don't have", "i have one", "i have two", "no brothers", "no sisters", "just me", "i have three", "i don't"],
                exampleAnswers: ["I have two brothers.", "I have one sister.", "I don't have any brothers.", "Just me."],
                followUp: {
                    success: ["Family is important!", "That's great!", "Nice family!"],
                    fail: ["Diga: I have... + número + brothers/sisters", "Ou: I don't have..."]
                },
                tips: ["Use 'I have...' + número + 'brothers/sisters'", "Ou 'I don't have...' se não tem", "Exemplo: I have one sister"]
            },
            {
                id: "q5",
                question: "How are you today?",
                translation: "Como você está hoje?",
                expectedAnswers: ["i am good", "i'm good", "i am fine", "i'm fine", "i am happy", "i'm great", "not so good", "i'm well", "pretty good"],
                exampleAnswers: ["I'm good, thank you!", "I'm fine.", "I'm great today!", "Not so good."],
                followUp: {
                    success: ["That's great to hear!", "I'm glad you're well!", "Good!"],
                    fail: ["Diga: I'm good (Estou bem)", "Ou: I'm fine (Estou bem)"]
                },
                tips: ["Use 'I'm good' (Estou bem)", "Ou 'I'm fine' (Estou bem)", "Ou 'I'm happy' (Estou feliz)"]
            }
        ],
        greetings: [
            {text: "Hello! How are you today?", translation: "Olá! Como você está hoje?"},
            {text: "Hi there! Ready to practice?", translation: "Oi! Pronto para praticar?"},
            {text: "Good to see you! Let's chat!", translation: "Bom te ver! Vamos conversar!"},
            {text: "Welcome back! How have you been?", translation: "Bem-vindo de volta! Como você tem passado?"}
        ],
        encouragements: [
            {text: "You're doing great!", translation: "Você está indo muito bem!"},
            {text: "Keep it up!", translation: "Continue assim!"},
            {text: "Great job!", translation: "Ótimo trabalho!"},
            {text: "That's wonderful!", translation: "Isso é maravilhoso!"},
            {text: "That's great!", translation: "Isso é ótimo!"},
            {text: "You're getting better!", translation: "Você está melhorando!"}
        ],
        thinking: [
            {text: "Let me think of a question...", translation: "Deixa eu pensar em uma pergunta..."},
            {text: "Hmm, what should I ask you next?", translation: "Hmm, o que devo perguntar agora?"},
            {text: "I have a question for you...", translation: "Tenho uma pergunta para você..."},
            {text: "Let's try something different...", translation: "Vamos tentar algo diferente..."},
            {text: "Interesting! Tell me more...", translation: "Interessante! Conte-me mais..."},
            {text: "Now, let's continue...", translation: "Agora, vamos continuar..."}
        ]
    },
    
    2: {
        title: "No Restaurante",
        description: "Simule uma visita a um restaurante",
        icon: "🍽️",
        context: "Você está em um restaurante. O garçom chega à sua mesa.",
        contextTranslation: "You are at a restaurant. The waiter comes to your table.",
        questions: [
            {
                id: "r1",
                question: "Good evening! Welcome to our restaurant. Do you have a reservation?",
                translation: "Boa noite! Bem-vindo ao nosso restaurante. Você tem uma reserva?",
                expectedAnswers: ["yes", "no", "i have", "i don't", "yes i do", "no i don't", "i don't have"],
                exampleAnswers: ["Yes, I have a reservation.", "No, I don't.", "No, I don't have one."],
                followUp: {
                    success: ["Great! Please, come with me.", "Perfect! Your table is ready."],
                    fail: ["Diga: Yes (Sim) ou No (Não)", "Ou: Yes, I have... (Sim, eu tenho...)"]
                },
                tips: ["Diga 'Yes' (Sim) ou 'No' (Não)", "Exemplo: Yes, I have a reservation"]
            },
            {
                id: "r2",
                question: "Here is the menu. What would you like to drink?",
                translation: "Aqui está o cardápio. O que você gostaria de beber?",
                expectedAnswers: ["water", "coffee", "tea", "juice", "soda", "i would like", "can i have", "some", "please", "i'll have", "just water"],
                exampleAnswers: ["I would like some water, please.", "Can I have a coffee?", "Just water, please.", "I'll have a tea."],
                followUp: {
                    success: ["Great choice! Anything else?", "Good! I'll bring it now!", "Perfect! What else?"],
                    fail: ["Diga: I would like... (Eu gostaria de...)", "Ou: Can I have... (Posso ter...)"]
                },
                tips: ["Use 'I would like...' + bebida", "Ou 'Can I have...' + bebida", "Exemplo: I would like some water"]
            },
            {
                id: "r3",
                question: "Are you ready to order food?",
                translation: "Estão prontos para pedir a comida?",
                expectedAnswers: ["yes", "i am", "not yet", "i need more time", "what do you recommend", "almost", "yes we are", "i'm ready"],
                exampleAnswers: ["Yes, I'm ready.", "Not yet, I need more time.", "What do you recommend?"],
                followUp: {
                    success: ["Great! What would you like?", "Sure! Take your time.", "Our best dish is the pasta."],
                    fail: ["Diga: Yes (Sim) ou Not yet (Ainda não)", "Ou: What do you recommend? (O que você recomenda?)"]
                },
                tips: ["Diga 'Yes' ou 'Not yet'", "Ou pergunte: What do you recommend?"]
            },
            {
                id: "r4",
                question: "What would you like to eat?",
                translation: "O que você gostaria de comer?",
                expectedAnswers: ["pasta", "pizza", "salad", "chicken", "fish", "steak", "soup", "i would like", "can i have", "some", "i'll have", "the pasta", "the pizza"],
                exampleAnswers: ["I would like the pasta.", "Can I have a pizza?", "I'll have the chicken.", "The salad, please."],
                followUp: {
                    success: ["Great choice! Anything else?", "That's our best dish!", "Good! Anything else?"],
                    fail: ["Diga: I would like the... (Eu gostaria da/do...)", "Escolha: pasta, pizza, salad, chicken, fish"]
                },
                tips: ["Use 'I would like the...' + comida", "Escolha: pasta (massa), pizza, salad (salada), chicken (frango)"]
            },
            {
                id: "r5",
                question: "How is everything? Is the food good?",
                translation: "Como está tudo? A comida está boa?",
                expectedAnswers: ["yes", "it is", "great", "delicious", "good", "wonderful", "amazing", "it's good", "very good", "excellent"],
                exampleAnswers: ["Yes, it's delicious!", "The food is great!", "It's wonderful!", "Very good!"],
                followUp: {
                    success: ["I'm happy you like it!", "That makes me happy!", "Enjoy your meal!"],
                    fail: ["Diga: It's great! (Está ótimo!)", "Ou: Yes, delicious! (Sim, delicioso!)"]
                },
                tips: ["Diga 'It's great!' ou 'Yes, delicious!'", "Outras opções: wonderful, amazing, very good"]
            },
            {
                id: "r6",
                question: "Would you like dessert?",
                translation: "Gostariam de sobremesa?",
                expectedAnswers: ["yes", "no", "i would like", "i'll have", "no thank you", "maybe", "what do you have", "yes please", "no thanks"],
                exampleAnswers: ["Yes, please.", "No, thank you.", "What do you have?", "I'll have a cake."],
                followUp: {
                    success: ["I'll bring it now!", "Great choice! You'll love it!", "No problem!"],
                    fail: ["Diga: Yes, please (Sim, por favor)", "Ou: No, thank you (Não, obrigado)"]
                },
                tips: ["Diga 'Yes, please' ou 'No, thank you'", "Ou pergunte: What do you have?"]
            },
            {
                id: "r7",
                question: "Can I get you anything else?",
                translation: "Posso trazer mais alguma coisa?",
                expectedAnswers: ["no", "that's all", "just the check", "the bill please", "nothing else", "no that's all", "just the bill", "we're done"],
                exampleAnswers: ["No, that's all.", "Just the check, please.", "That's all, thank you."],
                followUp: {
                    success: ["I'll bring the check now.", "Perfect! I'll be right back.", "Thank you!"],
                    fail: ["Diga: No, that's all (Não, é tudo)", "Ou: Just the check, please (Só a conta, por favor)"]
                },
                tips: ["Diga 'No, that's all' ou 'Just the check, please'", "Outras opções: That's all, thank you"]
            },
            {
                id: "r8",
                question: "Here is your check. The total is forty-five dollars. How would you like to pay?",
                translation: "Aqui está a conta. O total é quarenta e cinco dólares. Como você gostaria de pagar?",
                expectedAnswers: ["cash", "credit card", "debit", "card", "with card", "with cash", "i'll pay with", "by card", "by cash"],
                exampleAnswers: ["I'll pay with card.", "Cash, please.", "Credit card.", "By card."],
                followUp: {
                    success: ["Thank you! Have a wonderful evening!", "Perfect! Here is your receipt.", "Thank you! Come back soon!"],
                    fail: ["Diga: Cash (Dinheiro) ou Credit card (Cartão)", "Ou: I'll pay with card (Vou pagar com cartão)"]
                },
                tips: ["Diga 'Cash' (dinheiro) ou 'Credit card' (cartão)", "Ou: I'll pay with card"]
            }
        ],
        encouragements: [
            {text: "Great English!", translation: "Inglês excelente!"},
            {text: "You're ordering like a native!", translation: "Você está pedindo como um nativo!"},
            {text: "Perfect pronunciation!", translation: "Pronúncia perfeita!"},
            {text: "The waiter understands you!", translation: "O garçom entendeu!"},
            {text: "Excellent! You're doing great!", translation: "Excelente! Você está fazendo ótimo!"},
            {text: "That's exactly right!", translation: "Isso está exatamente certo!"}
        ]
    },
    
    3: {
        title: "Na Loja de Roupas",
        description: "Simule uma compra em uma loja",
        icon: "👗",
        context: "Você está em uma loja de roupas. Um vendedor se aproxima.",
        contextTranslation: "You are at a clothing store. A salesperson approaches you.",
        questions: [
            {
                id: "s1",
                question: "Hi! Welcome to our store. Can I help you find something?",
                translation: "Oi! Bem-vindo à nossa loja. Posso te ajudar a encontrar algo?",
                expectedAnswers: ["yes", "no", "i'm looking for", "just looking", "maybe", "something"],
                followUp: {
                    success: ["Sure! What are you looking for?", "No problem! Take your time."],
                    fail: ["Say 'I'm looking for...' (Estou procurando...) or 'Just looking' (Só olhando)"]
                },
                tips: ["Say 'I'm looking for...' (Estou procurando...) or 'Just looking' (Só olhando)"]
            },
            {
                id: "s2",
                question: "What size do you wear?",
                translation: "Qual é o seu tamanho?",
                expectedAnswers: ["small", "medium", "large", "extra large", "small size", "medium size", "large size"],
                followUp: {
                    success: ["I understand! Let me check what we have.", "Good! I have some great options."],
                    fail: ["Say 'Small' (P), 'Medium' (M) or 'Large' (G)"]
                },
                tips: ["Say Small (P), Medium (M), Large (G) or Extra Large (GG)"]
            },
            {
                id: "s3",
                question: "What color do you prefer?",
                translation: "Qual cor você prefere?",
                expectedAnswers: ["black", "white", "blue", "red", "green", "gray", "brown", "i like", "i prefer"],
                followUp: {
                    success: ["Good choice! That color is very popular.", "Great taste!"],
                    fail: ["Say 'I like...' (Eu gosto de...) or name a color"]
                },
                tips: ["Colors: black (preto), white (branco), blue (azul), red (vermelho), green (verde)"]
            },
            {
                id: "s4",
                question: "How about this shirt? It looks great on you.",
                translation: "Que tal esta camisa? Fica ótima em você.",
                expectedAnswers: ["i like it", "it's nice", "it's beautiful", "how much", "how much is it", "what's the price"],
                followUp: {
                    success: ["I knew you'd like it! Do you want to try it?", "It looks perfect on you!"],
                    fail: ["Say 'I like it!' (Gosto dela!) or 'How much is it?' (Quanto custa?)"]
                },
                tips: ["Say 'I like it!' or 'How much is it?'"]
            },
            {
                id: "s5",
                question: "This shirt is thirty-five dollars. Would you like to buy it?",
                translation: "Esta camisa custa trinta e cinco dólares. Você gostaria de comprá-la?",
                expectedAnswers: ["yes", "no", "i'll take it", "that's too expensive", "can you give me a discount", "maybe"],
                followUp: {
                    success: ["Great choice! I'll get it for you.", "Excellent! Let me get it for you."],
                    fail: ["Say 'Yes, I'll take it' (Sim, vou levar) or 'That's too expensive' (Isso é caro demais)"]
                },
                tips: ["Say 'Yes, I'll take it' or 'That's too expensive'"]
            },
            {
                id: "s6",
                question: "Do you want to pay with cash or card?",
                translation: "Você quer pagar com dinheiro ou cartão?",
                expectedAnswers: ["cash", "card", "credit card", "debit card", "with card", "with cash"],
                followUp: {
                    success: ["Perfect! Here you go.", "Thank you! Here is your receipt."],
                    fail: ["Say 'Cash' (Dinheiro) or 'Card' (Cartão)"]
                },
                tips: ["Say 'Cash' (dinheiro) or 'Card' (cartão)"]
            },
            {
                id: "s7",
                question: "Thank you for shopping with us! Have a nice day!",
                translation: "Obrigado por comprar conosco! Tenha um bom dia!",
                expectedAnswers: ["thank you", "you too", "have a nice day", "goodbye", "bye"],
                followUp: {
                    success: ["Come back soon!", "We hope to see you again!"],
                    fail: ["Say 'Thank you!' (Obrigado!) or 'You too!' (Você também!)"]
                },
                tips: ["Say 'Thank you!' or 'You too!'"]
            }
        ],
        encouragements: [
            {text: "Great job!", translation: "Ótimo trabalho!"},
            {text: "Perfect English!", translation: "Inglês perfeito!"},
            {text: "They understood you!", translation: "Eles entenderam!"},
            {text: "Excellent work!", translation: "Excelente trabalho!"},
            {text: "You're doing fantastic!", translation: "Você está fazendo fantástico!"},
            {text: "That was excellent!", translation: "Isso foi excelente!"}
        ]
    },
    
    4: {
        title: "No Consultório Médico",
        description: "Simule uma visita ao médico",
        icon: "🏥",
        context: "Você está no consultório do médico. O médico faz perguntas sobre sua saúde.",
        contextTranslation: "You are at the doctor's office. The doctor asks about your health.",
        questions: [
            {
                id: "m1",
                question: "Good morning! What is the problem today?",
                translation: "Bom dia! Qual é o problema hoje?",
                expectedAnswers: ["i have", "i feel", "my", "it hurts", "i'm sick", "i have a headache", "i have a cold"],
                followUp: {
                    success: ["I understand. How long have you felt this way?", "OK, tell me more about that."],
                    fail: ["Say 'I have a headache' (Tenho dor de cabeça) or 'I feel sick' (Estou sentindo-me mal)"]
                },
                tips: ["Say 'I have...' (Tenho...) or 'I feel...' (Estou sentindo...) + problem"]
            },
            {
                id: "m2",
                question: "How long have you felt this way?",
                translation: "Há quanto tempo você está sentindo isso?",
                expectedAnswers: ["since", "for", "a few days", "a week", "today", "yesterday", "this morning"],
                followUp: {
                    success: ["I understand. Any other symptom?", "OK, let me check some things."],
                    fail: ["Use 'Since Monday' (Desde segunda) or 'For two days' (Há dois dias)"]
                },
                tips: ["Use 'Since' (Desde) + day or 'For' (Há) + time"]
            },
            {
                id: "m3",
                question: "Do you have any other symptom? Like fever or cough?",
                translation: "Você tem algum outro sintoma? Como febre ou tosse?",
                expectedAnswers: ["yes", "no", "i have a fever", "i have a cough", "i'm coughing"],
                followUp: {
                    success: ["I understand. Let me examine you.", "OK, that helps me understand."],
                    fail: ["Say 'Yes, I have a fever' (Sim, tenho febre) or 'No' (Não)"]
                },
                tips: ["Say 'Yes' (Sim) + symptom or 'No' (Não)"]
            },
            {
                id: "m4",
                question: "Are you taking any medication right now?",
                translation: "Você está tomando algum medicamento agora?",
                expectedAnswers: ["yes", "no", "i take", "i'm taking", "nothing", "no medication"],
                followUp: {
                    success: ["Good. Any allergy?", "OK, that is important to know."],
                    fail: ["Say 'Yes, I take...' (Sim, eu tomo...) or 'No' (Não)"]
                },
                tips: ["Say 'Yes' or 'No'"]
            },
            {
                id: "m5",
                question: "Do you have any allergy to medicine?",
                translation: "Você tem alguma alergia a medicamento?",
                expectedAnswers: ["yes", "no", "i'm allergic to", "i have allergies", "no allergies"],
                followUp: {
                    success: ["Thank you for telling me.", "Good to know."],
                    fail: ["Say 'No' (Não) or 'Yes, I'm allergic to...' (Sim, sou alérgico a...)"]
                },
                tips: ["Say 'No' or 'Yes, I'm allergic to...'"]
            },
            {
                id: "m6",
                question: "I will give you some medicine. Take it twice a day for one week.",
                translation: "Vou te dar um medicamento. Tome duas vezes ao dia por uma semana.",
                expectedAnswers: ["okay", "thank you", "i understand", "got it", "twice a day"],
                followUp: {
                    success: ["Rest and drink a lot of water.", "You should feel better in a few days."],
                    fail: ["Say 'Thank you' (Obrigado) or 'I understand' (Eu entendo)"]
                },
                tips: ["Say 'Thank you' or 'I understand'"]
            },
            {
                id: "m7",
                question: "Do you have any question?",
                translation: "Você tem alguma pergunta?",
                expectedAnswers: ["no", "yes", "when should i come back", "how often", "what if"],
                followUp: {
                    success: ["Great! Take care.", "Don't worry, you'll be fine!"],
                    fail: ["Say 'No, thank you' (Não, obrigado) or ask a question"]
                },
                tips: ["Say 'No, thank you' or ask when to come back"]
            }
        ],
        encouragements: [
            {text: "You explained your symptoms well!", translation: "Você explicou seus sintomas bem!"},
            {text: "The doctor understood you!", translation: "O médico entendeu!"},
            {text: "Excellent English!", translation: "Inglês excelente!"},
            {text: "Great job describing your problem!", translation: "Ótimo trabalho descrevendo seu problema!"},
            {text: "You're communicating very well!", translation: "Você está se comunicando muito bem!"},
            {text: "Perfect! Keep it up!", translation: "Perfeito! Continue assim!"}
        ]
    },
    
    5: {
        title: "Fazendo um Telefonema",
        description: "Simule uma ligação telefônica",
        icon: "📞",
        context: "Você está ligando para um hotel para fazer uma reserva.",
        contextTranslation: "You are calling a hotel to make a reservation.",
        questions: [
            {
                id: "p1",
                question: "Hello! Thank you for calling. How may I help you?",
                translation: "Olá! Obrigada por ligar. Como posso te ajudar?",
                expectedAnswers: ["i would like", "i want to", "can i", "i need", "i'm calling to"],
                followUp: {
                    success: ["Sure! How can I help you?", "Of course! Tell me more."],
                    fail: ["Start with 'I would like to...' (Eu gostaria de...) or 'I'm calling to...' (Estou ligando para...)"]
                },
                tips: ["Start with 'I would like to...' or 'I'm calling to...'"]
            },
            {
                id: "p2",
                question: "I'd like to make a reservation. What dates are you looking for?",
                translation: "Eu gostaria de fazer uma reserva. Quais datas você está procurando?",
                expectedAnswers: ["i want", "i need", "from", "until", "next week", "this weekend", "next month"],
                followUp: {
                    success: ["Great! How many people?", "Perfect! Let me check availability."],
                    fail: ["Say the dates: 'From Monday to Friday' (De segunda a sexta) or 'Next week' (Próxima semana)"]
                },
                tips: ["Say the dates or 'Next week' (Próxima semana)"]
            },
            {
                id: "p3",
                question: "How many people will be staying?",
                translation: "Quantas pessoas vão se hospedar?",
                expectedAnswers: ["one", "two", "three", "four", "just me", "my family", "with my wife"],
                followUp: {
                    success: ["I understand! What type of room do you prefer?", "Good! We have many options."],
                    fail: ["Say 'Just me' (Só eu) or 'Two people' (Duas pessoas)"]
                },
                tips: ["Say 'Just me' or 'Two people'"]
            },
            {
                id: "p4",
                question: "What type of room do you prefer? Single, double, or suite?",
                translation: "Que tipo de quarto você prefere? Solteiro, casal ou suíte?",
                expectedAnswers: ["single", "double", "suite", "i would like a", "the cheapest", "a cheap room"],
                followUp: {
                    success: ["Good choice! That room costs $120 per night.", "Excellent! We have it available."],
                    fail: ["Say 'A single room' (Quarto solteiro) or 'A double room' (Quarto casal)"]
                },
                tips: ["Say 'A single room' (solteiro) or 'A double room' (casal)"]
            },
            {
                id: "p5",
                question: "The room is one hundred twenty dollars per night. Would you like to book it?",
                translation: "O quarto custa cento e vinte dólares por noite. Você gostaria de reservá-lo?",
                expectedAnswers: ["yes", "no", "that's too expensive", "can you give me a discount", "i'll take it", "maybe"],
                followUp: {
                    success: ["Perfect! I'll book it for you.", "Great! I'll confirm the details."],
                    fail: ["Say 'Yes, I'll book it' (Sim, vou reservar) or 'That's too expensive' (Isso é caro demais)"]
                },
                tips: ["Say 'Yes, I'll book it' or 'That's too expensive'"]
            },
            {
                id: "p6",
                question: "Can I have your name and phone number, please?",
                translation: "Posso ter seu nome e número de telefone, por favor?",
                expectedAnswers: ["my name is", "i am", "my number is", "you can reach me at"],
                followUp: {
                    success: ["Thank you! Your reservation is confirmed.", "Perfect! We'll see you soon."],
                    fail: ["Say 'My name is...' (Meu nome é...) and 'My phone number is...' (Meu telefone é...)"]
                },
                tips: ["Say 'My name is...' and 'My phone number is...'"]
            },
            {
                id: "p7",
                question: "Is there anything else I can help you with?",
                translation: "Tem mais alguma coisa que posso te ajudar?",
                expectedAnswers: ["no", "that's all", "nothing else", "no thank you", "what time is check-in"],
                followUp: {
                    success: ["Thank you for calling! Have a great day!", "See you soon! Bye!"],
                    fail: ["Say 'No, that's all' (Não, é tudo) or ask about check-in"]
                },
                tips: ["Say 'No, that's all' or ask something"]
            }
        ],
        encouragements: [
            {text: "Great job on the phone!", translation: "Ótimo trabalho ao telefone!"},
            {text: "You sound great!", translation: "Você soa ótimo!"},
            {text: "Excellent communication!", translation: "Comunicação excelente!"},
            {text: "They understood you!", translation: "Eles entenderam!"},
            {text: "You're doing amazing!", translation: "Você está fazendo incrível!"},
            {text: "Perfect English on the phone!", translation: "Inglês perfeito ao telefone!"}
        ]
    },
    
    6: {
        title: "Na Padaria",
        description: "Simule uma compra na padaria",
        icon: "🥐",
        context: "Você está em uma padaria. O atendente pergunta como pode ajudar.",
        contextTranslation: "You are at a bakery. The clerk asks how they can help.",
        questions: [
            {
                id: "b1",
                question: "Good morning! What would you like?",
                translation: "Bom dia! O que você gostaria?",
                expectedAnswers: ["i would like", "can i have", "i want", "do you have", "what do you have"],
                followUp: {
                    success: ["Sure! Anything else?", "Good choice!"],
                    fail: ["Say 'I would like...' (Eu gostaria de...) or 'Can I have...' (Posso ter...)"]
                },
                tips: ["Say 'I would like...' or 'Can I have...'"]
            },
            {
                id: "b2",
                question: "Would you like bread or pastry?",
                translation: "Você gostaria de pão ou de massa/bolo?",
                expectedAnswers: ["bread", "pastry", "both", "i would like bread", "i would like pastry", "just bread"],
                followUp: {
                    success: ["Sure! What kind?", "We have fresh bread and pastries."],
                    fail: ["Say 'Bread' (Pão) or 'Pastry' (Massa/Bolo)"]
                },
                tips: ["Say 'Bread' (pão) or 'Pastry' (massa/bolo)"]
            },
            {
                id: "b3",
                question: "What kind of bread? White, whole wheat, or French?",
                translation: "Que tipo de pão? Branco, integral ou francês?",
                expectedAnswers: ["white", "whole wheat", "french", "i would like", "the white one", "french bread"],
                followUp: {
                    success: ["Good! How much would you like?", "Great choice!"],
                    fail: ["Say 'White bread' (Pão branco) or 'French bread' (Pão francês)"]
                },
                tips: ["Say 'White bread' (branco), 'Whole wheat' (integral) or 'French bread' (francês)"]
            },
            {
                id: "b4",
                question: "How much would you like? Half a kilo or a full kilo?",
                translation: "Quanto você gostaria? Meio quilo ou um quilo?",
                expectedAnswers: ["half a kilo", "a full kilo", "one kilo", "half", "a small piece", "just a little"],
                followUp: {
                    success: ["Perfect! Anything else?", "Understood!"],
                    fail: ["Say 'Half a kilo' (Meio quilo) or 'One kilo' (Um quilo)"]
                },
                tips: ["Say 'Half a kilo' (meio quilo) or 'One kilo' (um quilo)"]
            },
            {
                id: "b5",
                question: "Would you like anything else? We have fresh croissants and cakes.",
                translation: "Gostaria de mais alguma coisa? Temos croissants frescos e bolos.",
                expectedAnswers: ["yes", "no", "i would like", "no thank you", "that's all", "a croissant"],
                followUp: {
                    success: ["Good! Is that all?", "Wonderful! I'll get it for you."],
                    fail: ["Say 'Yes, a croissant' (Sim, um croissant) or 'No, that's all' (Não, é tudo)"]
                },
                tips: ["Say 'Yes' + what you want or 'No, that's all'"]
            },
            {
                id: "b6",
                question: "The total is eight dollars and fifty cents. How would you like to pay?",
                translation: "O total é oito dólares e cinquenta centavos. Como você gostaria de pagar?",
                expectedAnswers: ["cash", "card", "credit card", "with card", "with cash"],
                followUp: {
                    success: ["Thank you! Here you go.", "Perfect! Have a great day!"],
                    fail: ["Say 'Cash' (Dinheiro) or 'Card' (Cartão)"]
                },
                tips: ["Say 'Cash' (dinheiro) or 'Card' (cartão)"]
            },
            {
                id: "b7",
                question: "Thank you! Have a wonderful day!",
                translation: "Obrigada! Tenha um dia maravilhoso!",
                expectedAnswers: ["thank you", "you too", "have a nice day", "goodbye", "bye", "see you"],
                followUp: {
                    success: ["Come back soon!", "See you next time!"],
                    fail: ["Say 'Thank you!' (Obrigado!) or 'You too!' (Você também!)"]
                },
                tips: ["Say 'Thank you!' or 'You too!'"]
            }
        ],
        encouragements: [
            {text: "You ordered like a native!", translation: "Você pediu como um nativo!"},
            {text: "Perfect pronunciation!", translation: "Pronúncia perfeita!"},
            {text: "The baker understood you!", translation: "O padeiro entendeu!"},
            {text: "Great English!", translation: "Inglês excelente!"},
            {text: "You're doing fantastic!", translation: "Você está fazendo fantástico!"},
            {text: "Excellent job!", translation: "Excelente trabalho!"}
        ]
    },

    // ============================================
    // MODULO 2 - NOVOS CENARIOS DE CONVERSACAO
    // ============================================

    7: {
        title: "Apresentacao Pessoal",
        description: "Apresente-se e fale sobre voce mesmo",
        icon: "👤",
        questions: [
            {
                id: "q1",
                question: "What is your name?",
                translation: "Qual e o seu nome?",
                expectedAnswers: ["my name", "i am", "i'm", "name is"],
                followUp: {
                    success: ["Nice to meet you!", "That's a great name!", "Beautiful name!"],
                    fail: ["Say 'My name is...' (Meu nome e...)", "Try: 'I am...' (Eu sou...)"]
                },
                tips: ["Say 'My name is...' or 'I am...'"]
            },
            {
                id: "q2",
                question: "How old are you?",
                translation: "Quantos anos voce tem?",
                expectedAnswers: ["i am", "i'm", "years old", "years"],
                followUp: {
                    success: ["Great!", "Wonderful!", "That's a good age!"],
                    fail: ["Say 'I am... years old' (Eu tenho... anos)"]
                },
                tips: ["Say 'I am [number] years old'"]
            },
            {
                id: "q3",
                question: "Where are you from?",
                translation: "De onde voce e?",
                expectedAnswers: ["i am from", "i'm from", "from brazil", "from sao paulo"],
                followUp: {
                    success: ["Brazil is beautiful!", "I love Brazil!", "What a great country!"],
                    fail: ["Say 'I am from...' (Eu sou de...)"]
                },
                tips: ["Say 'I am from Brazil' or 'I am from São Paulo'"]
            },
            {
                id: "q4",
                question: "What do you do for a living?",
                translation: "O que voce faz da vida?",
                expectedAnswers: ["i work", "i am a", "i'm a", "i am a student", "i'm a student"],
                followUp: {
                    success: ["That's interesting!", "Great job!", "I respect that!"],
                    fail: ["Say 'I work at...' or 'I am a...' (Eu trabalho em... ou Eu sou...)"]
                },
                tips: ["Say 'I work at...' or 'I am a...'"]
            },
            {
                id: "q5",
                question: "Where do you live?",
                translation: "Onde voce mora?",
                expectedAnswers: ["i live", "i live in", "i live at", "i live on"],
                followUp: {
                    success: ["That's a nice place!", "I love that city!", "Beautiful location!"],
                    fail: ["Say 'I live in...' (Eu moro em...)"]
                },
                tips: ["Say 'I live in [city]'"]
            },
            {
                id: "q6",
                question: "Do you have any brothers or sisters?",
                translation: "Voce tem irmaos ou irmas?",
                expectedAnswers: ["yes i have", "i have one", "i have two", "no i don't", "no i do not"],
                followUp: {
                    success: ["Family is important!", "That's wonderful!", "Nice family!"],
                    fail: ["Say 'Yes, I have...' or 'No, I don't...'"]
                },
                tips: ["Say 'Yes, I have...' or 'No, I don't'"]
            },
            {
                id: "q7",
                question: "What do you like to do in your free time?",
                translation: "O que voce gosta de fazer no seu tempo livre?",
                expectedAnswers: ["i like", "i enjoy", "i love", "i like to", "i enjoy to"],
                followUp: {
                    success: ["That sounds fun!", "Great hobby!", "I like that too!"],
                    fail: ["Say 'I like to...' or 'I enjoy...' (Eu gosto de...)"]
                },
                tips: ["Say 'I like to [verb]' or 'I enjoy [verb]-ing'"]
            },
            {
                id: "q8",
                question: "Why are you learning English?",
                translation: "Por que voce esta aprendendo ingles?",
                expectedAnswers: ["because", "i want to", "for work", "for travel", "to travel", "to work"],
                followUp: {
                    success: ["That's a great reason!", "You're doing great!", "Keep learning!"],
                    fail: ["Say 'Because...' or 'I want to...' (Porque... ou Eu quero...)"]
                },
                tips: ["Say 'Because...' or 'I want to...'"]
            }
        ],
        encouragements: [
            {text: "You introduced yourself perfectly!", translation: "Voce se apresentou perfeitamente!"},
            {text: "Great introduction!", translation: "Otima apresentacao!"},
            {text: "Your English is improving!", translation: "Seu ingles esta melhorando!"},
            {text: "Wonderful! Keep going!", translation: "Maravilhoso! Continue!"},
            {text: "You're doing amazing!", translation: "Voce esta fazendo incrivel!"},
            {text: "Excellent self-introduction!", translation: "Excelente autoapresentacao!"}
        ]
    },

    8: {
        title: "No Trabalho",
        description: "Fale sobre seu trabalho e rotina profissional",
        icon: "💼",
        questions: [
            {
                id: "q1",
                question: "What do you do for work?",
                translation: "O que voce faz para trabalhar?",
                expectedAnswers: ["i work", "i am a", "i'm a", "i work at", "i work in"],
                followUp: {
                    success: ["That's a great profession!", "Interesting job!", "I respect that!"],
                    fail: ["Say 'I work at...' or 'I am a...'"]
                },
                tips: ["Say 'I work at [place]' or 'I am a [job]'"]
            },
            {
                id: "q2",
                question: "Where do you work?",
                translation: "Onde voce trabalha?",
                expectedAnswers: ["i work at", "i work in", "at a", "in an", "in a"],
                followUp: {
                    success: ["That sounds nice!", "Great workplace!", "I like that place!"],
                    fail: ["Say 'I work at [place]'"]
                },
                tips: ["Say 'I work at a [place]'"]
            },
            {
                id: "q3",
                question: "What time do you start work?",
                translation: "Que horas voce comeca a trabalhar?",
                expectedAnswers: ["i start", "at", "in the morning", "am", "pm"],
                followUp: {
                    success: ["Early bird!", "That's a good schedule!", "Nice routine!"],
                    fail: ["Say 'I start at [time]'"]
                },
                tips: ["Say 'I start at [time] AM/PM'"]
            },
            {
                id: "q4",
                question: "Do you like your job?",
                translation: "Voce gosta do seu trabalho?",
                expectedAnswers: ["yes", "i like", "i love", "yes i do", "yes i love"],
                followUp: {
                    success: ["That's wonderful!", "Job satisfaction is important!", "Great!"],
                    fail: ["Say 'Yes, I love my job' or 'Yes, I like it'"]
                },
                tips: ["Say 'Yes, I love/like my job'"]
            },
            {
                id: "q5",
                question: "What do you do at work?",
                translation: "O que voce faz no trabalho?",
                expectedAnswers: ["i work on", "i help", "i manage", "i create", "i build", "i write", "i sell"],
                followUp: {
                    success: ["Sounds interesting!", "That's important work!", "Great responsibilities!"],
                    fail: ["Say 'I work on...' or 'I help...'"]
                },
                tips: ["Describe what you do: 'I work on...', 'I help...'"]
            },
            {
                id: "q6",
                question: "Do you work with other people?",
                translation: "Voce trabalha com outras pessoas?",
                expectedAnswers: ["yes", "yes i do", "i work with", "my team", "my colleagues"],
                followUp: {
                    success: ["Teamwork is great!", "That's nice!", "Collaboration is important!"],
                    fail: ["Say 'Yes, I work with...' or 'Yes, with my team'"]
                },
                tips: ["Say 'Yes, I work with my team' or 'Yes, with my colleagues'"]
            },
            {
                id: "q7",
                question: "What do you like most about your job?",
                translation: "O que voce mais gosta no seu trabalho?",
                expectedAnswers: ["i like", "i enjoy", "the people", "the hours", "the salary", "the work"],
                followUp: {
                    success: ["That's a great reason!", "I understand!", "That's important!"],
                    fail: ["Say 'I like...' or 'I enjoy...'"]
                },
                tips: ["Say 'I like the [thing]' or 'I enjoy...'"]
            }
        ],
        encouragements: [
            {text: "You're a professional speaker!", translation: "Voce e um falante profissional!"},
            {text: "Your work vocabulary is excellent!", translation: "Seu vocabulario de trabalho e excelente!"},
            {text: "Great job describing your work!", translation: "Otimo trabalho descrevendo seu emprego!"},
            {text: "You sound very professional!", translation: "Voce soa muito profissional!"},
            {text: "Keep practicing work English!", translation: "Continue praticando ingles de trabalho!"},
            {text: "Excellent work vocabulary!", translation: "Excelente vocabulario de trabalho!"}
        ]
    },

    9: {
        title: "Na Escola",
        description: "Fale sobre seus estudos e vida escolar",
        icon: "📚",
        questions: [
            {
                id: "q1",
                question: "Are you a student?",
                translation: "Voce e estudante?",
                expectedAnswers: ["yes", "yes i am", "i am a student", "i'm a student", "no"],
                followUp: {
                    success: ["That's great!", "Education is important!", "Keep studying!"],
                    fail: ["Say 'Yes, I am a student' or 'No, I'm not'"]
                },
                tips: ["Say 'Yes, I am' or 'No, I'm not'"]
            },
            {
                id: "q2",
                question: "What do you study?",
                translation: "O que voce estuda?",
                expectedAnswers: ["i study", "i study english", "i study math", "i study science"],
                followUp: {
                    success: ["That's interesting!", "Great subject!", "Education is key!"],
                    fail: ["Say 'I study [subject]'"]
                },
                tips: ["Say 'I study [subject]'"]
            },
            {
                id: "q3",
                question: "Where do you study?",
                translation: "Onde voce estuda?",
                expectedAnswers: ["i study at", "at school", "at university", "at college", "at home"],
                followUp: {
                    success: ["That's a good school!", "Great institution!", "I like that place!"],
                    fail: ["Say 'I study at [place]'"]
                },
                tips: ["Say 'I study at [school/university]'"]
            },
            {
                id: "q4",
                question: "What time does your class start?",
                translation: "Que horas sua aula comeca?",
                expectedAnswers: ["at", "in the morning", "am", "pm", "class starts"],
                followUp: {
                    success: ["Early start!", "That's a good time!", "Nice schedule!"],
                    fail: ["Say 'My class starts at [time]'"]
                },
                tips: ["Say 'My class starts at [time]'"]
            },
            {
                id: "q5",
                question: "Do you like studying English?",
                translation: "Voce gosta de estudar ingles?",
                expectedAnswers: ["yes", "yes i do", "i like", "i love", "yes i like", "yes i love"],
                followUp: {
                    success: ["That's why you're improving!", "Great attitude!", "Keep it up!"],
                    fail: ["Say 'Yes, I like/love studying English'"]
                },
                tips: ["Say 'Yes, I love/like it'"]
            },
            {
                id: "q6",
                question: "What is your favorite subject?",
                translation: "Qual e sua materia favorita?",
                expectedAnswers: ["my favorite", "i like", "i love", "favorite subject"],
                followUp: {
                    success: ["Great choice!", "That's interesting!", "I like that too!"],
                    fail: ["Say 'My favorite subject is...' or 'I like...'"]
                },
                tips: ["Say 'My favorite subject is [subject]'"]
            },
            {
                id: "q7",
                question: "Do you have homework today?",
                translation: "Voce tem licao de casa hoje?",
                expectedAnswers: ["yes", "yes i do", "no", "no i don't", "i have", "i don't have"],
                followUp: {
                    success: ["Homework is important!", "Keep studying!", "That's good!"],
                    fail: ["Say 'Yes, I have homework' or 'No, I don't'"]
                },
                tips: ["Say 'Yes, I have homework' or 'No, I don't'"]
            }
        ],
        encouragements: [
            {text: "You're a great student!", translation: "Voce e um otimo estudante!"},
            {text: "Your school English is excellent!", translation: "Seu ingles escolar e excelente!"},
            {text: "Keep studying hard!", translation: "Continue estudando muito!"},
            {text: "Education is the key to success!", translation: "Educacao e a chave do sucesso!"},
            {text: "You're learning so fast!", translation: "Voce esta aprendendo tao rapido!"},
            {text: "Excellent school vocabulary!", translation: "Excelente vocabulario escolar!"}
        ]
    },

    10: {
        title: "Fim de Semana",
        description: "Fale sobre seus planos de fim de semana",
        icon: "🎉",
        questions: [
            {
                id: "q1",
                question: "What do you usually do on weekends?",
                translation: "O que voce geralmente faz nos fins de semana?",
                expectedAnswers: ["i usually", "i go", "i like to", "i relax", "i rest"],
                followUp: {
                    success: ["Sounds fun!", "That's relaxing!", "Great weekend plan!"],
                    fail: ["Say 'I usually...' or 'I like to...'"]
                },
                tips: ["Say 'I usually [activity]' or 'I like to [verb]'"]
            },
            {
                id: "q2",
                question: "Do you like to stay at home or go out?",
                translation: "Voce gosta de ficar em casa ou sair?",
                expectedAnswers: ["stay at home", "go out", "i like to stay", "i like to go"],
                followUp: {
                    success: ["Both are great!", "That's nice!", "I understand!"],
                    fail: ["Say 'I like to stay at home' or 'I like to go out'"]
                },
                tips: ["Say 'I like to [stay/go]'"]
            },
            {
                id: "q3",
                question: "What do you do with your family on weekends?",
                translation: "O que voce faz com sua familia nos fins de semana?",
                expectedAnswers: ["we go", "we eat", "we watch", "we play", "we visit"],
                followUp: {
                    success: ["Family time is important!", "That's wonderful!", "Great family activity!"],
                    fail: ["Say 'We usually...' or 'We go...'"]
                },
                tips: ["Say 'We usually [activity]'"]
            },
            {
                id: "q4",
                question: "Do you exercise on weekends?",
                translation: "Voce se exercita nos fins de semana?",
                expectedAnswers: ["yes", "yes i do", "i go to", "i run", "i walk", "no"],
                followUp: {
                    success: ["Exercise is important!", "Stay healthy!", "Great habit!"],
                    fail: ["Say 'Yes, I...' or 'No, I don't'"]
                },
                tips: ["Say 'Yes, I go to the gym' or 'No, I don't'"]
            },
            {
                id: "q5",
                question: "What did you do last weekend?",
                translation: "O que voce fez no fim de semana passado?",
                expectedAnswers: ["i went", "i stayed", "i watched", "i visited", "i played"],
                followUp: {
                    success: ["That sounds fun!", "Great weekend!", "I like that!"],
                    fail: ["Say 'I went...' or 'I stayed...' (passado)"]
                },
                tips: ["Use past tense: 'I went...', 'I watched...'"]
            },
            {
                id: "q6",
                question: "Do you have any plans for next weekend?",
                translation: "Voce tem algum plano para o proximo fim de semana?",
                expectedAnswers: ["yes", "i plan to", "i want to", "i'm going to", "i will"],
                followUp: {
                    success: ["That sounds great!", "Have fun!", "Enjoy your weekend!"],
                    fail: ["Say 'Yes, I plan to...' or 'I want to...'"]
                },
                tips: ["Say 'I plan to [verb]' or 'I want to [verb]'"]
            },
            {
                id: "q7",
                question: "Do you prefer Saturdays or Sundays?",
                translation: "Voce prefere sabados ou domingos?",
                expectedAnswers: ["saturday", "sunday", "i prefer", "i like", "both"],
                followUp: {
                    success: ["Both are great days!", "Good choice!", "I agree!"],
                    fail: ["Say 'I prefer...' or 'I like...'"]
                },
                tips: ["Say 'I prefer [day]' or 'I like both'"]
            }
        ],
        encouragements: [
            {text: "Your weekend English is great!", translation: "Seu ingles de fim de semana e otimo!"},
            {text: "Sounds like fun!", translation: "Parece divertido!"},
            {text: "You're describing your life perfectly!", translation: "Voce esta descrevendo sua vida perfeitamente!"},
            {text: "Great vocabulary for weekends!", translation: "Excelente vocabulario para fins de semana!"},
            {text: "Keep practicing!", translation: "Continue praticando!"},
            {text: "Excellent weekend descriptions!", translation: "Excelentes descricoes de fim de semana!"}
        ]
    },

    11: {
        title: "Viagem",
        description: "Planeje e fale sobre viagens",
        icon: "✈️",
        questions: [
            {
                id: "q1",
                question: "Do you like to travel?",
                translation: "Voce gosta de viajar?",
                expectedAnswers: ["yes", "yes i do", "i love", "i like", "yes i love", "yes i like"],
                followUp: {
                    success: ["Traveling is the best!", "I love traveling too!", "Adventure awaits!"],
                    fail: ["Say 'Yes, I love traveling' or 'Yes, I like to travel'"]
                },
                tips: ["Say 'Yes, I love/like traveling'"]
            },
            {
                id: "q2",
                question: "Where do you want to travel?",
                translation: "Onde voce quer viajar?",
                expectedAnswers: ["i want to go", "i want to visit", "to", "i want to travel to"],
                followUp: {
                    success: ["Great destination!", "You'll love it!", "That's beautiful!"],
                    fail: ["Say 'I want to go to [place]'"]
                },
                tips: ["Say 'I want to go to [country/city]'"]
            },
            {
                id: "q3",
                question: "How do you like to travel? By plane, train, or car?",
                translation: "Como voce gosta de viajar? De aviao, trem ou carro?",
                expectedAnswers: ["by plane", "by train", "by car", "by bus", "i like to go by"],
                followUp: {
                    success: ["That's convenient!", "Fast and easy!", "Comfortable choice!"],
                    fail: ["Say 'I like to travel by [transport]'"]
                },
                tips: ["Say 'I like to travel by plane/train/car'"]
            },
            {
                id: "q4",
                question: "What do you usually do when you travel?",
                translation: "O que voce geralmente faz quando viaja?",
                expectedAnswers: ["i visit", "i see", "i go to", "i take", "i take photos"],
                followUp: {
                    success: ["That's fun!", "Great activities!", "Traveling is amazing!"],
                    fail: ["Say 'I usually [activity]'"]
                },
                tips: ["Say 'I usually visit museums' or 'I like to try local food'"]
            },
            {
                id: "q5",
                question: "What was the last place you visited?",
                translation: "Qual foi o ultimo lugar que voce visitou?",
                expectedAnswers: ["i went to", "i visited", "i went to [place]"],
                followUp: {
                    success: ["That sounds amazing!", "I want to go there!", "Great trip!"],
                    fail: ["Say 'I went to [place]' or 'I visited [place]'"]
                },
                tips: ["Use past tense: 'I went to [place]'"]
            },
            {
                id: "q6",
                question: "Do you prefer to travel alone or with family?",
                translation: "Voce prefere viajar sozinho ou com a familia?",
                expectedAnswers: ["alone", "with family", "with friends", "both", "i prefer"],
                followUp: {
                    success: ["Both are great!", "I understand!", "Good choice!"],
                    fail: ["Say 'I prefer to travel alone' or 'I prefer with family'"]
                },
                tips: ["Say 'I prefer [alone/with family]'"]
            },
            {
                id: "q7",
                question: "What is the most beautiful place you have seen?",
                translation: "Qual e o lugar mais lindo que voce ja viu?",
                expectedAnswers: ["i have seen", "i visited", "the most beautiful", "was", "is"],
                followUp: {
                    success: ["That sounds beautiful!", "I want to see it!", "Amazing!"],
                    fail: ["Say 'I have seen [place]' or 'The most beautiful was...'"]
                },
                tips: ["Say 'The most beautiful place was [place]'"]
            }
        ],
        encouragements: [
            {text: "You're a world traveler!", translation: "Voce e um viajante mundial!"},
            {text: "Your travel English is excellent!", translation: "Seu ingles de viagem e excelente!"},
            {text: "I want to travel with you!", translation: "Eu quero viajar com voce!"},
            {text: "Great travel vocabulary!", translation: "Excelente vocabulario de viagem!"},
            {text: "Keep exploring the world!", translation: "Continue explorando o mundo!"},
            {text: "Excellent travel descriptions!", translation: "Excelentes descricoes de viagem!"}
        ]
    },

    12: {
        title: "Saude",
        description: "Fale sobre saude, medicos e habitos saudaveis",
        icon: "🏥",
        questions: [
            {
                id: "q1",
                question: "How are you feeling today?",
                translation: "Como voce esta se sentindo hoje?",
                expectedAnswers: ["i am fine", "i'm fine", "i am good", "i'm good", "i feel", "not so good"],
                followUp: {
                    success: ["That's great!", "I'm glad you're well!", "Take care!"],
                    fail: ["Say 'I am fine' or 'I feel [adjective]'"]
                },
                tips: ["Say 'I am fine/good' or 'I feel [tired/sick]'"]
            },
            {
                id: "q2",
                question: "Do you exercise regularly?",
                translation: "Voce se exercita regularmente?",
                expectedAnswers: ["yes", "yes i do", "i exercise", "i go to the gym", "sometimes", "no"],
                followUp: {
                    success: ["Exercise is important!", "Stay healthy!", "Great habit!"],
                    fail: ["Say 'Yes, I exercise' or 'Sometimes' or 'No'"]
                },
                tips: ["Say 'Yes, I exercise' or 'Sometimes' or 'No'"]
            },
            {
                id: "q3",
                question: "What do you do to stay healthy?",
                translation: "O que voce faz para se manter saudavel?",
                expectedAnswers: ["i eat", "i exercise", "i sleep", "i drink", "i run", "i walk"],
                followUp: {
                    success: ["That's healthy!", "Great habits!", "Keep it up!"],
                    fail: ["Say 'I eat healthy food' or 'I exercise'"]
                },
                tips: ["Say 'I [eat/exercise/sleep well]'"]
            },
            {
                id: "q4",
                question: "Do you eat healthy food?",
                translation: "Voce come comida saudavel?",
                expectedAnswers: ["yes", "yes i do", "i eat", "i try to", "sometimes"],
                followUp: {
                    success: ["Healthy eating is important!", "Great choice!", "Good for you!"],
                    fail: ["Say 'Yes, I eat healthy food' or 'I try to'"]
                },
                tips: ["Say 'Yes, I eat healthy food' or 'I try to'"]
            },
            {
                id: "q5",
                question: "Do you sleep well at night?",
                translation: "Voce dorme bem a noite?",
                expectedAnswers: ["yes", "yes i do", "i sleep", "i sleep well", "not really", "no"],
                followUp: {
                    success: ["Sleep is very important!", "Good rest!", "That's healthy!"],
                    fail: ["Say 'Yes, I sleep well' or 'Not really'"]
                },
                tips: ["Say 'Yes, I sleep well' or 'Not really'"]
            },
            {
                id: "q6",
                question: "How often do you go to the doctor?",
                translation: "Com que frequencia voce vai ao medico?",
                expectedAnswers: ["once a year", "twice a year", "sometimes", "when i", "every", "never"],
                followUp: {
                    success: ["That's responsible!", "Good for your health!", "Check-ups are important!"],
                    fail: ["Say 'Once a year' or 'When I feel sick'"]
                },
                tips: ["Say 'Once/Twice a year' or 'When I feel sick'"]
            },
            {
                id: "q7",
                question: "What do you do when you feel sick?",
                translation: "O que voce faz quando se sente doente?",
                expectedAnswers: ["i go to", i take", "i rest", "i drink", "i call", "i stay home"],
                followUp: {
                    success: ["That's smart!", "Take care of yourself!", "Good idea!"],
                    fail: ["Say 'I go to the doctor' or 'I rest'"]
                },
                tips: ["Say 'I go to the doctor' or 'I rest and drink water'"]
            }
        ],
        encouragements: [
            {text: "You're a healthy speaker!", translation: "Voce e um falante saudavel!"},
            {text: "Your health English is great!", translation: "Seu ingles de saude e otimo!"},
            {text: "Take care of your health!", translation: "Cuide da sua saude!"},
            {text: "Great health vocabulary!", translation: "Excelente vocabulario de saude!"},
            {text: "Keep being healthy!", translation: "Continue sendo saudavel!"},
            {text: "Excellent health descriptions!", translation: "Excelentes descricoes de saude!"}
        ]
    }
};

function getScenario(scenarioId) {
    return conversationScenarios[scenarioId] || conversationScenarios[1];
}

function getQuestion(scenarioId, questionIndex) {
    const scenario = getScenario(scenarioId);
    return scenario.questions[questionIndex] || null;
}

function getTotalQuestions(scenarioId) {
    const scenario = getScenario(scenarioId);
    return scenario.questions.length;
}

function getRandomEncouragement(scenarioId) {
    const scenario = getScenario(scenarioId);
    const encouragements = scenario.encouragements;
    return encouragements[Math.floor(Math.random() * encouragements.length)];
}

function getRandomGreeting(scenarioId) {
    const scenario = getScenario(scenarioId);
    if (scenario.greetings) {
        return scenario.greetings[Math.floor(Math.random() * scenario.greetings.length)];
    }
    return {text: "Hello! Let's practice English!", translation: "Olá! Vamos praticar inglês!"};
}

function getRandomThinking() {
    const thinking = [
        {text: "Let me think of a question...", translation: "Deixa eu pensar em uma pergunta..."},
        {text: "Hmm, what should I ask you next?", translation: "Hmm, o que devo perguntar agora?"},
        {text: "I have a question for you...", translation: "Tenho uma pergunta para você..."},
        {text: "Let's try something different...", translation: "Vamos tentar algo diferente..."},
        {text: "OK, next question...", translation: "Ok, próxima pergunta..."},
        {text: "Now, let's continue...", translation: "Agora, vamos continuar..."}
    ];
    return thinking[Math.floor(Math.random() * thinking.length)];
}

function checkAnswer(scenarioId, questionIndex, userAnswer) {
    const question = getQuestion(scenarioId, questionIndex);
    if (!question) return { match: false, score: 0 };
    
    const userAnswerLower = userAnswer.toLowerCase().trim();
    let bestMatch = 0;
    
    for (const expected of question.expectedAnswers) {
        if (userAnswerLower.includes(expected.toLowerCase())) {
            bestMatch = 1;
            break;
        }
    }
    
    // Check partial matches
    if (bestMatch === 0) {
        const words = userAnswerLower.split(' ');
        for (const expected of question.expectedAnswers) {
            const expectedWords = expected.toLowerCase().split(' ');
            let matchCount = 0;
            for (const word of expectedWords) {
                if (words.includes(word)) {
                    matchCount++;
                }
            }
            if (matchCount > 0) {
                bestMatch = Math.max(bestMatch, matchCount / expectedWords.length * 0.7);
            }
        }
    }
    
    return {
        match: bestMatch >= 0.5,
        score: bestMatch,
        feedback: bestMatch >= 0.5 ? 
            question.followUp.success[Math.floor(Math.random() * question.followUp.success.length)] :
            question.followUp.fail[Math.floor(Math.random() * question.followUp.fail.length)]
    };
}
