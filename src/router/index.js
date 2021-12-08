import { 
  createRouter,
  createWebHashHistory,
 } from './grouter/index'
 import Home from '../pages/home.vue' 
 import About from '../pages/about.vue'
 import Formily from '../pages/formily.vue'

 const routes = [ 
   { 
     path: '/',
    name: 'Home',
    component: Home
  },
  { 
    path: '/about',
    name: 'About',
    component: About
  },
  { 
    path: '/formily',
    name: 'Formily',
    component: Formily
  },
]

const router = createRouter({ 
  history: createWebHashHistory(),
  routes
})

export default router