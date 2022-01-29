<template>
  <div id="app">
    <NavBar titleapp="Gérer Utilisateurs"/>
    <Menu :menu="menuItems" />
    <div class="router-componenent">
      <router-view />
    </div>
    
    <Pied/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Menu from './components/Menu.vue'
import Pied from './components/Pied.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Menu,
    Pied
  },
  data() {
    return {
      menuItems : [
              {
                id: 0,
                titleItem: "Dashboard",
                link: "/",
                state: true,
              },
              {
                id: 1,
                titleItem: "Utilisateurs",
                link: "users",
                state: false,
              },
              {
                id: 2,
                titleItem: "Habilitations",
                link: "habilitations",
                state: false
              },
              {
                id: 3,
                titleItem: "Statistiques",
                link: "statistiques",
                state: false
              }
            ]
    }
  }
}
</script>

<style>
#app {
margin-left:0px;
}
.router-componenent{
  margin:40px;
}

</style>
