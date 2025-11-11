<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Titulo de primer nivel
 

//-  .row.align-items-center.justify-content-center.z-2
//-       .col-8.col-sm-6.col-xl-4
//-         figure
//-           img.mb-4.mb-xl-0(src='@/assets/curso/temas/tema1/6.png', alt='Imagen ilustrativa' data-aos='fade-down')
//-       .col-xl-8
//-         TabsA.color-primario
//-           .tarjeta.bg-palmera.bg-color-secundario-s5.p-4.pt-5(titulo="Leyes marco")
//-             h4.mb-4 Leyes marco
//-             p.mb-5 En Colombia, la Ley 105 de 1993 y la Ley 336 de 1996 establecen los principios generales del servicio público de transporte, definiendo su naturaleza y fundamentos reguladores.

//-           .tarjeta.bg-palmera.bg-color-secundario-s5.p-4.pt-5(titulo="Decretos reglamentarios")
//-             h4.mb-4 Decretos reglamentarios
//-             p.mb-5 El Decreto 1079 de 2015 consolida la normatividad del sector y regula aspectos del transporte terrestre automotor de pasajeros, carga y servicios especiales.

//-           .tarjeta.bg-palmera.bg-color-secundario-s5.p-4.pt-5(titulo="Resoluciones y circulares")
//-             h4.mb-4 Resoluciones y circulares
//-             p.mb-5 Emitidas por el Ministerio de Transporte y la Superintendencia de Transporte, especifican procedimientos técnicos y operativos, requisitos para vehículos, licencias, tarifas y servicios.

//-           .tarjeta.bg-palmera.bg-color-secundario-s5.p-4.pt-5(titulo="Normativa de seguridad vial")
//-             h4.mb-4 Normativa de seguridad vial
//-             p.mb-5 Incluye regulaciones sobre límites de velocidad, uso de cinturón de seguridad, licencias de conducción, mantenimiento de vehículos y el Plan Estratégico de Seguridad Vial (PESV), obligatorio para empresas según la Ley 2251 de 2022 y sus decretos reglamentarios.

//-           .tarjeta.bg-palmera.bg-color-secundario-s5.p-4.pt-5(titulo="Normativa ambiental")
//-             h4.mb-4 Normativa ambiental
//-             p.mb-5 Establece regulaciones sobre emisiones contaminantes, gestión de residuos peligrosos y uso de combustibles limpios, promoviendo el transporte sostenible.

//-           .tarjeta.bg-palmera.bg-color-secundario-s5.p-4.pt-5(titulo="Convenios internacionales")
//-             h4.mb-4 Convenios internacionales
//-             p.mb-5 Incorporan lineamientos de organismos como la ONU e IATA para el transporte de mercancías peligrosas, adoptando prácticas armonizadas a nivel global.





//- TABS
//- TabsA.color-primario
//-           .tarjeta.bg-palmera.bg-color-secundario-s5.p-4.pt-5(titulo="Fórmula de cálculo")
//-             h4.mb-4 Fórmula de cálculo
//-             p.mb-5 Ecuación matemática que permite obtener el valor del indicador.
//-             figure
//-               img(src="@/assets/curso/temas/tema2/4.png")

//-           .tarjeta.bg-palmera.bg-color-secundario-s5.p-4.pt-5(titulo="Unidad de medida")
//-             h4.mb-4 Unidad de medida
//-             p.mb-5 Forma en que se expresa el resultado obtenido.
//-             figure
//-               img(src="@/assets/curso/temas/tema2/5.png")

//-           .tarjeta.bg-palmera.bg-color-secundario-s5.p-4.pt-5(titulo="Frecuencia de medición")
//-             h4.mb-4 Frecuencia de medición
//-             p.mb-5 Periodo de tiempo en el que se recopila y analiza la información.
//-             figure
//-               img(src="@/assets/curso/temas/tema2/6.png")

//-           .tarjeta.bg-palmera.bg-color-secundario-s5.p-4.pt-5(titulo="Responsable")
//-             h4.mb-4 Responsable
//-             p.mb-5 Persona o equipo encargado de recopilar datos, calcular y analizar resultados.
//-             figure
//-               img(src="@/assets/curso/temas/tema2/7.png")

//-           .tarjeta.bg-palmera.bg-color-secundario-s5.p-4.pt-5(titulo="Meta o valor objetivo")
//-             h4.mb-4 Meta o valor objetivo
//-             p.mb-5 Valor ideal o deseado que representa un desempeño exitoso.
//-             figure
//-               img(src="@/assets/curso/temas/tema2/8.png")





</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
