<template>
  <div class="projects">
    <h1 class="headline grey--text font-weight-light">Inicio</h1>
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
	      <v-col

	      	class="mt-5 mx-5 mb-5 mr-5"
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

	  </v-container>

  </div>
</template>

<script>

export default {
  name: 'Home',
  data(){
  	return{
  		seccion: [
  			{ title: 'Carlos Figueroa', descripcion: 'Romana IENCA', status: '99', cargo: 'Consultor SAP'},
  			{ title: 'Carlos Figueroa', descripcion: 'Gestor de impresiones', status: '55', cargo: 'Consultor SAP'},
  			{ title: 'Morela silva', descripcion: 'Romana MILV', status: '70', cargo: 'Consultor SAP'},
  			{ title: 'Darwin Ascanio', descripcion: 'PP para comedores', status: '44', cargo: 'Jefe'},
  			{ title: 'Carlos Figueroa', descripcion: 'Contingencia produccion  montserratina', status: '20', cargo: 'Consultor SAP'},
  		]
  	}
  }
}
</script>
