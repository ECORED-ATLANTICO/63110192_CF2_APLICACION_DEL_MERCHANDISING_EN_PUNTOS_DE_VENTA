<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Estímulo a la compra y estrategias de impulso

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El <em>merchandising</em> va más allá de la organización física; su propósito principal es activar la compra. Por ello, el uso de técnicas de estimulación sensorial, promociones y asociaciones estratégicas es clave para generar ventas no planificadas y aumentar el valor del ticket promedio.

    .row.justify-content-center
      .col-xl-10
        .p-4.bg-color-primario-p10.rounded-4
          .row.align-items-center.justify-content-center
            .col-lg-2.col-xl-1.d-none.d-lg-block
              figure
                img.w-60(data-aos="fade-down" src="@/assets/curso/temas/tema2/2.svg" alt="imagen de acompañamiento")
            .col-lg-10.col-xl-11
              p.mb-0 El estímulo a la compra se fundamenta en principios de psicología del consumidor. Entre los más relevantes se encuentran: la escasez percibida (promociones por tiempo limitado), la reciprocidad (muestras gratis), la influencia social (productos más vendidos) y la asociación emocional (colores, música, experiencias).

    Separador
    .row.justify-content-center
      .col-xl-10
        #t_2_1(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
          h3 2.1 <em>Cross merchandising</em> y ventas impulsivas

    .row.justify-content-center.mb-4
      .col-8.col-sm-6.col-lg-4.col-xl-3
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down" src="@/assets/curso/temas/tema2/3.png" alt="imagen de acompañamiento")
      .col-lg-8.col-xl-7
        p El <em>cross merchandising</em> es una estrategia que consiste en agrupar productos complementarios en un mismo espacio para inducir la compra conjunta. Por ejemplo, exhibir vino junto a quesos o café junto a galletas. Esta técnica favorece la conveniencia y aumenta el valor del ticket promedio.
        .cajon.color-secundario.p-4
          p.mb-0 Las ventas impulsivas, por otro lado, se activan mediante la ubicación estratégica de productos en zonas de tránsito obligado, como cajas registradoras o entradas. Artículos de bajo precio, novedades o productos sensoriales (dulces, snacks, cosméticos) son ideales para estas zonas.

    .row.justify-content-center.mb-4
      .col-xl-10
        .p-4.bg-color-primario-p10.rounded-4
          .row.align-items-center.justify-content-center
            .col-lg-2.col-xl-1.d-none.d-lg-block
              figure
                img.w-60(data-aos="fade-down" src="@/assets/curso/temas/tema2/4.svg" alt="imagen de acompañamiento")
            .col-lg-10.col-xl-11
              p.mb-0 La clave del éxito en estas estrategias radica en el conocimiento profundo del cliente, el diseño atractivo del espacio y el seguimiento de métricas de conversión. Martínez (2017) señala que estas tácticas son eficaces cuando están alineadas con las emociones del consumidor y los momentos clave del recorrido de compra. 
    
    .row.justify-content-center
      .col-xl-10
        .p-4.bg-color-acento-contenido-a5.rounded-4.icon-before.icon-before--video.mb-3.mb-lg-0.h-100.d-flex.align-items-center.justify-content-evenly
          .d-flex.justify-content-center.align-items-center.flex-column.gap-4.flex-sm-row
            div
              p.mb-0 <strong>¿Qué es una exhibición en cross category? ¿Cómo exhibir en cross merchandising?</strong> Ir al siguiente video, el cual aportará conocimientos relevantes y reforzará contenido de relacionado con el tema cross merchandising y ventas impulsivas.

            div.width-minimo
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=hnZfiJAA1nU" target="_blank")
                span <strong>Ir al enlace</strong>
                i.fa-solid.fa-link

    
    Separador
    .row.justify-content-center
      .col-xl-10
        #t_2_2(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
          h3 2.2 Promociones en el punto de venta

    .row.justify-content-center.mb-4.factores-slider.align-items-center
      .col-8.col-sm-4.col-lg-4.col-xl-3
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down" src="@/assets/curso/temas/tema2/6.png" alt="imagen de acompañamiento")
      .col-lg-8.col-xl-7
        p Las promociones son herramientas poderosas para captar la atención del cliente, acelerar la rotación de productos y diferenciar la oferta. Una promoción efectiva debe tener objetivos claros, duración definida, soporte visual adecuado y seguimiento en tiempo real. Las promociones mal ejecutadas generan pérdidas y deterioran la percepción de valor de la marca.
        p Se clasifican en:
        .p-2.p-sm-4.bg-slider.rounded-4
          SlyderF(columnas="col-12")
            .tarjeta.tarjeta--blanca.p-4
              h5.mb-4 Promociones de precio
              p Ajuste directo del precio para incentivar la compra inmediata.
              p.mb-0 <strong>Ejemplos.</strong>
              ul.lista-ul--color
                li.d-flex
                  i.fa-solid.fa-check
                  | 2x1: paga uno y llévate dos.
                li.d-flex
                  i.fa-solid.fa-check
                  | Descuento directo: 20 % menos sobre el precio original.
                li.d-flex
                  i.fa-solid.fa-check
                  | Precio especial: oferta exclusiva por tiempo limitado.

            .tarjeta.tarjeta--blanca.p-4
              h5.mb-4 Promociones de valor
              p Añade beneficios adicionales sin modificar el precio base.
              p.mb-0 <strong>Ejemplos.</strong>
              ul.lista-ul--color
                li.d-flex
                  i.fa-solid.fa-check
                  | Bonificación: 50 ml extra sin costo.
                li.d-flex
                  i.fa-solid.fa-check
                  | Producto adicional: compra un shampoo y recibe acondicionador gratis.
                li.d-flex
                  i.fa-solid.fa-check
                  | Empaque promocional: pack ahorro o combo familiar.

            .tarjeta.tarjeta--blanca.p-4
              h5.mb-4 Promociones emocionales	
              p Buscan conectar con el consumidor a través de experiencias o causas.
              p.mb-0 <strong>Ejemplos.</strong>
              ul.lista-ul--color
                li.d-flex
                  i.fa-solid.fa-check
                  | Sorteo: participa en un premio por comprar.
                li.d-flex
                  i.fa-solid.fa-check
                  | Concurso: comparte tu experiencia en redes y gana.
                li.d-flex
                  i.fa-solid.fa-check
                  | Causa social: donación de un porcentaje de ventas a una ONG.

    Separador
    #t_2_3(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 2.3 Activaciones y degustaciones

    img.z-2(data-aos="fade-up")(src="@/assets/curso/temas/tema2/7.png", alt="Imagen decorativa")

    .row.justify-content-center.z-2.mb-5
      .col-lg-10(data-aos="fade-down")
        div.banner-text.bg-color-secundario-s20
          p.mb-0 Las activaciones son intervenciones experienciales que permiten conectar emocionalmente con el consumidor. Incluir degustaciones, demostraciones de producto o dinámicas interactivas incrementa significativamente la recordación de marca y la intención de compra.

    .row.justify-content-center.align-items-center
      .col-12.col-sm-8.col-lg-4.col-xl-3
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down")(src="@/assets/curso/temas/tema2/8.png", alt="Imagen decorativa")
      .col-lg-8.col-xl-7
        p Este tipo de estrategias debe diseñarse con base en el perfil del consumidor objetivo, el tipo de producto y la oportunidad comercial. Por ejemplo, degustaciones de jugos en épocas de calor, demostraciones de cosméticos en fechas especiales o activaciones con personajes en lanzamientos.
        p.mb-0 Según la Editorial Gustavo Gili (2016), el éxito de una activación depende del diseño visual, el personal capacitado y el entorno sensorial controlado.




</template>

<script>
export default {
  name: 'Tema2',
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
