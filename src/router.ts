import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('./pages/Index.vue'),
    children: [
      {
        path: 'home',
        name: 'home',
        component: import('./pages/Home.vue')
      },
      {
        path: 'template/:id',
        name: 'template',
        component: import('./pages/Template.vue')
      }
    ]
  },
  {
    path: '/editor',
    name: 'editor',
    component: () => import('./pages/Editor.vue')
  }
]

export default function () {
  return createRouter({
    history: createWebHashHistory(),
    routes
  })
}
