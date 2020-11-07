<template>
	<v-container class="subheading ma-0 pa-0">
		<v-row>
			<Poll></Poll>
		</v-row>
	</v-container>
</template>

<script>
	import Poll from '@/views/file/components/Poll'

	export default{
		components:{Poll},
		data(){
			return{

			}
		}
	}
</script>