<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    img.z-2(src="@/assets/curso/intro/1.png", alt="Imagen decorativa", data-aos="fade-up")

    .row.justify-content-center.z-2.mb-5
      .col-lg-10(data-aos="fade-down")
        div.banner-text.bg-color-secundario-s20
          p.mb-0 El componente formativo Ejecución del <em>merchandising</em> tiene como propósito que el aprendiz establezca elementos visuales y sensoriales en el punto de venta, aplicando los principios del <em>merchandising</em> y teniendo en cuenta las características del cliente. Se busca mejorar la forma en que se presentan los productos y servicios para generar una experiencia de compra más atractiva y efectiva.

    .row.justify-content-center.align-items-center.mb-5
      .col-sm-8.col-md-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/intro/2.png", alt="Imagen decorativa", data-aos="fade-down")
      .col-lg-9
        p Durante el proceso de formación, el aprendiz conocerá conceptos clave relacionados con el producto, el cliente y el <em>merchandising</em>. Aprenderá a diferenciar tipos de productos y servicios, identificar perfiles de clientes, reconocer los elementos visuales de un punto de venta como el mobiliario, la ambientación, la señalización, el color, la iluminación y la música ambiental, y comprender cómo estos influyen en el comportamiento del consumidor.
        p.mb-0 Al finalizar este componente, el aprendiz estará en capacidad de analizar puntos de venta reales, caracterizar a sus clientes y proponer mejoras en la exhibición y ambientación del espacio. Esto permitirá tomar decisiones estratégicas que fortalezcan la experiencia del cliente y contribuyan al cumplimiento de los objetivos comerciales.

    
    figure.mb-5
      .video.mb-2
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

</template>

<script>
export default {
  name: 'Introduccion',
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
