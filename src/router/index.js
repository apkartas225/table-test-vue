import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'


const router = createRouter( {
  history: createWebHistory( import.meta.env.BASE_URL ),
  routes: [
    {
      path: '/',
      name: 'Home-view',
      component: HomeView
    },
    {
      path: '/peoples',
      name: 'Peoples',
      component: () => import( '@/views/Peoples.vue' )
    },
    {
      path: '/peoples/:id',
      name: 'PeopleInfo',
      props: true,
      component: () => import( '@/views/PeopleInfo.vue' )
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import( '@/views/Favorites.vue' )
    }
  ]
} )

export default router
