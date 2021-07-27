
  <template>
  <v-app v-if="userlogged" class="scroll">
    <Navbar></Navbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer></Footer>
  </v-app>

  <v-app v-else>
    <nav>
      <v-app-bar color="orange" dark app>
        <v-toolbar-title class="text-uppercase">
          <span>BOTBUILDER FRAMEWORK</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
      </v-app-bar>
    </nav>

    <v-container fluid class="d-flex justify-center align-center fill-height">
      <v-row align="center" justify="start">
        <v-col
          cols="12"
          sm="12"
          md="10"
          class="d-flex justify-center align-center"
        >
          <v-img
            lazy-src="@/assets/voice.png"
            contain
            height="720px"
            width="25px"
            src="@/assets/voice.png"
          ></v-img>
          <v-divider class="mx-4" vertical></v-divider>
          <v-card class="elevation-24 mx-12" min-width="400">
            <v-toolbar color="orange" dark flat>
              <v-toolbar-title
                class="text-uppercase font-weight-bold hidden-sm-and-down mx-auto"
                >CREDENTIALS</v-toolbar-title
              >
            </v-toolbar>

            <v-card-text>
              <v-form>
                <v-text-field
                  id="username"
                  label="USERNAME"
                  name="username"
                  prepend-icon="mdi-account"
                  type="email"
                  v-model="username"
                />

                <v-text-field
                  id="password"
                  label="PASSWORD"
                  name="password"
                  prepend-icon="mdi-lock"
                  type="password"
                  v-model="password"
                />

                <v-text-field
                  id="organisation"
                  label="ORGANISATION"
                  name="organisation"
                  prepend-icon="mdi-domain"
                  type="string"
                  v-model="organisation"
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn @click="onSubmit" color="orange" dark>
                LOGIN
                <v-icon class="mr-2">mdi-login</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <Footer></Footer>
  </v-app>
</template>



<script>
const session_username = "something";
const session_orgname = "something";
const session_password="something";
import Vue from "vue";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default {
  name: "App",

  components: {
    Navbar,
    Footer,
  },

  data: function () {
    return {
      session_username,
      session_orgname,
      session_password,
      drawer: true,
      username: null,
      password: null,
      organisation: null,
      userlogged: false,
      links: [
        { icon: "person", text: "Your Profile", route: "/" },
        { icon: "dashboard", text: "Dashboard", route: "/dashboard" },
        { icon: "help", text: "Help", route: "/help" },
        { icon: "settings", text: "Settings", route: "/settings" },
      ],
    };
  },
  methods: {
    onSubmit(ev) {
      ev.preventDefault();
      console.log(this.username);
      console.log(this.password);
      console.log(this.organisation);
      var vm = this;
      if (
        this.username == "admin" &&
        this.password == "admin" &&
        this.organisation == "admin"
      
      ) {
        Vue.prototype.$session_username = this.username;
        Vue.prototype.$session_password= this.password;
        Vue.prototype.$session_orgname = this.organisation;
        setTimeout(function () {
          Vue.nextTick(function () {
            vm.userlogged = true;
             console.log(vm.userlogged);
          });
        });
      } else {
        alert("Wrong credentials");
      }
    },
  },

  computed: {},
};
</script>
<style>
.scroll{
    overflow-x: scroll;
}
</style>
