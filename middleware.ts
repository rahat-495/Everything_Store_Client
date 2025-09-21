
import { NextResponse, NextRequest } from 'next/server'
import { getCurrentUser } from './app/utils/user/getCurrentUser';

const authRoutes = ['/login' , '/signup'] ;

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
  else if(userInfo){
    if(authRoutes.includes(pathname)){
      return NextResponse.redirect(new URL('http://localhost:3000' , request.url)) ;
    }
  }

}
 
export const config = {
  matcher: [ '/products' ] ,
}