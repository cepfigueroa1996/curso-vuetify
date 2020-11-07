import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Info from '../views/Info.vue'
import Team from '../views/Team.vue'
import Project from '../views/table/Project.vue'
import General from '../views/General.vue'
import File from '../views/file/Index.vue'
import Form from '../views/forms/Index.vue'
import Meeting from '../views/meeting/Index.vue'
import Pdf from '../views/pdf/Index.vue'

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
  { path: '/file', name: 'File', component: File},
  { path: '/general', name: 'General', component: General},
  { path: '/form', name: 'Form', component: Form},
  { path: '/meeting', name: 'Meeting', component: Meeting},
  { path: '/pdf', name: 'Pdf', component: Pdf},
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
