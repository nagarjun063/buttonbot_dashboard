<template slot-scope="{ nodeData }">
  <div class=orgchart-container>
    <organization-chart :datasource="ds"></organization-chart>
  </div>
</template>
 
<script>

  import OrganizationChart from 'vue-organization-chart'
  import 'vue-organization-chart/dist/orgchart.css'
 
  export default {
    components: {
      OrganizationChart
    },
    data () {
      this.i=this.$route.params
      console.log("-----------------")
      for (var j in this.i){
          var x=this.i[j]
          console.log(x);
      var y=x.substring(1,x.length-1)
      var arr=y.split(",")
      var main=[]
      for(var e=2;e<arr.length;e++){
          var z=arr[e].substring(1,arr[e].length-1)
          main.push(z)
      }
      console.log(main)
      }
      return {
        ds: {
          'id': '1',
          'name': 'BOT',
          'title': 'BUILDER',
          'children': [
            { 'id': '2', 'name': main[0], 'title': main[1],
              'children': [
                { 'id': '3', 'name': main[2], 'title': main[3],
                'children': [
                    { 'id': '4', 'name': main[4], 'title': main[5],
                    'children': [
                    { 'id': '5', 'name': main[6], 'title': main[7] },] },
                    { 'id': '6', 'name': main[8], 'title': main[9],
                     'children': [
                    { 'id': '7', 'name': main[10], 'title': main[11] },] }
                  ] },
                { 'id': '8', 'name': main[12], 'title': main[13],
                'children': [
                    { 'id': '9', 'name': main[14], 'title': main[15],
                    'children': [
                    { 'id': '10', 'name': main[16], 'title': main[17] },] },
                    { 'id': '11', 'name': main[18], 'title': main[19],
                    'children': [
                    { 'id': '11', 'name': main[20], 'title': main[21] },] }
                  ] },
                { 'id': '12', 'name': main[22], 'title': main[23],
                'children': [
                    { 'id': '13', 'name': main[24], 'title': main[25],
                    'children': [
                    { 'id': '14', 'name': main[26], 'title': main[27] },] },
                    { 'id': '15', 'name': main[28], 'title': main[29],
                    'children': [
                    { 'id': '16', 'name': main[30], 'title': main[31] },] }
                  ] },
                { 'id': '17', 'name': main[32], 'title': main[33],
                  'children': [
                    { 'id': '18', 'name': main[34], 'title': main[35],
                    'children': [
                    { 'id': '19', 'name': main[36], 'title': main[37] },] },
                    { 'id': '20', 'name': main[38], 'title': main[39],
                    'children': [
                    { 'id': '21', 'name': main[40], 'title': main[41] },] }
                  ]
                 }
               ]
             },
            { 'id': '22', 'name': main[42], 'title': main[43],
              'children': [
                { 'id': '23', 'name': main[44], 'title': main[45],
                'children': [
                    { 'id': '24', 'name': main[46], 'title': main[47],
                    'children': [
                    { 'id': '25', 'name': main[48], 'title': main[49] },] },
                    { 'id': '26', 'name': main[50], 'title': main[51],
                     'children': [
                    { 'id': '27', 'name': main[52], 'title': main[53] },] }
                  ] },
                { 'id': '28', 'name': main[54], 'title': main[55],
                'children': [
                    { 'id': '29', 'name': main[56], 'title': main[57],
                    'children': [
                    { 'id': '30', 'name': main[58], 'title': main[59] },] },
                    { 'id': '31', 'name': main[60], 'title': main[61],
                    'children': [
                    { 'id': '32', 'name': main[62], 'title': main[63] },] }
                  ] },
                { 'id': '33', 'name': main[64], 'title': main[65],
                'children': [
                    { 'id': '34', 'name': main[66], 'title': main[67],
                    'children': [
                    { 'id': '35', 'name': main[68], 'title': main[69] },] },
                    { 'id': '36', 'name': main[70], 'title': main[71],
                    'children': [
                    { 'id': '37', 'name': main[72], 'title': main[73] },] }
                  ] },
                { 'id': '38', 'name': main[74], 'title': main[75],
                  'children': [
                    { 'id': '39', 'name': main[76], 'title': main[77],
                    'children': [
                    { 'id': '40', 'name': main[78], 'title': main[79] },] },
                    { 'id': '41', 'name': main[80], 'title': main[81],
                    'children': [
                    { 'id': '42', 'name': main[82], 'title': main[83] },] }
                  ]
                 }
               ]
             },
            { 'id': '43', 'name': main[84], 'title': main[85],
              'children': [
                { 'id': '44', 'name': main[86], 'title': main[87],
                'children': [
                    { 'id': '45', 'name': main[88], 'title': main[89],
                    'children': [
                    { 'id': '46', 'name': main[90], 'title': main[91] },] },
                    { 'id': '47', 'name': main[92], 'title': main[93],
                     'children': [
                    { 'id': '48', 'name': main[94], 'title': main[95] },] }
                  ] },
                { 'id': '49', 'name': main[96], 'title': main[97],
                'children': [
                    { 'id': '50', 'name': main[98], 'title': main[99],
                    'children': [
                    { 'id': '51', 'name': main[100], 'title': main[101] },] },
                    { 'id': '52', 'name': main[102], 'title': main[103],
                    'children': [
                    { 'id': '53', 'name': main[104], 'title': main[105] },] }
                  ] },
                { 'id': '54', 'name': main[106], 'title': main[107],
                'children': [
                    { 'id': '55', 'name': main[108], 'title': main[109],
                    'children': [
                    { 'id': '56', 'name': main[110], 'title': main[111] },] },
                    { 'id': '57', 'name': main[112], 'title': main[113],
                    'children': [
                    { 'id': '58', 'name': main[114], 'title': main[115] },] }
                  ] },
                { 'id': '59', 'name': main[116], 'title': main[117],
                  'children': [
                    { 'id': '60', 'name': main[118], 'title': main[119],
                    'children': [
                    { 'id': '61', 'name': main[120], 'title': main[121] },] },
                    { 'id': '62', 'name': main[122], 'title': main[123],
                    'children': [
                    { 'id': '63', 'name': main[124], 'title': main[125] },] }
                  ]
                 }
               ]
             },
            
            { 'id': '64', 'name': main[126], 'title': main[127],
              'children': [
                { 'id': '65', 'name': main[128], 'title': main[129],
                'children': [
                    { 'id': '66', 'name': main[130], 'title': main[131],
                    'children': [
                    { 'id': '67', 'name': main[132], 'title': main[133] },] },
                    { 'id': '68', 'name': main[134], 'title': main[135],
                     'children': [
                    { 'id': '69', 'name': main[136], 'title': main[137] },] }
                  ] },
                { 'id': '70', 'name': main[138], 'title': main[139],
                'children': [
                    { 'id': '71', 'name': main[140], 'title': main[141],
                    'children': [
                    { 'id': '72', 'name': main[142], 'title': main[143] },] },
                    { 'id': '73', 'name': main[144], 'title': main[145],
                    'children': [
                    { 'id': '74', 'name': main[146], 'title': main[147] },] }
                  ] },
                { 'id': '75', 'name': main[148], 'title': main[149],
                'children': [
                    { 'id': '76', 'name': main[150], 'title': main[151],
                    'children': [
                    { 'id': '77', 'name': main[152], 'title': main[153] },] },
                    { 'id': '78', 'name': main[154], 'title': main[155],
                    'children': [
                    { 'id': '79', 'name': main[156], 'title': main[157] },] }
                  ] },
                { 'id': '80', 'name': main[158], 'title': main[159],
                  'children': [
                    { 'id': '81', 'name': main[160], 'title': main[161],
                    'children': [
                    { 'id': '82', 'name': main[162], 'title': main[163] },] },
                    { 'id': '83', 'name': main[164], 'title': main[165],
                    'children': [
                    { 'id': '84', 'name': main[166], 'title': main[167] },] }
                  ]
                 }
               ]
             }
          ]
        }
      }
    }
  }
</script>
<style>
.orgchart-container {
  position: relative;
  display: inline-block;
  height: 650px;
  width: calc(100% - 0px);
  border: 0px dashed #aaa;
  border-radius: 5px;
  overflow: auto;
  text-align: center;
}
</style>