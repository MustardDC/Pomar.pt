# Integração de Meta Tags SEO - Pomar.pt

## Visão Geral

Este guia descreve como integrar os meta tags SEO gerados para todos os 20 páginas do site Pomar.pt.

**Estatísticas:**
- 20 páginas processadas
- 80 meta tags gerados (4 por página)
- Todas as tags em português (pt-PT)
- Conformidade total com limites de caracteres SEO

## 1. Estrutura de Meta Tags Gerados

Localização: `seo-meta-tags.txt`

Cada página tem 4 tags:
```
description     → Max 160 caracteres (Google SERP)
keywords        → 10 keywords (SEO relevância)
og_title        → Max 60 caracteres (Social media)
og_description  → Max 160 caracteres (Social media)
```

## 2. Integração no Jekyll Front Matter

### 2.1 Abrir cada ficheiro .md

Exemplo: `especies/maca.md`

```yaml
---
layout: especie
title: Maçã
nome_cientifico: Malus domestica
emoji: 🍎
tags: ["Temperada", "Norte Portugal", "Centro"]
description: Guia completo para cultivo de macieiras em Portugal. Variedades, clima, plantação, poda, doenças e colheita. Tudo que precisa saber para o seu pomar.
keywords: maçã, macieira, cultivo maçã Portugal, variedades maçã, poda macieira, doenças maçã, colheita maçã, pomar maçã, Gala Fuji, árvore frutífera
og_title: Cultivo de Maçã em Portugal | Guia Completo Pomar.pt
og_description: Saiba como cultivar macieiras em Portugal. Variedades, plantação, cuidados, doenças e colheita. Guia técnico para pomares.
---
```

### 2.2 Padrão de integração

1. Localize o ficheiro em `especies/*.md`, `praticas/*.md`, ou na raiz
2. Abra o front matter (entre `---` e `---`)
3. Adicione ou atualize:
   - `description:`
   - `keywords:`
   - `og_title:`
   - `og_description:`

## 3. Integração nos Layouts Jekyll

### 3.1 Ficheiro: `_layouts/default.html`

Adicionar na secção `<head>`:

```html
<!-- Meta Tags SEO -->
<meta name="description" content="{{ page.description }}">
<meta name="keywords" content="{{ page.keywords }}">

<!-- Open Graph Tags -->
<meta property="og:title" content="{{ page.og_title | default: page.title }}">
<meta property="og:description" content="{{ page.og_description | default: page.description }}">
<meta property="og:type" content="website">
<meta property="og:url" content="{{ page.url | absolute_url }}">
<meta property="og:image" content="{{ site.url }}/assets/pomar-og-image.png">
<meta property="og:site_name" content="Pomar.pt">

<!-- Twitter Card Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{{ page.og_title | default: page.title }}">
<meta name="twitter:description" content="{{ page.og_description | default: page.description }}">

<!-- Canonical URL -->
<link rel="canonical" href="{{ page.url | absolute_url }}">
```

### 3.2 Ficheiro: `_layouts/especie.html`

(Herda de default.html, garantindo que front matter é processado)

```html
---
layout: default
---
<!-- Conteúdo específico de espécie -->
{{ content }}
```

### 3.3 Ficheiro: `_layouts/pratica.html`

(Herda de default.html, garantindo que front matter é processado)

```html
---
layout: default
---
<!-- Conteúdo específico de prática -->
{{ content }}
```

## 4. Ficheiros a Atualizar

### 4.1 Espécies (10 ficheiros)
- [ ] `especies/maca.md`
- [ ] `especies/pera.md`
- [ ] `especies/pessego.md`
- [ ] `especies/ameixa.md`
- [ ] `especies/videira.md`
- [ ] `especies/laranja.md`
- [ ] `especies/limao.md`
- [ ] `especies/mirtilo.md`
- [ ] `especies/framboesa.md`
- [ ] `especies/morango.md`

### 4.2 Práticas Essenciais (6 ficheiros)
- [ ] `praticas/plantacao.md`
- [ ] `praticas/podas.md`
- [ ] `praticas/adubacao.md`
- [ ] `praticas/enxertos.md`
- [ ] `praticas/doencas.md`
- [ ] `praticas/colheita.md`

### 4.3 Recursos Complementares (4 ficheiros)
- [ ] `ferramentas.md`
- [ ] `glossario.md`
- [ ] `recursos.md`
- [ ] `README.md` (Homepage)

## 5. Validação de SEO

Após integração, validar:

### 5.1 Google Search Console
```
https://search.google.com/search-console
```
- Submeter sitemap.xml
- Verificar cobertura de índice
- Analisar Core Web Vitals

### 5.2 Ferramentas Online
- **Google PageSpeed Insights**: https://pagespeed.web.dev/
- **Lighthouse**: DevTools > Lighthouse
- **SEO Audit**: https://www.seobility.net/

### 5.3 Verificação de Meta Tags
```bash
# Listar todas as meta descriptions
grep -r "description:" _layouts/*.html

# Verificar Open Graph tags
grep -r "og:" _layouts/*.html

# Validar canonical URLs
grep -r "canonical" _layouts/*.html
```

## 6. Configuração de `_config.yml`

Adicionar (se não existir):

```yaml
# SEO Configuration
url: "https://pomar.pt"
title: "Pomar.pt - Fruticultura em Portugal"
description: "Guia técnico completo de fruticultura em Portugal. 10 espécies, 6 práticas essenciais e recursos."
keywords: "fruticultura Portugal, cultivo árvores fruto, pomar Portugal"

# Open Graph Defaults
og_image: "/assets/pomar-og-image.png"

# Social Media
social:
  name: "Pomar.pt"
  links:
    - "https://facebook.com/pomar.pt"
    - "https://instagram.com/pomar.pt"
```

## 7. Sitemap.xml

Jekyll gera automaticamente com plugin `jekyll-sitemap`.

Verificar `_config.yml`:

```yaml
plugins:
  - jekyll-sitemap
  - jekyll-feed
  - jekyll-seo-tag
```

## 8. robots.txt

Criar na raiz: `robots.txt`

```
User-agent: *
Allow: /

Sitemap: https://pomar.pt/sitemap.xml
```

## 9. Checklist de Integração

- [ ] Adicionar meta tags em front matter (20 ficheiros)
- [ ] Atualizar layouts com tags meta
- [ ] Validar conformidade de caracteres (160 desc, 60 og_title)
- [ ] Testar em localhost
- [ ] Submeter sitemap ao Google Search Console
- [ ] Executar auditoria de SEO (Lighthouse)
- [ ] Verificar Core Web Vitals
- [ ] Monitorar rankings no Google
- [ ] Analisar cliques e impressões (6 meses)

## 10. Impacto Esperado

### Curto Prazo (1-3 meses)
- Melhor indexação no Google
- Aumento de cliques em SERP
- Melhor CTR (Click-Through Rate)

### Médio Prazo (3-6 meses)
- Aumento de tráfego orgânico
- Posicionamento em palavras-chave principais
- Melhoria de rankings

### Longo Prazo (6-12 meses)
- Posicionamento em top 3 para keywords principais
- Autoridade de domínio aumentada
- Tráfego mensal consistente

## 11. Monitoramento Contínuo

### Google Analytics
- Acompanhar tráfego por página
- Analisar bounce rate
- Monitorar conversões

### Google Search Console
- Impressões e cliques
- Posição média
- CTR por página

### Ranking Tracker
- Monitorar posições em keywords principais
- Identificar oportunidades de melhoria
- Analisar concorrência

## 12. Próximos Passos Recomendados

1. **Link Building**
   - Contactar sites agrícolas relevantes
   - Submeter em diretórios agrícolas português
   - Parcerias com associações de fruticultores

2. **Content Marketing**
   - Blog posts periódicos
   - Guias sazonais (plantação primavera, colheita outono)
   - Vídeos YouTube sobre técnicas

3. **Local SEO**
   - Google My Business
   - Estruturação de dados (LocalBusiness)
   - Reviews em plataformas agrícolas

4. **Optimização Técnica**
   - Minificação CSS/JS
   - Compressão de imagens
   - Lazy loading
   - CDN para assets

---

**Documentação Gerada:** 2026-01-23
**Compatível com:** Jekyll 4.0+, GitHub Pages
**Suporte:** Consulte DELEGATION_GUIDE.md para automação
