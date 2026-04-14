import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const adminSession = request.cookies.get('admin_session');

  if (
    request.nextUrl.pathname.startsWith('/api/admin/') && 
    request.nextUrl.pathname !== '/api/admin/login' && 
    request.nextUrl.pathname !== '/api/admin/logout' &&
    !(request.nextUrl.pathname === '/api/admin/settings' && request.method === 'GET')
  ) {
    if (!adminSession || adminSession.value !== 'authenticated') {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
  }

  if (request.nextUrl.pathname.startsWith('/admin/dashboard')) {
    if (!adminSession || adminSession.value !== 'authenticated') {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  if (request.nextUrl.pathname === '/admin' || request.nextUrl.pathname === '/admin/') {
    if (adminSession && adminSession.value === 'authenticated') {
      return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    } else {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
};
