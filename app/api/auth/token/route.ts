import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

// The code retrieves a JWT secret from the environment variables using process.env.NEXTAUTH_SECRET. 
// This secret is used to decode the JWT token, and it should be securely stored and kept secret.
const secret = process.env.NEXTAUTH_SECRET;

// The code defines an asynchronous function named GET, which takes a req (NextRequest) object as its parameter. In Next.js, 
// GET functions handle incoming GET requests.
export async function GET(req: NextRequest) {
    const token = await getToken({ req, secret, raw: true });

    return NextResponse.json({ token }, { status: 200 });
}

// Inside the GET function, it uses the getToken function to retrieve a JWT token. 
// The getToken function is passed an object with the following properties
// req: The request object from the function parameter, representing the incoming request.
// secret: The JWT secret obtained from the environment variables.
// raw: true: This option indicates that the returned token should be in raw format, without any additional processing.

// After retrieving the JWT token, the function constructs a response using NextResponse.json. 
// It returns the token in a JSON response with an HTTP status code of 200 (OK).