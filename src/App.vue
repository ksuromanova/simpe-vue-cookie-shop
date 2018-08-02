<template>
  <div id="app" class="container">
    <div class="row">
      <div class="menu">                     
            <ul class="social-ul">          
                <li v-for="(soc, index) in social"
                       :key="index">
                  <a :href="soc.url">
                    <i :class="soc.class"></i>
                  </a>
                </li>             
              </ul>
            <ul class="main-ul">
                <router-link v-for="(item, index) in menu"
                             :key="index"
                             :to="item.url"
                             tag="li"                                          
                             active-class="active">
                  <a :href="item.url">
                    {{item.title}}
                  </a>
                </router-link>
                <span class="cnt">({{counter}})</span>
            </ul>
      </div>      
    </div>
    <div class="row">           
        <router-view></router-view>        
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

  export default {    
    computed: {
      ...mapGetters('navs', {
        menu: 'menu'
      }),
      ...mapGetters('navs', {
        social: 'social'
      }),
      ...mapGetters('cart', {
        counter: 'cnt'
      })
    }
  }
</script>