import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      )
    }

    const toEmail = process.env.CONTACT_EMAIL || "delivered@resend.dev"

    const { data, error } = await resend.emails.send({
      from: "NeuralStack Contact <onboarding@resend.dev>",
      to: [toEmail],
      subject: `New message from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: 'Inter', system-ui, sans-serif; max-width: 560px; margin: 0 auto; padding: 32px 24px; background: #e1d3c1; color: #1b263b; border-radius: 12px; border: 2px solid #708238;">
          <div style="border-bottom: 2px solid #a3b18a; padding-bottom: 16px; margin-bottom: 24px;">
            <h1 style="margin: 0; font-size: 20px; font-weight: 700; color: #1b263b; font-family: monospace;">
              // NeuralStack — New Contact
            </h1>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #708238; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; font-family: monospace; width: 100px; vertical-align: top;">Name</td>
              <td style="padding: 10px 0; color: #1b263b; font-size: 15px; font-weight: 500;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #708238; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; font-family: monospace; vertical-align: top;">Email</td>
              <td style="padding: 10px 0;">
                <a href="mailto:${email}" style="color: #1b263b; font-size: 15px; text-decoration: underline; text-decoration-color: #a3b18a;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #708238; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; font-family: monospace; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; color: #1b263b; font-size: 15px; line-height: 1.6;">${message.replace(/\n/g, "<br />")}</td>
            </tr>
          </table>

          <div style="margin-top: 24px; padding-top: 16px; border-top: 2px solid #a3b18a; font-size: 11px; color: #708238; font-family: monospace; letter-spacing: 0.05em;">
            Sent from neuralstack.dev/contact
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        { error: "Failed to send email." },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err) {
    console.error("Contact API error:", err)
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    )
  }
}
