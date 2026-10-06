// Shared client helper for the enquiry forms; resolves to an error message or null on success
export async function submitEnquiry(payload) {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (res.ok) return null;
    const data = await res.json().catch(() => ({}));
    return data.error || "Something went wrong. Please try again.";
  } catch {
    return "Network error. Please check your connection and try again.";
  }
}
