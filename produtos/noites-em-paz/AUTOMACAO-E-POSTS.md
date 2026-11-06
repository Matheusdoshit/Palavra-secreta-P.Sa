# Noites em Paz: automação de comentário→DM e posts prontos

## 1. Automação "Comenta NOITE"
Para colar no Buzzfy (precisa do plano **MAX**), no ManyChat ou em ferramenta parecida.

| Campo | Texto |
|---|---|
| Palavras-chave | `NOITE`, `noite`, `Noite` (modo: *contém*) |
| Vale para | Todos os posts e reels |
| Respostas públicas (sorteia uma) | "Te mandei no direct 🌙" · "Chegou aí no direct, olha lá 🙏" · "Enviado! Faz hoje antes de dormir 🌙" |
| 1ª DM | "Oi! Aqui está a Noite 1 completa: *A conversa que não acabou*. Faz hoje, leva 5 minutos. Separa um papel e uma caneta antes de deitar 🌙" |
| Botão da 1ª DM | "Quero a Noite 1" |
| DM com o link | "Aqui está 👇 Se fizer sentido para você, as 7 noites com áudios guiados, os papéis de parede e o bônus das 3h estão por R$ 12,90." |
| Link | *A amostra grátis (veja abaixo) ou direto `noites.html?h=3h&utm_source=instagram&utm_medium=dm`* |
| Exigir que siga o perfil | **Sim.** Cada pessoa que comenta vira seguidora, e isso também ajuda no alcance |

**Lembrete manual após 24 h** (a automação não faz isso, mande pela caixa de entrada):
> "E aí, conseguiu fazer a Noite 1? O que você escreveu no papel? (Não precisa me contar o conteúdo, só se ajudou 🙏)"

Quem responder vira conversa, e conversa vira venda (e depoimento real, com autorização).

**Amostra grátis:** `entrega/Amostra-gratis-Noite-1.pdf` (capa + abertura + prática da Noite 1).
Hospede no Google Drive ou no próprio site e use esse link na DM. Para gerar de novo depois de editar o livro:
```
pdfseparate -f 1 -l 4 Noites-em-Paz.pdf s-%d.pdf && pdfunite s-1.pdf s-3.pdf s-4.pdf Amostra-gratis-Noite-1.pdf
```

**No TikTok** (não tem automação): fixe o comentário *"A Noite 1 completa está no link do perfil 🌙"* e use `noites.html?h=3h&utm_source=tiktok` na bio.

---

## 2. Os 4 vídeos orgânicos: legenda e áudio
Arquivos em `videos/out/org-*.mp4`. **Grave a sua voz por cima** lendo o que está na tela, porque a fala entra na busca. Se não quiser gravar, use uma música calma que esteja em alta.

### org-01: Acorda às 3h (11 s, loop)
- **Fala:** "Acorda às 3h sem motivo? Seu corpo descansou. Sua mente, não. Faz isso antes de deitar: escreve o pensamento que não para, dobra o papel e respira 6 vezes com uma frase. Comenta NOITE que eu te mando as 7 frases… e para de acordar às 3h."
- **Legenda:**
  ```
  Acordar às 3 da manhã sem motivo tem explicação 🌙
  O corpo descansa, mas a mente não teve onde guardar o dia.
  💬 Comenta NOITE que eu te mando as 7 frases para respirar
  #ansiedadeanoite #insonia #oraçãoparadormir #saudemental #fé
  ```
- **Link:** `noites.html?h=3h`

### org-02: Respira comigo (15 s)
- **Fala:** só a respiração, com voz bem lenta: "Em paz me deito…" (4 s) "…e durmo em segurança." (6 s)
- **Legenda:**
  ```
  Faz comigo antes de dormir. Inspira 4, expira 6 🌙
  "Em paz me deito e durmo em segurança" (Salmo 4:8)
  🔖 Salva para fazer hoje à noite
  💬 Comenta NOITE que eu te mando as outras 6
  #respiração #comoacalmaramente #versiculoparaansiedade #salmo #dormirbem
  ```
- **Por que funciona:** a pessoa assiste até o fim para completar a respiração, salva para usar de novo e reassiste. São os três sinais mais fortes para o algoritmo.

### org-03: Teste de sobrecarga (10 s)
- **Legenda:**
  ```
  Cansaço mental tem sintomas, e quase ninguém percebe o 3º.
  Quantos você marcou? Comenta o número 👇
  #cansaçomental #ansiedade #sobrecarga #saudemental #autocuidado
  ```
- **Regra de resposta:** responda **todo** comentário com número. Para "2" ou "3": *"Faz o exercício da Noite 1 hoje: comenta NOITE que eu te mando 🌙"* (isso dispara a automação também).

### org-04: Papel dobrado (11 s)
- **Legenda:**
  ```
  Como parar de pensar demais na hora de dormir: o método do papel dobrado 📝
  Pensamento escrito para de girar.
  💬 Comenta NOITE que eu te mando o método completo das 7 noites
  #pensardemais #ansiedade #insonia #dicaparadormir #fé
  ```
- **Link:** `noites.html?h=conversa`

### Em que ordem postar (primeira semana)
| Dia | Manhã | Noite (21h–22h30) |
|---|---|---|
| 1 | org-03 | org-01 |
| 2 | org-04 | org-02 |
| 3 | Resposta em vídeo a um comentário | org-01 com outro gancho (veja ESTRATEGIA-ORGANICA.md) |
| 4 | org-03 | org-02 |
| 5 | org-04 | O vídeo que teve mais comentários, repostado |
