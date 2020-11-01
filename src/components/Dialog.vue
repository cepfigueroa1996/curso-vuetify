<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Datos de usuario</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  label="Nombre del usuario.."
                  required
                  prepend-icon="mdi-card"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  label="Telefono.."
                  hint="example of helper text only on focus"
                  prepend-icon="mdi-phone"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="12"
              >
                <v-text-field
                  label="Direcciòn.."
                  hint="example of helper text only on focus"
                  prepend-icon="mdi-map-marker"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  label="Correo electronico.."
                  required
                  prepend-icon="mdi-email"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  label="Contraseña.."
                  required
                  type="password"
                  prepend-icon="mdi-key"
                  v-model="pass1"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  label="Validar contraseña.."
                  hint="example of helper text only on focus"
                  type="password"
                  prepend-icon="mdi-key"
                  v-model="pass2"
                ></v-text-field>
              </v-col>

			    <v-alert
			      dense
			      outlined
			      type="error"
			      v-if="pass1 != pass2 && pass1 != '' && pass1 != null"
			    >
			      Las contraseñas no coinciden
			    </v-alert>
			    <v-alert
			      dense
			      outlined
			      type="success"
			      v-if="pass1 == pass2 && pass1 != '' && pass1 != null"
			    >
			      Las contraseñas coinciden
			    </v-alert>

            </v-row>
          </v-container>

        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog =! dialog"
          >
            Cerrar
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog =! dialog"
          >
            Actualizar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
	export default{
		props:['dialogo'],
		data(){
			return{
				dialog:false,
				pass1:null,
				pass2:null,
			}
		},
		watch:{
			dialogo(){
				this.dialog = this.dialogo;
			}
		}
	}
</script>