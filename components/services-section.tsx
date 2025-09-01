import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Server, Shield, Headphones, Printer, Database, Wifi } from "lucide-react"

const services = [
  {
    icon: Server,
    title: "Hardware y Conectividad",
    description:
      "Servidores, equipos de comunicaciones, switches, routers, controladores WiFi, equipos desktop/laptops, teléfonos celulares y centrales IP.",
    features: [
      "Servidores de torre y storage",
      "Switches y Routers",
      "Equipos Desktop/Laptops",
      "Cableado estructurado",
    ],
  },
  {
    icon: Database,
    title: "Licenciamiento de Software",
    description:
      "Licenciamiento Microsoft, Autodesk, Adobe, bases de datos SQL y Oracle, licenciamiento Cloud Microsoft Azure y Office 365.",
    features: ["Microsoft Azure", "Office 365", "Bases de datos SQL/Oracle", "Software especializado"],
  },
  {
    icon: Shield,
    title: "Seguridad Informática",
    description:
      "Firewalls, antivirus de marcas reconocidas como Eset, Kaspersky, McAfee y protección de información con Kriptos.",
    features: ["Firewalls empresariales", "Antivirus corporativo", "Protección de datos", "Auditorías de seguridad"],
  },
  {
    icon: Printer,
    title: "Outsourcing de Impresión",
    description:
      "Servicio completo de outsourcing de impresión, plotters y suministros originales para todas las marcas y modelos.",
    features: ["Outsourcing completo", "Plotters profesionales", "Suministros originales", "Mantenimiento incluido"],
  },
  {
    icon: Headphones,
    title: "Soporte Help Desk",
    description:
      "Técnicos certificados para brindar soporte help desk, mantenimiento preventivo y correctivo de infraestructura IT.",
    features: ["Soporte 24/7", "Técnicos certificados", "Mantenimiento preventivo", "Instalación y configuración"],
  },
  {
    icon: Wifi,
    title: "Infraestructura Especializada",
    description: "Data center, cableado estructurado, impresión de gran formato, video walls y networking empresarial.",
    features: ["Data Center", "Video Walls", "Networking", "Impresión gran formato"],
  },
]

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Nuestros Servicios</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ofrecemos soluciones tecnológicas integrales con metodologías especializadas y un equipo de profesionales
            altamente calificados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
