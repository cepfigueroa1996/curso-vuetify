<template>
	<v-col md="6">
		<v-card>
		    <v-toolbar
		      color="indigo"
		      dark
		    >
		      <v-toolbar-title>Resultado de la encuesta</v-toolbar-title>
		    </v-toolbar>
		    <v-list>
		      <v-list-item
		        v-for="(r, index) in re"
		        :key="r.id"
		      >
		        <v-list-item-icon>
		          <v-icon
		            v-if="index == 0"
		            color="pink"
		          >
		            mdi-star
		          </v-icon>
		        </v-list-item-icon>

		        <v-list-item-content>
		          <v-list-item-title 
		          	v-text="r.poll.option" 
		          	class="font-weight-light mb-3"
		          	:class="index == 0 ? 'title font-weight-black' : 'subtitle'"
		          ></v-list-item-title>
		          <v-divider></v-divider>
		        </v-list-item-content>

		        <v-list-item-avatar>
				    <v-chip
				      
				      color="green"
				      text-color="white"
				      class="font-weight-black"
				    >
				    {{ r.total }}
				    </v-chip>
		        </v-list-item-avatar>

		      </v-list-item>
		    </v-list>
		</v-card>
	</v-col>
</template>

<script>
	import axios from 'axios';


	export default{
		created: function(){
			this.resultados();
		},
		data(){
			return{
				re:[],
			}
		},
		methods:{
			resultados(){
				axios.get('http://localhost/vue/backend/public/api/poll/all')
				.then(response=> {
					this.re = response.data;
				})
			}
		}
	}
</script>