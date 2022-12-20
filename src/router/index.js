import Vue from 'vue'
import VueRouter from 'vue-router'
import RegistrationPage from '@/views/RegistrationPage';
import welcomePage from '@/views/welcomePage';
import pageTopper from '@/components/pageTopper'



Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: welcomePage
  },
  {
    path: "/RegistrationPage",
    component: RegistrationPage
  },
  {
    path: "@/components/pageTopper",
    component: pageTopper
  },
]

const router = new VueRouter({
  routes
})

export default router
