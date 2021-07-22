<template>
  <div>
    <h1 class="subheading grey--text pl=4">DASHBOARD</h1>
    <v-container pt-6 pb-2 pl-4 pr-0>
      <v-card class="mx-auto" max-width="850" min-height="1200">
        <v-container pt-6 pb-2 pl-12 pr-4>
          <v-row>
            <v-col :cols="6">
              <v-card class="mx-auto" min-width="350" outlined>
                <v-subheader inset><h2>ANALYTICS 1</h2></v-subheader>
                <div class="card-body text-center">
                  <VGauge
                    :maxValue="100"
                    :minValue="0"
                    :value="gaugeValue"
                    width="300px"
                    :unit="gaugeUnit"
                    top
                  />
                </div>
              </v-card>
            </v-col>
            <v-spacer> </v-spacer>
            <v-col :cols="6">
              <v-card class="mt-8 mx-auto" max-width="350">
                <v-sheet
                  class="v-sheet--offset mx-auto"
                  color="cyan"
                  elevation="12"
                  max-width="calc(100% - 32px)"
                >
                  <v-sparkline
                    :labels="labels2"
                    :value="value"
                    color="white"
                    line-width="2"
                    padding="16"
                  ></v-sparkline>
                </v-sheet>

                <v-card-text class="pt-0">
                  <div class="title font-weight-light mb-2">
                    User Registrations
                  </div>
                  <div class="subheading font-weight-light grey--text">
                    Last Campaign Performance
                  </div>
                  <v-divider class="my-2"></v-divider>
                  <v-icon class="mr-2" small> mdi-clock </v-icon>
                  <span class="caption grey--text font-weight-light"
                    >last registration 26 minutes ago</span
                  >
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>

          <v-row>
            <v-col :cols="6">
              <v-card class="mx-auto mt-6" min-width="350" outlined>
                <v-subheader inset><h2>ANALYTICS 3</h2></v-subheader>

                <div class="card-body">
                  <HorizontalBarChart
                    v-bind:chartdata="chartData_Row2_Chart1"
                    v-bind:options="chartOptions_Row2_Chart1"
                  />
                </div>
              </v-card>
            </v-col>

            <v-spacer></v-spacer>
            <v-col :cols="6">
              <v-card class="mx-auto mt-6" max-width="450" outlined>
                <v-subheader inset><h2>ANALYTICS 4</h2></v-subheader>
                <div class="card-body">
                  <MixedChart
                    v-bind:chartdata="chartData_Row2_Chart2"
                    v-bind:options="chartOptions_Row2_Chart2"
                  />
                </div>
              </v-card>
            </v-col>
          </v-row>

          <!--  -->
          <!-- Analytics Row 3 -->
          <!--  -->

          <v-row>
            <v-col :cols="6">
              <v-card class="mx-auto mt-6" max-width="350">
                <v-subheader inset><h2>KNOWLEDGE BASE</h2></v-subheader>

                <v-toolbar flat color="transparent">
                  <v-btn icon>
                    <v-icon>mdi-arrow-left</v-icon>
                  </v-btn>

                  <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search News"
                    single-line
                  ></v-text-field>
                </v-toolbar>

                <v-card-text class="py-0">
                  <v-chip
                    v-for="(keyword, i) in keywords"
                    :key="i"
                    class="mr-2"
                  >
                    {{ keyword }}
                  </v-chip>
                </v-card-text>

                <v-list three-line>
                  <v-list-item
                    v-for="(item, i) in searching"
                    :key="i"
                    ripple
                    @click="() => {}"
                  >
                    <v-img
                      :src="item.image"
                      class="mr-4"
                      max-width="64"
                      min-width="64"
                    ></v-img>

                    <v-list-item-content>
                      <span
                        class="text-uppercase font-weight-regular caption"
                        v-text="item.category"
                      ></span>

                      <div v-text="item.title"></div>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>

            <v-col :cols="6">
              <v-card max-width="600" class="mx-auto mt-8">
                <v-list subheader two-line>
                  <v-subheader inset><h2>REPORTS</h2></v-subheader>

                  <v-list-item v-for="folder in folders" :key="folder.title">
                    <v-list-item-avatar>
                      <v-icon class="grey lighten-1" dark> mdi-folder </v-icon>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title
                        v-text="folder.title"
                      ></v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-action>
                      <v-btn icon>
                        <v-icon color="grey lighten-1">mdi-download</v-icon>
                      </v-btn>
                    </v-list-item-action>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
// import BarChart from "@/components/BarChart";
import HorizontalBarChart from "@/components/HorizontalBarChart";
import MixedChart from "@/components/MixedChart";
import VGauge from "vgauge";

export default {
  name: "dashboard",
  components: {
    // BarChart,
    HorizontalBarChart,
    MixedChart,
    VGauge,
  },
  data() {
    return {
      folders: [
        {
          subtitle: "Jan 9, 2014",
          title: "TODAY",
        },
        {
          subtitle: "Jan 17, 2014",
          title: "THIS WEEK",
        },
        {
          subtitle: "Jan 28, 2014",
          title: "THIS MONTH",
        },
        {
          subtitle: "Jan 28, 2014",
          title: "THIS YEAR",
        },
        {
          subtitle: "Jan 28, 2014",
          title: "REACH",
        },
        {
          subtitle: "Jan 28, 2014",
          title: "CAMPAIGNS",
        },
        {
          subtitle: "Jan 28, 2014",
          title: "DAILER",
        },
      ],
      // Chart
      chartData_Row2_Chart1: {
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],

        datasets: [
          {
            label: "Population (millions)",
            backgroundColor: [
              "#3e95cd",
              "#8e5ea2",
              "#3cba9f",
              "#e8c3b9",
              "#c45850",
            ],

            data: [2478, 5267, 734, 784, 433],
          },
        ],
      },
      labels2: ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm"],
      value: [200, 675, 410, 390, 310, 460, 250, 240],
      chartOptions_Row2_Chart1: {
        legend: { display: false },
        title: {
          display: true,
          text: "Predicted world population (millions) in 2050",
        },
      },

      // Chart
      chartData_Row2_Chart2: {
        labels: ["1900", "1950", "1999", "2050"],
        datasets: [
          {
            label: "Europe",
            type: "line",
            borderColor: "#8e5ea2",
            data: [408, 547, 675, 734],
            fill: false,
          },
          {
            label: "Africa",
            type: "line",
            borderColor: "#3e95cd",
            data: [133, 221, 783, 2478],
            fill: false,
          },
          {
            label: "Europe",
            type: "bar",
            backgroundColor: "rgba(0,0,0,0.2)",
            data: [408, 547, 675, 734],
          },
          {
            label: "Africa",
            type: "bar",
            backgroundColor: "rgba(0,0,0,0.2)",
            backgroundColorHover: "#3e95cd",
            data: [133, 221, 783, 2478],
          },
        ],
      },
      chartOptions_Row2_Chart2: {
        title: {
          display: true,
          text: "Population growth (millions): Europe & Africa",
        },
        legend: { display: false },
      },

      items: [
        {
          image:
            "https://cdn-images-1.medium.com/max/1024/1*9C9hLji68wV373tk8okLYA.jpeg",
          title: "TBI’s 5 Best: SF Mocktails to Finish Dry January Strong",
          category: "Travel",
          keyword: "Drinks",
        },
        {
          image:
            "https://cdn-images-1.medium.com/max/1024/1*BBNtYUieAqHoXKjiJ2mMjQ.png",
          title:
            "PWAs on iOS 12.2 beta: the good, the bad, and the “not sure yet if good”",
          category: "Technology",
          keyword: "Phones",
        },
        {
          image:
            "https://cdn-images-1.medium.com/max/1024/1*rTEtei1UEmNqbq6evRsExw.jpeg",
          title: "How to Get Media Mentions for Your Business",
          category: "Media",
          keyword: "Social",
        },
        {
          image:
            "https://cdn-images-1.medium.com/max/1024/1*FD2nkJewVeQnGf0ommQfrw.jpeg",
          title:
            "The Pitfalls Of Outsourcing Self-Awareness To Artificial Intelligence",
          category: "Technology",
          keyword: "Military",
        },
        {
          image:
            "https://cdn-images-1.medium.com/max/1024/1*eogFpsVgNzXQLCVgFzT_-A.jpeg",
          title: "Degrees of Freedom and Sudoko",
          category: "Travel",
          keyword: "Social",
        },
      ],
      search: "",

      // Gauge
      gaugeValue: 70,
      gaugeUnit: "USD",
    };
  },
  computed: {
    keywords() {
      if (!this.search) return [];

      const keywords = [];

      for (const search of this.searching) {
        keywords.push(search.keyword);
      }

      return keywords;
    },
    searching() {
      if (!this.search) return this.items;

      const search = this.search.toLowerCase();

      return this.items.filter((item) => {
        const text = item.title.toLowerCase();

        return text.indexOf(search) > -1;
      });
    },
  },
};
</script>

<style scoped>
.emoji {
  max-height: 40px;
  max-width: 40px;
}

.grey-small {
  color: grey;
  font-size: 14px;
}

.v-sheet--offset {
  top: -24px;
  position: relative;
}

.bd-callout {
  padding: 0.5rem;
  border: 1px solid #eee;
  border-left-width: 0.25rem;
  border-radius: 0.25rem;
}

.bd-callout-info {
  border-left-color: #5bc0de;
}

table td,
table th {
  font-size: 14px;
  margin: 0;
  padding: 0;
}

.table-container {
  overflow: scroll;
}

.table-short {
  height: 200px;
}

.table-long {
  height: 400px;
}
</style>
