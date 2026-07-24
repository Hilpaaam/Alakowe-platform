import os
import subprocess

if __name__ == "__main__":
    port = os.getenv("PORT", "8000")
    subprocess.run([
        "gunicorn",
        "config.wsgi:application",
        "--bind", f"0.0.0.0:{port}",
    ])
