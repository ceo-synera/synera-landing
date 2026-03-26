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
      title: "Refund Policy",
      lastUpdated: "Last updated: January 2025",
      tocLabel: "Contents",
      sections: [
        {
          id: "setup",
          heading: "1. Setup Payments (One-time)",
          content: (
            <P>
              Setup payments are non-refundable once work has begun. If you
              cancel before we start development, you may request a full refund
              within 48 hours of payment.
            </P>
          ),
        },
        {
          id: "subscriptions",
          heading: "2. Monthly Subscriptions",
          content: (
            <UL>
              <LI>You may cancel your subscription at any time</LI>
              <LI>No refunds are made for the current month</LI>
              <LI>Cancellation applies to the next billing cycle</LI>
              <LI>You retain access to the service until the end of the paid period</LI>
            </UL>
          ),
        },
        {
          id: "consulting",
          heading: "3. Strategic Consulting",
          content: (
            <UL>
              <LI>If you cancel more than 24 hours in advance, we refund 100%</LI>
              <LI>If you cancel with less than 24 hours&apos; notice, no refund</LI>
              <LI>If you do not attend without prior notice, no refund</LI>
            </UL>
          ),
        },
        {
          id: "custom",
          heading: "4. Custom Projects",
          content: (
            <>
              <P>
                Custom projects have their own payment policy defined in the
                service contract. In general:
              </P>
              <UL>
                <LI>The initial payment (50%) is non-refundable once the project has started</LI>
                <LI>The final payment is made upon delivery</LI>
                <LI>If Synera Technologies cannot complete the project, a proportional refund is issued</LI>
              </UL>
            </>
          ),
        },
        {
          id: "guarantee",
          heading: "5. Satisfaction Guarantee",
          content: (
            <P>
              If the delivered bot or automation does not work as specified in
              the proposal, we commit to fixing it at no additional cost within
              30 days of delivery.
            </P>
          ),
        },
        {
          id: "how-to-request",
          heading: "6. How to Request a Refund",
          content: (
            <>
              <P>
                Contact us at{" "}
                <a
                  href="mailto:support@syneratechnologies.com"
                  className="text-accent hover:underline"
                >
                  support@syneratechnologies.com
                </a>{" "}
                with:
              </P>
              <UL>
                <LI>Your name and registered email</LI>
                <LI>The contracted service</LI>
                <LI>The reason for the request</LI>
              </UL>
              <P>We respond within 48 business hours.</P>
            </>
          ),
        },
        {
          id: "processing",
          heading: "7. Refund Processing",
          content: (
            <P>
              Approved refunds are processed through PayPal within 5 to 10
              business days.
            </P>
          ),
        },
      ],
    };
  }

  if (locale === "zh") {
    return {
      title: "退款政策",
      lastUpdated: "最后更新：2025年1月",
      tocLabel: "目录",
      sections: [
        {
          id: "setup",
          heading: "1. 安装费（一次性）",
          content: (
            <P>
              一旦工作开始，安装费不予退款。如果您在我们开始开发前取消，可在付款后48小时内申请全额退款。
            </P>
          ),
        },
        {
          id: "subscriptions",
          heading: "2. 月度订阅",
          content: (
            <UL>
              <LI>您可随时取消订阅</LI>
              <LI>当月费用不予退款</LI>
              <LI>取消适用于下一个计费周期</LI>
              <LI>您在付费期结束前保留服务访问权限</LI>
            </UL>
          ),
        },
        {
          id: "consulting",
          heading: "3. 战略咨询",
          content: (
            <UL>
              <LI>如果您提前24小时以上取消，退款100%</LI>
              <LI>如果您在24小时内取消，不予退款</LI>
              <LI>如果您无故缺席，不予退款</LI>
            </UL>
          ),
        },
        {
          id: "custom",
          heading: "4. 定制项目",
          content: (
            <>
              <P>定制项目在服务合同中有其专属付款政策。一般而言：</P>
              <UL>
                <LI>一旦项目开始，首期款项（50%）不予退款</LI>
                <LI>最终付款在交付时进行</LI>
                <LI>如果Synera Technologies无法完成项目，将按比例退款</LI>
              </UL>
            </>
          ),
        },
        {
          id: "guarantee",
          heading: "5. 满意保证",
          content: (
            <P>
              如果交付的机器人或自动化程序未按提案规定运行，我们承诺在交付后30天内免费修复。
            </P>
          ),
        },
        {
          id: "how-to-request",
          heading: "6. 如何申请退款",
          content: (
            <>
              <P>
                通过{" "}
                <a
                  href="mailto:support@syneratechnologies.com"
                  className="text-accent hover:underline"
                >
                  support@syneratechnologies.com
                </a>{" "}
                联系我们，并提供：
              </P>
              <UL>
                <LI>您的姓名和注册邮箱</LI>
                <LI>签约的服务</LI>
                <LI>申请原因</LI>
              </UL>
              <P>我们在48个工作小时内回复。</P>
            </>
          ),
        },
        {
          id: "processing",
          heading: "7. 退款处理",
          content: (
            <P>
              已批准的退款通过PayPal在5至10个工作日内处理。
            </P>
          ),
        },
      ],
    };
  }

  // Default: ES
  return {
    title: "Política de Reembolsos",
    lastUpdated: "Última actualización: Enero 2025",
    tocLabel: "Contenido",
    sections: [
      {
        id: "setup",
        heading: "1. Pagos de setup (único)",
        content: (
          <P>
            Los pagos de setup son no reembolsables una vez que el trabajo ha
            comenzado. Si cancelás antes de que iniciemos el desarrollo, podés
            solicitar un reembolso completo dentro de las 48 horas de realizado
            el pago.
          </P>
        ),
      },
      {
        id: "suscripciones",
        heading: "2. Suscripciones mensuales",
        content: (
          <UL>
            <LI>Podés cancelar tu suscripción en cualquier momento</LI>
            <LI>No se realizan reembolsos por el mes en curso</LI>
            <LI>La cancelación aplica al siguiente ciclo de facturación</LI>
            <LI>Seguís teniendo acceso al servicio hasta el final del período pagado</LI>
          </UL>
        ),
      },
      {
        id: "consultoria",
        heading: "3. Consultoría estratégica",
        content: (
          <UL>
            <LI>Si cancelás con más de 24 horas de anticipación, reembolsamos el 100%</LI>
            <LI>Si cancelás con menos de 24 horas, no hay reembolso</LI>
            <LI>Si no asistís sin aviso previo, no hay reembolso</LI>
          </UL>
        ),
      },
      {
        id: "proyectos-custom",
        heading: "4. Proyectos custom",
        content: (
          <>
            <P>
              Los proyectos custom tienen su propia política de pagos definida
              en el contrato de servicios. En general:
            </P>
            <UL>
              <LI>El pago inicial (50%) no es reembolsable una vez iniciado el proyecto</LI>
              <LI>El pago final se realiza contra entrega</LI>
              <LI>Si Synera Technologies no puede completar el proyecto, se reembolsa proporcionalmente</LI>
            </UL>
          </>
        ),
      },
      {
        id: "garantia",
        heading: "5. Garantía de satisfacción",
        content: (
          <P>
            Si el bot o automatización entregada no funciona según lo
            especificado en la propuesta, nos comprometemos a corregirlo sin
            costo adicional dentro de los 30 días de entrega.
          </P>
        ),
      },
      {
        id: "como-solicitar",
        heading: "6. Cómo solicitar un reembolso",
        content: (
          <>
            <P>
              Contactanos en{" "}
              <a
                href="mailto:support@syneratechnologies.com"
                className="text-accent hover:underline"
              >
                support@syneratechnologies.com
              </a>{" "}
              con:
            </P>
            <UL>
              <LI>Tu nombre y email de registro</LI>
              <LI>El servicio contratado</LI>
              <LI>El motivo de la solicitud</LI>
            </UL>
            <P>Respondemos en menos de 48 horas hábiles.</P>
          </>
        ),
      },
      {
        id: "procesamiento",
        heading: "7. Procesamiento del reembolso",
        content: (
          <P>
            Los reembolsos aprobados se procesan a través de PayPal en un plazo
            de 5 a 10 días hábiles.
          </P>
        ),
      },
    ],
  };
}

// ── Metadata ──────────────────────────────────────────────────────────────────

const metaTitles: Record<string, string> = {
  es: "Política de Reembolsos | Synera Technologies",
  en: "Refund Policy | Synera Technologies",
  zh: "退款政策 | Synera Technologies",
};

const metaDescs: Record<string, string> = {
  es: "Política de reembolsos de Synera Technologies. Conocé las condiciones para setup, suscripciones, consultoría y proyectos custom.",
  en: "Synera Technologies refund policy. Learn the conditions for setup fees, subscriptions, consulting, and custom projects.",
  zh: "Synera Technologies退款政策。了解安装费、订阅、咨询和定制项目的退款条件。",
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
  return ["es", "en", "zh"].map((locale) => ({ locale }));
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function RefundsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!["es", "en", "zh"].includes(locale)) notFound();

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
