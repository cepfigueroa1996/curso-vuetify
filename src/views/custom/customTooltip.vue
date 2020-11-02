<template>
	<div>
	    <v-tooltip bottom>
	      <template v-slot:activator="{ on, attrs }">
	  		<v-btn 
	  			flat depressed 
	  			color="grey lighten-4"
		        dark
		        v-bind="attrs"
		        v-on="on"
	  		>
	  			<v-icon left small class="grey--text">mdi-table</v-icon>
	  			<span class="caption text-uppercase grey--text">{{ title }}</span>
	  		</v-btn>
	      </template>
	      <span>{{ description }}</span>
	    </v-tooltip>
	</div>
</template>

<script>
	export default{
		props:['title', 'description']
	}
</script>