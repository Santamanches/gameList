
let id = 1;

const app = {
    data() {
        return {
            category: '',
            name: '',
            games: {
                csgo:['noname','qwerty','abushka'],
                dota:['name2023','ВаняКиллерМайнкрафт2009'],
                pubg:['Oleg','ГенадийГорин']
            }
        }
    },
    methods: {
        add() {
            if(this.category != '' && this.name != '') {
                if(this.games[this.category].includes(this.name)) {
                    alert('Это имя уже существует')
                }else {
                    this.games[this.category].push(this.name)
                    this.name = this.category = ''
                }
            }
        }
    },
}

Vue.createApp(app).mount('#app')


