#!/usr/bin/env python3
import http.server
import socketserver

PORT = 5000

class MyHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

with socketserver.TCPServer(("0.0.0.0", PORT), MyHandler) as httpd:
    print(f"Server running at http://0.0.0.0:{PORT}/")
    print("Press Ctrl+C to stop the server")
    httpd.serve_forever()
