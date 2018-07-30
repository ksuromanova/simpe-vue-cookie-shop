import Vue from 'vue';
export default {
	namespaced: true,
	state: {
		menu: [
			{
				title: 'Catalog',
				class: 'icon-home',
				url: '/'
			},
			{
				title: 'Cart',
				class: 'icon-basket',
				url: '/cart'
			}
		],
		social: [			
			{
				title: 'Viber',
				class: 'icon-whatsapp',
				url: 'viber://chat?number=+380684243997'
			},
			{
				title: 'Email',
				class: 'icon-mail',
				url: ''
			},
			{
				title: 'Telegram',
				class: 'icon-telegram',
				url: '+380684243997'
			},
			{
				title: 'GitHub',
				class: 'icon-github-circled',
				url: 'https://github.com/ksuromanova/simple-vue-cookie-shop.git'
			}
		]
	},
	getters: {
		menu(state){
			return state.menu;
		},
		social(state){
			return state.social;
		}
	}
};