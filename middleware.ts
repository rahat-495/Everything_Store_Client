
import { NextResponse, NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  console.log("hallo world");
}
 
export const config = {
  matcher: '/products',
}