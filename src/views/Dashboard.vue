<template>
  <div>
      <v-col class="scrollable">
        <v-card class="ma-16 pa-8">
          <v-layout row justify-space-between>
            <h2 class="heading black--text pl-2">Engagement</h2>
            <div style="max-width: 25%" class="pr-6">
              <v-select
                :items="chartdatesoptions"
                v-model="chartdates"
                @change="date(chartdates)"
              ></v-select>
            </div>
          </v-layout>
          <v-row class="my-8 justify-space-around">
            <v-card class="px-6">
              <v-card-title class="headline mb-1 justify-center">
                <v-icon class="pr-2" color="orange" large
                  >mdi-clock-time-nine</v-icon
                >Total Time Spent</v-card-title
              >
              <v-divider class="mx-2"></v-divider>
              <v-card-title class="headline mb-1 justify-center"
                >{{ totaltime }} seconds</v-card-title
              >
            </v-card>
            <v-card class="px-6">
              <v-card-title class="headline mb-1 justify-center">
                <v-icon class="pr-2" color="orange" large>mdi-timer</v-icon
                >Average Time Spent</v-card-title
              >
              <v-divider class="mx-2"></v-divider>
              <v-card-title class="headline mb-1 justify-center"
                >{{ averagetime }} seconds</v-card-title
              >
            </v-card>
          </v-row>
          <v-row class="my-16 justify-space-around">
            <v-card class="px-6">
              <v-card-title class="headline mb-1 justify-center">
                <v-icon class="pr-2" color="orange" large>mdi-magnify</v-icon
                >No of clicked</v-card-title
              >
              <v-divider class="mx-2"></v-divider>
              <v-card-title class="headline mb-1 justify-center">{{
                nooffaqclicks
              }}</v-card-title>
            </v-card>
            <v-card class="px-6">
              <v-card-title class="headline mb-1 justify-center">
                <v-icon class="pr-2" color="orange" large
                  >mdi-view-dashboard</v-icon
                >Average clicked</v-card-title
              >
              <v-divider class="mx-2"></v-divider>
              <v-card-title class="headline mb-1 justify-center">{{
                averageclicks
              }}</v-card-title>
            </v-card>
          </v-row>
          <v-card class="my-16">
            <v-card-title>
              FAQS
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search_faq"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              :headers="faq_headers"
              :items="faq_names"
              :search="search_faq"
            >
            </v-data-table>
          </v-card>
          <v-row class="mt-16 mb-4 justify-space-around">
            <v-card class="px-6">
              <v-card-title class="headline mb-1 justify-center">
                <v-icon class="pr-2" color="orange" large>mdi-magnify</v-icon
                >Agents Contacted</v-card-title
              >
              <v-divider class="mx-2"></v-divider>
              <v-card-title class="headline mb-1 justify-center">{{
                agents
              }}</v-card-title>
            </v-card>
            <v-card class="px-6">
              <v-card-title class="headline mb-1 justify-center">
                <v-icon class="pr-2" color="orange" large>mdi-magnify</v-icon
                >Website Views</v-card-title
              >
              <v-divider class="mx-2"></v-divider>
              <v-card-title class="headline mb-1 justify-center">{{
                website
              }}</v-card-title>
            </v-card>
          </v-row>
        </v-card>
      </v-col>
  </div>
</template>

<script>
import moment from 'moment';
import $ from "jquery";
export default {
  name: "dashboard",
  components: {
  },
  data() {
    return {
      totaltime: 0,
      averagetime: 0,
      nooffaqclicks: 0,
      averageclicks: 0,
      agents: 0,
      website: 0,
      faqs: [],
      windowWidth: window.innerWidth,
      txt: "",
      chartdates: "Total",
      chartdatesoptions: ["Daily", "Weekly", "Monthly", "Yearly", "Total"],
      faq_headers: [
        {
          text: "Buttons",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "NO of Clicks", value: "clicks" },
      ],
      faq_names: [],
      search: "",
      search_faq: "",
    };
  },
  created: function () {
    this.getdatadb("","");
  },
  watch: {
    windowWidth(newWidth, oldWidth) {
      this.txt = `it changed to ${newWidth} from ${oldWidth}`;
    },
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },

  methods: {
    date(date){
      console.log(date);
      if(date=="Daily")
      {
        var fromDate = moment().format("YYYY-MM-DD");
        var toDate = moment().add(1, 'days').startOf('day').format('YYYY-MM-DD');
        this.getdatadb(fromDate,toDate);
      }
      else if(date == "Weekly")
      {
          fromDate = moment().subtract(7, 'days').startOf('day').format('YYYY-MM-DD');
          toDate = moment().add(1, 'days').startOf('day').format('YYYY-MM-DD');
          this.getdatadb(fromDate,toDate);
      }
       else if(date == "Monthly")
      {
          fromDate = moment().subtract(30, 'days').startOf('day').format('YYYY-MM-DD');
          toDate = moment().add(1, 'days').startOf('day').format('YYYY-MM-DD');
          this.getdatadb(fromDate,toDate);
      }
       else if(date == "Yearly")
      {
          fromDate = moment().subtract(365, 'days').startOf('day').format('YYYY-MM-DD');
          toDate = moment().add(1, 'days').startOf('day').format('YYYY-MM-DD');
          this.getdatadb(fromDate,toDate);
      }
      else{
        this.getdatadb("",""); 
      }
    },
    onResize() {
      this.windowWidth = window.innerWidth;
    },
    getdatadb(from , to) {
      var link;
      var auth = "https://botbuilder.freshdigital.io/authentication";
      var db = "https://botbuilder.freshdigital.io/analytics";
      var u = this.$session_username;
      var o = this.$session_password;
      var token;
      var tempfaqlist = [];
      var self = this;
      //cleaning
      self.totaltime = 0;
      self.nooffaqclicks = 0;
      self.averageclicks = 0;
      self.agents = 0;
      self.website =0;
      self.faq_names = [];
      self.averagetime = 0;
      //
      if(from == "" && to == "")
      {
        link = db + "?username=" + u + "&password=" + o;
      }
      else
      {
        link = db + "?username=" + u + "&password=" + o + "&createdAt[$gte]=" + from+ "&createdAt[$lte]="+ to;
      }
      $.ajax({
        url: auth,
        data: {
          strategy: "local",
          email: "dbadmin@diwks.com",
          password: "Admin@!23",
        },
        type: "POST",
      }).then(function (data) {
        token = data.accessToken;
        $.ajax({
          url: link,
          type: "GET",
          beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + token);
          },
        }).then(function (data1) {
          console.log(data1.length)
          if(data1){
          for (var i = 0; i <= data1.length - 1; i++) {
            self.totaltime = self.totaltime + data1[i].total_time;
            self.nooffaqclicks = self.nooffaqclicks + data1[i].no_of_clicks;
            console.log(data1[i].no_of_clicks)
            self.agents = self.agents + data1[i].agents_clicked;
            self.website = self.website + data1[i].website_clicked;
            for (var a = 0; a <= data1[i].faq_clicked.length - 1; a++) {
              tempfaqlist.push(data1[i].faq_clicked[a]);
            }
          }
          //faq counts
          console.log(tempfaqlist);
          const map = tempfaqlist.reduce(
            (acc, e) => acc.set(e, (acc.get(e) || 0) + 1),
            new Map()
          );
          var faq = [],
            counts = [];
          faq = [...map.keys()];
          counts = [...map.values()];
          console.log(faq[0]);
          for (var b = 0; b <= faq.length - 1; b++) {
            self.faq_names.push({ name: faq[b], clicks: counts[b] });
          }
          self.averageclicks = self.nooffaqclicks / data1.length;
          self.averagetime = self.totaltime / data1.length;
          
          }
        });
      });
      
    },
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



