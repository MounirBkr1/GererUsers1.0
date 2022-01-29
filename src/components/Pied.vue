<template>
  <footer class="footer bg-dark text-center text-white">
    <div class="container">
      <div class="row mt-0">
        <div class="col mt-0">
          <h4>Company</h4>
          <ul>
            <li><a href="#">about us</a></li>
            <li><a href="#">our service</a></li>
            <li><a href="#">privacy policy</a></li>
            <li><a href="#">affiliate programme</a></li>
          </ul>
        </div>
        <div class="col">
          <h4>Market</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">SHIPPING</a></li>
            <li><a href="#">RETURNS</a></li>
            <li><a href="#">ORDRE</a></li>
          </ul>
        </div>
        <div class="col">
          <h4>folow us</h4>
          <ul>
            <li><a href="#">WATCH</a></li>
            <li><a href="#">BAG</a></li>
            <li><a href="#">SHOES</a></li>
            <li><a href="#">DRESS</a></li>
          </ul>
        </div>
        <div class="col">
          <h4>follow us</h4>
          <div class="social-links">
            <a href=""><i class="fab fa-facebook-f"></i></a>
            <a href=""><i class="fab fa-twitter"></i></a>
            <a href=""><i class="fab fa-instagram"></i></a>
            <a href=""><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </div>

    <div class="container p-4 pb-0">
      <section class="">
        <form action="">
          <div class="row d-flex justify-content-center">
            <div class="col-auto">
              <p class="pt-2">
                <strong>Contactez Nous</strong>
              </p>
            </div>

            <div class="col-md-5 col-12">
              <div class="form-outline form-white mb-4">
                <input type="email" id="form5Example29" class="form-control" />
                <label class="form-label" for="form5Example29"
                  >Adresse Email</label
                >
              </div>
            </div>

            <div class="col-auto">
              <button type="submit" class="btn btn-outline-light mb-4">
                envoyer
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>

    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
      © 2022 Copyright:
      <a class="text-white" href="google.com/">monSiteWeb.com</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    //titleapp : String
  },
};
</script>

<style>
/*importer font 'Fredoka One' style depuis font-google.com*/
@import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Fredoka+One&family=Lobster&family=Oswald:wght@500&family=Righteous&family=Staatliches&display=swap");

.footer {
  margin-top: 100px;
  padding-top:0px;
  background-color: #24262b;
  padding: 20px 0;
}
body {
  line-height: 1.5;
  font-family: "Fredoka One", cursive;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  max-width: 1170px;
  max-height: 200px;
  margin: 0px;
  padding:0px;
}
.row {
  display: flex;
  flex-wrap: wrap;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.col {
  width: 25%;
  padding: 0 0px;
}
.col h4 {
  font-size: 20px;
  color: #fff;
  font-weight: 500;
  text-transform: capitalize;
  margin-bottom: 30px;
  position: relative;
  width: 250px;
  /*background-color: aqua;*/
}
.col h4::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -10px;
  background-color: #e91e63;
  height: 2px;
  box-sizing: border-box;
  width: 250px;
  margin-right: 0px;
}
.col ul li:not(:last-child) {
  margin-bottom: 10px;
  margin-left: 0;
  padding: 0;
}

.col ul li a {
  font-size: 16px;
  width: 250px;
  text-transform: capitalize;
  color: #ffffff;
  text-decoration: none;
  color: #bbb;
  display: block;
  position: relative;
  /*background-color: #111;*/
  text-align: center;
  transition: all 0.3s ease;
}
.col ul li a:hover {
  color: #fff;
  padding-left: 8px;
}
.social-links a {
  display: inline-block;
  height: 40px;
  width: 40px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 0 10px 10px 0;
  line-height: 40px;
  border-radius: 50%;
  color: #fff;
  transition: all 0.5s ease;
}

.social-links a:hover {
  color: #24262b;
  background-color: #ffffff;
}
/*responsive*/
@media (max-width: 574px) {
  .col {
    width: 100%;
    margin-bottom: 30px;
  }
}
</style>
