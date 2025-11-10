<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Imagen, marca y experiencia visual

    .row.justify-content-center.align-items-center
      .col-8.col-sm-6.col-lg-4.col-xl-3
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down" src="@/assets/curso/temas/tema3/1.png" alt="imagen de acompañamiento")
      .col-lg-8.col-xl-7
        p.mb-0 La construcción de una marca en el punto de venta no depende solo de los productos que se venden, sino de cómo estos se presentan y del entorno que los rodea. 
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left.color-secundario
            h4.mb-0 El <em>visual merchandising</em> actúa como un puente entre la identidad de marca y la experiencia del cliente, utilizando el espacio físico como canal de comunicación. Mediante ambientación, diseño gráfico, mobiliario y coherencia visual, se refuerza la personalidad de la marca y se generan experiencias memorables para el consumidor
            i.fas.fa-quote-right.color-secundario
            span.d-block.text-end -  (Levy & Weitz, 2018).

    Separador
    #t_3_1(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 3.1 <em>Branding</em> y visual <em>merchandising</em>

    .bloque-texto-g.color-terciario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/2.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El <em>branding</em> es el proceso estratégico de creación y gestión de la identidad de marca. Incluye elementos visuales (logotipo, tipografía, paleta de colores), verbales (nombres, eslóganes) y experienciales (trato al cliente, sensaciones transmitidas). El <em>visual merchandising</em> traduce estos componentes al espacio físico, garantizando que cada rincón del local refleje la propuesta de valor (García, 2020).

    .row.justify-content-center
      .col-xl-10
        .cajon.color-secundario.p-4
          p.mb-0 <strong>La coherencia es clave</strong>: un supermercado orientado al ahorro suele usar colores brillantes, señalización clara y distribución optimizada para la rapidez; mientras que una tienda gourmet opta por tonos elegantes, música suave y espacios amplios que invitan a explorar sin prisa (Kotler & Keller, 2022).

    .row.justify-content-center
      .col-xl-10
        Separador
        #t_3_2(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
          h3 3.2 <em>Neuromarketing</em> y <em>marketing</em> sensorial aplicado

    .row.justify-content-center.mb-5
      .col-lg-9.col-xl-8
        p.mb-4 El <em>neuromarketing</em> utiliza hallazgos neurocientíficos para entender las reacciones emocionales de los consumidores y aplicarlos a la estrategia comercial. En el punto de venta, esto implica decisiones de diseño que estimulan áreas cerebrales vinculadas al placer, la memoria o el deseo (Plassmann et al., 2015).
        .p-4.rounded-4.bg-color-primario-p5
          ul.lista-ul--color
            li
              i.fa-solid.fa-check
              | <strong>Vista</strong>: colores, orden y armonía visual.
            li
              i.fa-solid.fa-check
              | <strong>Oído</strong>: música ambiente adaptada a la hora y perfil del cliente.
            li
              i.fa-solid.fa-check
              | <strong>Olfato</strong>: aromas que refuercen la identidad del lugar.
            li
              i.fa-solid.fa-check
              | <strong>Tacto</strong>: materiales y texturas coherentes con el posicionamiento.
            li
              i.fa-solid.fa-check
              | <strong>Gusto</strong>: degustaciones que vinculen el producto con una experiencia positiva.

      .col-lg-3.col-xl-2.d-none.d-lg-block
        figure
          img(data-aos="fade-down" src="@/assets/curso/temas/tema3/3.png" alt="imagen de acompañamiento")

    .row.justify-content-center.mb-5
      .col-auto.col-xl-10
        .p-4.bg-radio-text
          .row.justify-content-center.align-items-center
            .col-lg-3.position-relative.h-100.d-none.d-lg-block 
              figure
                img.radio-img(data-aos="fade-down" src="@/assets/curso/temas/tema3/4.png" alt="imagen de acompañamiento")
            .col-lg-7
              p.mb-0 En Colombia, cadenas como Éxito y Jumbo integran estrategias sensoriales como aromas en panaderías, <em>playlists</em> según horario y materiales cálidos en zonas de descanso, buscando aumentar el tiempo de permanencia y fidelización (Portafolio, 2023).

    .row.justify-content-center
      .col-xl-10
        h4(data-aos='zoom-in-right').mb-5
          span.etiqueta-title Estrategias de imagen y experiencia visual en el punto de venta

    .row.justify-content-center
      .col-xl-10
        TabsA.color-primario
          .tarjeta.bg-color-primario-p10.p-4.pt-5(titulo="<em>Merchandising</em> visual")
            .row.align-items-center.justify-content-center
              .col-12.col-sm-8
                h5 <em>Merchandising</em> visual
                p Presentación estratégica del espacio y productos para comunicar la identidad de marca.
                p <strong>Ejemplo</strong>. Tienda de ropa que utiliza maniquíes temáticos y vitrinas estacionales coherentes con su campaña.
              .col-4.col-sm-2
                figure
                  img.w-78(src="@/assets/curso/temas/tema3/5.png")

          .tarjeta.bg-color-primario-p10.p-4.pt-5(titulo="<em>Branding</em> físico")
            .row.align-items-center.justify-content-center
              .col-12.col-sm-8
                h5 <em>Branding</em> físico
                p Traducción de la identidad visual y verbal de la marca al espacio físico.
                p <strong>Ejemplo</strong>. Supermercado económico con señalización en colores vibrantes y tipografía simple.
              .col-4.col-sm-2
                figure
                  img.w-43(src="@/assets/curso/temas/tema3/6.png")

          .tarjeta.bg-color-primario-p10.p-4.pt-5(titulo="<em>Neuromarketing</em> aplicado")
            .row.align-items-center.justify-content-center
              .col-12.col-sm-8
                h5 <em>Neuromarketing</em> aplicado
                p Uso de estímulos que activan respuestas cerebrales positivas hacia la marca.
                p <strong>Ejemplo</strong>. Iluminación cálida en zona de frescos para realzar la percepción de calidad.
              .col-4.col-sm-2
                figure
                  img.w-95(src="@/assets/curso/temas/tema3/7.png")
                  
          .tarjeta.bg-color-primario-p10.p-4.pt-5(titulo="<em>Marketing</em> sensorial")
            .row.align-items-center.justify-content-center
              .col-12.col-sm-8
                h5 <em>Marketing</em> sensorial
                p Estimulación coordinada de los sentidos para reforzar la experiencia de compra.
                p <strong>Ejemplo</strong>. Aroma a pan recién horneado en la sección de panadería; música lounge en zona gourmet.
              .col-4.col-sm-2
                figure
                  img.w-72(src="@/assets/curso/temas/tema3/8.png")

</template>

<script>
export default {
  name: 'Tema3',
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
