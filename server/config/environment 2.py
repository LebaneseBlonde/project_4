import os

db_URI = os.getenv('DATABASE_URL', 'postgres://localhost:5432/upkeep_db')
secret = os.getenv('SECRET', 'cheese door ollie is a twat phone mate lightbulb secret running out of words waterbottle')