import Link from "next/link"
import { Check, Github, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PreciosPage() {
  const serviciosMinecraft = [
    {
      nombre: "Básico",
      precio: "15€",
      descripcion: "Configuración básica para servidores pequeños",
      caracteristicas: [
        "Instalación de servidor",
        "Configuración de plugins",
        "1 Servidor de proxy",
        "1 Servidor Spigot"
      ],
      popular: false,
      color: "red",
      frequence: '/mes'
    },
    {
      nombre: "Estándar",
      precio: "25€",
      descripcion: "Ideal para servidores medianos con funcionalidades personalizadas",
      caracteristicas: [
        "Instalación de servidor",
        "Configuración de plugins",
        "1 Servidor de proxy",
        "3 Servidor Spigot"
      ],
      popular: true,
      color: "yellow",
      frequence: "/mes"
    },
    {
      nombre: "Premium",
      precio: "+35€",
      descripcion: "Solución completa para Networks de servidores profesionales",
      caracteristicas: [
        "Instalación de servidor",
        "Configuración de plugins",
        "+1 Servidor de proxy",
        "+5 Servidor Spigot"
      ],
      frequence: "/mes",
      popular: false,
      color: "blue",
    },
  ]

  const serviciosWeb = [
    {
      nombre: "Sitio Web Básico",
      precio: "10€",
      descripcion: "Página web simple para presentar tu negocio o proyecto",
      caracteristicas: [
        "Diseño responsive",
        "Hasta 5 secciones",
        "Entrega en 7 días",
      ],
      popular: false,
      color: "red",
    },
    {
      nombre: "Sitio Web Estándar",
      precio: "25€",
      descripcion: "Sitio web profesional con múltiples páginas y funcionalidades",
      caracteristicas: [
        "Diseño responsive personalizado",
        "Hasta 10 páginas",
        "Blog integrado",
        "Panel de administración",
        "Optimización de velocidad",
        "Entrega en 21 días",
      ],
      popular: true,
      color: "yellow",
    },
    {
      nombre: "Sitio Web Premium",
      precio: "35€",
      descripcion: "Sitio web profesional con múltiples páginas y funcionalidades avanzadas",
      caracteristicas: [
        "Diseño responsive personalizado",
        "Panel de administración avanzado",
        "Optimización de velocidad",
        "Hasta 15-20 páginas",
        "Entrega en 30 días",
      ],
      popular: false,
      color: "blue",
    },
  ]

  const serviciosApp = [
    {
      nombre: "Aplicación Básica",
      precio: "1000€",
      descripcion: "Aplicación simple para Android o iOS",
      caracteristicas: [
        "Diseño de UI/UX",
        "Hasta 5 pantallas",
        "Funcionalidades básicas",
        "Publicación en tiendas",
        "Entrega en 30 días",
      ],
      popular: false,
      color: "red",
    },
    {
      nombre: "Aplicación Estándar",
      precio: "2500€",
      descripcion: "Aplicación completa con backend y funcionalidades avanzadas",
      caracteristicas: [
        "Diseño de UI/UX personalizado",
        "Hasta 15 pantallas",
        "Backend incluido",
        "Autenticación de usuarios",
        "Notificaciones push",
        "Publicación en tiendas",
        "Entrega en 60 días",
      ],
      popular: true,
      color: "yellow",
    },
    {
      nombre: "Aplicación Premium",
      precio: "5000€+",
      descripcion: "Solución completa para proyectos complejos",
      caracteristicas: [
        "Diseño de UI/UX avanzado",
        "Pantallas ilimitadas",
        "Backend escalable",
        "Funcionalidades personalizadas",
        "Integración con APIs externas",
        "Panel de administración",
        "Soporte por 6 meses",
        "Entrega en 90 días",
      ],
      popular: false,
      color: "blue",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold text-2xl text-gradient gradient-text-red-yellow">HAUCH</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link href="/" className="flex items-center text-lg font-medium transition-colors hover:text-vibrant-red">
                Inicio
              </Link>
              <Link
                href="/about"
                className="flex items-center text-lg font-medium transition-colors hover:text-vibrant-yellow"
              >
                Sobre Mí
              </Link>
              <Link
                href="/projects"
                className="flex items-center text-lg font-medium transition-colors hover:text-vibrant-blue"
              >
                Proyectos
              </Link>
              <Link
                href="/blog"
                className="flex items-center text-lg font-medium transition-colors hover:text-vibrant-green"
              >
                Blog
              </Link>
              <Link
                href="/precios"
                className="flex items-center text-lg font-medium transition-colors hover:text-vibrant-red"
              >
                Precios
              </Link>
              <Link
                href="/contact"
                className="flex items-center text-lg font-medium transition-colors hover:text-vibrant-yellow"
              >
                Contacto
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <Link href="https://github.com" target="_blank" rel="noreferrer">
                <div className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 w-10 hover:text-vibrant-red">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </div>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/80 pointer-events-none"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gradient gradient-text-blue-green">
                  Mis Servicios y Precios
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Soluciones profesionales adaptadas a tus necesidades y presupuesto
                </p>
              </div>
            </div>

            {/* Servicios Minecraft */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-center text-gradient gradient-text-red-yellow mb-8">
                Configuración de Servidores Minecraft
              </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {serviciosMinecraft.map((plan) => (
                  <div
                    key={plan.nombre}
                    className={`relative flex flex-col rounded-xl border border-white/10 bg-secondary/30 backdrop-blur-sm hover:border-vibrant-${plan.color}/50 transition-all duration-300 hover-glow overflow-hidden ${
                      plan.popular ? "ring-2 ring-vibrant-yellow" : ""
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute top-0 right-0">
                        <div className="bg-vibrant-yellow text-black text-xs font-bold px-3 py-1 transform rotate-45 translate-x-[30%] translate-y-[30%] shadow-lg">
                          POPULAR
                        </div>
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className={`text-2xl font-bold text-vibrant-${plan.color}`}>{plan.nombre}</h3>
                      <div className="mt-4 flex items-baseline">
                        <span className={`text-4xl font-bold text-vibrant-${plan.color}`}>{plan.precio}</span><span className="mt-2 text-sm text-muted-foreground">{plan.frequence}</span>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{plan.descripcion}</p>

                      <ul className="mt-6 space-y-3">
                        {plan.caracteristicas.map((caracteristica) => (
                          <li key={caracteristica} className="flex items-start">
                            <Check className={`h-5 w-5 text-vibrant-${plan.color} mr-2 flex-shrink-0`} />
                            <span className="text-sm text-muted-foreground">{caracteristica}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-8">
                        <Link href="/contact">
                          <Button
                            className={`w-full bg-vibrant-${plan.color} hover:bg-vibrant-${plan.color}/80 hover-glow`}
                          >
                            Solicitar Presupuesto
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground">
                  * Los precios pueden variar según los requisitos específicos del proyecto. Contacta para un
                  presupuesto personalizado.
                </p>
              </div>
            </div>

            {/* Servicios Web */}
            <div className="mt-24">
              <h2 className="text-2xl font-bold text-center text-gradient gradient-text-blue-green mb-8">
                Desarrollo Web
              </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {serviciosWeb.map((plan) => (
                  <div
                    key={plan.nombre}
                    className={`relative flex flex-col rounded-xl border border-white/10 bg-secondary/30 backdrop-blur-sm hover:border-vibrant-${plan.color}/50 transition-all duration-300 hover-glow overflow-hidden ${
                      plan.popular ? "ring-2 ring-vibrant-yellow" : ""
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute top-0 right-0">
                        <div className="bg-vibrant-yellow text-black text-xs font-bold px-3 py-1 transform rotate-45 translate-x-[30%] translate-y-[30%] shadow-lg">
                          POPULAR
                        </div>
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className={`text-2xl font-bold text-vibrant-${plan.color}`}>{plan.nombre}</h3>
                      <div className="mt-4 flex items-baseline">
                        <span className={`text-4xl font-bold text-vibrant-${plan.color}`}>{plan.precio}</span>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{plan.descripcion}</p>

                      <ul className="mt-6 space-y-3">
                        {plan.caracteristicas.map((caracteristica) => (
                          <li key={caracteristica} className="flex items-start">
                            <Check className={`h-5 w-5 text-vibrant-${plan.color} mr-2 flex-shrink-0`} />
                            <span className="text-sm text-muted-foreground">{caracteristica}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-8">
                        <Link href="/contact">
                          <Button
                            className={`w-full bg-vibrant-${plan.color} hover:bg-vibrant-${plan.color}/80 hover-glow`}
                          >
                            Solicitar Presupuesto
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground">
                  * Todos los servicios no incluyen ni dominio ni hosting del sitio web.
                </p>
              </div>
            </div>

            {/* Servicios App */}
            {/*
            <div className="mt-24">
              <h2 className="text-2xl font-bold text-center text-gradient gradient-text-red-yellow mb-8">
                Desarrollo de Aplicaciones
              </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {serviciosApp.map((plan) => (
                  <div
                    key={plan.nombre}
                    className={`relative flex flex-col rounded-xl border border-white/10 bg-secondary/30 backdrop-blur-sm hover:border-vibrant-${plan.color}/50 transition-all duration-300 hover-glow overflow-hidden ${
                      plan.popular ? "ring-2 ring-vibrant-yellow" : ""
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute top-0 right-0">
                        <div className="bg-vibrant-yellow text-black text-xs font-bold px-3 py-1 transform rotate-45 translate-x-[30%] translate-y-[30%] shadow-lg">
                          POPULAR
                        </div>
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className={`text-2xl font-bold text-vibrant-${plan.color}`}>{plan.nombre}</h3>
                      <div className="mt-4 flex items-baseline">
                        <span className={`text-4xl font-bold text-vibrant-${plan.color}`}>{plan.precio}</span>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{plan.descripcion}</p>

                      <ul className="mt-6 space-y-3">
                        {plan.caracteristicas.map((caracteristica) => (
                          <li key={caracteristica} className="flex items-start">
                            <Check className={`h-5 w-5 text-vibrant-${plan.color} mr-2 flex-shrink-0`} />
                            <span className="text-sm text-muted-foreground">{caracteristica}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-8">
                        <Link href="/contact">
                          <Button
                            className={`w-full bg-vibrant-${plan.color} hover:bg-vibrant-${plan.color}/80 hover-glow`}
                          >
                            Solicitar Presupuesto
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground">
                  * Los precios de aplicaciones pueden variar significativamente según la complejidad y funcionalidades
                  requeridas.
                </p>
              </div>
            </div>
            */}

            {/* Servicios Adicionales */}
            {/*}
            <div className="mt-24">
              <h2 className="text-2xl font-bold text-center text-gradient gradient-text-blue-green mb-8">
                Servicios Adicionales
              </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col space-y-2 p-6 rounded-xl bg-secondary/30 backdrop-blur-sm border border-white/5 hover:border-vibrant-red/30 transition-all duration-300 hover-glow">
                  <h3 className="text-xl font-bold text-vibrant-red">Mantenimiento</h3>
                  <p className="text-sm text-muted-foreground">
                    Servicio mensual de mantenimiento y actualizaciones para tu web o aplicación.
                  </p>
                  <p className="text-lg font-bold text-vibrant-red mt-2">Desde 50€/mes</p>
                </div>
                <div className="flex flex-col space-y-2 p-6 rounded-xl bg-secondary/30 backdrop-blur-sm border border-white/5 hover:border-vibrant-yellow/30 transition-all duration-300 hover-glow">
                  <h3 className="text-xl font-bold text-vibrant-yellow">SEO</h3>
                  <p className="text-sm text-muted-foreground">
                    Optimización para motores de búsqueda y posicionamiento web.
                  </p>
                  <p className="text-lg font-bold text-vibrant-yellow mt-2">Desde 300€</p>
                </div>
                <div className="flex flex-col space-y-2 p-6 rounded-xl bg-secondary/30 backdrop-blur-sm border border-white/5 hover:border-vibrant-blue/30 transition-all duration-300 hover-glow">
                  <h3 className="text-xl font-bold text-vibrant-blue">Diseño Gráfico</h3>
                  <p className="text-sm text-muted-foreground">
                    Diseño de logos, banners, y material gráfico para tu marca.
                  </p>
                  <p className="text-lg font-bold text-vibrant-blue mt-2">Desde 150€</p>
                </div>
                <div className="flex flex-col space-y-2 p-6 rounded-xl bg-secondary/30 backdrop-blur-sm border border-white/5 hover:border-vibrant-green/30 transition-all duration-300 hover-glow">
                  <h3 className="text-xl font-bold text-vibrant-green">Consultoría</h3>
                  <p className="text-sm text-muted-foreground">
                    Asesoramiento técnico y estratégico para tu proyecto digital.
                  </p>
                  <p className="text-lg font-bold text-vibrant-green mt-2">60€/hora</p>
                </div>
              </div>
            </div>
            */}

            {/* FAQ */}
            <div className="mt-24">
              <h2 className="text-2xl font-bold text-center text-gradient gradient-text-red-yellow mb-8">
                Preguntas Frecuentes
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2 p-6 rounded-xl bg-secondary/30 backdrop-blur-sm border border-white/5">
                  <h3 className="text-xl font-bold text-vibrant-red">¿Cuál es el proceso de trabajo?</h3>
                  <p className="text-muted-foreground">
                    El proceso comienza con una consulta inicial para entender tus necesidades, seguido de una propuesta
                    detallada. Una vez aprobada, se inicia el desarrollo con revisiones periódicas hasta la entrega
                    final.
                  </p>
                </div>
                <div className="space-y-2 p-6 rounded-xl bg-secondary/30 backdrop-blur-sm border border-white/5">
                  <h3 className="text-xl font-bold text-vibrant-yellow">¿Cuáles son las formas de pago?</h3>
                  <p className="text-muted-foreground">
                    Acepto transferencias en PayPal. Se requiere un el pago antes de el envio del código.
                  </p>
                </div>
                <div className="space-y-2 p-6 rounded-xl bg-secondary/30 backdrop-blur-sm border border-white/5">
                  <h3 className="text-xl font-bold text-vibrant-blue">¿Qué incluye el soporte post-entrega?</h3>
                  <p className="text-muted-foreground">
                    Todos los proyectos incluyen un período de soporte para resolver dudas y corregir posibles errores.
                    La duración varía según el plan contratado.
                  </p>
                </div>
                <div className="space-y-2 p-6 rounded-xl bg-secondary/30 backdrop-blur-sm border border-white/5">
                  <h3 className="text-xl font-bold text-vibrant-green">
                    ¿Puedo solicitar modificaciones después de la entrega?
                  </h3>
                  <p className="text-muted-foreground">
                    Sí, las modificaciones menores están incluidas durante el período de soporte. Para cambios mayores,
                    se evaluará un presupuesto adicional.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-24 text-center">
              <div className="p-8 rounded-xl bg-gradient-to-r from-vibrant-red/20 via-vibrant-blue/20 to-vibrant-green/20 backdrop-blur-sm border border-white/10">
                <h2 className="text-3xl font-bold text-gradient gradient-text-blue-green mb-4">
                  ¿Listo para empezar tu proyecto?
                </h2>
                <p className="max-w-[600px] mx-auto text-muted-foreground mb-6">
                  Contacta conmigo para discutir tus ideas y obtener un presupuesto personalizado. Juntos podemos hacer
                  realidad tu visión.
                </p>
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-vibrant-red to-vibrant-yellow hover:opacity-90 hover-glow">
                    Contactar Ahora
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-white/10 py-6 bg-background">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} <span className="text-gradient gradient-text-red-yellow">Hauch</span>. Todos
            los derechos reservados.
          </p>
          <div className="flex gap-4">
            <Link href="/about" className="text-sm text-muted-foreground hover:text-vibrant-red transition-colors">
              Sobre Mí
            </Link>
            <Link
              href="/projects"
              className="text-sm text-muted-foreground hover:text-vibrant-yellow transition-colors"
            >
              Proyectos
            </Link>
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-vibrant-blue transition-colors">
              Blog
            </Link>
            <Link href="/precios" className="text-sm text-muted-foreground hover:text-vibrant-green transition-colors">
              Precios
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-vibrant-red transition-colors">
              Contacto
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

