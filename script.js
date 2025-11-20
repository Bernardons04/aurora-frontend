const LS_KEY = 'fichaAurora_v2';

// --- DADOS DOS DONS ---
const DONS_DATA = {
  'Faísca de Fogo': {
    atributo: 'Destreza',
    linhas: {
      'Ataque': {
        titulo: 'Incendiário',
        poderes: [
          { nivel: 1, nome: 'Jato de Fagulhas', custo: '1 PD', acao: 'Padrão', desc: 'Cone de 5m. Reflexos (ND 10+INT) ou cego por 1 rodada. Inflamáveis pegam fogo.' },
          { nivel: 2, nome: 'Bola de Fogo', custo: '2 PD', acao: 'Padrão', desc: 'Explosão 6m raio a até 30m. 3d6 fogo. Reflexos (ND 10+INT) reduz metade.' },
          { nivel: 3, nome: 'Chicote Ígneo', custo: '2 PD', acao: 'Padrão', desc: 'Alcance 5m, dura 1 min. Ataque causa 2d6 fogo ou tenta desarmar/derrubar.' }
        ]
      },
      'Defesa': {
        titulo: 'Escudo de Calor',
        poderes: [
          { nivel: 1, nome: 'Aura Quente', custo: 'Passivo', acao: 'Passiva', desc: 'Quem te tocar sofre 1d4 de fogo (se você quiser).' },
          { nivel: 2, nome: 'Explosão Controlada', custo: '1 PD', acao: 'Movimento', desc: 'Move-se 15m (inclusive alto) sem atq oportunidade.' },
          { nivel: 3, nome: 'Corpo em Chamas', custo: '3 PD', acao: 'Padrão', desc: '1 min. Imune a fogo, emite luz. Toque/Atq corpo-a-corpo sofre 1d12 fogo. 3m raio sofre 1d4.' }
        ]
      },
      'Efeitos': {
        titulo: 'Artesão do Fogo',
        poderes: [
          { nivel: 1, nome: 'Moldar Fogo', custo: 'Passivo', acao: 'Padrão', desc: 'Controla chamas em 9m (cor, forma, intensidade).' },
          { nivel: 2, nome: 'Solda de Fogo', custo: '1 PD', acao: 'Padrão', desc: 'Solda metal, conserta itens ou cauteriza ferimentos (estabiliza).' },
          { nivel: 3, nome: 'Drenar Calor', custo: '2 PD', acao: 'Padrão', desc: 'Raio 9m. Apaga fogo não-mágico. Saúde (ND 10+INT) ou 1d8 frio.' }
        ]
      }
    }
  },
  'Controle Gravitacional': {
    atributo: 'Inteligência',
    linhas: {
      'Ataque': {
        titulo: 'Poço de Gravidade',
        poderes: [
          { nivel: 1, nome: 'Peso Morto', custo: '1 PD', acao: 'Padrão', desc: 'Alvo faz Força (ND 10+INT) ou tem -2 atq/defesa com item pesado.' },
          { nivel: 2, nome: 'Esmagamento Gravitacional', custo: '2 PD', acao: 'Padrão', desc: 'Raio 6m a até 15m. Força (ND 10+INT) ou puxado 3m e derrubado.' },
          { nivel: 3, nome: 'Singularidade', custo: '3 PD', acao: 'Padrão', desc: 'Alvo faz Força (ND 10+INT) ou fica Atordoado e Caído por 1 min (teste fim turno).' }
        ]
      },
      'Defesa': {
        titulo: 'Repulsor',
        poderes: [
          { nivel: 1, nome: 'Desvio Gravitacional', custo: '1 PD', acao: 'Reação', desc: 'Ao ser acertado, força inimigo a rolar novamente com -2.' },
          { nivel: 2, nome: 'Voo Controlado', custo: '1 PD', acao: 'Padrão', desc: 'Voa com deslocamento normal por 10 min.' },
          { nivel: 3, nome: 'Órbita de Detritos', custo: '2 PD', acao: 'Padrão', desc: 'Escudo por 1 min. +2 Defesa e 1d6 dano em quem atacar corpo-a-corpo.' }
        ]
      },
      'Efeitos': {
        titulo: 'Dobra-Espaço',
        poderes: [
          { nivel: 1, nome: 'Caminhar nas Paredes', custo: '1 PD', acao: 'Padrão', desc: 'Anda em paredes/tetos por 10 min.' },
          { nivel: 2, nome: 'Repulsão/Atração', custo: '1 PD', acao: 'Padrão', desc: '2 alvos se atraem ou repelem por 1 min. Força nega.' },
          { nivel: 3, nome: 'Distorção Temporal', custo: '3 PD', acao: 'Padrão', desc: 'Bolha 3m raio, 1 min. Velocidade metade, apenas 1 ação (Padrão ou Movimento).' }
        ]
      }
    }
  },
  'Manipular Luz': {
    atributo: 'Sabedoria',
    linhas: {
      'Ataque': {
        titulo: 'Lança do Sol',
        poderes: [
          { nivel: 1, nome: 'Flash Cegante', custo: '1 PD', acao: 'Padrão', desc: 'Raio 6m. Saúde (ND 10+SAB) ou cego 1 rodada.' },
          { nivel: 2, nome: 'Raio de Luz Sólida', custo: '2 PD', acao: 'Padrão', desc: 'Atq Pontaria (usando SAB) a 30m. 3d8 radiante.' },
          { nivel: 3, nome: 'Lâmina de Fótons', custo: '2 PD', acao: 'Padrão', desc: 'Espada de luz 1 min. Usa SAB para atq/dano. Dano radiante.' }
        ]
      },
      'Defesa': {
        titulo: 'Véu Luminoso',
        poderes: [
          { nivel: 1, nome: 'Deslocamento Visual', custo: '1 PD', acao: 'Padrão', desc: '1 min. Ataques contra você têm 20% chance de falha.' },
          { nivel: 2, nome: 'Escudo de Luz Sólida', custo: '1 PD', acao: 'Reação', desc: 'Ao ser atingido, ganha +5 Defesa contra aquele ataque.' },
          { nivel: 3, nome: 'Invisibilidade', custo: '2 PD', acao: 'Padrão', desc: 'Invisível 10 min. Acaba se atacar.' }
        ]
      },
      'Efeitos': {
        titulo: 'Ilusionista da Luz',
        poderes: [
          { nivel: 1, nome: 'Iluminação Controlada', custo: 'Passivo', acao: 'Padrão', desc: '4 globos de luz móveis.' },
          { nivel: 2, nome: 'Holograma', custo: '1 PD', acao: 'Padrão', desc: 'Imagem silenciosa objeto/criatura por 1 min.' },
          { nivel: 3, nome: 'Mensagem de Luz', custo: '1 PD', acao: 'Padrão', desc: 'Texto luminoso no ar visível apenas para o alvo.' }
        ]
      }
    }
  },
  'Troca de Posição': {
    atributo: 'Destreza',
    linhas: {
      'Ataque': {
        titulo: 'Estrategista do Caos',
        poderes: [
          { nivel: 1, nome: 'Troca Ambiental', custo: '1 PD', acao: 'Padrão', desc: 'Troca com objeto a 9m. Pode causar dano se perigoso.' },
          { nivel: 2, nome: 'Troca Tática', custo: '1 PD', acao: 'Padrão', desc: 'Troca com aliado/inimigo a 15m. Inimigo faz Vontade ou perde Movimento.' },
          { nivel: 3, nome: 'Troca em Cascata', custo: '2 PD', acao: 'Padrão', desc: 'Faz Troca Tática e imediatamente outra troca grátis.' }
        ]
      },
      'Defesa': {
        titulo: 'Guardião Sacrificial',
        poderes: [
          { nivel: 1, nome: 'Confusão de Objetos', custo: '1 PD', acao: 'Reação', desc: 'Troca arma de inimigo com outra arma visível.' },
          { nivel: 2, nome: 'Troca de Ameaça', custo: '2 PD', acao: 'Padrão', desc: 'Troca 2 inimigos a 15m. Vontade ou concedem vantagem.' },
          { nivel: 3, nome: 'Troca Negativa', custo: '2 PD', acao: 'Reação', desc: 'Troca projétil atacante com objeto pequeno próximo.' }
        ]
      },
      'Efeitos': {
        titulo: 'Trapaceiro do Espaço',
        poderes: [
          { nivel: 1, nome: 'Alcance Estendido', custo: 'Passivo', acao: 'Passiva', desc: 'Dobra alcance de habilidades de troca.' },
          { nivel: 2, nome: 'Troca com Objeto Peq.', custo: '1 PD', acao: 'Padrão', desc: 'Troca com objeto arremessado (teleporte).' },
          { nivel: 3, nome: 'Atravessar Barreira', custo: '2 PD', acao: 'Padrão', desc: 'Troca através de barreiras transparentes (vidro, grades).' }
        ]
      }
    }
  },
  'Ilusão Mental': {
    atributo: 'Carisma',
    linhas: {
      'Ataque': {
        titulo: 'Fantasma Maligno',
        poderes: [
          { nivel: 1, nome: 'Imagem Aterradora', custo: '1 PD', acao: 'Padrão', desc: 'Vontade (ND 10+CAR) ou amedrontado 1 min (foge).' },
          { nivel: 2, nome: 'Adaga Mental', custo: '2 PD', acao: 'Padrão', desc: 'Ataque mental a 15m. 2d10 psíquico.' },
          { nivel: 3, nome: 'Exército Ilusório', custo: '3 PD', acao: 'Padrão', desc: '5 cópias por 1 min. Chance de ataque errar e dissipar cópia.' }
        ]
      },
      'Defesa': {
        titulo: 'Mestre do Disfarce',
        poderes: [
          { nivel: 1, nome: 'Invisibilidade Pessoal', custo: '1 PD', acao: 'Padrão', desc: 'Invisível para UM alvo por 1 min. Acaba se atacar.' },
          { nivel: 2, nome: 'Deslocamento', custo: '1 PD', acao: 'Padrão', desc: '1 min. Ataques contra você têm 50% chance de erro.' },
          { nivel: 3, nome: 'Cenário Falso', custo: '2 PD', acao: 'Padrão', desc: 'Altera percepção de área 9m por 10 min (parede falsa, fosso, etc).' }
        ]
      },
      'Efeitos': {
        titulo: 'Manipulador Sutil',
        poderes: [
          { nivel: 1, nome: 'Disfarce Ilusório', custo: '1 PD', acao: 'Padrão', desc: 'Muda aparência/voz por 1 hora.' },
          { nivel: 2, nome: 'Som Ilusório', custo: '1 PD', acao: 'Padrão', desc: 'Cria qualquer som a 30m por 1 min.' },
          { nivel: 3, nome: 'Sugestão Plantada', custo: '2 PD', acao: 'Padrão', desc: 'Vontade (ND 10+CAR) ou segue sugestão não-suicida.' }
        ]
      }
    }
  }
};

// Toast estilizado RPG Aurora
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2200,
  timerProgressBar: true,
  background: 'rgba(255, 248, 230, 0.95)',
  color: '#3a2a00',
  iconColor: '#bfa544',
  customClass: {
    popup: 'aurora-toast-popup',
    title: 'aurora-toast-title',
    timerProgressBar: 'aurora-toast-progress'
  }
});

// ========= SUPABASE CLIENT =========
const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

new Vue({
  el: '#app',
  data: {
    editMode: false,
    theme: 'light',
    originalSnapshot: '',
    placeholder: 'assets/default-avatar.png',
    personagem: {
      nome: '',
      dom: '',
      origem: '',
      foto: '',
      atributos: { for: 0, des: 0, sau: 0, int: 0, sab: 0, car: 0 },
      pv: { max: 0, atual: 0 },
      pd: { max: 0, atual: 0 },
      defesa: { armadura: 0, escudo: 0, outros: 0 },
      ataques: [],
      habilidades: [],
      equipamentos: [],
      poderes: [],
      mo: 0,
      peso: 0,
      nivel: 1
    },
    novoAtaque: { nome: '', teste: '', dano: '', tipo: '', critico: '', alcance: '' },
    novaHab: '', novoItem: '',
    dons: [
      'Manipular Luz',
      'Controle Gravitacional',
      'Faísca de Fogo',
      'Troca de Posição',
      'Ilusão Mental'
    ],
    origens: [
      { nome: 'Guarda da Cidade', skills: ['Luta', 'Percepção'] },
      { nome: 'Caçador', skills: ['Pontaria', 'Sobrevivência'] },
      { nome: 'Nobre', skills: ['Diplomacia', 'Nobreza'] },
      { nome: 'Mercenário', skills: ['Luta', 'Intimidação'] },
      { nome: 'Rato de Beco', skills: ['Furtividade', 'Ladinagem'] },
      { nome: 'Erudito', skills: ['Conhecimento', 'Investigação'] },
      { nome: 'Ferreiro', skills: ['Atletismo', 'Ofício'] },
      { nome: 'Curandeiro', skills: ['Cura', 'Ofício'] },
      { nome: 'Artista de Rua', skills: ['Atuação', 'Enganação'] },
      { nome: 'Marinheiro', skills: ['Atletismo', 'Reflexos'] },
      { nome: 'Soldado', skills: ['Luta', 'Guerra'] },
      { nome: 'Batedor', skills: ['Sobrevivência', 'Percepção'] },
      { nome: 'Acólito', skills: ['Religião', 'Intuição'] },
      { nome: 'Charlatão', skills: ['Enganação', 'Jogatina'] },
      { nome: 'Gladiador', skills: ['Luta', 'Atuação'] },
      { nome: 'Artesão', skills: ['Ofício', 'Percepção'] },
      { nome: 'Fazendeiro', skills: ['Vontade', 'Adestramento'] },
      { nome: 'Assassino de Guilda', skills: ['Furtividade', 'Iniciativa'] },
      { nome: 'Investigador', skills: ['Investigação', 'Intuição'] },
      { nome: 'Membro de Tribo', skills: ['Sobrevivência', 'Intimidação'] }
    ],
    appliedOriginSkills: [],
    pericias: [
      { nome: 'Acrobacia', atrib: 'DES', halfLevel: 0, atributo: 0, treino: 0, outros: 0 },
      { nome: 'Adestramento', atrib: 'CAR', halfLevel: 0, atributo: 0, treino: 0, outros: 0 },
      { nome: 'Atletismo', atrib: 'FOR', halfLevel: 0, atributo: 0, treino: 0, outros: 0 },
      { nome: 'Atuação', atrib: 'CAR', halfLevel: 0, atributo: 0, treino: 0, outros: 0 },
      { nome: 'Cavalgar', atrib: 'DES', halfLevel: 0, atributo: 0, treino: 0, outros: 0 },
      { nome: 'Conhecimento', atrib: 'INT', halfLevel: 0, atributo: 0, treino: 0, outros: 0 },
      { nome: 'Cura', atrib: 'SAB', halfLevel: 0, atributo: 0, treino: 0, outros: 0 },
      { nome: 'Diplomacia', atrib: 'CAR', halfLevel: 0, atributo: 0, treino: 0, outros: 0 },
      { nome: 'Enganação', atrib: 'CAR', halfLevel: 0, atributo: 0, treino: 0, outros: 0 },
      { nome: 'Fortitude', atrib: 'SAU', halfLevel: 0, atributo: 0, treino: 0, outros: 0 },
      { nome: 'Furtividade', atrib: 'DES', halfLevel: 0, atributo: 0, treino: 0, outros: 0 },
      { nome: 'Guerra', atrib: 'INT', halfLevel: 0, atributo: 0, treino: 0, outros: 0 },
      { nome: 'Iniciativa', atrib: 'DES', halfLevel: 0, atributo: 0, treino: 0, outros: 0 },
      { nome: 'Intimidação', atrib: 'CAR', halfLevel: 0, atributo: 0, treino: 0, outros: 0 },
      { nome: 'Intuição', atrib: 'SAB', halfLevel: 0, atributo: 0, treino: 0, outros: 0 },
      { nome: 'Investigação', atrib: 'INT', halfLevel: 0, atributo: 0, treino: 0, outros: 0 },
      { nome: 'Jogatina', atrib: 'CAR', halfLevel: 0, atributo: 0, treino: 0, outros: 0 },
      { nome: 'Ladinagem', atrib: 'DES', halfLevel: 0, atributo: 0, treino: 0, outros: 0 },
      { nome: 'Luta', atrib: 'FOR', halfLevel: 0, atributo: 0, treino: 0, outros: 0 },
      { nome: 'Misticismo', atrib: 'INT', halfLevel: 0, atributo: 0, treino: 0, outros: 0 },
      { nome: 'Nobreza', atrib: 'INT', halfLevel: 0, atributo: 0, treino: 0, outros: 0 },
      { nome: 'Ofício', atrib: 'INT', halfLevel: 0, atributo: 0, treino: 0, outros: 0 },
      { nome: 'Percepção', atrib: 'SAB', halfLevel: 0, atributo: 0, treino: 0, outros: 0 },
      { nome: 'Pilotagem', atrib: 'DES', halfLevel: 0, atributo: 0, treino: 0, outros: 0 },
      { nome: 'Pontaria', atrib: 'DES', halfLevel: 0, atributo: 0, treino: 0, outros: 0 },
      { nome: 'Reflexos', atrib: 'DES', halfLevel: 0, atributo: 0, treino: 0, outros: 0 },
      { nome: 'Religião', atrib: 'SAB', halfLevel: 0, atributo: 0, treino: 0, outros: 0 },
      { nome: 'Sobrevivência', atrib: 'SAB', halfLevel: 0, atributo: 0, treino: 0, outros: 0 },
      { nome: 'Vontade', atrib: 'SAB', halfLevel: 0, atributo: 0, treino: 0, outros: 0 }
    ],
    activeTab: 'ficha',
    notas: '',
    showAuth: false,
    user: null
  },

  computed: {
    currentDomData() {
      return DONS_DATA[this.personagem.dom] || null;
    },
    pontosGastos() {
      return this.personagem.poderes ? this.personagem.poderes.length : 0;
    },
    pontosDisponiveis() {
      const nivel = Number(this.personagem.nivel) || 1;
      return nivel - this.pontosGastos;
    },
    bonusDestreza() {
      const des = Number(this.personagem.atributos.des) || 0
      return des - 10
    },
    totalAtributos() {
      const attrs = this.personagem.atributos;
      return (attrs.for || 0) +
        (attrs.des || 0) +
        (attrs.sau || 0) +
        (attrs.int || 0) +
        (attrs.sab || 0) +
        (attrs.car || 0);
    },
    totalDefesa() {
      const d = this.personagem.defesa
      return 10 + this.bonusDestreza +
        (Number(d.armadura) || 0) +
        (Number(d.escudo) || 0) +
        (Number(d.outros) || 0)
    },
    halfLevelValue() {
      return Math.floor((this.personagem.nivel || 0) / 2)
    }
  },

  watch: {
    'personagem.atributos.for': 'refreshPericiaAtributos',
    'personagem.atributos.des': 'refreshPericiaAtributos',
    'personagem.atributos.sau': 'refreshPericiaAtributos',
    'personagem.atributos.int': 'refreshPericiaAtributos',
    'personagem.atributos.sab': 'refreshPericiaAtributos',
    'personagem.atributos.car': 'refreshPericiaAtributos',
    notas() { this.$nextTick(() => this.autoGrowNotes()) },
    activeTab(newTab) {
      if (newTab === 'notas') this.$nextTick(() => this.autoGrowNotes())
    }
  },

  mounted() {
    // 1. Listener de auth (o mesmo de antes)
    supabaseClient.auth.onAuthStateChange((event, session) => {
      this.user = session?.user ?? null;
      if (event === 'SIGNED_IN' && !window.location.pathname.includes('ficha.html')) {
        window.location.replace('ficha.html');
      }
      if (event === 'SIGNED_OUT' && !window.location.pathname.includes('index.html')) {
        window.location.replace('index.html');
      }
    });

    // 2. Verifica sessão
    supabaseClient.auth.getSession().then(({ data: { session } }) => {
      this.user = session?.user ?? null;

      if (this.user && !window.location.pathname.includes('ficha.html')) {
        window.location.replace('ficha.html');
      } else if (!this.user && window.location.pathname.includes('ficha.html')) {
        window.location.replace('index.html');
      } else {
        this.initApp();
      }
    });
  },

  created() {
    const saved = localStorage.getItem('aurora.theme');
    if (saved) this.theme = saved;
    else if (window.matchMedia('(prefers-color-scheme: dark)').matches) this.theme = 'dark';
    this.applyTheme();

    this.refreshPericiaAtributos();
  },

  methods: {
    hasPower(nome) {
      return this.personagem.poderes && this.personagem.poderes.includes(nome);
    },
    canBuy(poder, tipoLinha) {
      // Se já tem, não pode comprar (mas pode ver)
      if (this.hasPower(poder.nome)) return false;

      // Verifica pontos
      if (this.pontosDisponiveis <= 0) return false;

      // Nível 1 está sempre liberado se tiver pontos
      if (poder.nivel === 1) return true;

      // Nível 2+ precisa do nível anterior da MESMA linha
      const linha = this.currentDomData.linhas[tipoLinha];
      const poderAnterior = linha.poderes.find(p => p.nivel === poder.nivel - 1);

      return poderAnterior && this.hasPower(poderAnterior.nome);
    },
    async togglePower(poder, tipoLinha) {
      // Inicializa array se não existir
      if (!this.personagem.poderes) this.$set(this.personagem, 'poderes', []);
      // Garante que habilidades existe
      if (!this.personagem.habilidades) this.$set(this.personagem, 'habilidades', []);

      const index = this.personagem.poderes.indexOf(poder.nome);

      // REMOVER PODER
      if (index > -1) {
        // Verifica se é pré-requisito para outro (não pode remover se tiver o próximo)
        const linha = this.currentDomData.linhas[tipoLinha];
        const proximoPoder = linha.poderes.find(p => p.nivel === poder.nivel + 1);

        if (proximoPoder && this.hasPower(proximoPoder.nome)) {
          Toast.fire({ icon: 'warning', title: 'Remova o nível superior primeiro!' });
          return;
        }

        this.personagem.poderes.splice(index, 1);

        // Remove também da lista de Habilidades
        const habIndex = this.personagem.habilidades.indexOf(poder.nome);
        if (habIndex > -1) this.personagem.habilidades.splice(habIndex, 1);

        if (this.user) {
          await this.saveToSupabase();
          this.originalSnapshot = JSON.stringify(this.serialize()); // atualiza snapshot para não aparecer como "modificado"
          // Toast.fire({ icon: 'info', title: 'Poder removido e salvo na nuvem!' });
        }
        else {
          Toast.fire({ icon: 'info', title: 'Poder removido (offline)' });
        }
        return;
      }

      // === ADICIONAR PODER ===
      if (!this.canBuy(poder, tipoLinha)) {
        if (this.pontosDisponiveis <= 0) {
          Swal.fire({
            icon: 'error',
            title: 'Pontos insuficientes!',
            showConfirmButton: true,
          });
        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'Pré-requisito não atendido!',
            showConfirmButton: true,
          });
        }
        return;
      }

      // Adiciona o poder
      this.personagem.poderes.push(poder.nome);
      if (!this.personagem.habilidades.includes(poder.nome)) {
        this.personagem.habilidades.push(poder.nome);
      }

      // Salva imediatamente no Supabase
      if (this.user) {
        await this.saveToSupabase();
        this.originalSnapshot = JSON.stringify(this.serialize());
        // Toast.fire({ icon: 'success', title: 'Poder aprendido e salvo na nuvem!' });
      } else {
        Toast.fire({ icon: 'success', title: 'Poder aprendido!' });
      }
    },
    initApp() {
      if (this.user && window.location.pathname.includes('ficha.html')) {
        this.loadFromSupabase();
      }
    },

    async openAuth() {
      const redirectUrl = new URL('ficha.html', window.location.href);
      await supabaseClient.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: redirectUrl.toString() }
      });
    },

    async logout() {
      await supabaseClient.auth.signOut();
      window.location.replace('index.html');
    },

    // ========= SUPABASE =========
    async saveToSupabase() {
      if (!this.user) return
      const payload = this.serialize()
      const { error } = await supabaseClient
        .from('fichas')
        .upsert({ user_id: this.user.id, ficha_json: payload }, { onConflict: 'user_id' })
      if (error) {
        console.error(error)
        Swal.fire({
          icon: 'error',
          title: 'Erro ao salvar na nuvem!',
          showConfirmButton: true,
        });
      }
    },

    async loadFromSupabase() {
      if (!this.user) return;

      const { data, error } = await supabaseClient
        .from('fichas')
        .select('ficha_json')
        .eq('user_id', this.user.id)
        .maybeSingle();

      if (error && error.code !== 'PGRST116') {
        console.error('Erro ao carregar ficha:', error);
        Toast.fire({ icon: 'warning', title: 'Erro ao carregar da nuvem' });
        return;
      }

      if (data?.ficha_json) {
        this.writeFrom(data.ficha_json);
        this.originalSnapshot = JSON.stringify(this.serialize());
        // Toast.fire({ icon: 'success', title: 'Ficha carregada da nuvem!' });
      }
      else {
        // Primeira vez: ficha vazia (deixa como está)
        Toast.fire({ icon: 'info', title: 'Nova ficha criada!' });
      }
    },

    // ========= AVATAR =========
    async uploadAvatarIfNeeded() {
      if (!this.user) {
        Toast.fire({ icon: 'warning', title: 'Faça login para salvar o avatar' })
        return
      }
      if (!this.personagem.foto || this.personagem.foto.startsWith('http')) return

      try {
        const resp = await fetch(this.personagem.foto)
        const blob = await resp.blob()
        const path = `${this.user.id}/avatar`

        const { error } = await supabaseClient.storage
          .from('avatars')
          .upload(path, blob, { upsert: true, contentType: blob.type })

        if (error && !error.message.includes('duplicate')) throw error

        const { data: { publicUrl } } = supabaseClient.storage.from('avatars').getPublicUrl(path)
        this.personagem.foto = publicUrl
        Toast.fire({ icon: 'success', title: 'Avatar salvo!' })
      }
      catch (e) {
        console.error(e)
        Swal.fire({
          icon: 'error',
          title: 'Erro no avatar!',
          showConfirmButton: true,
        });
      }
    },

    // ========= SALVAR =========
    async saveAndExport() {
      if (!this.hasChanges()) {
        this.editMode = false;
        return;
      }

      await this.uploadAvatarIfNeeded();
      await this.saveToSupabase();  // ← única fonte da verdade agora

      this.originalSnapshot = JSON.stringify(this.serialize());
      this.editMode = false;
      Toast.fire({ icon: 'success', title: 'Ficha salva na nuvem!' });
    },

    // ========= DEMAIS MÉTODOS (mantidos 100% iguais) =========
    autoGrowNotes() {
      const ta = this.$refs.notesArea
      if (!ta) return
      ta.style.height = 'auto'
      ta.style.height = ta.scrollHeight + 'px'
    },
    setTab(tab) {
      this.activeTab = tab
      if (tab === 'notas') this.$nextTick(() => this.autoGrowNotes())
    },
    applyOriginBonuses() {
      if (this.appliedOriginSkills.length) {
        this.appliedOriginSkills.forEach(nome => {
          const p = this.pericias.find(x => x.nome === nome)
          if (p) p.treino = Math.max(0, (p.treino || 0) - 1)
        })
        this.appliedOriginSkills = []
      }
      const sel = this.origens.find(o => o.nome === this.personagem.origem)
      if (!sel) return
      const applied = []
      sel.skills.forEach(skillName => {
        const match = this.pericias.find(p =>
          p.nome === skillName || (skillName.startsWith('Ofício') && p.nome === 'Ofício')
        )
        if (match) {
          match.treino = (match.treino || 0) + 1
          applied.push(match.nome)
        }
      })
      this.appliedOriginSkills = applied
      // this.save()
    },
    toggleTheme() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark'
      this.applyTheme()
      localStorage.setItem('aurora.theme', this.theme)
    },
    applyTheme() {
      document.body.classList.toggle('theme-dark', this.theme === 'dark')
    },
    toggleEdit() {
      this.editMode = true;
      this.originalSnapshot = JSON.stringify(this.serialize());
    },
    hasChanges() {
      return JSON.stringify(this.serialize()) !== this.originalSnapshot;
    },
    cancelEdit() {
      this.loadFromSupabase();
      this.editMode = false;
    },
    carregarFoto(e) {
      const f = e.target.files[0];
      if (!f) return;
      const reader = new FileReader();
      reader.onload = () => { this.personagem.foto = reader.result; };
      reader.readAsDataURL(f);
    },
    adicionarAtaque() {
      if (!this.novoAtaque.nome) return;
      this.personagem.ataques.push({ ...this.novoAtaque });
      this.novoAtaque = { nome: '', teste: '', dano: '', tipo: '', critico: '', alcance: '' };
    },
    removerAtaque(i) {
      this.personagem.ataques.splice(i, 1);
    },
    adicionarHab() {
      if (!this.novaHab) return;
      this.personagem.habilidades.push(this.novaHab);
      this.novaHab = '';
    },
    removerHab(i) {
      this.personagem.habilidades.splice(i, 1);
    },
    addItem() {
      if (!this.novoItem) return;
      this.personagem.equipamentos.push(this.novoItem);
      this.novoItem = '';
    },
    delItem(i) {
      this.personagem.equipamentos.splice(i, 1);
    },

    attrBonus(score) {
      return (Number(score) || 0) - 10;
    },
    attrBonusFromSigla(sigla) {
      const map = { FOR: 'for', DES: 'des', SAU: 'sau', INT: 'int', SAB: 'sab', CAR: 'car' };
      const key = map[sigla.toUpperCase()] || '';
      return this.attrBonus(this.personagem.atributos[key]);
    },
    refreshPericiaAtributos() {
      this.pericias.forEach(p => {
        p.atributo = this.attrBonusFromSigla(p.atrib);
      });
    },
    totalPericia(p) {
      const hl = this.halfLevelValue;
      const at = this.attrBonusFromSigla(p.atrib);
      const tr = Number(p.treino) || 0;
      const ot = Number(p.outros) || 0;
      return hl + at + tr + ot;
    },

    exportJson() {
      const data = this.serialize();
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = (this.personagem.nome || 'ficha') + '.json';
      a.click();
      URL.revokeObjectURL(url);
    },

    handleImport(e) {
      const f = e.target.files[0];
      if (!f) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const obj = JSON.parse(reader.result);
          this.writeFrom(obj);
          this.save();
          Toast.fire({ icon: 'success', title: 'Ficha importada!' });
        }
        catch (err) {
          Swal.fire({
            icon: 'error',
            title: 'JSON inválido!',
            showConfirmButton: true,
          });
        }
      };
      reader.readAsText(f);
      e.target.value = '';
    },

    serialize() {
      return {
        personagem: this.personagem,
        pericias: this.pericias,
        appliedOriginSkills: this.appliedOriginSkills,
        notas: this.notas
      };
    },

    writeFrom(obj) {
      if (obj.personagem) {
        this.personagem = Object.assign(this.personagem, obj.personagem);
        // Garante que o array de poderes exista
        if (!this.personagem.poderes) this.$set(this.personagem, 'poderes', []);
      }
      if (obj.pericias) this.pericias = obj.pericias;
      if (obj.appliedOriginSkills) this.appliedOriginSkills = obj.appliedOriginSkills;
      if (obj.hasOwnProperty('notas')) this.notas = obj.notas || '';
    }
  }
})
