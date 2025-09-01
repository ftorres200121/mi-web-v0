import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">M</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-accent">MEGACORE</h3>
                <p className="text-xs text-gray-400">Soluciones Integrales</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empresa ecuatoriana especializada en venta, consultoría e integración de servicios informáticos de punta.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  Hardware y Conectividad
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  Licenciamiento Software
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  Seguridad Informática
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  Outsourcing Impresión
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  Soporte Help Desk
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Productos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  Microsoft Azure
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  HP ProBook
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  Aruba Networking
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  Plotters HP
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  Servidores
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Contacto</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">José Vivanco N44-198 y Av. El Inca, Quito Ecuador</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-gray-300">+(593) 2 601 9628</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-gray-300">ventas@megacore.com.ec</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">© 2024 Megacore Cia Ltda. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
