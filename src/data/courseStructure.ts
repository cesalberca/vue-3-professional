import type { CourseStructure } from '../types/course.ts'

export const courseStructure: CourseStructure = {
  modules: [
    {
      id: 'intro-y-evolucion',
      title: 'Introducción y evolución de Vue',
      description: 'Aprende las principales diferencias entre Vue 2 y Vue 3, y cómo migrar tu código existente.',
      mdxPath: '/src/content/intro-y-evolucion/index.mdx',
      sections: [
        {
          id: 'principales-diferencias',
          title: 'Principales diferencias entre Vue 2 y Vue 3',
          mdxPath: '/src/content/intro-y-evolucion/principales-diferencias/index.mdx',
          exercises: [
            {
              id: 'composition-vs-options',
              title: 'Composition API vs Options API',
              description: 'Migra un componente de Vue 2 a Vue 3',
              mdxPath: '/src/content/intro-y-evolucion/principales-diferencias/composition-vs-options/index.mdx',
            },
            {
              id: 'reactividad-con-ref',
              title: 'Reactividad con ref()',
              description: 'Aprende a crear y actualizar refs en Vue 3',
              mdxPath: '/src/content/intro-y-evolucion/principales-diferencias/reactividad-con-ref/index.mdx',
            },
            {
              id: 'reactividad-con-reactive',
              title: 'Reactividad con reactive()',
              description: 'Convierte objetos complejos usando reactive() API',
              mdxPath: '/src/content/intro-y-evolucion/principales-diferencias/reactividad-con-reactive/index.mdx',
            },
            {
              id: 'computed-properties',
              title: 'Computed Properties',
              description: 'Refactoriza sincronización manual a estado derivado automático',
              mdxPath: '/src/content/intro-y-evolucion/principales-diferencias/computed-properties/index.mdx',
            },
            {
              id: 'ciclo-de-vida',
              title: 'Ciclo de Vida',
              description: 'Aprende los hooks de ciclo de vida: onMounted, onUnmounted y onUpdated',
              mdxPath: '/src/content/intro-y-evolucion/principales-diferencias/ciclo-de-vida/index.mdx',
            },
            {
              id: 'conceptos-combinados',
              title: 'Conceptos Combinados',
              description: 'Migración completa: filters, template refs, watchers, emits y v-bind CSS',
              mdxPath: '/src/content/intro-y-evolucion/principales-diferencias/conceptos-combinados/index.mdx',
            },
            {
              id: 'composables',
              title: 'Extrayendo lógica a Composables',
              description: 'Refactoriza un componente para extraer la lógica a un composable (useCounter)',
              mdxPath: '/src/content/intro-y-evolucion/principales-diferencias/composables/index.mdx',
            },
          ],
        },
      ],
    },
    {
      id: 'gestion-rutas-estado',
      title: 'Gestión de rutas y estado',
      description: 'Aprende a manejar el routing con Vue Router 4 y la gestión de estado global con Pinia.',
      mdxPath: '/src/content/gestion-rutas-estado/index.mdx',
      sections: [
        {
          id: 'gestion-rutas',
          title: 'Gestion de rutas con Vue Router 4',
          mdxPath: '/src/content/gestion-rutas-estado/gestion-rutas/index.mdx',
          exercises: [
            {
              id: 'definiendo-router',
              title: 'Migrar de Vue Router 3 a Vue Router 4',
              description: 'Migra de Vue Router 3 a Vue Router 4 usando sus nuevos APIs',
              mdxPath: '/src/content/gestion-rutas-estado/gestion-rutas/definiendo-router/index.mdx',
            },
          ],
        },
        {
          id: 'gestion-estado',
          title: 'Gestión de estado con Pinia',
          mdxPath: '/src/content/gestion-rutas-estado/gestion-estado/index.mdx',
          exercises: [
            {
              id: 'definiendo-store',
              title: 'Definiendo Store con Setup Function',
              description: 'Convierte un store de Options API a Setup Function con TypeScript',
              mdxPath: '/src/content/gestion-rutas-estado/gestion-estado/definiendo-store/index.mdx',
            },
            {
              id: 'pinia-todos-avanzado',
              title: 'Pinia: storeToRefs, reset y getter con parámetro',
              description:
                'Refactoriza la lista de tareas para usar storeToRefs, reset del estado y un getter con parámetro',
              mdxPath: '/src/content/gestion-rutas-estado/gestion-estado/pinia-todos-avanzado/index.mdx',
            },
          ],
        },
      ],
    },
    {
      id: 'buenas-practicas-y-herramientas',
      title: 'Buenas prácticas y herramientas',
      description: 'Patrones recomendados, tooling y flujos de trabajo para proyectos Vue 3 profesionales.',
      mdxPath: '/src/content/buenas-practicas-y-herramientas/index.mdx',
      sections: [
        {
          id: 'configuracion',
          title: 'Mejores prácticas de configuración',
          mdxPath: '/src/content/buenas-practicas-y-herramientas/configuracion/index.mdx',
          exercises: [],
        },
        {
          id: 'arquitectura',
          title: 'Arquitectura',
          mdxPath: '/src/content/buenas-practicas-y-herramientas/arquitectura/index.mdx',
          exercises: [
            {
              id: 'use-cases',
              title: 'Use Cases: del componente al caso de uso',
              description: 'Refactoriza una llamada HTTP del componente a un Caso de Uso ejecutado por UseCaseService.',
              mdxPath: '/src/content/buenas-practicas-y-herramientas/arquitectura/use-cases/index.mdx',
            },
            {
              id: 'repository',
              title: 'Repositorio: interfaces e implementaciones',
              description:
                'Define contratos de repositorio y crea implementaciones (API, memoria) para desacoplar el dominio.',
              mdxPath: '/src/content/buenas-practicas-y-herramientas/arquitectura/repository/index.mdx',
            },
            {
              id: 'capas',
              title: 'Capas de arquitectura',
              description:
                'Entiende la separación por capas (domain, application, infrastructure, delivery) y sus responsabilidades.',
              mdxPath: '/src/content/buenas-practicas-y-herramientas/arquitectura/capas/index.mdx',
            },
            {
              id: 'middlewares',
              title: 'Middlewares',
              description: 'Abstraer lógica en middlewares',
              mdxPath: '/src/content/buenas-practicas-y-herramientas/arquitectura/middlewares/index.mdx',
            },
          ],
        },
        {
          id: 'typescript',
          title: 'TypeScript con Vue 3',
          mdxPath: '/src/content/buenas-practicas-y-herramientas/typescript/index.mdx',
          exercises: [
            {
              id: 'tipado-props-emits',
              title: 'Tipando props y emits',
              description: "Añade tipos a props y eventos usando <script setup lang='ts'>, defineProps y defineEmits.",
              mdxPath: '/src/content/buenas-practicas-y-herramientas/typescript/tipado-props-emits/index.mdx',
            },
          ],
        },
      ],
    },
  ],
}
