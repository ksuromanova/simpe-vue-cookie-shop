export default {
	namespaced: true,
	state: {
		cartProducts: []
	},
	getters: {
		cartProducts(state){
			return state.cartProducts;
		},
		cnt(state){
			return state.cartProducts.length;
		}
	},
	mutations: {
		add(state, id_product){
			state.cartProducts.push(id_product);
			this.cnt++;
			
		}/*,
		remove(state, id_product){
			let pos = state.cartProducts.indexOf(id_product);

			if(pos !== -1){
				state.cartProducts.splice(pos, 1);
			}
		}*/
	},
	actions: {
		add(store, id_product){
			store.commit('add', id_product);
		}/*,
		remove(store, id_product){
			store.commit('remove', id_product);
		}*/
	}
};