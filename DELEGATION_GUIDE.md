# Guia de Delegação de Tarefas

## Contexto

Durante a Sessão 6, gastei ~111,000 tokens, sendo que ~25,000 podiam ter sido delegados para agentes ou Gemini CLI.

Este guia estabelece critérios claros para decisões de delegação em sessões futuras.

---

## 1. QUANDO DELEGAR vs QUANDO FAZER EU (CLAUDE)

### ✅ DELEGAR para Task tool (agentes) ou Gemini CLI

- Documentação (PROGRESS.md, QUICK_START.md)
- Escrita de conteúdo extenso
- Reformatação de texto
- Geração de meta descriptions (Fase 5 SEO)
- Alt text para imagens (Fase 3)
- Tradução/revisão de textos
- Atualização de ficheiros MD baseado em resumos

### ✅ FAZER EU PRÓPRIO (Claude)

- Código JavaScript/CSS complexo
- Decisões arquiteturais
- Debugging de problemas técnicos
- Integração de sistemas
- Lógica de negócio
- Planeamento de fases

---

## 2. ANÁLISE DA SESSÃO 6

Breakdown de tokens:

- **Implementação Fase 4 (Código):** ~40,000 tokens ✅ Necessário
- **Atualizar documentação:** ~15,000 tokens ⚠️ Podia ser delegado
- **Leitura de ficheiros grandes:** ~25,000 tokens ⚠️ Podia ser otimizado
- **Escrita de documentação:** ~10,000 tokens ⚠️ Podia ser Gemini

**Total desperdiçado:** ~25,000 tokens (22% do total da sessão)

---

## 3. EXEMPLOS PRÁTICOS

### Exemplo 1 - Atualizar PROGRESS.md

```
❌ NÃO FAZER: Claude escreve 200 linhas de documentação
✅ FAZER: Task tool com resumo: "Adiciona Sessão 6 com estas stats: ..."
```

**Poupança:** ~5,000 tokens

### Exemplo 2 - Fase 5 SEO (Meta Descriptions)

```
❌ NÃO FAZER: Claude escreve 20 meta descriptions (15k tokens)
✅ FAZER: Gemini CLI escreve todas (0 tokens Claude)
```

**Poupança:** ~15,000 tokens

### Exemplo 3 - Fase 3 Imagens (Alt Text)

```
❌ NÃO FAZER: Claude descreve 80 imagens
✅ FAZER: Gemini gera alt text para todas as imagens
```

**Poupança:** ~20,000 tokens

### Exemplo 4 - Revisão de Conteúdo Extenso

```
❌ NÃO FAZER: Claude lê e reformata 10 ficheiros markdown grandes
✅ FAZER: Task tool processa cada ficheiro individualmente
```

**Poupança:** ~10,000 tokens

---

## 4. FERRAMENTAS DISPONÍVEIS

### Task tool (agente general-purpose)
**Usar para:**
- Documentação e updates de ficheiros MD
- Escrita de conteúdo estruturado
- Reformatação de texto existente
- Tarefas que requerem contexto limitado

**Exemplo:**
```
Task tool: "Atualiza PROGRESS.md adicionando Sessão 7 com:
- Fase implementada: X
- Tokens gastos: Y
- Tempo: Z horas"
```

### Gemini CLI
**Usar para:**
- Geração massiva de conteúdo repetitivo
- Meta descriptions para SEO
- Alt text para múltiplas imagens
- Tradução de grandes volumes de texto

**Exemplo:**
```bash
gemini "Gera meta descriptions para todas as páginas de espécies"
```

### Task tool (Explore agent)
**Usar para:**
- Pesquisa de código em múltiplos ficheiros
- Análise de estrutura de projeto
- Identificação de padrões no código

### Bash scripts
**Usar para:**
- Tarefas repetitivas de sistema
- Processamento batch de ficheiros
- Automação de comandos git

---

## 5. REGRAS PARA PRÓXIMAS SESSÕES

### Regra 1: Documentação Longa
**Antes de escrever documentação longa → considerar Task tool**

Se a tarefa envolve mais de 100 linhas de markdown, delegar para Task tool com instruções claras.

### Regra 2: Conteúdo Repetitivo
**Antes de gerar conteúdo repetitivo → considerar Gemini CLI**

Se preciso gerar mais de 5 itens similares (meta descriptions, alt text), usar Gemini CLI.

### Regra 3: Código Complexo
**Sempre fazer código complexo eu próprio**

Nunca delegar JavaScript, CSS complexo, ou lógica de negócio crítica.

### Regra 4: Proatividade
**Usar agentes proactivamente, não reativamente**

Identificar oportunidades de delegação no INÍCIO da sessão, não depois de gastar tokens.

### Regra 5: Leitura de Ficheiros
**Otimizar leituras de ficheiros grandes**

Antes de ler ficheiros completos, considerar:
- Ler apenas secções relevantes
- Usar grep para procurar padrões específicos
- Delegar processamento para Task tool

---

## 6. POUPANÇA ESTIMADA

### Por Sessão Típica

- **Documentação:** 15,000 tokens poupados
- **Conteúdo repetitivo:** 10,000 tokens poupados
- **Total por sessão:** ~25,000 tokens poupados (22% do total)

### Ao Longo de 10 Sessões

**Total poupado:** 250,000 tokens!

### Benefícios Adicionais

- Sessões mais rápidas
- Foco em tarefas de alto valor (código, arquitetura)
- Melhor uso das capacidades de cada ferramenta
- Redução de custos operacionais

---

## 7. GEMINI CLI + AGENTE - SUPER EFICIENTE! 🚀

**Descoberta:** Podemos usar agentes para orquestrar o Gemini CLI, poupando AINDA MAIS tokens!

### Como funciona:

```
Claude (instruções ao agente: ~500 tokens)
  ↓
Task agent (general-purpose)
  ↓ executa bash
Gemini CLI (gera conteúdo: 0 tokens Claude!)
  ↓
Task agent (reporta resultado: ~1,000 tokens)
  ↓
Claude vê resultado final
```

### Teste Real - 4 Meta Descriptions

**Resultado:**
- Agente chamou Gemini 4 vezes
- Gerou 4 meta descriptions SEO (<160 chars)
- Guardou em ficheiro
- Verificou contagem de caracteres

**Poupança:**
- Método antigo (Claude escrever): 3,000 tokens
- Método novo (Agente + Gemini): 1,000 tokens
- **Poupança: 67%!**

### Exemplos de Uso:

**Fase 5 - SEO (20 páginas):**
```bash
# Agente executa loop:
for page in especies/*.md praticas/*.md; do
  gemini -p "Meta description SEO para $page"
done

# Poupança: 4,000 tokens (67%)
```

**Fase 3 - Alt Text (80 imagens):**
```bash
# Agente processa imagens:
for img in images/*.jpg; do
  gemini -p "Alt text acessível para imagem $img"
done

# Poupança: 12,000 tokens (75%)
```

### Vantagens:

✅ Gemini é grátis/muito barato
✅ Agente orquestra tudo automaticamente
✅ Claude só dá instruções e vê resultado
✅ Poupança massiva de tokens (60-75%)
✅ Escalável para 100+ gerações

### Comando Teste:

```bash
# Verificar se Gemini funciona:
gemini -p "Olá, estás funcional?"

# Se funcionar, pode usar em agentes!
```

---

## 8. CHECKLIST ANTES DE CADA TAREFA

Antes de executar qualquer tarefa, perguntar:

- [ ] Esta tarefa envolve escrita de documentação extensa?
- [ ] Estou a gerar conteúdo repetitivo?
- [ ] Preciso de ler ficheiros muito grandes?
- [ ] Esta é uma tarefa de código complexo?
- [ ] Posso resumir instruções para um agente?

**Se SIM às 3 primeiras:** Considerar delegação
**Se SIM à 4ª:** Fazer eu próprio
**Se SIM à 5ª:** Delegar

---

## 9. CASOS DE USO FUTURO

### Fase 3 - Imagens e Multimédia

**Tarefa:** Gerar alt text para 80 imagens

**❌ Abordagem Ineficiente:**
- Claude descreve cada imagem
- ~20,000 tokens gastos

**✅ Abordagem Eficiente:**
- Gemini CLI gera alt text para todas
- ~100 tokens Claude (instruções)
- **Poupança: 19,900 tokens**

### Fase 5 - SEO Avançado

**Tarefa:** Meta descriptions para 20 páginas

**❌ Abordagem Ineficiente:**
- Claude escreve cada meta description
- ~15,000 tokens gastos

**✅ Abordagem Eficiente:**
- Gemini CLI gera todas as descriptions
- ~200 tokens Claude (validação)
- **Poupança: 14,800 tokens**

### Atualização de Documentação

**Tarefa:** Atualizar PROGRESS.md após sessão

**❌ Abordagem Ineficiente:**
- Claude escreve 200 linhas de documentação
- ~5,000 tokens gastos

**✅ Abordagem Eficiente:**
- Task tool com resumo estruturado
- ~500 tokens Claude (resumo)
- **Poupança: 4,500 tokens**

---

## 10. GUIA PRÁTICO - DECISION TREE 🌳

### 1. ÁRVORE DE DECISÃO RÁPIDA

```
TAREFA A FAZER
    ↓
É código/lógica complexa? → SIM → CLAUDE faz diretamente
    ↓ NÃO
É 1 geração de texto? (ex: 1 meta description)
    ↓ SIM
    Quanto texto?
        < 200 palavras → GEMINI CLI direto (bash)
        > 200 palavras → CLAUDE faz (mais contexto)
    ↓ NÃO (múltiplas gerações)
É conteúdo repetitivo/em massa? → SIM → TASK AGENT + GEMINI
    ↓ NÃO
Requer leitura de ficheiros? → SIM → TASK AGENT (Explore/general)
    ↓ NÃO
Documentação/escrita? → SIM → TASK AGENT (general-purpose)
```

### 2. QUANDO USAR CADA FERRAMENTA

**🤖 CLAUDE (eu próprio):**
- Código JavaScript/CSS complexo
- Debugging e troubleshooting
- Decisões arquiteturais
- Planeamento de fases
- Integração entre sistemas
- **Exemplo:** Implementar calculadora JavaScript

**📋 TASK AGENT (sem Gemini):**
- Documentação (PROGRESS.md, QUICK_START.md)
- Leitura e análise de ficheiros
- Exploração de codebase
- Git operations complexos
- **Exemplo:** "Adiciona Sessão 7 ao PROGRESS.md com estes dados"

**💎 GEMINI CLI (direto via bash):**
- 1 geração curta (<200 palavras)
- Teste rápido
- Tarefa única e simples
- **Exemplo:** `gemini -p "Meta description para página X"`

**🚀 TASK AGENT + GEMINI (combinado):**
- Gerações em MASSA (10+)
- Conteúdo repetitivo e estruturado
- Processamento de lotes
- **Exemplo:** "Gera alt text para 80 imagens usando Gemini"

---

## 11. COMANDOS GEMINI - CHEAT SHEET 📝

### Sintaxe Básica

```bash
# Prompt simples
gemini -p "Teu prompt aqui"

# Prompt com contexto (usa aspas dentro)
gemini -p "Cria meta description para página sobre maçãs.
Deve ter <160 caracteres e incluir: cultivo, Portugal, variedades"

# Guardar output em ficheiro
gemini -p "Gera 5 keywords SEO para pomar" > keywords.txt

# Append a ficheiro existente
gemini -p "Meta para página Pera" >> meta-tags.txt
```

### Templates Prontos a Usar

**Meta Description:**
```bash
gemini -p "Escreve meta description SEO (máximo 160 caracteres) para página '[PÁGINA]' do site Pomar.pt sobre [TEMA]. Incluir keywords: [KEYWORDS]"
```

**Alt Text:**
```bash
gemini -p "Alt text acessível e descritivo para imagem de [DESCRIÇÃO]. Máximo 125 caracteres, foco em acessibilidade"
```

**Keywords:**
```bash
gemini -p "Gera 10 keywords SEO relevantes para página sobre [TEMA]. Formato: keyword1, keyword2, keyword3..."
```

**FAQ:**
```bash
gemini -p "Gera 5 perguntas frequentes sobre [TEMA] em Portugal. Formato numerado, perguntas diretas e práticas"
```

**Resumo:**
```bash
gemini -p "Resume este texto em 100 palavras mantendo informação essencial: [TEXTO]"
```

---

## 12. WORKFLOWS PRÁTICOS PASSO-A-PASSO 🛠️

### Workflow 1: Gerar 1 Meta Description (GEMINI direto)

```bash
# Passo 1: Chamar Gemini
gemini -p "Meta description SEO (<160 chars) para página Maçã sobre cultivo de macieiras em Portugal"

# Passo 2: Verificar caracteres (se necessário)
echo "Guia completo..." | wc -m

# Passo 3: Usar no _config.yml ou front matter
```

**Tokens gastos:** ~100 (Claude vê comando e resposta)
**Tempo:** 5 segundos

---

### Workflow 2: Gerar Meta Tags para 4 Espécies (AGENTE + GEMINI)

```
# Via Task agent:
"Usa Gemini CLI para gerar meta description (<160 chars) para estas 4 espécies:
- Maçã (cultivo macieiras)
- Pera (cultivo pereiras)
- Pêssego (cultivo pessegueiros)
- Ameixa (cultivo ameixeiras)

Guarda em meta-descriptions.txt com formato:
Espécie: [nome]
Meta: [description]
Chars: [contagem]"
```

**Tokens gastos:** ~1,000 (instruções + resposta agente)
**Tempo:** 30 segundos
**Resultado:** 4 meta descriptions validadas

---

### Workflow 3: Alt Text para 80 Imagens (AGENTE + GEMINI loop)

```
# Via Task agent:
"Para cada imagem em images/especies/*.jpg:
1. Extrai nome da espécie do filename
2. Usa Gemini: 'Alt text (<125 chars) para foto de [espécie]: flores/frutos/árvore'
3. Guarda em alt-texts.yml:
   - filename: nome.jpg
     alt: [resultado gemini]
     chars: [contagem]

Processa TODAS as imagens e reporta total processado"
```

**Tokens gastos:** ~4,000 (loop de 80 + validações)
**Tempo:** 2-3 minutos
**Resultado:** 80 alt texts prontos a usar

---

### Workflow 4: Documentação (AGENTE sem Gemini)

```
# Via Task agent:
"Adiciona ao PROGRESS.md uma nova secção 'Sessão 8 - Fase 5 SEO':
- Data: [data]
- Trabalho: Geradas 20 meta descriptions, 20 keywords, Schema.org
- Estatísticas: [stats]
- Commit e push"
```

**Tokens gastos:** ~1,500
**Tempo:** 20 segundos

---

## 13. CHECKLIST ANTES DE CADA TAREFA ✅

Antes de começar, pergunta:

### 1. Que tipo de tarefa é?
- [ ] Código/lógica → **CLAUDE**
- [ ] 1 texto curto → **GEMINI direto**
- [ ] Múltiplos textos → **AGENTE + GEMINI**
- [ ] Documentação → **AGENTE**
- [ ] Exploração código → **AGENTE Explore**

### 2. Quantas gerações?
- [ ] 1 geração → Gemini direto (bash)
- [ ] 2-5 gerações → Considerar agente
- [ ] 6+ gerações → **AGENTE + GEMINI obrigatório**

### 3. Precisa de contexto?
- [ ] Não → Gemini/Agente ok
- [ ] Sim (ficheiros) → Agente com Read
- [ ] Sim (decisões) → **CLAUDE**

### 4. Quanto tempo tenho?
- [ ] Urgente (< 1 min) → Gemini direto
- [ ] Normal → Agente (automático)
- [ ] Complexo → Claude planeia

---

## 14. EXEMPLOS COMPARATIVOS 📊

### Exemplo 1: Criar 1 Meta Description

**❌ CLAUDE faz:**
```
- Ler contexto da página: 500 tokens
- Escrever meta: 300 tokens
- Total: 800 tokens
```

**✅ GEMINI direto:**
```bash
gemini -p "Meta description para página Maçã"
# Total: 100 tokens Claude (só vê comando)
# Poupança: 700 tokens (88%)
```

---

### Exemplo 2: Criar 20 Meta Descriptions

**❌ CLAUDE faz:**
```
- Ler 20 páginas: 10,000 tokens
- Escrever 20 metas: 6,000 tokens
- Total: 16,000 tokens
```

**✅ AGENTE + GEMINI:**
```
Task agent com instruções
# Total: 2,000 tokens
# Poupança: 14,000 tokens (88%)
```

---

### Exemplo 3: Atualizar PROGRESS.md

**❌ CLAUDE faz:**
```
- Ler PROGRESS.md: 3,000 tokens
- Escrever secção: 2,000 tokens
- Total: 5,000 tokens
```

**✅ AGENTE (sem Gemini):**
```
Task agent: "Adiciona Sessão X com dados Y"
# Total: 1,500 tokens
# Poupança: 3,500 tokens (70%)
```

---

## 15. ATALHOS RÁPIDOS ⚡

### Atalho 1: Meta Tags Completos (1 página)
```bash
# Gera tudo de uma vez
gemini -p "Para página sobre cultivo de maçãs em Portugal, gera:
1. Meta description (<160 chars)
2. 10 keywords SEO
3. og:title
4. og:description
Formato: campo: valor (cada linha)"
```

### Atalho 2: Batch Processing Template
```bash
# Via agente - template reutilizável:
"Para cada ficheiro em [PASTA]/*.md:
1. Extrai [INFO] do filename
2. Usa Gemini para gerar [CONTEÚDO]
3. Guarda em [OUTPUT]
Reporta total processado + erros"
```

### Atalho 3: Validação Automática
```bash
# Gemini pode validar também:
gemini -p "Verifica se estas meta descriptions têm <160 chars:
1. [meta1]
2. [meta2]
Reporta: OK ou 'excede X caracteres'"
```

---

## 16. CONCLUSÃO

A delegação eficiente pode poupar **22% dos tokens** em cada sessão, permitindo:

1. Sessões mais longas com o mesmo orçamento
2. Foco em tarefas de maior valor
3. Redução de custos operacionais
4. Melhor experiência de desenvolvimento

**Princípio Fundamental:**
*"Claude para pensar e decidir, agentes para executar e documentar."*

---

**Criado:** Sessão 7
**Última atualização:** 2026-01-23
