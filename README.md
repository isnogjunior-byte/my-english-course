# English Teacher Virtual

Professor virtual de inglês com interação por voz. Aprenda inglês praticando a pronúncia com um professor virtual que ouve e corrige sua fala.

## Como Usar

### Pré-requisitos
- Navegador **Microsoft Edge** ou **Google Chrome**
- Microfone funcionando no computador
- Conexão com internet (para primeira carga)

### Passo a Passo

1. **Abrir o projeto**
   - Navegue até a pasta `english-teacher/`
   - Clique duas vezes em `index.html`
   - O navegador abrirá a aplicação

2. **Permitir acesso ao microfone**
   - Quando solicitado, clique em "Permitir"
   - Isso é necessário para o professor ouvir sua fala

3. **Escolher a lição**
   - Use o seletor no topo para escolher a lição
   - Comece pela "Lição 1: Apresentações"

4. **Iniciar a aula**
   - Clique no botão "Iniciar Aula"
   - O professor fará uma pergunta em inglês

5. **Responder**
   - Clique no botão "Falar" (microfone)
   - Fale a resposta em inglês
   - O professor analisará sua pronúncia

6. **Receber feedback**
   - Veja a precisão da sua fala
   - Ouça o feedback do professor
   - Clique "Repetir" para ouvir a frase novamente

7. **Avançar**
   - Clique "Próxima" para ir para a próxima frase
   - Complete todas as frases da lição

## Funcionalidades

- **5 Lições**: Apresentações, Família, Comida, Rotina, Trabalho
- **Correção de Pronúncia**: Compara sua fala com a frase esperada
- **Feedback Visual**: Mostra palavras corretas e erradas
- **Feedback Sonoro**: Professor fala em inglês
- **Progresso**: Acompanhe quantas frases completou

## Dicas para MelhorarResultado

1. **Use um bom microfone**: Evite microfones embutidos de baixa qualidade
2. **Fale claramente**: Articule bem as palavras
3. **Ambiente silencioso**: Evite ruídos de fundo
4. **Pratique bastante**: Quanto mais练习, melhor sua pronúncia
5. **Comece devagar**: Não tenha pressa, fale devagar no início

## Estrutura do Projeto

```
english-teacher/
├── index.html          ← Página principal
├── css/
│   └── style.css       ← Estilos visuais
├── js/
│   ├── app.js          ← Lógica principal
│   ├── speech.js       ← Reconhecimento de voz
│   └── lessons.js      ← Conteúdo das aulas
└── README.md           ← Este arquivo
```

## Solução de Problemas

### "Reconhecimento de voz não suportado"
- Use Microsoft Edge ou Google Chrome
- Verifique se o microfone está conectado

### "Permissão negada para microfone"
- Clique no ícone de cadeado na barra de endereços
- Permita acesso ao microfone
- Recarregue a página

### "Não estou entendendo sua fala"
- Fale mais alto e claro
- Aproxime-se do microfone
- Reduza ruídos de fundo

## Tecnologias Utilizadas

- **HTML5**: Estrutura da página
- **CSS3**: Estilos visuais
- **JavaScript**: Lógica do programa
- **Web Speech API**: Reconhecimento e síntese de voz (gratuito, embutido no navegador)

## Licença

Este projeto é gratuito e de código aberto. Use como quiser!