import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)", "/"]);
const isWebhooksRoute = createRouteMatcher(["/api/webhooks/clerk(.*)"]);

export default clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request) && !isWebhooksRoute(request)) {
    await auth.protect();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
