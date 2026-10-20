# FarmIQ

An AI-powered agricultural advisory platform that helps farmers with crop recommendations, irrigation scheduling, soil health monitoring, market intelligence, IoT sensor management, and more — all through a mobile-first web app.

---

## Project Structure

```
FarmIQ-main/
├── backend/                  # Python FastAPI backend
│   ├── .env                  # Database configuration
│   ├── venv/
│   │   └── main.py           # FastAPI app (all routes, models, DB logic)
│   └── start_server.bat      # Launches the server on port 8000
│
└── FarmIQ-main/              # React/Vite frontend
    ├── package.json
    ├── vite.config.js
    └── src/
        ├── App.jsx            # Root component — navigation state machine
        ├── data/modules.js    # Master data: module catalog and all demo content
        ├── constants/
        │   ├── languages.js   # 11 supported language labels
        │   └── icons.jsx      # SVG icon definitions
        ├── pages/             # 7 top-level screen components
        └── components/        # common/, layout/, modules/ sub-directories
```

---

## Tech Stack

### Frontend
| Library | Version | Purpose |
|---|---|---|
| React | ^19.0.0 | UI framework |
| Vite | ^8.0.5 | Dev server and bundler |
| Tailwind CSS | ^4.0.0 | Utility-first styling |
| TypeScript | ^5.7.0 | Type checking (dev only, source is JSX) |

### Backend
| Library | Purpose |
|---|---|
| FastAPI | ASGI web framework |
| SQLAlchemy 2.x | ORM with PostgreSQL |
| psycopg (v3) | PostgreSQL driver |
| Pydantic v2 | Request/response validation |
| bcrypt | Password hashing |
| uvicorn | ASGI server |

---

## Prerequisites

- **Node.js** (v18+) and **npm**
- **Python** (3.11+)
- **PostgreSQL** (running locally on port 5432)

---

## Getting Started

### 1. Set up the database

Create a PostgreSQL database named `FarmIQ`:

```sql
CREATE DATABASE "FarmIQ";
```

### 2. Configure the backend environment

Edit `backend/.env` to match your PostgreSQL credentials:

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=FarmIQ
DB_USER=postgres
DB_PASSWORD=your_password
```

### 3. Start the backend

```bash
cd backend
python -m venv venv
venv\Scripts\activate        # Windows
# source venv/bin/activate   # macOS/Linux

pip install fastapi "uvicorn[standard]" sqlalchemy psycopg pydantic[email] bcrypt python-dotenv
uvicorn main:app --host 127.0.0.1 --port 8000 --reload
```

Or use the provided script:

```bash
cd backend
start_server.bat
```

The API will be available at `http://127.0.0.1:8000`. Tables are created automatically on first startup.

### 4. Start the frontend

```bash
cd FarmIQ-main
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## Features

### Authentication
- **Register** — full name, email, mobile number (with country code), role, and password. Password must be 8+ characters with at least one uppercase letter and one number.
- **Login** — mobile number + password. Supports 11 country codes including India (+91), USA (+1), UK (+44), and others.
- **Continue without account** — available from the login screen for demo access.

### Supported Roles
- `farmer`
- `farm_manager`
- `agricultural_expert`

### Module Hub (17 modules)

| Group | Module |
|---|---|
| **Manage** | Farm Management, Farming Calendar, Alerts & Notifications, Reports & Analytics, Device Management, Profile & Settings |
| **Plan** | Crop Recommendation, Fertilizer Recommendation, Yield Prediction, Market Intelligence |
| **Monitor** | Smart Irrigation, Soil Health, IoT Sensor Monitoring, Crop Image Analysis |
| **Learn** | Knowledge Center |
| **Administration** | MLOps Dashboard, Administration & Roles |

Modules with fully custom UIs: Farm Management, Crop Image Analysis, Farming Calendar, Knowledge Center, Profile & Settings, Device Management.

All other modules display structured demo data (metrics + detail rows) via a shared generic layout.

### AI Chat Assistant
Chat interface with quick-action shortcuts for crop advice, irrigation, fertilizer, and market prices. Currently renders a demo seed conversation — LLM integration is not yet connected.

### IoT Sensor Integration
Backend API accepts and stores sensor readings (soil moisture, temperature, humidity) keyed by `device_id`. The frontend Device Management module shows paired devices and their live status.

### Language Support
11 Indian and international languages available in the settings panel: English, Hindi, Marathi, Telugu, Tamil, Kannada, Gujarati, Bengali, Punjabi, Malayalam, and Odia.

---

## API Reference

Base URL: `http://127.0.0.1:8000`

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/` | Backend health check |
| `GET` | `/api/health` | Database connectivity check |
| `POST` | `/api/auth/register` | Register a new user (returns 201) |
| `POST` | `/api/auth/login` | Sign in with mobile + password |
| `POST` | `/api/sensor-readings/` | Submit a new sensor reading |
| `GET` | `/api/sensor-readings/` | Fetch the latest 100 sensor readings |

Interactive API docs (Swagger UI): `http://127.0.0.1:8000/docs`

### Register payload example
```json
{
  "full_name": "Ravi Kumar",
  "email": "ravi@example.com",
  "mobile": "+919876543210",
  "role": "farmer",
  "password": "Secure123"
}
```

### Sensor reading payload example
```json
{
  "device_id": "esp32-field-hub-01",
  "soil_moisture": 62.5,
  "temperature": 27.3,
  "humidity": 71.0
}
```

---

## Development Notes

- **No client-side router** — all navigation is state-driven in `App.jsx`. Browser back/forward and deep linking are not supported.
- **No auth session persistence** — there is no JWT or token storage. A page refresh will return the user to the login screen.
- **All module data is static demo content** — only auth and sensor readings actually talk to the backend. Features like yield prediction, market prices, and crop recommendations are populated with hardcoded demo values from `src/data/modules.js`.
- **Password hashing** — bcrypt with 6 rounds in development. Increase `BCRYPT_ROUNDS` to 12+ before deploying to production.
- **CORS** — the backend allows requests from `localhost:5173` (Vite dev server) only. Update the `allow_origins` list in `main.py` for production deployments.

---

## Scripts

### Frontend
```bash
npm run dev       # Start development server
npm run build     # Production build
npm run preview   # Preview the production build
npm run format    # Format code with oxfmt
```

### Backend
```bash
uvicorn main:app --reload          # Start with hot reload
uvicorn main:app --host 0.0.0.0    # Expose on all interfaces
```
