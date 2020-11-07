<template>
	<v-col md="12" cols="12" sm="12">


	  <v-card class="pa-1">

	  	<Result v-if="view == 1"></Result>
	    <v-card-text>


			<v-col md="12" v-if="view == 0">
		    	<h2 class=" font-weight-light pa-5">
		    		<v-icon>mdi-ballot</v-icon>
		    		Selecciona el dominio que mejor te parezca:
		    	</h2>

		    	<v-divider></v-divider>

			    <v-progress-circular
			      v-if="showOp == true"
			      :width="20"
			      :size="100"
			      color="green"
			      class="ml-20 "
			      justify="center"
			      indeterminate
			    ></v-progress-circular>	


			    <v-radio-group v-model="radioGroup" class="ml-5" v-if="showOp == false">
			      <v-radio
			        v-for="n in op"
			        :key="n.id"
			        :label="n.option"
			        :value="n"
			        @click="option = n.id, validation = null"
			      ></v-radio>
			    </v-radio-group>
			    
		    	<v-btn large class="light-blue lighten-1 white--text ml-6 mt-3" @click="enviarOpcion" :disabled="validation" v-if="showOp == false">
		    		<v-icon small class="pa-1">mdi-send</v-icon>
		    		Enviar respuesta 
		    	</v-btn>
		    	<v-btn large class="orange lighten-1 white--text ml-6 mt-3" v-if="showOp == false" @click="view = 1">
		    		<v-icon small class="pa-1">mdi-eye</v-icon>
		    		Ver resultados
		    	</v-btn>

			    <v-snackbar
			      v-model="snackbar"
			    >
			      Respuesta enviada
			      <template v-slot:action="{ attrs }">
			        <v-btn
			          color="success"
			          text
			          v-bind="attrs"
			          @click="snackbar = false"
			        >
			          Cerrar
			        </v-btn>
			      </template>
			    </v-snackbar>
		    </v-col>
	    </v-card-text>
	  </v-card>
	</v-col>
</template>

<script>
	import Result from '@/views/file/components/Poll/Result'
	import axios from 'axios'

	export default{
		components:{ Result },
		created: function(){
			this.opciones();
		},
		data(){
			return{
				radioGroup: null,
				op:[],
				option:null,
				validation:true,
				snackbar:false,
				view:0,
				showOp:false,
			}
		},
		methods:{
			opciones(){
				this.showOp = true;

				axios.get('http://localhost/vue/backend/public/api/poll')
				.then(response=>{
					this.op = response.data;
				})
				.finally(()=>{
					this.showOp = false;
				})
			},
			enviarOpcion(){
				axios.post('http://localhost/vue/backend/public/api/poll',{
					id: this.option
				})
				.then(response=>{
					this.eop = response.data;
				})
				.finally(() => {
					if (this.eop) {
						this.snackbar = true;
					}
				})
			}

		}
	}
</script>
