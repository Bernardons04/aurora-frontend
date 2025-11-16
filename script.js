const LS_KEY = 'fichaAurora_v2';

// Toast estilizado RPG Aurora
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2200,
    timerProgressBar: true,
    background: 'rgba(255, 248, 230, 0.95)', // pergaminho claro
    color: '#3a2a00', // marrom medieval
    iconColor: '#bfa544', // dourado Aurora
    customClass: {
        popup: 'aurora-toast-popup',
        title: 'aurora-toast-title',
        timerProgressBar: 'aurora-toast-progress'
    }
});

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
            atributos: {
                for: 0,
                des: 0,
                sau: 0,
                int: 0,
                sab: 0,
                car: 0
            },
            pv: {
                max: 0,
                atual: 0
            },
            pd: {
                max: 0,
                atual: 0
            },
            defesa: { armadura: 0, escudo: 0, outros: 0 },
            ataques: [],
            habilidades: [],
            equipamentos: [],
            mo: 0,
            peso: 0,
            nivel: 1 
        },
        novoAtaque: { nome: '', teste: '', dano: '', tipo: '', critico: '', alcance: '' },
        novaHab: '', novoItem: '',
        origens: [
            { nome: 'Guarda da Cidade', skills: ['Luta', 'Percepção'] },
            { nome: 'Caçador', skills: ['Pontaria', 'Sobrevivência'] },
            { nome: 'Nobre', skills: ['Diplomacia', 'Nobreza'] },
            { nome: 'Mercenário', skills: ['Luta', 'Intimidação'] },
            { nome: 'Rato de Beco', skills: ['Furtividade', 'Ladinagem'] },
            { nome: 'Erudito', skills: ['Conhecimento', 'Investigação'] },
            { nome: 'Ferreiro', skills: ['Atletismo', 'Ofício'] },            // Metalurgia -> Ofício
            { nome: 'Curandeiro', skills: ['Cura', 'Ofício'] },                // Herbalismo -> Ofício
            { nome: 'Artista de Rua', skills: ['Atuação', 'Enganação'] },
            { nome: 'Marinheiro', skills: ['Atletismo', 'Reflexos'] },
            { nome: 'Soldado', skills: ['Luta', 'Guerra'] },
            { nome: 'Batedor', skills: ['Sobrevivência', 'Percepção'] },
            { nome: 'Acólito', skills: ['Religião', 'Intuição'] },
            { nome: 'Charlatão', skills: ['Enganação', 'Jogatina'] },
            { nome: 'Gladiador', skills: ['Luta', 'Atuação'] },
            { nome: 'Artesão', skills: ['Ofício', 'Percepção'] },             // Ofício à escolha -> Ofício
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
    },
    computed: {
        bonusDestreza() {
            const des = Number(this.personagem.atributos.des) || 0;
            return des - 10; // regra linear de bônus
        },
        totalDefesa() {
            const d = this.personagem.defesa;
            return 10 + this.bonusDestreza +
                (Number(d.armadura) || 0) +
                (Number(d.escudo) || 0) +
                (Number(d.outros) || 0);
        },
          halfLevelValue() {
            const n = Number(this.personagem.nivel) || 0;
            return Math.floor(n / 2);
        },
    },
    watch: {
        'personagem.atributos.for': 'refreshPericiaAtributos',
        'personagem.atributos.des': 'refreshPericiaAtributos',
        'personagem.atributos.sau': 'refreshPericiaAtributos',
        'personagem.atributos.int': 'refreshPericiaAtributos',
        'personagem.atributos.sab': 'refreshPericiaAtributos',
        'personagem.atributos.car': 'refreshPericiaAtributos',
         notas() { this.$nextTick(() => this.autoGrowNotes()); } 
    },
    mounted() {
        try {
            const saved = localStorage.getItem('aurora.theme');
            if (saved) this.theme = saved;
            else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                this.theme = 'dark';
            }
        } catch (e) { }
        this.applyTheme();
        this.$nextTick(() => this.autoGrowNotes());
    },
    created() {
        this.load();
        this.refreshPericiaAtributos();
    },
    methods: {
        autoGrowNotes() {
            const ta = this.$refs.notesArea;
            if (!ta) return;
            ta.style.height = 'auto';
            ta.style.height = ta.scrollHeight + 'px';
        },
        setTab(tab) { this.activeTab = tab; },
        applyOriginBonuses() {
            // reverte bônus anterior, se houver
            if (this.appliedOriginSkills.length) {
                this.appliedOriginSkills.forEach(nome => {
                    const p = this.pericias.find(x => x.nome === nome);
                    if (p) p.treino = Math.max(0, (Number(p.treino) || 0) - 1);
                });
                this.appliedOriginSkills = [];
            }

            const sel = this.origens.find(o => o.nome === this.personagem.origem);
            if (!sel) return;

            const applied = [];
            sel.skills.forEach(skillName => {
                // mapeia especializações de Ofício para "Ofício" genérico da ficha
                const match = this.pericias.find(p =>
                    p.nome === skillName || (skillName.startsWith('Ofício') && p.nome === 'Ofício')
                );
                if (match) {
                    match.treino = (Number(match.treino) || 0) + 1;
                    applied.push(match.nome);
                }
            });

            this.appliedOriginSkills = applied;
            // persiste junto com a ficha
            this.save();
        },
        toggleTheme() {
            this.theme = this.theme === 'dark' ? 'light' : 'dark';
            this.applyTheme();
            try { localStorage.setItem('aurora.theme', this.theme); } catch (e) { }
        },
        applyTheme() {
            document.body.classList.toggle('theme-dark', this.theme === 'dark');
        },
        async uploadAvatarIfNeeded() {
            const foto = this.personagem.foto;

            // 1. Se não tem imagem → não faz nada
            if (!foto) return;

            // 2. Se já é link (começa com http) → não precisa fazer upload
            if (foto.startsWith("http")) {
                return;
            }

            // 3. É base64 → enviar pro backend
            try {
                const formData = new FormData();

                // Converter base64 → arquivo
                const res = await fetch(foto);
                const blob = await res.blob();
                const file = new File([blob], "avatar.png", { type: blob.type });

                formData.append("avatar", file);

                const uploadRes = await fetch("https://aurora-backend-8xda.onrender.com/upload-avatar", {
                    method: "POST",
                    body: formData
                });

                const data = await uploadRes.json();

                if (data.url) {
                    this.personagem.foto = data.url;
                    console.log("Avatar enviado:", data.url);
                }

            } catch (err) {
                console.error("Erro ao enviar avatar:", err);
                Toast.fire({ icon: 'error', title: 'Erro ao enviar avatar!' });
            }
        },

        toggleEdit() {
            this.editMode = true;
            this.originalSnapshot = JSON.stringify(this.serialize());
        },

        hasChanges() {
            const current = JSON.stringify(this.serialize());
            return current !== this.originalSnapshot;
        },

        cancelEdit() {
            this.load();
            this.editMode = false;
        },

        async saveAndExport() {
            if (!this.hasChanges()) {
                this.editMode = false;
                return;
            }
            await this.uploadAvatarIfNeeded();
            this.save();
            this.editMode = false;
        },

        carregarFoto(e) {
            const f = e.target.files[0]; if (!f) return;
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
        delItem(i) { this.personagem.equipamentos.splice(i, 1); },

        atribFromChar(code) { // tenta preencher atributo a partir dos atributos do personagem
            const map = { 'FOR': 'for', 'DES': 'des', 'SAU': 'sau', 'INT': 'int', 'SAB': 'sab', 'CAR': 'car' };
            const k = map[code] || map[code.toUpperCase()];
            if (!k) return '';
            return this.personagem.atributos[k] || 0;
        },

       attrBonus(score) {
            return (Number(score) || 0) - 10; // regra: bônus = atributo - 10
        },
        attrBonusFromSigla(sigla) {
            const map = { FOR: 'for', DES: 'des', SAU: 'sau', INT: 'int', SAB: 'sab', CAR: 'car' };
            const key = map[sigla.toUpperCase()] || '';
            return this.attrBonus(this.personagem.atributos[key]);
        },
        refreshPericiaAtributos() {
            // mantém campo p.atributo sincronizado (se quiser usar em export)
            this.pericias.forEach(p => {
                p.atributo = this.attrBonusFromSigla(p.atrib);
            });
        },

        totalPericia(p) {
            const hl = this.halfLevelValue;
            const at = this.attrBonusFromSigla(p.atrib); // usa bônus calculado
            const tr = Number(p.treino) || 0;
            const ot = Number(p.outros) || 0;
            return hl + at + tr + ot;
        },

        exportJson() {
            const data = this.serialize();
            const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a'); a.href = url; a.download = (this.personagem.nome || 'ficha') + '.json'; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
        },

        handleImport(e) {
            const f = e.target.files[0]; if (!f) return;
            const reader = new FileReader();
            reader.onload = () => {
                try {
                    const obj = JSON.parse(reader.result);
                    this.writeFrom(obj);
                    this.save();
                    Toast.fire({ icon: 'success', title: 'Ficha importada!' });
                }
                catch (err) {
                    Toast.fire({ icon: 'error', title: 'JSON inválido!' });
                }
            };
            reader.readAsText(f);
            e.target.value = '';
        },

        save() {
            localStorage.setItem(LS_KEY, JSON.stringify(this.serialize()));
            Toast.fire({ icon: 'success', title: 'Ficha salva!' });
        },

        load() {
            const raw = localStorage.getItem(LS_KEY);
            if (!raw) return;
            try {
                const obj = JSON.parse(raw); this.writeFrom(obj);
            }
            catch (e) {
                console.warn('erro load', e);
            }
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
            if (obj.personagem) this.personagem = Object.assign(this.personagem, obj.personagem);
            if (obj.pericias) this.pericias = obj.pericias;
            if (obj.appliedOriginSkills) this.appliedOriginSkills = obj.appliedOriginSkills;
            if (Object.prototype.hasOwnProperty.call(obj, 'notas')) this.notas = obj.notas || '';
        }
    }
});