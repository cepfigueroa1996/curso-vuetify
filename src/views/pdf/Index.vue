<template>
	<div>
        <Pdf 
            :active="active"
        >
            <section class="pdf-item pa-10 m-4">
                <h2 class="text--center mb-10 text-uppercase">
                    {{ title }}
                </h2>
         
                <small>
                    {{ observation }}
                </small>
            </section>
         
            <v-simple-table class="pa-5 ml-40" >
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">
                        Name
                      </th>
                      <th class="text-left">
                        Calories
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="item in us"
                      :key="item.name"
                    >
                      <td>{{ item.name }}</td>
                      <td>{{ item.address.city }}. {{ item.address.street }}</td>
                    </tr>
                  </tbody>
                </template>
            </v-simple-table>
        </Pdf>

        <v-card >
            <v-card-title>
                <v-col
                    md="12"
                    sm="6"
                    cols="12"
                    class="pt-0 pl-0 pr-0"
                >
                    <v-bottom-navigation
                        :value="value"
                        color="teal"
                        grow
                        id="borde"
                    >
                        <v-col md="4">
                            <v-btn @click="value=0">
                            <span>PDF</span>
                            <v-icon>mdi-file</v-icon>
                            </v-btn>
                        </v-col>
                        <v-col md="4">
                            <v-btn @click="value=1">
                            <span>EXCEL</span>
                            <v-icon>mdi-file</v-icon>
                            </v-btn>
                        </v-col>
                        <v-col md="4">
                            <v-btn @click="value=2">
                            <span>WORD</span>
                            <v-icon>mdi-file</v-icon>
                            </v-btn>
                        </v-col>
                    </v-bottom-navigation>
                </v-col>
            </v-card-title>
            <v-card-text v-if="value == 0">                    
                <h1 class="display-1 font-weight-light pl-5 pb-2 text-uppercase">
                    Generar reporte PDF
                </h1>
                <v-col
                    md="12"
                    class="pa-10"
                >
                    
                    <v-text-field
                        v-model="title"
                        label="Ingresar titulo del reporte.."
                        required
                        prepend-inner-icon="mdi-account"
                        single-line
                        outlined
                    >
                    </v-text-field>
                </v-col>
                <v-col
                    md="12"
                    class="pl-10 pr-10"
                    
                >
                    <v-textarea
                        label="Descripción del reporte"
                        prepend-inner-icon="mdi-comment"
                        v-model="observation"
                        single-line
                        outlined
                    ></v-textarea>
                </v-col>
            </v-card-text>

            <v-card-text v-if="value == 1">
                <h1 class="display-1 font-weight-light pl-5 pb-2 text-uppercase">
                    Generar reporte EXCEL
                </h1>
                <v-row  
                    class="pl-10 pr-10" 
                    v-for="(co, index) in col" 
                    :key="co"
                >
                    <v-col
                        md="6"
                    >
                        <v-text-field
                            v-model="task[index]"
                            label="Nombre de la tarea.."
                            prepend-inner-icon="mdi-note"
                            outlined
                        ></v-text-field>
                    </v-col>
                    <v-col
                        md="3"
                    >
                        <v-text-field
                            v-model="phone[index]"
                            label="Nª Telefono.."
                            prepend-inner-icon="mdi-phone"
                            outlined
                        >
                        </v-text-field>
                    </v-col>
                    <v-col
                        md="3"
                    >
                        <v-text-field
                            type="date"
                            v-model="birth[index]"
                            outlined
                        >
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-col
                    md="4"
                    offset-md="5"
                >
                    <v-btn
                        class="blue lighten-2 mx-1"
                        dark
                        @click="col++"
                    >
                        <v-icon>mdi-plus</v-icon> 
                    </v-btn>
                    <v-btn
                        :disabled="col > 1 ? false : true"
                        class="blue lighten-2 mx-1 white--text"
                        @click="col--"
                        
                    >
                        <strong>-</strong>
                    </v-btn>
                    <v-btn
                        color="error"
                        :disabled="col > 1 ? false : true"
                        @click="task = [], phone = [], birth = [], col = 1"
                    >
                        <v-icon>mdi-delete</v-icon>
                        Resetear
                    </v-btn>
                </v-col>
            </v-card-text>

            <v-card-text v-if="value == 2">
                <word-document></word-document>
            </v-card-text>

            <v-divider></v-divider>
            <v-card-actions class="pa-5">
                <v-btn 
                    v-if="value == 0"
                    color="error" 
                    @click="active = 1"
                    class="pa-5"
                >   
                    <v-icon>mdi-file</v-icon>
                    Generar PDF
                </v-btn>

                <excel-document 
                    v-if="value == 1"
                    :objeto="objeto"
                >
                    <v-btn 
                        color="success"
                        @click="arreglo()"
                        class="pa-5"
                        :disabled="task.length > 0  && phone.length > 0 && birth.length > 0 ? false : true"
                    >
                        <v-icon>mdi-file</v-icon>
                        Generar EXCEL
                    </v-btn>
                </excel-document>

                <v-btn
                    v-if="value == 2"
                    class="light-blue darken-2 white--text pa-5"
                >
                    <v-icon>mdi-file</v-icon>
                    Generar WORD
                </v-btn>

            </v-card-actions>
         </v-card>
        
	</div>
</template>

<script>
    import Pdf from '@/views/pdf/components/Pdf'
    import ExcelDocument from '@/views/pdf/components/Excel'
    import axios from 'axios'



	export default {
	    components: {
	        Pdf, ExcelDocument
	    },
        created: function(){
            this.users();
        },
        data(){
            return{
                value:0,
                col:1,
                us:[],
                task:[],
                phone:[],
                birth:[],
                objeto:null,
                title:null,
                active:0,
                observation:null,
                
            }
        },
        methods:{
            arreglo() {

                var data = [];
                for(var i = 0; i < this.task.length; i++) {
                    var element = {
                        "task" : this.task[i],
                        "phone" : this.phone[i],
                        "birth" : this.birth[i],
                    }

                    data.push(element);
                }
                return this.objeto = data;
            },
            users(){
                axios.get('https://jsonplaceholder.typicode.com/users')
                .then(response=>{
                    this.us = response.data;
                })
            }
        },
	}
</script>

<style scoped="true">
	#borde{
		box-shadow: none;
		border-bottom:solid 1px #f5f5f5;
	}
    .m-1{
        margin:10px;
    }
    .m-2{
        margin:20px;
    }
    .m-3{
        margin:30px;
    }
    .m-4{
        margin:40px;
    }
    .text--center{
        text-align: center;
    }
    .mb-5{
        margin-bottom:5px;
    }
    .mb-10{
        margin-bottom:10px;
    }
    .ml-10{
        margin-left:10px;
    }
    .ml-20{
        margin-left:20px;
    }
    .ml-30{
        margin-left:30px;
    }
    .ml-40{
        margin-left:40px;
    }
    .transparent {
       background-color: white!important;
       opacity: 0.65;
       border-color: transparent!important;
     }
</style>