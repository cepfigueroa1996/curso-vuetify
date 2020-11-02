<template>
	<v-col 
		:md="cMd"
		:cols="cCols"
		:sm="cSm"
	>
		<v-card class="pa-5">
			<ve-line 
				:data="datos" 
			></ve-line>
		</v-card>
	</v-col>
</template>

<script>
	import VeLine from 'v-charts/lib/line.common'

	export default{
		components:{ VeLine },
		props:['datos', 'cMd', 'cCols', 'cSm'],
		data(){
			return{

			}
		}
	}
</script>