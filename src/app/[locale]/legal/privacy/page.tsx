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
      title: "Privacy Policy",
      lastUpdated: "Last updated: January 2025",
      tocLabel: "Contents",
      sections: [
        {
          id: "info-collected",
          heading: "1. Information We Collect",
          content: (
            <>
              <P>
                Synera Technologies ("we", "our") collects the following
                information when you use our website syneratechnologies.com:
              </P>
              <P>
                <B>Information you provide directly:</B>
              </P>
              <UL>
                <LI>Full name</LI>
                <LI>Email address</LI>
                <LI>Your company or business name</LI>
                <LI>Messages you send us through the contact form</LI>
                <LI>Information about the services you need</LI>
              </UL>
              <P>
                <B>Information collected automatically:</B>
              </P>
              <UL>
                <LI>IP address</LI>
                <LI>Browser and device type</LI>
                <LI>Pages visited and time spent</LI>
                <LI>Analytics data through Vercel Analytics</LI>
              </UL>
            </>
          ),
        },
        {
          id: "how-we-use",
          heading: "2. How We Use Your Information",
          content: (
            <>
              <P>We use the information collected to:</P>
              <UL>
                <LI>Respond to your inquiries and messages</LI>
                <LI>Provide the contracted services</LI>
                <LI>
                  Send you information about our services (only if you
                  authorize it)
                </LI>
                <LI>Improve our website and services</LI>
                <LI>Comply with legal obligations</LI>
              </UL>
            </>
          ),
        },
        {
          id: "third-parties",
          heading: "3. Sharing Information with Third Parties",
          content: (
            <>
              <P>
                We do not sell, rent, or share your personal information with
                third parties, except:
              </P>
              <UL>
                <LI>
                  <B>Service providers:</B> We use Resend for email sending,
                  Vercel for hosting, and Cal.com for scheduling calls. These
                  providers have limited access to your information only to
                  provide their services to us.
                </LI>
                <LI>
                  <B>Legal requirements:</B> If the law requires us to disclose
                  information.
                </LI>
              </UL>
            </>
          ),
        },
        {
          id: "cookies",
          heading: "4. Cookies and Analytics",
          content: (
            <>
              <P>
                We use Vercel Analytics to understand how our site is used.
                Vercel Analytics is designed to respect privacy — it does not
                use tracking cookies or collect personally identifiable
                information.
              </P>
            </>
          ),
        },
        {
          id: "security",
          heading: "5. Security of Your Data",
          content: (
            <>
              <P>
                We implement reasonable security measures to protect your
                information. However, no method of transmission over the
                internet is 100% secure.
              </P>
            </>
          ),
        },
        {
          id: "your-rights",
          heading: "6. Your Rights",
          content: (
            <>
              <P>You have the right to:</P>
              <UL>
                <LI>Access the personal information we hold about you</LI>
                <LI>Request correction of incorrect information</LI>
                <LI>Request deletion of your information</LI>
                <LI>Object to the processing of your information</LI>
              </UL>
              <P>
                To exercise these rights, contact us at{" "}
                <a
                  href="mailto:legal@syneratechnologies.com"
                  className="text-accent hover:underline"
                >
                  legal@syneratechnologies.com
                </a>
              </P>
            </>
          ),
        },
        {
          id: "international",
          heading: "7. International Data Transfer",
          content: (
            <>
              <P>
                We operate from Uruguay and Taiwan. By using our site, you
                accept that your information may be processed in these
                countries. We take reasonable measures to protect your
                information during these transfers.
              </P>
            </>
          ),
        },
        {
          id: "changes",
          heading: "8. Changes to This Policy",
          content: (
            <>
              <P>
                We may update this policy occasionally. We will notify you of
                significant changes by posting the new policy on this page with
                the update date.
              </P>
            </>
          ),
        },
        {
          id: "contact",
          heading: "9. Contact",
          content: (
            <>
              <P>If you have questions about this privacy policy:</P>
              <UL>
                <LI>
                  Email:{" "}
                  <a
                    href="mailto:legal@syneratechnologies.com"
                    className="text-accent hover:underline"
                  >
                    legal@syneratechnologies.com
                  </a>
                </LI>
                <LI>Telegram: @syneratech_bot</LI>
                <LI>Website: syneratechnologies.com</LI>
              </UL>
            </>
          ),
        },
      ],
    };
  }

  // Default: ES
  return {
    title: "Política de Privacidad",
    lastUpdated: "Última actualización: Enero 2025",
    tocLabel: "Contenido",
    sections: [
      {
        id: "info-recopilamos",
        heading: "1. Información que recopilamos",
        content: (
          <>
            <P>
              Synera Technologies ("nosotros", "nuestro") recopila la siguiente
              información cuando usás nuestro sitio web syneratechnologies.com:
            </P>
            <P>
              <B>Información que nos proporcionás directamente:</B>
            </P>
            <UL>
              <LI>Nombre completo</LI>
              <LI>Dirección de email</LI>
              <LI>Nombre de tu empresa o negocio</LI>
              <LI>Mensajes que nos enviás a través del formulario de contacto</LI>
              <LI>Información sobre los servicios que necesitás</LI>
            </UL>
            <P>
              <B>Información recopilada automáticamente:</B>
            </P>
            <UL>
              <LI>Dirección IP</LI>
              <LI>Tipo de navegador y dispositivo</LI>
              <LI>Páginas visitadas y tiempo de permanencia</LI>
              <LI>Datos de analytics a través de Vercel Analytics</LI>
            </UL>
          </>
        ),
      },
      {
        id: "como-usamos",
        heading: "2. Cómo usamos tu información",
        content: (
          <>
            <P>Usamos la información recopilada para:</P>
            <UL>
              <LI>Responder tus consultas y mensajes</LI>
              <LI>Brindarte los servicios contratados</LI>
              <LI>
                Enviarte información sobre nuestros servicios (solo si lo
                autorizás)
              </LI>
              <LI>Mejorar nuestro sitio web y servicios</LI>
              <LI>Cumplir con obligaciones legales</LI>
            </UL>
          </>
        ),
      },
      {
        id: "terceros",
        heading: "3. Compartir información con terceros",
        content: (
          <>
            <P>
              No vendemos, alquilamos ni compartimos tu información personal con
              terceros, excepto:
            </P>
            <UL>
              <LI>
                <B>Proveedores de servicio:</B> Usamos Resend para envío de
                emails, Vercel para hosting y Cal.com para agendado de llamadas.
                Estos proveedores tienen acceso limitado a tu información solo
                para prestarnos sus servicios.
              </LI>
              <LI>
                <B>Requerimientos legales:</B> Si la ley nos obliga a divulgar
                información.
              </LI>
            </UL>
          </>
        ),
      },
      {
        id: "cookies",
        heading: "4. Cookies y analytics",
        content: (
          <>
            <P>
              Usamos Vercel Analytics para entender cómo se usa nuestro sitio.
              Vercel Analytics está diseñado para respetar la privacidad — no
              usa cookies de seguimiento ni recopila información personal
              identificable.
            </P>
          </>
        ),
      },
      {
        id: "seguridad",
        heading: "5. Seguridad de tus datos",
        content: (
          <>
            <P>
              Implementamos medidas de seguridad razonables para proteger tu
              información. Sin embargo, ningún método de transmisión por
              internet es 100% seguro.
            </P>
          </>
        ),
      },
      {
        id: "derechos",
        heading: "6. Tus derechos",
        content: (
          <>
            <P>Tenés derecho a:</P>
            <UL>
              <LI>
                Acceder a la información personal que tenemos sobre vos
              </LI>
              <LI>Solicitar la corrección de información incorrecta</LI>
              <LI>Solicitar la eliminación de tu información</LI>
              <LI>Oponerte al procesamiento de tu información</LI>
            </UL>
            <P>
              Para ejercer estos derechos, contactanos en{" "}
              <a
                href="mailto:legal@syneratechnologies.com"
                className="text-accent hover:underline"
              >
                legal@syneratechnologies.com
              </a>
            </P>
          </>
        ),
      },
      {
        id: "internacional",
        heading: "7. Transferencia internacional de datos",
        content: (
          <>
            <P>
              Operamos desde Uruguay y Taiwan. Al usar nuestro sitio, aceptás
              que tu información puede ser procesada en estos países. Tomamos
              medidas razonables para proteger tu información durante estas
              transferencias.
            </P>
          </>
        ),
      },
      {
        id: "cambios",
        heading: "8. Cambios a esta política",
        content: (
          <>
            <P>
              Podemos actualizar esta política ocasionalmente. Te notificaremos
              de cambios significativos publicando la nueva política en esta
              página con la fecha de actualización.
            </P>
          </>
        ),
      },
      {
        id: "contacto",
        heading: "9. Contacto",
        content: (
          <>
            <P>Si tenés preguntas sobre esta política de privacidad:</P>
            <UL>
              <LI>
                Email:{" "}
                <a
                  href="mailto:legal@syneratechnologies.com"
                  className="text-accent hover:underline"
                >
                  legal@syneratechnologies.com
                </a>
              </LI>
              <LI>Telegram: @syneratech_bot</LI>
              <LI>Sitio web: syneratechnologies.com</LI>
            </UL>
          </>
        ),
      },
    ],
  };
}

// ── Metadata ──────────────────────────────────────────────────────────────────

const metaTitles: Record<string, string> = {
  es: "Política de Privacidad | Synera Technologies",
  en: "Privacy Policy | Synera Technologies",
};

const metaDescs: Record<string, string> = {
  es: "Política de privacidad de Synera Technologies. Cómo recopilamos, usamos y protegemos tu información personal.",
  en: "Synera Technologies privacy policy. How we collect, use and protect your personal information.",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = locale in metaTitles ? locale : "es";
  return {
    title: metaTitles[loc],
    description: metaDescs[loc],
  };
}

export function generateStaticParams() {
  return ["es", "en"].map((locale) => ({ locale }));
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const locales = ["es", "en"];
  if (!locales.includes(locale)) notFound();

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
