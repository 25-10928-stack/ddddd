import http.server
import socketserver
import os
import sys

# Ensure UTF-8 output encoding for Windows command prompt
if sys.platform.startswith('win'):
    sys.stdout.reconfigure(encoding='utf-8')

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

if __name__ == '__main__':
    os.chdir(DIRECTORY)
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print("=====================================================")
        print("POLISYNC 행정학 시뮬레이터 서버가 시작되었습니다!")
        print(f"브라우저 주소: http://localhost:{PORT}")
        print("=====================================================")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n서버가 종료되었습니다.")
