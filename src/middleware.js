import { NextResponse } from "next/server";

const protectedRoutes = ['/', '/categories', '/cart', '/favorite', '/account'];

export default function middleware(req) {
    const verify = req.cookies.get("authToken");
    const url = req.url;

    // Extract the pathname from the URL
    const pathname = new URL(url, 'http://localhost:3000').pathname;

    // Check if the route is protected and the user is not authenticated
    if (protectedRoutes.includes(pathname) && !verify && !pathname.includes('/login')) {
        // Redirect to the login page if the user is not authenticated
        return NextResponse.redirect("http://localhost:3000/login");
    }

    return NextResponse.next();
}