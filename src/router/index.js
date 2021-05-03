import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Index from '../components/index.vue'
// import modalList from '../components/modal-list.vue'
import tablePagination from '../components/elTable-elPagination.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect:'/index',
    children: [
      {
        path: '/index',
        name: 'index',
        component: tablePagination,
      },
      
    ]
  }
  
]

const router = new VueRouter({
  routes
})

export default router
