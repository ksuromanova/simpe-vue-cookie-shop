import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import wineProducts from './components/wineProducts';
import wineCart from './components/wineCart';
import {store} from './store';

const routes = [
	{
		path: '',
		redirect: {name: 'wineProducts'}
	},
	{
		name: 'wineProducts',
		path: '/',
		component: wineProducts		
	},
	{
		name: 'wineCart',
		path: '/cart',
		component: wineCart
	},
	{
		path: '*',
		redirect: {name: 'wineProducts'}
	}
];

export const router = new VueRouter({
	routes,
	mode: 'history'
});