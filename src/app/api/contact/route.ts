import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const TO_EMAIL = 'marutikrittextiles@gmail.com'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { fullName, email, phone, company, subject, message } = body

    const htmlEmail = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background:#FFFFE3;font-family:'Segoe UI',Roboto,Arial,sans-serif;">
  <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#FFFFE3;padding:32px 16px;">
    <tr><td align="center">
      <table cellpadding="0" cellspacing="0" border="0" width="600" style="background:#fff;border:1px solid #00000015;">
        <!-- Header -->
        <tr>
          <td style="padding:28px 32px;background:#000;color:#FFFFE3;" colspan="2">
            <h1 style="margin:0;font-size:22px;font-weight:900;letter-spacing:1px;">MARUTI KRIT TEXTILES</h1>
            <p style="margin:6px 0 0;font-size:13px;color:#FFFFE380;">New Contact Form Message</p>
          </td>
        </tr>

        <!-- Details Header -->
        <tr>
          <td style="padding:24px 32px 8px;" colspan="2">
            <table cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <td style="padding:6px 12px;background:#FF6B2B;color:#000;font-size:13px;font-weight:700;width:28px;text-align:center;">1</td>
                <td style="padding-left:12px;font-size:16px;font-weight:700;color:#000;">Contact Information</td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Fields Table -->
        <tr>
          <td style="padding:12px 32px 20px;" colspan="2">
            <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border:1px solid #0000000D;">
              <tr style="background:#FAFAF0;">
                <td style="padding:10px 16px;font-size:13px;font-weight:600;color:#00000080;width:140px;border-bottom:1px solid #0000000D;">Full Name</td>
                <td style="padding:10px 16px;font-size:13px;color:#000;border-bottom:1px solid #0000000D;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding:10px 16px;font-size:13px;font-weight:600;color:#00000080;border-bottom:1px solid #0000000D;">Email</td>
                <td style="padding:10px 16px;font-size:13px;color:#000;border-bottom:1px solid #0000000D;"><a href="mailto:${email}" style="color:#FF6B2B;">${email}</a></td>
              </tr>
              <tr style="background:#FAFAF0;">
                <td style="padding:10px 16px;font-size:13px;font-weight:600;color:#00000080;border-bottom:1px solid #0000000D;">Phone</td>
                <td style="padding:10px 16px;font-size:13px;color:#000;border-bottom:1px solid #0000000D;">${phone || '—'}</td>
              </tr>
              <tr>
                <td style="padding:10px 16px;font-size:13px;font-weight:600;color:#00000080;border-bottom:1px solid #0000000D;">Company</td>
                <td style="padding:10px 16px;font-size:13px;color:#000;border-bottom:1px solid #0000000D;">${company || '—'}</td>
              </tr>
              <tr style="background:#FAFAF0;">
                <td style="padding:10px 16px;font-size:13px;font-weight:600;color:#00000080;">Subject</td>
                <td style="padding:10px 16px;font-size:13px;color:#000;font-weight:600;">${subject || '—'}</td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Message Section -->
        <tr>
          <td style="padding:8px 32px;" colspan="2">
            <table cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <td style="padding:6px 12px;background:#FF6B2B;color:#000;font-size:13px;font-weight:700;width:28px;text-align:center;">2</td>
                <td style="padding-left:12px;font-size:16px;font-weight:700;color:#000;">Message</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:12px 32px 24px;" colspan="2">
            <div style="padding:16px;background:#FAFAF0;border:1px solid #0000000D;font-size:14px;color:#000;line-height:1.6;white-space:pre-wrap;">${message}</div>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:20px 32px;background:#000;color:#FFFFE380;font-size:11px;text-align:center;" colspan="2">
            This message was submitted from the Maruti Krit Textiles website contact page.<br/>
            © ${new Date().getFullYear()} Maruti Krit Textiles. All rights reserved.
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`

    const { error } = await resend.emails.send({
      from: 'Maruti Krit Textiles <onboarding@resend.dev>',
      to: [TO_EMAIL],
      replyTo: email,
      subject: `New Contact Message from ${fullName} : ${subject}`,
      html: htmlEmail,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('API error:', err)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
