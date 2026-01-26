#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script para integrar meta tags SEO nos ficheiros .md do site Pomar.pt
Lê QUICK_REFERENCE.md e atualiza 20 ficheiros com 4 meta tags cada.
"""

import re
import os
from pathlib import Path

# Diretório base do projeto
BASE_DIR = Path(r"C:\Users\diogo.cabral\OneDrive - Grupo Finançor\Projetos Claude\Projeto site - Pomar")

# Mapeamento: nome no QUICK_REFERENCE -> caminho do ficheiro
FILE_MAPPING = {
    "MAÇÃ": "especies/maca.md",
    "PERA": "especies/pera.md",
    "PÊSSEGO": "especies/pessego.md",
    "AMEIXA": "especies/ameixa.md",
    "VIDEIRA": "especies/videira.md",
    "LARANJA": "especies/laranja.md",
    "LIMÃO": "especies/limao.md",
    "MIRTILO": "especies/mirtilo.md",
    "FRAMBOESA": "especies/framboesa.md",
    "MORANGO": "especies/morango.md",
    "PLANTAÇÃO": "praticas/plantacao.md",
    "PODAS": "praticas/podas.md",
    "ADUBAÇÃO": "praticas/adubacao.md",
    "ENXERTOS": "praticas/enxertos.md",
    "DOENÇAS": "praticas/doencas.md",
    "COLHEITA": "praticas/colheita.md",
    "FERRAMENTAS": "ferramentas.md",
    "GLOSSÁRIO": "glossario.md",
    "RECURSOS": "recursos.md",
    "HOMEPAGE": "README.md"
}

def parse_quick_reference():
    """Extrai meta tags do QUICK_REFERENCE.md"""
    quick_ref_path = BASE_DIR / "QUICK_REFERENCE.md"
    
    with open(quick_ref_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Dicionário para armazenar as meta tags
    meta_tags = {}
    
    # Pattern para capturar cada seção
    # Exemplo: ## 1. MAÇÃ (maca.md)
    sections = re.split(r'## \d+\. ', content)[1:]  # Ignora o cabeçalho
    
    for section in sections:
        # Extrair o nome da página
        match = re.match(r'([A-ZÃÇÁÉÍÓÚ\s]+)\s+\(([^\)]+)\)', section)
        if not match:
            continue
        
        page_name = match.group(1).strip()
        
        # Extrair as 4 meta tags
        desc_match = re.search(r'Descrição:\s*(.+?)(?=\nKeywords:)', section, re.DOTALL)
        keywords_match = re.search(r'Keywords:\s*(.+?)(?=\nOG Título:)', section, re.DOTALL)
        og_title_match = re.search(r'OG Título:\s*(.+?)(?=\nOG Desc:)', section, re.DOTALL)
        og_desc_match = re.search(r'OG Desc:\s*(.+?)(?=\n```|\Z)', section, re.DOTALL)
        
        if all([desc_match, keywords_match, og_title_match, og_desc_match]):
            meta_tags[page_name] = {
                'description': desc_match.group(1).strip(),
                'keywords': keywords_match.group(1).strip(),
                'og_title': og_title_match.group(1).strip(),
                'og_description': og_desc_match.group(1).strip()
            }
    
    return meta_tags

def update_frontmatter(file_path, meta_tags):
    """Atualiza ou adiciona meta tags SEO no front matter YAML"""
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Verificar se já tem front matter
    frontmatter_match = re.match(r'^---\n(.*?)\n---\n(.*)', content, re.DOTALL)
    
    if frontmatter_match:
        # Já tem front matter - atualizar
        existing_fm = frontmatter_match.group(1)
        body_content = frontmatter_match.group(2)
        
        # Remover meta tags antigas se existirem
        existing_fm = re.sub(r'\ndescription:.*', '', existing_fm)
        existing_fm = re.sub(r'\nkeywords:.*', '', existing_fm)
        existing_fm = re.sub(r'\nog_title:.*', '', existing_fm)
        existing_fm = re.sub(r'\nog_description:.*', '', existing_fm)
        
        # Adicionar novas meta tags no final do front matter
        new_fm = existing_fm.rstrip() + f'''
description: "{meta_tags['description']}"
keywords: "{meta_tags['keywords']}"
og_title: "{meta_tags['og_title']}"
og_description: "{meta_tags['og_description']}"'''
        
        new_content = f"---\n{new_fm}\n---\n{body_content}"
    
    else:
        # Não tem front matter - criar novo
        new_fm = f'''---
description: "{meta_tags['description']}"
keywords: "{meta_tags['keywords']}"
og_title: "{meta_tags['og_title']}"
og_description: "{meta_tags['og_description']}"
---

'''
        new_content = new_fm + content
    
    # Escrever ficheiro atualizado
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    return True

def main():
    """Função principal"""
    print("=== Integracao Meta Tags SEO - Pomar.pt ===\n")
    
    # 1. Ler QUICK_REFERENCE.md
    print("1. A ler QUICK_REFERENCE.md...")
    meta_data = parse_quick_reference()
    print(f"   OK - {len(meta_data)} paginas encontradas\n")
    
    # 2. Processar cada ficheiro
    print("2. A atualizar ficheiros .md:\n")
    
    success_count = 0
    failed_files = []
    
    for page_name, file_path in FILE_MAPPING.items():
        full_path = BASE_DIR / file_path
        
        if page_name not in meta_data:
            print(f"   ERRO - {file_path} - Meta tags nao encontradas no QUICK_REFERENCE")
            failed_files.append(file_path)
            continue
        
        if not full_path.exists():
            print(f"   ERRO - {file_path} - Ficheiro nao existe")
            failed_files.append(file_path)
            continue
        
        try:
            update_frontmatter(full_path, meta_data[page_name])
            print(f"   OK - {file_path}")
            success_count += 1
        except Exception as e:
            print(f"   ERRO - {file_path} - {e}")
            failed_files.append(file_path)
    
    # 3. Resumo
    print(f"\n3. Resumo:")
    print(f"   Ficheiros atualizados: {success_count}/20")
    print(f"   Ficheiros com erro: {len(failed_files)}")
    
    if failed_files:
        print(f"\n   Ficheiros com problemas:")
        for f in failed_files:
            print(f"   - {f}")
    
    if success_count == 20:
        print("\nSUCESSO - Todos os ficheiros atualizados com sucesso!")
    
    return success_count == 20

if __name__ == "__main__":
    main()
