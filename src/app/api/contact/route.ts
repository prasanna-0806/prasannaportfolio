import { NextResponse } from 'next/server'

type ContactPayload = {
  name?: string
  email?: string
  message?: string
}

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload
    const name = (body.name || '').trim()
    const email = (body.email || '').trim()
    const message = (body.message || '').trim()

    if (!name || !email || !message || !isValidEmail(email)) {
      return NextResponse.json({ error: 'Invalid form data' }, { status: 400 })
    }

    const serviceId = process.env.EMAILJS_SERVICE_ID || process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.EMAILJS_TEMPLATE_ID || process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.EMAILJS_PUBLIC_KEY || process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    const privateKey = process.env.EMAILJS_PRIVATE_KEY

    if (!serviceId || !templateId || !publicKey) {
      return NextResponse.json({ error: 'Server email configuration is missing' }, { status: 500 })
    }

    const now = new Date().toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short',
    })

    const emailjsResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        ...(privateKey ? { accessToken: privateKey } : {}),
        template_params: {
          from_name: name,
          from_email: email,
          to_name: 'Prasanna',
          message,
          name,
          email,
          title: 'New Portfolio Contact',
          time: now,
        },
      }),
    })

    if (!emailjsResponse.ok) {
      const details = await emailjsResponse.text()
      return NextResponse.json({ error: details || 'Email service rejected request' }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Unexpected server error' }, { status: 500 })
  }
}
