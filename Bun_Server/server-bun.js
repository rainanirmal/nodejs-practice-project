import { serve } from 'bun';

serve(
    {
        fetch(Request) {
            const url = new URL(Request.url);

            if(url.pathname === "/") {
                return new Response("Hello from bun server !", {status: 200});
            }
            else if(url.pathname === "/home") {
                return new Response("Hello from bun home !", {status: 200});
            }
            else {
                return new Response("Page not found !", {status: 404});
            }
        },
        port: 3000,
        hostname: '127.0.0.1'
    }
)

//  bun server-bun.js