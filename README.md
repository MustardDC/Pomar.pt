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

## 🚀 Como Executar Localmente

### Pré-requisitos
- Ruby (versão 2.7+)
- Jekyll
- Git

### Instalação

1. **Instalar Ruby** (se não tiver):
   - Windows: [RubyInstaller](https://rubyinstaller.org/)
   - Mac: `brew install ruby`
   - Linux: `sudo apt-get install ruby-full`

2. **Instalar Jekyll e Bundler**:
   ```bash
   gem install jekyll bundler
   ```

3. **Clonar repositório** (ou navegar até a pasta):
   ```bash
   cd "C:\Users\diogo.cabral\OneDrive - Grupo Finançor\Projetos Claude\Projeto site - Pomar"
   ```

4. **Instalar dependências** (primeira vez):
   ```bash
   bundle install
   ```

5. **Executar servidor local**:
   ```bash
   bundle exec jekyll serve
   ```

6. **Abrir no navegador**:
   ```
   http://localhost:4000
   ```

O site atualizará automaticamente quando editar ficheiros.

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

## 📤 Deploy GitHub Pages

### 1. Criar Repositório GitHub
```bash
# Inicializar Git (se ainda não feito)
git init

# Adicionar ficheiros
git add .

# Commit inicial
git commit -m "Initial commit - Base do site Pomar.PT"

# Conectar ao GitHub (criar repo primeiro no site)
git remote add origin https://github.com/SEU-USERNAME/pomar-site.git

# Push
git branch -M main
git push -u origin main
```

### 2. Ativar GitHub Pages
1. Ir para Settings do repositório
2. Pages (menu lateral)
3. Source: selecionar "main branch"
4. Guardar

### 3. URL do Site
Após alguns minutos:
```
https://SEU-USERNAME.github.io/pomar-site/
```

### 4. Domínio Personalizado (Opcional)
1. Comprar domínio (ex: pomar.pt)
2. Configurar DNS (adicionar CNAME para SEU-USERNAME.github.io)
3. GitHub Pages Settings > Custom domain

## ✅ Status Atual (Checkpoint 1)

### Completado
- ✅ Estrutura base completa
- ✅ Configuração Jekyll
- ✅ Layout base + CSS responsivo
- ✅ Sistema navegação (header, footer)
- ✅ Página inicial atraente
- ✅ 3 páginas de espécies (Maçã, Videira, Laranja)
- ✅ JavaScript interativo (menu mobile, scroll, busca)

### Por Fazer (Próximas Sessões)
- ⚪ 7 páginas espécies restantes
- ⚪ 6 páginas de práticas
- ⚪ Ferramentas interativas
- ⚪ 60-80 imagens
- ⚪ Tabelas e calendários
- ⚪ Glossário
- ⚪ Sistema de busca funcional

## 🛠️ Tecnologias Utilizadas

- **Jekyll** - Gerador de sites estáticos
- **Liquid** - Template engine
- **Markdown** - Conteúdo
- **HTML5 + CSS3** - Estrutura e design
- **JavaScript (Vanilla)** - Interatividade
- **Font Awesome** - Ícones
- **Google Fonts** - Tipografia (Montserrat, Open Sans)

## 📞 Sugestões e Melhorias

Para sugerir melhorias ou reportar problemas:
1. Criar issue no GitHub
2. Pull request com contribuições

## 📄 Licença

Conteúdo baseado em:
- COMPILACAO_ARVORES_FRUTO_VINHAS.md
- TABELAS_CALENDARIOS_PRATICOS.md
- INDICE_MESTRE_REFERENCIAS.md
- LINKS_RECURSOS_VERIFICADOS.md

Informação compilada de fontes oficiais (DRAAC, INIAV, UTAD).

## 🔄 Próximos Passos

Ver `PROGRESS.md` para roadmap detalhado e checkpoints.

---

**Criado:** Janeiro 2026
**Versão:** 1.0 (Checkpoint 1)
**Status:** 🟢 Fundação completa, pronto para expansão
