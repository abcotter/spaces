import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Hello from './components/HelloWorld.vue'

const routes = [
	{
		path: "/",
		component: Hello
	},
];

const router = new VueRouter({
	mode: "history",
	routes,
});

export default router;