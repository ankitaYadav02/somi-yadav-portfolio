export function GET() {
  return new Response("google-site-verification: googleb273c468193aeb09.html", {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
