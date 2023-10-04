import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectView from '../views/ProjectView.vue'
import ProjectDetailsView from '../views/ProjectDetailsView.vue'
import BlogView from '../views/BlogView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/project',
    name: 'project',
    component: ProjectView
  },
  {
    path: '/projectdetails',
    name: 'projectdetails',
    component: ProjectDetailsView
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView
  }
]

const router = new VueRouter({
  routes
})

export default router
