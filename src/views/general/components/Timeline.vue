<template>
  <v-timeline>
  	<h1 class="subheading pa-5 grey--text font-weight-light">Actividad reciente</h1>
    <v-timeline-item
      v-for="(n, iTime) in co"
      :key="iTime"
      large
      class="pa-5"
    >
      <template v-slot:icon>
        <v-avatar>
          <img src="http://i.pravatar.cc/64">
        </v-avatar>
      </template>
      <template v-slot:opposite>
        <span>01/11/2020</span>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="headline">
          {{ n.name }}
        </v-card-title>
        <v-card-text>{{ n.body }}</v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>

	import axios from 'axios'

	export default{
		created:function(){
			this.comments();
		},
		data(){
			return{
				co:[],
			}
		},
		methods:{
			comments(){
				axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
				.then(response=>{
					this.co =response.data;
				})
			}			
		}
	}
</script>