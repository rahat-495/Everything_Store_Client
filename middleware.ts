
import { NextResponse, NextRequest } from 'next/server'

const authRoutes = ['/login' , '/signup'] ;

export function middleware(request: NextRequest) {
  console.log("hallo world");
}
 
export const config = {
  matcher: [ '/products' ] ,
}