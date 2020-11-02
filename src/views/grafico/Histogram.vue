<template>
	<v-col 
		:md="cMd"
		:cols="cCols"
		:sm="cSm"
	>
		<v-card class="pa-5">
			<ve-histogram 
				:data="datos" 
			></ve-histogram>
		</v-card>
	</v-col>
</template>

<script>
	export default{
		props:['datos', 'cMd', 'cCols', 'cSm'],
		data(){
			return{

			}
		}
	}
</script>