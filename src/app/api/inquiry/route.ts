import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const TO_EMAIL = 'marutikrittextiles@gmail.com'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      fullName, email, phone, companyName, designation, address,
      garmentTypes, quantity, fabricPreference, gsmRange,
      printingRequired, printingType, embroideryRequired, privateLabeling, customPackaging,
      expectedDelivery, budgetRange, urgency,
      additionalNotes,
      selectedProduct, selectedSize,
    } = body

    const origin = req.nextUrl.origin || 'https://marutikrittextiles.com'
    const absoluteImageUrl = selectedProduct?.image
      ? (selectedProduct.image.startsWith('http') ? selectedProduct.image : `${origin}${selectedProduct.image.startsWith('/') ? '' : '/'}${selectedProduct.image}`)
      : ''

    const productHtml = selectedProduct
      ? `<tr>
          <td style="padding:16px;background:#FFF5EB;border:1px solid #FF6B2B33;" colspan="2">
            <table cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <td width="100" style="padding-right:16px;vertical-align:top;">
                  <img src="${absoluteImageUrl}" width="90" height="90" alt="${selectedProduct.title}" style="display:block;width:90px;height:90px;max-width:90px;max-height:90px;object-fit:contain;border:1px solid #eeeeee;background-color:#ffffff;padding:4px;" />
                </td>
                <td style="vertical-align:top;">
                  <p style="margin:0;font-size:11px;color:#FF6B2B;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;">Selected Product</p>
                  <p style="margin:2px 0 0;font-size:16px;font-weight:900;color:#000;">${selectedProduct.title}</p>
                  <p style="margin:2px 0 0;font-size:12px;color:#00000080;">SKU: ${selectedProduct.sku}</p>
                  <p style="margin:8px 0 0;font-size:13px;font-weight:600;color:#000;">Size: ${selectedSize || 'Not selected'}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>`
      : ''

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
            <p style="margin:6px 0 0;font-size:13px;color:#FFFFE380;">New Manufacturing Inquiry</p>
          </td>
        </tr>

        <!-- Section 1: Your Information -->
        <tr>
          <td style="padding:24px 32px 8px;" colspan="2">
            <table cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <td style="padding:6px 12px;background:#FF6B2B;color:#000;font-size:13px;font-weight:700;width:28px;text-align:center;">1</td>
                <td style="padding-left:12px;font-size:16px;font-weight:700;color:#000;">Your Information</td>
              </tr>
            </table>
          </td>
        </tr>
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
                <td style="padding:10px 16px;font-size:13px;color:#000;border-bottom:1px solid #0000000D;">${phone}</td>
              </tr>
              <tr>
                <td style="padding:10px 16px;font-size:13px;font-weight:600;color:#00000080;border-bottom:1px solid #0000000D;">Company</td>
                <td style="padding:10px 16px;font-size:13px;color:#000;border-bottom:1px solid #0000000D;">${companyName || '—'}</td>
              </tr>
              <tr style="background:#FAFAF0;">
                <td style="padding:10px 16px;font-size:13px;font-weight:600;color:#00000080;border-bottom:1px solid #0000000D;">Designation</td>
                <td style="padding:10px 16px;font-size:13px;color:#000;border-bottom:1px solid #0000000D;">${designation || '—'}</td>
              </tr>
              <tr>
                <td style="padding:10px 16px;font-size:13px;font-weight:600;color:#00000080;">Address</td>
                <td style="padding:10px 16px;font-size:13px;color:#000;">${address || '—'}</td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Section 2: Product Details -->
        <tr>
          <td style="padding:8px 32px;" colspan="2">
            <table cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <td style="padding:6px 12px;background:#FF6B2B;color:#000;font-size:13px;font-weight:700;width:28px;text-align:center;">2</td>
                <td style="padding-left:12px;font-size:16px;font-weight:700;color:#000;">Product Details</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:12px 32px 20px;" colspan="2">
            <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border:1px solid #0000000D;">
              ${productHtml}
              <tr style="background:#FAFAF0;">
                <td style="padding:10px 16px;font-size:13px;font-weight:600;color:#00000080;width:140px;border-bottom:1px solid #0000000D;">Garment Types</td>
                <td style="padding:10px 16px;font-size:13px;color:#000;border-bottom:1px solid #0000000D;">${(garmentTypes || []).join(', ') || '—'}</td>
              </tr>
              <tr>
                <td style="padding:10px 16px;font-size:13px;font-weight:600;color:#00000080;border-bottom:1px solid #0000000D;">Quantity</td>
                <td style="padding:10px 16px;font-size:13px;color:#000;border-bottom:1px solid #0000000D;">${quantity || '—'} pieces</td>
              </tr>
              <tr style="background:#FAFAF0;">
                <td style="padding:10px 16px;font-size:13px;font-weight:600;color:#00000080;border-bottom:1px solid #0000000D;">Fabric Preference</td>
                <td style="padding:10px 16px;font-size:13px;color:#000;border-bottom:1px solid #0000000D;">${fabricPreference || '—'}</td>
              </tr>
              <tr>
                <td style="padding:10px 16px;font-size:13px;font-weight:600;color:#00000080;">GSM Range</td>
                <td style="padding:10px 16px;font-size:13px;color:#000;">${gsmRange || '—'}</td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Section 3: Customization -->
        <tr>
          <td style="padding:8px 32px;" colspan="2">
            <table cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <td style="padding:6px 12px;background:#FF6B2B;color:#000;font-size:13px;font-weight:700;width:28px;text-align:center;">3</td>
                <td style="padding-left:12px;font-size:16px;font-weight:700;color:#000;">Customization</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:12px 32px 20px;" colspan="2">
            <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border:1px solid #0000000D;">
              <tr style="background:#FAFAF0;">
                <td style="padding:10px 16px;font-size:13px;font-weight:600;color:#00000080;width:140px;border-bottom:1px solid #0000000D;">Printing Required</td>
                <td style="padding:10px 16px;font-size:13px;color:#000;border-bottom:1px solid #0000000D;">${printingRequired || '—'}</td>
              </tr>
              ${printingRequired === 'Yes' ? `<tr>
                <td style="padding:10px 16px;font-size:13px;font-weight:600;color:#00000080;border-bottom:1px solid #0000000D;">Printing Type</td>
                <td style="padding:10px 16px;font-size:13px;color:#000;border-bottom:1px solid #0000000D;">${printingType || '—'}</td>
              </tr>` : ''}
              <tr style="background:#FAFAF0;">
                <td style="padding:10px 16px;font-size:13px;font-weight:600;color:#00000080;border-bottom:1px solid #0000000D;">Embroidery</td>
                <td style="padding:10px 16px;font-size:13px;color:#000;border-bottom:1px solid #0000000D;">${embroideryRequired ? '✅ Yes' : '—'}</td>
              </tr>
              <tr>
                <td style="padding:10px 16px;font-size:13px;font-weight:600;color:#00000080;border-bottom:1px solid #0000000D;">Private Labeling</td>
                <td style="padding:10px 16px;font-size:13px;color:#000;border-bottom:1px solid #0000000D;">${privateLabeling ? '✅ Yes' : '—'}</td>
              </tr>
              <tr style="background:#FAFAF0;">
                <td style="padding:10px 16px;font-size:13px;font-weight:600;color:#00000080;">Custom Packaging</td>
                <td style="padding:10px 16px;font-size:13px;color:#000;">${customPackaging ? '✅ Yes' : '—'}</td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Section 4: Timeline & Budget -->
        <tr>
          <td style="padding:8px 32px;" colspan="2">
            <table cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <td style="padding:6px 12px;background:#FF6B2B;color:#000;font-size:13px;font-weight:700;width:28px;text-align:center;">4</td>
                <td style="padding-left:12px;font-size:16px;font-weight:700;color:#000;">Timeline &amp; Budget</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:12px 32px 20px;" colspan="2">
            <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border:1px solid #0000000D;">
              <tr style="background:#FAFAF0;">
                <td style="padding:10px 16px;font-size:13px;font-weight:600;color:#00000080;width:140px;border-bottom:1px solid #0000000D;">Delivery Date</td>
                <td style="padding:10px 16px;font-size:13px;color:#000;border-bottom:1px solid #0000000D;">${expectedDelivery || '—'}</td>
              </tr>
              <tr>
                <td style="padding:10px 16px;font-size:13px;font-weight:600;color:#00000080;border-bottom:1px solid #0000000D;">Budget Range</td>
                <td style="padding:10px 16px;font-size:13px;color:#000;border-bottom:1px solid #0000000D;">${budgetRange || '—'}</td>
              </tr>
              <tr style="background:#FAFAF0;">
                <td style="padding:10px 16px;font-size:13px;font-weight:600;color:#00000080;">Urgency</td>
                <td style="padding:10px 16px;font-size:13px;color:#000;">${urgency || '—'}</td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Section 5: Additional Notes -->
        ${additionalNotes ? `<tr>
          <td style="padding:8px 32px;" colspan="2">
            <table cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <td style="padding:6px 12px;background:#FF6B2B;color:#000;font-size:13px;font-weight:700;width:28px;text-align:center;">5</td>
                <td style="padding-left:12px;font-size:16px;font-weight:700;color:#000;">Additional Notes</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:12px 32px 24px;" colspan="2">
            <div style="padding:14px 16px;background:#FAFAF0;border:1px solid #0000000D;font-size:13px;color:#000;line-height:1.6;">${additionalNotes}</div>
          </td>
        </tr>` : ''}

        <!-- Footer -->
        <tr>
          <td style="padding:20px 32px;background:#000;color:#FFFFE380;font-size:11px;text-align:center;" colspan="2">
            This inquiry was submitted from the Maruti Krit Textiles website.<br/>
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
      subject: `New Inquiry from ${fullName}${selectedProduct ? ` : ${selectedProduct.title}` : ''}`,
      html: htmlEmail,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('API error:', err)
    return NextResponse.json({ error: 'Failed to send inquiry' }, { status: 500 })
  }
}
