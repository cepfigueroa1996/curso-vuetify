<template>
  <div >
    <h1 class="headline grey--text font-weight-light">Tablas</h1>

    <v-content class="subheading ma-0 pa-0">


    	<v-row>
    		<c-tooltip 
    			title="data table"
    			description="Usuarios usados en componente data table"
    		></c-tooltip>
    		<v-col 
    			md="12"
    			cols="12"
    			sm="12"
    		>
			  <v-card>
			    <v-card-title>
			      Usuarios
			      <v-spacer></v-spacer>
			      <v-text-field
			        v-model="search"
			        append-icon="mdi-magnify"
			        label="Buscar.."
			        single-line
			        hide-details
			      ></v-text-field>
			    </v-card-title>
			    <v-data-table
			      :headers="headers"
			      :items="us"
			      :search="search"
			    ></v-data-table>
			  </v-card>
			</v-col>
    	</v-row>
    	<v-row>
    		<c-tooltip 
    			title="tabla simple"
    			description="Tabla realizada manualmente  util para personalizaciòn con acciones"
    		></c-tooltip>
    		<v-col 
    			md="12"
    			cols="12"
    			sm="12"
    		>

			 <v-bottom-navigation
			    :value="value"
			    color="teal"
			    grow
			    id="borde"
			  >
				  <v-col md="4">
				    <v-btn @click="value=0">
				      <span>Tabla</span>
				      <v-icon>mdi-table</v-icon>
				    </v-btn>
				  </v-col>
				  <v-col md="4">
				    <v-btn @click="value=1">
				      <span>Formulario</span>
				      <v-icon>mdi-card</v-icon>
				    </v-btn>
				  </v-col>
			  </v-bottom-navigation>

			  <v-divider></v-divider>


			  <c-table :arreglo="us" v-if="value == 0"></c-table>
			  <c-form v-if="value == 1"></c-form>

			</v-col>
    	</v-row>
    </v-content>
  </div>
</template>


<script>

	import axios from 'axios'
	import cTooltip from '@/views/custom/customTooltip'
	import cTable from '@/views/table/components/Table'
	import cForm from '@/views/table/components/Form'

	export default{
		components:{ 
			cTooltip , cTable, cForm
		},
		created: function(){
			this.users();
		},
	    data () {
	      return {
	      	value:0,
	      	us:[],
	        search: '',
	        headers: [
	          {
	            text: 'Nombre',
	            align: 'start',
	            sortable: false,
	            value: 'name',
	          },
	          { text: 'Usuario', value: 'username' },
	          { text: 'Correo', value: 'email' },
	          { text: 'Telefono', value: 'phone' },
	        ],
	      }
	  	},
	  	methods:{
	  		users(){
	  			axios.get('https://jsonplaceholder.typicode.com/users')
	  			.then(response=>{
	  				this.us = response.data;
	  			})
	  		}
	  	}
	}
</script>


<style scoped="true">
	#borde{
		box-shadow: none;
		border-bottom:solid 1px #f5f5f5;
	}
</style>