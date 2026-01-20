import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createWebHashHistory, createRouter } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '',
            redirect: '/best_fans_quiz'
        },
        {
            path: '/best_fans_quiz',
            props: {
                clubs: [
                    'Adler Mannheim',
                    'Augsburger Panther',
                    'Dresdner Eislöwen',
                    'EHC Red Bull München',
                    'Eisbären Berlin',
                    'ERC Ingolstadt',
                    'Grizzlys Wolfsburg',
                    'Iserlohn Roosters',
                    'Kölner Haie',
                    'Löwen Frankfurt',
                    'Nürnberg Ice Tigers',
                    'Pinguins Bremerhaven',
                    'Schwenninger Wild Wings',
                    'Straubing Tigers'
                ]
            },
            component: () => import('./components/BestFansQuiz.vue')
        },
        {
            path: '/anschreiben',
            component: () => import('./components/Anschreiben.vue')
        },
        {
            path: '/lebenslauf',
            component: () => import('./components/Cv.vue')
        }
    ]
})

createApp(App).
    use(router).
    mount('#app')
