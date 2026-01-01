import { Container } from '../common'
import { Logo } from '../common/Logo'

const footerLinks = {
  producto: [
    { label: 'Características', href: '#caracteristicas' },
    { label: 'Precios', href: '#precios' },
    { label: 'FAQ', href: '#faq' },
  ],
  legal: [
    { label: 'Privacidad', href: '#' },
    { label: 'Términos de uso', href: '#' },
    { label: 'Cookies', href: '#' },
  ],
  contacto: [
    { label: 'info@erbet.com.es', href: 'mailto:info@erbet.com.es' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-horix-darker border-t border-horix-gray-dark/20 py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Logo className="h-8 mb-4" />
            <p className="text-horix-gray text-sm leading-relaxed">
              Control horario legal para empresas españolas. Cumple RDL 8/2019.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="text-xs text-horix-gray-dark">Made in</span>
              <span className="text-sm">🇪🇸</span>
            </div>
          </div>

          <div>
            <h4 className="text-horix-cream font-semibold mb-4">Producto</h4>
            <ul className="space-y-3">
              {footerLinks.producto.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-horix-gray hover:text-horix-gold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-horix-cream font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-horix-gray hover:text-horix-gold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-horix-cream font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              {footerLinks.contacto.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-horix-gray hover:text-horix-gold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-horix-gray-dark/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-horix-gray-dark text-sm">
            © {new Date().getFullYear()} Horix. Todos los derechos reservados.
          </p>
          <p className="text-horix-gray-dark text-xs">
            Cumple RDL 8/2019 · RGPD · LOPDGDD
          </p>
        </div>
      </Container>
    </footer>
  )
}
