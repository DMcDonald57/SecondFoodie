import Vue from 'vue'
import VueRouter from 'vue-router'
import RegistrationPage from '@/views/RegistrationPage';


Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: RegistrationPage
  }
]

const router = new VueRouter({
  routes
})

export default router
