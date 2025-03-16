import Link from "next/link"
import { ArrowRight, Github, Mail, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
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
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gradient gradient-text-red-yellow animated-text">
                    Sobre Mí
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Soy <span className="text-gradient gradient-text-red-yellow animated-text">Hauch</span>, un desarrollador apasionado con experiencia en
                    desarrollo web, desarrollo de videojuegos y programación en Java.
                  </p>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Con más de 5 años de experiencia en la industria tecnológica, he trabajado en una variedad de
                    proyectos, desde pequeños sitios web hasta aplicaciones empresariales a gran escala.
                  </p>
                  <p>
                    Me especializo en crear aplicaciones web responsivas, desarrollar videojuegos atractivos y construir
                    sistemas robustos basados en Java. Mi objetivo es crear software que no solo cumpla con los
                    requisitos técnicos, sino que también proporcione una experiencia de usuario excepcional.
                  </p>
                  <p>
                    Cuando no estoy programando, puedes encontrarme explorando nuevas tecnologías, contribuyendo a
                    proyectos de código abierto o jugando a videojuegos.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/contact">
                    <Button className="inline-flex items-center justify-center bg-vibrant-blue hover:bg-vibrant-blue/80 hover-glow">
                      Contáctame
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/projects">
                    <Button variant="outline" className="gradient-border hover-glow animated-button">
                      <span className="text-gradient gradient-text-red-yellow animated-text">Ver Mi Trabajo</span>
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative overflow-hidden rounded-lg border border-white/10 glow animate-glow">
                  <img
                    src="https://yt3.googleusercontent.com/KuX60s3lwY1jHtG2bJPoKloO1ZYMFiW5SONA85MOBuDrdwQr1vFjQ_EJe_xgUQUsn-D0yvogpg=s160-c-k-c0x00ffffff-no-rj"
                    alt="Hauch"
                    className="object-cover"
                    width={600}
                    height={600}
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-vibrant-blue/30 via-transparent to-vibrant-green/30 mix-blend-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gradient gradient-text-red-yellow">
                  Mi Trayectoria
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  El camino que me llevó a donde estoy hoy
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              {/*<div className="flex flex-col space-y-4 p-6 rounded-xl bg-secondary/50 backdrop-blur-sm border border-white/5 hover:border-vibrant-red/30 transition-all duration-300 hover-glow">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-vibrant-red/20">
                  <span className="text-xl font-bold text-vibrant-red">1</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-vibrant-red">Educación</h3>
                  <p className="text-muted-foreground">
                    Licenciatura en Ciencias de la Computación con enfoque en ingeniería de software y desarrollo de
                    videojuegos.
                  </p>
                </div>
              </div>*/}
              <div className="flex flex-col space-y-4 p-6 rounded-xl bg-secondary/50 backdrop-blur-sm border border-white/5 hover:border-vibrant-yellow/30 transition-all duration-300 hover-glow">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-vibrant-yellow/20">
                  <span className="text-xl font-bold text-vibrant-yellow">1</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-vibrant-yellow">Inicios Profesionales</h3>
                  <p className="text-muted-foreground">
                    Comencé como desarrollador junior en una startup tecnológica, trabajando en aplicaciones web y
                    adquiriendo valiosa experiencia.
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-4 p-6 rounded-xl bg-secondary/50 backdrop-blur-sm border border-white/5 hover:border-vibrant-blue/30 transition-all duration-300 hover-glow">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-vibrant-blue/20">
                  <span className="text-xl font-bold text-vibrant-blue">2</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-vibrant-blue">Actualidad</h3>
                  <p className="text-muted-foreground">
                    Ahora trabajo como desarrollador senior, liderando proyectos y mentorizando a desarrolladores junior
                    mientras continúo ampliando mis habilidades.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background pointer-events-none"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gradient gradient-text-blue-green">
                  Habilidades Técnicas
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Las tecnologías y herramientas con las que trabajo
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col space-y-2 p-6 rounded-xl bg-secondary/30 backdrop-blur-sm border border-white/5 hover:border-vibrant-red/30 transition-all duration-300 hover-glow">
                <h3 className="text-xl font-bold text-vibrant-red">Frontend</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>HTML, CSS, JavaScript</li>
                  <li>React, Next.js</li>
                  <li>Angular, Vue.js</li>
                  <li>Tailwind CSS, Bootstrap</li>
                  <li>TypeScript</li>
                </ul>
              </div>
              <div className="flex flex-col space-y-2 p-6 rounded-xl bg-secondary/30 backdrop-blur-sm border border-white/5 hover:border-vibrant-yellow/30 transition-all duration-300 hover-glow">
                <h3 className="text-xl font-bold text-vibrant-yellow">Backend</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>Node.js, Express</li>
                  <li>Java, Spring Boot</li>
                  <li>Python, Django</li>
                  <li>APIs RESTful</li>
                  <li>GraphQL</li>
                </ul>
              </div>
              <div className="flex flex-col space-y-2 p-6 rounded-xl bg-secondary/30 backdrop-blur-sm border border-white/5 hover:border-vibrant-blue/30 transition-all duration-300 hover-glow">
                <h3 className="text-xl font-bold text-vibrant-blue">Desarrollo de Videojuegos</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>Unity (C#)</li>
                  <li>Unreal Engine (C++)</li>
                  <li>Godot</li>
                  <li>Principios de Diseño de Juegos</li>
                  <li>Fundamentos de Modelado 3D</li>
                </ul>
              </div>
              <div className="flex flex-col space-y-2 p-6 rounded-xl bg-secondary/30 backdrop-blur-sm border border-white/5 hover:border-vibrant-green/30 transition-all duration-300 hover-glow">
                <h3 className="text-xl font-bold text-vibrant-green">Base de Datos</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>MySQL, PostgreSQL</li>
                  <li>MongoDB</li>
                  <li>Firebase</li>
                  <li>Redis</li>
                  <li>Diseño de Bases de Datos</li>
                </ul>
              </div>
              <div className="flex flex-col space-y-2 p-6 rounded-xl bg-secondary/30 backdrop-blur-sm border border-white/5 hover:border-vibrant-red/30 transition-all duration-300 hover-glow">
                <h3 className="text-xl font-bold text-vibrant-red">DevOps</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>Git, GitHub</li>
                  <li>Docker, Kubernetes</li>
                  <li>Pipelines CI/CD</li>
                  <li>AWS, Azure, GCP</li>
                  <li>Administración Linux</li>
                </ul>
              </div>
              <div className="flex flex-col space-y-2 p-6 rounded-xl bg-secondary/30 backdrop-blur-sm border border-white/5 hover:border-vibrant-yellow/30 transition-all duration-300 hover-glow">
                <h3 className="text-xl font-bold text-vibrant-yellow">Otros</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>Metodologías Ágiles</li>
                  <li>Gestión de Proyectos</li>
                  <li>Fundamentos de Diseño UI/UX</li>
                  <li>Testing (Unitario, Integración)</li>
                  <li>Optimización de Rendimiento</li>
                </ul>
              </div>
            </div>
          </div>
          <section className="w-full py-12 md:py-24 lg:py-32 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background pointer-events-none"></div>
            <div className="container px-4 md:px-6 relative z-10">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gradient gradient-text-blue-green">
                    Experiencia en Minecraft
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Mi trayectoria como configurador y programador de servidores Minecraft
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-2">
                <div className="flex flex-col space-y-2 p-6 rounded-xl bg-secondary/30 backdrop-blur-sm border border-white/5 hover:border-vibrant-yellow/30 transition-all duration-300 hover-glow">
                  <h3 className="text-xl font-bold text-vibrant-yellow">Configuración de Servidores</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>Optimización de rendimiento</li>
                    <li>Configuración de permisos y grupos</li>
                    <li>Instalación y configuración de plugins</li>
                    <li>Solución de problemas y compatibilidad</li>
                    <li>Seguridad y respaldos automáticos</li>
                  </ul>
                </div>
                <div className="flex flex-col space-y-2 p-6 rounded-xl bg-secondary/30 backdrop-blur-sm border border-white/5 hover:border-vibrant-blue/30 transition-all duration-300 hover-glow">
                  <h3 className="text-xl font-bold text-vibrant-blue">Proyectos Destacados</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>OceanMC Network</li>
                    <li>Modalidades de supervivencia mejorada</li>
                    <li>Sistemas de rangos y progresión</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gradient gradient-text-red-yellow">
                  Conecta Conmigo
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hablemos sobre tu proyecto o simplemente saluda
                </p>
              </div>
            </div>
            <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-6 py-12 md:flex-row">
              <Link href="/contact">
                <Button className="w-full md:w-auto flex items-center gap-2 bg-gradient-to-r from-vibrant-red to-vibrant-yellow hover:opacity-90 hover-glow">
                  <Mail className="h-5 w-5" />
                  Contáctame
                </Button>
              </Link>
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

