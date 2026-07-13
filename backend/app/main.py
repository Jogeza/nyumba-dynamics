from fastapi import FastAPI

app = FastAPI(
    title="Nyumba Dynamics API",
    version="0.1.0",
    description="Property management and real estate platform API"
)


@app.get("/")
def home():
    return {
        "project": "Nyumba Dynamics",
        "status": "API ONLINE",
        "version": "0.1.0"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }