<template>
	<div class="cart">
		<h1>Cart</h1>
		<hr>
		<div v-if="empty"
			 class="alert">
			Your cart is empty
		</div>
		<template v-else>
			<table>
				<thead>
					<tr>
						<th>Preview</th>
						<th>Title</th>
						<th>Price</th>
						<th>Add</th>
						<th>Remove</th>
					</tr>
				</thead>	
				<tbody>
					<tr v-for="product in products">
						<td><img :src="product.img" :alt="'photo ' + product.title"></td>
						<td>{{ product.title }}</td>
						<td class="cart-price">{{ product.price }}</td>
						<td class="btn"><input type="button" name="Add" value="Add"></td>
						<td class="btn"><input type="button" name="Add" value="Remove"></td>
					</tr>
				</tbody>	
			</table>
			<!--button @click="onOrder"
					class="btn btn-success"
					>
				Order Now
			</button-->
		</template>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';

	export default {
		computed: {
			...mapGetters('catalog', {
				productsAll: 'products'
			}),
			...mapGetters('cart', {
				productsInCart: 'cartProducts'
			}),
			products(){
				return this.productsAll.filter((elem) => {
					return this.productsInCart.indexOf(elem.id_product) !== -1;	
					console.log(this.productsInCart);				
				});
			},
			empty(){
				console.log(this.productsInCart.length);
				return this.productsInCart.length === 0;

			}
		}/*,
		methods: {
			onOrder(){
				this.$router.push('/checkout');
			}
		}*/
	}
</script>