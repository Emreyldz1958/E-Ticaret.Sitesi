<template>
  <q-toolbar style="background: #ffff">
    <div
      v-if="$q.screen.gt.sm"
      class="GL__toolbar-link q-ml-xs q-gutter-md text-body2 text-weight-bold row items-center no-wrap"
    >
      <q-space /> <q-space /> <q-space /> <q-space /> <q-space /> <q-space />
      <q-space /> <q-space /> <q-space /> <q-space /> <q-space /> <q-space />
      <q-space /> <q-space /> <q-space /> <q-space /> <q-space /> <q-space />
      <q-space /> <q-space /> <q-space /> <q-space /> <q-space /> <q-space />
      <q-space /> <q-space /> <q-space /> <q-space /> <q-space /> <q-space />
      <a ref="javascript:void(0)" class="text-indigo-10"> Sepet </a>
      <q-btn round flat>
        <q-icon name="shopping_basket" color="indigo-10" />
        <q-tooltip>Shopping Basket</q-tooltip>
      </q-btn>
      <a ref="javascript:void(0)" class="text-grey">Ödeme Özeti </a>
      <q-btn round flat>
        <q-icon name="credit_card" color="black" />
        <q-tooltip>Ödeme özeti</q-tooltip>
      </q-btn>
      <a ref="javascript:void(0)" class="text-grey"> Sipariş Özeti </a>
      <q-btn round flat>
        <q-icon name="verified" color="black" />
        <q-tooltip>Account</q-tooltip>
      </q-btn>
      <a ref="javascript:void(0)" class="text-black"> </a>
    </div>
  </q-toolbar>

  <div class="row q-col-gutter-md q-pt-md">
    <div class="col-xs-12 col-sm-6 col-md-6">
      <q-card class="my-card">
        <q-card-section horizontal>
          <q-img
            class="col-4"
            src="https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/784710019/784710019_0_MC/854e395ced094c2c9f9c8f94a7ba4f57.jpg"
          />

          <q-card-section>
            {{ lorem }}
          </q-card-section>
          <q-item-section avatar>
            <q-icon name="delete" />
          </q-item-section>
        </q-card-section>

        <div class="q-pa-lg flex flex-center">
          <q-pagination v-model="current" :max="5" direction-links />
        </div>

        <q-separator />

        <q-card-actions>
          <q-btn flat> Fiyat: 960 TL </q-btn>
          <q-btn flat> Renk: siyah</q-btn>
          <q-btn class="q-ml-md" color="purple" label="Ödemeye Geç" />
        </q-card-actions>
      </q-card>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-6"></div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

import {
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
  addDoc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";

export default defineComponent({
  name: "TodoPage",
  name: "sepetim",
  setup() {
    return {
      current: ref(1),
      lorem: "Mezza 1552 Retro 90x29 CM Meşe TV Ünitesi",
    };
  },
  data() {
    return {
      slide: ref(1),
      hello1: false,
      hello2: false,
      hello3: false,
      hello4: false,
      hello5: false,
      hello6: false,
      hello7: false,
      hello8: false,
      hello9: false,
      hello10: false,
      loading: false,
      updating: [],
      newTask: "",
      tasks: [],
      checked: true,
      tasksColRef: "Tasks",
      unsub: {},
    };
  },

  async created() {
    await this.getTasks();
    this.updating = new Array(this.tasks.length).fill(false);
    const tasks = this.tasks;
    this.unsub = onSnapshot(
      doc(this.$db, this.tasksColRef, this.tasks[0].id),
      (doc) => {
        tasks[0] = { ...doc.data(), id: tasks[0].id };
        console.log("Current data: ", doc.data());
      }
    );
  },
  methods: {
    async getTasks() {
      this.loading = true;
      this.tasks = [];

      const q = query(
        collection(this.$db, "Tasks"),
        where("done", "==", false)
      );
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((todo) => {
        console.log({ ...todo.data(), id: todo.id });
        this.tasks.push({ ...todo.data(), id: todo.id });
      });

      this.loading = false;
    },
    async toggleDone(task, index) {
      this.updating[index] = true;
      await setDoc(
        doc(this.$db, this.tasksColRef, task.id),
        { done: !task.done },
        { merge: true }
      );
      task.done = !task.done;
      this.updating[index] = false;
    },
    updated(task, i) {
      task.done = !task.done;
      this.toggleDone(task, i);
      //console.log("done: " + t);
      console.log(i);
    },
    deleteTask(index) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Really delete?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          let gorev = this.tasks[index].title;
          deleteDoc(doc(this.$db, this.tasksColRef, this.tasks[index].id));
          this.tasks.splice(index, 1);
          this.$q.notify("Task: " + gorev + " deleted");
        });
    },
    async addTask() {
      this.loading = true;
      //TODO : önce buluta buharlaştır
      let todo = {
        title: this.newTask,
        done: false,
      };
      const docRef = await addDoc(collection(this.$db, "Tasks"), todo);
      todo.id = docRef.id;
      this.tasks.push(todo);
      this.newTask = "";
      this.loading = false;
    },
  },
});
</script>

<style lang="scss">
.done {
  .q-item__label {
    text-decoration: line-through;
    color: #bbb;
  }
}
.no-tasks {
  opacity: 0.5;
}
</style>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 500px
</style>
