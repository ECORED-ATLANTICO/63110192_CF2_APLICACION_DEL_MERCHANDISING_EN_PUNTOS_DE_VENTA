export default {
  global: {
    Name: 'Ejecución del <em>merchandising</em>',
    Description:
      'Este componente permite al aprendiz identificar y aplicar elementos visuales y sensoriales del punto de venta, con base en principios del <em>merchandising</em>. Se estudian productos, clientes y estrategias visuales para diseñar espacios comerciales que mejoren la experiencia del consumidor y favorezcan el logro de objetivos comerciales en entornos reales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Organización del espacio y ubicación de productos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Exhibiciones primarias y secundarias',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Ubicación estratégica de productos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Escaparatismo',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Planogramas y categorías',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Estímulo a la compra y estrategias de impulso',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: '<em>Cross merchandising</em> y ventas impulsivas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Promociones en el punto de venta',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Activaciones y degustaciones',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Imagen, marca y experiencia visual',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: '<em>Branding</em> y <em>visual merchandising</em>',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              '<em>Neuromarketing</em> y <em>marketing</em> sensorial aplicado',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Caso de estudio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Identificación del caso',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Diagnóstico técnico',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Análisis técnico del espacio comercial',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Propuesta de intervención estructurada',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Viabilidad financiera y operativa del proyecto',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo: 'Recomendaciones a la gerencia',
            hash: 't_4_6',
          },
          {
            numero: '4.7',
            titulo: 'Conclusión',
            hash: 't_4_7',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Organización del espacio y ubicación de productos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales – SENA. (2020). <em>Visual Merchandising Basics</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=6-iaznLZYTg',
    },
    {
      tema: 'Organización del espacio y ubicación de productos',
      referencia:
        'American Retails. (2023). <em>Conversación con Javier Vergara, experto en visual merchandising y diseño de tiendas en la región</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=kvg9VOYCISY',
    },
    {
      tema: 'Estímulo a la compra y estrategias de impulso',
      referencia:
        'Ecosistema de Recursos Educativos Digitales - SENA. (2020). <em>Exhibición en cross category</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=hnZfiJAA1nU',
    },
    {
      tema: 'Caso de estudio aplicabilidad.',
      referencia:
        'Ríos Quiñónez, M. B. (2024). Análisis del <em>visual merchandising</em> como estrategia de diseño y disposición de productos en farmacias independientes del DMQ. Res Non Verba Revista Científica, 14(1), 1–17.',
      tipo: 'Revista',
      link: 'https://revistas.ecotec.edu.ec/index.php/rnv/article/view/840',
    },
  ],
  glosario: [
    {
      termino: 'Activación',
      significado:
        'Estrategia de <em>marketing</em> experiencial que busca generar interacción directa entre el consumidor y la marca en el punto de venta.',
    },

    {
      termino: 'Ambientación',
      significado:
        'Conjunto de elementos sensoriales (música, aromas, iluminación, decoración) que crean una atmósfera específica en el establecimiento.',
    },

    {
      termino: '<em>Branding</em>',
      significado:
        'Proceso de construcción y gestión de la identidad visual, verbal y emocional de una marca.',
    },

    {
      termino: 'Categoría',
      significado:
        'Agrupación de productos que comparten una función o uso similar, facilitando su organización en el punto de venta.',
    },

    {
      termino: 'Circulación',
      significado:
        'Flujo de desplazamiento de los clientes dentro del punto de venta, influido por el diseño del layout.',
    },

    {
      termino: '<em>Cross merchandising</em>',
      significado:
        'Técnica que consiste en ubicar productos complementarios de diferentes categorías juntos para incentivar la compra cruzada.',
    },

    {
      termino: 'Degustación',
      significado:
        'Prueba gratuita de un producto ofrecida al cliente con el fin de promover su compra inmediata.',
    },

    {
      termino: 'Exhibición',
      significado:
        'Forma visual y estratégica en la que se presentan los productos al consumidor para maximizar su visibilidad y atractivo.',
    },

    {
      termino: 'Experiencia de compra',
      significado:
        'Conjunto de percepciones, emociones y valoraciones que tiene el consumidor durante su interacción con el punto de venta.',
    },

    {
      termino: 'Fidelización',
      significado:
        'Estrategia orientada a mantener y fortalecer la relación con los clientes para que realicen compras repetidas.',
    },

    {
      termino: 'Góndola',
      significado:
        'Mueble de exhibición utilizado en los puntos de venta para organizar productos de forma vertical y horizontal.',
    },

    {
      termino: '<em>Layout</em>',
      significado:
        'Diseño o distribución física del espacio comercial que define el recorrido y disposición de mobiliario y productos.',
    },

    {
      termino: '<em>Merchandising</em>',
      significado:
        'Conjunto de técnicas orientadas a optimizar la presentación del producto en el punto de venta para estimular su rotación.',
    },

    {
      termino: '<em>Neuromarketing</em> ',
      significado:
        'Aplicación de técnicas de neurociencia para analizar las respuestas emocionales del consumidor frente a estímulos de <em>marketing</em>.',
    },

    {
      termino: 'Planograma',
      significado:
        'Representación gráfica que define la ubicación exacta de productos en las góndolas según criterios estratégicos.',
    },

    {
      termino: 'POP (<em>Point of Purchase</em>)',
      significado:
        'Material publicitario ubicado en el punto de venta para apoyar la comunicación visual de promociones o productos.',
    },

    {
      termino: 'Promoción',
      significado:
        'Acción comercial temporal destinada a incrementar la demanda de un producto a través de incentivos como descuentos o bonos.',
    },

    {
      termino: 'Rotación',
      significado:
        'Frecuencia con la que un producto se vende y se repone en el punto de venta durante un periodo determinado.',
    },

    {
      termino: 'Señalética',
      significado:
        'Sistema visual de orientación y comunicación dentro del punto de venta, compuesto por letreros, flechas, indicadores y colores.',
    },

    {
      termino: '<em>Visual merchandising</em>',
      significado:
        'Rama del <em>merchandising</em> enfocada en el diseño visual del espacio comercial para optimizar la presentación de productos y mejorar la experiencia del cliente.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cámara de comercio de valencia (2022). <em>Conceptos básicos de escaparatismo.</em>',
      link:
        'https://www.camaravalencia.com/wp-content/uploads/2022/12/cuaderno-comercio-escaparatismo.pdf',
    },

    {
      referencia:
        'Editorial GG. (s. f.). <em>Visual merchandising</em> (2016). Editorial Gustavo Gili.',
      link:
        'https://editorialgg.com/media/catalog/product/9/7/9788425228681_inside.pdf',
    },

    {
      referencia:
        'Kotler, P., & Armstrong, G. (2021). <em>Fundamentos de marketing</em> (14.ª ed.). Pearson.',
      link:
        'https://tigubarcelos.wordpress.com/wp-content/uploads/2019/03/fundamentos-de-marketing-ld267.pdf',
    },

    {
      referencia:
        'Martínez, D. (s. f.). <em>Merchandising</em> (2017). Fundación Universitaria del Área Andina.',
      link:
        'https://digitk.areandina.edu.co/bitstream/handle/areandina/1370/Merchandising.pdf',
    },

    {
      referencia:
        'Martínez Cruz, H. (s. f.). <em>El arte de seducir: Merchandising</em> (1.ª ed.). ECOE Ediciones.',
      link:
        'https://www.ecoeediciones.com/wp-content/uploads/2018/01/El-arte-de-seducir-1.pdf',
    },

    {
      referencia:
        'Ríos Quiñónez, M. B. (2024). <em>Análisis del <em>visual merchandising</em> como estrategia de diseño y disposición de productos en farmacias independientes del DMQ</em>. Res Non Verba Revista Científica, 14(1), 1–17.',
      link: 'https://revistas.ecotec.edu.ec/index.php/rnv/article/view/840',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Yezid Arturo Choperena Guerrero',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jair Coll Gallardo',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Antonio Vecino Valero',
          cargo: 'Diseñador <i>web</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Fabio Fonseca Arguelles',
          cargo: 'Desarrollador <i>full stack junior</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Morales Angulo',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
