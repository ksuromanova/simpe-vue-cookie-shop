const loadState = () => {
		try {
			const serializedState = localStorage.getItem('cartProducts');
		    if (serializedState === null) {
		      return undefined;
		    }
		    return JSON.parse(serializedState);
		 } catch (err) {
		    return undefined;
		}
};
export default {
	namespaced: true,
	state: {
		cartProducts: loadState() || []
	},	 
	getters: {
		cartProducts(state){			
			return state.cartProducts;
		},
		cnt(state){
			var total_cnt = 0;
		      for(var i = 0; i < state.cartProducts.length; i++) {
		        total_cnt +=state.cartProducts[i].qt;
		      }
		      return total_cnt;
		}	
	},
	mutations: {		
		add(state, prod){				
			if(prod.qt === 0) {
				prod.qt += 1;
			    state.cartProducts.push(prod);
			    state.cartProducts.reverse()
			}	else {
				prod.qt += 1;				
			}		  			  			 	  
		    this.commit('cart/save');
		},
		delete(state, prod){
			if(prod.qt < 2) {
				this.commit('cart/deleteItem', prod);
			}	else {
				prod.qt -= 1;
			}	
			this.commit('cart/save');
		},
		deleteItem(state, prod){				  
			state.cartProducts.splice(state.cartProducts.indexOf(prod), 1);	
			this.commit('cart/save');
		},
		save(state){		
			let parsedList = JSON.stringify(state.cartProducts);
		    localStorage.setItem('cartProducts', parsedList);
		    let parsedCnt = JSON.stringify(state.cartProducts.length);
		    localStorage.setItem('cnt', parsedCnt);
		}
	},
	actions: {
		add(store, prod){
			store.commit('add', prod);
		},
		delete(store, prod){
			store.commit('delete', prod);
		},
		deleteItem(store, prod){
			store.commit('deleteItem', prod);
		},
		save(store){
			store.commit('save');
		}
	}
};