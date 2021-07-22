
<template>
  <nav>
    <v-app-bar color="orange" dark app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase">
        <span>BOTBUILDER FRAME WORK</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on">
            <v-icon left>expand_more</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list flat>
          <v-list-item
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
            active-class="border"
          >
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn text @click="logout()">
        <span>LOGOUT</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      dark
      app
      class="orange darken-4"
      expand-on-hover
    >
      <v-layout column align-center>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-title>John Leider</v-list-item-title>

          <v-btn icon @click.stop="mini = !mini">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-list-item>

        <v-divider></v-divider>
      </v-layout>
      <v-list flat>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
          active-class="border"
        >
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <div class="pt-12">
        <v-divider></v-divider>
      </div>
      <template v-slot:append>
        <v-list flat>
          <v-list-item @click="logout()">
            <v-list-item-action>
              <v-icon>mdi-power</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>LOGOUT</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <div class="pt-2">
          <v-layout column align-center>
            <v-list>
              <v-list-item @click="openweb()">
                <v-img max-width="50" src="@/assets/fdlogo.png"></v-img>
              </v-list-item>
            </v-list>
          </v-layout>
        </div>
      </template>
    </v-navigation-drawer>
  </nav>
</template>
<script>
// import Popup from './Popup.vue'
export default {
  data: () => ({
    group: null,
    drawer: false,
    links: [
      { icon: "person", text: "Your Profile", route: "/" },
      { icon: "dashboard", text: "Dashboard", route: "/dashboard" },
      { icon: "dashboard", text: "Dashboard2", route: "/dashboard2" },
      { icon: "settings", text: "Settings", route: "/settings" },
    ],
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
  components: {
    // Popup
  },
  methods: {
    logout() {
      console.log("logout");
      window.location.reload();
      window.location = "/";
    },
    openweb() {
      window.open("https://freshdigital.io", "_blank");
    },
  },
};
</script>
<style scoped>
.border {
  border-left: 4px solid orange;
}
</style>