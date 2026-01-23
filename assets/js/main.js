// ============================================
// POMAR.PT - JavaScript Principal
// ============================================

document.addEventListener('DOMContentLoaded', function() {

    // ============================================
    // 1. MENU MOBILE TOGGLE
    // ============================================
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');

            // Animação do ícone hamburger
            this.classList.toggle('active');
        });
    }

    // ============================================
    // 2. BOTÃO VOLTAR AO TOPO
    // ============================================
    const backToTop = document.getElementById('backToTop');

    if (backToTop) {
        // Mostrar/esconder botão baseado no scroll
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        // Scroll suave ao topo
        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ============================================
    // 3. SEARCH OVERLAY
    // ============================================
    const searchBtn = document.getElementById('searchBtn');
    const searchOverlay = document.getElementById('searchOverlay');
    const searchClose = document.getElementById('searchClose');
    const searchInput = document.getElementById('searchInput');

    if (searchBtn && searchOverlay) {
        // Abrir search
        searchBtn.addEventListener('click', function() {
            searchOverlay.classList.add('active');
            if (searchInput) {
                searchInput.focus();
            }
        });

        // Fechar search
        if (searchClose) {
            searchClose.addEventListener('click', function() {
                searchOverlay.classList.remove('active');
            });
        }

        // Fechar com ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
                searchOverlay.classList.remove('active');
            }
        });

        // Fechar ao clicar fora
        searchOverlay.addEventListener('click', function(e) {
            if (e.target === searchOverlay) {
                searchOverlay.classList.remove('active');
            }
        });
    }

    // ============================================
    // 4. SMOOTH SCROLL PARA LINKS ÂNCORA
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ============================================
    // 5. LAZY LOADING IMAGENS (Se houver)
    // ============================================
    const images = document.querySelectorAll('img[data-src]');

    if (images.length > 0 && 'IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(function(img) {
            imageObserver.observe(img);
        });
    }

    // ============================================
    // 6. ANIMAÇÃO DE ENTRADA (Fade In)
    // ============================================
    const fadeElements = document.querySelectorAll('.fade-in');

    if (fadeElements.length > 0 && 'IntersectionObserver' in window) {
        const fadeObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1
        });

        fadeElements.forEach(function(el) {
            fadeObserver.observe(el);
        });
    }

    // ============================================
    // 7. CALCULADORA DE ADUBAÇÃO
    // ============================================
    const calcForm = document.getElementById('calculadora-adubacao');

    if (calcForm) {
        // Dados da calculadora
        const fatores = {
            maca: { primavera: 1.0, verao: 0.5, outono: 0.3, npk: '12-12-17' },
            pera: { primavera: 1.0, verao: 0.5, outono: 0.3, npk: '12-12-17' },
            pessego: { primavera: 1.2, verao: 0.6, outono: 0.4, npk: '15-15-15' },
            ameixa: { primavera: 1.2, verao: 0.6, outono: 0.4, npk: '15-15-15' },
            videira: { primavera: 0.8, verao: 0.3, outono: 0.2, npk: '10-10-20' },
            laranja: { primavera: 1.5, verao: 0.8, outono: 0.5, npk: '15-5-30' },
            limao: { primavera: 1.5, verao: 0.8, outono: 0.5, npk: '15-5-30' },
            mirtilo: { primavera: 0.5, verao: 0.2, outono: 0.1, npk: '10-5-5' },
            framboesa: { primavera: 0.5, verao: 0.2, outono: 0.1, npk: '10-10-10' },
            morango: { primavera: 0.5, verao: 0.2, outono: 0.1, npk: '10-10-10' }
        };

        const nomes = {
            maca: 'Maçã', pera: 'Pera', pessego: 'Pêssego', ameixa: 'Ameixa',
            videira: 'Videira', laranja: 'Laranja', limao: 'Limão',
            mirtilo: 'Mirtilo', framboesa: 'Framboesa', morango: 'Morango'
        };

        calcForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Obter valores do formulário
            const especie = document.getElementById('especie').value;
            const idade = parseInt(document.getElementById('idade').value);
            const epoca = document.querySelector('input[name="epoca"]:checked').value;

            // Validações
            if (!especie) {
                alert('Por favor, selecione uma espécie.');
                return;
            }

            if (!idade || idade < 1 || idade > 50) {
                alert('Por favor, indique uma idade válida (1-50 anos).');
                return;
            }

            // Calcular dose
            const fator = fatores[especie][epoca];
            const doseTotal = Math.round(idade * 100 * fator);
            const npk = fatores[especie].npk;

            // Determinar número de aplicações
            let numAplicacoes = 2;
            let mesesAplicacao = '';

            if (epoca === 'primavera') {
                mesesAplicacao = 'março e maio';
                numAplicacoes = 2;
            } else if (epoca === 'verao') {
                mesesAplicacao = 'junho e agosto';
                numAplicacoes = 2;
            } else {
                mesesAplicacao = 'setembro';
                numAplicacoes = 1;
            }

            const dosePorAplicacao = Math.round(doseTotal / numAplicacoes);

            // Avisos especiais
            let avisos = '';

            if (idade === 1) {
                avisos = '<p class="aviso-warning">⚠️ <strong>Atenção:</strong> Árvore muito jovem! Remover TODAS as flores no primeiro ano.</p>';
            } else if (idade > 30) {
                avisos = '<p class="aviso-info">💡 <strong>Dica:</strong> Árvore adulta madura. Considerar análise de solo para ajustar doses.</p>';
            }

            if (epoca === 'verao' && (especie === 'maca' || especie === 'pera' || especie === 'pessego')) {
                avisos += '<p class="aviso-info">💡 <strong>Lembrete:</strong> No verão, reduzir Azoto (N) para evitar crescimento excessivo e favorecer frutificação.</p>';
            }

            // Mostrar resultado
            const resultadoBox = document.getElementById('resultado-calculadora');
            const resultadoConteudo = document.getElementById('resultado-conteudo');

            resultadoConteudo.innerHTML = `
                <div class="resultado-principal">
                    <p class="resultado-titulo"><strong>${nomes[especie]}</strong> com <strong>${idade} anos</strong> - <strong>${epoca.charAt(0).toUpperCase() + epoca.slice(1)}</strong></p>

                    <div class="resultado-dose">
                        <h5>📦 Dose Recomendada:</h5>
                        <p class="dose-grande"><strong>${doseTotal}g</strong> de NPK ${npk}</p>
                        <p class="dose-aplicacao">Dividir em <strong>${numAplicacoes} aplicação(ões)</strong>: <strong>${dosePorAplicacao}g</strong> por aplicação</p>
                        <p class="dose-quando">📅 Aplicar em: <strong>${mesesAplicacao}</strong></p>
                    </div>

                    ${avisos}

                    <div class="resultado-instrucoes">
                        <h5>📋 Como Aplicar:</h5>
                        <ul>
                            <li>Espalhar uniformemente ao redor da copa (não junto ao tronco)</li>
                            <li>Incorporar levemente no solo (5-10cm profundidade)</li>
                            <li>Regar abundantemente após aplicação</li>
                            <li>Aplicar em dias nublados ou ao final do dia</li>
                        </ul>
                    </div>

                    <div class="resultado-nota">
                        <small>⚠️ <strong>Nota:</strong> Estas são recomendações gerais. Para pomares comerciais ou casos específicos, considerar análise de solo.</small>
                    </div>
                </div>
            `;

            resultadoBox.style.display = 'block';
            resultadoBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    }

    // ============================================
    // 8. CALENDÁRIOS REGIONAIS
    // ============================================
    const calend

arioInterativo = document.querySelector('.calendario-interativo');

    if (calendarioInterativo) {
        let regiaoAtual = 'norte';
        let mesAtual = 1;

        const dadosCalendario = {
            norte: {
                nome: '🏔️ Norte (Minho, Trás-os-Montes)',
                clima: 'Continental, invernos frios (-5°C a 10°C)',
                meses: {
                    1: { tarefas: ['Poda de formação (pomóideas)', 'Plantação árvores raiz nua', 'Tratamentos cúpricos preventivos'], temp: '-5°C a 10°C', precipitacao: 'Alta' },
                    2: { tarefas: ['Finalizar podas de inverno', 'Enxertos de fenda (final mês)', 'Preparar solo para plantações'], temp: '0°C a 12°C', precipitacao: 'Alta' },
                    3: { tarefas: ['Enxertos de fenda e garfo', 'Adubação primaveril (NPK)', 'Calda bordalesa preventiva', 'Vigilância geada tardia'], temp: '5°C a 15°C', precipitacao: 'Moderada' },
                    4: { tarefas: ['Finalizar enxertos', 'Proteção contra geadas (flores)', 'Controlo pulgões (emergência)', 'Monda inicial frutos'], temp: '8°C a 18°C', precipitacao: 'Moderada' },
                    5: { tarefas: ['Monda frutos (30-50% remoção)', 'Início rega (se seco)', 'Controlo carpocapsa (1ª geração)', 'Tutores plantas jovens'], temp: '12°C a 22°C', precipitacao: 'Moderada' },
                    6: { tarefas: ['Rega regular estabelecida', 'Vigilância aranhiço vermelho', 'Colheita cerejas/ameixas precoces', 'Enxertos T-budding preparação'], temp: '15°C a 27°C', precipitacao: 'Baixa' },
                    7: { tarefas: ['Colheita pêssegos/nectarinas', 'Rega intensiva (2x/semana)', 'Enxertos T-budding', 'Redução Azoto (parar N)'], temp: '18°C a 32°C', precipitacao: 'Muito Baixa' },
                    8: { tarefas: ['Colheita maçãs/peras precoces', 'Manter rega constante', 'Controlo vespa asiática', 'Finalizar enxertos T-budding'], temp: '17°C a 30°C', precipitacao: 'Muito Baixa' },
                    9: { tarefas: ['Colheita maçã/pera principal', 'Vindima (uvas)', 'Plantação novos pomares (início)', 'Adubação outonal (P+K, zero N)'], temp: '13°C a 24°C', precipitacao: 'Moderada' },
                    10: { tarefas: ['Finalizar colheitas', 'Plantação árvores contentor', 'Análise solo (enviar amostras)', 'Preparar material poda'], temp: '8°C a 18°C', precipitacao: 'Alta' },
                    11: { tarefas: ['Poda videira (após queda folhas)', 'Plantação raiz nua (início)', 'Limpeza pomar (folhas doentes)', 'Adubação orgânica (composto)'], temp: '3°C a 13°C', precipitacao: 'Alta' },
                    12: { tarefas: ['Poda videira intensiva', 'Tratamento invernal cúprico', 'Proteção troncos (cal)', 'Revisão tutores e estacas'], temp: '-2°C a 10°C', precipitacao: 'Alta' }
                }
            },
            centro: {
                nome: '🏞️ Centro (Beira Litoral, Beira Interior)',
                clima: 'Mediterrânico temperado, verões quentes (15°C a 35°C)',
                meses: {
                    1: { tarefas: ['Poda pessegueiro/ameixeira', 'Plantação árvores raiz nua', 'Tratamentos bordalesa'], temp: '2°C a 14°C', precipitacao: 'Alta' },
                    2: { tarefas: ['Finalizar podas (exceto videira)', 'Enxertos de fenda', 'Correção pH solo'], temp: '4°C a 16°C', precipitacao: 'Moderada' },
                    3: { tarefas: ['Enxertos garfo', 'Adubação primaveril', 'Bordalesa preventiva (sarna)', 'Vigilância clima (geadas)'], temp: '8°C a 18°C', precipitacao: 'Moderada' },
                    4: { tarefas: ['Monda inicial', 'Controlo biológico (joaninhas)', 'Rega início (se necessário)', 'Tutores reforço'], temp: '10°C a 22°C', precipitacao: 'Moderada' },
                    5: { tarefas: ['Monda frutos (crucial)', 'Rega regular início', 'Vigilância oídio (enxofre)', 'Colheita cerejas'], temp: '14°C a 26°C', precipitacao: 'Baixa' },
                    6: { tarefas: ['Colheita pêssegos/ameixas', 'Rega 2x/semana', 'Controlo mosca fruta', 'Parar Azoto (N)'], temp: '18°C a 30°C', precipitacao: 'Muito Baixa' },
                    7: { tarefas: ['Colheita principal pêssego', 'Rega intensiva (stress hídrico)', 'Enxertos T-budding', 'Vigilância escaldão frutos'], temp: '20°C a 35°C', precipitacao: 'Muito Baixa' },
                    8: { tarefas: ['Colheita maçãs precoces', 'Manter rega constante', 'Controlo carpocapsa (2ª geração)', 'Preparar vindima'], temp: '20°C a 34°C', precipitacao: 'Muito Baixa' },
                    9: { tarefas: ['Vindima', 'Colheita maçã tardia', 'Redução rega gradual', 'Adubação outonal (P+K)'], temp: '16°C a 28°C', precipitacao: 'Baixa' },
                    10: { tarefas: ['Finalizar colheitas', 'Plantação novos pomares', 'Análise solo', 'Limpeza pomar'], temp: '12°C a 22°C', precipitacao: 'Moderada' },
                    11: { tarefas: ['Poda videira', 'Plantação raiz nua', 'Adubação orgânica', 'Correção solo (se análise indicar)'], temp: '7°C a 16°C', precipitacao: 'Alta' },
                    12: { tarefas: ['Poda invernal início', 'Tratamento cúprico', 'Proteção geadas (mudas)', 'Revisão infraestruturas'], temp: '4°C a 13°C', precipitacao: 'Alta' }
                }
            },
            sul: {
                nome: '☀️ Sul (Alentejo, Algarve)',
                clima: 'Mediterrânico quente, verões secos (18°C a 40°C)',
                meses: {
                    1: { tarefas: ['Poda citrinos (leve)', 'Plantação citrinos', 'Poda amendoeira'], temp: '8°C a 16°C', precipitacao: 'Moderada' },
                    2: { tarefas: ['Plantações continuam', 'Adubação citrinos (NPK)', 'Tratamentos preventivos'], temp: '9°C a 18°C', precipitacao: 'Moderada' },
                    3: { tarefas: ['Adubação citrinos (reforço)', 'Enxertos preparação', 'Rega início (se seco)', 'Controlo pulgões citrinos'], temp: '12°C a 22°C', precipitacao: 'Baixa' },
                    4: { tarefas: ['Monda citrinos', 'Rega regular essencial', 'Vigilância mosca mediterrânica', 'Preparar enxertos T-budding'], temp: '14°C a 25°C', precipitacao: 'Baixa' },
                    5: { tarefas: ['Rega ESSENCIAL (2-3x/semana)', 'Colheita laranjas tardias', 'Monda figueira', 'Mulching (conservar água)'], temp: '17°C a 28°C', precipitacao: 'Muito Baixa' },
                    6: { tarefas: ['Rega intensiva obrigatória', 'Colheita cerejas', 'Vigilância stress hídrico', 'Enxertos T-budding'], temp: '20°C a 33°C', precipitacao: 'Muito Baixa' },
                    7: { tarefas: ['Rega 3x/semana (mínimo)', 'Enxertos T-budding (ideal)', 'Colheita figos precoces', 'Vigilância escaldão'], temp: '23°C a 38°C', precipitacao: 'Nula' },
                    8: { tarefas: ['Manter rega intensiva', 'Colheita figos principal', 'Enxertos T-budding (final)', 'Proteção insolação direta'], temp: '23°C a 40°C', precipitacao: 'Nula' },
                    9: { tarefas: ['Colheita uvas', 'Redução rega gradual', 'Adubação outonal citrinos', 'Preparar plantações outono'], temp: '20°C a 34°C', precipitacao: 'Muito Baixa' },
                    10: { tarefas: ['Plantação citrinos (ideal)', 'Rega moderada', 'Preparar poda invernal', 'Análise solo'], temp: '16°C a 27°C', precipitacao: 'Baixa' },
                    11: { tarefas: ['Colheita citrinos início', 'Plantação árvores', 'Adubação orgânica', 'Limpeza pomar'], temp: '12°C a 21°C', precipitacao: 'Moderada' },
                    12: { tarefas: ['Colheita citrinos principal', 'Poda amendoeira', 'Tratamentos inverno', 'Proteção geadas (raras mas críticas)'], temp: '9°C a 17°C', precipitacao: 'Moderada' }
                }
            },
            acores: {
                nome: '🌊 Açores',
                clima: 'Oceânico húmido, temperaturas estáveis (12°C a 25°C)',
                meses: {
                    1: { tarefas: ['Poda leve (humidade constante)', 'Tratamento lepra PERSISTENTE', 'Drenagem revisão', 'Proteção ventos'], temp: '10°C a 15°C', precipitacao: 'Muito Alta' },
                    2: { tarefas: ['Tratamentos fungicidas frequentes', 'Plantação (escolher dias secos)', 'Vigilância lepra contínua'], temp: '10°C a 15°C', precipitacao: 'Muito Alta' },
                    3: { tarefas: ['Bordalesa preventiva OBRIGATÓRIA', 'Adubação (dias sem chuva)', 'Plantação prossegue', 'Tutores reforço (vento)'], temp: '11°C a 16°C', precipitacao: 'Alta' },
                    4: { tarefas: ['Vigilância lepra CRÍTICA', 'Tratamentos 15-20 dias', 'Monda conservadora', 'Proteção flores (vento)'], temp: '12°C a 17°C', precipitacao: 'Alta' },
                    5: { tarefas: ['Vigilância lepra continua', 'Monda (menos agressiva)', 'Rega (raramente necessária)', 'Controlo caracóis/lesmas'], temp: '13°C a 19°C', precipitacao: 'Moderada' },
                    6: { tarefas: ['Colheita cerejas (se houver)', 'Tratamentos fungicidas manter', 'Vigilância míldio videira', 'Drenagem (excesso água)'], temp: '15°C a 21°C', precipitacao: 'Moderada' },
                    7: { tarefas: ['Colheita frutos estio', 'Tratamentos fungicidas (não parar!)', 'Vigilância podridão frutos', 'Rega só se seco (raro)'], temp: '17°C a 24°C', precipitacao: 'Baixa' },
                    8: { tarefas: ['Colheita principal', 'Manter tratamentos preventivos', 'Controlo vespa (se presente)', 'Preparar vindima'], temp: '18°C a 25°C', precipitacao: 'Baixa' },
                    9: { tarefas: ['Colheita maçã', 'Vindima (variedades tardias)', 'Tratamentos fungicidas retomar', 'Adubação outonal'], temp: '17°C a 23°C', precipitacao: 'Moderada' },
                    10: { tarefas: ['Finalizar colheitas', 'Plantação (boa época)', 'Preparar inverno húmido', 'Limpeza pomar (folhas)'], temp: '15°C a 20°C', precipitacao: 'Alta' },
                    11: { tarefas: ['Poda videira', 'Tratamento lepra preventivo', 'Drenagem CRÍTICA', 'Plantação (dias secos)'], temp: '13°C a 17°C', precipitacao: 'Muito Alta' },
                    12: { tarefas: ['Poda invernal leve', 'Tratamentos cúpricos', 'Revisão drenagens', 'Proteção ventos invernais'], temp: '11°C a 15°C', precipitacao: 'Muito Alta' }
                }
            }
        };

        const nomesMeses = ['', 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

        function atualizarConteudo() {
            const regiao = dadosCalendario[regiaoAtual];
            const mes = regiao.meses[mesAtual];
            const conteudo = document.getElementById('calendario-conteudo');

            let tarefasHTML = mes.tarefas.map(t => `<li>${t}</li>`).join('');

            conteudo.innerHTML = `
                <div class="calendario-mes-info">
                    <h3>${nomesMeses[mesAtual]} - ${regiao.nome}</h3>
                    <div class="clima-mes">
                        <span class="clima-item"><strong>🌡️ Temperatura:</strong> ${mes.temp}</span>
                        <span class="clima-item"><strong>☔ Precipitação:</strong> ${mes.precipitacao}</span>
                    </div>
                </div>
                <div class="tarefas-mes">
                    <h4>✅ Tarefas Principais:</h4>
                    <ul>${tarefasHTML}</ul>
                </div>
                <div class="clima-geral">
                    <small><strong>Clima da região:</strong> ${regiao.clima}</small>
                </div>
            `;

            // Atualizar botões ativos
            document.querySelectorAll('.btn-regiao').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.regiao === regiaoAtual);
            });
            document.querySelectorAll('.btn-mes').forEach(btn => {
                btn.classList.toggle('active', parseInt(btn.dataset.mes) === mesAtual);
            });
        }

        // Eventos dos botões de região
        document.querySelectorAll('.btn-regiao').forEach(btn => {
            btn.addEventListener('click', function() {
                regiaoAtual = this.dataset.regiao;
                atualizarConteudo();
            });
        });

        // Eventos dos botões de mês
        document.querySelectorAll('.btn-mes').forEach(btn => {
            btn.addEventListener('click', function() {
                mesAtual = parseInt(this.dataset.mes);
                atualizarConteudo();
            });
        });

        // Navegação mês anterior/seguinte
        document.getElementById('mes-anterior').addEventListener('click', function() {
            mesAtual = mesAtual === 1 ? 12 : mesAtual - 1;
            atualizarConteudo();
        });

        document.getElementById('mes-seguinte').addEventListener('click', function() {
            mesAtual = mesAtual === 12 ? 1 : mesAtual + 1;
            atualizarConteudo();
        });

        // Inicializar com Norte/Janeiro
        atualizarConteudo();
    }

    // ============================================
    // 9. WIZARD DE DIAGNÓSTICO
    // ============================================
    const wizardContainer = document.getElementById('wizard-container');

    if (wizardContainer) {
        let passoAtual = 1;
        let historico = [];

        const perguntas = {
            1: {
                pergunta: 'Onde está o problema principal?',
                opcoes: [
                    { texto: '🍂 Folhas', proximo: 2 },
                    { texto: '🍎 Frutos', proximo: 3 },
                    { texto: '🌿 Crescimento/Planta', proximo: 4 },
                    { texto: '🐛 Insetos Visíveis', proximo: 5 }
                ]
            },
            2: { // Folhas
                pergunta: 'Que tipo de sintoma nas folhas?',
                opcoes: [
                    { texto: 'Manchas pretas/castanhas', resultado: 'folhas-manchas-escuras' },
                    { texto: 'Pó branco nas folhas', resultado: 'folhas-po-branco' },
                    { texto: 'Folhas amareladas', resultado: 'folhas-amarelas' },
                    { texto: 'Buracos ou folhas roídas', resultado: 'folhas-buracos' }
                ]
            },
            3: { // Frutos
                pergunta: 'Qual o problema nos frutos?',
                opcoes: [
                    { texto: 'Frutos pequenos ou deformados', resultado: 'frutos-pequenos' },
                    { texto: 'Frutos caem antes de maduros', resultado: 'frutos-caem' },
                    { texto: 'Manchas ou podridão', resultado: 'frutos-manchas' },
                    { texto: 'Buracos/galerias nos frutos', resultado: 'frutos-buracos' }
                ]
            },
            4: { // Crescimento
                pergunta: 'Descreva o problema de crescimento:',
                opcoes: [
                    { texto: 'Crescimento muito fraco', resultado: 'crescimento-fraco' },
                    { texto: 'Tronco com goma/exsudação', resultado: 'gomose' },
                    { texto: 'Sem flores ou muito poucas', resultado: 'sem-flores' },
                    { texto: 'Ramos secos ou murchos', resultado: 'ramos-secos' }
                ]
            },
            5: { // Insetos
                pergunta: 'Que tipo de insetos vê?',
                opcoes: [
                    { texto: 'Pulgões (verdes ou pretos)', resultado: 'pulgoes' },
                    { texto: 'Cochonilhas (escamas)', resultado: 'cochonilhas' },
                    { texto: 'Teias nas folhas', resultado: 'aranhico' },
                    { texto: 'Moscas ou vespas', resultado: 'moscas' }
                ]
            }
        };

        const diagnosticos = {
            'folhas-manchas-escuras': {
                nome: 'Doença Fúngica - Sarna ou Lepra',
                descricao: 'Manchas pretas/castanhas regulares indicam provavelmente Sarna (maçã/pera) ou Lepra (pessegueiro).',
                tratamento: [
                    'Remover folhas doentes do chão',
                    'Aplicar calda bordalesa preventiva (primavera)',
                    'Tratar com fungicida cúprico no inverno',
                    'Escolher variedades resistentes'
                ],
                preventivo: 'Tratamentos preventivos no inverno e primavera são essenciais.',
                severidade: 'alta'
            },
            'folhas-po-branco': {
                nome: 'Oídio',
                descricao: 'Pó branco nas folhas é característico de Oídio, uma doença fúngica comum.',
                tratamento: [
                    'Aplicar enxofre molhável',
                    'Melhorar circulação ar (poda)',
                    'Evitar rega foliar',
                    'Tratar preventivamente na primavera'
                ],
                preventivo: 'Aplicações de enxofre a cada 15 dias durante período húmido.',
                severidade: 'media'
            },
            'folhas-amarelas': {
                nome: 'Carência Nutricional',
                descricao: 'Folhas amareladas indicam carência de nutrientes, mais comummente Azoto (N) ou Ferro.',
                tratamento: [
                    'Se amarelo uniforme → Aplicar fertilizante rico em Azoto',
                    'Se nervuras verdes e resto amarelo → Clorose férrica (ferro)',
                    'Fazer análise de solo',
                    'Corrigir pH se necessário (ferro precisa pH 5.5-6.5)'
                ],
                preventivo: 'Adubação equilibrada na primavera e análise de solo anual.',
                severidade: 'media'
            },
            'folhas-buracos': {
                nome: 'Pragas - Lagartas ou Besouros',
                descricao: 'Buracos e folhas roídas indicam presença de lagartas ou besouros.',
                tratamento: [
                    'Inspeção manual e remoção',
                    'Bacillus thuringiensis (biológico para lagartas)',
                    'Armadilhas feromonas para adultos',
                    'Tratamento apenas se dano significativo'
                ],
                preventivo: 'Monitorizar regularmente, favorecer predadores naturais (pássaros).',
                severidade: 'baixa'
            },
            'frutos-pequenos': {
                nome: 'Excesso de Frutos ou Carência Nutricional',
                descricao: 'Frutos pequenos geralmente resultam de excesso de frutos ou falta de nutrientes.',
                tratamento: [
                    'Fazer monda (remover 30-50% dos frutos)',
                    'Aplicar fertilizante completo NPK',
                    'Garantir rega adequada',
                    'Árvores jovens (<3 anos): remover TODOS os frutos'
                ],
                preventivo: 'Monda obrigatória em maio-junho para frutos de qualidade.',
                severidade: 'media'
            },
            'frutos-caem': {
                nome: 'Stress Hídrico ou Carência de Potássio',
                descricao: 'Queda prematura de frutos indica falta de água ou carência de Potássio (K).',
                tratamento: [
                    'Aumentar frequência de rega',
                    'Aplicar fertilizante rico em Potássio (K)',
                    'Mulching para conservar humidade',
                    'Se em junho: pode ser queda fisiológica normal'
                ],
                preventivo: 'Rega regular no verão (2-3x/semana) e adubação potássica.',
                severidade: 'alta'
            },
            'frutos-manchas': {
                nome: 'Doenças Fúngicas nos Frutos',
                descricao: 'Manchas e podridão nos frutos indicam doenças fúngicas (moniliose, podridão).',
                tratamento: [
                    'Remover frutos doentes IMEDIATAMENTE',
                    'Aplicar fungicida apropriado',
                    'Melhorar ventilação (poda)',
                    'Não deixar frutos mumificados na árvore'
                ],
                preventivo: 'Tratamentos preventivos e remoção rápida de frutos afetados.',
                severidade: 'alta'
            },
            'frutos-buracos': {
                nome: 'Carpocapsa (Bichado)',
                descricao: 'Buracos e galerias nos frutos são causados por larvas de Carpocapsa (bichado).',
                tratamento: [
                    'Armadilhas feromonas para adultos',
                    'Ensacar frutos (método físico)',
                    'Tratamento com Bacillus thuringiensis',
                    'Remover frutos afetados'
                ],
                preventivo: 'Armadilhas desde abril, tratamentos nas épocas de voo dos adultos.',
                severidade: 'alta'
            },
            'crescimento-fraco': {
                nome: 'Carências Nutricionais Múltiplas',
                descricao: 'Crescimento fraco indica carências de nutrientes ou problemas de raiz.',
                tratamento: [
                    'Análise de solo (essencial)',
                    'Adubação completa NPK',
                    'Verificar drenagem (raízes podem estar asfixiadas)',
                    'Adicionar composto orgânico'
                ],
                preventivo: 'Análise de solo anual e adubação adequada.',
                severidade: 'alta'
            },
            'gomose': {
                nome: 'Gomose - Stress ou Doença Bacteriana',
                descricao: 'Exsudação de goma indica stress (água, feridas) ou cancro bacteriano.',
                tratamento: [
                    'Reduzir rega se solo encharcado',
                    'Limpar feridas e aplicar pasta cicatrizante',
                    'Se cancros visíveis: pode ser cancro bacteriano (grave)',
                    'Desinfectar ferramentas entre árvores'
                ],
                preventivo: 'Evitar feridas, rega adequada, poda higiénica.',
                severidade: 'alta'
            },
            'sem-flores': {
                nome: 'Falta de Frio Invernal ou Poda Incorreta',
                descricao: 'Ausência de flores indica falta de horas de frio ou poda excessiva.',
                tratamento: [
                    'Verificar se espécie adequada ao clima local',
                    'Reduzir poda (pode estar a remover gomos florais)',
                    'Não adubar com Azoto (N) no verão/outono',
                    'Escolher variedades de baixo frio se clima quente'
                ],
                preventivo: 'Escolher espécie adequada ao clima, poda correta.',
                severidade: 'media'
            },
            'ramos-secos': {
                nome: 'Seca de Ramos - Fúngica ou Vascular',
                descricao: 'Ramos secos podem indicar doença vascular ou stress hídrico severo.',
                tratamento: [
                    'Cortar ramos afetados (10-20cm abaixo da parte seca)',
                    'Desinfectar tesoura entre cortes (álcool 70%)',
                    'Queimar material removido',
                    'Melhorar rega se solo muito seco'
                ],
                preventivo: 'Poda sanitária, evitar feridas, rega adequada.',
                severidade: 'alta'
            },
            'pulgoes': {
                nome: 'Pulgões (Afídeos)',
                descricao: 'Pulgões são pragas sugadoras comuns, principalmente em ramos jovens.',
                tratamento: [
                    'Jato de água forte (remove fisicamente)',
                    'Joaninhas (predador natural)',
                    'Sabão potássico (biológico)',
                    'Tratamento químico só se infestação severa'
                ],
                preventivo: 'Favorecer predadores naturais, evitar Azoto excessivo.',
                severidade: 'baixa'
            },
            'cochonilhas': {
                nome: 'Cochonilhas',
                descricao: 'Cochonilhas são escamas que sugam seiva, enfraquecendo a árvore.',
                tratamento: [
                    'Remoção manual (escova)',
                    'Óleo mineral de inverno',
                    'Sabão potássico',
                    'Poda de ramos muito infestados'
                ],
                preventivo: 'Tratamento óleo mineral no inverno previne infestações.',
                severidade: 'media'
            },
            'aranhico': {
                nome: 'Aranhiço Vermelho',
                descricao: 'Teias finas nas folhas indicam aranhiço vermelho (ácaro).',
                tratamento: [
                    'Jato de água forte regular',
                    'Acaricida específico se severo',
                    'Enxofre molhável',
                    'Evitar stress hídrico (favorece ácaros)'
                ],
                preventivo: 'Rega adequada, predadores naturais (joaninhas também comem ácaros).',
                severidade: 'media'
            },
            'moscas': {
                nome: 'Mosca da Fruta ou Vespa Asiática',
                descricao: 'Moscas e vespas podem danificar frutos ou atacar colmeias.',
                tratamento: [
                    'Armadilhas com atrativos (proteína hidrolisada)',
                    'Ensacar frutos',
                    'Colheita atempada (não deixar frutos maduros)',
                    'Vespa asiática: reportar autoridades'
                ],
                preventivo: 'Armadilhas desde junho, higiene do pomar.',
                severidade: 'alta'
            }
        };

        function mostrarPergunta(numeroPergunta) {
            const perguntaObj = perguntas[numeroPergunta];
            document.getElementById('wizard-passo').textContent = `Passo ${passoAtual} de 3`;
            document.getElementById('wizard-pergunta').innerHTML = `<p class="question-text">${perguntaObj.pergunta}</p>`;

            const opcoesHTML = perguntaObj.opcoes.map((opcao, index) =>
                `<button class="btn-opcao" data-index="${index}">${opcao.texto}</button>`
            ).join('');

            document.getElementById('wizard-opcoes').innerHTML = opcoesHTML;

            // Event listeners para opções
            document.querySelectorAll('.btn-opcao').forEach(btn => {
                btn.addEventListener('click', function() {
                    const index = parseInt(this.dataset.index);
                    const opcao = perguntaObj.opcoes[index];

                    historico.push({ passo: numeroPergunta, opcao: index });

                    if (opcao.resultado) {
                        mostrarResultado(opcao.resultado);
                    } else {
                        passoAtual++;
                        mostrarPergunta(opcao.proximo);
                    }
                });
            });

            // Mostrar/esconder botão voltar
            document.getElementById('wizard-voltar').style.display = historico.length > 0 ? 'inline-block' : 'none';
        }

        function mostrarResultado(chave) {
            const diagnostico = diagnosticos[chave];
            document.getElementById('wizard-passo').textContent = '✅ Diagnóstico Completo';

            let severidadeClass = '';
            let severidadeTexto = '';
            if (diagnostico.severidade === 'alta') {
                severidadeClass = 'severidade-alta';
                severidadeTexto = '🔴 Alta';
            } else if (diagnostico.severidade === 'media') {
                severidadeClass = 'severidade-media';
                severidadeTexto = '🟡 Média';
            } else {
                severidadeClass = 'severidade-baixa';
                severidadeTexto = '🟢 Baixa';
            }

            const tratamentoHTML = diagnostico.tratamento.map(t => `<li>${t}</li>`).join('');

            document.getElementById('wizard-pergunta').style.display = 'none';
            document.getElementById('wizard-opcoes').style.display = 'none';
            document.getElementById('wizard-voltar').style.display = 'none';
            document.getElementById('wizard-reiniciar').style.display = 'inline-block';

            const resultado = document.getElementById('wizard-resultado');
            resultado.style.display = 'block';
            resultado.innerHTML = `
                <div class="resultado-diagnostico">
                    <h3>${diagnostico.nome}</h3>
                    <p class="severidade ${severidadeClass}"><strong>Severidade:</strong> ${severidadeTexto}</p>
                    <div class="diagnostico-descricao">
                        <p>${diagnostico.descricao}</p>
                    </div>
                    <div class="diagnostico-tratamento">
                        <h4>🛠️ Tratamento Recomendado:</h4>
                        <ul>${tratamentoHTML}</ul>
                    </div>
                    <div class="diagnostico-preventivo">
                        <p><strong>💡 Prevenção:</strong> ${diagnostico.preventivo}</p>
                    </div>
                    <div class="diagnostico-link">
                        <p><strong>📚 Mais informações:</strong> <a href="{{ '/praticas/doencas' | relative_url }}">Ver página completa de Doenças e Pragas</a></p>
                    </div>
                </div>
            `;

            resultado.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        function reiniciarWizard() {
            passoAtual = 1;
            historico = [];
            document.getElementById('wizard-pergunta').style.display = 'block';
            document.getElementById('wizard-opcoes').style.display = 'flex';
            document.getElementById('wizard-resultado').style.display = 'none';
            document.getElementById('wizard-reiniciar').style.display = 'none';
            mostrarPergunta(1);
        }

        function voltarPasso() {
            if (historico.length > 0) {
                historico.pop();
                passoAtual--;
                const ultimoPasso = historico.length > 0 ? historico[historico.length - 1].passo : 1;
                const proximoPasso = historico.length > 0 ? perguntas[ultimoPasso].opcoes[historico[historico.length - 1].opcao].proximo : 1;
                historico.pop();
                mostrarPergunta(proximoPasso);
            }
        }

        // Event listeners
        document.getElementById('wizard-reiniciar').addEventListener('click', reiniciarWizard);
        document.getElementById('wizard-voltar').addEventListener('click', voltarPasso);

        // Inicializar
        mostrarPergunta(1);
    }

});

// ============================================
// 7. BUSCA SIMPLES (Placeholder - expandir depois)
// ============================================
function performSearch(query) {
    // TODO: Implementar busca real
    console.log('Procurando por:', query);

    // Futuramente, integrar com Jekyll search ou Algolia
}

// ============================================
// 8. UTILITÁRIOS
// ============================================

// Debounce para otimizar eventos
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
