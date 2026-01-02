import { LegalPageWrapper } from '../../components/legal'

export function Terms() {
  return (
    <LegalPageWrapper
      title="Terminos y Condiciones de Uso"
      description="Condiciones que rigen el uso de la plataforma Horix"
    >
      <div className="bg-horix-darker rounded-2xl border border-horix-gray-dark/30 overflow-hidden">
        <div className="px-6 py-8 space-y-8">

          <section>
            <h2 className="text-xl font-semibold text-horix-cream mb-4">
              1. ACEPTACION DE LOS TERMINOS
            </h2>
            <p className="text-horix-gray leading-relaxed mb-4">
              Al acceder y utilizar la plataforma Horix (en adelante, "el Servicio"), aceptas estar sujeto a estos
              Terminos y Condiciones de Uso, todas las leyes y regulaciones aplicables, y aceptas que eres responsable
              del cumplimiento de todas las leyes locales aplicables.
            </p>
            <p className="text-horix-gray leading-relaxed">
              Si no estas de acuerdo con alguno de estos terminos, no debes utilizar este servicio. El uso continuado
              del servicio despues de la publicacion de cambios en estos terminos constituira tu aceptacion de dichos cambios.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-horix-cream mb-4">
              2. DESCRIPCION DEL SERVICIO
            </h2>
            <p className="text-horix-gray leading-relaxed mb-4">
              Horix es una plataforma SaaS (Software as a Service) de control horario disenada para empresas espanolas
              que ofrece:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-horix-gray">
              <li>Registro de fichajes de entrada y salida de empleados</li>
              <li>Control de pausas y descansos</li>
              <li>Gestion de vacaciones y ausencias</li>
              <li>Cumplimiento del RDL 8/2019 de control horario</li>
              <li>API para acceso de la Inspeccion de Trabajo</li>
              <li>Generacion de informes y exportacion de datos</li>
              <li>Registro inmutable con sello temporal</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-horix-cream mb-4">
              3. REGISTRO Y CUENTA DE USUARIO
            </h2>

            <div className="space-y-4 text-horix-gray">
              <p>
                <strong className="text-horix-cream">3.1. Requisitos de Registro:</strong> Para utilizar
                el servicio, debes registrarte proporcionando informacion veraz, precisa, actual y completa. Debes ser
                mayor de 18 anos o tener capacidad legal para contratar.
              </p>

              <p>
                <strong className="text-horix-cream">3.2. Seguridad de la Cuenta:</strong> Eres responsable
                de mantener la confidencialidad de tu cuenta y contrasena, y de restringir el acceso a tu ordenador.
                Aceptas ser responsable de todas las actividades que ocurran bajo tu cuenta.
              </p>

              <p>
                <strong className="text-horix-cream">3.3. Notificacion de Acceso No Autorizado:</strong> Debes
                notificar inmediatamente a Horix cualquier uso no autorizado de tu cuenta o cualquier otra violacion de
                seguridad.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-horix-cream mb-4">
              4. USO ACEPTABLE DEL SERVICIO
            </h2>

            <p className="text-horix-gray mb-4">
              Te comprometes a utilizar el servicio unicamente para fines legales y de acuerdo con estos terminos.
              Especificamente, aceptas NO:
            </p>

            <ul className="list-disc ml-6 space-y-2 text-horix-gray">
              <li>Utilizar el servicio para cualquier proposito ilegal o no autorizado</li>
              <li>Violar cualquier ley local, estatal, nacional o internacional</li>
              <li>Transmitir virus, malware o cualquier codigo de naturaleza destructiva</li>
              <li>Intentar obtener acceso no autorizado a otros sistemas o redes</li>
              <li>Realizar ingenieria inversa, descompilar o desensamblar el software</li>
              <li>Compartir tu cuenta con terceros sin autorizacion</li>
              <li>Falsificar registros de fichaje o manipular datos de control horario</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-horix-cream mb-4">
              5. PLANES DE SUSCRIPCION Y PAGOS
            </h2>

            <div className="space-y-4 text-horix-gray">
              <p>
                <strong className="text-horix-cream">5.1. Periodo de Prueba:</strong> Ofrecemos un periodo
                de prueba gratuito de 14 dias con acceso completo a las funcionalidades. No se requiere tarjeta de credito durante el periodo de prueba.
              </p>

              <p>
                <strong className="text-horix-cream">5.2. Planes de Pago:</strong> Al finalizar el periodo
                de prueba, deberas suscribirte a uno de nuestros planes de pago (Starter, Business o Enterprise) para
                continuar utilizando el servicio.
              </p>

              <p>
                <strong className="text-horix-cream">5.3. Facturacion:</strong> La facturacion es recurrente
                (mensual o anual) y se carga automaticamente al metodo de pago registrado. Los precios estan sujetos a
                cambios con 30 dias de notificacion previa.
              </p>

              <p>
                <strong className="text-horix-cream">5.4. Cancelacion:</strong> Puedes cancelar tu suscripcion
                en cualquier momento. La cancelacion sera efectiva al final del periodo de facturacion actual.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-horix-cream mb-4">
              6. PRIVACIDAD Y PROTECCION DE DATOS
            </h2>

            <p className="text-horix-gray mb-4">
              Tu privacidad es fundamental para nosotros. El uso de nuestro servicio esta tambien gobernado por nuestra{" "}
              <a href="/legal/privacy" className="text-horix-gold hover:underline">
                Politica de Privacidad
              </a>, que describe como recopilamos, usamos y protegemos tu informacion personal de acuerdo con el RGPD
              y la LOPDGDD.
            </p>

            <p className="text-horix-gray">
              Al utilizar el servicio, consientes el procesamiento de tu informacion como se establece en la Politica
              de Privacidad y nos garantizas que todos los datos proporcionados son precisos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-horix-cream mb-4">
              7. DISPONIBILIDAD DEL SERVICIO
            </h2>

            <div className="space-y-4 text-horix-gray">
              <p>
                <strong className="text-horix-cream">7.1. Nivel de Servicio:</strong> Nos esforzamos por
                mantener una disponibilidad del 99.9% del servicio, excluyendo mantenimientos programados.
              </p>

              <p>
                <strong className="text-horix-cream">7.2. Mantenimiento:</strong> Podemos realizar
                mantenimiento programado con notificacion previa de al menos 24 horas, preferiblemente fuera del
                horario comercial.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-horix-cream mb-4">
              8. LEY APLICABLE Y JURISDICCION
            </h2>

            <p className="text-horix-gray leading-relaxed mb-4">
              Estos Terminos se regiran e interpretaran de acuerdo con las leyes de Espana, sin tener en cuenta sus
              disposiciones sobre conflictos de leyes.
            </p>

            <p className="text-horix-gray leading-relaxed">
              Para la resolucion de cualquier controversia, las partes se someten a los Juzgados y Tribunales de
              Espana, con renuncia expresa a cualquier otro fuero que pudiera corresponderles.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-horix-cream mb-4">
              9. INFORMACION DE CONTACTO
            </h2>

            <div className="bg-horix-dark rounded-lg p-6">
              <p className="text-horix-gray mb-4">
                Si tienes alguna pregunta sobre estos Terminos y Condiciones, contactanos:
              </p>

              <div className="space-y-2 text-horix-gray">
                <p><strong className="text-horix-cream">Empresa:</strong> ELEVATE STUDIO S.L.</p>
                <p><strong className="text-horix-cream">CIF:</strong> B-75532226</p>
                <p><strong className="text-horix-cream">Direccion:</strong> C/ MARACENA No3, 18101-BELICENA (GRANADA)</p>
                <p><strong className="text-horix-cream">Telefono:</strong> +34 684 053 267</p>
                <p><strong className="text-horix-cream">Email:</strong> info@elevate.com.es</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-horix-cream mb-4">
              DOCUMENTOS RELACIONADOS
            </h2>

            <ul className="list-disc ml-6 space-y-2">
              <li><a href="/legal/privacy" className="text-horix-gold hover:underline">Politica de Privacidad</a></li>
              <li><a href="/legal/cookies" className="text-horix-gold hover:underline">Politica de Cookies</a></li>
              <li><a href="/legal/notice" className="text-horix-gold hover:underline">Aviso Legal</a></li>
            </ul>
          </section>

          <div className="mt-12 pt-8 border-t border-horix-gray-dark">
            <p className="text-sm text-horix-gray-dark">
              Ultima actualizacion: Enero 2025
            </p>
          </div>
        </div>
      </div>
    </LegalPageWrapper>
  )
}
