import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Cloud, Zap } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-balance">
                Soluciones Tecnológicas
                <span className="text-accent block">Integrales</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed text-pretty">
                Especializados en la venta, consultoría e integración de servicios informáticos, entregando soluciones
                de punta para empresas que buscan innovación y crecimiento.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Conocer Servicios
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
              >
                Solicitar Cotización
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Cloud className="h-6 w-6 text-accent" />
                </div>
                <p className="text-sm text-gray-300">Cloud Solutions</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <p className="text-sm text-gray-300">Seguridad IT</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <p className="text-sm text-gray-300">Soporte 24/7</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/images/datacenter.jpeg"
                alt="Centro de datos moderno con tecnología avanzada"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
