<template>

<div id="statistiques" class="container-app">
<!-- digramme  statistique utilisateurs -->

  <div class="row">
    <h1 class="mb-4">Diagrammes des utilisateurs par profil</h1>
    <div class="col col-lg-5">
      
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, repellendus minus tenetur reiciendis aspernatur mollitia asperiores provident ad nobis dolor quisquam sed modi a error molestiae nulla quod. In labore cum provident veniam, dignissimos iusto ipsam libero officiis necessitatibus sint animi repudiandae sapiente nulla vero hic doloremque odit error illum nesciunt velit dolores explicabo dolore? Ex, incidunt sed ab quisquam cum iste amet. Libero, sequi repellat animi earum sint dolorum magnam maxime nam doloremque quas cupiditate pariatur quos id. In facilis iste architecto expedita facere aperiam tempora sapiente at nemo! Error, non vel possimus ipsa voluptates necessitatibus voluptate! Ad consequatur veritatis ipsa? Ullam eius provident velit error dolores quae eaque! Minus maxime vero esse, perferendis accusamus dignissimos sapiente ipsa, exercitationem alias impedit qui hic magni tempora eum nulla ipsum error et mollitia dolore dolorem cum officiis! Officia pariatur odit voluptatem, dicta ratione sequi illo est cum? Saepe deleniti ad cupiditate.</p>
    </div>
    <div class="col col-lg-7">
       <chartjs-doughnut v-bind:labels="labels2"
    v-bind:datasets="datasets2"
    v-bind:option="option2" id="chart"></chartjs-doughnut>
    </div>
  </div>
  <br>
  <br>
  <br>
  <br>
  <br>


 <!-- digramme  statistique habilitations -->
  <div class="row">
    <h1 class="mb-4">Diagrammes des habilitations par poste occupé</h1>
   
    <div class="col col-lg-7" >
       <chartjs-doughnut v-bind:labels="labels"
    v-bind:datasets="datasets"
    v-bind:option="option" id="chart"></chartjs-doughnut>
    </div>
 <div class="col col-lg-5">      
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, repellendus minus tenetur reiciendis aspernatur mollitia asperiores provident ad nobis dolor quisquam sed modi a error molestiae nulla quod. In labore cum provident veniam, dignissimos iusto ipsam libero officiis necessitatibus sint animi repudiandae sapiente nulla vero hic doloremque odit error illum nesciunt velit dolores explicabo dolore? Ex, incidunt sed ab quisquam cum iste amet. Libero, sequi repellat animi earum sint dolorum magnam maxime nam doloremque quas cupiditate pariatur quos id. In facilis iste architecto expedita facere aperiam tempora sapiente at nemo! Error, non vel possimus ipsa voluptates necessitatibus voluptate! Ad consequatur veritatis ipsa? Ullam eius provident velit error dolores quae eaque! Minus maxime vero esse, perferendis accusamus dignissimos sapiente ipsa, exercitationem alias impedit qui hic magni tempora eum nulla ipsum error et mollitia dolore dolorem cum officiis! Officia pariatur odit voluptatem, dicta ratione sequi illo est cum? Saepe deleniti ad cupiditate.</p>
    </div>

  </div>





</div>
</template>
        

<script>
import axios from 'axios';


export default{
    name : 'statistiques',
     data(){
      return {
         
         listUserFromService:[],
      
        NbreOuvrier:0,NbreTechnicien:0,NbreAdministrateur:0,nbrCommercial:0,NbreDirecteur:0,


        labels:["ouvrier","technicien","administrateur","commercial","directeur"],
        labels2:["administrateur","editeur","utilisateur","visiteur"],
        datasets:[{
          //data:[this.NbreOuvrier,this.NbreTechnicien,this.NbreAdministrateur,this.nbrCommercial,this.NbreDirecteur],
          data:[8,5,3,2,1],
          backgroundColor:["Red","Yellow","Purple","Green","blue"] 
        }],
        datasets2:[{              
          data:[7,3,2,1],
          backgroundColor:["Red","Purple","Green","blue"] 
        }],
        option:{
          title:{
            display:true,
            position:"bottom",
            text:"HABILITATIONS PAR NATURE DE POSTE"
          }
        },
        option2:{
          title:{
            display:true,
            position:"bottom",
            text:"UTILISATEURS PAR PROFIL"
          }
        }
        
      }          
    },
    created(){
        axios.get("API_URL").then(data =>{
            if(data.status == 200){
               this.listUserFromService = data.data;
            }   
          //calculer nbre par profil         
          for(let l in this.listUserFromService){ //parcourir le tableau l = 0,1,2
              switch(this.listUserFromService[l].profil){
                  case  "ouvrier":
                    this.NbreOuvrier++;
                    break;
                  case "technicien":
                    this.NbreTechnicien++;
                    break;
                  case "administrateur":
                    this.NbreAdministrateur++;
                    break;
                     case "commercial":
                    this.nbrCommercial++;
                    break;
                    case "directeur":
                    this.NbreDirecteur++;
                    break;
                  
                }
          }
           
           console.log("ouvrier "+ this.NbreOuvrier, "techn "+this.NbreTechnicien
           ,"admin"+this.NbreAdministrateur,"commercial" +this.nbrCommercial,"dir"+this.NbreDirecteur)
        
            
        });  
         
    },
     methods:{
    
    },
    mounted(){
       
  }
   
   
};
</script>


<style>
.container-app{
    margin-top: 10px;
    margin-left: 10px;
    padding: 15px;
    background: #FFF;
    box-shadow: 0 1px 4px #999;
}

#chart{
  border:5px solid rgb(161, 158, 158);
  padding:0px;
  font-weight: bold;
  font-family:'Courier New', Courier, monospace;
}
</style>