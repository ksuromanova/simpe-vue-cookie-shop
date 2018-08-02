<template>
	<div class="cart">
		<h1>Cart</h1>
		<hr>
		<div v-if="this.productsInCart.length ===  0">
			Your cart is empty!
		</div>
		<template v-else>			
			<div class="row row-brd"  v-for="(product, index) in productsInCart">
				<div class="preview">
					<img :src="product.img" :alt="'photo ' + product.title">
				</div>
				<div class="title">
					{{ product.title }}
				</div>
				<div class="price">
					{{ product.price }}$
				</div>
				<div class="qt">
					<button type="button" name="Add" @click = "addProd(product)">+</button>
					{{product.qt}}
					<button type="button" name="del" @click = "delProd(product)">-</button>
					<button type="button" name="delAll" @click = "delAll(product)">
						<i class="icon-trash-empty"></i>
					</button>
				</div>
			</div>	
			<div class="row total"><b>Total: </b>{{total}}$</div>				
		</template>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';
	import {mapActions} from 'vuex';	
	
	export default {
		computed: {
			...mapGetters('catalog', {
				productsAll: 'products'
			}),	
			...mapGetters('cart', {
				productsInCart: 'cartProducts'
			}),
			total() {
		      var total = 0;
		      for(var i = 0; i < this.productsInCart.length; i++) {
		        total += this.productsInCart[i].price * this.productsInCart[i].qt;
		      }
		      return total;
		    }
		},
		methods: {
			...mapActions('cart', {
				addProd: 'add',
				delProd: 'delete',
				delAll: 'deleteItem'
			}),	
		}
	}
</script>