import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, company, service, message, contactPref } = body;

  // Validation
  if (!name || !email || !service || !message) {
    return NextResponse.json(
      { error: "Nombre, email, servicio y mensaje son requeridos." },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "El email no es válido." }, { status: 400 });
  }

  const now = new Date().toLocaleString("es-UY", {
    timeZone: "America/Montevideo",
    dateStyle: "full",
    timeStyle: "short",
  });

  const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1917;">
      <div style="background: #185FA5; padding: 24px 32px; border-radius: 8px 8px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 20px;">Nuevo contacto desde syneratechnologies.com</h1>
      </div>
      <div style="background: #f8f7f4; padding: 32px; border-radius: 0 0 8px 8px; border: 1px solid #d0cec8; border-top: none;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #888780; font-size: 13px; width: 160px;">Nombre</td>
            <td style="padding: 8px 0; font-weight: 600;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #888780; font-size: 13px;">Email</td>
            <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #185FA5;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #888780; font-size: 13px;">Empresa</td>
            <td style="padding: 8px 0;">${company || "—"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #888780; font-size: 13px;">Qué necesita</td>
            <td style="padding: 8px 0;">${service}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #888780; font-size: 13px;">Canal preferido</td>
            <td style="padding: 8px 0;">${contactPref || "—"}</td>
          </tr>
        </table>

        <hr style="border: none; border-top: 1px solid #d0cec8; margin: 24px 0;" />

        <p style="color: #888780; font-size: 13px; margin: 0 0 8px;">Mensaje</p>
        <div style="background: white; border: 1px solid #d0cec8; border-radius: 6px; padding: 16px; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</div>

        <hr style="border: none; border-top: 1px solid #d0cec8; margin: 24px 0;" />

        <p style="color: #888780; font-size: 12px; margin: 0;">Enviado el ${now}</p>
      </div>
    </div>
  `;

  try {
    await resend.emails.send({
      from: "Synera Contact <onboarding@resend.dev>",
      to: "hola@syneratechnologies.com",
      replyTo: email,
      subject: `Nuevo contacto desde syneratechnologies.com — ${name}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "No se pudo enviar el email. Intentá de nuevo." },
      { status: 500 }
    );
  }
}
