import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Info from '../views/Info.vue'
import Team from '../views/Team.vue'
import Project from '../views/Project.vue'
import General from '../views/General.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { path: '/info', name: 'Info', component: Info},
  { path: '/team', name: 'Team', component: Team},
  { path: '/project', name: 'Project', component: Project},
  { path: '/general', name: 'General', component: General},
]

const router = new VueRouter({
  routes
})

export default router
