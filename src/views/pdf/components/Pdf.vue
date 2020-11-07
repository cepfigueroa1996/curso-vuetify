<template>
	<div>

		<vue-html2pdf
			:show-layout="false"
			:float-layout="true"
			:enable-download="true"
			:preview-modal="true"
			:paginate-elements-by-height="1400"
			filename="pruebacarlos"
			:pdf-quality="2"
			:manual-pagination="false"
			pdf-format="a4"
			pdf-orientation="portrait"
			pdf-content-width="700px"
			margin="10"

			@progress="onProgress($event)"
			@hasStartedGeneration="hasStartedGeneration()"
			@hasGenerated="hasGenerated($event)"
			ref="html2Pdf"
		>
		<section slot="pdf-content">
			<slot></slot>
		</section>
		</vue-html2pdf>
	</div>
</template>

<script>
	import VueHtml2pdf from 'vue-html2pdf'

	export default{
		props:[ 'active' ],
		data(){
			return{

			}
		},
	    watch:{
	    	active(){
	    		this.$refs.html2Pdf.generatePdf()
	    	}
	    },
	    components: {
	        VueHtml2pdf
	    }

	}
</script>