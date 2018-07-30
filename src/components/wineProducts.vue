<template>  
  <div class="row wines">
    <div class="wine" v-for="(prod, index) in products"
                       :key="index" 
                       >       
        <div class="wine-img">
          <img :src="prod.img" :alt="'photo ' + prod.title">
        </div>
        <div class="wine-title">{{prod.title}}<hr>Price: 
            <span class="wine-price"> {{prod.price}}$</span>
        </div>        
        <div class="btn">
          <input type="button" name="Add" value="Add to cart" @click="addToCart(prod.id_product)">
        </div>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';

export default {    
    computed: {
        ...mapGetters('catalog', {
          products: 'products'
        }),
      ...mapGetters('cart', {
        inCart: 'products'
      })
      },
      methods: {
      ...mapActions('cart', {
        addToCart: 'add'        
      })
    }
  }
</script>