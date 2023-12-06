<template>
  <div>
    <div class="row bg-white q-mt-sm">
      <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
        <div class="q-pa-md">
          <q-carousel swipeable animated v-model="slide" thumbnails infinite>
            <q-carousel-slide
              :name="1"
              img-src="https://cdn.pazarama.com/MNRESIZE/600/600/asset/8720389020483/images/philipshomerun7000serisiaquaislakkururobotsprgeotomatikboaltmaistasyonlubeyazgoldxu710002-2.jpg"
            />
            <q-carousel-slide
              :name="2"
              img-src="https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/200/200/productimage/115047003/115047003_0_MC/73484013.jpg"
            />
            <q-carousel-slide
              :name="3"
              img-src="https://cdn.pazarama.com/MNRESIZE/600/600/asset/8720389020483/images/philipshomerun7000serisiaquaislakkururobotsprgeotomatikboaltmaistasyonlubeyazgoldxu710002-3.jpg"
            />
            <q-carousel-slide
              :name="4"
              img-src="https://cdn.pazarama.com/MNRESIZE/600/600/asset/8720389020483/images/philipshomerun7000serisiaquaislakkururobotsprgeotomatikboaltmaistasyonlubeyazgoldxu710002-4.jpg"
            />
          </q-carousel>
        </div>
      </div>
      <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12">
        <!--<q-scroll-area :style="{'height':(win_height-200)+'px'}">-->
        <div class="row">
          <div
            class="col-lg-7 col-md-7 col-sm-12 col-xs-12"
            :class="$q.platform.is.desktop ? '' : 'q-px-md'"
          >
            <div class="text-subtitle1 text-grey-10 q-mt-sm q-pt-xs">
              Philips HomeRun 7000 Serisi Aqua Islak-Kuru Robot Süpürge -
              Otomatik boşaltma istasyonlu - Beyaz & Gold-XU7100/02
            </div>

            <div>
              <div class="text-caption text-green-8 text-weight-bolder q-mt-sm">
                Özel Fiyat
              </div>
              <span class="text-h6">₺24.000</span
              ><span
                class="q-ml-sm text-grey-6"
                style="text-decoration: line-through"
                >₺27.000</span
              >
              <span
                class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md"
                >20% indirim</span
              >
            </div>

            <div class="q-mt-sm">
              <div class="text-caption q-mt-sm text-grey-8 text-weight-bold">
                Teslimat: <span class="text-black">Perşembe, Aralık 4</span>
              </div>
              <div
                class="text-caption text-subtitle2 text-grey-8 text-weight-bold"
              >
                Hızlı teslimat:
                <span class="text-black">Pazartesi, Aralık 1 </span>
              </div>
            </div>
            <div class="q-mt-md">
              <q-btn
                class="q-mt-md"
                color="orange-9"
                icon="shopping_cart"
                label="Sepete ekle"
              />
              <q-btn
                class="q-mt-md q-ml-md"
                color="orange-8"
                label="Şimdi satın al"
              />
            </div>
          </div>
          <div
            class="col-lg-5 col-md-5 col-sm-12 col-xs-12 q-mt-md q-pt-xs q-pl-lg"
          >
            <div class="text-subtitle2">Müşteri Yorumları</div>
            <div class="text-h3">4.3</div>
            <div>
              <q-rating
                v-model="rating_point"
                max="5"
                size="2em"
                color="orange"
                icon="star_border"
                icon-selected="star"
                icon-half="star_half"
                no-dimming
                readonly
              />
            </div>
            <div class="text-subtitle2 text-grey-8">(357 İnceleme)</div>

            <q-list dense bordered padding class="no-border q-mt-lg q-pr-xl">
              <q-item style="padding-left: 0 !important" v-ripple>
                <span class="text-subtitle2 q-mr-xs">5</span>
                <q-icon name="star" size="1.5em" color="orange"></q-icon>
                <q-linear-progress
                  class="q-ml-sm q-mr-sm"
                  style="margin-top: 5px"
                  size="13px"
                  :value="0.9"
                />
                <span
                  style="margin-top: 2px"
                  class="text-caption text-weight-bold text-grey-8"
                  >273</span
                >
              </q-item>
              <q-item style="padding-left: 0 !important" v-ripple>
                <span class="text-subtitle2 q-mr-xs">4</span>
                <q-icon name="star" size="1.5em" color="orange"></q-icon>
                <q-linear-progress
                  class="q-ml-sm q-mr-sm"
                  style="margin-top: 5px"
                  size="13px"
                  :value="0.6"
                />
                <span
                  style="margin-top: 2px"
                  class="text-caption text-weight-bold text-grey-8"
                  >&nbsp;&nbsp;69</span
                >
              </q-item>
              <q-item style="padding-left: 0 !important" v-ripple>
                <span class="text-subtitle2 q-mr-xs">3</span>
                <q-icon name="star" size="1.5em" color="orange"></q-icon>
                <q-linear-progress
                  class="q-ml-sm q-mr-sm"
                  style="margin-top: 5px"
                  size="13px"
                  :value="0.1"
                />
                <span
                  style="margin-top: 2px"
                  class="text-caption text-weight-bold text-grey-8"
                  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6</span
                >
              </q-item>
              <q-item style="padding-left: 0 !important" v-ripple>
                <span class="text-subtitle2 q-mr-xs">2</span>
                <q-icon name="star" size="1.5em" color="orange"></q-icon>
                <q-linear-progress
                  class="q-ml-sm q-mr-sm"
                  style="margin-top: 5px"
                  size="13px"
                  :value="0.1"
                />
                <span
                  style="margin-top: 2px"
                  class="text-caption text-weight-bold text-grey-8"
                  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3</span
                >
              </q-item>
              <q-item style="padding-left: 0 !important" v-ripple>
                <span class="text-subtitle2 q-mr-xs">1</span>
                <q-icon name="star" size="1.5em" color="orange"></q-icon>
                <q-linear-progress
                  class="q-ml-sm q-mr-sm"
                  style="margin-top: 5px"
                  size="13px"
                  :value="0.1"
                />
                <span
                  style="margin-top: 2px"
                  class="text-caption text-weight-bold text-grey-8"
                  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6</span
                >
              </q-item>
            </q-list>
          </div>
        </div>

        <!--</q-scroll-area>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "urun_page",
  data() {
    return {
      slide: 1,
      tab: "Specifications",
      rating_point: 4.3,
      rat_5: 5,
      rat_4: 4,
      rat_3: 3,
      rat_2: 2,
      rat_1: 1,
    };
  },
  computed: {
    win_width() {
      return this.$q.screen.width - 59;
    },
    win_height() {
      return this.$q.screen.height - 0;
    },
  },
};
</script>

<style scoped></style>
