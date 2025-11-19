const LS_KEY = 'fichaAurora_v2';

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
            { nome: 'Acrobacia', atrib: 'DES', treino: 0, outros: 0 },
            { nome: 'Adestramento', atrib: 'CAR', treino: 0, outros: 0 },
            { nome: 'Atletismo', atrib: 'FOR', treino: 0, outros: 0 },
            { nome: 'Atuação', atrib: 'CAR', treino: 0, outros: 0 },
            { nome: 'Cavalgar', atrib: 'DES', treino: 0, outros: 0 },
            { nome: 'Conhecimento', atrib: 'INT', treino: 0, outros: 0 },
            { nome: 'Cura', atrib: 'SAB', treino: 0, outros: 0 },
            { nome: 'Diplomacia', atrib: 'CAR', treino: 0, outros: 0 },
            { nome: 'Enganação', atrib: 'CAR', treino: 0, outros: 0 },
            { nome: 'Fortitude', atrib: 'SAU', treino: 0, outros: 0 },
            { nome: 'Furtividade', atrib: 'DES', treino: 0, outros: 0 },
            { nome: 'Guerra', atrib: 'INT', treino: 0, outros: 0 },
            { nome: 'Iniciativa', atrib: 'DES', treino: 0, outros: 0 },
            { nome: 'Intimidação', atrib: 'CAR', treino: 0, outros: 0 },
            { nome: 'Intuição', atrib: 'SAB', treino: 0, outros: 0 },
            { nome: 'Investigação', atrib: 'INT', treino: 0, outros: 0 },
            { nome: 'Jogatina', atrib: 'CAR', treino: 0, outros: 0 },
            { nome: 'Ladinagem', atrib: 'DES', treino: 0, outros: 0 },
            { nome: 'Luta', atrib: 'FOR', treino: 0, outros: 0 },
            { nome: 'Misticismo', atrib: 'INT', treino: 0, outros: 0 },
            { nome: 'Nobreza', atrib: 'INT', treino: 0, outros: 0 },
            { nome: 'Ofício', atrib: 'INT', treino: 0, outros: 0 },
            { nome: 'Percepção', atrib: 'SAB', treino: 0, outros: 0 },
            { nome: 'Pilotagem', atrib: 'DES', treino: 0, outros: 0 },
            { nome: 'Pontaria', atrib: 'DES', treino: 0, outros: 0 },
            { nome: 'Reflexos', atrib: 'DES', treino: 0, outros: 0 },
            { nome: 'Religião', atrib: 'SAB', treino: 0, outros: 0 },
            { nome: 'Sobrevivência', atrib: 'SAB', treino: 0, outros: 0 },
            { nome: 'Vontade', atrib: 'SAB', treino: 0, outros: 0 }
        ],
        activeTab: 'ficha',
        notas: '',
        showAuth: false,
        user: null
    },

    computed: {
        bonusDestreza() {
            const des = Number(this.personagem.atributos.des) || 0
            return des - 10
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

        this.refreshPericiaAtributos()
    },

    methods: {
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
                Toast.fire({ icon: 'error', title: 'Erro ao salvar na nuvem' })
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
            } else {
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
            } catch (e) {
                console.error(e)
                Toast.fire({ icon: 'error', title: 'Erro no avatar' })
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
                    Toast.fire({ icon: 'error', title: 'JSON inválido!' });
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
            }
        },

        writeFrom(obj) {
            if (obj.personagem) Object.assign(this.personagem, obj.personagem)
            if (obj.pericias) this.pericias = obj.pericias
            if (obj.appliedOriginSkills) this.appliedOriginSkills = obj.appliedOriginSkills
            if (obj.hasOwnProperty('notas')) this.notas = obj.notas || ''
        }
    }
})