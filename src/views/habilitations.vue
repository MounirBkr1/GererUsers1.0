<template>
  <div id="habilitations" class="container-app">
    <!--Alerts  -->
    <div
      class="alert alert-succes"
      role="alert"
      v-show="alertMsgSuccess == true"
    >
      Enregistrement effectué.
    </div>
    <div class="alert alert-danger" role="alert" v-show="alertMsg == true">
      ECHEC, le Nom et Prenom ne doivent pas etres vides et ne doivent pas
      depasser 20 caracteres.
    </div>

    <!-- button CRUD -->
    <div >
      <button type="button" @click="viderLesChamps()" class="btn btn-primary me-4">INITIALISER</button>
      <button type="button" @click="montrerFormeBoolean=!montrerFormeBoolean" 
      class="btn btn-primary me-4">
        <em v-if="!montrerFormeBoolean">AFFFICHER</em>
        <em v-else>CACHER</em>
      </button>
      <button type="button"  @click="montrerFormeBoolean=true" class="btn btn-primary me-4">AJOUTER</button>
      <button type="button" @click="montrerFormeBoolean=true,saveService(habilitation)" class="btn btn-primary me-4">METTRE A JOUR</button>
    </div>
    <!-- form -->
    <div v-show="montrerFormeBoolean" id="divFormulaire">
      <form class="form-horizontal" >
      <!-- 1st row in form : nom + prenom + age +poste+photo -->
      <div class="row">
        <div class="col col-lg-8">
          <!--id de d'utilisateur-->
          <div class="form-group">
            <label class="control-label col-lg-2">Id :</label>
            <div class="col-lg-10">
              <input
                type="text"
                class="form-control"
                placeholder="entrez votre prenom"
                v-model="habilitation.id"
              />
            </div>

            <!--Nom d'utilisateur-->
            <div class="form-group">
              <label class="control-label col-lg-2">Prenom :</label>
              <div class="col-lg-10">
                <input
                  type="text"
                  class="form-control"
                  placeholder="entrez votre prenom"
                  v-model="habilitation.firstName"
                />
              </div>
            </div>
            <!-- prenom -->
            <div class="form-group mt-2">
              <label class="control-label col-lg-2">Nom :</label>
              <div class="col-lg-10">
                <input
                  type="text"
                  class="form-control"
                  placeholder="entrez votre nom"
                  v-model="habilitation.lastName"
                />
              </div>
            </div>
            <!-- age -->
            <div class="form-group mt-2">
              <label class="control-label col-lg-2">Age : </label>
              <div class="col-lg-10">
                <select
                  class="form-select"
                  v-model="habilitation.age"
                  aria-label="Default select example"
                >
                  <option selected disabled hidden>
                    selectionnez votre age
                  </option>
                  <option
                    v-for="age in ages"
                    v-bind:key="age"
                    v-bind:value="age"
                  >
                    {{ age }}
                  </option>
                </select>
              </div>
            </div>
            <!-- poste occupé -->
            <div class="form-group mt-2">
              <label class="control-label col-lg-2">Poste :</label>
              <div class="col-lg-10">
                <select
                  class="form-select"
                  v-model="habilitation.poste"
                  aria-label="Default select example"
                >
                  <option selected disabled hidden>poste occupé :</option>
                  <option
                    v-for="poste in postes"
                    v-bind:key="poste"
                    v-bind:value="poste"
                  >
                    {{ poste }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <!-- photo -->
          <!-- <div class="col col-lg-4">
           <div class="col-lg-4 mb-4">
             <img :src="image" alt="">
             <input type="file" @change="onFileSelected">
             <button @click="onUpload">telecharger</button>
           </div> 
        </div> -->
        </div>
      </div>

      <!-- 2nd row in form : languages + description + button save -->
      <div class="row">
        <!-- languages maitraisées -->
        <div class="row form-group mt-2">
          <label class="control-label col-lg-2">Languages Maitrisés :</label>
          <!-- java -->
          <div class="row ms-4">
            <div class="col">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox1"
                  value="java"
                  v-model="habilitation.languages"
                />
                <label class="form-check-label" for="inlineCheckbox1"
                  >JAVA</label
                >
              </div>
              <!-- python -->
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox2"
                  value="python"
                  v-model="habilitation.languages"
                />
                <label class="form-check-label" for="inlineCheckbox2"
                  >PYTHON</label
                >
              </div>
              <!-- js -->
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox3"
                  value="js"
                  v-model="habilitation.languages"
                />
                <label class="form-check-label" for="inlineCheckbox3"
                  >JAVASCRIPT</label
                >
              </div>
            </div>
            <!-- php -->
            <div class="col">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox1"
                  value="php"
                  v-model="habilitation.languages"
                />
                <label class="form-check-label" for="inlineCheckbox1"
                  >PHP</label
                >
              </div>
              <!-- c# -->
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox2"
                  value="c#"
                  v-model="habilitation.languages"
                />
                <label class="form-check-label" for="inlineCheckbox2">C#</label>
              </div>
              <!-- c++ -->
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox3"
                  value="c++"
                  v-model="habilitation.languages"
                />
                <label class="form-check-label" for="inlineCheckbox3"
                  >C++</label
                >
              </div>
            </div>
            <div>
              <ol class="mt-2">
                <li
                  v-for="language in habilitation.languages"
                  v-bind:key="language"
                  style="color: blue"
                >
                  {{ language }}
                </li>
              </ol>
            </div>
          </div>
        </div>

        <!-- description -->
        <div class="form-group mt-2">
          <label for="exampleFormControlTextarea1">Description :</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            v-model="habilitation.description"
          ></textarea>
        </div>
        <!--Button Save or action-->
        <div class="form-group mt-4">
          <div>
            <input
              type="button"
              class="btn btn-primary ms-4"
              value="Enregistrer"
              v-on:click="save(habilitation)"
              style="float: right"
            />
            <input
              type="button"
              class="btn btn-primary "
              value="update"
              v-on:click="updateService()"
              style="float: right"
            />
            
          </div>
        </div>
      </div>
    </form>
    </div>
    

    <!-- affichage list -->
    <div id="listHabilitations" class="col-lg-offset-1" >
      <h1>Liste des utilisateurs</h1>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>id</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Age</th>
            <th>Poste</th>
            <th>languages</th>
            <th>desription</th>
            <th>photo</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="habilitation in listHabilitationsFromService"
            v-bind:key="habilitation.id"
          >
            <td>{{ habilitation.id }}</td>
            <td>{{ habilitation.firstName }}</td>
            <td>{{ habilitation.lastName }}</td>
            <td>{{ habilitation.age }}</td>
            <td>{{ habilitation.poste }}</td>
            <td>{{ habilitation.languages }}</td>
            <td>{{ habilitation.description }}</td>
            <td>{{ habilitation.photo }}</td>
            <td>
              <button type="button"
              class="btn btn-light"
              @click="editerUser(habilitation),montrerFormeBoolean=true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-pencil-square"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                  />
                </svg>
              </button>
            </td>
            <td>
              <button type="button"
              class="btn btn-light"
              @click="supprimerUser(habilitation.id),montrerFormeBoolean=!montrerFormeBoolean"
             >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script src='variables.js'></script>
<script>
import axios from "axios";
export default {
  name: "habilitations",
 
  data() {
    return {
      habilitation: {
        id:"",
        firstName: "",
        lastName: "",
        age: "",
        poste: "",
        languages: [],
        description: "",
        images: "",
        selectedFile: null, 
        
      },
      ages: [
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
        38, 39, 40,
      ],
      postes: [
        "ouvrier",
        "technicien",
        "administrateur",
        "commercial",
        "directeur",
      ],
      alertMsg: false,
      alertMsgSuccess: false,
      listHabilitationsFromService: [],
      montrerFormeBoolean:true
    };
  },
  created() {
    //const id= this.$route.id;
    this.refreshList();
  },
  mounted(){
      this.refreshList();
  },
  computed:{
    
  },

  methods: {
    
  
    save(habilitation) {
      if (
        this.controlName(habilitation.lastName, habilitation.firstName) == true
      ) {
        this.saveService(habilitation);
        this.viderLesChamps();
      } else {
        this.alertMsg = true;
      }
    },
    controlName(fname, lname) {
      if (
        fname.length > 20 ||
        fname.length < 1 ||
        lname.lengh > 20 ||
        lname.length < 1
      ) {
        return false;
      } else {
        return true;
      }
    },
    saveService(habilitation) {
      axios
        .post(
          "API_URL",
          {
            id: habilitation.id,
            firstName: habilitation.firstName,
            lastName: habilitation.lastName,
            age: habilitation.age,
            poste: habilitation.poste,
            languages: habilitation.languages,
            description: habilitation.description,
          }
        )
        .then((dataReponse) => {
          if (dataReponse.status == 201) {
            this.alertMsgSuccess = true;
            this.getDataService();
          }
        })
        .catch((erreur) => {
          console.log(erreur);
        });
    },
    updateService(h) {
      console.log("update 1");
      axios
        .put(
          "API_URL",
          {
            //id: h.id,
            firstName: this.firstName,
            lastName: this.lastName,
            age: this.age,
            poste: this.poste,
            languages: this.languages,
            description: this.description,
          }
          
        )
        .then((dataReponse) => {
          console.log("update 2");
          if (dataReponse.status == 201) {
            this.alertMsgSuccess = true;
            this.getDataService();
            this.refreshList();
          }
        })
        .catch((erreur) => {
          console.log(erreur);
        });
    },
    getDataService() {
      axios
        .get(
          "API_URL"
        )
        .then((data) => {
          if (data.status == 200) {
            this.listHabilitationsFromService = data.data;
          }
        });
    },
    
    viderLesChamps(){
        this.habilitation.id="",
        this.habilitation.firstName= "",
        this.habilitation.lastName= "",
        this.habilitation.age= "",
        this.habilitation.poste= "",
        this.habilitation.languages= [],
        this.habilitation.description="",
        this.habilitation.image="",
        this.habilitation.selectedFile= null
    },

    supprimerUser(id) {
      console.log(id);
      
      if (!confirm("etes vous sur d'avoir supprimer cet utilisateur")) {
        return;
      }
      axios
        .delete(
          "https://61dc1d36591c3a0017e1a6e8.mockapi.io/gerer-user/1/habilitations/"+id
        )
        .then(() => {
          this.refreshList();
          alert("User supprimé avec succès")
        });
    },
    editerUser(user){
      this.habilitation.id=user.id,
        this.habilitation.firstName= user.firstName,
        this.habilitation.lastName= user.lastName,
        this.habilitation.age= user.age,
        this.habilitation.poste= user.poste,
        this.habilitation.languages= user.languages,
        this.habilitation.description=user.description,
        this.habilitation.image=user.image,
        this.habilitation.selectedFile= null
    },
    
    refreshList(){
      axios
      .get(
        "https://61dc1d36591c3a0017e1a6e8.mockapi.io/gerer-user/1/habilitations"
      )
      .then((data) => {
        if (data.status == 200) {
          this.listHabilitationsFromService = data.data;
        }
      });
    }
  }
};
</script>


<style>
.container-app {
  margin-top: 10px;
  margin-left: 10px;
  padding: 15px;
  background: #fff;
  box-shadow: 0 1px 4px #999;
}
#divFormulaire{
  margin:10px;
  padding:10px;
  background-color: rgb(247, 240, 240);
  border: 11px solid rgb(4, 2, 7);
  font-family:'Courier New', Courier, monospace;
  font-style: oblique;
  font-weight:bold;
}
#listHabilitations{
  margin-top:80px;
  padding:40px;
  background-color:rgb(225, 238, 238);
}
</style>
