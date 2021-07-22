<template>
  <div align="center">
    <h3 class="subheading orange--text pl=4">Inside Nlu</h3>
    <v-container pt-6 pb-2 pl-2 pr-2>
    </v-container>
    
    <v-textarea v-model='text1'
      style="width:700px;"
      background-color="amber lighten-4"
      color="orange orange-darken-4"
      label="Enter Paragraph for NLP"
      shaped
      prepend-icon="mdi-book-open-page-variant"
    ></v-textarea>
    <v-btn class="my-2" color="warning"
    @click="copyText()">copy</v-btn>
  </div>
  
</template>
<script>


export default {
  data() {
    return {
      text: this.text1,
    };
    },
    methods:{
      copyText(){
        navigator.clipboard.writeText(this.text1);
        alert("Text copied")
      }
    }
  }
</script>