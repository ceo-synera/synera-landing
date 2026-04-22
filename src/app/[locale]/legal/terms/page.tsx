import { notFound } from "next/navigation";
import LegalLayout, {
  P, UL, LI, B,
  type LegalSection,
} from "@/components/layout/LegalLayout";

// ── Content ───────────────────────────────────────────────────────────────────

function getContent(locale: string): {
  title: string;
  lastUpdated: string;
  tocLabel: string;
  sections: LegalSection[];
} {
  if (locale === "en") {
    return {
      title: "Terms and Conditions",
      lastUpdated: "Last updated: January 2025",
      tocLabel: "Contents",
      sections: [
        {
          id: "acceptance",
          heading: "1. Acceptance of Terms",
          content: (
            <P>
              By contracting Synera Technologies services or using our website
              syneratechnologies.com, you accept these terms and conditions in
              full. If you do not agree, do not use our services.
            </P>
          ),
        },
        {
          id: "services",
          heading: "2. Description of Services",
          content: (
            <>
              <P>Synera Technologies offers:</P>
              <UL>
                <LI>Development and implementation of artificial intelligence bots</LI>
                <LI>Business process automations</LI>
                <LI>Artificial intelligence strategy consulting</LI>
                <LI>Support and maintenance of implemented solutions</LI>
              </UL>
            </>
          ),
        },
        {
          id: "hiring",
          heading: "3. Contracting Process",
          content: (
            <UL>
              <LI>Services are contracted through written agreement or email confirmation</LI>
              <LI>Custom projects require a formal proposal accepted by the client</LI>
              <LI>Work begins subject to payment of the setup fee or first installment as applicable</LI>
            </UL>
          ),
        },
        {
          id: "payments",
          heading: "4. Pricing and Payments",
          content: (
            <UL>
              <LI>All prices are expressed in US dollars (USD)</LI>
              <LI>Payments are made through PayPal</LI>
              <LI>Subscriptions are charged monthly on the service start date</LI>
              <LI>Setup payments are non-refundable once work has started</LI>
            </UL>
          ),
        },
        {
          id: "ip",
          heading: "5. Intellectual Property",
          content: (
            <UL>
              <LI>The code and solutions developed are the client&apos;s property once full payment is made</LI>
              <LI>Synera Technologies retains the right to use internally developed technologies and methodologies</LI>
              <LI>The client is responsible for the content processed by the implemented bots</LI>
            </UL>
          ),
        },
        {
          id: "confidentiality",
          heading: "6. Confidentiality",
          content: (
            <P>
              We commit to keeping confidential all client business information
              shared during the provision of services.
            </P>
          ),
        },
        {
          id: "liability",
          heading: "7. Limitation of Liability",
          content: (
            <UL>
              <LI>Synera Technologies is not liable for indirect or consequential losses</LI>
              <LI>Our maximum liability is limited to the amount paid for the service in question</LI>
              <LI>We do not guarantee specific business results, though we commit to the technical quality of solutions</LI>
            </UL>
          ),
        },
        {
          id: "modifications",
          heading: "8. Service Modifications",
          content: (
            <UL>
              <LI>We reserve the right to modify or discontinue services with 30 days&apos; notice</LI>
              <LI>Price changes apply to new contracts and are notified 30 days in advance</LI>
            </UL>
          ),
        },
        {
          id: "cancellation",
          heading: "9. Cancellation",
          content: (
            <UL>
              <LI>The client may cancel a subscription at any time</LI>
              <LI>Cancellation applies to the next billing cycle</LI>
              <LI>No refunds are made for partial periods</LI>
            </UL>
          ),
        },
        {
          id: "law",
          heading: "10. Applicable Law",
          content: (
            <P>
              These terms are governed by the laws of the Oriental Republic of
              Uruguay.
            </P>
          ),
        },
        {
          id: "contact",
          heading: "11. Contact",
          content: (
            <>
              <P>For questions about these terms:</P>
              <UL>
                <LI>
                  Email:{" "}
                  <a href="mailto:legal@syneratechnologies.com" className="text-accent hover:underline">
                    legal@syneratechnologies.com
                  </a>
                </LI>
                <LI>Telegram: @syneratech_bot</LI>
              </UL>
            </>
          ),
        },
      ],
    };
  }

  // Default: ES
  return {
    title: "Términos y Condiciones",
    lastUpdated: "Última actualización: Enero 2025",
    tocLabel: "Contenido",
    sections: [
      {
        id: "aceptacion",
        heading: "1. Aceptación de los términos",
        content: (
          <P>
            Al contratar los servicios de Synera Technologies o usar nuestro
            sitio web syneratechnologies.com, aceptás estos términos y
            condiciones en su totalidad. Si no estás de acuerdo, no uses
            nuestros servicios.
          </P>
        ),
      },
      {
        id: "servicios",
        heading: "2. Descripción de los servicios",
        content: (
          <>
            <P>Synera Technologies ofrece:</P>
            <UL>
              <LI>Desarrollo e implementación de bots de inteligencia artificial</LI>
              <LI>Automatizaciones de procesos empresariales</LI>
              <LI>Consultoría en estrategia de inteligencia artificial</LI>
              <LI>Soporte y mantenimiento de soluciones implementadas</LI>
            </UL>
          </>
        ),
      },
      {
        id: "contratacion",
        heading: "3. Proceso de contratación",
        content: (
          <UL>
            <LI>Los servicios se contratan mediante acuerdo escrito o confirmación por email</LI>
            <LI>Los proyectos custom requieren propuesta formal aceptada por el cliente</LI>
            <LI>El inicio del trabajo está sujeto al pago del setup o primera cuota según corresponda</LI>
          </UL>
        ),
      },
      {
        id: "pagos",
        heading: "4. Precios y pagos",
        content: (
          <UL>
            <LI>Todos los precios están expresados en dólares estadounidenses (USD)</LI>
            <LI>Los pagos se realizan a través de PayPal</LI>
            <LI>Las suscripciones se cobran mensualmente en la fecha de inicio del servicio</LI>
            <LI>Los pagos de setup son no reembolsables una vez iniciado el trabajo</LI>
          </UL>
        ),
      },
      {
        id: "propiedad-intelectual",
        heading: "5. Propiedad intelectual",
        content: (
          <UL>
            <LI>El código y las soluciones desarrolladas son propiedad del cliente una vez abonado el pago completo</LI>
            <LI>Synera Technologies retiene el derecho de usar tecnologías y metodologías desarrolladas internamente</LI>
            <LI>El cliente es responsable del contenido que procesen los bots implementados</LI>
          </UL>
        ),
      },
      {
        id: "confidencialidad",
        heading: "6. Confidencialidad",
        content: (
          <P>
            Nos comprometemos a mantener confidencial toda la información del
            negocio del cliente que se comparta durante la prestación de
            servicios.
          </P>
        ),
      },
      {
        id: "responsabilidad",
        heading: "7. Limitación de responsabilidad",
        content: (
          <UL>
            <LI>Synera Technologies no es responsable por pérdidas indirectas o consecuentes</LI>
            <LI>Nuestra responsabilidad máxima está limitada al monto pagado por el servicio en cuestión</LI>
            <LI>No garantizamos resultados específicos de negocio, aunque nos comprometemos con la calidad técnica de las soluciones</LI>
          </UL>
        ),
      },
      {
        id: "modificaciones",
        heading: "8. Modificaciones al servicio",
        content: (
          <UL>
            <LI>Nos reservamos el derecho de modificar o discontinuar servicios con 30 días de aviso</LI>
            <LI>Los cambios de precio aplican a nuevas contrataciones y se notifican con 30 días de anticipación</LI>
          </UL>
        ),
      },
      {
        id: "cancelacion",
        heading: "9. Cancelación",
        content: (
          <UL>
            <LI>El cliente puede cancelar una suscripción en cualquier momento</LI>
            <LI>La cancelación aplica al siguiente ciclo de facturación</LI>
            <LI>No se realizan reembolsos por períodos parciales</LI>
          </UL>
        ),
      },
      {
        id: "ley",
        heading: "10. Ley aplicable",
        content: (
          <P>
            Estos términos se rigen por las leyes de la República Oriental del
            Uruguay.
          </P>
        ),
      },
      {
        id: "contacto",
        heading: "11. Contacto",
        content: (
          <>
            <P>Para consultas sobre estos términos:</P>
            <UL>
              <LI>
                Email:{" "}
                <a href="mailto:legal@syneratechnologies.com" className="text-accent hover:underline">
                  legal@syneratechnologies.com
                </a>
              </LI>
              <LI>Telegram: @syneratech_bot</LI>
            </UL>
          </>
        ),
      },
    ],
  };
}

// ── Metadata ──────────────────────────────────────────────────────────────────

const metaTitles: Record<string, string> = {
  es: "Términos y Condiciones | Synera Technologies",
  en: "Terms and Conditions | Synera Technologies",
};

const metaDescs: Record<string, string> = {
  es: "Términos y condiciones de uso de los servicios de Synera Technologies.",
  en: "Terms and conditions for using Synera Technologies services.",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = locale in metaTitles ? locale : "es";
  return { title: metaTitles[loc], description: metaDescs[loc] };
}

export function generateStaticParams() {
  return ["es", "en"].map((locale) => ({ locale }));
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!["es", "en"].includes(locale)) notFound();

  const content = getContent(locale);

  return (
    <LegalLayout
      locale={locale}
      title={content.title}
      lastUpdated={content.lastUpdated}
      tocLabel={content.tocLabel}
      sections={content.sections}
    />
  );
}
