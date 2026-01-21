# 🌳 Pomar.PT - Guia de Fruticultura Portugal e Açores

Site completo sobre cultivo de árvores de fruto em Portugal e Açores.

## 📋 Sobre o Projeto

Este site foi criado para fornecer informação técnica, prática e acessível sobre fruticultura em Portugal e Açores. Inclui:

- **10 espécies detalhadas** (Maçã, Pera, Pessego, Ameixa, Videira, Laranja, Limão, Mirtilo, Framboesa, Morango)
- **4 regiões climáticas** (Açores, Norte, Centro, Sul)
- **Práticas essenciais** (Plantação, Poda, Adubação, Enxertos, Doenças, Colheita)
- **14 tabelas comparativas**
- **Calendários regionais**
- **Ferramentas interativas** (calculadora adubação, diagnóstico doenças)


## 📁 Estrutura do Projeto

```
pomar-site/
├── _config.yml              # Configuração Jekyll
├── _layouts/                # Templates
│   ├── default.html        # Layout base
│   └── especie.html        # Layout espécies
├── _includes/               # Componentes
│   ├── header.html         # Cabeçalho
│   └── footer.html         # Rodapé
├── assets/
│   ├── css/style.css       # Estilos
│   ├── js/main.js          # JavaScript
│   └── images/             # Imagens (a adicionar)
├── especies/                # Páginas espécies
│   ├── maca.md             ✅ Completo
│   ├── videira.md          ✅ Completo
│   ├── laranja.md          ✅ Completo
│   ├── pera.md             ⚪ Por criar
│   ├── pessego.md          ⚪ Por criar
│   └── ...
├── praticas/                # Práticas agrícolas
│   └── (por criar)
├── ferramentas/             # Ferramentas interativas
│   └── (por criar)
├── index.html               ✅ Página inicial
├── PROGRESS.md              # Tracking progresso
└── README.md                # Este ficheiro
```

## 🎨 Personalização

### Cores (CSS Variables)
Editar `assets/css/style.css`:
```css
:root {
    --verde-principal: #2d5016;
    --verde-secundario: #4a7c2c;
    --amarelo-fruto: #f4c430;
}
```

### Conteúdo
- Editar ficheiros `.md` em `especies/` ou `praticas/`
- Usar formato Markdown
- Front matter (topo ficheiro) define metadados

Exemplo:
```yaml
---
layout: especie
title: Maçã
emoji: 🍎
---
```


**Criado:** Janeiro 2026
**Versão:** 1.0 (Checkpoint 1)
**Status:** 🟢 Fundação completa, pronto para expansão
