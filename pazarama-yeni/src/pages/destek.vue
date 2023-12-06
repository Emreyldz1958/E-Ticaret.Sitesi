<template>
  <q-card-section>
    <div class="q-pa-md row justify-center">
      <div style="width: 100%; max-width: 400px">
        <q-chat-message
          name="Pazarama"
          avatar="https://img.akrep.com/store-images/pazarama/logo/tn2/pazarama.png"
          stamp="1 minutes ago"
          sent
          text-color="white"
          bg-color="primary"
        >
          <div>Hoş geldiniz!</div>

          <div>
            Nasıl yardımcı olabilirim?
            <img
              src="https://cdn.quasar.dev/img/discord-omq.png"
              class="my-emoticon"
            />
          </div>
        </q-chat-message>

        <q-chat-message
          name="Jane"
          avatar="https://cdn.quasar.dev/img/avatar5.jpg"
          bg-color="amber"
        >
          <q-spinner-dots size="2rem" />
        </q-chat-message>
      </div>
    </div>
  </q-card-section>
</template>
<script>
import { getDatabase } from "firebase/database";
import { defineComponent, ref } from "vue";
import { useQuasar } from "quasar";
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
  name: "Help",
  name: "destekpage",
  setup() {
    const $q = useQuasar();
    return {};
  },
  data() {
    return {};
  },
  editor: ref(
    "After you define a new button," +
      " you have to make sure to put it in the toolbar too!"
  ),
  uploadIt() {
    $q.notify({
      message: "Server unavailable. Check connectivity.",
      color: "red-5",
      textColor: "white",
      icon: "warning",
    });
  },
  saveWork() {
    $q.notify({
      message: "Saved your text to local storage",
      color: "green-4",
      textColor: "white",
      icon: "cloud_done",
    });
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
      const database = getDatabase();

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
<style lang="sass">
.my-emoticon
  vertical-align: middle
  height: 2em
  width: 2em
</style>
