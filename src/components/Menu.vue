<template>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="nav">
                <li class="nav-item" v-for="item in menu" v-bind:key="item.id">
                    <router-link v-bind:to="item.link" class="nav-link">{{item.titleItem}}</router-link>
                </li>
              </ul>
        </div>
</template>


<script>

export default {
    name : 'Menu',
    props : {
        menu : Array
    }
}

</script>


<style>


.navbar-collapse {
    width: auto;
    border-top: 0;
    box-shadow: none;
    max-height: 340px;
    padding-right: 0px;
    padding-left: 0px;
    overflow-x: visible;
    border-top: 1px solid transparent;
    box-shadow: inset 0 1px 0 rgb(255 255 255 / 10%);
    -webkit-overflow-scrolling: touch;
}

.navbar-collapse.collapse {
    display: block!important;
    height: auto!important;
    padding-bottom: 0;
    overflow: visible!important;
}

.nav {
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    background-color: #383336;
    border-bottom: 1px solid #0a0101;
    
}

.nav>li>a {
    position: relative;
    display: block;
    padding: 10px 15px;
}

.nav-link {
    color: white !important;
    font-size:x-large;
}

.active {
    color: #111313 !important;
    background-color: rgb(218, 32, 32);
}

.nav>li>a:hover{
    text-decoration: none;
    background-color: rgb(222, 226, 222,0.2);
    color:#2c241b;
    font-style: italic;
    transition:font-style 2s;
   
}

.nav>li>a:focus {
    text-decoration: none;
    background-color: #44aaaa;
    color:#0a0101;
    font-style: italic;
     border-bottom: 2px sold #05a041;
}



</style>