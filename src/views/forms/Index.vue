<template>
	<v-container class="ma-0 pa-0 subheading">
		<v-row>
    		<c-tooltip 
    			title="Registro de usuario"
    			description="Formulario de registro de usuario"
    		></c-tooltip>
    		<v-col md="12" sm="12" cols="12">
    			<v-card >
    				<h2 class="font-weight-light pa-3">Datos de usuario</h2>

    				<v-divider></v-divider>

					<form class="pa-5">
						<v-text-field
						prepend-inner-icon="mdi-card"
						v-model="name"
						label="Nombre.."
						required
						></v-text-field>

						<v-text-field
						prepend-inner-icon="mdi-phone"
						v-model="phone"
						label="Telefono.."
						required
						></v-text-field>

						<v-text-field
						prepend-inner-icon="mdi-map-marker"
						v-model="direction"
						label="Direccion.."
						required
						></v-text-field>

						<v-text-field
						prepend-inner-icon="mdi-email"
						v-model="email"
						label="Correo.."
						required
						></v-text-field>

						<v-text-field
						prepend-inner-icon="mdi-key"
						v-model="pass1"
						label="Contraseña.."
						required
						type="password"
						></v-text-field>

						<v-text-field
						prepend-inner-icon="mdi-key"
						v-model="pass2"
						label="Validar contraseña.."
						required
						type="password"
						></v-text-field>

						<c-alert :tipo="alerta" :mensaje="mensaje" :icon="icon" v-if="pass1 != ''"></c-alert>

						<v-checkbox
						v-model="checkbox"
						label="Aceptas las condiciones ?"
						required
						></v-checkbox>
						
						<v-btn color="error"> Cancerlar</v-btn>
						<v-btn class="mr-4 ml-2 light-blue lighten-1 white--text" > Enviar</v-btn>
					</form>
    			</v-card>
    		</v-col>
		</v-row>
	</v-container>
</template>

<script>

	import cTooltip from '@/views/custom/customTooltip'
	import cAlert from '@/views/custom/customAlert'

	export default{
		components: { cTooltip, cAlert },
		data(){
			return{
				name:null,
				email:null,
				select:null,
				direction:null,
				phone:null,
				checkbox:null,
				pass1:'',
				pass2:null,
				vali:null,
				mensaje:'',
				alerta:'',
				icon:'',
			}
		},
		watch:{
			pass1(){
				if (this.pass1 == this.pass2) {
					this.mensaje= 'Las contraseñas coinciden';
					this.alerta= "success";
					this.icon = 'mdi-lock-open';
				} else {
					this.alerta = "error";
					this.mensaje= 'Las contraseñas no coinciden';
					this.icon = 'mdi-lock';
				}
			},
			pass2(){
				if (this.pass1 == this.pass2) {
					this.mensaje= 'Las contraseñas coinciden';
					this.alerta= "success";
					this.icon = 'mdi-lock-open';
				} else {
					this.alerta = "error";
					this.mensaje= 'Las contraseñas no coinciden';
					this.icon = 'mdi-lock';
				}
			}
		}
	}
</script>