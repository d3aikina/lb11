import './assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'

import {createMemoryHistory, createRouter } from 'vue-router'

import page1 from './components/page1.vue'
import page2 from './components/page2.vue'
import page3 from './components/page3.vue'

const routes = [
    { path: '/page1', component: page1 },
    { path: '/page2', component: page2 },
    { path: '/page3', component: page3 }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
