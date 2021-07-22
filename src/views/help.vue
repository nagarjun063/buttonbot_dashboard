<template>
  <div>
    <h1 class="subheading grey--text pl=4">HELP</h1>
    <v-container pt-6 pb-2 pl-4 pr-0>
      <v-card class="mx-auto" max-width="850" max-height="900">
        <v-container pt-6 pb-2 pl-6 pr-6>
          <v-row align="center">
            <v-item-group
              v-model="window"
              class="shrink mr-6"
              mandatory
              tag="v-flex"
            >
              <v-item v-for="n in length" :key="n" v-slot="{ active, toggle }">
                <div>
                  <v-btn :input-value="active" icon @click="toggle">
                    <v-icon>mdi-record</v-icon>
                  </v-btn>
                </div>
              </v-item>
            </v-item-group>

            <v-col>
              <v-window v-model="window" class="elevation-1" vertical>
                <v-window-item v-for="n in length" :key="n">
                  <v-card flat>
                    <v-card-text>
                      <v-row class="mb-4" align="center">
                        <v-avatar color="grey" class="mr-4"></v-avatar>
                        <strong class="title">Title {{ n }}</strong>
                        <v-spacer></v-spacer>
                        <v-btn icon>
                          <v-icon>mdi-account</v-icon>
                        </v-btn>
                      </v-row>

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>
                    </v-card-text>
                  </v-card>
                </v-window-item>
              </v-window>
            </v-col>
          </v-row>
          <v-list two-line>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo"> mdi-phone </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>(650) 555-1234</v-list-item-title>
                <v-list-item-subtitle>Mobile</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-icon>
                <v-icon>mdi-message-text</v-icon>
              </v-list-item-icon>
            </v-list-item>

            <v-list-item>
              <v-list-item-action></v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>(323) 555-6789</v-list-item-title>
                <v-list-item-subtitle>Work</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-icon>
                <v-icon>mdi-message-text</v-icon>
              </v-list-item-icon>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo"> mdi-email </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>aliconnors@example.com</v-list-item-title>
                <v-list-item-subtitle>Personal</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-action></v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>ali_connors@example.com</v-list-item-title>
                <v-list-item-subtitle>Work</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo"> mdi-map-marker </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>1400 Main Street</v-list-item-title>
                <v-list-item-subtitle>Orlando, FL 79938</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    length: 3,
    window: 0,
  }),
};
</script>