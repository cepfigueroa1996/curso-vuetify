<template>
  <div class="projects">
    <h1 class="headline grey--text font-weight-light">Configuración general</h1>
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
		  			<span class="caption text-lowercase grey--text">Configuración</span>
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

	        cols="12"
	        sm="12"
	        md="12"
	      >
			 <v-bottom-navigation
			    :value="value"
			    color="teal"
			    grow
			    id="borde"
			  >
				  <v-col md="4">
				    <v-btn @click="value=0">
				      <span>Tema</span>
				      <v-icon>mdi-palette</v-icon>
				    </v-btn>
				  </v-col>
				  <v-col md="4">
				    <v-btn @click="value=1">
				      <span>Actividad reciente</span>
				      <v-icon>mdi-chat</v-icon>
				    </v-btn>
				  </v-col>
				  <v-col md="4">
				    <v-btn @click="value=2">
				      <span>Nearby</span>
				      <v-icon>mdi-map-marker</v-icon>
				    </v-btn>
				  </v-col>
			  </v-bottom-navigation>
			  <v-divider></v-divider>
	      </v-col>

	      <paleta v-if="value == 0"></paleta>
	      <c-timeline v-if="value == 1"></c-timeline>


	    </v-row>

	  </v-container>

  </div>
</template>


<script>
	import paleta from '@/views/configuracion/Paleta'
	import cTimeline from '@/views/general/components/Timeline'

	export default{
		components:{
			paleta, cTimeline
		},
		data(){
			return{
				value: 0
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