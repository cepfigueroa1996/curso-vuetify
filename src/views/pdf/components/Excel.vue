<template>
    <download-excel
    class="btn btn-default"
    :data="objeto"
    :fields="json_fields"
    worksheet="Carlos Figueroa"
    name="control-de-ordenes.xls"
    >
        <slot></slot>
    </download-excel>
</template>

<script>
    import DownloadExcel from "vue-json-excel";

    export default {
        components:{
            DownloadExcel
        },
        props:['objeto'],
        data(){
            return{
                json_fields: {
                    "Tarea": "task",
                    "Telefono": "phone",
                    "Fecha": "birth"
                },
                json_meta: [
                    [
                        {
                        key: "charset",
                        value: "utf-8",
                        },
                    ],
                ],
            }
        }
    }
</script>