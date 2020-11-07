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
            <validation-provider rules="min:5|required" v-slot="{ errors }">
              <v-text-field
                label="Nombre.."
                required
                v-model="value"
              ></v-text-field>
              <ul>
                <li v-for="error in errors" class="red--text" :key="error">{{ error }}</li>
              </ul>
            </validation-provider>

          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="4"
          >
            <validation-provider rules="required" v-slot="{ errors }">
              <v-text-field
                label="Apellido.."
                required
                v-model="apellido"
              ></v-text-field>
              <span class="red--text">{{ errors[0] }}</span>
            </validation-provider>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="4"
          >
            <validation-provider rules="numeric" v-slot="{ errors }">
              <v-text-field
                label="Telefono.."
                required
                v-model="phone"
              ></v-text-field>
              <span class="red--text">{{ errors[0] }}</span>
            </validation-provider>
          </v-col>
          <v-col cols="12">

            <validation-provider rules="required|max:30" v-slot="{ errors }">
              <v-text-field
                label="Direcciòn.."
                required
                v-model="direction"
              ></v-text-field>
              <ul>
                <li v-for="error in errors" class="red--text" :key="error">{{ error }}</li>
              </ul>
            </validation-provider>
          </v-col>
          <v-col cols="12">
            <validation-provider rules="email" v-slot="{ errors }">
              <v-text-field
                label="Email*"
                required
                v-model="email"
              ></v-text-field>
              <span class="red--text">{{ errors[0] }}</span>
            </validation-provider>
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



<script>
  import { ValidationProvider, extend } from 'vee-validate'
  import { required, email, numeric, max } from 'vee-validate/dist/rules';

  extend('min',{
    validate(value, args){
      return value.length >= args.length;
    },
    params: ['length'],
    message: 'Este campo debe contener al menor 4 caracteres',
  })

  extend('max',{
    ...max,
    message:'Excendiste el numero permitido de caracteres',
  })

  extend('required',{
    ...required,
    message: 'Este campo es obligatorio'
  })

  extend('email', {
    ...email,
    message:'Debes ingresar una direcciòn de correo'
  })
  extend('numeric',{
    ...numeric,
    message:'Este campo solo acepta valores numericos'
  })

  export default{
    components:{
      ValidationProvider
    },
    data(){
      return{
        value:'',
        phone:'',
        apellido:'',
        email:'',
        direction:'',
      }
    }

  }
</script>