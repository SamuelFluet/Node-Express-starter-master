import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import store from '../store'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'Login',
      component : Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component : Signup
    },
  ]
})
// a chaque changement de page, on peut diriger l'utilisateur
/*router.beforeEach(async ()=>{
  //
  const user = await store.dispatch("init")
})*/
export default router
