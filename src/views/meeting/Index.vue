<template>
	<v-container class="subheading ma-0 pa-5">
    	<h2 class=" font-weight-light pa-5">
    		<v-icon>mdi-ballot</v-icon>
    		Reuniones
    	</h2>
		<v-row class="white m-5">
			
			<v-col md="6" >

				<v-card class="mx-auto">
				    <v-toolbar
				      color="indigo"
				      dark
				    >
				      <v-toolbar-title>Equipo</v-toolbar-title>
				    </v-toolbar>
				    <v-list>
				      <v-list-item
				        v-for="(u, index) in us"
				        :key="u.id"
				        class="select"
				        @click="vali = index, posts(u.id)"
				      >
				        <v-list-item-icon>
				          <v-icon
				            v-if="index == vali"
				            color="market"
				          >
				            mdi-circle
				          </v-icon>
				        </v-list-item-icon>

				        <v-list-item-content>
				          <v-list-item-title 
				          	v-text="u.name" 
				          	class="font-weight-light mb-3"
				          	:class="index == vali ? 'title font-weight-black' : 'subtitle'"
				          ></v-list-item-title>
				          <v-divider></v-divider>
				        </v-list-item-content>


				      </v-list-item>
				    </v-list>
				</v-card>
			</v-col>
			<v-col md="6" >
    			<h3 class=" font-weight-light pa-5">Información meeting</h3>

    			<v-divider></v-divider>

			    <v-list v-if="po != null">
			      <v-list-item-group >
			        <v-list-item
			          v-for="(item, i) in po"
			          v-on:mouseover="vali2 = i"
			          @click="dialog = true, postSelect = item"
			          :key="i"
			        >
			          <v-list-item-icon >
			            <v-icon small :class="vali2 == i ? 'green--text' : 'grey--text'">mdi-send</v-icon>
			          </v-list-item-icon>
			          <v-list-item-content>
			            <v-list-item-title>
			            	<strong>{{ item.title }}</strong>
			            	<small v-if="vali2 == i" class="grey--text"><br>{{ item.body }}</small>
			            </v-list-item-title>
			          </v-list-item-content>
			        </v-list-item>
			      </v-list-item-group>
			    </v-list>
			</v-col>

		    <v-dialog
		      v-model="dialog"
		      width="500"
		    >
		      <v-card v-if="postSelect">
		        <v-card-title class="headline grey lighten-2">
		          {{ postSelect.title }}
		        </v-card-title>

		        <v-card-text>
		          {{ postSelect.body }}
		        </v-card-text>

		        <v-divider></v-divider>

		        <v-card-actions>
		          <v-spacer></v-spacer>
		          <v-btn
		            color="primary"
		            text
		            @click="dialog = false"
		          >
		           Ok
		          </v-btn>
		        </v-card-actions>
		      </v-card>
		    </v-dialog>

		</v-row>
	</v-container>
</template>

<script>
	import axios from 'axios';


	export default{
		created: function(){
			this.usuarios();
		},
		data(){
			return{
				dialog:false,
				us:[],
				po:null,
				vali:0,
				vali2:0,
				postSelect:null,
			}
		},
		methods:{
			usuarios(){
				axios.get('https://jsonplaceholder.typicode.com/users')
				.then(response=> {
					this.us = response.data;
				})
			},
			posts(id) {
				axios.get('https://jsonplaceholder.typicode.com/posts?userId='+id)
				.then(response=>{
					this.po = response.data;
				})
			}
		}
	}
</script>

<style scoped="true">
	.select:hover{
		cursor:pointer;
		transition: 0.4s;
		text-shadow: 1px 1px 1px black;
	}
</style>