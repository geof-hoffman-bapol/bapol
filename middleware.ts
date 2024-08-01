import { 
    clerkMiddleware, 
    createRouteMatcher 
} from "@clerk/nextjs/server";

 // https://clerk.com/docs/references/nextjs/clerk-middleware 
 // auth().protect() method
 // @28 minutes https://www.youtube.com/watch?v=zgGhzuBZOQg&t=1680s
 const isProtectedRoute = createRouteMatcher([
    '/dashboard(.*)',
    '/forum(.*)',
  ]);


  export default clerkMiddleware((auth, req) => {
    if (isProtectedRoute(req)) auth().protect();
  });

  /*   auth().userId method
  export default clerkMiddleware((auth, req) => {
  if (!auth().userId && isProtectedRoute(req)) {

    // Add custom logic to run before redirecting

    return auth().redirectToSignIn();
  }
});
*/

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};