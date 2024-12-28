import { NextResponse, NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const token = req.cookies.get("token");
  if (token) {
    try {
      const response = await fetch("http://localhost:4000/api/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token.value}` // Passa o token no cabeçalho Authorization
        },
        credentials: "include"
      });

      if (response.ok) {
      }
    } catch {}
  }
  return NextResponse.next();

  url.pathname = "/acesso";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/plataforma"]
};
