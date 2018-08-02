import Vue from 'vue';
export default {
	namespaced: true,
	state: {
		menu: [
			{
				title: 'Catalog',				
				url: '/'
			},
			{
				title: 'Cart',				
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
				url: 'mailto:romanova.ksu15@gmail.com'
			},
			{
				title: 'Telegram',
				class: 'icon-telegram',
				url: 'tg://resolve?domain=ksuromanova'
			},
			{
				title: 'GitHub',
				class: 'icon-github-circled',
				url: 'https://github.com/ksuromanova/vue-localStorage-shop.git'
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