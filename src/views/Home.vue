<template>
  <div class="projects">
    <h1 class="headline grey--text font-weight-light mt-0 pa-0">Inicio</h1>
	  <v-container class="mx-4 mt-4">
	  	<v-row class="mb-3 mx-3">

		    <v-tooltip bottom>
		      <template v-slot:activator="{ on, attrs }">
		  		<v-btn 
		  			flat depressed 
		  			color="grey lighten-4"
			        dark
			        v-bind="attrs"
			        v-on="on"
		  		>
		  			<v-icon left small class="grey--text">mdi-folder</v-icon>
		  			<span class="caption text-lowercase grey--text">Proyectos</span>
		  		</v-btn>
		      </template>
		      <span>Traer carpetas al azar</span>
		    </v-tooltip>
		    <v-tooltip bottom>
		      <template v-slot:activator="{ on, attrs }">
		  		<v-btn 
		  			flat depressed 
		  			color="grey lighten-4"
			        dark
			        v-bind="attrs"
			        v-on="on"
		  		>
		  			<v-icon left small class="grey--text">mdi-face</v-icon>
		  			<span class="caption text-lowercase grey--text">Personas</span>
		  		</v-btn>
		      </template>
		      <span>Traer carpetas al azar</span>
		    </v-tooltip>
	  		<v-tooltip top
	  			slot="activator"
	  		>

		  		<span>Traer proyectos al azar</span>
	  		</v-tooltip>


	  	</v-row>
	    <v-row no-gutters class="white">

	    	<v-col md="12">
	    		<h1 class="body-2 grey--text font-weight-light mt-0 pa-2">Proyectos</h1>
	    		<v-divider></v-divider>
	    	</v-col>
	    
			<v-col

				class="mt-5 mx-5 mb-5 mr-5 bc-left"
			cols="12"
			sm="12"
			md="3"
			v-for="ct in seccion" :key="ct"
			>

				<h2 class="caption grey--text font-weight-light"> {{ ct.descripcion }}</h2>
				<span>
					{{ ct.title }}
				</span>

				<v-chip small class="right" color="cyan lighten-2 white--text">{{ ct.cargo}}</v-chip>

				<v-div>
					<h2 class="caption grey--text font-weight-light mt-2">Progreso</h2>
					<v-progress-linear  :value="ct.status" color="green"></v-progress-linear>
				</v-div>

			</v-col>

	    </v-row>

    	<v-row>
    		<c-line 
    			:datos="chartData"
    			cMd="6"
    			cCols="12"
    			cSm="12"
    		></c-line>
    		<c-histogram 
    			:datos="chartBar"
    			cMd="6"
    			cCols="12"
    			cSm="12"
    		></c-histogram>
    	</v-row>


	  </v-container>

  </div>
</template>

<script>

import cHistogram from '@/views/grafico/Histogram'
import cLine from '@/views/grafico/Line'


export default {

  name: 'Home',
  components: { cHistogram, cLine },
  data(){
  	return{
  		seccion: [
  			{ title: 'Carlos Figueroa', descripcion: 'Romana IENCA', status: '99', cargo: 'Consultor SAP'},
  			{ title: 'Carlos Figueroa', descripcion: 'Gestor de impresiones', status: '55', cargo: 'Consultor SAP'},
  			{ title: 'Morela silva', descripcion: 'Romana MILV', status: '70', cargo: 'Consultor SAP'},
  			{ title: 'Darwin Ascanio', descripcion: 'PP para comedores', status: '44', cargo: 'Jefe'},
  			{ title: 'Carlos Figueroa', descripcion: 'Contingencia produccion  montserratina', status: '20', cargo: 'Consultor SAP'},
  		],
        chartData: {
          columns: ['date', 'Cagua', 'Turmero', 'Maracay', 'Caracas'],
          rows: [
            { 'Cagua': 1523, 'date': '01/01', 'Turmero': 1523, 'Maracay': 0.12, 'Caracas': 2000 },
            { 'Cagua': 1223, 'date': '01/02', 'Turmero': 1523, 'Maracay': 0.345, 'Caracas': 600 },
            { 'Cagua': 2123, 'date': '01/03', 'Turmero': 1523, 'Maracay': 0.7, 'Caracas': 1300 },
            { 'Cagua': 4123, 'date': '01/04', 'Turmero': 1523, 'Maracay': 0.31, 'Caracas': 1200 },
            { 'Cagua': 3123, 'date': '01/05', 'Turmero': 1523, 'Maracay': 0.12, 'Caracas': 900 },
            { 'Cagua': 7123, 'date': '01/06', 'Turmero': 1523, 'Maracay': 0.65, 'Caracas': 1000 }
          ]
        },
        chartBar: {
          columns: ['date', 'Consumo'],
          rows: [
            { 'Consumo': 1523, 'date': '01/01'},
            { 'Consumo': 1223, 'date': '01/02'},
            { 'Consumo': 2123, 'date': '01/03'},
            { 'Consumo': 4123, 'date': '01/04'},
            { 'Consumo': 3123, 'date': '01/05'},
            { 'Consumo': 7123, 'date': '01/06'}
          ]
        }
  	}
  }
}
</script>


<style scoped="true">
	.bc-left{
		border-left: solid 3px #2E7D32;
		padding:2px;
	}	
</style>