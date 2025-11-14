<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Caso de estudio

    .row.justify-content-center.align-items-center
      .col-8.col-sm-6.col-lg-3.col-xl-2
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down" src="@/assets/curso/temas/tema4/1.png" alt="imagen de acompañamiento")
      .col-lg-9.col-xl-8
        p Estudiar un caso de aplicación del <em>merchandising</em> resulta fundamental porque permite analizar de manera real y contextualizada cómo las estrategias de exhibición, distribución y ambientación influyen directamente en la experiencia de compra, la rotación de productos y la rentabilidad del negocio. 
        .cajon.color-secundario.p-4
          p.mb-0 En el caso del Supermercado Fresco, este análisis se convierte en una herramienta clave para diagnosticar problemas, proponer soluciones basadas en criterios técnicos y proyectar mejoras medibles, lo que facilita la toma de decisiones estratégicas frente a un entorno competitivo en constante cambio.

    Separador
    .row.justify-content-center
      .col-xl-10
        #t_4_1(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
          h3 4.1	Identificación del caso

    .row.justify-content-center.align-items-center
      .col-8.col-sm-6.col-lg-4.col-xl-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down" src="@/assets/curso/temas/tema4/2.png" alt="imagen de acompañamiento")
      .col-lg-8.col-xl-6
        .row.justify-content-center
          .col-lg-8.pe-lg-0
            .p-3.py-2.border-line
              p.mb-0 <strong>Nombre del punto de venta</strong>: Supermercado Fresco.
            .p-3.py-2.border-line.icon-before.icon-before--location
              p.mb-0 <strong>Ubicación</strong>: Barranquilla, Atlántico.
          .col-lg-4.d-none.d-lg-block
            figure
              img(data-aos="fade-down" src="@/assets/curso/temas/tema4/3.png" alt="imagen de acompañamiento")
        .p-4.py-3.border-line.icon-before.icon-before--folder
          p.mb-0 Contexto general: Fresco es un supermercado tradicional ubicado en una zona residencial de Barranquilla, con una superficie de ventas de aproximadamente 400 m².<br> A pesar de contar con una clientela regular, ha experimentado una disminución en las ventas en los últimos dos trimestres. El entorno competitivo ha cambiado debido a la llegada de cadenas de formato <em>hard discount</em> como Tiendas Ara y D1.<br> Ante esta situación, la gerencia ha solicitado un análisis técnico de <em>merchandising</em> que contemple acciones viables para revitalizar el punto de venta, aumentar el <em>ticket</em> promedio y fidelizar a los clientes actuales.

    Separador
    .row.justify-content-center
      .col-xl-10
        #t_4_2(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
          h3 4.2	Diagnóstico técnico
    
    .row.justify-content-center.mb-5
      .col-xl-10
        .p-4.rounded-4.bg-color-primario-p10
          .row.justify-content-center.align-items-center
            .col-lg-1.d-none.d-lg-block
              figure
                img(data-aos="fade-down" src="@/assets/curso/temas/tema4/6.svg" alt="imagen de acompañamiento")
            .col-lg-11
              p.mb-0 Mediante un proceso de observación directa en el punto de venta, complementado con una auditoría del <em>layout</em> y entrevistas estructuradas al personal operativo y administrativo, se identificaron las siguientes problemáticas que afectan de manera directa la eficiencia comercial y la experiencia del cliente:

    .row.justify-content-center.align-items-center.mb-5
      .col-6.col-sm-4.col-lg-4.col-xl-3
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down" src="@/assets/curso/temas/tema4/7.png" alt="imagen de acompañamiento")
      .col-lg-8.col-xl-7
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-terciario-t20")
          .row(titulo="Falta de planificación en el <em>layout</em> comercial")
            .col-md-10.mb-4.mb-md-0
              p.ms-2.ps-5 Las góndolas presentan una organización aleatoria sin un flujo de circulación definido. Esto provoca que el recorrido del cliente sea desordenado, reduciendo la exposición a productos estratégicos y limitando las oportunidades de compra por impulso. Además, dificulta la implementación de estrategias de ventas cruzadas y disminuye el tiempo de permanencia en el establecimiento.
          .row(titulo="Ausencia total de planogramas")
            .col-md-10.mb-4.mb-md-0
              p.ms-2.ps-5 La ubicación y disposición de los productos dependen del criterio subjetivo del personal operativo, lo que genera inconsistencias en la exhibición. Esta ausencia de estandarización dificulta la reposición eficiente, afecta la coherencia visual de la tienda y transmite una imagen de desorganización que puede impactar negativamente en la percepción del cliente.
          .row(titulo="Espacios subutilizados")
            .col-md-10.mb-4.mb-md-0
              p.ms-2.ps-5 Las denominadas “zonas calientes”; áreas con mayor tránsito y visibilidad, no han sido identificadas ni aprovechadas para potenciar la rotación de productos de alta rentabilidad. Esto representa una pérdida de oportunidades para incrementar ventas, mejorar el <em>ticket</em> promedio y fortalecer la presencia de marcas estratégicas en puntos clave.
          .row(titulo="Deficiencia en señalética y escasa comunicación visual")
            .col-md-10.mb-4.mb-md-0
              p.ms-2.ps-5 La señalización interna es insuficiente y muchas promociones no cuentan con material visual atractivo ni precios visibles. Esta carencia dificulta que el cliente identifique ofertas o promociones, reduce la claridad en la información y puede generar desconfianza en el proceso de compra. La falta de precios estandarizados también limita la competitividad y la transparencia percibida.
          .row(titulo="Iluminación insuficiente")
            .col-md-10.mb-4.mb-md-0
              p.ms-2.ps-5 La iluminación general es débil y carece de un diseño estratégico para resaltar productos clave o secciones de interés. La ausencia de luz focalizada en categorías prioritarias genera un ambiente apagado que no invita a la permanencia ni estimula el deseo de compra. Esto reduce el impacto visual de las exhibiciones y desaprovecha el potencial de venta de artículos destacados.

    .row.justify-content-center
      .col-auto.col-xl-10
        .p-4.bg-carrito.rounded-4 
          .row.justify-content-center.align-items-center
            .col-lg-8
              p.mb-0 En conjunto, estos hallazgos evidencian la necesidad de aplicar un plan integral de <em>merchandising</em> que reorganice el espacio de ventas, implemente estándares de exhibición, optimice los recursos visuales y sensoriales, y genere una experiencia de compra más atractiva y eficiente para el cliente.
            .col-lg-3.position-relative.h-100.d-none.d-lg-block 
              figure
                img.carrito-img(data-aos="fade-down" src="@/assets/curso/temas/tema4/8.png" alt="imagen de acompañamiento")

    Separador
    .row.justify-content-center
      .col-xl-10
        #t_4_3(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
          h3 4.3	Análisis técnico del espacio comercial

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/9.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El análisis técnico del espacio comercial permite identificar cómo la distribución física, la ubicación estratégica de productos y la identidad visual influyen directamente en el comportamiento de compra y en los resultados de ventas. La tabla presenta las variables críticas observadas en el Supermercado Fresco, sus condiciones actuales y el impacto comercial que generan, evidenciando oportunidades de mejora que pueden ser abordadas mediante la implementación de un plan de <em>merchandising</em> estructurado.

    .row.justify-content-center
      .col-xl-10
        .titulo-sexto.color-secundario-s70.mb-4
          h5 Tabla 1.
          span Análisis técnico del espacio comercial

        .tabla-a.color-acento-contenido.mb-4.mb-lg-5
          table
            caption <strong>Fuente:</strong> SENA, 2025.
            thead
              tr(style="background-color: #D8E9FF;")
                th Variable
                th(colspan="2") Observación técnica
                th(colspan="2") Impacto comercial
            tbody
              tr
                td <em>Layout.</em>
                td(colspan="2") Formato lineal con pasillos estrechos.
                td(colspan="2") Dificulta la circulación y reduce tiempo de permanencia.
              tr(style="background-color: #F9F7F4")
                td Zona de oro.
                td(colspan="2") Ocupada por productos de baja rotación.
                td(colspan="2") Baja conversión de compra en categorías clave.
              tr
                td Exhibiciones.
                td(colspan="2") No estandarizadas ni alineadas con la estrategia.
                td(colspan="2") Reducción de ventas por impulso.
              tr(style="background-color: #F9F7F4")
                td <em>Branding.</em>
                td(colspan="2") Inexistente: no hay identidad gráfica definida.
                td(colspan="2") Pérdida de diferenciación frente a competidores.

    Separador
    .row.justify-content-center
      .col-xl-10
        #t_4_4(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido
          h3 4.4	Propuesta de intervención estructurada

    .row.justify-content-center.mb-4
      .col-xl-10
        .p-4.rounded-4.bg-color-terciario-t10
          .row.justify-content-center.align-items-center
            .col-lg-1.d-none.d-lg-block
              figure
                img(data-aos="fade-down" src="@/assets/curso/temas/tema4/10.svg" alt="imagen de acompañamiento")
            .col-lg-11
              p.mb-0 Con el propósito de mejorar el rendimiento comercial y la competitividad del Supermercado Fresco, se plantea un plan de <em>merchandising</em> enfocado en reorganizar el espacio físico, optimizar la experiencia visual y sensorial, y fortalecer la identidad de marca. Los ejes estratégicos propuestos a continuación buscan incrementar la rotación de productos, atraer a más clientes y elevar los indicadores de ventas y fidelización:

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-8.col-xl-7.mb-4.mb-lg-0
        .p-4.bg-color-acento-contenido-a5.rounded-4.icon-before
          p.mb-0 <strong>Objetivo general</strong>: reestructurar el espacio físico y visual del supermercado para maximizar el desempeño de ventas, fortalecer la identidad de marca y aumentar la rotación de productos estratégicos. 
      .col-lg-4.col-xl-3
        .p-4.bg-color-secundario-s10.rounded-4.h-100.icon-before.icon-before--bandera
          p.mb-0 <strong>Ejes estratégicos del plan de <em>merchandising</em></strong>:

    .row.justify-content-center
      .col-xl-10
        .titulo-sexto.color-secundario-s70.mb-4
          h5 Tabla 2.
          span Ejes estratégicos del plan de <em>merchandising</em>:

        .tabla-a.tabla-a--left.color-acento-contenido.mb-4.mb-lg-5
          table
            caption <strong>Fuente:</strong> SENA, 2025.
            thead
              tr(style="background-color: #D8E9FF;")
                th Nombre
                th(colspan="2") Descripción
            tbody
              tr
                td Rediseño del <em>layout</em>
                td(colspan="2") 
                  ul.lista-ul--color
                      li.d-flex.gap-1
                        i.fa-solid.fa-check
                        | Implementación de un <em>layout</em> tipo loop o racetrack para conducir al cliente a través de toda la tienda, priorizando el contacto con zonas calientes.
              tr(style="background-color: #F9F7F4")
                td Aplicación de planogramas por categorías
                td(colspan="2") 
                  ul.lista-ul--color
                      li.d-flex.gap-1
                        i.fa-solid.fa-check
                        | Elaboración técnica con base en rotación, márgenes y complementariedad de productos.
              tr
                td Reubicación de productos por zonas
                td(colspan="2")
                  ul.lista-ul--color
                    li.d-flex.gap-1
                      i.fa-solid.fa-check
                      | Productos de alta rentabilidad en zona de oro.
                    li.d-flex.gap-1
                      i.fa-solid.fa-check
                      | 
                      div
                        p.mb-0 <em>Cross merchandising</em> con productos complementarios en puntos clave.
                    li.d-flex.gap-1
                      i.fa-solid.fa-check
                      | Exhibiciones primarias en entradas y cabeceras de góndola.
              tr(style="background-color: #F9F7F4")
                td Mejoramiento de la experiencia visual y sensorial
                td(colspan="2")
                  ul.lista-ul--color
                    li.d-flex.gap-1
                      i.fa-solid.fa-check
                      | Aplicación de <em>branding</em> interno (colores institucionales, slogan, señalética, uniformes).
                    li.d-flex.gap-1
                      i.fa-solid.fa-check
                      | Mejora en iluminación LED cálida, uso de aroma ambiental sutil.
                    li.d-flex.gap-1
                      i.fa-solid.fa-check
                      | Ambientación musical suave de acuerdo con el perfil del cliente.
              tr
                td Activaciones y promociones semanales
                td(colspan="2") 
                  ul.lista-ul--color
                      li.d-flex.gap-1
                        i.fa-solid.fa-check
                        | Plan mensual de activaciones por categoría (lácteos, <em>snacks</em>, higiene personal) con degustaciones y dinámicas de fidelización.

    Separador
    .row.justify-content-center
      .col-xl-10
        #t_4_5(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido
          h3 4.5 Viabilidad financiera y operativa del proyecto

    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-sm-6.col-lg-3.col-xl-2
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down" src="@/assets/curso/temas/tema4/13.png" alt="imagen de acompañamiento")
      .col-lg-9.col-xl-8
        p El presupuesto estimado detalla la inversión necesaria para ejecutar las acciones del plan de <em>merchandising</em>, considerando adecuaciones físicas, mejoras visuales y actividades promocionales. Asimismo, se establecen indicadores de desempeño proyectados que permitirán medir el impacto de la intervención en ventas, rotación de productos y fidelización de clientes.

    .row.justify-content-center.align-items-center
      .col-lg-8.col-xl-7
        .titulo-sexto.color-secundario-s70.mb-4
          h5 Tabla 3.
          span Presupuesto estimado

        .tabla-a.color-acento-contenido.mb-4.mb-lg-5
          table
            caption <strong>Fuente:</strong> SENA, 2025.
            thead
              tr(style="background-color: #D8E9FF;")
                th Rubro
                th Valor estimado (COP)
            tbody
              tr
                td Rediseño de <em>layout</em> y mobiliario
                td $ 8.500.000
              tr(style="background-color: #F9F7F4")
                td Producción de señalética
                td $ 3.200.000
              tr
                td Diseño e impresión de planogramas
                td $ 1.500.000
              tr(style="background-color: #F9F7F4")
                td Iluminación LED y ambientación
                td $ 6.000.000
              tr
                td Activaciones mensuales (3 meses)
                td $ 4.500.000
              tr(style="background-color: #F9F7F4")
                td <strong>TOTAL</strong>
                td <strong>$ 23.700.000</strong>

      .col-8.col-sm-6.col-lg-4.col-xl-3
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down" src="@/assets/curso/temas/tema4/14.png" alt="imagen de acompañamiento")

    .row.justify-content-center.align-items-center
      .col-8.col-sm-6.col-lg-4.col-xl-3.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down" src="@/assets/curso/temas/tema4/15.png" alt="imagen de acompañamiento")

      .col-lg-8.col-xl-7
        .titulo-sexto.color-secundario-s70.mb-4
          h5 Tabla 4.
          span Indicadores de desempeño proyectados

        .tabla-a.color-acento-contenido
          table
            caption <strong>Fuente:</strong> SENA, 2025.
            thead
              tr(style="background-color: #D8E9FF;")
                th(colspan="2") Indicador
                th Línea base actual
                th Meta a 3 meses
            tbody
              tr
                td(colspan="2") <em>Ticket</em> promedio diario
                td $ 18.400
                td $ 23.000
              tr(style="background-color: #F9F7F4")
                td(colspan="2") Rotación de productos por góndola
                td 2.1
                td 3.5
              tr
                td(colspan="2") Ventas por zona caliente
                td 22 % del total
                td 35 % del total
              tr(style="background-color: #F9F7F4")
                td(colspan="2") Tasa de recompra de clientes
                td 41 %
                td 60 %

    Separador
    .row.justify-content-center
      .col-xl-10
        #t_4_6(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido
          h3 4.6	Recomendaciones a la gerencia

    .row.justify-content-center.mb-4
      .col-xl-10
        .cajon.color-secundario.p-4
          p.mb-0 Con base en el diagnóstico y la propuesta de intervención desarrollada, se plantean las siguientes recomendaciones dirigidas a la gerencia, orientadas a garantizar la ejecución eficiente del plan de <em>merchandising</em> y maximizar el retorno sobre la inversión. Estas sugerencias se fundamentan en criterios técnicos, buenas prácticas del sector retail y en la necesidad de implementar un modelo escalable y medible que permita una toma de decisiones informada:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.col-xl-7
        .p-4.py-3.bg-color-acento-contenido-a5.rounded-4.icon-before.icon-before--tuerca.mb-3
          p.mb-0 Aprobar la inversión en una fase piloto de tres meses, priorizando las acciones de mayor impacto inmediato (<em>layout</em>, señalética y planogramas), con el fin de validar su efectividad antes de una implementación total.
        .p-4.py-3.bg-color-acento-contenido-a5.rounded-4.icon-before.icon-before--tuerca.mb-3
          p.mb-0 Designar un coordinador interno de <em>merchandising</em>, con formación técnica y capacidad de gestión, que actúe como enlace entre la gerencia y el personal operativo, asegurando el cumplimiento de estándares y cronogramas.
        .p-4.py-3.bg-color-acento-contenido-a5.rounded-4.icon-before.icon-before--tuerca
          p.mb-0 Implementar un sistema de seguimiento quincenal que incluya reportes de indicadores clave (ticket promedio, rotación de productos, ventas en zonas calientes y tasa de recompra), lo que permitirá medir avances y ajustar la estrategia en tiempo real.
      .d-none.d-lg-block.col-lg-4.col-xl-3
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down" src="@/assets/curso/temas/tema4/16.png" alt="imagen de acompañamiento")

    .row.justify-content-center.align-items-center
      .col-8.col-sm-5.col-lg-4.col-xl-3
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down" src="@/assets/curso/temas/tema4/18.png" alt="imagen de acompañamiento")
      .col-lg-8.col-xl-7
        .p-4.py-3.bg-color-acento-contenido-a5.rounded-4.icon-before.icon-before--tuerca.mb-3
          p.mb-0 Evaluar el Retorno sobre la Inversión (ROI) al finalizar la fase piloto, utilizando métricas financieras y de comportamiento del cliente para determinar la viabilidad de escalar el modelo a otras áreas o sucursales.
        .p-4.py-3.bg-color-acento-contenido-a5.rounded-4.icon-before.icon-before--tuerca.mb-3
          p.mb-0 Establecer un protocolo de actualización continua de planogramas, <em>layout</em> y acciones promocionales, evitando que la mejora inicial se diluya y asegurando la sostenibilidad de los resultados a mediano y largo plazo.

    Separador
    #t_4_7(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 4.7 Conclusión

    img.z-2(data-aos="fade-up")(src="@/assets/curso/temas/tema4/19.png", alt="Imagen decorativa")

    .row.justify-content-center.z-2.mb-5
      .col-lg-10(data-aos="fade-down")
        div.banner-text.bg-color-secundario-s20
          p.mb-0 El presente análisis técnico demuestra que Supermercado Fresco presenta un alto potencial de mejora mediante la aplicación estructurada de estrategias de <em>merchandising</em>. La propuesta planteada no solo es viable desde el punto de vista financiero, sino que permitirá a la organización competir en igualdad de condiciones frente a grandes cadenas, generando valor para el cliente, eficiencia operativa y crecimiento en ventas.

</template>

<script>
export default {
  name: 'Tema4',
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
