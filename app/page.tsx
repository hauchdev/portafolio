import Link from "next/link"
import { ArrowRight, Code, Github, Gamepad2, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
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
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/80 pointer-events-none"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Hola, soy <span className="text-gradient gradient-text-red-yellow">Hauch</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    <span className="text-vibrant-red">Desarrollador Web</span>,
                    <span className="text-vibrant-yellow"> Desarrollador de Videojuegos</span> y
                    <span className="text-vibrant-blue"> Entusiasta de Java</span>
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/projects">
                    <Button className="inline-flex items-center justify-center bg-vibrant-red hover:bg-vibrant-red/80 hover-glow">
                      Ver Mi Trabajo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" className="gradient-border hover-glow">
                      Contáctame
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[450px] lg:w-[450px] rounded-full bg-gradient-radial from-vibrant-red/20 via-vibrant-yellow/10 to-transparent flex items-center justify-center animate-float">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative h-[250px] w-[250px] sm:h-[350px] sm:w-[350px] lg:h-[400px] lg:w-[400px] rounded-full bg-background/80 flex items-center justify-center overflow-hidden backdrop-blur-sm border border-white/10 animate-glow">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex items-center justify-center h-32 w-32 rounded-lg bg-vibrant-red/20 backdrop-blur-sm hover:bg-vibrant-red/30 transition-all duration-300 hover-glow">
                            <Code className="h-12 w-12 text-vibrant-red" />
                          </div>
                          <div className="flex items-center justify-center h-32 w-32 rounded-lg bg-vibrant-yellow/20 backdrop-blur-sm hover:bg-vibrant-yellow/30 transition-all duration-300 hover-glow">
                            <Gamepad2 className="h-12 w-12 text-vibrant-yellow" />
                          </div>
                          <div className="flex items-center justify-center h-32 w-32 rounded-lg bg-vibrant-blue/20 backdrop-blur-sm hover:bg-vibrant-blue/30 transition-all duration-300 hover-glow">
                            <Coffee className="h-12 w-12 text-vibrant-blue" />
                          </div>
                          <div className="flex items-center justify-center h-32 w-32 rounded-lg bg-vibrant-green/20 backdrop-blur-sm hover:bg-vibrant-green/30 transition-all duration-300 hover-glow">
                            <Github className="h-12 w-12 text-vibrant-green" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gradient gradient-text-blue-green">
                  Mis Habilidades
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Me especializo en desarrollo web, desarrollo de videojuegos y programación en Java
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 p-6 rounded-xl bg-secondary/50 backdrop-blur-sm border border-white/5 hover:border-vibrant-red/30 transition-all duration-300 hover-glow">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-vibrant-red/20">
                  <Code className="h-6 w-6 text-vibrant-red" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-vibrant-red">Desarrollo Web</h3>
                  <p className="text-muted-foreground">HTML, CSS, JavaScript, React, Next.js, Node.js y más</p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 p-6 rounded-xl bg-secondary/50 backdrop-blur-sm border border-white/5 hover:border-vibrant-yellow/30 transition-all duration-300 hover-glow">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-vibrant-yellow/20">
                  <Gamepad2 className="h-6 w-6 text-vibrant-yellow" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-vibrant-yellow">Desarrollo de Videojuegos</h3>
                  <p className="text-muted-foreground">Unity, Godot y principios de diseño de juegos</p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 p-6 rounded-xl bg-secondary/50 backdrop-blur-sm border border-white/5 hover:border-vibrant-blue/30 transition-all duration-300 hover-glow">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-vibrant-blue/20">
                  <Coffee className="h-6 w-6 text-vibrant-blue" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-vibrant-blue">Desarrollo Java</h3>
                  <p className="text-muted-foreground">
                    Java SE, Spring Boot, desarrollo Android y aplicaciones empresariales
                  </p>
                </div>
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

