
import { NextResponse, NextRequest } from 'next/server'
import { getCurrentUser } from './app/utils/user/getCurrentUser';

type TRole = keyof typeof roleBasedPrivateRoutes ;

const authRoutes = ['/login' , '/signup'] ;
const roleBasedPrivateRoutes = { user : [/^\/user/] , admin : [/^\/admin/] }

export const middleware = async (request: NextRequest) => {
  
  const { pathname } = request.nextUrl ;
  const userInfo = await getCurrentUser() ;

  if(!userInfo){
    if(authRoutes.includes(pathname)){
      return NextResponse.next() ;
    }
    else{
      return NextResponse.redirect(new URL(`http://localhost:3000/login?redirectPath=${pathname}` , request.url)) ;
    }
  }

  if(userInfo?._doc?.role && roleBasedPrivateRoutes[userInfo?._doc?.role as TRole]){
    const routes = roleBasedPrivateRoutes[userInfo?._doc?.role as TRole] ;
    if(routes.some((route) => pathname.match(route))){
      return NextResponse.next() ;
    }
  }
  
  if(userInfo?._doc?.role === 'user' && pathname?.includes("/checkout")){
    return NextResponse.next() ;
  }

  return NextResponse.redirect(new URL(`/` , request.url)) ;

}
 
export const config = {
  matcher: [ '/user' , '/user/:page' , '/admin' , '/admin/:page' , '/checkout/:page' ] ,
}