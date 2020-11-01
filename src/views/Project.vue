<template>
  <div class="projects">
    <h1 class="headline grey--text font-weight-light">Proyectos</h1>
    <v-content class="subheading">
    	<v-row>
    		<v-col 
    			md="12"
    			cols="12"
    			sm="12"
    		>
			  <v-expansion-panels>
			    <v-expansion-panel
			      v-for="(item,i) in 5"
			      :key="i"
			    >
			      <v-expansion-panel-header class="font-weight-bold">
			        Item
			      </v-expansion-panel-header>
			      <v-expansion-panel-content class="grey--text font-weight-light">
			        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
			      </v-expansion-panel-content>
			    </v-expansion-panel>
			  </v-expansion-panels>
			</v-col>
    	</v-row>
    </v-content>
  </div>
</template>


<script>
	export default{

	}
</script>

