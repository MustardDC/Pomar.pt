---
layout: default
title: Ferramentas e Calculadoras
description: "Ferramentas e equipamentos essenciais para pomares em Portugal. Tesouras, serras, pulverizadores, sistemas de rega e manutenção de ferramentas."
keywords: "ferramentas pomar, tesoura poda, serra fruticultura, pulverizador, sistema rega, equipamentos pomar, manutenção ferramentas, Portugal"
og_title: "Ferramentas e Equipamentos - Pomar.pt"
og_description: "Ferramentas essenciais para pomares. Seleção, uso e manutenção de tesouras, serras, pulverizadores e sistemas de rega."
---

<div class="page-header">
    <div class="container">
        <h1><i class="fas fa-tools"></i> Ferramentas e Calculadoras</h1>
        <p class="page-subtitle">Recursos práticos para facilitar o cultivo do seu pomar</p>
    </div>
</div>

<div class="container mt-4" markdown="1">

## 🎯 Ferramentas Interativas

<div class="ferramentas-principais" markdown="1">

### 🧮 Calculadora de Adubação {#calculadora}

**Calcule a quantidade exata de adubo para as suas árvores**

<div class="ferramenta-box">
<div class="calculator-interactive">

<form id="calculadora-adubacao" class="calc-form">

<div class="form-group">
<label for="especie">🌳 Selecione a espécie:</label>
<select id="especie" name="especie" required>
<option value="">-- Escolha a espécie --</option>
<option value="maca">Maçã</option>
<option value="pera">Pera</option>
<option value="pessego">Pêssego</option>
<option value="ameixa">Ameixa</option>
<option value="videira">Videira</option>
<option value="laranja">Laranja</option>
<option value="limao">Limão</option>
<option value="mirtilo">Mirtilo</option>
<option value="framboesa">Framboesa</option>
<option value="morango">Morango</option>
</select>
</div>

<div class="form-group">
<label for="idade">📅 Idade da árvore (anos):</label>
<input type="number" id="idade" name="idade" min="1" max="50" placeholder="Ex: 5" required>
<small class="form-hint">Entre 1 e 50 anos</small>
</div>

<div class="form-group">
<label>🌸 Época do ano:</label>
<div class="radio-group">
<label class="radio-label">
<input type="radio" name="epoca" value="primavera" checked>
<span>Primavera (Mar-Mai)</span>
</label>
<label class="radio-label">
<input type="radio" name="epoca" value="verao">
<span>Verão (Jun-Ago)</span>
</label>
<label class="radio-label">
<input type="radio" name="epoca" value="outono">
<span>Outono (Set-Nov)</span>
</label>
</div>
</div>

<button type="submit" class="btn btn-primary btn-calc">
<i class="fas fa-calculator"></i> Calcular Dose
</button>

</form>

<div id="resultado-calculadora" class="resultado-box" style="display: none;">
<h4>✅ Resultado do Cálculo</h4>
<div id="resultado-conteudo"></div>
</div>

</div>

<details class="formula-detalhes">
<summary>📖 Ver Fórmula e Fatores</summary>

<div class="formula-box">
<p><strong>Fórmula base:</strong></p>
<code>Dose (g) = Idade (anos) × 100 × Fator Espécie</code>
</div>

<h5>Fatores por Espécie:</h5>
<table class="tabela-compacta">
<thead>
<tr>
<th>Espécie</th>
<th>Fator Primavera</th>
<th>Fator Verão</th>
<th>Fator Outono</th>
</tr>
</thead>
<tbody>
<tr>
<td>Maçã, Pera</td>
<td>1.0</td>
<td>0.5</td>
<td>0.3</td>
</tr>
<tr>
<td>Pêssego, Ameixa</td>
<td>1.2</td>
<td>0.6</td>
<td>0.4</td>
</tr>
<tr>
<td>Videira</td>
<td>0.8</td>
<td>0.3</td>
<td>0.2</td>
</tr>
<tr>
<td>Citrinos</td>
<td>1.5</td>
<td>0.8</td>
<td>0.5</td>
</tr>
<tr>
<td>Pequenos Frutos</td>
<td>0.5</td>
<td>0.2</td>
<td>0.1</td>
</tr>
</tbody>
</table>

</details>

</div>

---

### 📅 Calendários Regionais {#calendarios}

**Veja o que fazer em cada mês do ano na sua região**

<div class="calendario-interativo">

<div class="calendario-controles">

<div class="regioes-selector">
<h4>📍 Selecione a região:</h4>
<div class="btn-group">
<button class="btn-regiao active" data-regiao="norte">🏔️ Norte</button>
<button class="btn-regiao" data-regiao="centro">🏞️ Centro</button>
<button class="btn-regiao" data-regiao="sul">☀️ Sul</button>
<button class="btn-regiao" data-regiao="acores">🌊 Açores</button>
</div>
</div>

<div class="meses-selector">
<h4>📅 Selecione o mês:</h4>
<div class="btn-group-meses">
<button class="btn-mes active" data-mes="1">Jan</button>
<button class="btn-mes" data-mes="2">Fev</button>
<button class="btn-mes" data-mes="3">Mar</button>
<button class="btn-mes" data-mes="4">Abr</button>
<button class="btn-mes" data-mes="5">Mai</button>
<button class="btn-mes" data-mes="6">Jun</button>
<button class="btn-mes" data-mes="7">Jul</button>
<button class="btn-mes" data-mes="8">Ago</button>
<button class="btn-mes" data-mes="9">Set</button>
<button class="btn-mes" data-mes="10">Out</button>
<button class="btn-mes" data-mes="11">Nov</button>
<button class="btn-mes" data-mes="12">Dez</button>
</div>
</div>

</div>

<div id="calendario-conteudo" class="calendario-conteudo">
<!-- Conteúdo dinâmico aparece aqui -->
</div>

<div class="calendario-navegacao">
<button id="mes-anterior" class="btn-nav"><i class="fas fa-chevron-left"></i> Mês Anterior</button>
<button id="mes-seguinte" class="btn-nav">Mês Seguinte <i class="fas fa-chevron-right"></i></button>
</div>

</div>

---

### 🩺 Diagnóstico de Doenças {#diagnostico}

**Identifique doenças e pragas através de perguntas guiadas**

<div class="wizard-diagnostico">

<div id="wizard-container" class="wizard-box">

<div class="wizard-header">
<h4 id="wizard-titulo">🩺 Diagnóstico de Problemas</h4>
<p id="wizard-passo" class="wizard-step">Passo 1 de 3</p>
</div>

<div id="wizard-pergunta" class="wizard-question">
<!-- Perguntas aparecem aqui dinamicamente -->
</div>

<div id="wizard-opcoes" class="wizard-options">
<!-- Opções aparecem aqui dinamicamente -->
</div>

<div id="wizard-resultado" class="wizard-result" style="display: none;">
<!-- Resultado final aparece aqui -->
</div>

<div class="wizard-acoes">
<button id="wizard-voltar" class="btn-wizard-secondary" style="display: none;">
<i class="fas fa-arrow-left"></i> Voltar
</button>
<button id="wizard-reiniciar" class="btn-wizard-primary" style="display: none;">
<i class="fas fa-redo"></i> Novo Diagnóstico
</button>
</div>

</div>

</div>

---

## 📊 Tabelas Comparativas Rápidas {#tabelas}

### Tabela 1: Necessidades Climáticas

<table class="tabela-comparativa">
    <thead>
        <tr>
            <th>Espécie</th>
            <th>Frio Invernal</th>
            <th>Temp. Ideal Verão</th>
            <th>Regiões Ideais PT</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Maçã</td>
            <td>500-1000h <7°C</td>
            <td>18-24°C</td>
            <td>Norte, Centro, Serra</td>
        </tr>
        <tr>
            <td>Pera</td>
            <td>600-900h <7°C</td>
            <td>20-26°C</td>
            <td>Norte, Centro</td>
        </tr>
        <tr>
            <td>Pêssego</td>
            <td>200-600h <7°C</td>
            <td>22-28°C</td>
            <td>Todo Portugal</td>
        </tr>
        <tr>
            <td>Ameixa</td>
            <td>300-900h <7°C</td>
            <td>20-26°C</td>
            <td>Todo Portugal</td>
        </tr>
        <tr>
            <td>Videira</td>
            <td>100-400h <7°C</td>
            <td>25-30°C</td>
            <td>Todo Portugal</td>
        </tr>
        <tr>
            <td>Laranja</td>
            <td>0h (não tolera)</td>
            <td>24-30°C</td>
            <td>Sul, Açores</td>
        </tr>
        <tr>
            <td>Limão</td>
            <td>0h (não tolera)</td>
            <td>24-32°C</td>
            <td>Sul, Algarve</td>
        </tr>
        <tr>
            <td>Mirtilo</td>
            <td>400-1200h <7°C</td>
            <td>16-24°C</td>
            <td>Norte, Centro, Serra</td>
        </tr>
    </tbody>
</table>

---

### Tabela 2: Intensidade de Poda (% Remoção Anual)

<table class="tabela-comparativa">
    <thead>
        <tr>
            <th>Espécie</th>
            <th>Formação (anos 1-3)</th>
            <th>Produção</th>
            <th>Época</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Maçã</td>
            <td>Moderada (20-30%)</td>
            <td>Leve (10-20%)</td>
            <td>Inverno (jan-fev)</td>
        </tr>
        <tr>
            <td>Pêssego</td>
            <td>Forte (40%)</td>
            <td><strong>Agressiva (30-40%)</strong></td>
            <td>Inverno (jan-fev)</td>
        </tr>
        <tr>
            <td>Videira</td>
            <td>Muito forte (70%)</td>
            <td><strong>Drástica (80-90%)</strong></td>
            <td>Inverno (dez-fev)</td>
        </tr>
        <tr>
            <td>Laranja</td>
            <td>Muito leve (5%)</td>
            <td>Muito leve (5-10%)</td>
            <td>Primavera (mar-abr)</td>
        </tr>
        <tr>
            <td>Mirtilo</td>
            <td>Leve (10%)</td>
            <td>Moderada (20-25%)</td>
            <td>Inverno (jan-fev)</td>
        </tr>
    </tbody>
</table>

<div class="nota-tabela">
    <strong>⚠️ Atenção:</strong> Videira e Pêssego requerem podas MUITO mais agressivas que outras espécies!
</div>

---

### Tabela 3: Compatibilidade de Enxertos

<table class="tabela-compatibilidade">
    <thead>
        <tr>
            <th>Garfo (variedade)</th>
            <th>Porta-enxerto</th>
            <th>Compatibilidade</th>
            <th>Notas</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Maçã</td>
            <td>Macieira silvestre</td>
            <td>✅ Excelente</td>
            <td>Vigor médio, resistente</td>
        </tr>
        <tr>
            <td>Maçã</td>
            <td>Pereira</td>
            <td>❌ Incompatível</td>
            <td>Diferentes géneros</td>
        </tr>
        <tr>
            <td>Pera</td>
            <td>Marmeleiro</td>
            <td>✅ Boa</td>
            <td>Nanificante, produção precoce</td>
        </tr>
        <tr>
            <td>Pêssego</td>
            <td>Pessegueiro franco</td>
            <td>✅ Excelente</td>
            <td>Vigor forte</td>
        </tr>
        <tr>
            <td>Pêssego</td>
            <td>Ameixeira</td>
            <td>⚠️ Variável</td>
            <td>Algumas variedades OK</td>
        </tr>
        <tr>
            <td>Ameixa</td>
            <td>Ameixeira Myrobalan</td>
            <td>✅ Excelente</td>
            <td>Vigor médio, solos pesados</td>
        </tr>
        <tr>
            <td>Videira</td>
            <td>Videira americana</td>
            <td>✅ Obrigatório</td>
            <td>Resistência filoxera</td>
        </tr>
        <tr>
            <td>Laranja</td>
            <td>Laranjeira azeda</td>
            <td>✅ Excelente</td>
            <td>Resistente gomose</td>
        </tr>
        <tr>
            <td>Limão</td>
            <td>Citrumelo</td>
            <td>✅ Boa</td>
            <td>Tolerante frio</td>
        </tr>
    </tbody>
</table>

---

### Tabela 4: Época de Colheita por Região

<table class="tabela-comparativa">
    <thead>
        <tr>
            <th>Espécie</th>
            <th>Norte</th>
            <th>Centro</th>
            <th>Sul</th>
            <th>Açores</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Maçã</td>
            <td>Set-Out</td>
            <td>Set-Out</td>
            <td>Ago-Set</td>
            <td>Set-Nov</td>
        </tr>
        <tr>
            <td>Pera</td>
            <td>Ago-Set</td>
            <td>Jul-Set</td>
            <td>Jul-Ago</td>
            <td>Set-Out</td>
        </tr>
        <tr>
            <td>Pêssego</td>
            <td>Jul-Ago</td>
            <td>Jun-Ago</td>
            <td>Mai-Jul</td>
            <td>Ago-Set</td>
        </tr>
        <tr>
            <td>Ameixa</td>
            <td>Jul-Ago</td>
            <td>Jun-Ago</td>
            <td>Jun-Jul</td>
            <td>Ago-Set</td>
        </tr>
        <tr>
            <td>Uva</td>
            <td>Set-Out</td>
            <td>Ago-Set</td>
            <td>Ago-Set</td>
            <td>Set-Out</td>
        </tr>
        <tr>
            <td>Laranja</td>
            <td>-</td>
            <td>-</td>
            <td>Dez-Mar</td>
            <td>Jan-Abr</td>
        </tr>
        <tr>
            <td>Mirtilo</td>
            <td>Jun-Ago</td>
            <td>Mai-Jul</td>
            <td>Abr-Jun</td>
            <td>Jul-Set</td>
        </tr>
    </tbody>
</table>

---

### Tabela 5: Programa de Adubação Anual (NPK)

<table class="tabela-adubacao">
    <thead>
        <tr>
            <th>Espécie</th>
            <th>Fevereiro</th>
            <th>Maio</th>
            <th>Julho</th>
            <th>Setembro</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Maçã/Pera</td>
            <td>12-12-17 (500g)</td>
            <td>20-10-10 (300g)</td>
            <td>10-5-20 (200g)</td>
            <td>0-10-20 (300g)</td>
        </tr>
        <tr>
            <td>Pêssego/Ameixa</td>
            <td>15-15-15 (600g)</td>
            <td>20-10-10 (400g)</td>
            <td>5-5-20 (200g)</td>
            <td>0-10-25 (300g)</td>
        </tr>
        <tr>
            <td>Videira</td>
            <td>10-10-10 (300g)</td>
            <td>15-5-10 (200g)</td>
            <td><em>não adubar</em></td>
            <td>0-10-20 (200g)</td>
        </tr>
        <tr>
            <td>Citrinos</td>
            <td>20-10-10 (800g)</td>
            <td>15-5-15 (600g)</td>
            <td>10-5-20 (400g)</td>
            <td>0-10-15 (400g)</td>
        </tr>
        <tr>
            <td>Mirtilo</td>
            <td>Adubo ácido (200g)</td>
            <td>Sulfato amónio (150g)</td>
            <td>0-10-10 (100g)</td>
            <td><em>não adubar</em></td>
        </tr>
    </tbody>
</table>

<div class="nota-importante-box" markdown="1">

#### ⚠️ Regras Críticas de Adubação:

- **NUNCA** adubar com Azoto (N) após junho → causa crescimento tardio e frutos moles
- **Verão:** Reduzir N, aumentar Potássio (K) → melhora cor, sabor e conservação
- **Outono:** Zero Azoto, só Fósforo (P) e Potássio (K) → preparar inverno
- **Doses:** Valores para árvore adulta (5-10 anos). Jovens = 50% dose

</div>

---

## 🔗 Links Úteis

<div class="links-grid" markdown="1">

<div class="link-card" markdown="1">

#### <i class="fas fa-book"></i> Práticas Essenciais

- [Plantação e Estabelecimento]({{ '/praticas/plantacao' | relative_url }})
- [Guia Completo de Podas]({{ '/praticas/podas' | relative_url }})
- [Adubação e Nutrição]({{ '/praticas/adubacao' | relative_url }})
- [Técnicas de Enxertia]({{ '/praticas/enxertos' | relative_url }})
- [Doenças e Pragas]({{ '/praticas/doencas' | relative_url }})
- [Colheita e Armazenamento]({{ '/praticas/colheita' | relative_url }})

</div>

<div class="link-card" markdown="1">

#### <i class="fas fa-apple-alt"></i> Espécies Detalhadas

- [Maçã]({{ '/especies/maca' | relative_url }}) | [Pera]({{ '/especies/pera' | relative_url }})
- [Pêssego]({{ '/especies/pessego' | relative_url }}) | [Ameixa]({{ '/especies/ameixa' | relative_url }})
- [Videira]({{ '/especies/videira' | relative_url }})
- [Laranja]({{ '/especies/laranja' | relative_url }}) | [Limão]({{ '/especies/limao' | relative_url }})
- [Mirtilo]({{ '/especies/mirtilo' | relative_url }}) | [Framboesa]({{ '/especies/framboesa' | relative_url }}) | [Morango]({{ '/especies/morango' | relative_url }})

</div>

<div class="link-card" markdown="1">

#### <i class="fas fa-external-link-alt"></i> Outros Recursos

- [Glossário Técnico]({{ '/glossario' | relative_url }})
- [Links e Instituições]({{ '/recursos' | relative_url }})
- [Voltar à Página Inicial]({{ '/' | relative_url }})

</div>
</div>

</div>

<!-- CSS Específico da Página -->
<style>
.page-header {
    background: linear-gradient(135deg, var(--verde-principal) 0%, var(--verde-secundario) 100%);
    color: var(--branco);
    padding: 60px 0;
    text-align: center;
    margin-bottom: 40px;
}

.page-header h1 {
    color: var(--branco);
    font-size: 2.5rem;
    margin-bottom: 10px;
}

.page-subtitle {
    font-size: 1.2rem;
    color: var(--amarelo-fruto);
}

.ferramentas-principais {
    margin-bottom: 40px;
}

.ferramenta-box {
    background-color: var(--cinza-claro);
    padding: 30px;
    border-radius: 12px;
    margin: 20px 0;
}

.calculator-simple h4 {
    color: var(--verde-principal);
    margin-bottom: 15px;
}

.formula-box {
    background-color: var(--branco);
    padding: 15px;
    border-left: 4px solid var(--verde-secundario);
    margin: 15px 0;
    font-family: 'Courier New', monospace;
}

.exemplo-calculo {
    background-color: #fff3cd;
    padding: 15px;
    border-radius: 8px;
    margin-top: 20px;
}

.nota-importante {
    color: #d9534f;
    font-weight: 600;
}

.regioes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
    margin: 30px 0;
}

.regiao-card {
    background-color: var(--branco);
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.regiao-card h4 {
    color: var(--verde-principal);
    margin-bottom: 15px;
    font-size: 1.3rem;
}

.lista-tarefas {
    list-style: none;
    padding: 0;
    margin: 15px 0;
}

.lista-tarefas li {
    padding: 8px 0;
    border-bottom: 1px solid var(--cinza-claro);
}

.clima-info {
    background-color: var(--cinza-claro);
    padding: 10px;
    border-radius: 6px;
    margin-top: 15px;
    font-size: 0.9rem;
    font-style: italic;
}

.nota-calendario {
    background-color: #d1ecf1;
    padding: 20px;
    border-left: 4px solid #0c5460;
    border-radius: 8px;
    margin: 30px 0;
}

.diagnostico-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    margin: 25px 0;
}

.sintoma-card {
    background-color: var(--branco);
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    border-top: 4px solid var(--verde-secundario);
}

.sintoma-card h4 {
    color: var(--verde-principal);
    margin-bottom: 12px;
}

.sintomas-lista ul {
    margin: 10px 0;
    padding-left: 20px;
}

.tratamento {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 2px solid var(--cinza-claro);
    font-weight: 600;
}

.protocolo-box {
    background-color: #f8f9fa;
    padding: 25px;
    border-radius: 12px;
    border-left: 5px solid var(--amarelo-fruto);
    margin: 30px 0;
}

.protocolo-box h4 {
    color: var(--verde-principal);
    margin-bottom: 15px;
}

.tabela-comparativa,
.tabela-compacta,
.tabela-compatibilidade,
.tabela-adubacao {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    background-color: var(--branco);
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.tabela-comparativa th,
.tabela-compacta th,
.tabela-compatibilidade th,
.tabela-adubacao th {
    background-color: var(--verde-principal);
    color: var(--branco);
    padding: 12px;
    text-align: left;
    font-weight: 600;
}

.tabela-comparativa td,
.tabela-compacta td,
.tabela-compatibilidade td,
.tabela-adubacao td {
    padding: 12px;
    border-bottom: 1px solid var(--cinza-claro);
}

.tabela-comparativa tbody tr:hover,
.tabela-compatibilidade tbody tr:hover,
.tabela-adubacao tbody tr:hover {
    background-color: #f8f9fa;
}

.nota-tabela {
    background-color: #fff3cd;
    padding: 12px 20px;
    border-radius: 6px;
    margin: 15px 0;
    border-left: 4px solid #ffc107;
}

.nota-importante-box {
    background-color: #f8d7da;
    padding: 20px;
    border-left: 5px solid #d9534f;
    border-radius: 8px;
    margin: 25px 0;
}

.nota-importante-box h4 {
    color: #721c24;
    margin-bottom: 12px;
}

.links-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
    margin: 40px 0;
}

.link-card {
    background-color: var(--branco);
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.link-card h4 {
    color: var(--verde-principal);
    margin-bottom: 15px;
    font-size: 1.2rem;
}

.link-card ul {
    list-style: none;
    padding: 0;
}

.link-card li {
    padding: 6px 0;
}

.link-card a {
    color: var(--verde-secundario);
    text-decoration: none;
    transition: var(--transition);
}

.link-card a:hover {
    color: var(--verde-principal);
    text-decoration: underline;
}

@media (max-width: 768px) {
    .page-header h1 {
        font-size: 2rem;
    }

    .regioes-grid,
    .diagnostico-grid,
    .links-grid {
        grid-template-columns: 1fr;
    }

    .tabela-comparativa,
    .tabela-compatibilidade,
    .tabela-adubacao {
        font-size: 0.85rem;
    }

    .tabela-comparativa td,
    .tabela-compatibilidade td,
    .tabela-adubacao td {
        padding: 8px;
    }
}
</style>
