import { createRouter, createWebHistory } from 'vue-router';

import home from './pages/AppHome.vue';
import store from './pages/AppCreate.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
		{
		  path: '/',
		  name: 'home',
		  component: home
		},
		{
			path: '/',
			name: 'create',
			component: store
		  },
	]
})

export { router };