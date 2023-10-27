import NextAuth from "next-auth";

import { authOptions } from "@/lib/session";

// The code defines a constant named handler, which is the result of invoking the NextAuth function with the provided authOptions. 
// This essentially creates an authentication handler that can process authentication requests.
const handler = NextAuth(authOptions);

// The code exports the handler as both GET and POST. This is common in Next.js for handling both GET and POST requests for the same route. 
// In the context of authentication, GET requests might be used for rendering authentication pages, and POST requests are typically used for submitting login or signup forms.
export { handler as GET, handler as POST };