<template>
	  <v-simple-table>
	    <template v-slot:default>
	      <thead>
	        <tr>
	          <th class="text-left">Nombre</th>
	          <th class="text-left">Correo</th>
	          <th class="text-left">Telefono</th>
	          <th class="text-left">Direcciòn</th>
	          <th class="text-left">Acciòn</th>
	        </tr>
	      </thead>
	      <tbody>
	        <tr
	          v-for="item in arreglo"
	          :key="item.name"
	        >
	          <td>{{ item.name }}</td>
	          <td>{{ item.email }}</td>
	          <td>{{ item.phone }}</td>
	          <td>{{ item.address.street }}</td>
	          <td>
	          	<v-btn 
	          		color="error"
	          		small
	          	>
	          		<span>Borrar</span>
	          	</v-btn>
	          	<v-btn 
	          		color="blue lighten-1"
	          		small
	          		class="white--text ml-1"
	          	>
	          		<span>Actualizar</span>
	          	</v-btn>
	          </td>
	        </tr>
	      </tbody>
	    </template>
	  </v-simple-table>
</template>

<script>
	export default{
		props:['arreglo']
	}
</script>