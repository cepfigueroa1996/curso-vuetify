<template>
	<div>
		{{ info }}
	</div>
</template>

<script>

	import axios from 'axios';

	export default{
		created: function() {
			this.usuarios();
		},
		data(){
			return{
				info:[],
			}
		},
		methods:{
			usuarios(){
				axios.get('http://127.0.0.1:8000/api/users')
				.then(response=>{
					this.info = response.data;
				})
			}
		},

	}
</script>