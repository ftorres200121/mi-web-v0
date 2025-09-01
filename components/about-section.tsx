import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Award } from "lucide-react"

const features = [
  {
    icon: CheckCircle,
    title: "Infraestructura en la Nube",
    description:
      "Llevamos la infraestructura tecnológica de nuestros clientes a la nube ofreciendo escalabilidad, disponibilidad y seguridad.",
  },
  {
    icon: Users,
    title: "Metodologías Especializadas",
    description:
      "Utilizamos metodologías especializadas en la prestación de servicios IT, desde la definición inicial hasta la implementación.",
  },
  {
    icon: Award,
    title: "Calidad Asegurada",
    description:
      "La calidad de nuestros servicios está asegurada por un equipo de profesionales altamente calificados.",
  },
]

const stats = [
  { number: "15+", label: "Años de Experiencia" },
  { number: "500+", label: "Clientes Satisfechos" },
  { number: "24/7", label: "Soporte Técnico" },
  { number: "99.9%", label: "Disponibilidad" },
]

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            ¿Por Qué Elegir Megacore?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Somos una empresa ecuatoriana especializada en entregar soluciones tecnológicas de punta con el respaldo de
            las mejores marcas del mercado.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-0 bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground text-pretty">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
