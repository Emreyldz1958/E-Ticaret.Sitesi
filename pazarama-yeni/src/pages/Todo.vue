<template>
  <q-tabs
    v-model="tab"
    dense
    no-caps
    inline-label
    class="bg-grey-3 text- shadow-2"
  >
    <q-btn
      color="bg-grey-3 text-black shadow-2"
      flat
      @mouseover="hello1 = true"
      label="Elektronik"
      no-caps=""
    >
      <q-menu
        v-model="hello1"
        @mouseleave="hello1 = false"
        fit
        transition-show="scale"
        transition-hide="scale"
      >
        <q-list style="min-width: 100px">
          <q-item clickable>
            <q-item-section>Dedektör</q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section>Telsiz İletişim Ürünleri</q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable>
            <q-item-section>Elektrikli Ev Aletleri</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
    <q-btn
      color="bg-grey-3 text-black shadow-2"
      @mouseover="hello2 = true"
      label="Anne & Bebek"
      no-caps=""
    >
      <q-menu
        v-model="hello2"
        @mouseleave="hello2 = false"
        fit
        transition-show="scale"
        transition-hide="scale"
      >
        <q-list style="min-width: 100px">
          <q-item clickable>
            <q-item-section>Bebek Araç ve Gereçleri</q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section>Bebek Odası Mobilyaları</q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable>
            <q-item-section>Emzirme Ürünleri</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>

    <q-btn
      color="bg-grey-3 text-black shadow-2"
      flat
      @mouseover="hello3 = true"
      label="Cep telefonu & Aksesuarlar"
      no-caps=""
    >
      <q-menu
        v-model="hello3"
        @mouseleave="hello3 = false"
        fit
        transition-show="scale"
        transition-hide="scale"
      >
        <q-list style="min-width: 100px">
          <q-item clickable>
            <q-item-section>Cep Telefonları</q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section>Cep Telefonu Aksesuarları</q-item-section>
          </q-item>
          <q-separator />
        </q-list>
      </q-menu>
    </q-btn>

    <q-btn
      color="bg-grey-3 text-black shadow-2"
      flat
      @mouseover="hello4 = true"
      label="Ev, Yaşam, Yapı Market"
      no-caps=""
    >
      <q-menu
        v-model="hello4"
        @mouseleave="hello4 = false"
        fit
        transition-show="scale"
        transition-hide="scale"
      >
        <q-list style="min-width: 100px">
          <q-item clickable>
            <q-item-section>Hediyelik Ürünler</q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section>Mutfak Alet ve Cihazları</q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable>
            <q-item-section>Yapı Market</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>

    <q-btn
      color="bg-grey-3 text-black shadow-2"
      flat
      @mouseover="hello5 = true"
      label="Ayakkabı, Çanta ve Aksesuar"
      no-caps=""
    >
      <q-menu
        v-model="hello5"
        @mouseleave="hello5 = false"
        fit
        transition-show="scale"
        transition-hide="scale"
      >
        <q-list style="min-width: 100px">
          <q-item clickable>
            <q-item-section>Çanta</q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section>Ayakkabı</q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable>
            <q-item-section>Takı,Saat ve Aksesuarlar</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>

    <q-btn
      color="bg-grey-3 text-black shadow-2"
      flat
      @mouseover="hello6 = true"
      label="Kişisel Bakım ve Kozmetik"
      no-caps=""
    >
      <q-menu
        v-model="hello6"
        @mouseleave="hello6 = false"
        fit
        transition-show="scale"
        transition-hide="scale"
      >
        <q-list style="min-width: 100px">
          <q-item clickable>
            <q-item-section>Bebek Araç ve Gereçleri</q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section>Bebek Odası Mobilyaları</q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable>
            <q-item-section>Emzirme Ürünleri</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>

    <q-btn
      color="bg-grey-3 text-black shadow-2"
      flat
      @mouseover="hello7 = true"
      label="Oyun, Konsol ve Dijital Servisler"
      no-caps=""
    >
      <q-menu
        v-model="hello7"
        @mouseleave="hello7 = false"
        fit
        transition-show="scale"
        transition-hide="scale"
      >
        <q-list style="min-width: 100px">
          <q-item clickable>
            <q-item-section>Dijital Servisler</q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section>Bilgisayar Oyunları ve Aksesuarları</q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable>
            <q-item-section>Oyun Konsolu ve Oyunları</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>

    <q-btn
      color="bg-grey-3 text-black shadow-2"
      flat
      @mouseover="hello8 = true"
      label="Otomobil, Motosiklet ve Aksesuarları"
      no-caps=""
    >
      <q-menu
        v-model="hello8"
        @mouseleave="hello8 = false"
        fit
        transition-show="scale"
        transition-hide="scale"
      >
        <q-list style="min-width: 100px">
          <q-item clickable>
            <q-item-section>Oto Lastikler</q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section>Carvak 2. El Araçlar</q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable>
            <q-item-section>Motosiklet</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>

    <q-btn
      color="bg-grey-3 text-black shadow-2"
      flat
      @mouseover="hello9 = true"
      label="Spor ve Outdoor"
      no-caps=""
    >
      <q-menu
        v-model="hello9"
        @mouseleave="hello9 = false"
        fit
        transition-show="scale"
        transition-hide="scale"
      >
        <q-list style="min-width: 100px">
          <q-item clickable>
            <q-item-section>Bisikletler</q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section>Spor</q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable>
            <q-item-section>Outdoor</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>

    <q-btn
      color="bg-grey-3 text-black shadow-2"
      flat
      @mouseover="hello10 = true"
      label="Süpermarket"
      no-caps=""
    >
      <q-menu
        v-model="hello10"
        @mouseleave="hello10 = false"
        fit
        transition-show="scale"
        transition-hide="scale"
      >
        <q-list style="min-width: 100px">
          <q-item clickable>
            <q-item-section>Deterjan ve Temizlik Ürünleri</q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section>Mutfak Sarf Malzemeleri</q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable>
            <q-item-section>Emzirme Ürünleri</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
  </q-tabs>

  <q-tabs v-model="tab" dense no-caps class="text-white">
    <q-route-tab to="/page3" label="." no-caps="" />
  </q-tabs>

  <q-tabs>
    <q-route-tab to="/page1" label="Alışveriş Fırsatları" no-caps="" />
    <q-route-tab to="/page2" label="Süpermarket Fırsatları" no-caps="" />
    <q-route-tab to="/page2" label="Elektronik Fırsatları" no-caps="" />
    <q-route-tab to="/page2" label="Anne Bebek Fırsatları" no-caps />
    <q-route-tab to="/page2" label="Kampanyalar" no-caps="" />
  </q-tabs>

  <div style="margin-left: 10%; margin-right: 10%">
    <q-carousel
      swipeable
      animated
      v-model="slide"
      thumbnails
      infinite
      transition-prev="slide-right"
      transition-next="slide-left"
      control-color="primary"
      class="rounded-borders"
      draggable="false"
    >
      <q-carousel-slide
        :name="1"
        img-src="https://cdn.pazarama.com/store/banners/t3gjrm7cw4qtwpl5glrit.png"
      />
      <q-carousel-slide
        :name="2"
        img-src="https://cdn.pazarama.com/store/banners/dqzihwmv_nlsyxgpylee.png"
      />
      <q-carousel-slide
        :name="3"
        img-src="https://cdn.pazarama.com/store/banners/7_oka_pqhfxc5m0mtovgv.png"
      />
      <q-carousel-slide
        :name="4"
        img-src="https://cdn.pazarama.com/store/banners/vxsebf2gfyoc4s_9x5hn.png"
      />
      <q-carousel-slide
        :name="5"
        img-src="https://cdn.pazarama.com/store/banners/tkantwgpvuxqsdgn4diuz.png"
      />
    </q-carousel>
  </div>
  <div class="q-pa-md">
    <div class="q-col-gutter-md row items-start">
      <div class="col-6">
        <q-img
          src="https://cdn.pazarama.com/store/banners/5b8d_k3h0e9o1bqpnxl2p.png"
          :ratio="60 / 20"
        />
      </div>

      <div class="col-6">
        <q-img
          src="https://cdn.pazarama.com/store/banners/kb9hs5fi6twpx98nz2ish.png"
          :ratio="60 / 20"
        />
      </div>
    </div>
  </div>
  <div class="text-h5">---Elektronik Fırsatları---</div>

  <div class="q-pa-md">
    <div class="q-col-gutter-md row items-start">
      <div class="col-3">
        <q-img
          src="https://cdn.pazarama.com/asset/6934177741852/23bc564f-1bb8-464f-a993-08d92cb7b38f/xiaomimirobotvacuummop2proakllharitalamalmopluhepafiltrelibeyazrobotsprge-1.jpg"
          no-native-menu
        >
          <div class="absolute-bottom text-subtitle1 text-center">
            Philips HomeRun 7000 Serisi Aqua Islak-Kuru Robot Süpürge
          </div>
        </q-img>
      </div>

      <div class="col-3">
        <q-img
          src="https://cdn.pazarama.com/asset/6971408155620/e85665dd-59d7-4035-db23-08d9ddde958f/xiaomimitvstick4kdolbyatmoschromecast5gandroidtvboxmedyaoynatc-1.jpg"
          no-native-menu
        >
          <div class="absolute-bottom text-subtitle1 text-center">
            Xiaomi Mi TV Stick 4K Dolby Atmos Chromecast 5G Android TV Box
          </div>
        </q-img>
      </div>

      <div class="col-3">
        <q-img
          src="https://cdn.pazarama.com/MNRESIZE/300/300/asset/8699248197072/images/northbayounbf160u1727amortisrl29kgmonitrstand2023blackedition2xusbkablolu-1.jpg"
          no-native-menu
        >
          <div class="absolute-bottom text-subtitle1 text-center">
            North Bayou NB F160 17-27" Çift Kol 2-9 kg Amortisörlü Monitör
          </div>
        </q-img>
      </div>

      <div class="col-3">
        <q-img
          src="https://cdn.pazarama.com/asset/6973481900753/images/botslabs8plusvacuummopprotozboaltmasistemliakllrobotsprge-1.jpg"
          no-native-menu
        >
          <div class="absolute-bottom text-subtitle1 text-center">
            Botslab S8 Plus Vacuum Mop Pro Akıllı Robot Süpürge
          </div>
        </q-img>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { getDatabase } from "firebase/database";
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
      const database = getDatabase();

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
      //TODO: önce buluta buharlaştır
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
