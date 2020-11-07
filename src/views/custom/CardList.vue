<template>
	<v-col :md="cMd">
	  <v-card
	    class="mx-auto"
	  >
	    <v-toolbar
	      color="cyan"
	      dark
	    >
	      <v-toolbar-title v-if="searchActive == 0">Usuarios</v-toolbar-title>

	      <v-spacer v-if="searchActive == 0"></v-spacer>

          <v-text-field
			class="mt-2"
			color="purple darken-2"
			label="Buscar.."
			required
			v-if="searchActive == 1"
          ></v-text-field>

	      <v-btn icon @click="searchActive =! searchActive">
	        <v-icon>mdi-magnify</v-icon>
	      </v-btn>
	    </v-toolbar>

	    <v-list three-line>
	      <template v-for="(item, index) in items">
	        <v-subheader
	          v-if="item.header"
	          :key="item.header"
	          v-text="item.header"
	        ></v-subheader>

	        <v-divider
	          v-else-if="item.divider"
	          :key="index"
	          :inset="item.inset"
	        ></v-divider>

	        <v-list-item
	          v-else
	          :key="item.title"
	        >
	          <v-list-item-avatar>
	            <v-img :src="item.avatar"></v-img>
	          </v-list-item-avatar>

	          <v-list-item-content>
	            <v-list-item-title v-html="item.title"></v-list-item-title>
	            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
	          </v-list-item-content>
	        </v-list-item>
	      </template>
	    </v-list>
	  </v-card>
	</v-col>
</template>

<script>
	export default{
		props:['items', 'cMd'],
		data(){
			return{
				searchActive:0,
			}
		}
	}
</script>