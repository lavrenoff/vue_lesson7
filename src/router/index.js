import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectView from '../views/ProjectView.vue'
import ProjectDetailsView from '../views/ProjectDetailsView.vue'
import BlogView from '../views/BlogView.vue'
import BlogDetails from '../views/BlogDetails.vue'
import NotFound from '../views/NotFound.vue'

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
  },
  {
    path: '/blogdetails',
    name: 'blogdetails',
    component: BlogDetails
  },
  {
    path: '/404',
    name: 'Not Found',
    component: NotFound
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  routes
})

export default router
