<template>
  <div class="pt-3">
    <!-- <v-row class="d-flex justify-center">
      <v-col cols="6" md="3" sm="6" xs="6">
        <h2>выбери свое имя</h2>
        <v-text-field
          label="New Shopping Item"
          outlined
          v-model="newItem"
          @keyup.enter.prevent="addItem"
        ></v-text-field>
      </v-col>
      <v-col cols="1" md="1">
        <v-btn large color="primary" @click="readDb">Add</v-btn>
      </v-col>
    </v-row> -->
    <v-row class="d-flex justify-center">
      <v-col>
          <v-card>
              <v-card-title>
                  Играем в тайного санту!
              </v-card-title>
               <v-stepper v-model="e1">
          <v-stepper-header>
            <v-stepper-step :complete="e1 > 1" step="1">
              Начать игру
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 2" step="2">
              Выбери свое имя
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 3" step="3">
              Получи подопечного
            </v-stepper-step>
            <v-divider></v-divider>

            <v-stepper-step step="4"> Удачи </v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <v-card class="mb-12">
                <v-card-title> Правила </v-card-title>
                <v-card-text>
                  <p>
                    <v-icon color="primary">mdi-check</v-icon> 6 декабря
                    получить имя человека для которого готовишь подарок
                  </p>
                  <p>
                    <v-icon color="primary">mdi-check</v-icon> Это имя тайное(не
                    рассказывать), его получишь на сайте, который тебе пришлют
                  </p>
                  <p>
                    <v-icon color="primary">mdi-check</v-icon> Скажем, пусть
                    подарок стоит не больше чем на 20 руб.
                  </p>
                  <p>
                    <v-icon color="primary">mdi-check</v-icon> Подготовить ему
                    подарок, красиво упаковать, ПОДПИСАТЬ
                  </p>
                  <p>
                    <v-icon color="primary">mdi-check</v-icon> принести в
                    канцелярию до 19 декабря (БЕЗ ОПАЗДАНИЙ)
                  </p>
                  <p>
                    <v-icon color="primary">mdi-check</v-icon> Прийти за своим
                    подарком на Рождество
                  </p>
                  <p>
                    <v-icon color="primary">mdi-check</v-icon> Никуда не
                    пропасть - ведь бывали случаи что кто-то пропадал и не
                    забирал подарок
                  </p>
                </v-card-text>
              </v-card>

              <v-btn color="primary" @click="e1 = 2"> Играем </v-btn>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-card class="mx-auto" max-width="400" tile>
                <v-card-title>
                  Санта, найди и выбери себя в этом списке
                </v-card-title>
                <v-list>
                  <v-subheader>Участники</v-subheader>
                  <v-list-item-group v-model="selectedItem" color="primary">
                    <v-list-item
                      v-for="(item, i) in santas"
                      :key="i"
                      @click="selected(item)"
                      :disabled="item.disabled"
                    >
                      <v-list-item-content>
                        <v-list-item-title
                          v-text="item.name"
                        ></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-card>

              <v-divider></v-divider>
            </v-stepper-content>

            <v-stepper-content step="3">
              <v-card class="mb-12" color="primary lighten-3" height="200px">
                <v-card-title class="white--text">
                  Твой подопечный {{ selectedName.name }}. Запомни его!!!
                </v-card-title>
                <v-card-text class="white--text">
                  <p>Контакт {{ selectedName.contact }}</p>
                  <p v-if="selectedName.wishes">
                    Мои хобби и увлечения: {{ selectedName.wishes }}
                  </p>
                  <p v-if="selectedName.donts">
                    Не дари мне пожалуйста {{ selectedName.donts }}
                  </p>
                </v-card-text>
              </v-card>

              <v-btn color="primary" @click="e1 = 4"> Запомнил </v-btn>
            </v-stepper-content>

            <v-stepper-content step="4">
              <v-card class="mb-12">
                <v-card-title> Ждем подарок! </v-card-title>
                <v-card-text>
                  <p>
                    <v-icon color="primary">mdi-check</v-icon> 6 декабря
                    получить имя человека для которого готовишь подарок
                  </p>
                  <p>
                    <v-icon color="primary">mdi-check</v-icon> Это имя тайное(не
                    рассказывать), его получишь на сайте, который тебе пришлют
                  </p>
                  <p>
                    <v-icon color="primary">mdi-check</v-icon> Скажем, пусть
                    подарок стоит не больше чем на 20 руб.
                  </p>
                  <p>
                    <v-icon color="primary">mdi-check</v-icon> Подготовить ему
                    подарок, красиво упаковать, ПОДПИСАТЬ
                  </p>
                  <p>
                    <v-icon color="primary">mdi-check</v-icon> принести в
                    канцелярию до 19 декабря (БЕЗ ОПАЗДАНИЙ)
                  </p>
                  <p>
                    <v-icon color="primary">mdi-check</v-icon> Прийти за своим
                    подарком на Рождество
                  </p>
                  <p>
                    <v-icon color="primary">mdi-check</v-icon> Никуда не
                    пропасть - ведь бывали случаи что кто-то пропадал и не
                    забирал подарок
                  </p>
                </v-card-text>
              </v-card>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
          </v-card>
       
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Санта, ты {{ selectedSanta.name }}?
        </v-card-title>

        <v-card-text>
          Будь внимателен. Выбери пожалуйста свое имя. Получить имя подопечного
          можно только один раз. Если это не твое имя, то этот санта болье не
          сможет получить подопечного.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn color="primary" text @click="showName()"> Да </v-btn>
          <v-btn color="warning" text @click="dialog = false"> Нет </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { db } from "../firebase/db";
import moment from "moment";

export default {
  data() {
    return {
      santas: [],
      ToDos: [],
      newItem: "",
      e1: 1,
      selectedItem: -1,
      selectedSanta: {},
      selectedName: {},
      dialog: false,
    };
  },
  methods: {
    // addSanta(s) {
    //   db.collection("santas").add(s);
    // },
    showName() {
      this.dialog = false;
      this.e1 = 3;
      this.selectedSanta.disabled = true;
      this.selectedName = this.santas.find(
        (f) => f.id == this.selectedSanta.myname
      );
      this.mylog(this.selectedSanta.name + " selected" + this.selectedName.name);
     // console.log(this.selectedSanta);
      db.collection("santas")
        .doc(this.selectedSanta.id)
        .update({ disabled: true })
        .then(() => {
          console.log("user updated!");
          this.mylog(this.selectedSanta.name + " disabled");
        })
        .catch((err) => {
          console.error(err);
          this.mylog(this.selectedSanta.name + " disabled error", true);
        });
    },
    selected(item) {
      this.selectedSanta = item;
      this.mylog(this.selectedSanta.name + " try");
      this.dialog = true;
    },

    mylog(s, critical) {
      db.collection("logs").add({
        t: moment().format("MMM Do YYYY, h:mm:ss a"),
        s: s,
        cr: critical ?? false,
      });
    },

    readDb() {
      //  var i = 0;
      var todo = [...this.santas];
      //var getmySanta = todo.reduce(function(map, obj) {
      //     map[obj.id] = todo.find(f => f.id == obj.myname);
      //     return map;
      // }, {});
      todo.forEach((s) => {
        db.collection("santas")
          .doc(s.id)
          .update({ disabled: false })
          .then(() => {
            console.log("user updated!");
          });
        //  console.log(i++ + " " + s.name +" " + " санта для " + (getmySanta[s.id] ? getmySanta[s.id].name : "!!!!!") );
        //console.log(s);
        //console.log(todo)
        // var who = todo.filter(w => w.id !== s.id
        // && !w.mysanta);
        // //console.log("who")
        // //console.log(who)
        // var allowed = who.filter(wf => !wf.notallowed || !wf.notallowed.includes(s.id));

        // //console.log("allowed")
        // //console.log(allowed)

        // if(allowed.length == 0){
        //     console.log("no items for " + s.name)
        // }

        // var myname = allowed[Math.floor(Math.random()*allowed.length)]

        // myname.mysanta = s.id;

        // s.myname = myname.id;

        //         db.collection('santas')
        //   .doc(s.id)
        //   .update({ myname: myname.id })
        //   .then(() => {
        //     console.log('user updated!')
        //   })

        //    db.collection('santas')
        //   .doc(myname.id)
        //   .update({mysanta: s.id})
        //   .then(() => {
        //     console.log('user updated!')
        //   })

        // console.log("santa - " + s.name + " for " + myname.name);

        // s.disabled = false;
      });
      console.log(todo);
    },
    // fetchData(){
    //     var url = "https://sheets.googleapis.com/v4/spreadsheets/1nwnDmc2ioQyxlUWASxZ7dSzVihsyKPRYnwc67kD3Hpo/values/A1:N1000?key=AIzaSyA-tMqrx6fDstOh-TB1841IW9PqIQLp0Ew";
    //      fetch(url)
    //             .then(async response => {
    //                 const data = await response.json();
    //                 //       console.log(data)
    //                 // check for error response
    //                 if (!response.ok) {
    //                     // get error message from body or default to response statusText
    //                     const error = (data && data.message) || response.statusText;
    //                     console.error(error)
    //                     return Promise.reject(error);
    //                 }

    //                 var vs = data.values
    //                vs.forEach(v => {
    //                    console.log(v)
    //                    this.addSanta(
    //                     {
    //                         "name": v[1] ?? "",
    //                         "contact": v[2] ?? "",
    //                         "wishes": v[4] ?? "",
    //                         "donts": v[5] ?? ""
    //                     }
    //                    )
    //                });
    //             })
    //             .catch(error => {console.error(error);
    //             });
    // }
  },
  firestore: {
    santas: db.collection("santas"),
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
@media only screen and (max-width: 959px) {
  .v-stepper:not(.v-stepper--vertical) .v-stepper__label {
    display: flex !important;
  }
}
</style>
