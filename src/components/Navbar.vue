<template>
	<nav>
		<v-app-bar flat app class="grey lighten-4">
			<v-app-bar-nav-icon class="grey--text" 
				@click="drawer =! drawer"
			></v-app-bar-nav-icon>
			<v-toolbar-title class="text-uppercase grey--text">
				<span class="font-weight-light">Curso</span>
				<span>Ninja</span>
			</v-toolbar-title>
			<v-spacer></v-spacer>

		    <v-menu offset-y>
		      <template v-slot:activator="{ on, attrs }">
		        <v-btn
		          depressed
		          v-bind="attrs"
		          v-on="on"
		        >
		          <v-icon left>mdi-keyboard</v-icon>
		          Menu
		        </v-btn>
		      </template>
		      <v-list>
		        <v-list-item
		          v-for="(item, index) in links"
		          :key="index"
		          link
		          :to="item.route"
		        >
		          <v-list-item-title >{{ item.text}}</v-list-item-title>
		        </v-list-item>
		      </v-list>
		    </v-menu>
			<v-btn depressed @click="dialog =! dialog">
				<v-icon left>mdi-key</v-icon>
				<span>Editar</span>
			</v-btn>
			<v-btn depressed >
				<v-icon>mdi-exit-to-app</v-icon>
				<span>Salir</span>
			</v-btn>
		</v-app-bar>

		<v-navigation-drawer 
			v-model="drawer" 
			app 
			:style="'background-color:'+$store.state.color"
		>
			<v-list>
		        <v-list-item class="px-2 justify-center" >
					<v-list-item-avatar size="100" >
						<v-img  src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"></v-img>
					</v-list-item-avatar>
		        </v-list-item>
		        <v-list-item class="px-2 mb-3">
		            <v-list-item-title class="text-md-center white--text headline font-weight-light">
		            	Carlos Figueroa

		            </v-list-item-title>
		        </v-list-item>
		        <v-list-item class="px-2 mb-3 justify-center" @click="dialog =! dialog">
		        	<v-btn depressed color="light-blue accent-2" class="white--text  caption font-weight-light">
		        		<v-icon small>mdi-key</v-icon>
		        		<span class="ml-1">Editar</span>
		        	</v-btn>
		        </v-list-item>

		        <v-divider></v-divider>

				<v-list-item v-for="li in links" :key="li" :to="li.route" >
					<v-list-item-action>
						<v-icon class="white--text">{{ li.icon}}</v-icon>
					</v-list-item-action>
					<v-list-item-title class="white--text">
						{{ li.text }}
					</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
		<Dialog :dialogo="dialog" />
	</nav>
	
</template>

<script>
	import Dialog from '@/components/Dialog'

	export default{
		components:{
			Dialog
		},
		data(){
			return{
				dialog:false,
				drawer: false,
				links:[
					{icon: 'mdi-home', text: 'Inicio', route:'/'},
					{icon: 'mdi-table', text: 'Tablas', route:'/project'},
					{icon: 'mdi-face', text: 'Equipo', route:'/team'},
					{icon: 'mdi-key', text: 'General', route:'/general'},
				],
			}
		}
	}
</script>

