import { createApp } from 'vue'
import App from './App.vue'

//Importar o pacote mitt
import mitt from 'mitt'

//Criar a instãcia do pacote mitt
const emitter = mitt()

//Reiniciar a instância do Vue com base no componente
//createApp(App).mount('#app')
const app = createApp(App)

//Configurar a instância do pacote mitt como sendo uma propriedade global
//essa propriedade global estará disponível para todas as intâncias de componente dentro do app
app.config.globalProperties.emitter = emitter

//associar a intância do Vue com o elemento HTML de id app
app.mount('#app')