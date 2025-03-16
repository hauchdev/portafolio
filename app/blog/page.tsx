import Link from "next/link"
import { Calendar, Clock } from "lucide-react"

export default function BlogPage() {
  const posts = [
    {
      id: "neocode-opened",
      title: "Apertura de NeoCode",
      excerpt:
        "Tras desarrollar mi academia de programación llamada NeoCode, he decidido abrir las puertas. Esta academia está enfocada en enseñar programación desde cero a personas sin experiencia previa. Ofrecemos cursos de desarrollo web, desarrollo de aplicaciones móviles y programación en general. Nuestro objetivo es formar a la próxima generación de desarrolladores con habilidades prácticas y conocimientos sólidos.",
      date: "4 de marzo, 2025",
      readTime: "5 min de lectura",
      category: "Desarrollo Web",
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gradient gradient-text-red-yellow">
                  Mi Blog
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Pensamientos, tutoriales y conocimientos sobre desarrollo web, desarrollo de videojuegos y
                  programación en Java
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-secondary/30 backdrop-blur-sm hover:border-vibrant-blue/50 transition-all duration-300 hover-glow"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-vibrant-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gradient gradient-text-blue-green mb-2">{post.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
                  </div>
                </div>
              ))}
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

