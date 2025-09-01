"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-2 text-sm text-muted-foreground border-b">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+(593) 2 601 9628</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>ventas@megacore.com.ec</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>José Vivanco N44-198 y Av. El Inca, Quito Ecuador</span>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                <span className="text-primary font-bold text-sm">M</span>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">MEGACORE</h1>
              <p className="text-xs text-muted-foreground">Soluciones Integrales</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
              Inicio
            </a>
            <a href="#servicios" className="text-foreground hover:text-primary transition-colors">
              Servicios
            </a>
            <a href="#productos" className="text-foreground hover:text-primary transition-colors">
              Productos
            </a>
            <a href="#nosotros" className="text-foreground hover:text-primary transition-colors">
              Nosotros
            </a>
            <a href="#contacto" className="text-foreground hover:text-primary transition-colors">
              Contacto
            </a>
          </nav>

          <div className="hidden md:block">
            <Button className="bg-primary hover:bg-primary/90">Solicitar Cotización</Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
                Inicio
              </a>
              <a href="#servicios" className="text-foreground hover:text-primary transition-colors">
                Servicios
              </a>
              <a href="#productos" className="text-foreground hover:text-primary transition-colors">
                Productos
              </a>
              <a href="#nosotros" className="text-foreground hover:text-primary transition-colors">
                Nosotros
              </a>
              <a href="#contacto" className="text-foreground hover:text-primary transition-colors">
                Contacto
              </a>
              <Button className="bg-primary hover:bg-primary/90 w-full">Solicitar Cotización</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
