import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import TarifPage from '../views/TarifPage.vue'
import TambahTarif from '../views/TambahTarif.vue'
import HistoryPage from '../views/HistoryPage.vue'
import CCTV from '../views/CCTV.vue'
import PrinterPage from '../views/PrinterPage.vue'
import AkunPage from '../views/AkunPage.vue'

const routes = [
    {
    path: '/',
    name: 'HomePage',
    component: HomePage
    },
    {
    path: '/tarif',
    name: 'TarifPage',
    component: TarifPage
    },
    {
    path: '/tambah/tarif',
    name: 'TambahTarif',
    component: TambahTarif
    },
    {
    path: '/history',
    name: 'HistoryPage',
    component: HistoryPage
    },
    {
    path: '/cctv',
    name: 'CCTV',
    component: CCTV
    },
    {
    path: '/printerpage',
    name: 'PrinterPage',
    component: PrinterPage
    },
    {
    path: '/akun',
    name: 'AkunPage',
    component: AkunPage
    }      
    
]

const router = createRouter({
    history: createWebHistory(),
        routes
})

export default router
