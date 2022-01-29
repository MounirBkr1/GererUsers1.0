<template>
    <div class="navbar navbar-static-top">
        <div class="row">
            <div class="col col-lg-3">
                <img src="../assets/users.png"/>
            </div>
            <div class="col  col-lg-6">
                <h1>
                    {{titleapp}}
                </h1>
            </div>
               
        </div>
    </div>
</template>


<script>
export default {
  name: 'NavBar',
  props:{
      titleapp : String
  }
}
</script>


<style>
.navbar.navbar-static-top {
    margin-left: -30px;
    margin-right: -30px;
    background-color: #44aaaa;
    border-bottom: 4px solid rgb(241, 57, 134,0.4);
    padding-left: 30px;
    padding-right: 30px;
    margin-bottom: 0px;
    color: #FFF;
    min-height: 120px;
    padding-top: 2px;
    padding-bottom:5px;
}

h1 {
    font-size:xx-large important;
    text-align: justify;
    margin-left:20px;
}
img{
    
    width:10px;
    height:10px;
    margin: 2px 10px 0px 20px;
}

</style>