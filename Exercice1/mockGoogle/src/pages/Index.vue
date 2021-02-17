<template>
  <q-layout view="hHh lpR fFf" class="bg-#FFF">
    
    <q-header  class="bg-#FFF text-grey-8 q-py-xs" height-hint="58">
      <q-toolbar>

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">

          <a class="gb_g" data-pid="23" href="https://mail.google.com/mail/" target="_top"> Gmail &nbsp;</a>
          <a class="gb_g" data-pid="23" href="https://mail.google.com/img/" target="_top"> &nbsp;Images &nbsp;</a>

          <q-btn round  flat size="md" color="grey-8" icon="apps" >
            <q-tooltip>Applications Google</q-tooltip>
          </q-btn>

          <q-btn round flat>
            <q-avatar size="32px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <q-tooltip>
              Compte Google <br/>
              Ayoub HABROUCH <br/>
              a.habrouch95@gmail.com 

            </q-tooltip>
          </q-btn>

        </div>

      </q-toolbar>
    </q-header>

    <q-footer bordered class="bg-secondary">
      
      <div style="margin-left: 70px;">
        <q-toolbar>          
          <q-toolbar-title class="footer1_title">
            France
          </q-toolbar-title>
        </q-toolbar>
      </div>

      <center>
        <div class="text-capitalize">

          <div class="footer_div1">
            <q-toolbar>
              <q-toolbar-title>
                <q-space />
                <a  class="gb_g" data-pid="23" href="https://mail.google.com/img/" target="_top"> &nbsp; À propos &nbsp;</a>
                <a  class="gb_g" data-pid="23" href="https://mail.google.com/img/" target="_top"> &nbsp; Publicité &nbsp;</a>
                <a  class="gb_g" data-pid="23" href="https://mail.google.com/img/" target="_top"> &nbsp; Entreprise &nbsp;</a>
                <a  class="gb_g" data-pid="23" href="https://mail.google.com/img/" target="_top"> &nbsp; Comment fonctione la recherche Google! &nbsp;</a>
              </q-toolbar-title>
            </q-toolbar>
          </div>

          <div class="footer_div2" >
            <q-toolbar>          
              <q-toolbar-title class="footer2_title">
                <a  class="gb_g" data-pid="23" href="https://mail.google.com/img/" target="_top"> 
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAMAAAAiV0Z6AAAAPFBMVEVLoEN0wU6CzFKCzFKCzFKCzFKCzFJSo0MSczNDmkCCzFJPoUMTczNdr0gmgziCzFITczMTczMTczMTczPh00jOAAAAFHRSTlPF/+bIsms8Ad///hX+//5/tXw7aMEAx10AAACaSURBVHgBbc4HDoRQCATQ33tbvf9dF9QxaCT9UQaltLHOh/golXKhMs5Xqa0xU1lyoa2fXFyQOsDG38qsLy4TaV+sFislovyhPzLJJrBu6eQOtpW0LjbJkzTuTDLRVNKa3uxJI+VdiRqXSeu6GW+Qxi29eLIi8H7EsYrT42BD+mQtNO5JMjRuC4lSY8V4hsLX0egGijvUSEP9AbylEsOkeCgWAAAAAElFTkSuQmCC" style="height: 14px;
                    margin-right: 6px;" alt="Image représentant une feuille" data-atf="1">
                    Neutre en carbone depuis 2007 &nbsp;
                </a>
              </q-toolbar-title>
            </q-toolbar>
          </div>

          <div class="footer_div3">
            <q-toolbar>          
              <q-toolbar-title class="footer2_title">
                <a  class="gb_g" data-pid="23" href="https://mail.google.com/img/" target="_top"> &nbsp; Infos consomateurs &nbsp;</a>
                <a  class="gb_g" data-pid="23" href="https://mail.google.com/img/" target="_top"> &nbsp; Confidentialité &nbsp;</a>
                <a  class="gb_g" data-pid="23" href="https://mail.google.com/img/" target="_top"> &nbsp; Conditions &nbsp;</a>
                <a  class="gb_g" data-pid="23" href="https://mail.google.com/img/" target="_top"> &nbsp; Paramètres &nbsp;</a>
              </q-toolbar-title>
            </q-toolbar>
          </div>
          
        </div>
      </center>
       
    </q-footer>

    <q-page-container>
      <!-- <router-view /> -->

      <div class="image_container">
        <img class="image" alt="Google" height="92" src="../assets/googlelogo.png" srcset="../assets/googlelogo.png 1x, ../assets/googlelogo.png 2x" width="272" data-atf="1">
      </div>

      <div class="search_container">
        <q-input dense standout="bg-primary text-black" rounded outlined v-model="search" class="search_input"  clearable >
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>

          <template v-slot:append>
            <q-separator vertical inset />
            <q-tooltip>
              Utiliser la recherche vocale
            </q-tooltip>
            <q-icon name="mic" />
          </template>
          </q-input>
      </div>

      <div class="buttons_search">
        <center>
          <q-btn class="btn1" dense  no-wrap align size="sm" unelevated  label="Recherche Google"></q-btn>            
          <q-btn class="btn1" dense  no-wrap  align size="sm"  unelevated label="J'ai de la chance"></q-btn>
        </center>  
      </div>

      <div class="google_version">
        <center>
          Google disponible en&nbsp;:  <a href="https://www.google.fr/setprefs?sig=0_omCGPpTfuLf9iE98kmsoF_QCh_g%3D&amp;hl=en&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiv_rP9hfDuAhVFC2MBHeqEArMQ2ZgBCA4">English</a>  
        </center>
      </div>

    </q-page-container>

  </q-layout>
</template>

<script>

export default {
  name: 'MyLayout',
  data () {
    return {
      search: ''
    }
  }
}
</script>

<style>
.gb_g {
  color: black;
  /* display: inline-block;   */
  vertical-align: middle;
  text-decoration: none;
  font-family: "Roboto", "-apple-system", "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 1;
  font-size: 12.5px;
    padding: 11px;
    white-space: nowrap;
  }

.image_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
}

.image {
  max-height:100%;
  max-width:100%;
  object-fit:contain;
  object-position:center bottom;
  width:auto
}

.search_container{
  display: block;
  position: relative;
  margin: 0 auto;
  padding-top: 26px;
  width: auto;
  max-width: 584px;
}

.search_input {
  background: #fff;
  display: flex; 
  border-color: grey;
  box-shadow: none;
  border-radius: 24px;
  z-index: 3;
  height: 44px;
  margin: 0 auto;
  width: auto;
  max-width: 584px;
}

.buttons_search {
  display: block;
  height: 70px;
  padding-top: 18px;
  top: 53px;
  z-index: 0;

}

.btn1 {
    background-color: #f8f9fa;
    border: 1px solid #f8f9fa;
    border-radius: 4px;
    color: #3c4043;
    font-family: arial,sans-serif;
    font-size: 14px;
    margin: 11px 4px;
    padding: 0 16px;
    line-height: 27px;
    height: 36px;
    min-width: 54px;
    text-align: center;
    cursor: pointer;
    user-select: none;
}

.google_version {
  display: block;
  position: relative;
  padding-top: 20px
}

.footer_div1 {
  order : 1;
  padding: 0 20px;
  padding-top: 0px;
  padding-right: 20px;
  padding-bottom: 0px;
  padding-left: 20px;
  display: inline-block;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 14px;
  font-family: arial,sans-serif;
  color: #222;
}

.footer_div2 {
  order :2;
  padding: 0 20px;
  padding-top: 0px;
  padding-right: 20px;
  padding-bottom: 0px;
  padding-left: 20px;
  display: inline-block;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 14px;
  font-family: arial,sans-serif;
  color: #222;
}

.footer_div3 {
  order : 3;
  padding: 0 20px;
  padding-top: 0px;
  padding-right: 20px;
  padding-bottom: 0px;
  padding-left: 20px;
  display: inline-block;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 14px;
  font-family: arial,sans-serif;
  color: #222;
}

.footer1_title {
  padding: 15px 30px;
  border-bottom: 1px solid #dadce0;
  font-size: 15px;
  color: rgba(0,0,0,.54);
}

.footer2_title {
  padding: 15px 30px;
  border-bottom: 1px solid #dadce0;
  color: rgba(0,0,0,.54);
}
</style>