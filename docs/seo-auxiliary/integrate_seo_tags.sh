#!/bin/bash

# Script de Integração de Meta Tags SEO - Pomar.pt
# Uso: bash integrate_seo_tags.sh [arquivo_csv] [diretório_base]

set -e

# Cores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Configuração padrão
CSV_FILE="${1:-.}/seo-meta-tags.csv"
BASE_DIR="${2:-.}"

echo -e "${BLUE}=== Integração de Meta Tags SEO - Pomar.pt ===${NC}"
echo ""

# Verificar se o arquivo CSV existe
if [ ! -f "$CSV_FILE" ]; then
    echo -e "${RED}Erro: Arquivo $CSV_FILE não encontrado${NC}"
    echo "Uso: bash integrate_seo_tags.sh [arquivo_csv] [diretório_base]"
    exit 1
fi

echo -e "${BLUE}CSV File:${NC} $CSV_FILE"
echo -e "${BLUE}Base Directory:${NC} $BASE_DIR"
echo ""

# Função para processar cada linha do CSV
process_csv_line() {
    local file="$1"
    local title="$2"
    local description="$3"
    local keywords="$4"
    local og_title="$5"
    local og_description="$6"

    # Skip header
    if [ "$file" = "file" ]; then
        return
    fi

    # Construir caminho completo
    if [[ "$file" == "README.md" ]]; then
        filepath="$BASE_DIR/$file"
    elif [[ "$file" == "especies/"* ]] || [[ "$file" == "praticas/"* ]]; then
        filepath="$BASE_DIR/$file"
    else
        filepath="$BASE_DIR/$file"
    fi

    echo -e "${YELLOW}Processando:${NC} $file"

    # Verificar se arquivo existe
    if [ ! -f "$filepath" ]; then
        echo -e "${RED}  Arquivo não encontrado: $filepath${NC}"
        return
    fi

    # Backup do arquivo original
    backup_file="${filepath}.backup"
    cp "$filepath" "$backup_file"
    echo -e "${GREEN}  Backup criado: $backup_file${NC}"

    # Extrair front matter e conteúdo
    awk 'BEGIN {
        in_frontmatter = 0
        found_frontmatter = 0
        content_started = 0
    }
    /^---$/ {
        if (!found_frontmatter) {
            in_frontmatter = 1
            found_frontmatter = 1
            print $0
            next
        } else {
            print $0
            content_started = 1
            next
        }
    }
    in_frontmatter && !content_started {
        # Skip existing description, keywords, og_title, og_description
        if ($0 ~ /^description:/ || $0 ~ /^keywords:/ || $0 ~ /^og_title:/ || $0 ~ /^og_description:/) {
            next
        }
        print $0
    }
    content_started {
        print $0
    }
    ' "$filepath" > "${filepath}.tmp"

    # Adicionar novos meta tags antes da última ---
    sed -i '$ d' "${filepath}.tmp"  # Remove última ---

    cat >> "${filepath}.tmp" << EOF
description: $description
keywords: $keywords
og_title: $og_title
og_description: $og_description
---
EOF

    # Restaurar conteúdo restante
    tail -n +4 "$filepath" >> "${filepath}.tmp" 2>/dev/null || true

    # Substituir arquivo original
    mv "${filepath}.tmp" "$filepath"
    echo -e "${GREEN}  Tags integradas com sucesso${NC}"
}

# Processar CSV com IFS personalizado para lidar com campos entre aspas
counter=0
skip_header=true

while IFS=',' read -r file title description keywords og_title og_description; do
    # Skip header
    if [ "$skip_header" = true ]; then
        skip_header=false
        continue
    fi

    # Remover aspas duplas se existirem
    file=$(echo "$file" | sed 's/"//g' | xargs)
    description=$(echo "$description" | sed 's/"//g')
    keywords=$(echo "$keywords" | sed 's/"//g')
    og_title=$(echo "$og_title" | sed 's/"//g')
    og_description=$(echo "$og_description" | sed 's/"//g')

    if [ -n "$file" ]; then
        process_csv_line "$file" "$title" "$description" "$keywords" "$og_title" "$og_description"
        counter=$((counter + 1))
    fi
done < "$CSV_FILE"

echo ""
echo -e "${GREEN}=== Conclusão ===${NC}"
echo -e "${GREEN}✓ Processados $counter ficheiros${NC}"
echo ""
echo "Próximos passos:"
echo "1. Revisar as mudanças em cada ficheiro .md"
echo "2. Testar em localhost: bundle exec jekyll serve"
echo "3. Validar meta tags no browser (F12 > Elements)"
echo "4. Fazer commit e push para GitHub Pages"
echo ""
echo "Backups salvos como .backup para recuperação se necessário."
