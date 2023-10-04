<template>
  <div id="app">
    <HeaderComponent/>
    <router-view/>
    <FooterComponent/>
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/> -->
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
    name: 'App',
    
    components:{
      HeaderComponent,
      FooterComponent
    },
    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};

</script>


<style lang="scss">
@import 'assets/scss/style.scss';

// @font-face {
//   font-family: "DM Serif Display Regular";
//   font-style: normal;
//   font-weight: normal;
//   src: local("DM Serif Display Regular"),
//     url("assets/fonts/DMSerifDisplay-Regular.woff") format("woff");
// }

// @font-face {
//   font-family: "DM Serif Display Italic";
//   font-style: normal;
//   font-weight: normal;
//   src: local("DM Serif Display Italic"),
//     url("assets/fonts/DMSerifDisplay-Italic.woff") format("woff");
// }

// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
//   font-family: "DM Serif Display Regular";
//   position: relative;
// }

// .center {
//   padding-left: calc(50% - 600px);
//   padding-right: calc(50% - 600px);
// }


// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
