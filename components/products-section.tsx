import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const products = [
  {
    image: "/images/megacore-azure.png",
    title: "Microsoft Azure",
    description:
      "Soluciones integrales en la nube con Microsoft Azure para escalabilidad, disponibilidad y seguridad empresarial.",
    category: "Cloud Solutions",
  },
  {
    image: "/images/aruba-switch.png",
    title: "HP Aruba 2930",
    description:
      "Conectividad inteligente con alto rendimiento, seguridad avanzada y gestión simplificada para redes empresariales.",
    category: "Networking",
  },
  {
    image: "/images/hp-plotter.png",
    title: "Plóter HP",
    description: "Precisión y estilo en impresión de gran formato para proyectos profesionales y empresariales.",
    category: "Impresión",
  },
  {
    image: "/images/hp-probook-g11.png",
    title: "HP ProBook 450 G11",
    description: "Rendimiento y seguridad para profesionales que necesitan potencia, movilidad y confiabilidad.",
    category: "Equipos",
  },
  {
    image: "/images/hp-probook-g10.png",
    title: "HP ProBook 450 G10",
    description:
      "Rendimiento empresarial sin límites, ideal para profesionales que buscan productividad sin compromisos.",
    category: "Equipos",
  },
]

export default function ProductsSection() {
  return (
    <section id="productos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Productos Destacados</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Trabajamos con las mejores marcas tecnológicas para ofrecer soluciones de calidad empresarial que impulsen
            el crecimiento de su negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {product.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-3">{product.title}</h3>
                <p className="text-muted-foreground mb-4 text-pretty">{product.description}</p>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                >
                  Más Información
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Ver Todos los Productos
          </Button>
        </div>
      </div>
    </section>
  )
}
