// Receives the contact and property enquiry forms.
// Set CONTACT_WEBHOOK_URL (e.g. a GoHighLevel inbound webhook) to forward each enquiry;
// without it, enquiries are only logged on the server.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LENGTH = 2000;

const clean = (value) => (typeof value === "string" ? value.trim().slice(0, MAX_LENGTH) : "");

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Hidden field real visitors never fill in; bots usually do
  if (clean(body.website)) return Response.json({ ok: true });

  const enquiry = {
    type: clean(body.type) || "contact",
    name: clean(body.name),
    email: clean(body.email),
    phone: clean(body.phone),
    interest: clean(body.interest),
    property: clean(body.property),
    agent: clean(body.agent),
    tourType: clean(body.tourType),
    tourDate: clean(body.tourDate),
    tourTime: clean(body.tourTime),
    message: clean(body.message),
    receivedAt: new Date().toISOString(),
  };

  if (!enquiry.name || !EMAIL_RE.test(enquiry.email)) {
    return Response.json({ error: "Please enter your name and a valid email address." }, { status: 400 });
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(enquiry),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    } catch (err) {
      console.error("[contact] forwarding failed:", err);
      return Response.json({ error: "We couldn't send your message. Please call or email us instead." }, { status: 502 });
    }
  } else {
    console.info("[contact] new enquiry (set CONTACT_WEBHOOK_URL to forward):", enquiry);
  }

  return Response.json({ ok: true });
}
