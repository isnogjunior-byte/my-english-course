const lessons = {
    1: {
        title: "Apresentações e Saudações",
        description: "Aprenda a se apresentar e cumprimentar pessoas",
        level: "Básico",
        duration: "20 min",
        
        vocabulary: [
            { word: "Hello", translation: "Olá", pronunciation: "he-LOU", example: "Hello, my name is John." },
            { word: "Hi", pronunciation: "hai", translation: "Oi", example: "Hi! How are you?" },
            { word: "Good morning", translation: "Bom dia", pronunciation: "GUUD MOR-ning", example: "Good morning, teacher!" },
            { word: "Good afternoon", translation: "Boa tarde", pronunciation: "GUUD af-ter-NOON", example: "Good afternoon, everyone." },
            { word: "Good evening", translation: "Boa noite", pronunciation: "GUUD EE-ving", example: "Good evening, sir." },
            { word: "Goodbye", translation: "Adeus/Tchau", pronunciation: "GUUD-bai", example: "Goodbye! See you tomorrow." },
            { word: "Please", translation: "Por favor", pronunciation: "PLIISE", example: "Water, please." },
            { word: "Thank you", translation: "Obrigado/a", pronunciation: "SANK you", example: "Thank you very much!" },
            { word: "You're welcome", translation: "De nada", pronunciation: "your WEL-kum", example: "You're welcome." },
            { word: "Sorry", translation: "Desculpe", pronunciation: "SO-ree", example: "Sorry, I'm late." },
            { word: "Excuse me", translation: "Com licença", pronunciation: "eks-KYOOS mii", example: "Excuse me, where is the bathroom?" },
            { word: "Nice", translation: "Bom/Agradável", pronunciation: "NAIS", example: "Nice to meet you!" },
            { word: "Meet", translation: "Conhecer", pronunciation: "MIIT", example: "Nice to meet you." },
            { word: "Name", translation: "Nome", pronunciation: "NEIM", example: "What is your name?" },
            { word: "My", translation: "Meu/Minha", pronunciation: "MAI", example: "My name is Maria." },
            { word: "Your", translation: "Seu/Sua", pronunciation: "YOUR", example: "What is your name?" },
            { word: "I", translation: "Eu", pronunciation: "AI", example: "I am from Brazil." },
            { word: "Am", translation: "Sou/Estou (com I)", pronunciation: "AM", example: "I am happy." },
            { word: "Is", translation: "É/Está", pronunciation: "IS", example: "She is a teacher." },
            { word: "Are", translation: "São/Estão", pronunciation: "AR", example: "You are very kind." },
            { word: "Good", translation: "Bom/Bem", pronunciation: "GUUD", example: "I am good." },
            { word: "Fine", translation: "Bem (saúde)", pronunciation: "FAIN", example: "I am fine." },
            { word: "Great", translation: "Ótimo/Excelente", pronunciation: "GREIT", example: "That's great!" },
            { word: "Happy", translation: "Feliz", pronunciation: "HA-pee", example: "I am happy." },
            { word: "Not", translation: "Não", pronunciation: "NOT", example: "I am not tired." },
            { word: "Don't", translation: "Não (verbo)", pronunciation: "DOUNT", example: "I don't know." },
            { word: "From", translation: "De (origem)", pronunciation: "FROM", example: "I am from Brazil." },
            { word: "Yes", translation: "Sim", pronunciation: "YES", example: "Yes, I am." },
            { word: "No", translation: "Não", pronunciation: "NOU", example: "No, thank you." },
            { word: "Or", translation: "Ou", pronunciation: "OR", example: "Coffee or tea?" },
            { word: "Just", translation: "Só/Apenas", pronunciation: "JAST", example: "Just water, please." },
            { word: "Me", translation: "Mim", pronunciation: "MII", example: "Just me." },
            { word: "So", translation: "Então/Muito", pronunciation: "SOU", example: "I'm so happy!" },
            { word: "Very", translation: "Muito", pronunciation: "VE-ree", example: "Thank you very much!" },
            { word: "And", translation: "E", pronunciation: "AND", example: "You and me." },
            { word: "The", translation: "O/A (artigo)", pronunciation: "THE", example: "The book." },
            { word: "A", translation: "Um/Uma", pronunciation: "EI", example: "A water, please." },
            { word: "What", translation: "O quê", pronunciation: "UOT", example: "What is your name?" },
            { word: "Where", translation: "Onde", pronunciation: "UER", example: "Where are you from?" },
            { word: "How", translation: "Como", pronunciation: "HAU", example: "How are you?" },
            { word: "Do", translation: "Faz/Verbo auxiliar", pronunciation: "DUU", example: "Do you have a reservation?" },
            { word: "It", translation: "Isso/isto", pronunciation: "IT", example: "It is good." },
            { word: "Of", translation: "De", pronunciation: "OV", example: "A lot of people." },
            { word: "An", translation: "Um/Uma (antes de vogal)", pronunciation: "AN", example: "An apple." },
            { word: "Be", translation: "Ser/estar (infinitivo)", pronunciation: "BII", example: "I want to be a teacher." },
            { word: "On", translation: "Em/Sobre", pronunciation: "ON", example: "It looks great on you." },
            { word: "There", translation: "Lá/There", pronunciation: "DHER", example: "Hi there!" },
            { word: "We", translation: "Nós", pronunciation: "UII", example: "We have a table." },
            { word: "Some", translation: "Algum/alguns", pronunciation: "SAM", example: "Some water, please." },
            { word: "That", translation: "Aquilo/Isso", pronunciation: "DHAT", example: "That's great!" },
            { word: "Any", translation: "Qualquer/Algum", pronunciation: "E-nee", example: "Any questions?" },
            { word: "Too", translation: "Também/Muito", pronunciation: "TUU", example: "Me too! That's too expensive." },
            { word: "All", translation: "Tudo/Todos", pronunciation: "AAL", example: "That's all." },
            { word: "It's", translation: "Isso é", pronunciation: "ITS", example: "It's delicious!" },
            { word: "That's", translation: "Isso é", pronunciation: "DHATS", example: "That's great!" },
            { word: "I'll", translation: "Eu vou", pronunciation: "AIL", example: "I'll take it." },
            { word: "I'd", translation: "Eu gostaria", pronunciation: "AID", example: "I'd like a coffee." },
            { word: "Let's", translation: "Vamos", pronunciation: "LETS", example: "Let's practice!" },
            { word: "Well", translation: "Bem", pronunciation: "UEL", example: "I'm doing well." },
            { word: "See", translation: "Ver", pronunciation: "SII", example: "Nice to see you!" },
            { word: "Here", translation: "Aqui", pronunciation: "HIIR", example: "Here you are." },
            { word: "They", translation: "Eles/Elas", pronunciation: "DHEI", example: "They are here." },
            { word: "He", translation: "Ele", pronunciation: "HII", example: "He is a doctor." },
            { word: "She", translation: "Ela", pronunciation: "SHII", example: "She is a teacher." },
            { word: "Can", translation: "Poder (permissão)", pronunciation: "KAN", example: "Can I help you?" },
            { word: "Will", translation: "Vai (futuro)", pronunciation: "UIL", example: "Will you come?" },
            { word: "May", translation: "Poder (educação)", pronunciation: "MEI", example: "May I help you?" },
            { word: "Keep", translation: "Manter/Continuar", pronunciation: "KIIP", example: "Keep it up!" },
            { word: "Try", translation: "Tentar", pronunciation: "TRAI", example: "Try again." },
            { word: "Think", translation: "Pensar", pronunciation: "SINK", example: "I think so." },
            { word: "Let", translation: "Deixar/Permitir", pronunciation: "LET", example: "Let me help." },
            { word: "Ask", translation: "Perguntar", pronunciation: "ASK", example: "Can I ask you?" },
            { word: "Come", translation: "Vir", pronunciation: "KAM", example: "Come here." },
            { word: "Give", translation: "Dar", pronunciation: "GIV", example: "Give me the check." },
            { word: "Take", translation: "Levar/Pegar", pronunciation: "TEIK", example: "I'll take it." },
            { word: "Need", translation: "Precisar", pronunciation: "NIID", example: "I need more time." },
            { word: "Day", translation: "Dia", pronunciation: "DEI", example: "Have a nice day!" },
            { word: "Time", translation: "Tempo/Vez", pronunciation: "TAIM", example: "What time is it?" },
            { word: "Week", translation: "Semana", pronunciation: "UIIK", example: "See you next week." },
            { word: "Month", translation: "Mês", pronunciation: "MANTH", example: "Next month." },
            { word: "Back", translation: "De volta", pronunciation: "BAK", example: "Come back tomorrow." },
            { word: "Right", translation: "Certo/Agora", pronunciation: "RAIT", example: "Right now." },
            { word: "Now", translation: "Agora", pronunciation: "NAU", example: "Right now." },
            { word: "When", translation: "Quando", pronunciation: "UEN", example: "When should I come back?" },
            { word: "If", translation: "Se", pronunciation: "IF", example: "What if I'm late?" },
            { word: "Should", translation: "Deveria", pronunciation: "SHUD", example: "When should I come?" },
            { word: "Been", translation: "Sido", pronunciation: "BIN", example: "Have you been there?" },
            { word: "Way", translation: "Caminho/Jeito", pronunciation: "UEI", example: "This way, please." }
        ],
        
        numbers: [
            { number: 0, word: "Zero", pronunciation: "ZI-ro" },
            { number: 1, word: "One", pronunciation: "UAN" },
            { number: 2, word: "Two", pronunciation: "TU" },
            { number: 3, word: "Three", pronunciation: "TRII" },
            { number: 4, word: "Four", pronunciation: "FOR" },
            { number: 5, word: "Five", pronunciation: "FAIV" },
            { number: 6, word: "Six", pronunciation: "SIKS" },
            { number: 7, word: "Seven", pronunciation: "SÉ-ven" },
            { number: 8, word: "Eight", pronunciation: "EIT" },
            { number: 9, word: "Nine", pronunciation: "NAIN" },
            { number: 10, word: "Ten", pronunciation: "TEN" },
            { number: 11, word: "Eleven", pronunciation: "e-LÉ-ven" },
            { number: 12, word: "Twelve", pronunciation: "TUÉLV" },
            { number: 13, word: "Thirteen", pronunciation: "TUR-TIIN" },
            { number: 14, word: "Fourteen", pronunciation: "FOR-TIIN" },
            { number: 15, word: "Fifteen", pronunciation: "FIF-TIIN" },
            { number: 16, word: "Sixteen", pronunciation: "SIKS-TIIN" },
            { number: 17, word: "Seventeen", pronunciation: "SÉ-ven-TIIN" },
            { number: 18, word: "Eighteen", pronunciation: "EIT-TIIN" },
            { number: 19, word: "Nineteen", pronunciation: "NAIN-TIIN" },
            { number: 20, word: "Twenty", pronunciation: "TUÉN-ti" },
            { number: 30, word: "Thirty", pronunciation: "TUR-ti" },
            { number: 40, word: "Forty", pronunciation: "FOR-ti" },
            { number: 50, word: "Fifty", pronunciation: "FIF-ti" },
            { number: 60, word: "Sixty", pronunciation: "SIKS-ti" },
            { number: 70, word: "Seventy", pronunciation: "SÉ-ven-ti" },
            { number: 80, word: "Eighty", pronunciation: "EIT-ti" },
            { number: 90, word: "Ninety", pronunciation: "NAIN-ti" },
            { number: 100, word: "One hundred", pronunciation: "UAN HÚN-dred" }
        ],
        
        grammar: {
            title: "Verbos 'To Be' (Ser/Estar)",
            explanation: "Em inglês, usamos 'am', 'is' e 'are' para dizer quem somos ou como estamos. Esta é a estrutura mais básica do inglês.",
            rules: [
                {
                    rule: "I + AM",
                    example: "I am a student. (Eu sou estudante)",
                    note: "Use 'am' apenas com 'I' (eu)"
                },
                {
                    rule: "You/We/They + ARE",
                    example: "You are my friend. (Você é meu amigo)",
                    note: "Use 'are' com você, nós, eles"
                },
                {
                    rule: "He/She/It + IS",
                    example: "She is a doctor. (Ela é médica)",
                    note: "Use 'is' com ele, ela, isso"
                }
            ],
            sentences: [
                { english: "My name is Maria.", portuguese: "Meu nome é Maria.", structure: "My + name + is + nome" },
                { english: "I am from Brazil.", portuguese: "Eu sou do Brasil.", structure: "I + am + from + país" },
                { english: "I am ... years old.", portuguese: "Eu tenho ... anos.", structure: "I + am + idade + years old" },
                { english: "Nice to meet you.", portuguese: "Prazer em conhecê-lo.", structure: "Frase fixa" },
                { english: "How are you?", portuguese: "Como você está?", structure: "How + are + you?" }
            ]
        },
        
        conversations: [
            {
                title: "Apresentação Formal",
                context: "Você está em um evento de trabalho e conhece alguém novo.",
                lines: [
                    { speaker: "A", english: "Hello! My name is John. What is your name?", portuguese: "Olá! Meu nome é John. Qual é o seu nome?" },
                    { speaker: "B", english: "Hi, John! I'm Maria. Nice to meet you!", portuguese: "Oi, John! Sou Maria. Prazer em conhecê-lo!" },
                    { speaker: "A", english: "Nice to meet you too, Maria. Where are you from?", portuguese: "Prazer em conhecê-lo também, Maria. De onde você é?" },
                    { speaker: "B", english: "I'm from Brazil. And you?", portuguese: "Eu sou do Brasil. E você?" },
                    { speaker: "A", english: "I'm from the United States. Welcome!", portuguese: "Eu sou dos Estados Unidos. Bem-vinda!" }
                ]
            }
        ],
        
        phrases: [
            {
                expected: "What is your name?",
                translation: "Qual é o seu nome?",
                response: "My name is...",
                responseTranslation: "Meu nome é...",
                tips: ["Fale 'What' com som de 'uá'", "Seu nome em inglês deve ser claro"]
            },
            {
                expected: "How old are you?",
                translation: "Quantos anos você tem?",
                response: "I am ... years old",
                responseTranslation: "Eu tenho ... anos",
                tips: ["'How old' significa 'quantos anos'", "Use 'am' com 'I'"]
            },
            {
                expected: "Where are you from?",
                translation: "De onde você é?",
                response: "I am from Brazil",
                responseTranslation: "Eu sou do Brasil",
                tips: ["'From' significa 'de'", "Brazil = Brasil em inglês"]
            }
        ]
    },
    
    2: {
        title: "Números, Idades e Preços",
        description: "Aprenda a contar, dizer idade e preços",
        level: "Básico",
        duration: "25 min",
        
        vocabulary: [
            { word: "Number", translation: "Número", pronunciation: "NÚM-ber", example: "What is your phone number?" },
            { word: "Age", translation: "Idade", pronunciation: "EIJ", example: "What is your age?" },
            { word: "Years old", translation: "Anos (idade)", pronunciation: "YIERS old", example: "I am 25 years old." },
            { word: "Price", translation: "Preço", pronunciation: "PRAIS", example: "What is the price?" },
            { word: "How much", translation: "Quanto custa", pronunciation: "HAU much", example: "How much is this?" },
            { word: "Dollar", translation: "Dólar", pronunciation: "DÓ-lar", example: "It costs ten dollars." },
            { word: "Expensive", translation: "Caro", pronunciation: "iks-PEN-siv", example: "That's too expensive!" },
            { word: "Cheap", translation: "Barato", pronunciation: "CHIIP", example: "This is very cheap." },
            { word: "Money", translation: "Dinheiro", pronunciation: "MA-nee", example: "I don't have money." },
            { word: "Pay", translation: "Pagar", pronunciation: "PEI", example: "I want to pay." },
            { word: "Cash", translation: "Dinheiro (nota)", pronunciation: "KASH", example: "I'll pay with cash." },
            { word: "Card", translation: "Cartão", pronunciation: "KARD", example: "I'll pay with card." },
            { word: "Total", translation: "Total", pronunciation: "TÓ-tal", example: "The total is $50." },
            { word: "Discount", translation: "Desconto", pronunciation: "DIS-count", example: "Can I have a discount?" },
            { word: "Free", translation: "Grátis", pronunciation: "FRII", example: "This is free!" }
        ],
        
        grammar: {
            title: "Como Dizer Números e Idades",
            explanation: "Em inglês, números são essenciais para idades, preços e quantidades. Aprenda a estrutura para cada situação.",
            rules: [
                {
                    rule: "IDADE: I am + número + years old",
                    example: "I am twenty-five years old. (Eu tenho 25 anos)",
                    note: "Use 'am' com 'I' e termine com 'years old'"
                },
                {
                    rule: "PREÇO: It costs + número + dollars",
                    example: "It costs ten dollars. (Custa dez dólares)",
                    note: "'Costs' = custa"
                },
                {
                    rule: "QUANTIDADE: I have + número",
                    example: "I have three brothers. (Eu tenho três irmãos)",
                    note: "Use 'have' para possuir"
                },
                {
                    rule: "TELEFONE: My number is + número",
                    example: "My number is 555-1234. (Meu número é 555-1234)",
                    note: "Leia número por número"
                }
            ],
            sentences: [
                { english: "I am twenty years old.", portuguese: "Eu tenho 20 anos.", structure: "I + am + número + years old" },
                { english: "I am thirty-five years old.", portuguese: "Eu tenho 35 anos.", structure: "I + am + trinta e cinco + years old" },
                { english: "It costs five dollars.", portuguese: "Custa cinco dólares.", structure: "It costs + número + dollars" },
                { english: "How old are you?", portuguese: "Quantos anos você tem?", structure: "How old + are + you?" },
                { english: "How much is this?", portuguese: "Quanto custa isso?", structure: "How much + is + this?" }
            ]
        },
        
        conversations: [
            {
                title: "Apresentando Idade",
                context: "Você está conhecendo novas pessoas e elas perguntam sua idade.",
                lines: [
                    { speaker: "A", english: "Hi! What's your name?", portuguese: "Oi! Qual é o seu nome?" },
                    { speaker: "B", english: "My name is Ana. What's yours?", portuguese: "Meu nome é Ana. E o seu?" },
                    { speaker: "A", english: "I'm Peter. How old are you, Ana?", portuguese: "Sou o Peter. Quantos anos você tem, Ana?" },
                    { speaker: "B", english: "I am twenty-two years old. And you?", portuguese: "Eu tenho vinte e dois anos. E você?" },
                    { speaker: "A", english: "I'm twenty-five years old.", portuguese: "Eu tenho vinte e cinco anos." }
                ]
            }
        ],
        
        phrases: [
            {
                expected: "How old are you?",
                translation: "Quantos anos você tem?",
                response: "I am twenty-five years old",
                responseTranslation: "Eu tenho vinte e cinco anos",
                tips: ["Use 'I am' + número + 'years old'", "Vinte = twenty, cinco = five"]
            },
            {
                expected: "How much is this?",
                translation: "Quanto custa isso?",
                response: "It costs ten dollars",
                responseTranslation: "Custa dez dólares",
                tips: ["'How much' = quanto", "'Dollars' = dólares"]
            }
        ]
    },
    
    3: {
        title: "Família e Relacionamentos",
        description: "Aprenda vocabulário sobre família",
        level: "Básico",
        duration: "20 min",
        
        vocabulary: [
            { word: "Mother/Mom", translation: "Mãe", pronunciation: "MUH-ther/MOM", example: "My mother is a teacher." },
            { word: "Father/Dad", translation: "Pai", pronunciation: "FA-ther/DAD", example: "My father works in a bank." },
            { word: "Parents", translation: "Pais", pronunciation: "PA-rents", example: "My parents live in São Paulo." },
            { word: "Son", translation: "Filho", pronunciation: "SON", example: "He is my son." },
            { word: "Daughter", translation: "Filha", pronunciation: "DAW-ter", example: "She is my daughter." },
            { word: "Brother", translation: "Irmão", pronunciation: "BRUH-ther", example: "I have one brother." },
            { word: "Sister", translation: "Irmã", pronunciation: "SIS-ter", example: "My sister is older than me." },
            { word: "Grandfather", translation: "Avô", pronunciation: "GRAND-fa-ther", example: "My grandpa is 80 years old." },
            { word: "Grandmother", translation: "Avó", pronunciation: "GRAND-mu-ther", example: "My grandma makes great cake." },
            { word: "Family", translation: "Família", pronunciation: "FA-mi-lee", example: "I love my family." },
            { word: "Have", translation: "Ter (possuir)", pronunciation: "HAV", example: "I have two sisters." },
            { word: "How many", translation: "Quantos", pronunciation: "HAU MÉ-nee", example: "How many brothers do you have?" },
            { word: "Old", translation: "Velho/Idoso", pronunciation: "OULD", example: "My grandfather is old." },
            { word: "Young", translation: "Jovem", pronunciation: "YUNG", example: "She is very young." },
            { word: "Big", translation: "Grande", pronunciation: "BIG", example: "I have a big family." },
            { word: "Small/Little", translation: "Pequeno", pronunciation: "SMOL/LI-tel", example: "I have a little sister." },
            { word: "Who", translation: "Quem", pronunciation: "HUU", example: "Who is this?" },
            { word: "This", translation: "Isto/Esta pessoa", pronunciation: "THIS", example: "This is my mother." },
            { word: "With", translation: "Com", pronunciation: "UITH", example: "I live with my family." },
            { word: "Live", translation: "Morar/Viver", pronunciation: "LIV", example: "I live in Brazil." }
        ],
        
        grammar: {
            title: "Como Falar sobre Família",
            explanation: "Para falar sobre família, usamos 'have' (ter) para dizer quantos irmãos temos e 'is' para identificar pessoas.",
            rules: [
                {
                    rule: "I HAVE + número + irmãos",
                    example: "I have two brothers. (Eu tenho dois irmãos)",
                    note: "Use 'have' para dizer o que você possui"
                },
                {
                    rule: "THIS IS + pessoa",
                    example: "This is my mother. (Esta é minha mãe)",
                    note: "Use 'this is' para apresentar alguém"
                },
                {
                    rule: "WHO IS + pessoa?",
                    example: "Who is this? (Quem é esta pessoa?)",
                    note: "Use 'who' para perguntar quem"
                },
                {
                    rule: "QUANTOS + quantos você tem?",
                    example: "How many sisters do you have? (Quantas irmãs você tem?)",
                    note: "Use 'How many' + nome + 'do you have?'"
                }
            ],
            sentences: [
                { english: "I have one brother.", portuguese: "Eu tenho um irmão.", structure: "I + have + número + brother" },
                { english: "This is my mother.", portuguese: "Esta é minha mãe.", structure: "This + is + my + mãe" },
                { english: "Who is this?", portuguese: "Quem é esta pessoa?", structure: "Who + is + this?" },
                { english: "How many sisters do you have?", portuguese: "Quantas irmãs você tem?", structure: "How many + sisters + do you have?" },
                { english: "I have a big family.", portuguese: "Eu tenho uma família grande.", structure: "I + have + a + família" }
            ]
        },
        
        conversations: [
            {
                title: "Falando da Família",
                context: "Você está mostrando uma foto da sua família para um amigo.",
                lines: [
                    { speaker: "A", english: "Who is this woman in the photo?", portuguese: "Quem é esta mulher na foto?" },
                    { speaker: "B", english: "That's my mother. She's a teacher.", portuguese: "Essa é minha mãe. Ela é professora." },
                    { speaker: "A", english: "And who is this man?", portuguese: "E quem é este homem?" },
                    { speaker: "B", english: "That's my father. He works in a hospital.", portuguese: "Esse é meu pai. Ele trabalha em um hospital." },
                    { speaker: "A", english: "Do you have any brothers or sisters?", portuguese: "Você tem irmãos ou irmãs?" },
                    { speaker: "B", english: "Yes, I have one sister. She's younger than me.", portuguese: "Sim, tenho uma irmã. Ela é mais nova que eu." }
                ]
            }
        ],
        
        phrases: [
            {
                expected: "How many brothers do you have?",
                translation: "Quantos irmãos você tem?",
                response: "I have two brothers",
                responseTranslation: "Eu tenho dois irmãos",
                tips: ["'How many' = quantos", "'Brothers' = irmãos"]
            },
            {
                expected: "Who is this?",
                translation: "Quem é esta pessoa?",
                response: "This is my mother",
                responseTranslation: "Esta é minha mãe",
                tips: ["'Who' = quem", "'This' = isto/esta"]
            }
        ]
    },
    
    4: {
        title: "Comida e Bebida",
        description: "Aprenda a pedir comida e falar sobre comida",
        level: "Básico",
        duration: "25 min",
        
        vocabulary: [
            { word: "Water", translation: "Água", pronunciation: "WAW-ter", example: "Can I have some water?" },
            { word: "Coffee", translation: "Café", pronunciation: "KOF-ee", example: "I drink coffee every morning." },
            { word: "Tea", translation: "Chá", pronunciation: "TII", example: "Would you like some tea?" },
            { word: "Milk", translation: "Leite", pronunciation: "MILK", example: "I like milk with cereal." },
            { word: "Juice", translation: "Suco", pronunciation: "JOOS", example: "Orange juice, please." },
            { word: "Bread", translation: "Pão", pronunciation: "BRED", example: "I eat bread with butter." },
            { word: "Rice", translation: "Arroz", pronunciation: "RAIS", example: "Rice and beans is a great meal." },
            { word: "Meat", translation: "Carne", pronunciation: "MIIT", example: "I don't eat meat." },
            { word: "Chicken", translation: "Frango", pronunciation: "CHI-ken", example: "I love grilled chicken." },
            { word: "Fish", translation: "Peixe", pronunciation: "FISH", example: "Fish is healthy food." },
            { word: "Pizza", translation: "Pizza", pronunciation: "PEE-tsa", example: "Let's order pizza tonight." },
            { word: "Salad", translation: "Salada", pronunciation: "SA-lad", example: "I'll have a salad, please." },
            { word: "Egg", translation: "Ovo", pronunciation: "EG", example: "I had eggs for breakfast." },
            { word: "Cheese", translation: "Queijo", pronunciation: "CHIISE", example: "I love cheese on my pizza." },
            { word: "Breakfast", translation: "Café da manhã", pronunciation: "BREK-fast", example: "What do you eat for breakfast?" },
            { word: "Lunch", translation: "Almoço", pronunciation: "LUNCH", example: "Lunch is at noon." },
            { word: "Dinner", translation: "Jantar", pronunciation: "DI-ner", example: "We have dinner at 7 PM." },
            { word: "Hungry", translation: "Com fome", pronunciation: "HUNG-gri", example: "I'm very hungry!" },
            { word: "Thirsty", translation: "Com sede", pronunciation: "THUR-sti", example: "I'm thirsty. Can I have water?" },
            { word: "Delicious", translation: "Delicioso", pronunciation: "di-LI-shus", example: "This food is delicious!" },
            { word: "Want", translation: "Querer", pronunciation: "UONT", example: "I want water." },
            { word: "Like", translation: "Gostar", pronunciation: "LAIK", example: "I like pizza." },
            { word: "Eat", translation: "Comer", pronunciation: "IIT", example: "I eat breakfast at 7 AM." },
            { word: "Drink", translation: "Beber", pronunciation: "DRINK", example: "I drink water every day." },
            { word: "Can", translation: "Poder (permissão)", pronunciation: "KAN", example: "Can I have some water?" },
            { word: "Have", translation: "Ter/Pedir", pronunciation: "HAV", example: "I'll have a coffee." },
            { word: "Would", translation: "Gostaria (educação)", pronunciation: "UUD", example: "I would like a coffee." },
            { word: "Like", translation: "Gostar", pronunciation: "LAIK", example: "I would like water." },
            { word: "Menu", translation: "Cardápio", pronunciation: "MÉ-niu", example: "Here's the menu." },
            { word: "Food", translation: "Comida", pronunciation: "FUUD", example: "The food is delicious." },
            { word: "Order", translation: "Pedir (comida)", pronunciation: "OR-der", example: "Are you ready to order?" },
            { word: "Table", translation: "Mesa", pronunciation: "TÉI-bol", example: "A table for two, please." },
            { word: "Check", translation: "Conta (restaurante)", pronunciation: "CHEK", example: "Can I have the check?" },
            { word: "Bill", translation: "Conta (pagamento)", pronunciation: "BIL", example: "The bill, please." },
            { word: "Welcome", translation: "Bem-vindo", pronunciation: "UEL-kum", example: "Welcome to our restaurant!" },
            { word: "Dessert", translation: "Sobremesa", pronunciation: "di-ZERT", example: "Would you like dessert?" },
            { word: "Ready", translation: "Pronto", pronunciation: "RE-dee", example: "Are you ready to order?" },
            { word: "Everything", translation: "Tudo", pronunciation: "EV-ri-thing", example: "How is everything?" },
            { word: "Okay", translation: "Tudo bem", pronunciation: "OU-KEI", example: "Is the food okay?" },
            { word: "Else", translation: "Mais/Outra coisa", pronunciation: "ELS", example: "Anything else?" },
            { word: "Anything", translation: "Qualquer coisa", pronunciation: "E-nee-thing", example: "Can I help with anything?" },
            { word: "Recommend", translation: "Recomendar", pronunciation: "rek-o-MEND", example: "What do you recommend?" },
            { word: "Yet", translation: "Ainda", pronunciation: "IET", example: "Not yet." },
            { word: "Maybe", translation: "Talvez", pronunciation: "MÉI-bee", example: "Maybe later." },
            { word: "Nothing", translation: "Nada", pronunciation: "NA-thing", example: "Nothing else." },
            { word: "Wonderful", translation: "Maravilhoso", pronunciation: "UUN-der-ful", example: "Have a wonderful day!" },
            { word: "Amazing", translation: "Incrível", pronunciation: "a-MÉI-zing", example: "That's amazing!" },
            { word: "Pasta", translation: "Massa (comida)", pronunciation: "PAS-ta", example: "I'll have the pasta." },
            { word: "Steak", translation: "Bife", pronunciation: "STEIK", example: "I'll have the steak." },
            { word: "Soup", translation: "Sopa", pronunciation: "SUUP", example: "I'll have the soup." },
            { word: "Soda", translation: "Refrigerante", pronunciation: "SOU-da", example: "I'd like a soda." },
            { word: "Wine", translation: "Vinho", pronunciation: "UAIN", example: "A glass of wine." },
            { word: "Beer", translation: "Cerveja", pronunciation: "BIIR", example: "A cold beer, please." },
            { word: "More", translation: "Mais", pronunciation: "MOR", example: "More water, please." },
            { word: "Here", translation: "Aqui", pronunciation: "HIIR", example: "Here's the menu." },
            { word: "Here's", translation: "Aqui está", pronunciation: "HIRZ", example: "Here's the menu." },
            { word: "Restaurant", translation: "Restaurante", pronunciation: "RES-to-rant", example: "This restaurant is great." },
            { word: "Italian", translation: "Italiano", pronunciation: "I-TA-lyan", example: "An Italian restaurant." },
            { word: "Native", translation: "Nativo", pronunciation: "NÉI-tiv", example: "You speak like a native!" },
            { word: "Perfect", translation: "Perfeito", pronunciation: "PER-fikt", example: "Perfect pronunciation!" },
            { word: "Perfectly", translation: "Perfeitamente", pronunciation: "PER-fikt-lee", example: "They understand you perfectly!" },
            { word: "Excellent", translation: "Excelente", pronunciation: "EK-so-lent", example: "Excellent work!" },
            { word: "English", translation: "Inglês", pronunciation: "ING-glish", example: "Your English is great!" },
            { word: "Doing", translation: "Fazendo", pronunciation: "DU-ying", example: "You're doing great!" },
            { word: "Job", translation: "Trabalho/emprego", pronunciation: "JOB", example: "Great job!" },
            { word: "Waiter", translation: "Garçom", pronunciation: "UEI-ter", example: "The waiter is nice." },
            { word: "Ordering", translation: "Pedindo (comida)", pronunciation: "OR-der-ying", example: "You're ordering like a native!" },
            { word: "Exactly", translation: "Exatamente", pronunciation: "ig-ZAK-lee", example: "That's exactly right!" },
            { word: "Too", translation: "Também/Muito", pronunciation: "TUU", example: "Me too!" },
            { word: "Me", translation: "Mim", pronunciation: "MII", example: "Me too!" },
            { word: "Something", translation: "Alguma coisa", pronunciation: "SAM-thing", example: "I want something to eat." }
        ],
        
        grammar: {
            title: "Como Pedir Comida e Bebida",
            explanation: "Para pedir comida, usamos 'I want' (quero) ou 'Can I have' (posso ter) que é mais educado.",
            rules: [
                {
                    rule: "I WANT + comida/bebida",
                    example: "I want water. (Eu quero água)",
                    note: "Forma direta de pedir"
                },
                {
                    rule: "CAN I HAVE + comida/bebida?",
                    example: "Can I have some water? (Posso ter água?)",
                    note: "Forma educada de pedir"
                },
                {
                    rule: "I WOULD LIKE + comida/bebida",
                    example: "I would like a coffee. (Eu gostaria de um café)",
                    note: "Forma mais educada"
                },
                {
                    rule: "I LIKE + comida",
                    example: "I like pizza. (Eu gosto de pizza)",
                    note: "Para falar do que gosta"
                },
                {
                    rule: "I DON'T LIKE + comida",
                    example: "I don't like meat. (Eu não gosto de carne)",
                    note: "Para falar do que não gosta"
                }
            ],
            sentences: [
                { english: "I want water.", portuguese: "Eu quero água.", structure: "I + want + água" },
                { english: "Can I have a coffee?", portuguese: "Posso ter um café?", structure: "Can + I + have + café?" },
                { english: "I like pizza.", portuguese: "Eu gosto de pizza.", structure: "I + like + pizza" },
                { english: "I don't like meat.", portuguese: "Eu não gosto de carne.", structure: "I + don't like + carne" },
                { english: "I'm hungry.", portuguese: "Estou com fome.", structure: "I'm + hungry" }
            ]
        },
        
        conversations: [
            {
                title: "No Restaurante",
                context: "Você está em um restaurante fazendo seu pedido.",
                lines: [
                    { speaker: "A", english: "Good evening! Welcome to our restaurant.", portuguese: "Boa noite! Bem-vindo ao nosso restaurante." },
                    { speaker: "B", english: "Thank you. A table for two, please.", portuguese: "Obrigado. Uma mesa para dois, por favor." },
                    { speaker: "A", english: "Here you are. Here's the menu.", portuguese: "Aqui está. Aqui está o cardápio." },
                    { speaker: "B", english: "Thank you. What would you like to drink?", portuguese: "Obrigado. O que você gostaria de beber?" },
                    { speaker: "C", english: "I would like some orange juice, please.", portuguese: "Eu gostaria de suco de laranja, por favor." },
                    { speaker: "B", english: "And I'll have a coffee, please.", portuguese: "E eu vou querer um café, por favor." }
                ]
            }
        ],
        
        phrases: [
            {
                expected: "What would you like to eat?",
                translation: "O que você gostaria de comer?",
                response: "I would like a pizza",
                responseTranslation: "Eu gostaria de uma pizza",
                tips: ["'Would like' = gostaria", "'Eat' = comer"]
            },
            {
                expected: "Can I have some water?",
                translation: "Posso ter água?",
                response: "Yes, here you are",
                responseTranslation: "Sim, aqui está",
                tips: ["'Can I' = posso eu", "'Water' = água"]
            }
        ]
    },
    
    5: {
        title: "Rotina Diária e Horários",
        description: "Aprenda a descrever seu dia e falar sobre horários",
        level: "Básico",
        duration: "25 min",
        
        vocabulary: [
            { word: "Wake up", translation: "Acordar", pronunciation: "WEIK up", example: "I wake up at 7 AM." },
            { word: "Get up", translation: "Levantar-se", pronunciation: "GET up", example: "I get up and take a shower." },
            { word: "Sleep", translation: "Dormir", pronunciation: "SLIIP", example: "I sleep at 10 PM." },
            { word: "Bed", translation: "Cama", pronunciation: "BED", example: "I go to bed at 10 PM." },
            { word: "Morning", translation: "Manhã", pronunciation: "MOR-ning", example: "I exercise in the morning." },
            { word: "Afternoon", translation: "Tarde", pronunciation: "AF-ter-noon", example: "I work in the afternoon." },
            { word: "Evening", translation: "Noite (início)", pronunciation: "EE-ving", example: "I watch TV in the evening." },
            { word: "Night", translation: "Noite", pronunciation: "NAIT", example: "Good night! Sleep well." },
            { word: "Today", translation: "Hoje", pronunciation: "to-DEI", example: "What are you doing today?" },
            { word: "Tomorrow", translation: "Amanhã", pronunciation: "to-MO-ro", example: "See you tomorrow!" },
            { word: "Yesterday", translation: "Ontem", pronunciation: "YES-ter-day", example: "Yesterday was Monday." },
            { word: "Always", translation: "Sempre", pronunciation: "AW-lweiz", example: "I always drink coffee." },
            { word: "Sometimes", translation: "Às vezes", pronunciation: "SOM-taims", example: "I sometimes eat out." },
            { word: "Never", translation: "Nunca", pronunciation: "NE-ver", example: "I never eat meat." },
            { word: "Shower", translation: "Banho", pronunciation: "SHOW-er", example: "I take a shower every day." },
            { word: "Breakfast", translation: "Café da manhã", pronunciation: "BREK-fast", example: "I eat breakfast at 7 AM." },
            { word: "Lunch", translation: "Almoço", pronunciation: "LUNCH", example: "Lunch is at noon." },
            { word: "Dinner", translation: "Jantar", pronunciation: "DI-ner", example: "We have dinner at 7 PM." },
            { word: "Work", translation: "Trabalho/Trabalhar", pronunciation: "WERK", example: "I go to work by bus." },
            { word: "School", translation: "Escola", pronunciation: "SKUUL", example: "The school starts at 8 AM." },
            { word: "Exercise", translation: "Exercício/Exercitar", pronunciation: "EK-ser-size", example: "I exercise three times a week." },
            { word: "Read", translation: "Ler", pronunciation: "RIID", example: "I like to read books." },
            { word: "Watch TV", translation: "Assistir TV", pronunciation: "WACH tee-VEE", example: "I watch TV after dinner." },
            { word: "Cook", translation: "Cozinhar", pronunciation: "KUK", example: "My mother cooks every day." },
            { word: "Go to bed", translation: "Ir dormir", pronunciation: "GO to BED", example: "I go to bed at 10 PM." },
            { word: "Go to work", translation: "Ir trabalhar", pronunciation: "GO to WERK", example: "I go to work at 8 AM." },
            { word: "At", translation: "Em (horário)", pronunciation: "AT", example: "I wake up at 7 AM." },
            { word: "In the morning", translation: "De manhã", pronunciation: "in the MOR-ning", example: "I exercise in the morning." },
            { word: "At night", translation: "À noite", pronunciation: "at NAIT", example: "I watch TV at night." }
        ],
        
        grammar: {
            title: "Como Falar sobre Horários e Rotina",
            explanation: "Para falar sobre rotina, usamos o Present Simple e expressões de tempo como 'at' (em) e 'in the morning' (de manhã).",
            rules: [
                {
                    rule: "I + verb (sem 's')",
                    example: "I wake up at 7 AM. (Eu acordo às 7h)",
                    note: "Para 'eu', o verbo fica igual"
                },
                {
                    rule: "HE/SHE + verb + 's'",
                    example: "He works at 8 AM. (Ele trabalha às 8h)",
                    note: "Para ele/ela, adicione 's' no verbo"
                },
                {
                    rule: "AT + hora",
                    example: "At 7 AM (às 7h da manhã)",
                    note: "Use 'at' para horários específicos"
                },
                {
                    rule: "IN THE + período",
                    example: "In the morning (de manhã)",
                    note: "Use 'in the' para manhã, tarde, noite"
                }
            ],
            sentences: [
                { english: "I wake up at 7 AM.", portuguese: "Eu acordo às 7h.", structure: "I + wake up + at + hora" },
                { english: "I eat breakfast in the morning.", portuguese: "Eu tomo café da manhã de manhã.", structure: "I + eat + breakfast + in the morning" },
                { english: "I go to work at 8 AM.", portuguese: "Eu vou trabalhar às 8h.", structure: "I + go to work + at + hora" },
                { english: "I have lunch at noon.", portuguese: "Eu almoço ao meio-dia.", structure: "I + have + lunch + at + hora" },
                { english: "I go to bed at 10 PM.", portuguese: "Eu durmo às 10h da noite.", structure: "I + go to bed + at + hora" }
            ]
        },
        
        conversations: [
            {
                title: "Conversa sobre Rotina",
                context: "Você está perguntando a um amigo sobre a rotina dele.",
                lines: [
                    { speaker: "A", english: "What time do you usually wake up?", portuguese: "Que horas você costuma acordar?" },
                    { speaker: "B", english: "I usually wake up at 6:30 AM.", portuguese: "Eu costumo acordar às 6:30 da manhã." },
                    { speaker: "A", english: "That's early! What do you do in the morning?", portuguese: "Isso é cedo! O que você faz de manhã?" },
                    { speaker: "B", english: "I take a shower, eat breakfast, and go to work.", portuguese: "Eu tomo banho, tomo café da manhã e vou trabalhar." },
                    { speaker: "A", english: "What time do you start work?", portuguese: "Que horas você começa a trabalhar?" },
                    { speaker: "B", english: "I start at 8:30 AM. And you?", portuguese: "Eu começo às 8:30. E você?" }
                ]
            }
        ],
        
        phrases: [
            {
                expected: "What time do you wake up?",
                translation: "Que horas você acorda?",
                response: "I wake up at seven o'clock",
                responseTranslation: "Eu acordo às sete horas",
                tips: ["'Wake up' = acordar", "'O'clock' = em ponto"]
            },
            {
                expected: "What do you do in the morning?",
                translation: "O que você faz de manhã?",
                response: "I eat breakfast",
                responseTranslation: "Eu tomo café da manhã",
                tips: ["'Morning' = manhã", "'Breakfast' = café da manhã"]
            }
        ]
    },
    
    6: {
        title: "Situações do Dia a Dia",
        description: "Vocabulário para restaurante, loja, médico, telefone e padaria",
        level: "Básico",
        duration: "30 min",
        
        vocabulary: [
            { word: "Shirt", translation: "Camisa", pronunciation: "SHERT", example: "This shirt looks great." },
            { word: "Size", translation: "Tamanho", pronunciation: "SAIZ", example: "What size do you wear?" },
            { word: "Color", translation: "Cor", pronunciation: "KU-lar", example: "What color do you prefer?" },
            { word: "Black", translation: "Preto", pronunciation: "BLAK", example: "I like black." },
            { word: "White", translation: "Branco", pronunciation: "UAIT", example: "White bread, please." },
            { word: "Blue", translation: "Azul", pronunciation: "BLUU", example: "I want the blue one." },
            { word: "Red", translation: "Vermelho", pronunciation: "RED", example: "I like red." },
            { word: "Green", translation: "Verde", pronunciation: "GRIIN", example: "Green is my favorite." },
            { word: "Gray", translation: "Cinza", pronunciation: "GREI", example: "A gray shirt." },
            { word: "Brown", translation: "Marrom", pronunciation: "BRAUN", example: "Brown shoes." },
            { word: "Look", translation: "Parecer/Procurar", pronunciation: "LUK", example: "It looks great on you." },
            { word: "Looking for", translation: "Procurando por", pronunciation: "LU-king for", example: "I'm looking for a shirt." },
            { word: "Prefer", translation: "Preferir", pronunciation: "pri-FER", example: "What color do you prefer?" },
            { word: "Buy", translation: "Comprar", pronunciation: "BAI", example: "Would you like to buy it?" },
            { word: "Take", translation: "Levar", pronunciation: "TEIK", example: "I'll take it." },
            { word: "Headache", translation: "Dor de cabeça", pronunciation: "HED-eik", example: "I have a headache." },
            { word: "Stomachache", translation: "Dor de barriga", pronunciation: "STU-muk-eik", example: "I have a stomachache." },
            { word: "Fever", translation: "Febre", pronunciation: "FEE-ver", example: "I have a fever." },
            { word: "Cough", translation: "Tosse", pronunciation: "KOF", example: "I have a cough." },
            { word: "Cold", translation: "Resfriado", pronunciation: "KOULD", example: "I have a cold." },
            { word: "Pain", translation: "Dor", pronunciation: "PEIN", example: "I have pain here." },
            { word: "Sick", translation: "Doente", pronunciation: "SIK", example: "I feel sick." },
            { word: "Feel", translation: "Sentir-se", pronunciation: "FIIL", example: "How do you feel?" },
            { word: "Medicine", translation: "Remédio", pronunciation: "MÉ-de-sin", example: "Take this medicine." },
            { word: "Allergy", translation: "Alergia", pronunciation: "A-ler-jee", example: "I have allergies." },
            { word: "Help", translation: "Ajuda/Ajudar", pronunciation: "HELP", example: "Can I help you?" },
            { word: "Room", translation: "Quarto", pronunciation: "RUUM", example: "A single room, please." },
            { word: "Reservation", translation: "Reserva", pronunciation: "re-zer-VA-shun", example: "I have a reservation." },
            { word: "Booking", translation: "Reserva (hotel)", pronunciation: "BU-king", example: "I'd like to make a booking." },
            { word: "Night", translation: "Noite (período)", pronunciation: "NAIT", example: "One hundred dollars per night." },
            { word: "Phone", translation: "Telefone", pronunciation: "FOUN", example: "What is your phone number?" },
            { word: "Calling", translation: "Ligando", pronunciation: "KAW-ling", example: "Thank you for calling." },
            { word: "Make", translation: "Fazer", pronunciation: "MEIK", example: "I'd like to make a reservation." },
            { word: "Book", translation: "Reservar", pronunciation: "BUK", example: "Would you like to book it?" },
            { word: "People", translation: "Pessoas", pronunciation: "PEE-pol", example: "How many people?" },
            { word: "Wife", translation: "Esposa", pronunciation: "UAIF", example: "With my wife." },
            { word: "Pastry", translation: "Massa/Bolo", pronunciation: "PEIS-tree", example: "I'd like a pastry." },
            { word: "Croissant", translation: "Croissant", pronunciation: "krwa-SAN", example: "A fresh croissant." },
            { word: "Cake", translation: "Bolo", pronunciation: "KEIK", example: "A chocolate cake." },
            { word: "Fresh", translation: "Fresco", pronunciation: "FRESH", example: "Fresh bread." },
            { word: "Kilo", translation: "Quilo", pronunciation: "KEE-lou", example: "Half a kilo, please." },
            { word: "Both", translation: "Ambos", pronunciation: "BOUTH", example: "I want both." },
            { word: "Kind", translation: "Tipo", pronunciation: "KAIND", example: "What kind of bread?" },
            { word: "Credit card", translation: "Cartão de crédito", pronunciation: "KRE-dit KARD", example: "I'll pay with credit card." },
            { word: "Debit card", translation: "Cartão de débito", pronunciation: "DE-bit KARD", example: "I'll pay with debit card." },
            { word: "Understand", translation: "Entender", pronunciation: "UN-der-STAND", example: "I understand." },
            { word: "Recommend", translation: "Recomendar", pronunciation: "rek-o-MEND", example: "What do you recommend?" }
        ],
        
        grammar: {
            title: "Frases Úteis para Situações Reais",
            explanation: "Aprenda as frases mais usadas em situações do dia a dia: restaurante, loja, médico, telefone e padaria.",
            rules: [
                {
                    rule: "RESTAURANTE: I would like + comida",
                    example: "I would like the pasta, please. (Eu gostaria da massa, por favor)",
                    note: "'Would like' é mais educado que 'want'"
                },
                {
                    rule: "RESTAURANTE: Can I have + comida?",
                    example: "Can I have some water? (Posso ter água?)",
                    note: "'Can I have' é uma forma educada de pedir"
                },
                {
                    rule: "LOJA: How much is + item?",
                    example: "How much is this shirt? (Quanto custa esta camisa?)",
                    note: "'How much' = quanto custa"
                },
                {
                    rule: "LOJA: I'll take it",
                    example: "I'll take the blue one. (Vou levar o azul)",
                    note: "'I'll take it' = vou levar"
                },
                {
                    rule: "MÉDICO: I have + problema de saúde",
                    example: "I have a headache. (Tenho dor de cabeça)",
                    note: "'Headache' = dor de cabeça"
                },
                {
                    rule: "MÉDICO: I feel + estado",
                    example: "I feel sick. (Estou sentindo-me doente)",
                    note: "'Feel' = sentir-se"
                },
                {
                    rule: "TELEFONE: I'd like to make a reservation",
                    example: "I'd like to make a reservation. (Eu gostaria de fazer uma reserva)",
                    note: "'I'd like to' = eu gostaria de"
                },
                {
                    rule: "PADARIA: I'd like + item",
                    example: "I'd like a croissant, please. (Eu gostaria de um croissant, por favor)",
                    note: "Use 'I'd like' (contração de 'I would like')"
                }
            ],
            sentences: [
                { english: "I would like a table for two.", portuguese: "Eu gostaria de uma mesa para dois.", structure: "I + would like + a + mesa + for + número" },
                { english: "Can I have the menu, please?", portuguese: "Posso ter o cardápio, por favor?", structure: "Can + I + have + o + menu + please?" },
                { english: "How much is this shirt?", portuguese: "Quanto custa esta camisa?", structure: "How much + is + this + shirt?" },
                { english: "I'll take the blue one.", portuguese: "Vou levar o azul.", structure: "I'll + take + the + blue + one" },
                { english: "I have a headache.", portuguese: "Tenho dor de cabeça.", structure: "I + have + a + headache" },
                { english: "I feel sick today.", portuguese: "Estou doente hoje.", structure: "I + feel + sick + today" },
                { english: "I'd like to make a reservation.", portuguese: "Eu gostaria de fazer uma reserva.", structure: "I'd like + to + make + a + reservation" },
                { english: "I'd like a croissant, please.", portuguese: "Eu gostaria de um croissant, por favor.", structure: "I'd like + a + croissant + please" }
            ]
        },
        
        conversations: [
            {
                title: "No Restaurante",
                context: "Você está em um restaurante fazendo seu pedido.",
                lines: [
                    { speaker: "A", english: "Good evening! Welcome to our restaurant.", portuguese: "Boa noite! Bem-vindo ao nosso restaurante." },
                    { speaker: "B", english: "Thank you. A table for two, please.", portuguese: "Obrigado. Uma mesa para dois, por favor." },
                    { speaker: "A", english: "Here you are. Here's the menu.", portuguese: "Aqui está. Aqui está o cardápio." },
                    { speaker: "B", english: "Thank you. What would you like to drink?", portuguese: "Obrigado. O que você gostaria de beber?" },
                    { speaker: "C", english: "I would like some orange juice, please.", portuguese: "Eu gostaria de suco de laranja, por favor." },
                    { speaker: "B", english: "And I'll have a coffee, please.", portuguese: "E eu vou querer um café, por favor." }
                ]
            }
        ],
        
        phrases: [
            {
                expected: "I would like a table for two.",
                translation: "Eu gostaria de uma mesa para dois.",
                response: "Here you are. Right this way.",
                responseTranslation: "Aqui está. Por aqui, por favor.",
                tips: ["'Would like' = gostaria", "'Table' = mesa"]
            },
            {
                expected: "How much is this shirt?",
                translation: "Quanto custa esta camisa?",
                response: "This shirt is thirty dollars.",
                responseTranslation: "Esta camisa custa trinta dólares.",
                tips: ["'How much' = quanto", "'Shirt' = camisa"]
            },
            {
                expected: "I have a headache.",
                translation: "Tenho dor de cabeça.",
                response: "Take this medicine twice a day.",
                responseTranslation: "Tome este remédio duas vezes ao dia.",
                tips: ["'Headache' = dor de cabeça", "'Medicine' = remédio"]
            },
            {
                expected: "I'd like to make a reservation.",
                translation: "Eu gostaria de fazer uma reserva.",
                response: "Sure! What dates are you looking for?",
                responseTranslation: "Claro! Quais datas você está procurando?",
                tips: ["'Reservation' = reserva", "'Make' = fazer"]
            },
            {
                expected: "I'd like a croissant, please.",
                translation: "Eu gostaria de um croissant, por favor.",
                response: "Sure! Anything else?",
                responseTranslation: "Claro! Mais alguma coisa?",
                tips: ["'Croissant' = croissant", "'Anything else' = mais alguma coisa"]
            }
        ]
    },
    
    7: {
        title: "Médico, Hotel, Loja e Padaria",
        description: "Vocabulário completo para cada cenário do dia a dia",
        level: "Básico",
        duration: "30 min",
        
        vocabulary: [
            { word: "Restaurant", translation: "Restaurante", pronunciation: "RES-to-rant", example: "This restaurant is great." },
            { word: "Waiter", translation: "Garçom", pronunciation: "UEI-ter", example: "Excuse me, waiter." },
            { word: "Reservation", translation: "Reserva", pronunciation: "re-zer-VA-shun", example: "I have a reservation." },
            { word: "Menu", translation: "Cardápio", pronunciation: "MÉ-niu", example: "Can I see the menu?" },
            { word: "Order", translation: "Pedir (comida)", pronunciation: "OR-der", example: "I'm ready to order." },
            { word: "Check", translation: "Conta (restaurante)", pronunciation: "CHEK", example: "Can I have the check?" },
            { word: "Bill", translation: "Conta (pagamento)", pronunciation: "BIL", example: "The bill, please." },
            { word: "Dessert", translation: "Sobremesa", pronunciation: "di-ZERT", example: "Would you like dessert?" },
            { word: "Recommend", translation: "Recomendar", pronunciation: "rek-o-MEND", example: "What do you recommend?" },
            { word: "Soda", translation: "Refrigerante", pronunciation: "SOU-da", example: "A soda, please." },
            { word: "Wine", translation: "Vinho", pronunciation: "UAIN", example: "A glass of wine." },
            { word: "Beer", translation: "Cerveja", pronunciation: "BIIR", example: "A cold beer, please." },
            { word: "Italian", translation: "Italiano", pronunciation: "I-TA-lyan", example: "An Italian restaurant." },
            { word: "Restaurant", translation: "Restaurante", pronunciation: "RES-to-rant", example: "This restaurant is great." },
            { word: "Fashion", translation: "Moda", pronunciation: "FA-shun", example: "Fashion Store." },
            { word: "Store", translation: "Loja", pronunciation: "STOR", example: "Welcome to our store." },
            { word: "Find", translation: "Encontrar", pronunciation: "FAIND", example: "Can I help you find something?" },
            { word: "Wear", translation: "Usar (roupa)", pronunciation: "UER", example: "What size do you wear?" },
            { word: "Medium", translation: "Médio (tamanho M)", pronunciation: "MEE-dee-um", example: "Medium size, please." },
            { word: "Large", translation: "Grande (tamanho G)", pronunciation: "LARJ", example: "I need a large." },
            { word: "Extra", translation: "Extra", pronunciation: "EX-tra", example: "Extra large." },
            { word: "Beautiful", translation: "Bonito/Lindo", pronunciation: "BYUU-ti-ful", example: "It's beautiful!" },
            { word: "Shopping", translation: "Comprando", pronunciation: "SHO-ping", example: "Thank you for shopping with us." },
            { word: "Problem", translation: "Problema", pronunciation: "PRO-blem", example: "What's the problem?" },
            { word: "Seems", translation: "Parece", pronunciation: "SIIMZ", example: "What seems to be the problem?" },
            { word: "Symptoms", translation: "Sintomas", pronunciation: "SIMP-tums", example: "Do you have any symptoms?" },
            { word: "Medication", translation: "Medicamento", pronunciation: "me-di-KÉI-shun", example: "Are you taking any medication?" },
            { word: "Allergies", translation: "Alergias", pronunciation: "A-ler-jeez", example: "Do you have any allergies?" },
            { word: "Allergic", translation: "Alérgico", pronunciation: "a-LER-jik", example: "I'm allergic to penicillin." },
            { word: "Hurts", translation: "Dói", pronunciation: "HERTS", example: "It hurts here." },
            { word: "Coughing", translation: "Tossindo", pronunciation: "KO-fing", example: "I'm coughing a lot." },
            { word: "Taking", translation: "Tomando", pronunciation: "TEI-king", example: "I'm taking medicine." },
            { word: "Since", translation: "Desde", pronunciation: "SINS", example: "Since Monday." },
            { word: "Few", translation: "Poucos", pronunciation: "FII", example: "A few days." },
            { word: "Twice", translation: "Duas vezes", pronunciation: "TUUAIS", example: "Twice a day." },
            { word: "Prescribe", translation: "Receitar (médico)", pronunciation: "pri-SKRAIB", example: "The doctor will prescribe medicine." },
            { word: "Symptoms", translation: "Sintomas", pronunciation: "SIMP-tums", example: "What are your symptoms?" },
            { word: "Doctor", translation: "Médico", pronunciation: "DOK-ter", example: "The doctor is nice." },
            { word: "Hotel", translation: "Hotel", pronunciation: "hou-TEL", example: "This hotel is great." },
            { word: "Booking", translation: "Reserva (hotel)", pronunciation: "BU-king", example: "I'd like to make a booking." },
            { word: "Dates", translation: "Datas", pronunciation: "DEITS", example: "What dates are you looking for?" },
            { word: "Staying", translation: "Hospedando", pronunciation: "STEI-ying", example: "How many people will be staying?" },
            { word: "Type", translation: "Tipo", pronunciation: "TAIP", example: "What type of room?" },
            { word: "Single", translation: "Solteiro", pronunciation: "SING-gol", example: "A single room." },
            { word: "Double", translation: "Casal", pronunciation: "DA-bol", example: "A double room." },
            { word: "Suite", translation: "Suíte", pronunciation: "SUUT", example: "A luxury suite." },
            { word: "Cheapest", translation: "Mais barato", pronunciation: "CHEE-pist", example: "The cheapest room." },
            { word: "Receptionist", translation: "Recepcionista", pronunciation: "ri-SEP-shun-ist", example: "The receptionist is helpful." },
            { word: "Professional", translation: "Profissional", pronunciation: "pro-FE-shu-nal", example: "You sound very professional." },
            { word: "Weekend", translation: "Fim de semana", pronunciation: "UIIK-end", example: "This weekend." },
            { word: "Monday", translation: "Segunda-feira", pronunciation: "MAN-dei", example: "From Monday." },
            { word: "Friday", translation: "Sexta-feira", pronunciation: "FRAI-dei", example: "Until Friday." },
            { word: "Pastry", translation: "Massa/Bolo", pronunciation: "PEIS-tree", example: "I'd like a pastry." },
            { word: "Croissant", translation: "Croissant", pronunciation: "krwa-SAN", example: "A fresh croissant." },
            { word: "Cake", translation: "Bolo", pronunciation: "KEIK", example: "A chocolate cake." },
            { word: "Fresh", translation: "Fresco", pronunciation: "FRESH", example: "Fresh bread." },
            { word: "Kilo", translation: "Quilo", pronunciation: "KEE-lou", example: "Half a kilo." },
            { word: "Half", translation: "Meio", pronunciation: "HAF", example: "Half a kilo." },
            { word: "Full", translation: "Cheio/Completo", pronunciation: "FUL", example: "A full kilo." },
            { word: "Whole", translation: "Inteiro", pronunciation: "HOUL", example: "Whole wheat bread." },
            { word: "Wheat", translation: "Trigo", pronunciation: "UIIT", example: "Whole wheat." },
            { word: "French", translation: "Francês", pronunciation: "FRENCH", example: "French bread." },
            { word: "Both", translation: "Ambos", pronunciation: "BOUTH", example: "I want both." },
            { word: "Kind", translation: "Tipo", pronunciation: "KAIND", example: "What kind of bread?" },
            { word: "Piece", translation: "Pedacinho", pronunciation: "PIIS", example: "A small piece." },
            { word: "Cents", translation: "Centavos", pronunciation: "SENTS", example: "Fifty cents." },
            { word: "Baker", translation: "Padeiro", pronunciation: "BÉI-ker", example: "The baker is friendly." },
            { word: "Wonderful", translation: "Maravilhoso", pronunciation: "UUN-der-ful", example: "Have a wonderful day!" },
            { word: "Fantastic", translation: "Fantástico", pronunciation: "fan-TAS-tik", example: "You're doing fantastic!" },
            { word: "Pronunciation", translation: "Pronúncia", pronunciation: "pro-nun-si-ÉI-shun", example: "Your pronunciation is great!" },
            { word: "Communication", translation: "Comunicação", pronunciation: "ko-miu-ni-KÉI-shun", example: "Excellent communication!" },
            { word: "Sound", translation: "Soar/Parecer", pronunciation: "SAUND", example: "You sound great!" },
            { word: "Explained", translation: "Explicou", pronunciation: "iks-PLÉIND", example: "You explained it well!" },
            { word: "Describing", translation: "Descrevendo", pronunciation: "di-SKRAI-bing", example: "You're describing your problem well!" },
            { word: "Communicating", translation: "Comunicando", pronunciation: "ko-MIU-ni-kei-ting", example: "You're communicating very well!" }
        ],
        
        grammar: {
            title: "Frases Completas para Cada Situação",
            explanation: "Aprenda frases prontas para usar em cada situação: restaurante, loja, médico, hotel e padaria.",
            rules: [
                {
                    rule: "RESTAURANTE: I would like + comida",
                    example: "I would like the pasta, please. (Eu gostaria da massa, por favor)",
                    note: "'Would like' é mais educado que 'want'"
                },
                {
                    rule: "RESTAURANTE: Can I have + item?",
                    example: "Can I have the check, please? (Posso ter a conta, por favor?)",
                    note: "'Can I have' = posso ter"
                },
                {
                    rule: "LOJA: How much is + item?",
                    example: "How much is this shirt? (Quanto custa esta camisa?)",
                    note: "'How much' = quanto custa"
                },
                {
                    rule: "LOJA: I'll take it",
                    example: "I'll take the blue one. (Vou levar o azul)",
                    note: "'I'll take it' = vou levar"
                },
                {
                    rule: "MÉDICO: I have + problema",
                    example: "I have a headache. (Tenho dor de cabeça)",
                    note: "'Headache' = dor de cabeça"
                },
                {
                    rule: "MÉDICO: I feel + estado",
                    example: "I feel sick. (Estou sentindo-me doente)",
                    note: "'Feel' = sentir-se"
                },
                {
                    rule: "HOTEL: I'd like to make a reservation",
                    example: "I'd like to make a reservation. (Eu gostaria de fazer uma reserva)",
                    note: "'I'd like to' = eu gostaria de"
                },
                {
                    rule: "PADARIA: I'd like + item",
                    example: "I'd like a croissant, please. (Eu gostaria de um croissant, por favor)",
                    note: "Use 'I'd like' (contração de 'I would like')"
                }
            ],
            sentences: [
                { english: "I would like a table for two.", portuguese: "Eu gostaria de uma mesa para dois.", structure: "I + would like + a + table + for + two" },
                { english: "Can I have the check, please?", portuguese: "Posso ter a conta, por favor?", structure: "Can + I + have + the + check + please?" },
                { english: "How much is this shirt?", portuguese: "Quanto custa esta camisa?", structure: "How much + is + this + shirt?" },
                { english: "I'll take the blue one.", portuguese: "Vou levar o azul.", structure: "I'll + take + the + blue + one" },
                { english: "I have a headache.", portuguese: "Tenho dor de cabeça.", structure: "I + have + a + headache" },
                { english: "I feel sick today.", portuguese: "Estou doente hoje.", structure: "I + feel + sick + today" },
                { english: "I'd like to make a reservation.", portuguese: "Eu gostaria de fazer uma reserva.", structure: "I'd like + to + make + a + reservation" },
                { english: "I'd like a croissant, please.", portuguese: "Eu gostaria de um croissant, por favor.", structure: "I'd like + a + croissant + please" }
            ]
        },
        
        conversations: [
            {
                title: "No Restaurante",
                context: "Você está em um restaurante fazendo seu pedido.",
                lines: [
                    { speaker: "A", english: "Good evening! Welcome to our restaurant.", portuguese: "Boa noite! Bem-vindo ao nosso restaurante." },
                    { speaker: "B", english: "Thank you. A table for two, please.", portuguese: "Obrigado. Uma mesa para dois, por favor." },
                    { speaker: "A", english: "Here you are. Here's the menu.", portuguese: "Aqui está. Aqui está o cardápio." },
                    { speaker: "B", english: "Thank you. What would you like to drink?", portuguese: "Obrigado. O que você gostaria de beber?" },
                    { speaker: "C", english: "I would like some orange juice, please.", portuguese: "Eu gostaria de suco de laranja, por favor." },
                    { speaker: "B", english: "And I'll have a coffee, please.", portuguese: "E eu vou querer um café, por favor." }
                ]
            }
        ],
        
        phrases: [
            {
                expected: "I would like a table for two.",
                translation: "Eu gostaria de uma mesa para dois.",
                response: "Here you are. Right this way.",
                responseTranslation: "Aqui está. Por aqui, por favor.",
                tips: ["'Would like' = gostaria", "'Table' = mesa"]
            },
            {
                expected: "How much is this shirt?",
                translation: "Quanto custa esta camisa?",
                response: "This shirt is thirty dollars.",
                responseTranslation: "Esta camisa custa trinta dólares.",
                tips: ["'How much' = quanto", "'Shirt' = camisa"]
            },
            {
                expected: "I have a headache.",
                translation: "Tenho dor de cabeça.",
                response: "Take this medicine twice a day.",
                responseTranslation: "Tome este remédio duas vezes ao dia.",
                tips: ["'Headache' = dor de cabeça", "'Medicine' = remédio"]
            },
            {
                expected: "I'd like to make a reservation.",
                translation: "Eu gostaria de fazer uma reserva.",
                response: "Sure! What dates are you looking for?",
                responseTranslation: "Claro! Quais datas você está procurando?",
                tips: ["'Reservation' = reserva", "'Make' = fazer"]
            },
            {
                expected: "I'd like a croissant, please.",
                translation: "Eu gostaria de um croissant, por favor.",
                response: "Sure! Anything else?",
                responseTranslation: "Claro! Mais alguma coisa?",
                tips: ["'Croissant' = croissant", "'Anything else' = mais alguma coisa"]
            }
        ]
    },

    // ============================================
    // MODULO 2 - PRESENT SIMPLE, PRESENT CONTINUOUS, VERBOS
    // ============================================

    8: {
        title: "Present Simple - Parte 1",
        description: "Aprenda a usar o presente simples com I, You, We, They",
        level: "Intermediario",
        duration: "25 min",

        vocabulary: [
            { word: "Work", translation: "Trabalhar", pronunciation: "UERK", example: "I work at a bank." },
            { word: "Live", translation: "Morar", pronunciation: "LIV", example: "I live in Brazil." },
            { word: "Like", translation: "Gostar", pronunciation: "LAIK", example: "I like coffee." },
            { word: "Love", translation: "Amar", pronunciation: "LAV", example: "I love my family." },
            { word: "Hate", translation: "Odiar", pronunciation: "HEIT", example: "I hate spiders." },
            { word: "Want", translation: "Querer", pronunciation: "UONT", example: "I want water." },
            { word: "Need", translation: "Precisar", pronunciation: "NIID", example: "I need help." },
            { word: "Eat", translation: "Comer", pronunciation: "IIT", example: "I eat breakfast at 7 AM." },
            { word: "Drink", translation: "Beber", pronunciation: "DRINK", example: "I drink water every day." },
            { word: "Sleep", translation: "Dormir", pronunciation: "SLIIP", example: "I sleep 8 hours." },
            { word: "Study", translation: "Estudar", pronunciation: "STADI", example: "I study English." },
            { word: "Play", translation: "Jogar/Brincar", pronunciation: "PLEI", example: "I play soccer." },
            { word: "Read", translation: "Ler", pronunciation: "RIID", example: "I read books." },
            { word: "Write", translation: "Escrever", pronunciation: "RAIT", example: "I write emails." },
            { word: "Listen", translation: "Ouvir/Escutar", pronunciation: "LISSEN", example: "I listen to music." },
            { word: "Watch", translation: "Assistir/Ver", pronunciation: "UOTCH", example: "I watch TV." },
            { word: "Go", translation: "Ir", pronunciation: "GOU", example: "I go to work." },
            { word: "Come", translation: "Vir", pronunciation: "KAM", example: "I come home at 6 PM." },
            { word: "Have", translation: "Ter", pronunciation: "HAV", example: "I have two children." },
            { word: "Do", translation: "Fazer", pronunciation: "DUU", example: "I do my homework." },
            { word: "Speak", translation: "Falar", pronunciation: "SPIIK", example: "I speak English." },
            { word: "Understand", translation: "Entender", pronunciation: "UNDER-stand", example: "I understand you." },
            { word: "Think", translation: "Pensar", pronunciation: "SINK", example: "I think so." },
            { word: "Know", translation: "Saber", pronunciation: "NOU", example: "I know the answer." },
            { word: "Believe", translation: "Acreditar", pronunciation: "bi-LIIV", example: "I believe in you." },
            { word: "Try", translation: "Tentar", pronunciation: "TRAI", example: "I try my best." },
            { word: "Help", translation: "Ajudar", pronunciation: "HELP", example: "I help my friends." },
            { word: "Learn", translation: "Aprender", pronunciation: "LERN", example: "I learn new words." },
            { word: "Teach", translation: "Ensinar", pronunciation: "TIICH", example: "I teach English." },
            { word: "Talk", translation: "Conversar", pronunciation: "TOK", example: "I talk to my mom." }
        ],

        grammar: {
            title: "Present Simple com I, You, We, They",
            explanation: "O Present Simple usa o verbo no formato base para I, You, We, They. Serve para falar de habitos, verdades gerais e rotinas.",
            rules: [
                {
                    rule: "I/You/We/They + VERBO BASE",
                    example: "I work at a bank. (Eu trabalho em um banco)",
                    note: "Nao muda nada no verbo"
                },
                {
                    rule: "I am / You are / We are / They are",
                    example: "I am happy. (Eu estou feliz)",
                    note: "Usar 'am' so com I, 'are' com You/We/They"
                },
                {
                    rule: "I/You/We/They + DON'T + VERBO",
                    example: "I don't speak French. (Eu nao falo frances)",
                    note: "Negativo usa don't"
                },
                {
                    rule: "DO + I/You/we/they + VERBO?",
                    example: "Do you speak English? (Voce fala ingles?)",
                    note: "Pergunta usa Do no comeco"
                }
            ],
            sentences: [
                { english: "I live in Brazil.", portuguese: "Eu moro no Brasil.", structure: "I + live + in + Brazil" },
                { english: "You speak English.", portuguese: "Voce fala ingles.", structure: "You + speak + English" },
                { english: "We work together.", portuguese: "Nos trabalhamos juntos.", structure: "We + work + together" },
                { english: "They like pizza.", portuguese: "Eles gostam de pizza.", structure: "They + like + pizza" },
                { english: "I don't eat meat.", portuguese: "Eu nao como carne.", structure: "I + don't + eat + meat" },
                { english: "Do you study English?", portuguese: "Voce estuda ingles?", structure: "Do + you + study + English?" }
            ]
        },

        conversations: [
            {
                title: "Apresentacao Pessoal",
                context: "Voce esta conhecendo uma nova pessoa em uma festa.",
                lines: [
                    { speaker: "A", english: "Hi! What's your name?", portuguese: "Oii! Qual e o seu nome?" },
                    { speaker: "B", english: "My name is Maria. What's your name?", portuguese: "Meu nome e Maria. Qual e o seu nome?" },
                    { speaker: "A", english: "I'm John. Nice to meet you!", portuguese: "Eu sou John. Prazer em te conhecer!" },
                    { speaker: "B", english: "Nice to meet you too! Where do you live?", portuguese: "Prazer tambem! Onde voce mora?" },
                    { speaker: "A", english: "I live in Sao Paulo. And you?", portuguese: "Eu moro em Sao Paulo. E voce?" },
                    { speaker: "B", english: "I live in Rio de Janeiro.", portuguese: "Eu moro no Rio de Janeiro." }
                ]
            }
        ],

        phrases: [
            {
                expected: "I live in Brazil.",
                translation: "Eu moro no Brasil.",
                response: "Oh, Brazil! I love Brazilian music!",
                responseTranslation: "Oh, Brasil! Eu amo musica brasileira!",
                tips: ["'Live' = morar", "'In' = em"]
            },
            {
                expected: "I work at a bank.",
                translation: "Eu trabalho em um banco.",
                response: "That's interesting! What do you do there?",
                responseTranslation: "Isso e interessante! O que voce faz la?",
                tips: ["'Work' = trabalhar", "'At' = em (lugar)"]
            },
            {
                expected: "I like coffee.",
                translation: "Eu gosto de cafe.",
                response: "Me too! Coffee is great in the morning.",
                responseTranslation: "Eu tambem! Cafe e otimo de manha.",
                tips: ["'Like' = gostar", "'Coffee' = cafe"]
            },
            {
                expected: "I don't eat meat.",
                translation: "Eu nao como carne.",
                response: "That's OK. There are many vegetarian options.",
                responseTranslation: "Tudo bem. Tem muitas opcoes vegetarianas.",
                tips: ["'Don't' = nao (com I/you/we/they)", "'Meat' = carne"]
            },
            {
                expected: "I study English every day.",
                translation: "Eu estudo ingles todo dia.",
                response: "That's great! Practice makes perfect!",
                responseTranslation: "Otimo! Pratica leva a perfeicao!",
                tips: ["'Study' = estudar", "'Every day' = todo dia"]
            }
        ]
    },

    9: {
        title: "Present Simple - Parte 2",
        description: "Aprenda a usar o presente simples com He, She, It",
        level: "Intermediario",
        duration: "25 min",

        vocabulary: [
            { word: "Works", translation: "Trabalha", pronunciation: "UERKS", example: "She works at a hospital." },
            { word: "Lives", translation: "Mora", pronunciation: "LIVS", example: "He lives in New York." },
            { word: "Likes", translation: "Gosta", pronunciation: "LAIKS", example: "She likes chocolate." },
            { word: "Loves", translation: "Ama", pronunciation: "LAVS", example: "He loves his family." },
            { word: "Hates", translation: "Odia", pronunciation: "HEITS", example: "She hates spiders." },
            { word: "Wants", translation: "Quer", pronunciation: "UONTS", example: "He wants coffee." },
            { word: "Needs", translation: "Precisa", pronunciation: "NIIDS", example: "She needs help." },
            { word: "Eats", translation: "Come", pronunciation: "IITS", example: "He eats breakfast at 8 AM." },
            { word: "Drinks", translation: "Bebe", pronunciation: "DRINKS", example: "She drinks tea." },
            { word: "Sleeps", translation: "Dorme", pronunciation: "SLIIPS", example: "The baby sleeps a lot." },
            { word: "Studies", translation: "Estuda", pronunciation: "STADIZ", example: "He studies math." },
            { word: "Plays", translation: "Joga", pronunciation: "PLEIS", example: "She plays piano." },
            { word: "Reads", translation: "Le", pronunciation: "RIIDS", example: "He reads books." },
            { word: "Writes", translation: "Escreve", pronunciation: "RAITS", example: "She writes stories." },
            { word: "Listens", translation: "Ouve", pronunciation: "LISSENS", example: "He listens to music." },
            { word: "Watches", translation: "Assiste", pronunciation: "UOTCHIZ", example: "She watches TV." },
            { word: "Goes", translation: "Vai", pronunciation: "GOUZ", example: "He goes to work." },
            { word: "Comes", translation: "Vem", pronunciation: "KAMS", example: "She comes home at 5 PM." },
            { word: "Has", translation: "Tem", pronunciation: "HAS", example: "He has two sisters." },
            { word: "Does", translation: "Faz", pronunciation: "DAZ", example: "She does her homework." },
            { word: "Speaks", translation: "Fala", pronunciation: "SPIIKS", example: "He speaks English." },
            { word: "Understands", translation: "Entende", pronunciation: "UNDER-STANDS", example: "She understands Portuguese." },
            { word: "Thinks", translation: "Pensa", pronunciation: "SINKS", example: "He thinks it's good." },
            { word: "Knows", translation: "Sabe", pronunciation: "NOUZ", example: "She knows the answer." },
            { word: "Begins", translation: "Comeca", pronunciation: "bi-GINS", example: "The class begins at 9 AM." }
        ],

        grammar: {
            title: "Present Simple com He, She, It",
            explanation: "Quando o sujeito e He, She ou It, precisamos adicionar -s ou -es no final do verbo. Isso e a regra do Present Simple para terceira pessoa.",
            rules: [
                {
                    rule: "He/She/It + VERBO + S/ES",
                    example: "She works at a hospital. (Ela trabalha em um hospital)",
                    note: "Adicionar -s no final do verbo"
                },
                {
                    rule: "He is / She is / It is",
                    example: "He is a teacher. (Ele e professor)",
                    note: "Usar 'is' com He/She/It"
                },
                {
                    rule: "He/She/It + DOESN'T + VERBO",
                    example: "She doesn't speak French. (Ela nao fala frances)",
                    note: "Negativo usa doesn't + verbo SEM -s"
                },
                {
                    rule: "DOES + he/she/it + VERBO?",
                    example: "Does he speak English? (Ele fala ingles?)",
                    note: "Pergunta usa Does + verbo SEM -s"
                }
            ],
            sentences: [
                { english: "She works at a hospital.", portuguese: "Ela trabalha em um hospital.", structure: "She + works + at + hospital" },
                { english: "He lives in New York.", portuguese: "Ele mora em Nova York.", structure: "He + lives + in + New York" },
                { english: "It rains a lot.", portuguese: "Chove muito.", structure: "It + rains + a lot" },
                { english: "She doesn't like spiders.", portuguese: "Ela nao gosta de aranhas.", structure: "She + doesn't + like + spiders" },
                { english: "Does he work here?", portuguese: "Ele trabalha aqui?", structure: "Does + he + work + here?" },
                { english: "He doesn't understand.", portuguese: "Ele nao entende.", structure: "He + doesn't + understand" }
            ]
        },

        conversations: [
            {
                title: "Falando sobre Familia",
                context: "Voce esta mostrando fotos da sua familia para um amigo.",
                lines: [
                    { speaker: "A", english: "Who is this?", portuguese: "Quem e essa?" },
                    { speaker: "B", english: "That's my mother. She's a teacher.", portuguese: "Essa e minha mae. Ela e professora." },
                    { speaker: "A", english: "Nice! And who is this?", portuguese: "Legal! E quem e esse?" },
                    { speaker: "B", english: "That's my father. He works at a bank.", portuguese: "Esse e meu pai. Ele trabalha em um banco." },
                    { speaker: "A", english: "Do you have any brothers or sisters?", portuguese: "Voce tem irmaos ou irmas?" },
                    { speaker: "B", english: "Yes, I have one sister. She studies medicine.", portuguese: "Sim, tenho uma irma. Ela estuda medicina." }
                ]
            }
        ],

        phrases: [
            {
                expected: "She works at a hospital.",
                translation: "Ela trabalha em um hospital.",
                response: "That's a great job! Hospitals need good workers.",
                responseTranslation: "Isso e um otimo emprego! Hospitais precisam de bons funcionarios.",
                tips: ["'Works' = trabalha (com She)", "'Hospital' = hospital"]
            },
            {
                expected: "He lives in New York.",
                translation: "Ele mora em Nova York.",
                response: "New York is a beautiful city!",
                responseTranslation: "Nova York e uma cidade linda!",
                tips: ["'Lives' = mora (com He)", "'New York' = Nova York"]
            },
            {
                expected: "She doesn't like spiders.",
                translation: "Ela nao gosta de aranhas.",
                response: "Me neither! Spiders are scary.",
                responseTranslation: "Eu tambem nao! Aranhas sao assustadoras.",
                tips: ["'Doesn't' = nao (com He/She/It)", "'Spiders' = aranhas"]
            },
            {
                expected: "Does he speak English?",
                translation: "Ele fala ingles?",
                response: "Yes, he speaks English and Spanish.",
                responseTranslation: "Sim, ele fala ingles e espanhol.",
                tips: ["'Does' = auxiliar para perguntas", "'Speak' = falar"]
            },
            {
                expected: "It rains a lot here.",
                translation: "Chove muito aqui.",
                response: "Yes, especially in the summer.",
                responseTranslation: "Sim, especialmente no verao.",
                tips: ["'It' = sujeito para clima", "'Rains' = chove"]
            }
        ]
    },

    10: {
        title: "Verbos do Dia a Dia",
        description: "50 verbos essenciais para o dia a dia em ingles",
        level: "Intermediario",
        duration: "30 min",

        vocabulary: [
            { word: "Go", translation: "Ir", pronunciation: "GOU", example: "I go to work." },
            { word: "Come", translation: "Vir", pronunciation: "KAM", example: "Come here, please." },
            { word: "Walk", translation: "Andar", pronunciation: "UOK", example: "I walk to school." },
            { word: "Run", translation: "Correr", pronunciation: "RAN", example: "I run in the morning." },
            { word: "Stop", translation: "Parar", pronunciation: "STOP", example: "Stop the car!" },
            { word: "Make", translation: "Fazer/Criar", pronunciation: "MEIK", example: "I make breakfast." },
            { word: "Take", translation: "Pegar/Levar", pronunciation: "TEIK", example: "Take this medicine." },
            { word: "Give", translation: "Dar", pronunciation: "GIV", example: "Give me the book." },
            { word: "Put", translation: "Colocar", pronunciation: "PUT", example: "Put it on the table." },
            { word: "Get", translation: "Receber/Conseguir", pronunciation: "GET", example: "I get up at 7 AM." },
            { word: "Find", translation: "Encontrar", pronunciation: "FAIND", example: "I can't find my keys." },
            { word: "Say", translation: "Dizer", pronunciation: "SEI", example: "What did you say?" },
            { word: "Tell", translation: "Contar/Dizer", pronunciation: "TEL", example: "Tell me a story." },
            { word: "Ask", translation: "Perguntar", pronunciation: "ASK", example: "Can I ask you something?" },
            { word: "Answer", translation: "Responder", pronunciation: "AN-ser", example: "Please answer the phone." },
            { word: "Call", translation: "Ligar/Chamar", pronunciation: "KOL", example: "I'll call you later." },
            { word: "Think", translation: "Pensar", pronunciation: "SINK", example: "I think it's good." },
            { word: "Know", translation: "Saber", pronunciation: "NOU", example: "I know the answer." },
            { word: "Understand", translation: "Entender", pronunciation: "UNDER-stand", example: "I understand now." },
            { word: "Believe", translation: "Acreditar", pronunciation: "bi-LIIV", example: "I believe you." },
            { word: "Like", translation: "Gostar", pronunciation: "LAIK", example: "I like this song." },
            { word: "Love", translation: "Amar", pronunciation: "LAV", example: "I love my family." },
            { word: "Hate", translation: "Odiar", pronunciation: "HEIT", example: "I hate Mondays." },
            { word: "Want", translation: "Querer", pronunciation: "UONT", example: "I want water." },
            { word: "Need", translation: "Precisar", pronunciation: "NIID", example: "I need help." },
            { word: "Use", translation: "Usar", pronunciation: "IUS", example: "Can I use your phone?" },
            { word: "Open", translation: "Abrir", pronunciation: "OU-pen", example: "Open the door." },
            { word: "Close", translation: "Fechar", pronunciation: "KLOUS", example: "Close the window." },
            { word: "Start", translation: "Comecar", pronunciation: "START", example: "The class starts at 9 AM." },
            { word: "Finish", translation: "Terminar", pronunciation: "FI-nish", example: "I finish work at 5 PM." },
            { word: "Wait", translation: "Esperar", pronunciation: "UEIT", example: "Wait for me!" },
            { word: "Try", translation: "Tentar", pronunciation: "TRAI", example: "Try again." },
            { word: "Begin", translation: "Comecar", pronunciation: "bi-GIN", example: "Let's begin." },
            { word: "End", translation: "Terminar", pronunciation: "END", example: "The movie ends at 10 PM." },
            { word: "Move", translation: "Mover/Mudar", pronunciation: "MUV", example: "I moved to a new house." },
            { word: "Live", translation: "Morar/Viver", pronunciation: "LIV", example: "I live in Brazil." },
            { word: "Die", translation: "Morrer", pronunciation: "DAI", example: "Plants die without water." },
            { word: "Born", translation: "Nascer", pronunciation: "BORN", example: "I was born in 1990." },
            { word: "Grow", translation: "Crescer", pronunciation: "GROU", example: "Children grow fast." },
            { word: "Change", translation: "Mudar/Trocar", pronunciation: "CHEINJ", example: "I want to change my job." },
            { word: "Stay", translation: "Ficar", pronunciation: "STEI", example: "I stay at home today." },
            { word: "Leave", translation: "Sair/Deixar", pronunciation: "LIV", example: "I leave home at 7 AM." },
            { word: "Arrive", translation: "Chegar", pronunciation: "a-RAIV", example: "I arrive at work at 8 AM." },
            { word: "Return", translation: "Voltar", pronunciation: "ri-TERN", example: "I return home at 6 PM." },
            { word: "Bring", translation: "Trazer", pronunciation: "BRING", example: "Bring me a coffee." },
            { word: "Buy", translation: "Comprar", pronunciation: "BAI", example: "I buy groceries." },
            { word: "Sell", translation: "Vender", pronunciation: "SEL", example: "They sell fruits." },
            { word: "Pay", translation: "Pagar", pronunciation: "PEI", example: "I pay with card." },
            { word: "Cost", translation: "Custar", pronunciation: "KOST", example: "It costs ten dollars." },
            { word: "Spend", translation: "Gastar", pronunciation: "SPEND", example: "I spend money on food." }
        ],

        grammar: {
            title: "Infinitivo vs. Forma Conjugada",
            explanation: "Os verbos em ingles aparecem de duas formas principais: no infinitivo (forma basica) e conjugados (com mudancas para cada sujeito). Aprenda a reconhecer e usar cada forma.",
            rules: [
                {
                    rule: "INFINITIVO (forma basica): go, come, make, take...",
                    example: "I want to go home. (Eu quero ir para casa)",
                    note: "Usado depois de outro verbo (want to, need to, like to)"
                },
                {
                    rule: "CONJUGADO com I/You/We/They: go, come, make, take...",
                    example: "I go to work. (Eu vou trabalhar)",
                    note: "Mesma forma do infinitivo"
                },
                {
                    rule: "CONJUGADO com He/She/It: goes, comes, makes, takes...",
                    example: "She goes to school. (Ela vai para a escola)",
                    note: "Adicionar -s/-es"
                },
                {
                    rule: "VERBO + TO para acoes futuras",
                    example: "I'm going to travel next month. (Eu vou viajar mes que vem)",
                    note: "Planejamento futuro"
                }
            ],
            sentences: [
                { english: "I want to eat pizza.", portuguese: "Eu quero comer pizza.", structure: "I + want + to + eat + pizza" },
                { english: "She needs to study.", portuguese: "Ela precisa estudar.", structure: "She + needs + to + study" },
                { english: "We like to play soccer.", portuguese: "Nos gostamos de jogar futebol.", structure: "We + like + to + play + soccer" },
                { english: "He goes to work at 8 AM.", portuguese: "Ele vai trabalhar as 8h.", structure: "He + goes + to + work + at + 8 AM" },
                { english: "They don't want to leave.", portuguese: "Eles nao querem sair.", structure: "They + don't + want + to + leave" },
                { english: "Does she like to cook?", portuguese: "Ela gosta de cozinhar?", structure: "Does + she + like + to + cook?" }
            ]
        },

        conversations: [
            {
                title: "Rotina Diaria",
                context: "Voce esta contando sua rotina para um amigo.",
                lines: [
                    { speaker: "A", english: "What time do you wake up?", portuguese: "Que horas voce acorda?" },
                    { speaker: "B", english: "I wake up at 6:30 AM.", portuguese: "Eu acordo as 6:30 da manha." },
                    { speaker: "A", english: "What do you do in the morning?", portuguese: "O que voce faz de manha?" },
                    { speaker: "B", english: "I take a shower and eat breakfast.", portuguese: "Eu tomo banho e tomo cafe da manha." },
                    { speaker: "A", english: "What time do you start work?", portuguese: "Que horas voce comeca a trabalhar?" },
                    { speaker: "B", english: "I start work at 8:30 AM.", portuguese: "Eu comeco a trabalhar as 8:30." }
                ]
            }
        ],

        phrases: [
            {
                expected: "I go to work at 8 AM.",
                translation: "Eu vou trabalhar as 8h.",
                response: "That's a good schedule!",
                responseTranslation: "Esse e um bom horario!",
                tips: ["'Go' = ir", "'At' = em (hora)"]
            },
            {
                expected: "I need to study English.",
                translation: "Eu preciso estudar ingles.",
                response: "Practice every day and you'll improve!",
                responseTranslation: "Pratique todo dia e voce vai melhorar!",
                tips: ["'Need' = precisar", "'Study' = estudar"]
            },
            {
                expected: "She doesn't like to wake up early.",
                translation: "Ela nao gosta de acordar cedo.",
                response: "Me neither! Mornings are hard.",
                responseTranslation: "Eu tambem nao! Manhas sao dificeis.",
                tips: ["'Doesn't' = nao (He/She/It)", "'Early' = cedo"]
            },
            {
                expected: "We want to travel next year.",
                translation: "Nos queremos viajar ano que vem.",
                response: "Where do you want to go?",
                responseTranslation: "Onde voces querem ir?",
                tips: ["'Want' = querer", "'Travel' = viajar"]
            },
            {
                expected: "He takes the bus to work.",
                translation: "Ele pega o onibus para trabalhar.",
                response: "The bus is cheap and fast.",
                responseTranslation: "O onibus e barato e rapido.",
                tips: ["'Takes' = pega (com He)", "'Bus' = onibus"]
            }
        ]
    },

    11: {
        title: "Present Continuous",
        description: "Aprenda a falar do que esta acontecendo agora",
        level: "Intermediario",
        duration: "25 min",

        vocabulary: [
            { word: "Working", translation: "Trabalhando", pronunciation: "UER-king", example: "I am working right now." },
            { word: "Eating", translation: "Comendo", pronunciation: "II-ting", example: "She is eating lunch." },
            { word: "Drinking", translation: "Bebendo", pronunciation: "DRINK-ing", example: "He is drinking coffee." },
            { word: "Studying", translation: "Estudando", pronunciation: "STA-di-ing", example: "We are studying English." },
            { word: "Playing", translation: "Jogando", pronunciation: "PLEI-ing", example: "The kids are playing outside." },
            { word: "Reading", translation: "Lendo", pronunciation: "RII-ding", example: "She is reading a book." },
            { word: "Writing", translation: "Escrevendo", pronunciation: "RAI-ting", example: "I am writing an email." },
            { word: "Listening", translation: "Ouvindo/Escutando", pronunciation: "LIS-sen-ing", example: "I am listening to music." },
            { word: "Watching", translation: "Assistindo", pronunciation: "UOTCH-ing", example: "He is watching TV." },
            { word: "Cooking", translation: "Cozinhando", pronunciation: "KUK-ing", example: "She is cooking dinner." },
            { word: "Sleeping", translation: "Dormindo", pronunciation: "SLI-ping", example: "The baby is sleeping." },
            { word: "Exercising", translation: "Exercitando", pronunciation: "EK-ser-sai-zing", example: "I am exercising at the gym." },
            { word: "Running", translation: "Correndo", pronunciation: "RAN-ing", example: "He is running in the park." },
            { word: "Walking", translation: "Andando", pronunciation: "UOK-ing", example: "They are walking to school." },
            { word: "Talking", translation: "Conversando", pronunciation: "TOK-ing", example: "She is talking on the phone." },
            { word: "Singing", translation: "Cantando", pronunciation: "SING-ing", example: "He is singing a song." },
            { word: "Dancing", translation: "Dançando", pronunciation: "DAN-sing", example: "They are dancing at the party." },
            { word: "Cleaning", translation: "Limpando", pronunciation: "KLI-ning", example: "I am cleaning the house." },
            { word: "Shopping", translation: "Comprando", pronunciation: "SHOP-ing", example: "She is shopping at the mall." },
            { word: "Driving", translation: "Dirigindo", pronunciation: "DRAI-ving", example: "He is driving to work." },
            { word: "Waiting", translation: "Esperando", pronunciation: "UEI-ting", example: "I am waiting for the bus." },
            { word: "Thinking", translation: "Pensando", pronunciation: "SINK-ing", example: "I am thinking about you." },
            { word: "Talking", translation: "Falando", pronunciation: "TOK-ing", example: "Who are you talking to?" },
            { word: "Smiling", translation: "Sorrindo", pronunciation: "SMI-ling", example: "She is smiling." },
            { word: "Crying", translation: "Chorando", pronunciation: "KRAI-ing", example: "The baby is crying." }
        ],

        grammar: {
            title: "Present Continuous (am/is/are + -ing)",
            explanation: "O Present Continuous serve para falar de acoes que estao acontecendo agora, neste momento. Usamos am/is/are + verbo-ing.",
            rules: [
                {
                    rule: "I + AM + verbo-ing",
                    example: "I am working right now. (Eu estou trabalhando agora)",
                    note: "Usar 'am' so com I"
                },
                {
                    rule: "He/She/It + IS + verbo-ing",
                    example: "She is cooking dinner. (Ela esta cozinhando o jantar)",
                    note: "Usar 'is' com He/She/It"
                },
                {
                    rule: "You/We/They + ARE + verbo-ing",
                    example: "They are playing soccer. (Eles estao jogando futebol)",
                    note: "Usar 'are' com You/We/They"
                },
                {
                    rule: "Como formar o -ing",
                    example: "work > working, make > making, run > running",
                    note: "Verbos terminados em -e: remover e adicionar -ing. Verbos curtos com vogal+consoante: duplicar a consoante."
                }
            ],
            sentences: [
                { english: "I am studying English.", portuguese: "Eu estou estudando ingles.", structure: "I + am + studying + English" },
                { english: "She is cooking dinner.", portuguese: "Ela esta cozinhando o jantar.", structure: "She + is + cooking + dinner" },
                { english: "They are playing soccer.", portuguese: "Eles estao jogando futebol.", structure: "They + are + playing + soccer" },
                { english: "He is working right now.", portuguese: "Ele esta trabalhando agora.", structure: "He + is + working + right now" },
                { english: "We are not sleeping.", portuguese: "Nos nao estamos dormindo.", structure: "We + are + not + sleeping" },
                { english: "Are you listening to me?", portuguese: "Voce esta me ouvindo?", structure: "Are + you + listening + to + me?" }
            ]
        },

        conversations: [
            {
                title: "O Que Voce Esta Fazendo?",
                context: "Voce liga para um amigo e pergunta o que ele esta fazendo.",
                lines: [
                    { speaker: "A", english: "Hi! What are you doing?", portuguese: "Oii! O que voce esta fazendo?" },
                    { speaker: "B", english: "I'm watching TV. And you?", portuguese: "Eu estou assistindo TV. E voce?" },
                    { speaker: "A", english: "I'm studying English.", portuguese: "Eu estou estudando ingles." },
                    { speaker: "B", english: "That's great! I'm learning too.", portuguese: "Otimo! Eu tambem estou aprendendo." },
                    { speaker: "A", english: "What are you learning?", portuguese: "O que voce esta aprendendo?" },
                    { speaker: "B", english: "I'm learning to cook. I'm making pasta.", portuguese: "Eu estou aprendendo a cozinhar. Estou fazendo massa." }
                ]
            }
        ],

        phrases: [
            {
                expected: "I am studying English right now.",
                translation: "Eu estou estudando ingles agora.",
                response: "That's wonderful! Keep practicing!",
                responseTranslation: "Maravilhoso! Continue praticando!",
                tips: ["'Am' = eu estou", "'Studying' = estudando"]
            },
            {
                expected: "She is cooking dinner.",
                translation: "Ela esta cozinhando o jantar.",
                response: "What is she making?",
                responseTranslation: "O que ela esta fazendo?",
                tips: ["'Is' = ela esta", "'Cooking' = cozinhando"]
            },
            {
                expected: "They are playing soccer.",
                translation: "Eles estao jogando futebol.",
                response: "Soccer is a great sport!",
                responseTranslation: "Futebol e um otimo esporte!",
                tips: ["'Are' = eles estao", "'Playing' = jogando"]
            },
            {
                expected: "I'm not sleeping now.",
                translation: "Eu nao estou dormindo agora.",
                response: "Why not? Are you tired?",
                responseTranslation: "Por que nao? Voce esta cansado?",
                tips: ["'Not' = nao", "'Sleeping' = dormindo"]
            },
            {
                expected: "Are you listening to me?",
                translation: "Voce esta me ouvindo?",
                response: "Yes, I'm listening. What did you say?",
                responseTranslation: "Sim, estou ouvindo. O que voce disse?",
                tips: ["'Are you' = voce esta", "'Listening' = ouvindo"]
            }
        ]
    },

    12: {
        title: "Perguntas e Respostas",
        description: "Aprenda a fazer perguntas com Do, Does, What, Where, When",
        level: "Intermediario",
        duration: "25 min",

        vocabulary: [
            { word: "What", translation: "O que", pronunciation: "UOT", example: "What is your name?" },
            { word: "Where", translation: "Onde", pronunciation: "UER", example: "Where do you live?" },
            { word: "When", translation: "Quando", pronunciation: "UEN", example: "When is your birthday?" },
            { word: "Why", translation: "Por que", pronunciation: "UAI", example: "Why are you sad?" },
            { word: "Who", translation: "Quem", pronunciation: "UU", example: "Who is that?" },
            { word: "How", translation: "Como", pronunciation: "HAU", example: "How are you?" },
            { word: "Which", translation: "Qual", pronunciation: "UITCH", example: "Which one do you want?" },
            { word: "How much", translation: "Quanto (preco)", pronunciation: "HAU MARCH", example: "How much is this?" },
            { word: "How many", translation: "Quantos (quantidade)", pronunciation: "HAU ME-nee", example: "How many children do you have?" },
            { word: "How old", translation: "Quantos anos", pronunciation: "HAU OULD", example: "How old are you?" },
            { word: "Always", translation: "Sempre", pronunciation: "AAL-ueis", example: "I always wake up early." },
            { word: "Usually", translation: "Geralmente", pronunciation: "IUSU-ali", example: "I usually eat breakfast at 7 AM." },
            { word: "Sometimes", translation: "As vezes", pronunciation: "SOM-taims", example: "I sometimes go to the gym." },
            { word: "Often", translation: "Frequentemente", pronunciation: "OFEN", example: "I often read books." },
            { word: "Never", translation: "Nunca", pronunciation: "NE-ver", example: "I never eat meat." },
            { word: "Rarely", translation: "Raramente", pronunciation: "RER-li", example: "I rarely watch TV." },
            { word: "Already", translation: "Ja", pronunciation: "AAL-REI-di", example: "I already ate." },
            { word: "Yet", translation: "Ainda (nao)", pronunciation: "IET", example: "I haven't finished yet." },
            { word: "Still", translation: "Ainda", pronunciation: "STIL", example: "I'm still studying." },
            { word: "Just", translation: "Acabou de", pronunciation: "JAST", example: "I just arrived." },
            { word: "Because", translation: "Porque", pronunciation: "bi-KOS", example: "I'm happy because it's sunny." },
            { word: "So", translation: "Entao", pronunciation: "SOU", example: "I'm tired, so I'll sleep." },
            { word: "But", translation: "Mas", pronunciation: "BAT", example: "I want to go, but I'm busy." },
            { word: "And", translation: "E", pronunciation: "AND", example: "I like coffee and tea." },
            { word: "Or", translation: "Ou", pronunciation: "OR", example: "Coffee or tea?" }
        ],

        grammar: {
            title: "Como Fazer Perguntas em Ingles",
            explanation: "Em ingles, as perguntas seguem uma ordem especifica. Aprenda a usar Do/Does para perguntas Sim/Nao e What/Where/When para perguntas abertas.",
            rules: [
                {
                    rule: "DO + I/you/we/they + VERBO?",
                    example: "Do you like coffee? (Voce gosta de cafe?)",
                    note: "Pergunta Sim/Nao com I/you/we/they"
                },
                {
                    rule: "DOES + he/she/it + VERBO?",
                    example: "Does he work here? (Ele trabalha aqui?)",
                    note: "Pergunta Sim/Nao com He/She/It"
                },
                {
                    rule: "WHAT + do/does + sujeito + VERBO?",
                    example: "What do you do? (O que voce faz?)",
                    note: "Pergunta sobre COISA"
                },
                {
                    rule: "WHERE + do/does + sujeito + VERBO?",
                    example: "Where do you live? (Onde voce mora?)",
                    note: "Pergunta sobre LUGAR"
                },
                {
                    rule: "WHEN + do/does + sujeito + VERBO?",
                    example: "When do you wake up? (Quando voce acorda?)",
                    note: "Pergunta sobre TEMPO"
                }
            ],
            sentences: [
                { english: "What is your name?", portuguese: "Qual e o seu nome?", structure: "What + is + your + name?" },
                { english: "Where do you live?", portuguese: "Onde voce mora?", structure: "Where + do + you + live?" },
                { english: "When is your birthday?", portuguese: "Quando e seu aniversario?", structure: "When + is + your + birthday?" },
                { english: "Why are you late?", portuguese: "Por que voce esta atrasado?", structure: "Why + are + you + late?" },
                { english: "How do you spell your name?", portuguese: "Como voce soletra seu nome?", structure: "How + do + you + spell + your + name?" },
                { english: "How much does this cost?", portuguese: "Quanto isso custa?", structure: "How much + does + this + cost?" }
            ]
        },

        conversations: [
            {
                title: "Entrevista Pessoal",
                context: "Voce esta sendo entrevistado para um emprego.",
                lines: [
                    { speaker: "A", english: "What is your name?", portuguese: "Qual e o seu nome?" },
                    { speaker: "B", english: "My name is Carlos Silva.", portuguese: "Meu nome e Carlos Silva." },
                    { speaker: "A", english: "Where are you from?", portuguese: "De onde voce e?" },
                    { speaker: "B", english: "I'm from São Paulo, Brazil.", portuguese: "Eu sou de Sao Paulo, Brasil." },
                    { speaker: "A", english: "What do you do for a living?", portuguese: "O que voce faz da vida?" },
                    { speaker: "B", english: "I work as a software developer.", portuguese: "Eu trabalho como desenvolvedor de software." }
                ]
            }
        ],

        phrases: [
            {
                expected: "What is your name?",
                translation: "Qual e o seu nome?",
                response: "My name is Sarah. Nice to meet you!",
                responseTranslation: "Meu nome e Sarah. Prazer em te conhecer!",
                tips: ["'What' = o que", "'Name' = nome"]
            },
            {
                expected: "Where do you live?",
                translation: "Onde voce mora?",
                response: "I live in New York City.",
                responseTranslation: "Eu moro em Nova York.",
                tips: ["'Where' = onde", "'Live' = morar"]
            },
            {
                expected: "How much does this cost?",
                translation: "Quanto isso custa?",
                response: "This costs twenty dollars.",
                responseTranslation: "Isso custa vinte dolares.",
                tips: ["'How much' = quanto", "'Cost' = custar"]
            },
            {
                expected: "Why are you learning English?",
                translation: "Por que voce esta aprendendo ingles?",
                response: "Because I want to travel.",
                responseTranslation: "Porque eu quero viajar.",
                tips: ["'Why' = por que", "'Learning' = aprendendo"]
            },
            {
                expected: "When do you start work?",
                translation: "Quando voce comeca a trabalhar?",
                response: "I start work at 9 AM.",
                responseTranslation: "Eu comeco a trabalhar as 9h.",
                tips: ["'When' = quando", "'Start' = comecar"]
            }
        ]
    },

    13: {
        title: "Lugares e Locucoes",
        description: "Aprenda a falar sobre lugares e onde voce esta",
        level: "Intermediario",
        duration: "30 min",

        vocabulary: [
            { word: "Home", translation: "Casa", pronunciation: "HOUM", example: "I am at home." },
            { word: "Work", translation: "Trabalho", pronunciation: "UERK", example: "I am at work." },
            { word: "School", translation: "Escola", pronunciation: "SKUL", example: "The children are at school." },
            { word: "Store", translation: "Loja", pronunciation: "STOR", example: "I'm at the store." },
            { word: "Hospital", translation: "Hospital", pronunciation: "HOS-pi-tal", example: "She works at a hospital." },
            { word: "Restaurant", translation: "Restaurante", pronunciation: "RES-to-rint", example: "We are at a restaurant." },
            { word: "Bank", translation: "Banco", pronunciation: "BANK", example: "I need to go to the bank." },
            { word: "Park", translation: "Parque", pronunciation: "PARK", example: "The kids are playing in the park." },
            { word: "Gym", translation: "Academia", pronunciation: "JIM", example: "I exercise at the gym." },
            { word: "Office", translation: "Escritorio", pronunciation: "OF-iss", example: "I work in an office." },
            { word: "Library", translation: "Biblioteca", pronunciation: "LAI-bra-ri", example: "I study at the library." },
            { word: "Market", translation: "Mercado", pronunciation: "MAR-ket", example: "I buy food at the market." },
            { word: "Pharmacy", translation: "Farmacia", pronunciation: "FAR-ma-si", example: "I need to go to the pharmacy." },
            { word: "Church", translation: "Igreja", pronunciation: "CHERCH", example: "She goes to church on Sunday." },
            { word: "Station", translation: "Estacao", pronunciation: "STEI-shon", example: "The train station is near here." },
            { word: "Airport", translation: "Aeroporto", pronunciation: "E-ro-port", example: "I need to go to the airport." },
            { word: "Hotel", translation: "Hotel", pronunciation: "hou-TEL", example: "We are staying at a hotel." },
            { word: "Beach", translation: "Praia", pronunciation: "BIICH", example: "I love the beach." },
            { word: "Mall", translation: "Shopping", pronunciation: "MAL", example: "She is at the mall." },
            { word: "Cinema", translation: "Cinema", pronunciation: "SI-ne-ma", example: "We are at the cinema." },
            { word: "At", translation: "Em/No/N", pronunciation: "AT", example: "I am at home." },
            { word: "In", translation: "Em/Dentro", pronunciation: "IN", example: "I am in the office." },
            { word: "On", translation: "Em/Sobre", pronunciation: "ON", example: "The book is on the table." },
            { word: "Near", translation: "Perto", pronunciation: "NIIR", example: "The bank is near my house." },
            { word: "Next to", translation: "Ao lado de", pronunciation: "NEKST tu", example: "The pharmacy is next to the bank." },
            { word: "Behind", translation: "Atras", pronunciation: "bi-HAIND", example: "The park is behind the school." },
            { word: "In front of", translation: "Em frente a", pronunciation: "IN frunt of", example: "I am in front of the store." },
            { word: "Between", translation: "Entre", pronunciation: "bi-TUUN", example: "The bank is between the store and the park." },
            { word: "Across from", translation: "Do outro lado", pronunciation: "a-KROS from", example: "The restaurant is across from the bank." },
            { word: "Far", translation: "Longe", pronunciation: "FAR", example: "The airport is far from here." }
        ],

        grammar: {
            title: "Preposicoes de Lugar",
            explanation: "As preposicoes de lugar indicam onde algo ou alguem esta. Aprenda a usar at, in, on, near, next to, behind, in front of, between e across from.",
            rules: [
                {
                    rule: "AT + lugar (ponto especifico)",
                    example: "I am at home. (Eu estou em casa)",
                    note: "Usar 'at' para pontos especificos: at home, at work, at school"
                },
                {
                    rule: "IN + lugar (dentro de)",
                    example: "I am in the office. (Eu estou dentro do escritorio)",
                    note: "Usar 'in' para espacos fechados: in the room, in the car"
                },
                {
                    rule: "ON + superficie",
                    example: "The book is on the table. (O livro esta na mesa)",
                    note: "Usar 'on' para superficies: on the table, on the wall"
                },
                {
                    rule: "NEAR / NEXT TO / BEHIND / IN FRONT OF",
                    example: "The bank is next to the park. (O banco e ao lado do parque)",
                    note: "Para posicoes relativas entre lugares"
                }
            ],
            sentences: [
                { english: "I am at home.", portuguese: "Eu estou em casa.", structure: "I + am + at + home" },
                { english: "She works in an office.", portuguese: "Ela trabalha em um escritorio.", structure: "She + works + in + an + office" },
                { english: "The book is on the table.", portuguese: "O livro esta na mesa.", structure: "The + book + is + on + the + table" },
                { english: "The bank is near my house.", portuguese: "O banco e perto da minha casa.", structure: "The + bank + is + near + my + house" },
                { english: "The pharmacy is next to the bank.", portuguese: "A farmacia e ao lado do banco.", structure: "The + pharmacy + is + next to + the + bank" },
                { english: "I am in front of the store.", portuguese: "Eu estou em frente a loja.", structure: "I + am + in front of + the + store" }
            ]
        },

        conversations: [
            {
                title: "Pedindo Direcoes",
                context: "Voce esta em uma cidade nova e precisa de ajuda para encontrar lugares.",
                lines: [
                    { speaker: "A", english: "Excuse me, where is the bank?", portuguese: "Com licenca, onde e o banco?" },
                    { speaker: "B", english: "The bank is on Main Street.", portuguese: "O banco e na Rua Main." },
                    { speaker: "A", english: "Is it near the park?", portuguese: "E perto do parque?" },
                    { speaker: "B", english: "Yes, it's next to the park.", portuguese: "Sim, e ao lado do parque." },
                    { speaker: "A", english: "Thank you very much!", portuguese: "Muito obrigado!" },
                    { speaker: "B", english: "You're welcome! Have a nice day!", portuguese: "De nada! Tenha um otimo dia!" }
                ]
            }
        ],

        phrases: [
            {
                expected: "I am at home right now.",
                translation: "Eu estou em casa agora.",
                response: "Nice! Are you relaxing?",
                responseTranslation: "Legal! Voce esta relaxando?",
                tips: ["'At' = em (lugar)", "'Home' = casa"]
            },
            {
                expected: "Where is the nearest pharmacy?",
                translation: "Onde e a farmacia mais proxima?",
                response: "It's on Oak Street, next to the bank.",
                responseTranslation: "E na Rua Oak, ao lado do banco.",
                tips: ["'Where' = onde", "'Pharmacy' = farmacia"]
            },
            {
                expected: "The restaurant is across from the park.",
                translation: "O restaurante e do outro lado do parque.",
                response: "Oh, I know that restaurant! It's great!",
                responseTranslation: "Ah, eu conheco aquele restaurante! E otimo!",
                tips: ["'Across from' = do outro lado", "'Restaurant' = restaurante"]
            },
            {
                expected: "I work in an office downtown.",
                translation: "Eu trabalho em um escritorio no centro.",
                response: "That's convenient! Is it near the station?",
                responseTranslation: "Isso e conveniente! E perto da estacao?",
                tips: ["'In' = dentro de", "'Office' = escritorio"]
            },
            {
                expected: "The school is between the bank and the store.",
                translation: "A escola e entre o banco e a loja.",
                response: "I see. Thank you for the directions!",
                responseTranslation: "Entendi. Obrigado pelas direcoes!",
                tips: ["'Between' = entre", "'School' = escola"]
            }
        ]
    },

    14: {
        title: "Conversacao Combinada",
        description: "Use tudo junto: Present Simple, Continuous, perguntas e lugares",
        level: "Intermediario",
        duration: "30 min",

        vocabulary: [
            { word: "And", translation: "E", pronunciation: "AND", example: "I like coffee and tea." },
            { word: "But", translation: "Mas", pronunciation: "BAT", example: "I want to go, but I'm busy." },
            { word: "Because", translation: "Porque", pronunciation: "bi-KOS", example: "I'm happy because it's sunny." },
            { word: "So", translation: "Entao", pronunciation: "SOU", example: "I'm tired, so I'll sleep." },
            { word: "Then", translation: "Entao/Depois", pronunciation: "DHEN", example: "I eat, then I work." },
            { word: "After", translation: "Depois", pronunciation: "AF-ter", example: "After work, I go home." },
            { word: "Before", translation: "Antes", pronunciation: "bi-FORE", example: "Before dinner, I wash my hands." },
            { word: "While", translation: "Enquanto", pronunciation: "UAIL", example: "While I cook, I listen to music." },
            { word: "Also", translation: "Tambem", pronunciation: "AAL-sou", example: "I also speak Spanish." },
            { word: "Too", translation: "Tambem", pronunciation: "TUU", example: "Me too!" },
            { word: "Together", translation: "Juntos", pronunciation: "tu-GE-dher", example: "We work together." },
            { word: "Alone", translation: "Sozinho", pronunciation: "a-LOUN", example: "I am alone at home." },
            { word: "Every", translation: "Todo/Cada", pronunciation: "E-ve-ree", example: "I exercise every day." },
            { word: "Both", translation: "Ambos", pronunciation: "BOUTH", example: "Both students are studying." },
            { word: "Each", translation: "Cada", pronunciation: "IICH", example: "Each student has a book." },
            { word: "Another", translation: "Outro", pronunciation: "a-NA-dher", example: "I want another coffee." },
            { word: "Other", translation: "Outro/Outra", pronunciation: "A-dher", example: "The other students are here." },
            { word: "Same", translation: "Mesmo", pronunciation: "SEIM", example: "We have the same age." },
            { word: "Different", translation: "Diferente", pronunciation: "DI-fe-rent", example: "We have different jobs." },
            { word: "First", translation: "Primeiro", pronunciation: "FERST", example: "First, I wake up." },
            { word: "Last", translation: "Ultimo", pronunciation: "LAST", example: "Last, I go to bed." },
            { word: "Next", translation: "Proximo", pronunciation: "NEKST", example: "Next, I take a shower." },
            { word: "Now", translation: "Agora", pronunciation: "NAU", example: "I am studying now." },
            { word: "Later", translation: "Mais tarde", pronunciation: "LEI-ter", example: "I'll call you later." },
            { word: "Soon", translation: "Em breve", pronunciation: "SUUN", example: "See you soon!" },
            { word: "Already", translation: "Ja", pronunciation: "AAL-REI-di", example: "I already ate." },
            { word: "Yet", translation: "Ainda (nao)", pronunciation: "IET", example: "I haven't finished yet." },
            { word: "Always", translation: "Sempre", pronunciation: "AAL-ueis", example: "I always wake up early." },
            { word: "Sometimes", translation: "As vezes", pronunciation: "SOM-taims", example: "I sometimes go to the gym." },
            { word: "Never", translation: "Nunca", pronunciation: "NE-ver", example: "I never eat meat." }
        ],

        grammar: {
            title: "Juntando Tudo em Frases Maiores",
            explanation: "Agora voce pode combinar Present Simple, Present Continuous, perguntas e locucoes para criar frases mais completas e naturais.",
            rules: [
                {
                    rule: "PRESENTE SIMPLES + PRESENTE CONTINUOUS",
                    example: "I usually work, but today I'm working from home. (Eu geralmente trabalho, mas hoje estou trabalhando de casa)",
                    note: "Rotina (simple) + Agora (continuous)"
                },
                {
                    rule: "PERGUNTAS + RESPOSTAS COMPLETAS",
                    example: "Where do you work? I work at a bank in the center. (Onde voce trabalha? Eu trabalho em um banco no centro.)",
                    note: "Pergunta + Resposta com detalhes"
                },
                {
                    rule: "CONNECTORES: and, but, because, so, then",
                    example: "I wake up, then I take a shower, and I go to work. (Eu acordo, depois tomo banho, e vou trabalhar)",
                    note: "Juntar varias acoes em sequencia"
                },
                {
                    rule: "LUGARES + ACOES",
                    example: "I am at home because I work from home. (Eu estou em casa porque trabalho de casa)",
                    note: "Combinar lugar + acao + motivo"
                }
            ],
            sentences: [
                { english: "I usually wake up at 7 AM, but today I woke up at 6 AM.", portuguese: "Eu geralmente acordo as 7h, mas hoje acordei as 6h.", structure: "I + usually + wake up + at + time, but + today + I + woke up + at + time" },
                { english: "She works at a hospital and she loves her job.", portuguese: "Ela trabalha em um hospital e ama seu emprego.", structure: "She + works + at + hospital + and + she + loves + her + job" },
                { english: "Where do you live? I live in São Paulo, near the beach.", portuguese: "Onde voce mora? Eu moro em Sao Paulo, perto da praia.", structure: "Where + do + you + live? + I + live + in + place, + near + place" },
                { english: "I'm studying English because I want to travel.", portuguese: "Eu estou estudando ingles porque quero viajar.", structure: "I'm + studying + English + because + I + want + to + travel" },
                { english: "We are at the restaurant and we are ordering food.", portuguese: "Nos estamos no restaurante e estamos pedindo comida.", structure: "We + are + at + place + and + we + are + ordering + food" },
                { english: "He doesn't like coffee, but he drinks it every morning.", portuguese: "Ele nao gosta de cafe, mas ele bebe todo dia de manha.", structure: "He + doesn't + like + coffee, + but + he + drinks + it + every + morning" }
            ]
        },

        conversations: [
            {
                title: "Conversa Completa",
                context: "Voce esta em uma cafeteria com um amigo, conversando sobre a vida.",
                lines: [
                    { speaker: "A", english: "Hi! How are you?", portuguese: "Oii! Como voce esta?" },
                    { speaker: "B", english: "I'm good, thanks! I'm drinking coffee.", portuguese: "Eu estou bem, obrigado! Estou tomando cafe." },
                    { speaker: "A", english: "Nice! I usually drink coffee in the morning.", portuguese: "Legal! Eu geralmente tomo cafe de manha." },
                    { speaker: "B", english: "Me too. What do you do for a living?", portuguese: "Eu tambem. O que voce faz da vida?" },
                    { speaker: "A", english: "I work at a bank. And you?", portuguese: "Eu trabalho em um banco. E voce?" },
                    { speaker: "B", english: "I'm a teacher. I work at a school near here.", portuguese: "Eu sou professor. Eu trabalho em uma escola perto daqui." }
                ]
            }
        ],

        phrases: [
            {
                expected: "I usually wake up at 7 AM.",
                translation: "Eu geralmente acordo as 7h.",
                response: "That's early! I wake up at 8 AM.",
                responseTranslation: "Isso e cedo! Eu acordo as 8h.",
                tips: ["'Usually' = geralmente", "'Wake up' = acordar"]
            },
            {
                expected: "I am at home because I work from home.",
                translation: "Eu estou em casa porque trabalho de casa.",
                response: "Working from home is great!",
                responseTranslation: "Trabalhar de casa e otimo!",
                tips: ["'At home' = em casa", "'Because' = porque"]
            },
            {
                expected: "She works at a hospital and she loves her job.",
                translation: "Ela trabalha em um hospital e ama seu emprego.",
                response: "That's wonderful! She must be a great doctor.",
                responseTranslation: "Maravilhoso! Ela deve ser uma otima medica.",
                tips: ["'Works' = trabalha", "'Loves' = ama"]
            },
            {
                expected: "Where do you work? I work at a bank.",
                translation: "Onde voce trabalha? Eu trabalho em um banco.",
                response: "A bank? That's interesting work!",
                responseTranslation: "Um banco? Isso e trabalho interessante!",
                tips: ["'Where' = onde", "'Work' = trabalhar"]
            },
            {
                expected: "I'm studying English because I want to travel.",
                translation: "Eu estou estudando ingles porque quero viajar.",
                response: "Traveling is the best way to learn!",
                responseTranslation: "Viajar e a melhor forma de aprender!",
                tips: ["'Studying' = estudando", "'Because' = porque"]
            }
        ]
    }
};

function getLesson(lessonNumber) {
    return lessons[lessonNumber] || lessons[1];
}

function getPhrase(lessonNumber, phraseIndex) {
    const lesson = getLesson(lessonNumber);
    return lesson.phrases[phraseIndex] || null;
}

function getTotalPhrases(lessonNumber) {
    const lesson = getLesson(lessonNumber);
    return lesson.phrases.length;
}

function getVocabulary(lessonNumber) {
    const lesson = getLesson(lessonNumber);
    return lesson.vocabulary || [];
}

function getGrammar(lessonNumber) {
    const lesson = getLesson(lessonNumber);
    return lesson.grammar || null;
}

function getConversations(lessonNumber) {
    const lesson = getLesson(lessonNumber);
    return lesson.conversations || [];
}

function getNumbers(lessonNumber) {
    const lesson = getLesson(lessonNumber);
    return lesson.numbers || [];
}