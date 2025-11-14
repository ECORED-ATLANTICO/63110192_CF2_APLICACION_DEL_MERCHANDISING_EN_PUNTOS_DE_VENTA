<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.align-items-center.mb-5
      .col-lg-2.d-none.d-lg-block
        figure
          img(src="@/assets/curso/1.png", alt="Ícono síntesis", data-aos="fade-down")
      .col-lg-10
        p.mb-0 El componente formativo Ejecución del <em>merchandising</em> brinda al aprendiz herramientas para implementar acciones que mejoren la experiencia de compra en el punto de venta. A través de la organización estratégica del espacio, el uso de planogramas, promociones, activaciones y técnicas como el <em>cross merchandising</em>, se fortalece la visibilidad de productos y la conexión con el cliente. Además, se desarrollan habilidades en <em>branding</em>, <em>visual merchandising</em>, <em>neuromarketing</em> y <em>marketing</em> sensorial para potenciar la imagen de marca e influir en la decisión de compra. El aprendiz comprende cómo estructurar exhibiciones primarias y secundarias, ubicar productos de forma estratégica y aplicar estímulos visuales que generen impacto. Todo esto permite responder eficazmente a los objetivos comerciales de las empresas y a las necesidades del consumidor actual. 
    .row.justify-content-center
      .col-auto.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
