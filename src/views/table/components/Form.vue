<template>
  <v-card depressed class="b-0">
    <v-card-title>
      <span class="headline">Datos de usuario</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="4"
          >
            <v-text-field
              label="Nombre.."
              required
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="4"
          >
            <v-text-field
              label="Apellido"
              hint="example of helper text only on focus"
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="4"
          >
            <v-text-field
              label="Telefono"
              hint="example of helper text only on focus"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="Direcciòn"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="Email*"
              required
            ></v-text-field>
          </v-col>

        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="error"
        text
      >
      	<v-icon>mdi-exit-to-app</v-icon>
    	Volver
      </v-btn>
      <v-btn
        class="blue lighten-1 white--text"
        text
      >
      	<v-icon>mdi-plus</v-icon>
        Agregar
      </v-btn>
    </v-card-actions>
  </v-card>

</template>