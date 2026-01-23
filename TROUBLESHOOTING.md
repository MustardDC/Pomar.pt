# TROUBLESHOOTING - Problemas Técnicos e Soluções

**Projeto:** Pomar.PT - Guia de Fruticultura Portugal e Açores
**Data:** 23 Janeiro 2026
**Contexto:** Correções após criação das páginas complementares (Ferramentas, Glossário, Recursos)

---

## 🐛 PROBLEMA 1: Markdown Não Renderizava

**Data:** 23 Janeiro 2026 - 16:30
**Páginas afetadas:** ferramentas.md, glossario.md, recursos.md

### Sintoma
- Headers apareciam como código: `### 🧮 Calculadora de Adubação {#calculadora}`
- Texto em negrito não funcionava: `**Calcule a quantidade exata...**`
- Listas não formatavam: apareciam como texto simples

### Causa Raiz
O conteúdo markdown estava dentro de tags `<div>` HTML sem o atributo `markdown="1"`, fazendo com que o Jekyll/kramdown tratasse todo o conteúdo como HTML literal em vez de processar o markdown.

### Solução Aplicada

**1. Configuração Jekyll (_config.yml):**
```yaml
markdown: kramdown
kramdown:
  auto_ids: true      # Habilita IDs personalizados {#id}
  input: GFM          # GitHub Flavored Markdown
```

**2. Atributo markdown="1" nas divs:**
```html
<!-- ANTES (não funcionava) -->
<div class="container">
## Título
**Texto** em negrito
</div>

<!-- DEPOIS (funciona) -->
<div class="container" markdown="1">
## Título
**Texto** em negrito
</div>
```

**Commits:**
- `c42b306` - Fix: Corrigir processamento markdown nas páginas complementares

---

## 🐛 PROBLEMA 2: Links Âncora Não Funcionavam (Glossário)

**Data:** 23 Janeiro 2026 - 16:30
**Página afetada:** glossario.md

### Sintoma
- Clicar nas letras alfabéticas (A, B, C...) no topo não navegava para a secção correspondente
- Links estavam corretos: `<a href="#A">A</a>`
- Headers tinham IDs: `## A {#A}`

### Causa Raiz
A sintaxe `{#id}` para IDs personalizados só funciona se o kramdown estiver configurado com `auto_ids: true`.

### Solução Aplicada

**1. Ativar auto_ids no _config.yml** (ver Problema 1)

**2. Manter sintaxe de IDs personalizados:**
```markdown
## A {#A}

<dl class="glossario-lista">
...
</dl>
```

**3. Links alfabéticos com IDs corretos:**
```html
<a href="#A">A</a> | <a href="#B">B</a> | <a href="#C">C</a>
```

**Commits:**
- `c42b306` - Fix: Corrigir processamento markdown nas páginas complementares

---

## 🐛 PROBLEMA 3: Código HTML Visível Como Texto

**Data:** 23 Janeiro 2026 - 17:00
**Páginas afetadas:** ferramentas.md, recursos.md

### Sintoma
Na página renderizada aparecia código HTML literal:
```html
<p><strong>Manchas pretas/castanhas:</strong></p>
<ul>
    <li>Redondas, regulares → <strong>Sarna</strong></li>
    <li>Irregulares, necrose → <strong>Lepra</strong></li>
</ul>
```

### Causa Raiz
Dentro de `<div markdown="1">`, o conteúdo deve ser **markdown puro**, não HTML. O Jekyll processava o markdown da div, mas deixava o HTML interno como texto literal.

### Solução Aplicada

**Converter TODO o HTML interno para markdown:**

```html
<!-- ANTES (HTML dentro de div markdown) -->
<div class="sintomas-lista" markdown="1">
    <p><strong>Manchas pretas/castanhas:</strong></p>
    <ul>
        <li>Redondas, regulares → <strong>Sarna</strong></li>
    </ul>
</div>

<!-- DEPOIS (markdown puro) -->
<div class="sintomas-lista" markdown="1">

**Manchas pretas/castanhas:**
- Redondas, regulares → **Sarna**

</div>
```

**Exemplos convertidos:**
- `<p><strong>Texto:</strong></p>` → `**Texto:**`
- `<ul><li>Item</li></ul>` → `- Item`
- `<a href="url">Link</a>` → `[Link](url)`

**Commits:**
- `648a975` - Fix: Converter HTML para markdown nas páginas complementares

---

## 🐛 PROBLEMA 4: Tags HTML Visíveis (divs, headers)

**Data:** 23 Janeiro 2026 - 17:30
**Páginas afetadas:** recursos.md (principalmente)

### Sintoma
Aparecia código de estrutura HTML na página:
```html
div class="instituicao-header">
    <h3><i class="fas fa-landmark"></i> INIAV</h3>
    <p class="subtitulo">Instituto Nacional...</p>
</div>
```

### Causa Raiz
**Erro conceptual:** Aplicar `markdown="1"` em divs que são **containers puros de HTML** (não têm conteúdo markdown).

### Regra Identificada

**Divs CONTAINER** (só envolvem outras divs HTML) → **SEM** `markdown="1"`
**Divs com CONTEÚDO markdown** (texto, listas, headers) → **COM** `markdown="1"`

### Exemplos Corretos

```html
<!-- CONTAINER (só HTML dentro) - SEM markdown="1" -->
<div class="instituicao-card">
    <div class="instituicao-header">
        <h3>INIAV</h3>
    </div>
    <div class="instituicao-body" markdown="1">
        <!-- CONTEÚDO markdown aqui -->
        **O que é:** Instituição...
    </div>
</div>

<!-- CARD COM CONTEÚDO - SEM markdown="1" -->
<div class="sintoma-card">
    <h4>🍂 Folhas com Manchas</h4>
    <div class="sintomas-lista" markdown="1">
        **Sintomas:**
        - Lista item 1
    </div>
</div>
```

### Correções Aplicadas

**ferramentas.md:**
- ✅ Removido `markdown="1"` de: sintoma-card, link-card, regiao-card
- ✅ Mantido `markdown="1"` em: sintomas-lista, nota-calendario, protocolo-box

**glossario.md:**
- ✅ Removido `markdown="1"` de: recurso-card
- ✅ Mantido `markdown="1"` em: glossario-intro, glossario-footer

**recursos.md:**
- ✅ Removido `markdown="1"` de: instituicao-card, universidade-card, publicacao-item, fornecedor-card, associacao-card, app-card, link-interno-card
- ✅ Mantido `markdown="1"` em: instituicao-body, instituicao-destaque, fornecedores-nota, disclaimer-final

**Commits:**
- `d7cca23` - Fix: Corrigir exibição de código HTML nas páginas complementares

---

## 🐛 PROBLEMA 5: Headers Malformados

**Data:** 23 Janeiro 2026 - 17:15
**Páginas afetadas:** ferramentas.md

### Sintoma
Headers renderizavam incorretamente:
```html
####🍎 Frutos Deformados</h4>
####🌿 Problemas Gerais</h4>
```

### Causa Raiz
Mistura de sintaxe markdown (`####`) com tag HTML de fechamento (`</h4>`).

### Solução Aplicada

**Converter para markdown puro:**
```markdown
<!-- ANTES -->
####🍎 Frutos Deformados</h4>

<!-- DEPOIS -->
#### 🍎 Frutos Deformados
```

**Nota:** Adicionar espaço entre `####` e o emoji/texto.

**Commits:**
- `648a975` - Fix: Converter HTML para markdown nas páginas complementares

---

## ✅ CHECKLIST DE VERIFICAÇÃO - Páginas Markdown com HTML

Ao criar páginas que misturam HTML e markdown:

### Estrutura de Divs
- [ ] Divs container (só HTML) → **SEM** `markdown="1"`
- [ ] Divs com conteúdo markdown → **COM** `markdown="1"`
- [ ] Nunca misturar: `<div markdown="1"><p>texto</p></div>` ❌
- [ ] Se usar `markdown="1"`, conteúdo deve ser markdown puro ✅

### Conversões Necessárias
- [ ] `<p><strong>Texto:</strong></p>` → `**Texto:**`
- [ ] `<ul><li>Item</li></ul>` → `- Item`
- [ ] `<h3>Título</h3>` → `### Título` (se dentro de div markdown)
- [ ] `<a href="url">Link</a>` → `[Link](url){:target="_blank"}` (kramdown)

### Headers
- [ ] Usar sintaxe correta: `#### Texto` (com espaço)
- [ ] Nunca misturar: `####Texto</h4>` ❌
- [ ] IDs personalizados: `## Letra {#A}` (requer `auto_ids: true`)

### Configuração Jekyll
- [ ] `_config.yml` tem configuração kramdown
- [ ] `auto_ids: true` para IDs personalizados
- [ ] `input: GFM` para suporte GitHub Flavored Markdown

### Testes Visuais
- [ ] Headers formatados corretamente (não aparecem como código)
- [ ] Listas aparecem como listas (não como texto)
- [ ] Negrito/itálico funciona
- [ ] Links âncora navegam corretamente
- [ ] Nenhum código HTML visível como texto

---

## 📝 LIÇÕES APRENDIDAS

### 1. Markdown vs HTML - Escolher Consistentemente
- Se a página é maioritariamente HTML → usar HTML puro, sem `markdown="1"`
- Se a página é maioritariamente markdown → usar markdown puro, divs só para estilo
- **Evitar misturar** → complexo de debugar

### 2. Teste Incremental
- Criar páginas em blocos pequenos
- Testar cada secção antes de avançar
- Identificar problemas cedo (antes de criar 3 páginas inteiras)

### 3. Documentação Clara
- Comentar no código qual div tem `markdown="1"` e porquê
- Manter este ficheiro TROUBLESHOOTING atualizado

### 4. Ferramentas de Debug
- `bundle exec jekyll serve` local para testar antes do deploy
- Git diff para ver exatamente o que mudou
- Browser DevTools para ver HTML renderizado

---

## 🔧 COMANDOS ÚTEIS PARA DEBUG

### Testar Localmente
```bash
cd "C:\Users\diogo.cabral\OneDrive - Grupo Finançor\Projetos Claude\Projeto site - Pomar"
bundle exec jekyll serve
# Abrir http://localhost:4000
```

### Ver Diferenças
```bash
git diff ferramentas.md
git diff --cached
```

### Procurar Padrões Problemáticos
```bash
# Procurar divs com markdown="1"
grep -n 'markdown="1"' ferramentas.md

# Procurar HTML dentro de markdown
grep -n '<p>' ferramentas.md
grep -n '<ul>' ferramentas.md

# Procurar headers malformados
grep -n '####[^ ]' ferramentas.md
```

---

## 📊 ESTATÍSTICAS DE CORREÇÕES

**Total de commits de correção:** 3
**Ficheiros afetados:** 4 (_config.yml, ferramentas.md, glossario.md, recursos.md)
**Linhas modificadas:** ~200 linhas
**Tempo gasto:** ~1.5h
**Problemas identificados:** 5
**Problemas resolvidos:** 5 ✅

---

## 🔗 COMMITS RELACIONADOS

1. **c42b306** - Fix: Corrigir processamento markdown nas páginas complementares
   - Adicionar configuração kramdown
   - Adicionar `markdown="1"` inicial
   - Corrigir links alfabéticos glossário

2. **648a975** - Fix: Converter HTML para markdown nas páginas complementares
   - Converter blocos `<p><ul><li>` para markdown
   - Corrigir headers malformados

3. **d7cca23** - Fix: Corrigir exibição de código HTML nas páginas complementares
   - Remover `markdown="1"` de divs container
   - Aplicar regra: container HTML sem, conteúdo markdown com

---

**Estado Atual:** ✅ Todas as páginas complementares renderizam corretamente
**Próximo passo:** Adicionar imagens (Fase 3) ou melhorias opcionais

*Última atualização: 23 Janeiro 2026 - 17:45*
