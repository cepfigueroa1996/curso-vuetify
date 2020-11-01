<template>
	<div>
	      <v-col md="12" class="pa-5">
	      	<h1 class="display-1 font-weight-light">Paleta de colores para tema principal</h1>
	      	<span class="subheading grey--text"> Selecciona un color para agregar al tema principal</span>
	      </v-col>

	      <v-col
	      	class="mt-5 pa-5"
	      >
		    <v-color-picker
		      width="700"
		      class="ma-2"
		      show-swatches
		      swatches-max-height="600px"
		      v-model="picker"
		    ></v-color-picker>
	      </v-col>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				picker:null,
			}
		},
		watch:{
			picker(){
				this.color();
			}
		},
		methods:{
			color(){ 
				this.$store.commit('increment',this.picker.hex);	
			}
		}
	}
</script>