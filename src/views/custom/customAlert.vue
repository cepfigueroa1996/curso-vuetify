<template>
    <v-alert
      outlined
      :icon="icon"
      :type="tipo"
      text
    >
    	{{ mensaje }}
    </v-alert>
</template>

<script>
	export default{

		props:[ 'tipo', 'mensaje', 'icon'],
		data(){
			return{

			}
		}
	}
</script>