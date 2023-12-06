<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <q-header elevated class="bg-white text-grey-8" height-hint="64">
      <q-toolbar>
        <div class="col text-center text-weight-bold"></div>
        <q-btn stretch flat label="Bize ulaşın" no-caps="" />
        <q-btn stretch flat label="İade Süreci" no-caps="" />
        <q-btn stretch flat label="Siparişlerim" no-caps="" />
        <q-btn
          stretch
          flat
          label="Fırsatlar"
          no-caps=""
          icon="percent"
          color="blue-8"
        />
        <q-btn
          stretch
          flat
          label="Pazarama’da Satış Yapın!"
          icon="verified"
          color="pink-12"
          no-caps=""
        />
        <q-btn
          stretch
          flat
          label="Beğendiklerim"
          icon="favorite"
          color="blue-14"
          no-caps=""
        />
        <img src="https://cdn.pazarama.com/asset/_pzweb/img/bb2c232.png" />
      </q-toolbar>
      <q-toolbar class="GNL__toolbar">
        <q-btn
          flat
          dense
          round
          @click="toggleLeftDrawer"
          aria-label="Menu"
          icon="menu"
          class="q-mr-sm"
        />
        <q-toolbar-title
          v-if="$q.screen.gt.xs"
          shrink
          class="row items-center no-wrap"
        >
          <img
            src="https://img.akrep.com/store-images/pazarama/logo/tn2/pazarama.png"
          />
          <span class="q-ml-sm"></span>
        </q-toolbar-title>

        <q-space />

        <q-input
          class="GNL__toolbar-input"
          outlined
          dense
          v-model="search"
          color="bg-grey-3 shadow-1"
          placeholder="Ürün, katagori veya marka ara..."
        >
          <template v-slot:append>
            <q-btn aria-label="Menu" icon="search" color="grey" no-caps>
              <div>Ara</div>
              <q-menu anchor="bottom end" self="top end">
                <div class="q-pa-md" style="width: 400px">
                  <div class="text-body2 text-grey q-mb-md">
                    Narrow your search results
                  </div>

                  <div class="row items-center">
                    <div class="col-3 text-subtitle2 text-grey">
                      Exact phrase
                    </div>
                    <div class="col-9 q-pl-md">
                      <q-input dense v-model="exactPhrase" />
                    </div>

                    <div class="col-3 text-subtitle2 text-grey">Has words</div>
                    <div class="col-9 q-pl-md">
                      <q-input dense v-model="hasWords" />
                    </div>

                    <div class="col-3 text-subtitle2 text-grey">
                      Exclude words
                    </div>
                    <div class="col-9 q-pl-md">
                      <q-input dense v-model="excludeWords" />
                    </div>

                    <div class="col-3 text-subtitle2 text-grey">Website</div>
                    <div class="col-9 q-pl-md">
                      <q-input dense v-model="byWebsite" />
                    </div>

                    <div class="col-12 q-pt-lg row justify-end">
                      <q-btn
                        flat
                        dense
                        no-caps
                        color="grey-7"
                        size="md"
                        style="min-width: 68px"
                        label="Search"
                        v-close-popup
                      />
                      <q-btn
                        flat
                        dense
                        no-caps
                        color="grey-7"
                        size="md"
                        style="min-width: 68px"
                        @click="onClear"
                        label="Clear"
                        v-close-popup
                      />
                    </div>
                  </div>
                </div>
              </q-menu>
            </q-btn>
          </template>
        </q-input>

        <div
          v-if="$q.screen.gt.sm"
          class="GL__toolbar-link q-ml-xs q-gutter-md text-body2 text-weight-bold row items-center no-wrap"
        >
          <a ref="javascript:void(0)" class="text-black">
            Giriş Yap / Üye ol
          </a>
          <q-btn round flat>
            <q-avatar size="26px">
              <img
                src="https://w1.pngwing.com/pngs/933/945/png-transparent-social-media-icons-avatar-user-profile-login-black-circle-silhouette-symbol.png"
              />
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
          </q-btn>
          <a ref="javascript:void(0)" class="text-black"> </a>
          <a ref="javascript:void(0)" class="text-black"> </a>
          <a ref="javascript:void(0)" class="text-black"> Sepetim </a>
        </div>
        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn
            v-if="$q.screen.gt.sm"
            round
            dense
            flat
            color="text-grey-7"
            icon="shopping_cart"
          >
            <q-tooltip>Sepetim</q-tooltip>
          </q-btn>
          <q-btn round dense flat color="grey-8" icon="notifications">
            <q-badge color="red" text-color="white" floating> 2 </q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-white"
      :width="280"
    >
      <q-scroll-area
        style="height: calc(100% - 192px); border-right: 1px solid #ddd"
      >
        <q-list padding>
          <q-item to="/" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="list" />
            </q-item-section>

            <q-item-section> Ana Sayfa </q-item-section>
          </q-item>
          <q-item to="/sepet" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="shopping_cart" />
            </q-item-section>

            <q-item-section> Sepetim </q-item-section>
          </q-item>

          <q-item to="/Login" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="login" />
            </q-item-section>

            <q-item-section> Login / Sign up </q-item-section>
          </q-item>

          <q-item to="/urunler" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="style" />
            </q-item-section>

            <q-item-section> Fırsat Ürünler </q-item-section>
          </q-item>
          <q-item to="/yorumlar" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="comment" />
            </q-item-section>

            <q-item-section> Canlı destek </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import { fasEarthAmericas, fasFlask } from "@quasar/extras/fontawesome-v6";
export default {
  name: "GoogleNewsLayout",
  setup() {
    const leftDrawerOpen = ref(false);
    const search = ref("");
    const showAdvanced = ref(false);
    const showDateOptions = ref(false);
    const exactPhrase = ref("");
    const hasWords = ref("");
    const excludeWords = ref("");
    const byWebsite = ref("");
    const byDate = ref("Any time");

    function onClear() {
      exactPhrase.value = "";
      hasWords.value = "";
      excludeWords.value = "";
      byWebsite.value = "";
      byDate.value = "Any time";
    }
    function changeDate(option) {
      byDate.value = option;
      showDateOptions.value = false;
    }
    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    }
    return {
      leftDrawerOpen,
      search,
      showAdvanced,
      showDateOptions,
      exactPhrase,
      hasWords,
      excludeWords,
      byWebsite,
      byDate,
      links1: [
        { icon: "shopping_cart", text: "Sepetim" },
        { icon: "person", text: "For you" },
        { icon: "star_border", text: "Favourites" },
        { icon: "search", text: "Saved searches" },
      ],
      links2: [
        { icon: "flag", text: "Canada" },
        { icon: fasEarthAmericas, text: "World" },
        { icon: "place", text: "Local" },
        { icon: "domain", text: "Business" },
        { icon: "memory", text: "Technology" },
        { icon: "local_movies", text: "Entertainment" },
        { icon: "directions_bike", text: "Sports" },
        { icon: fasFlask, text: "Science" },
        { icon: "fitness_center", text: "Health " },
      ],
      links3: [
        { icon: "", text: "Language & region" },
        { icon: "", text: "Settings" },
        { icon: "open_in_new", text: "Get the Android app" },
        { icon: "open_in_new", text: "Get the iOS app" },
        { icon: "", text: "Send feedback" },
        { icon: "open_in_new", text: "Help" },
      ],

      onClear,
      changeDate,
      toggleLeftDrawer,
    };
  },
};
</script>

<style lang="sass">
.GNL
  &__toolbar
    height: 64px
  &__toolbar-input
    width: 55%
  &__drawer-item
    line-height: 24px
    border-radius: 0 24px 24px 0
    margin-right: 12px
    .q-item__section--avatar
      .q-icon
        color: #5f6368
    .q-item__label
      color: #3c4043
      letter-spacing: .01785714em
      font-size: .875rem
      font-weight: 500
      line-height: 1.25rem
  &__drawer-footer-link
    color: inherit
    text-decoration: none
    font-weight: 500
    font-size: .75rem
    &:hover
      color: #000
</style>
