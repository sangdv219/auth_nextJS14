
import { DEFAULT_LOGIN_REDIRECT, apiAuthPrefix, authRoutes, publicRoutes } from './routes';
// const { auth } = NextAuth(authConfig)

export function middleware(req: { auth?: any; nextUrl?: any; }){
    // console.info('__middleware__');
    const isLoggedIn = !!req.auth
    const { nextUrl } = req;
    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix); 
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);

    if(isApiAuthRoute){
        return null
    }

    if(isAuthRoute){
        if(isLoggedIn){
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
        }
        return null
    }
    console.info('isLoggedIn', isLoggedIn);
    if(!isLoggedIn && !isPublicRoute){
        return Response.redirect(new URL('/auth/login', nextUrl))
    }
    
    return null
    // console.log('DEFAULT_LOGIN_REDIRECT_: ', DEFAULT_LOGIN_REDIRECT)
    // console.log('apiAuthPrefix_: ', apiAuthPrefix)
    // console.log('authRoutes_: ', authRoutes)
    // console.log('publicRoutes_: ', publicRoutes)
    // console.log('isLoggedIn_: ', isLoggedIn)
}

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}