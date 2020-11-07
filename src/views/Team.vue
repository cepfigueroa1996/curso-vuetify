<template>
  <div class="team">
    <h1 class="headline grey--text font-weight-light">Equipo </h1>
    <v-container>
    	<v-row>
    		<v-col
    			cols="12"
    			sm="12"
    			md="4"
    			v-for="(t, iTeam) in team"
    			:key="iTeam"
    		>
    			<v-card flat  class="text-xs-center ma-3" align="center">
    				<v-responsive class="pt-4">
					    <v-avatar size="100">
					      <img
					        :src="t.avatar"
					        alt="John"

					      >
					    </v-avatar>
    				</v-responsive>
    				<v-card-text>
    					<div class="subheading">
    						{{ t.title }}
    					</div>
    					<div class="grey--text">{{ t.descripcion }}</div>
    				</v-card-text>
    				<v-card-actions>
    					<v-btn  depressed color="white">
    						<span>Enviar mensaje</span>
    					</v-btn>
    				</v-card-actions>
    			</v-card>
    		</v-col>
    	</v-row>
    </v-container>
  </div>
</template>

<script>
	export default{
		data(){
			return{
		  		team: [
		  			{ title: 'Carlos Figueroa', descripcion: 'Romana IENCA', avatar: 'https://cdn.vuetifyjs.com/images/john.jpg'},
		  			{ title: 'Carlos Figueroa', descripcion: 'Gestor de impresiones', avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460'},
		  			{ title: 'Morela silva', descripcion: 'Romana MILV', avatar: 'https://cdn.vuetifyjs.com/images/john.jpg'},
		  			{ title: 'Darwin Ascanio', descripcion: 'PP para comedores', avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460'},
		  			{ title: 'Carlos Figueroa', descripcion: 'Contingencia produccion  montserratina', avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460'},
		  		]
			}
		}

	}
</script>