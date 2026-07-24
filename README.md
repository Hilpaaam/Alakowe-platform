# Alakowe Platform

Minimalistic blue-themed fashion shipping platform.

- Backend: Django + PostgreSQL + Stripe (shipping API)
- Frontend: Next.js + Tailwind (blue theme)

## Local setup

### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt

# Create .env from .env.example and fill values
cp .env.example .env

python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

API will be at `http://localhost:8000`.

### Frontend

```bash
cd frontend
npm install

# Create .env.local from .env.local.example
cp .env.local.example .env.local

### Top Level structure

alakowe-platform/
  README.md
  .gitignore

  backend/
    requirements.txt
    .env.example
    .replit
    main.py
    manage.py
    config/
      __init__.py
      settings.py
      urls.py
      wsgi.py
      asgi.py
    core/
      __init__.py
      models.py
      admin.py
    shipping/
      __init__.py
      services.py
      serializers.py
      views.py
      urls.py

  frontend/
    package.json
    .env.local.example
    next.config.js
    tailwind.config.ts
    postcss.config.js
    tsconfig.json
    app/
      layout.tsx
      globals.css
      page.tsx
    components/
      Navbar.tsx
    app/shipping/
      page.tsx
    app/dashboard/
      page.tsx

  render.yaml
npm run dev
```

Frontend will be at `http://localhost:3000`.

## Deployment (Render)

Use `render.yaml` to deploy both services.
