#!/bin/sh

echo "Waiting for database..."

while ! nc -z postgres_db 5432; do
  sleep 0.5
done

echo "Database is up!"

uvicorn app.main:app --host 0.0.0.0 --port 8000
