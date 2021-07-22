<template>
  <div align="center">
    <h1 class="subheading orange--text pl=4">Inside Flow</h1>
    <v-container pt-6 pb-2 pl-2 pr-2>
    </v-container>
    <v-row>
        <v-col
          cols="9"
          sm="6"
        >
        
          <v-text-field 
            v-model="h_0"
            label="Greetings"
            outlined
            shaped
          ></v-text-field>
          <v-text-field 
            v-model="h_1"
            label="1"
            outlined
            shaped
          ></v-text-field>
              <v-col
              cols="10"
              >
              <v-row>
              <v-text-field 
                v-show="h1_1"
                v-model="h_1_1"
                label="1.1"
                outlined
                shaped
              ></v-text-field>
              <v-btn v-show="h1_1" class="my-2 mx-5" color="warning"
              @click="h1_1=!h1_1" v-on:click="h_1_1=''">Delete</v-btn>
              </v-row>             
                  <v-col
                  cols="10">
                  <v-row>
                    <v-text-field 
                      v-show="h1_1_1"
                      v-model="h_1_1_1"
                      label="1.1.1"
                      outlined
                      shaped
                    ></v-text-field>
                    <v-btn v-show="h1_1_1" class="my-2 mx-5" color="warning"
                    @click="h1_1_1=!h1_1_1" v-on:click="h_1_1_1=''">Delete</v-btn>
                  </v-row>
                  <v-row>
                    <v-text-field 
                      v-show="h1_1_1_a"
                      v-model="h_1_1_1_a"
                      label="1.1.1.a"
                      outlined
                      shaped
                      class="mx-5"
                    ></v-text-field> 
                  <v-btn v-show="h1_1_1_a" class="my-2 mx-5" color="warning"
                    @click="h1_1_1_a=!h1_1_1_a" v-on:click="h_1_1_1_a=''">Delete</v-btn>

                  </v-row>
                  <v-row>
                  <v-text-field 
                    v-show="h1_1_2"
                    v-model="h_1_1_2"
                    label="1.1.2"
                    outlined
                    shaped
                  ></v-text-field>
                  <v-btn v-show="h1_1_2" class="my-2 mx-5" color="warning"
                    @click="h1_1_2=!h1_1_2" v-on:click="h_1_1_2=''">Delete</v-btn>
                  </v-row>
                  <v-row>
                  <v-text-field 
                    v-show="h1_1_2_a"
                    v-model="h_1_1_2_a"
                    label="1.1.2.a"
                    outlined
                    shaped
                    class="mx-5"
                  ></v-text-field>
                  <v-btn v-show="h1_1_2_a" class="my-2 mx-5" color="warning"
                    @click="h1_1_2_a=!h1_1_2_a" v-on:click="h_1_1_2_a=''">Delete</v-btn>
                  </v-row>
                  </v-col>
              
            </v-col>
            <v-col
              cols="10"
              >
              <v-row>
              <v-text-field 
                v-show="h1_2"
                v-model="h_1_2"
                label="1.2"
                outlined
                shaped
              ></v-text-field>
              <v-btn v-show="h1_2" class="my-2 mx-5" color="warning"
                    @click="h1_2=!h1_2" v-on:click="h_1_2=''">Delete</v-btn>
              </v-row>
                  <v-col
                  cols="10">
                  <v-row>
                    <v-text-field 
                      v-show="h1_2_1"
                      v-model="h_1_2_1"
                      label="1.2.1"
                      outlined
                      shaped
                    ></v-text-field>
                    <v-btn v-show="h1_2_1" class="my-2 mx-5" color="warning"
                    @click="h1_2_1=!h1_2_1" v-on:click="h_1_2_1=''">Delete</v-btn>
                    </v-row>
                    <v-row>
                      <v-text-field 
                      v-show="h1_2_1_a"
                      v-model="h_1_2_1_a"
                      label="1.2.1.a"
                      outlined
                      shaped
                      class="mx-5"
                    ></v-text-field>
                    <v-btn v-show="h1_2_1_a" class="my-2 mx-5" color="warning"
                    @click="h1_2_1_a=!h1_2_1_a" v-on:click="h_1_2_1_a=''">Delete</v-btn>
                    </v-row>
                  <v-row>
                    <v-text-field 
                      v-show="h1_2_2"
                      v-model="h_1_2_2"
                      label="1.2.2"
                      outlined
                      shaped
                    ></v-text-field>
                    <v-btn v-show="h1_2_2" class="my-2 mx-5" color="warning"
                    @click="h1_2_2=!h1_2_2" v-on:click="h_1_2_2=''">Delete</v-btn>
                    </v-row>
                    <v-row>
                    <v-text-field 
                    v-show="h1_2_2"
                    v-model="h_1_2_2_a"
                    label="1.2.2.a"
                    outlined
                    shaped
                    class="mx-5"
                  ></v-text-field>
                  <v-btn v-show="h1_2_2_a" class="my-2 mx-5" color="warning"
                    @click="h1_2_2_a=!h1_2_2_a" v-on:click="h_1_2_2_a=''">Delete</v-btn>
                    </v-row>
                  </v-col>
              
            </v-col>
            <v-col
              cols="10"
              >
              <v-row>
              <v-text-field 
                v-show="h1_3"
                v-model="h_1_3"
                label="1.3"
                outlined
                shaped
              ></v-text-field>
              <v-btn v-show="h1_3" class="my-2 mx-5" color="warning"
                    @click="h1_3=!h1_3" v-on:click="h_1_3=''">Delete</v-btn>
              </v-row>
                  <v-col
                  cols="10">
                  <v-row>
                    <v-text-field 
                      v-show="h1_3_1"
                      v-model="h_1_3_1"
                      label="1.3.1"
                      outlined
                      shaped
                    ></v-text-field>
                    <v-btn v-show="h1_3_1" class="my-2 mx-5" color="warning"
                    @click="h1_3_1=!h1_3_1" v-on:click="h_1_3_1=''">Delete</v-btn>
                    </v-row>
                    <v-row>
                    <v-text-field 
                    v-show="h1_3_1_a"
                    v-model="h_1_3_1_a"
                    label="1.3.1.a"
                    outlined
                    shaped
                    class="mx-5"
                  ></v-text-field>
                  <v-btn v-show="h1_3_1_a" class="my-2 mx-5" color="warning"
                    @click="h1_3_1_a=!h1_3_1_a" v-on:click="h_1_3_1_a=''">Delete</v-btn>
                    </v-row>
                  <v-row>
                    <v-text-field 
                      v-show="h1_3_2"
                      v-model="h_1_3_2"
                      label="1.3.2"
                      outlined
                      shaped
                    ></v-text-field>
                    <v-btn v-show="h1_3_2" class="my-2 mx-5" color="warning"
                    @click="h1_3_2=!h1_3_2" v-on:click="h_1_3_2=''">Delete</v-btn>
                    </v-row>
                    <v-row>
                    <v-text-field 
                    v-show="h1_3_2_a"
                    v-model="h_1_3_2_a"
                    label="1.3.2.a"
                    outlined
                    shaped
                    class="mx-5"
                  ></v-text-field>
                  <v-btn v-show="h1_3_2_a" class="my-2 mx-5" color="warning"
                    @click="h1_3_2_a=!h1_3_2_a" v-on:click="h_1_3_2_a=''">Delete</v-btn>
                    </v-row>
                  </v-col>
              
            </v-col>
            <v-col
              cols="10"
              >
              <v-row>
              <v-text-field 
                v-show="h1_4"
                v-model="h_1_4"
                label="1.4"
                outlined
                shaped
              ></v-text-field>
              <v-btn v-show="h1_4" class="my-2 mx-5" color="warning"
                    @click="h1_4=!h1_4" v-on:click="h_1_4=''">Delete</v-btn>
              </v-row>
                  <v-col
                  cols="10">
                  <v-row>
                    <v-text-field 
                      v-show="h1_4_1"
                      v-model="h_1_4_1"
                      label="1.4.1"
                      outlined
                      shaped
                    ></v-text-field>
                    <v-btn v-show="h1_4_1" class="my-2 mx-5" color="warning"
                    @click="h1_4_1=!h1_4_1" v-on:click="h_1_4_1=''">Delete</v-btn>
                    </v-row>
                    <v-row>
                      <v-text-field 
                      v-show="h1_4_1_a"
                      v-model="h_1_4_1_a"
                      label="1.4.1.a"
                      outlined
                      shaped
                      class="mx-5"
                    ></v-text-field>
                    <v-btn v-show="h1_4_1_a" class="my-2 mx-5" color="warning"
                    @click="h1_4_1_a=!h1_4_1_a" v-on:click="h_1_4_1_a=''">Delete</v-btn>
                    </v-row>
                  <v-row>
                    <v-text-field 
                      v-show="h1_4_2"
                      v-model="h_1_4_2"
                      label="1.4.2"
                      outlined
                      shaped
                    ></v-text-field>
                    <v-btn v-show="h1_4_2" class="my-2 mx-5" color="warning"
                    @click="h1_4_2=!h1_4_2" v-on:click="h_1_4_2=''">Delete</v-btn>
                    </v-row>
                    <v-row>
                    <v-text-field 
                    v-show="h1_4_2_a"
                    v-model="h_1_4_2_a"
                    label="1.4.2.a"
                    outlined
                    shaped
                    class="mx-5"
                  ></v-text-field>
                    <v-btn v-show="h1_4_2_a" class="my-2 mx-5" color="warning"
                    @click="h1_4_2_a=!h1_4_2_a" v-on:click="h_1_4_2_a=''">Delete</v-btn>
                    </v-row>
                  </v-col>
            </v-col>
        </v-col>
    </v-row>
    <v-row>
        <!-- field 2 -->
        <v-col
          cols="9"
          sm="6"
        >
          <v-text-field 
            v-model="h_2"
            label="2"
            outlined
            shaped
          ></v-text-field>
              <v-col
              cols="10"
              >
              <v-row>
              <v-text-field 
                v-show="h2_1"
                v-model="h_2_1"
                label="2.1"
                outlined
                shaped
              ></v-text-field>
              <v-btn v-show="h2_1" class="my-2 mx-5" color="warning"
              @click="h2_1=!h2_1" v-on:click="h_2_1=''">Delete</v-btn>
              </v-row>
              
                  <v-col
                  cols="10">
                  <v-row>
                    <v-text-field 
                      v-show="h2_1_1"
                      v-model="h_2_1_1"
                      label="2.1.1"
                      outlined
                      shaped
                    ></v-text-field>
                    <v-btn v-show="h2_1_1" class="my-2 mx-5" color="warning"
                    @click="h2_1_1=!h2_1_1" v-on:click="h_2_1_1=''">Delete</v-btn>
                  </v-row>
                  <v-row>
                  <v-text-field 
                    v-show="h2_1_1_a"
                    v-model="h_2_1_1_a"
                    label="2.1.1.a"
                    outlined
                    shaped
                    class="mx-5"
                  ></v-text-field>
                  <v-btn v-show="h2_1_1_a" class="my-2 mx-5" color="warning"
                    @click="h2_1_1_a=!h2_1_1_a" v-on:click="h_2_1_1_a=''">Delete</v-btn>
                  </v-row>
                  <v-row>
                  <v-text-field 
                    v-show="h2_1_2"
                    v-model="h_2_1_2"
                    label="2.1.2"
                    outlined
                    shaped
                  ></v-text-field>
                  <v-btn v-show="h2_1_2" class="my-2 mx-5" color="warning"
                    @click="h2_1_2=!h2_1_2" v-on:click="h_2_1_2=''">Delete</v-btn>
                  </v-row>
                  <v-row>
                  <v-text-field 
                    v-show="h2_1_2_a"
                    v-model="h_2_1_2_a"
                    label="2.2.1.a"
                    outlined
                    shaped
                    class="mx-5"
                  ></v-text-field>
                  <v-btn v-show="h2_1_2_a" class="my-2 mx-5" color="warning"
                    @click="h2_1_2_a=!h2_1_2_a" v-on:click="h_2_1_2_a=''">Delete</v-btn>
                  </v-row>
                  </v-col>
              
            </v-col>
            <v-col
              cols="10"
              >
              <v-row>
              <v-text-field 
                v-show="h2_2"
                v-model="h_2_2"
                label="2.2"
                outlined
                shaped
              ></v-text-field>
              <v-btn v-show="h2_2" class="my-2 mx-5" color="warning"
                    @click="h2_2=!h2_2" v-on:click="h_2_2=''">Delete</v-btn>
              </v-row>
                  <v-col
                  cols="10">
                  <v-row>
                    <v-text-field 
                      v-show="h2_2_1"
                      v-model="h_2_2_1"
                      label="2.2.1"
                      outlined
                      shaped
                    ></v-text-field>
                    <v-btn v-show="h2_2_1" class="my-2 mx-5" color="warning"
                    @click="h2_2_1=!h2_2_1" v-on:click="h_2_2_1=''">Delete</v-btn>
                    </v-row>
                    <v-row>
                      <v-text-field 
                      v-show="h2_2_1_a"
                      v-model="h_2_2_1_a"
                      label="2.2.1.a"
                      outlined
                      shaped
                      class="mx-5"
                    ></v-text-field>
                    <v-btn v-show="h2_2_1_a" class="my-2 mx-5" color="warning"
                    @click="h2_2_1_a=!h2_2_1_a" v-on:click="h_2_2_1_a=''">Delete</v-btn>
                    </v-row>
                  <v-row>
                    <v-text-field 
                      v-show="h2_2_2"
                      v-model="h_2_2_2"
                      label="2.2.2"
                      outlined
                      shaped
                    ></v-text-field>
                    <v-btn v-show="h2_2_2" class="my-2 mx-5" color="warning"
                    @click="h2_2_2=!h2_2_2" v-on:click="h_2_2_2=''">Delete</v-btn>
                    </v-row>
                    <v-row>
                    <v-text-field 
                    v-show="h2_2_2"
                    v-model="h_2_2_2_a"
                    label="2.2.2.a"
                    outlined
                    shaped
                    class="mx-5"
                  ></v-text-field>
                  <v-btn v-show="h2_2_2_a" class="my-2 mx-5" color="warning"
                    @click="h2_2_2_a=!h2_2_2_a" v-on:click="h_2_2_2_a=''">Delete</v-btn>
                    </v-row>
                  </v-col>
              
            </v-col>
            <v-col
              cols="10"
              >
              <v-row>
              <v-text-field 
                v-show="h2_3"
                v-model="h_2_3"
                label="2.3"
                outlined
                shaped
              ></v-text-field>
              <v-btn v-show="h2_3" class="my-2 mx-5" color="warning"
                    @click="h2_3=!h2_3" v-on:click="h_2_3=''">Delete</v-btn>
              </v-row>
                  <v-col
                  cols="10">
                  <v-row>
                    <v-text-field 
                      v-show="h2_3_1"
                      v-model="h_2_3_1"
                      label="2.3.1"
                      outlined
                      shaped
                    ></v-text-field>
                    <v-btn v-show="h2_3_1" class="my-2 mx-5" color="warning"
                    @click="h2_3_1=!h2_3_1" v-on:click="h_2_3_1=''">Delete</v-btn>
                    </v-row>
                    <v-row>
                    <v-text-field 
                    v-show="h2_3_1_a"
                    v-model="h_2_3_1_a"
                    label="2.3.1.a"
                    outlined
                    shaped
                    class="mx-5"
                  ></v-text-field>
                  <v-btn v-show="h2_3_1_a" class="my-2 mx-5" color="warning"
                    @click="h2_3_1_a=!h2_3_1_a" v-on:click="h_2_3_1_a=''">Delete</v-btn>
                    </v-row>
                  <v-row>
                    <v-text-field 
                      v-show="h2_3_2"
                      v-model="h_2_3_2"
                      label="2.3.2"
                      outlined
                      shaped
                    ></v-text-field>
                    <v-btn v-show="h2_3_2" class="my-2 mx-5" color="warning"
                    @click="h2_3_2=!h2_3_2" v-on:click="h_2_3_2=''">Delete</v-btn>
                    </v-row>
                    <v-row>
                    <v-text-field 
                    v-show="h2_3_2_a"
                    v-model="h_2_3_2_a"
                    label="2.3.2.a"
                    outlined
                    shaped
                    class="mx-5"
                  ></v-text-field>
                  <v-btn v-show="h2_3_2_a" class="my-2 mx-5" color="warning"
                    @click="h2_3_2_a=!h2_3_2_a" v-on:click="h_2_3_2_a=''">Delete</v-btn>
                    </v-row>
                  </v-col>
              
            </v-col>
            <v-col
              cols="10"
              >
              <v-row>
              <v-text-field 
                v-show="h2_4"
                v-model="h_2_4"
                label="2.4"
                outlined
                shaped
              ></v-text-field>
              <v-btn v-show="h2_4" class="my-2 mx-5" color="warning"
                    @click="h2_4=!h2_4" v-on:click="h_2_4=''">Delete</v-btn>
              </v-row>
                  <v-col
                  cols="10">
                  <v-row>
                    <v-text-field 
                      v-show="h2_4_1"
                      v-model="h_2_4_1"
                      label="2.4.1"
                      outlined
                      shaped
                    ></v-text-field>
                    <v-btn v-show="h2_4_1" class="my-2 mx-5" color="warning"
                    @click="h2_4_1=!h2_4_1" v-on:click="h_2_4_1=''">Delete</v-btn>
                    </v-row>
                    <v-row>
                      <v-text-field 
                      v-show="h2_4_1_a"
                      v-model="h_2_4_1_a"
                      label="2.4.1.a"
                      outlined
                      shaped
                      class="mx-5"
                    ></v-text-field>
                    <v-btn v-show="h2_4_1_a" class="my-2 mx-5" color="warning"
                    @click="h2_4_1_a=!h2_4_1_a" v-on:click="h_2_4_1_a=''">Delete</v-btn>
                    </v-row>
                  <v-row>
                    <v-text-field 
                      v-show="h2_4_2"
                      v-model="h_2_4_2"
                      label="2.4.2"
                      outlined
                      shaped
                    ></v-text-field>
                    <v-btn v-show="h2_4_2" class="my-2 mx-5" color="warning"
                    @click="h2_4_2=!h2_4_2" v-on:click="h_2_4_2=''">Delete</v-btn>
                    </v-row>
                    <v-row>
                    <v-text-field 
                    v-show="h2_4_2_a"
                    v-model="h_2_4_2_a"
                    label="2.4.2"
                    outlined
                    shaped
                    class="mx-5"
                  ></v-text-field>
                    <v-btn v-show="h2_4_2_a" class="my-2 mx-5" color="warning"
                    @click="h2_4_2_a=!h2_4_2_a" v-on:click="h_2_4_2_a=''">Delete</v-btn>
                    </v-row>
                  </v-col>
            </v-col>
        </v-col>
    </v-row>
     <v-row>
        <!-- field 3 -->
        <v-col
          cols="9"
          sm="6"
        >
          <v-text-field 
            v-model="h_3"
            label="3"
            outlined
            shaped
          ></v-text-field>
              <v-col
              cols="10"
              >
              <v-row>
              <v-text-field 
                v-show="h3_1"
                v-model="h_3_1"
                label="3.1"
                outlined
                shaped
              ></v-text-field>
              <v-btn v-show="h3_1" class="my-2 mx-5" color="warning"
              @click="h3_1=!h3_1" v-on:click="h_3_1=''">Delete</v-btn>
              </v-row>
              
                  <v-col
                  cols="10">
                  <v-row>
                    <v-text-field 
                      v-show="h3_1_1"
                      v-model="h_3_1_1"
                      label="3.1.1"
                      outlined
                      shaped
                    ></v-text-field>
                    <v-btn v-show="h3_1_1" class="my-2 mx-5" color="warning"
                    @click="h3_1_1=!h3_1_1" v-on:click="h_3_1_1=''">Delete</v-btn>
                  </v-row>
                  <v-row>
                  <v-text-field 
                    v-show="h3_1_1_a"
                    v-model="h_3_1_1_a"
                    label="3.1.1.a"
                    outlined
                    shaped
                    class="mx-5"
                  ></v-text-field>
                  <v-btn v-show="h3_1_1_a" class="my-2 mx-5" color="warning"
                    @click="h3_1_1_a=!h3_1_1_a" v-on:click="h_3_1_1_a=''">Delete</v-btn>
                  </v-row>
                  <v-row>
                  <v-text-field 
                    v-show="h3_1_2"
                    v-model="h_3_1_2"
                    label="3.2.1"
                    outlined
                    shaped
                  ></v-text-field>
                  <v-btn v-show="h3_1_2" class="my-2 mx-5" color="warning"
                    @click="h3_1_2=!h3_1_2" v-on:click="h_3_1_2=''">Delete</v-btn>
                  </v-row>
                  <v-row>
                  <v-text-field 
                    v-show="h3_1_2_a"
                    v-model="h_3_1_2_a"
                    label="3.1.2.a"
                    outlined
                    shaped
                    class="mx-5"
                  ></v-text-field>
                  <v-btn v-show="h3_1_2_a" class="my-2 mx-5" color="warning"
                    @click="h3_1_2_a=!h3_1_2_a" v-on:click="h_3_1_2_a=''">Delete</v-btn>
                  </v-row>
                  </v-col>
              
            </v-col>
            <v-col
              cols="10"
              >
              <v-row>
              <v-text-field 
                v-show="h3_2"
                v-model="h_3_2"
                label="3.2"
                outlined
                shaped
              ></v-text-field>
              <v-btn v-show="h3_2" class="my-2 mx-5" color="warning"
                    @click="h3_2=!h3_2" v-on:click="h_3_2=''">Delete</v-btn>
              </v-row>
                  <v-col
                  cols="10">
                  <v-row>
                    <v-text-field 
                      v-show="h3_2_1"
                      v-model="h_3_2_1"
                      label="3.2.1"
                      outlined
                      shaped
                    ></v-text-field>
                    <v-btn v-show="h3_2_1" class="my-2 mx-5" color="warning"
                    @click="h3_2_1=!h3_2_1" v-on:click="h_3_2_1=''">Delete</v-btn>
                    </v-row>
                    <v-row>
                      <v-text-field 
                      v-show="h3_2_1_a"
                      v-model="h_3_2_1_a"
                      label="3.2.1.a"
                      outlined
                      shaped
                      class="mx-5"
                    ></v-text-field>
                    <v-btn v-show="h3_2_1_a" class="my-2 mx-5" color="warning"
                    @click="h3_2_1_a=!h3_2_1_a" v-on:click="h_3_2_1_a=''">Delete</v-btn>
                    </v-row>
                  <v-row>
                    <v-text-field 
                      v-show="h3_2_2"
                      v-model="h_3_2_2"
                      label="3.2.2"
                      outlined
                      shaped
                    ></v-text-field>
                    <v-btn v-show="h3_2_2" class="my-2 mx-5" color="warning"
                    @click="h3_2_2=!h3_2_2" v-on:click="h_3_2_2=''">Delete</v-btn>
                    </v-row>
                    <v-row>
                    <v-text-field 
                    v-show="h3_2_2"
                    v-model="h_3_2_2_a"
                    label="3.2.2.a"
                    outlined
                    shaped
                    class="mx-5"
                  ></v-text-field>
                  <v-btn v-show="h3_2_2_a" class="my-2 mx-5" color="warning"
                    @click="h3_2_2_a=!h3_2_2_a" v-on:click="h_3_2_2_a=''">Delete</v-btn>
                    </v-row>
                  </v-col>
              
            </v-col>
            <v-col
              cols="10"
              >
              <v-row>
              <v-text-field 
                v-show="h3_3"
                v-model="h_3_3"
                label="3.3"
                outlined
                shaped
              ></v-text-field>
              <v-btn v-show="h3_3" class="my-2 mx-5" color="warning"
                    @click="h3_3=!h3_3" v-on:click="h_3_3=''">Delete</v-btn>
              </v-row>
                  <v-col
                  cols="10">
                  <v-row>
                    <v-text-field 
                      v-show="h3_3_1"
                      v-model="h_3_3_1"
                      label="3.3.1"
                      outlined
                      shaped
                    ></v-text-field>
                    <v-btn v-show="h3_3_1" class="my-2 mx-5" color="warning"
                    @click="h3_3_1=!h3_3_1" v-on:click="h_3_3_1=''">Delete</v-btn>
                    </v-row>
                    <v-row>
                    <v-text-field 
                    v-show="h3_3_1_a"
                    v-model="h_3_3_1_a"
                    label="3.3.1.a"
                    outlined
                    shaped
                    class="mx-5"
                  ></v-text-field>
                  <v-btn v-show="h3_3_1_a" class="my-2 mx-5" color="warning"
                    @click="h3_3_1_a=!h3_3_1_a" v-on:click="h_3_3_1_a=''">Delete</v-btn>
                    </v-row>
                  <v-row>
                    <v-text-field 
                      v-show="h3_3_2"
                      v-model="h_3_3_2"
                      label="3.3.2"
                      outlined
                      shaped
                    ></v-text-field>
                    <v-btn v-show="h3_3_2" class="my-2 mx-5" color="warning"
                    @click="h3_3_2=!h3_3_2" v-on:click="h_3_3_2=''">Delete</v-btn>
                    </v-row>
                    <v-row>
                    <v-text-field 
                    v-show="h3_3_2_a"
                    v-model="h_3_3_2_a"
                    label="3.3.2.a"
                    outlined
                    shaped
                    class="mx-5"
                  ></v-text-field>
                  <v-btn v-show="h3_3_2_a" class="my-2 mx-5" color="warning"
                    @click="h3_3_2_a=!h3_3_2_a" v-on:click="h_3_3_2_a=''">Delete</v-btn>
                    </v-row>
                  </v-col>
              
            </v-col>
            <v-col
              cols="10"
              >
              <v-row>
              <v-text-field 
                v-show="h3_4"
                v-model="h_3_4"
                label="3.4"
                outlined
                shaped
              ></v-text-field>
              <v-btn v-show="h3_4" class="my-2 mx-5" color="warning"
                    @click="h3_4=!h3_4" v-on:click="h_3_4=''">Delete</v-btn>
              </v-row>
                  <v-col
                  cols="10">
                  <v-row>
                    <v-text-field 
                      v-show="h3_4_1"
                      v-model="h_3_4_1"
                      label="3.4.1"
                      outlined
                      shaped
                    ></v-text-field>
                    <v-btn v-show="h3_4_1" class="my-2 mx-5" color="warning"
                    @click="h3_4_1=!h3_4_1" v-on:click="h_3_4_1=''">Delete</v-btn>
                    </v-row>
                    <v-row>
                      <v-text-field 
                      v-show="h3_4_1_a"
                      v-model="h_3_4_1_a"
                      label="3.4.1.a"
                      outlined
                      shaped
                      class="mx-5"
                    ></v-text-field>
                    <v-btn v-show="h3_4_1_a" class="my-2 mx-5" color="warning"
                    @click="h3_4_1_a=!h3_4_1_a" v-on:click="h_3_4_1_a=''">Delete</v-btn>
                    </v-row>
                  <v-row>
                    <v-text-field 
                      v-show="h3_4_2"
                      v-model="h_3_4_2"
                      label="4.4.2"
                      outlined
                      shaped
                    ></v-text-field>
                    <v-btn v-show="h3_4_2" class="my-2 mx-5" color="warning"
                    @click="h3_4_2=!h3_4_2" v-on:click="h_3_4_2=''">Delete</v-btn>
                    </v-row>
                    <v-row>
                    <v-text-field 
                    v-show="h3_4_2_a"
                    v-model="h_3_4_2_a"
                    label="3.4.2.a"
                    outlined
                    shaped
                    class="mx-5"
                  ></v-text-field>
                    <v-btn v-show="h3_4_2_a" class="my-2 mx-5" color="warning"
                    @click="h3_4_2_a=!h3_4_2_a" v-on:click="h_3_4_2_a=''">Delete</v-btn>
                    </v-row>
                  </v-col>
            </v-col>
        </v-col>
    </v-row>
    <v-row>
        <!-- field 4 -->
        <v-col
          cols="9"
          sm="6"
        >
          <v-text-field 
            v-model="h_4"
            label="4"
            outlined
            shaped
          ></v-text-field>
              <v-col
              cols="10"
              >
              <v-row>
              <v-text-field 
                v-show="h4_1"
                v-model="h_4_1"
                label="4.1"
                outlined
                shaped
              ></v-text-field>
              <v-btn v-show="h4_1" class="my-2 mx-5" color="warning"
              @click="h4_1=!h4_1" v-on:click="h_4_1=''">Delete</v-btn>
              </v-row>
              
                  <v-col
                  cols="10">
                  <v-row>
                    <v-text-field 
                      v-show="h4_1_1"
                      v-model="h_4_1_1"
                      label="4.1.1"
                      outlined
                      shaped
                    ></v-text-field>
                    <v-btn v-show="h4_1_1" class="my-2 mx-5" color="warning"
                    @click="h4_1_1=!h4_1_1" v-on:click="h_4_1_1=''">Delete</v-btn>
                  </v-row>
                  <v-row>
                  <v-text-field 
                    v-show="h4_1_1_a"
                    v-model="h_4_1_1_a"
                    label="4.1.1.a"
                    outlined
                    shaped
                    class="mx-5"
                  ></v-text-field>
                  <v-btn v-show="h4_1_1_a" class="my-2 mx-5" color="warning"
                    @click="h4_1_1_a=!h4_1_1_a" v-on:click="h_4_1_1_a=''">Delete</v-btn>
                  </v-row>
                  <v-row>
                  <v-text-field 
                    v-show="h4_1_2"
                    v-model="h_4_1_2"
                    label="4.1.2"
                    outlined
                    shaped
                  ></v-text-field>
                  <v-btn v-show="h4_1_2" class="my-2 mx-5" color="warning"
                    @click="h4_1_2=!h4_1_2" v-on:click="h_4_1_2=''">Delete</v-btn>
                  </v-row>
                  <v-row>
                  <v-text-field 
                    v-show="h4_1_2_a"
                    v-model="h_4_1_2_a"
                    label="4.1.2.a"
                    outlined
                    shaped
                    class="mx-5"
                  ></v-text-field>
                  <v-btn v-show="h4_1_2_a" class="my-2 mx-5" color="warning"
                    @click="h4_1_2_a=!h4_1_2_a" v-on:click="h_4_1_2_a=''">Delete</v-btn>
                  </v-row>
                  </v-col>
              
            </v-col>
            <v-col
              cols="10"
              >
              <v-row>
              <v-text-field 
                v-show="h4_2"
                v-model="h_4_2"
                label="4.2"
                outlined
                shaped
              ></v-text-field>
              <v-btn v-show="h4_2" class="my-2 mx-5" color="warning"
                    @click="h4_2=!h4_2" v-on:click="h_4_2=''">Delete</v-btn>
              </v-row>
                  <v-col
                  cols="10">
                  <v-row>
                    <v-text-field 
                      v-show="h4_2_1"
                      v-model="h_4_2_1"
                      label="4.2.1"
                      outlined
                      shaped
                    ></v-text-field>
                    <v-btn v-show="h4_2_1" class="my-2 mx-5" color="warning"
                    @click="h4_2_1=!h4_2_1" v-on:click="h_4_2_1=''">Delete</v-btn>
                    </v-row>
                    <v-row>
                      <v-text-field 
                      v-show="h4_2_1_a"
                      v-model="h_4_2_1_a"
                      label="4.2.1.a"
                      outlined
                      shaped
                      class="mx-5"
                    ></v-text-field>
                    <v-btn v-show="h4_2_1_a" class="my-2 mx-5" color="warning"
                    @click="h4_2_1_a=!h4_2_1_a" v-on:click="h_4_2_1_a=''">Delete</v-btn>
                    </v-row>
                  <v-row>
                    <v-text-field 
                      v-show="h4_2_2"
                      v-model="h_4_2_2"
                      label="4.2.2"
                      outlined
                      shaped
                    ></v-text-field>
                    <v-btn v-show="h4_2_2" class="my-2 mx-5" color="warning"
                    @click="h4_2_2=!h4_2_2" v-on:click="h_4_2_2=''">Delete</v-btn>
                    </v-row>
                    <v-row>
                    <v-text-field 
                    v-show="h4_2_2"
                    v-model="h_4_2_2_a"
                    label="4.2.2.a"
                    outlined
                    shaped
                    class="mx-5"
                  ></v-text-field>
                  <v-btn v-show="h4_2_2_a" class="my-2 mx-5" color="warning"
                    @click="h4_2_2_a=!h4_2_2_a" v-on:click="h_4_2_2_a=''">Delete</v-btn>
                    </v-row>
                  </v-col>
              
            </v-col>
            <v-col
              cols="10"
              >
              <v-row>
              <v-text-field 
                v-show="h4_3"
                v-model="h_4_3"
                label="4.3"
                outlined
                shaped
              ></v-text-field>
              <v-btn v-show="h4_3" class="my-2 mx-5" color="warning"
                    @click="h4_3=!h4_3" v-on:click="h_4_3=''">Delete</v-btn>
              </v-row>
                  <v-col
                  cols="10">
                  <v-row>
                    <v-text-field 
                      v-show="h4_3_1"
                      v-model="h_4_3_1"
                      label="4.3.1"
                      outlined
                      shaped
                    ></v-text-field>
                    <v-btn v-show="h4_3_1" class="my-2 mx-5" color="warning"
                    @click="h4_3_1=!h4_3_1" v-on:click="h_4_3_1=''">Delete</v-btn>
                    </v-row>
                    <v-row>
                    <v-text-field 
                    v-show="h4_3_1_a"
                    v-model="h_4_3_1_a"
                    label="4.3.1.a"
                    outlined
                    shaped
                    class="mx-5"
                  ></v-text-field>
                  <v-btn v-show="h4_3_1_a" class="my-2 mx-5" color="warning"
                    @click="h4_3_1_a=!h4_3_1_a" v-on:click="h_4_3_1_a=''">Delete</v-btn>
                    </v-row>
                  <v-row>
                    <v-text-field 
                      v-show="h4_3_2"
                      v-model="h_4_3_2"
                      label="4.3.2"
                      outlined
                      shaped
                    ></v-text-field>
                    <v-btn v-show="h4_3_2" class="my-2 mx-5" color="warning"
                    @click="h4_3_2=!h4_3_2" v-on:click="h_4_3_2=''">Delete</v-btn>
                    </v-row>
                    <v-row>
                    <v-text-field 
                    v-show="h4_3_2_a"
                    v-model="h_4_3_2_a"
                    label="4.3.2.a"
                    outlined
                    shaped
                    class="mx-5"
                  ></v-text-field>
                  <v-btn v-show="h4_3_2_a" class="my-2 mx-5" color="warning"
                    @click="h4_3_2_a=!h4_3_2_a" v-on:click="h_4_3_2_a=''">Delete</v-btn>
                    </v-row>
                  </v-col>
              
            </v-col>
            <v-col
              cols="10"
              >
              <v-row>
              <v-text-field 
                v-show="h4_4"
                v-model="h_4_4"
                label="4.4"
                outlined
                shaped
              ></v-text-field>
              <v-btn v-show="h4_4" class="my-2 mx-5" color="warning"
                    @click="h4_4=!h4_4" v-on:click="h_4_4=''">Delete</v-btn>
              </v-row>
                  <v-col
                  cols="10">
                  <v-row>
                    <v-text-field 
                      v-show="h4_4_1"
                      v-model="h_4_4_1"
                      label="4.4.1"
                      outlined
                      shaped
                    ></v-text-field>
                    <v-btn v-show="h4_4_1" class="my-2 mx-5" color="warning"
                    @click="h4_4_1=!h4_4_1" v-on:click="h_4_4_1=''">Delete</v-btn>
                    </v-row>
                    <v-row>
                      <v-text-field 
                      v-show="h4_4_1_a"
                      v-model="h_4_4_1_a"
                      label="4.4.1.a"
                      outlined
                      shaped
                      class="mx-5"
                    ></v-text-field>
                    <v-btn v-show="h4_4_1_a" class="my-2 mx-5" color="warning"
                    @click="h4_4_1_a=!h4_4_1_a" v-on:click="h_4_4_1_a=''">Delete</v-btn>
                    </v-row>
                  <v-row>
                    <v-text-field 
                      v-show="h4_4_2"
                      v-model="h_4_4_2"
                      label="4.4.2"
                      outlined
                      shaped
                    ></v-text-field>
                    <v-btn v-show="h4_4_2" class="my-2 mx-5" color="warning"
                    @click="h4_4_2=!h4_4_2" v-on:click="h_4_4_2=''">Delete</v-btn>
                    </v-row>
                    <v-row>
                    <v-text-field 
                    v-show="h4_4_2_a"
                    v-model="h_4_4_2_a"
                    label="4.4.2.a"
                    outlined
                    shaped
                    class="mx-5"
                  ></v-text-field>
                    <v-btn v-show="h4_4_2_a" class="my-2 mx-5" color="warning"
                    @click="h4_4_2_a=!h4_4_2_a" v-on:click="h_4_4_2_a=''">Delete</v-btn>
                    </v-row>
                  </v-col>
            </v-col>
        </v-col>
    </v-row>
    <v-btn class="my-2 mx-5" color="warning" x-large rounded @click="flowImg">See Flow</v-btn>
    <v-btn class="my-2" color="warning" x-large rounded @click="Submit">Submit</v-btn>

  </div>
</template>
<script>
import $ from 'jquery'

export default {
  data () {
    return {
      h1_1:true,
      h1_1_1:true,
      h1_1_2:true,
      h1_1_1_a:true,
      h1_1_2_a:true,
      h1_2:true,
      h1_2_1:true,
      h1_2_2:true,
      h1_2_1_a:true,
      h1_2_2_a:true,
      h1_3:true,
      h1_3_1:true,
      h1_3_2:true,
      h1_3_1_a:true,
      h1_3_2_a:true,
      h1_4:true,
      h1_4_1:true,
      h1_4_2:true,
      h1_4_1_a:true,
      h1_4_2_a:true,
      h_0:'',
      h_1:'',
      h_1_1:'',
      h_1_1_1:'',
      h_1_1_2:'',
      h_1_1_1_a:'',
      h_1_1_2_a:'',
      h_1_2:'',
      h_1_2_1:'',
      h_1_2_2:'',
      h_1_2_1_a:'',
      h_1_2_2_a:'',
      h_1_3:'',
      h_1_3_1:'',
      h_1_3_2:'',
      h_1_3_1_a:'',
      h_1_3_2_a:'',
      h_1_4:'',
      h_1_4_1:'',
      h_1_4_2:'',
      h_1_4_1_a:'',
      h_1_4_2_a:'',


      h2:true,
      h2_1:true,
      h2_1_1:true,
      h2_1_2:true,
      h2_1_1_a:true,
      h2_1_2_a:true,
      h2_2:true,
      h2_2_1:true,
      h2_2_2:true,
      h2_2_1_a:true,
      h2_2_2_a:true,
      h2_3:true,
      h2_3_1:true,
      h2_3_2:true,
      h2_3_1_a:true,
      h2_3_2_a:true,
      h2_4:true,
      h2_4_1:true,
      h2_4_2:true,
      h2_4_1_a:true,
      h2_4_2_a:true,
      h_2:'',
      h_2_1:'',
      h_2_1_1:'',
      h_2_1_2:'',
      h_2_1_1_a:'',
      h_2_1_2_a:'',
      h_2_2:'',
      h_2_2_1:'',
      h_2_2_2:'',
      h_2_2_1_a:'',
      h_2_2_2_a:'',
      h_2_3:'',
      h_2_3_1:'',
      h_2_3_2:'',
      h_2_3_1_a:'',
      h_2_3_2_a:'',
      h_2_4:'',
      h_2_4_1:'',
      h_2_4_2:'',
      h_2_4_1_a:'',
      h_2_4_2_a:'',


      h3:true,
      h3_1:true,
      h3_1_1:true,
      h3_1_2:true,
      h3_1_1_a:true,
      h3_1_2_a:true,
      h3_2:true,
      h3_2_1:true,
      h3_2_2:true,
      h3_2_1_a:true,
      h3_2_2_a:true,
      h3_3:true,
      h3_3_1:true,
      h3_3_2:true,
      h3_3_1_a:true,
      h3_3_2_a:true,
      h3_4:true,
      h3_4_1:true,
      h3_4_2:true,
      h3_4_1_a:true,
      h3_4_2_a:true,
      h_3:'',
      h_3_1:'',
      h_3_1_1:'',
      h_3_1_2:'',
      h_3_1_1_a:'',
      h_3_1_2_a:'',
      h_3_2:'',
      h_3_2_1:'',
      h_3_2_2:'',
      h_3_2_1_a:'',
      h_3_2_2_a:'',
      h_3_3:'',
      h_3_3_1:'',
      h_3_3_2:'',
      h_3_3_1_a:'',
      h_3_3_2_a:'',
      h_3_4:'',
      h_3_4_1:'',
      h_3_4_2:'',
      h_3_4_1_a:'',
      h_3_4_2_a:'',



      h4:true,
      h4_1:true,
      h4_1_1:true,
      h4_1_2:true,
      h4_1_1_a:true,
      h4_1_2_a:true,
      h4_2:true,
      h4_2_1:true,
      h4_2_2:true,
      h4_2_1_a:true,
      h4_2_2_a:true,
      h4_3:true,
      h4_3_1:true,
      h4_3_2:true,
      h4_3_1_a:true,
      h4_3_2_a:true,
      h4_4:true,
      h4_4_1:true,
      h4_4_2:true,
      h4_4_1_a:true,
      h4_4_2_a:true,
      h_4:'',
      h_4_1:'',
      h_4_1_1:'',
      h_4_1_2:'',
      h_4_1_1_a:'',
      h_4_1_2_a:'',
      h_4_2:'',
      h_4_2_1:'',
      h_4_2_2:'',
      h_4_2_1_a:'',
      h_4_2_2_a:'',
      h_4_3:'',
      h_4_3_1:'',
      h_4_3_2:'',
      h_4_3_1_a:'',
      h_4_3_2_a:'',
      h_4_4:'',
      h_4_4_1:'',
      h_4_4_2:'',
      h_4_4_1_a:'',
      h_4_4_2_a:'',
      items:[]
      
    }
  },
  methods: {
     flowImg(){
       this.$router.push({path: '/dashboard2/flow/insideflow/item?',
       name:'tree',
       params: { item: JSON.stringify(this.items) }
  })
     },
     pushingdb(){
       var greetdb= this.h_0;
      var strdb=JSON.stringify(this.items);
         var auth = "https://botbuilder.freshdigital.io//authentication";
      var db = "https://botbuilder.freshdigital.io/botbuilder/";
      var token;
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
        console.log(strdb);
        var mstrdb =strdb.substring(0, strdb.length-1);
        console.log(mstrdb);
        var nstrdb= mstrdb.replace(/[['"]+/g, '');
        console.log(mstrdb.replace(/[['"]+/g, ''));
        // var mstrdb =nstrdb.substring(0, nstrdb.length-1);
        console.log(nstrdb);
        console.log(greetdb);
        console.log(token,db);
       $.ajax({
            url: db,
            data: {
              greeting: greetdb, 
              content: nstrdb, 
              color: "red", 
              botname: "testbot", 
              username: "Testuser-one", 
              password: "Pass@123",    
              organisation: "Test-Org", 
              projectname: "Botbuilder framework", 
              project_description: "Botbuilder framework description"
            },
            type: "POST",
            beforeSend: function (xhr) {
              xhr.setRequestHeader("Authorization", "Bearer " + token);
            },
          }).then(function () {
            alert("added");
            
          });
 });
     },
     Submit(){
      alert("submitted");
       
       console.log(this.h_0);
       console.log(this.h_1);
       console.log(this.h_1_1);
       console.log(this.h_1_1_1);
       console.log(this.h_1_1_2);
       console.log(this.h_1_1_1_a);
       console.log(this.h_1_1_2_a);
       console.log(this.h_1_2);
       console.log(this.h_1_2_1);
       console.log(this.h_1_2_2);
       console.log(this.h_1_2_1_a);
       console.log(this.h_1_2_2_a);
       console.log(this.h_1_3);
       console.log(this.h_1_3_1);
       console.log(this.h_1_3_2);
       console.log(this.h_1_3_1_a);
       console.log(this.h_1_3_2_a);
       console.log(this.h_1_4);
       console.log(this.h_1_4_1);
       console.log(this.h_1_4_2);
       console.log(this.h_1_4_1_a);
       console.log(this.h_1_4_2_a);
       // field 2
       console.log(this.h_2);
       console.log(this.h_2_1);
       console.log(this.h_2_1_1);
       console.log(this.h_2_1_2);
       console.log(this.h_2_1_1_a);
       console.log(this.h_2_1_2_a);
       console.log(this.h_2_2);
       console.log(this.h_2_2_1);
       console.log(this.h_2_2_2);
       console.log(this.h_2_2_1_a);
       console.log(this.h_2_2_2_a);
       console.log(this.h_2_3);
       console.log(this.h_2_3_1);
       console.log(this.h_2_3_2);
       console.log(this.h_2_3_1_a);
       console.log(this.h_2_3_2_a);
       console.log(this.h_2_4);
       console.log(this.h_2_4_1);
       console.log(this.h_2_4_2);
       console.log(this.h_2_4_1_a);
       console.log(this.h_2_4_2_a);
       // field 3
       console.log(this.h_3);
       console.log(this.h_3_1);
       console.log(this.h_3_1_1);
       console.log(this.h_3_1_2);
       console.log(this.h_3_1_1_a);
       console.log(this.h_3_1_2_a);
       console.log(this.h_3_2);
       console.log(this.h_3_2_1);
       console.log(this.h_3_2_2);
       console.log(this.h_3_2_1_a);
       console.log(this.h_3_2_2_a);
       console.log(this.h_3_3);
       console.log(this.h_3_3_1);
       console.log(this.h_3_3_2);
       console.log(this.h_3_3_1_a);
       console.log(this.h_3_3_2_a);
       console.log(this.h_3_4);
       console.log(this.h_3_4_1);
       console.log(this.h_3_4_2);
       console.log(this.h_3_4_1_a);
       console.log(this.h_3_4_2_a);
       // field 4
       console.log(this.h_4);
       console.log(this.h_4_1);
       console.log(this.h_4_1_1);
       console.log(this.h_4_1_2);
       console.log(this.h_4_1_1_a);
       console.log(this.h_4_1_2_a);
       console.log(this.h_4_2);
       console.log(this.h_4_2_1);
       console.log(this.h_4_2_2);
       console.log(this.h_4_2_1_a);
       console.log(this.h_4_2_2_a);
       console.log(this.h_4_3);
       console.log(this.h_4_3_1);
       console.log(this.h_4_3_2);
       console.log(this.h_4_3_1_a);
       console.log(this.h_4_3_2_a);
       console.log(this.h_4_4);
       console.log(this.h_4_4_1);
       console.log(this.h_4_4_2);
       console.log(this.h_4_4_1_a);
       console.log(this.h_4_4_2_a);

       // array pushing
       // field 1
      //  if(this.h_0 !=''){
      //    this.items.push('0',this.h_0);
      //  }
       if(this.h_1 !=''){
            this.items.push('1',this.h_1)
       }
       if(this.h_1_1 !=''
       ){
         if(this.h_1_1_1==''){
           this.items.push('1.a',this.h_1_1);
         } 
          else{
          this.items.push('1.1',this.h_1_1);
          }
       }
       if(this.h_1_1_1 !=''){
         if(this.h_1_1_1_a==''){
           this.items.push('1.1.a',this.h_1_1_1);
         } 
          else{
          this.items.push('1.1.1',this.h_1_1_1);
          }
         
       }
       if(this.h_1_1_1_a !=''){
         this.items.push('1.1.1.a',this.h_1_1_1_a);
       }
       if(this.h_1_1_2 !=''){
         if(this.h_1_1_2_a==''){
           this.items.push('1.1.2.a',this.h_1_1_2);
         } 
          else{
            this.items.push('1.1.2',this.h_1_1_2);
          }
       }
       if(this.h_1_1_2_a !=''){
         this.items.push('1.1.2.a',this.h_1_1_2_a);
       }
       if(this.h_1_2 !=''){
         if(this.h_1_2_1==''){
           this.items.push('1.2.a',this.h_1_2);
         } 
          else{
          this.items.push('1.2',this.h_1_2);
          }
       }
       if(this.h_1_2_1 !=''){
         if(this.h_1_2_1_a==''){
           this.items.push('1.2.a',this.h_1_2_1);
         } 
          else{
            this.items.push('1.2.1',this.h_1_2_1);
          }
       }
       if(this.h_1_2_1_a !=''){
         this.items.push('1.2.1.a',this.h_1_2_1_a);
       }
       if(this.h_1_2_2 !=''){
         if(this.h_1_2_2_a==''){
           this.items.push('1.2.2.a',this.h_1_2_2);
         } 
          else{
         this.items.push('1.2.2',this.h_1_2_2);
          }
       }
       if(this.h_1_2_2_a !=''){
         this.items.push('1.2.2.a',this.h_1_2_2_a);
       }
       if(this.h_1_3 !=''){
         if(this.h_1_3_1==''){
           this.items.push('1.3.a',this.h_1_3);
         } 
          else{
            this.items.push('1.3',this.h_1_3);
          }
       }
       if(this.h_1_3_1 !=''){
         if(this.h_1_3_1==''){
           this.items.push('1.3.a',this.h_1_3_1);
         } 
          else{
            this.items.push('1.3.1',this.h_1_3_1);
          }
       }
       if(this.h_1_3_1_a !=''){
         this.items.push('1.3.1.a',this.h_1_3_1_a);
       }
       if(this.h_1_3_2 !=''){
          if(this.h_1_3_2==''){
           this.items.push('1.3.2.a',this.h_1_3_2);
         } 
          else{
         this.items.push('1.3.2',this.h_1_3_2);
          }
       }
       if(this.h_1_3_2_a !=''){
         this.items.push('1.3.2.a',this.h_1_3_2_a);
       }
       if(this.h_1_4 !=''){
         if(this.h_1_4_1==''){
           this.items.push('1.4.a',this.h_1_4);
         } 
          else{
         this.items.push('1.4',this.h_1_4);
          }
       }
       if(this.h_1_4_1 !=''){
         if(this.h_1_4_1==''){
           this.items.push('1.4.a',this.h_1_4_1);
         } 
          else{
         this.items.push('1.4.1',this.h_1_4_1);
          }
         
       }
       if(this.h_1_4_1_a !=''){
         this.items.push('1.4.1.a',this.h_1_4_1_a);
       }
       if(this.h_1_4_2 !=''){
         if(this.h_1_4_1==''){
           this.items.push('1.4.2.a',this.h_1_4_2);
         } 
          else{
         this.items.push('1.4.2',this.h_1_4_2);
          }
         
       }
       if(this.h_1_4_2_a !=''){
         this.items.push('1.4.2.a',this.h_1_4_2_a);
       }
       
       // field 2
       if(this.h_2 !=''){
            this.items.push('2',this.h_2)
          }
       if(this.h_2_1 !=''){
         if(this.h_2_1_1==''){
           this.items.push('2.a',this.h_2_1);
         } 
          else{
          this.items.push('2.1',this.h_2_1);
          }
       }
       if(this.h_2_1_1 !=''){
         if(this.h_2_1_1_a==''){
           this.items.push('2.1.a',this.h_2_1_1);
         } 
          else{
          this.items.push('2.1.1',this.h_2_1_1);
          }
         
       }
       if(this.h_2_1_1_a !=''){
         this.items.push('2.1.a',this.h_2_1_1_a);
       }
       if(this.h_2_1_2 !=''){
         if(this.h_2_1_2_a==''){
           this.items.push('2.1.2.a',this.h_2_1_2);
         } 
          else{
            this.items.push('2.1.2',this.h_2_1_2);
          }
       }
       if(this.h_2_1_2_a !=''){
         this.items.push('2.1.2.a',this.h_2_1_2_a);
       }
       if(this.h_2_2 !=''){
         if(this.h_2_2_1==''){
           this.items.push('2.2.a',this.h_2_2);
         } 
          else{
          this.items.push('2.2',this.h_2_2);
          }
       }
       if(this.h_2_2_1 !=''){
         if(this.h_2_2_1_a==''){
           this.items.push('2.2.a',this.h_2_2_1);
         } 
          else{
            this.items.push('2.2.1',this.h_2_2_1);
          }
       }
       if(this.h_2_2_1_a !=''){
         this.items.push('2.2.1.a',this.h_2_2_1_a);
       }
       if(this.h_2_2_2 !=''){
         if(this.h_2_2_2_a==''){
           this.items.push('2.2.2.a',this.h_2_2_2);
         } 
          else{
         this.items.push('2.2.2',this.h_2_2_2);
          }
       }
       if(this.h_2_2_2_a !=''){
         this.items.push('2.2.2.a',this.h_2_2_2_a);
       }
       if(this.h_2_3 !=''){
         if(this.h_2_3_1==''){
           this.items.push('2.3.a',this.h_2_3);
         } 
          else{
            this.items.push('2.3',this.h_2_3);
          }
       }
       if(this.h_2_3_1 !=''){
         if(this.h_2_3_1==''){
           this.items.push('2.3.a',this.h_2_3_1);
         } 
          else{
            this.items.push('2.3.1',this.h_2_3_1);
          }
       }
       if(this.h_2_3_1_a !=''){
         this.items.push('2.3.1.a',this.h_2_3_1_a);
       }
       if(this.h_2_3_2 !=''){
          if(this.h_2_3_2==''){
           this.items.push('2.3.2.a',this.h_2_3_2);
         } 
          else{
         this.items.push('2.3.2',this.h_2_3_2);
          }
       }
       if(this.h_2_3_2_a !=''){
         this.items.push('2.3.2.a',this.h_2_3_2_a);
       }
       if(this.h_2_4 !=''){
         if(this.h_2_4_1==''){
           this.items.push('2.4.a',this.h_2_4);
         } 
          else{
         this.items.push('2.4',this.h_2_4);
          }
       }
       if(this.h_2_4_1 !=''){
         if(this.h_2_4_1==''){
           this.items.push('2.4.a',this.h_2_4_1);
         } 
          else{
         this.items.push('2.4.1',this.h_2_4_1);
          }
         
       }
       if(this.h_2_4_1_a !=''){
         this.items.push('2.4.1.a',this.h_2_4_1_a);
       }
       if(this.h_2_4_2 !=''){
         if(this.h_2_4_1==''){
           this.items.push('2.4.2.a',this.h_2_4_2);
         } 
          else{
         this.items.push('2.4.2',this.h_2_4_2);
          }
         
       }
       if(this.h_2_4_2_a !=''){
         this.items.push('2.4.2.a',this.h_2_4_2_a);
       }
       
       
       // field 3
       if(this.h_3 !=''){
            this.items.push('3',this.h_3)
       }
       if(this.h_3_1 !=''){
         if(this.h_3_1_1==''){
           this.items.push('3.a',this.h_3_1);
         } 
          else{
          this.items.push('3.1',this.h_3_1);
          }
       }
       if(this.h_3_1_1 !=''){
         if(this.h_3_1_1_a==''){
           this.items.push('3.1.a',this.h_3_1_1);
         } 
          else{
          this.items.push('3.1.1',this.h_3_1_1);
          }
         
       }
       if(this.h_3_1_1_a !=''){
         this.items.push('3.1.1.a',this.h_3_1_1_a);
       }
       if(this.h_3_1_2 !=''){
         if(this.h_3_1_2_a==''){
           this.items.push('3.1.2.a',this.h_3_1_2);
         } 
          else{
            this.items.push('3.1.2',this.h_3_1_2);
          }
       }
       if(this.h_3_1_2_a !=''){
         this.items.push('3.1.2.a',this.h_3_1_2_a);
       }
       if(this.h_3_2 !=''){
         if(this.h_3_2_1==''){
           this.items.push('3.2.a',this.h_3_2);
         } 
          else{
          this.items.push('3.2',this.h_3_2);
          }
       }
       if(this.h_3_2_1 !=''){
         if(this.h_3_2_1_a==''){
           this.items.push('3.2.a',this.h_3_2_1);
         } 
          else{
            this.items.push('3.2.1',this.h_3_2_1);
          }
       }
       if(this.h_3_2_1_a !=''){
         this.items.push('3.2.1.a',this.h_3_2_1_a);
       }
       if(this.h_3_2_2 !=''){
         if(this.h_3_2_2_a==''){
           this.items.push('3.2.2.a',this.h_3_2_2);
         } 
          else{
         this.items.push('3.2.2',this.h_3_2_2);
          }
       }
       if(this.h_3_2_2_a !=''){
         this.items.push('3.2.2.a',this.h_3_2_2_a);
       }
       if(this.h_3_3 !=''){
         if(this.h_3_3_1==''){
           this.items.push('3.3.a',this.h_3_3);
         } 
          else{
            this.items.push('3.3',this.h_3_3);
          }
       }
       if(this.h_3_3_1 !=''){
         if(this.h_3_3_1==''){
           this.items.push('3.3.a',this.h_3_3_1);
         } 
          else{
            this.items.push('3.3.1',this.h_3_3_1);
          }
       }
       if(this.h_3_3_1_a !=''){
         this.items.push('3.3.1.a',this.h_3_3_1_a);
       }
       if(this.h_3_3_2 !=''){
          if(this.h_3_3_2==''){
           this.items.push('3.3.2.a',this.h_3_3_2);
         } 
          else{
         this.items.push('3.3.2',this.h_3_3_2);
          }
       }
       if(this.h_3_3_2_a !=''){
         this.items.push('3.3.2.a',this.h_3_3_2_a);
       }
       if(this.h_3_4 !=''){
         if(this.h_3_4_1==''){
           this.items.push('3.4.a',this.h_3_4);
         } 
          else{
         this.items.push('3.4',this.h_3_4);
          }
       }
       if(this.h_3_4_1 !=''){
         if(this.h_3_4_1==''){
           this.items.push('3.4.a',this.h_3_4_1);
         } 
          else{
         this.items.push('3.4.1',this.h_3_4_1);
          }
         
       }
       if(this.h_3_4_1_a !=''){
         this.items.push('3.4.1.a',this.h_3_4_1_a);
       }
       if(this.h_3_4_2 !=''){
         if(this.h_3_4_1==''){
           this.items.push('3.4.2.a',this.h_3_4_2);
         } 
          else{
         this.items.push('3.4.2',this.h_3_4_2);
          }
         
       }
       if(this.h_3_4_2_a !=''){
         this.items.push('3.4.2.a',this.h_3_4_2_a);
       }
       
       // field 4
    
       if(this.h_4 !=''){
            this.items.push('4',this.h_4)
       }
       if(this.h_4_1 !=''){
         if(this.h_4_1_1==''){
           this.items.push('3.4.a',this.h_4_1);
         } 
          else{
          this.items.push('4.1',this.h_4_1);
          }
       }
       if(this.h_4_1_1 !=''){
         if(this.h_4_1_1_a==''){
           this.items.push('4.1.a',this.h_4_1_1);
         } 
          else{
          this.items.push('4.1.1',this.h_4_1_1);
          }
         
       }
       if(this.h_4_1_1_a !=''){
         this.items.push('4.1.1.a',this.h_4_1_1_a);
       }
       if(this.h_4_1_2 !=''){
         if(this.h_4_1_2_a==''){
           this.items.push('4.1.2.a',this.h_4_1_2);
         } 
          else{
            this.items.push('4.1.2',this.h_4_1_2);
          }
       }
       if(this.h_4_1_2_a !=''){
         this.items.push('4.1.2.a',this.h_4_1_2_a);
       }
       if(this.h_4_2 !=''){
         if(this.h_4_2_1==''){
           this.items.push('4.2.a',this.h_4_2);
         } 
          else{
          this.items.push('4.2',this.h_4_2);
          }
       }
       if(this.h_4_2_1 !=''){
         if(this.h_4_2_1_a==''){
           this.items.push('4.2.a',this.h_4_2_1);
         } 
          else{
            this.items.push('4.2.1',this.h_4_2_1);
          }
       }
       if(this.h_4_2_1_a !=''){
         this.items.push('4.2.1.a',this.h_4_2_1_a);
       }
       if(this.h_4_2_2 !=''){
         if(this.h_4_2_2_a==''){
           this.items.push('4.2.2.a',this.h_4_2_2);
         } 
          else{
         this.items.push('4.2.2',this.h_4_2_2);
          }
       }
       if(this.h_4_2_2_a !=''){
         this.items.push('4.2.2.a',this.h_4_2_2_a);
       }
       if(this.h_4_3 !=''){
         if(this.h_4_3_1==''){
           this.items.push('4.3.a',this.h_4_3);
         } 
          else{
            this.items.push('4.3',this.h_4_3);
          }
       }
       if(this.h_4_3_1 !=''){
         if(this.h_4_3_1==''){
           this.items.push('4.3.a',this.h_4_3_1);
         } 
          else{
            this.items.push('4.3.1',this.h_4_3_1);
          }
       }
       if(this.h_4_3_1_a !=''){
         this.items.push('4.3.1.a',this.h_4_3_1_a);
       }
       if(this.h_4_3_2 !=''){
          if(this.h_4_3_2==''){
           this.items.push('4.3.2.a',this.h_4_3_2);
         } 
          else{
         this.items.push('4.3.2',this.h_4_3_2);
          }
       }
       if(this.h_4_3_2_a !=''){
         this.items.push('4.3.2.a',this.h_4_3_2_a);
       }
       if(this.h_4_4 !=''){
         if(this.h_4_4_1==''){
           this.items.push('4.4.a',this.h_4_4);
         } 
          else{
         this.items.push('4.4',this.h_4_4);
          }
       }
       if(this.h_4_4_1 !=''){
         if(this.h_4_4_1==''){
           this.items.push('4.4.a',this.h_4_4_1);
         } 
          else{
         this.items.push('4.4.1',this.h_4_4_1);
          }
         
       }
       if(this.h_4_4_1_a !=''){
         this.items.push('4.4.1.a',this.h_4_4_1_a);
       }
       if(this.h_4_4_2 !=''){
         if(this.h_4_4_1==''){
           this.items.push('4.4.2.a',this.h_4_4_2);
         } 
          else{
         this.items.push('4.4.2',this.h_4_4_2);
          }
         
       }
       if(this.h_4_4_2_a !=''){
         this.items.push('4.4.2.a',this.h_4_4_2_a);
       }

      for (var i in this.items){
        console.log(this.items[i]);
      }
      this.pushingdb();
     }
  }
  }
</script>