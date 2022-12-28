import Vue from 'vue'
import VueRouter from 'vue-router'
import UserRegPage from '@/views/UserRegPage';
import welcomePage from '@/views/welcomePage';
import pageTopper from '@/components/pageTopper';
import RestRegPage from '@/views/RestRegPage';
import UserUpdate from '@/views/UserUpdate'


Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: welcomePage
  },
  {
    path: "/UserRegPage",
    component: UserRegPage
  },
  {
    path: "/components/pageTopper",
    component: pageTopper
  },
  {
    path: "/RestRegPage",
    component: RestRegPage
  },
  {
    path: "/UserUpdate",
    component: UserUpdate
  }
]

const router = new VueRouter({
  routes
})

export default router
