import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import navs from './modules/navs';
import catalog from './modules/catalog';
import cart from './modules/cart';

export const store = new Vuex.Store({
	modules: {
		navs,
		catalog,
		cart		
	},
	strict: process.env.NODE_ENV !== 'production'
});