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

## 7. CHECKLIST ANTES DE CADA TAREFA

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

## 8. CASOS DE USO FUTURO

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

## 9. CONCLUSÃO

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
