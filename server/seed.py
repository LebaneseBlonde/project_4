from app import app, db
from data.user_data import user_list
from data.business_data import business_list


with app.app_context():
    try:
        print('Seeding starting')
        db.drop_all()
        print('Dropped database')
        db.create_all()
        print('Recreated database')

        db.session.add_all(user_list)
        print(f'{len(user_list)} users added')
        db.session.commit()

        db.session.add_all(business_list)
        print(f'{len(business_list)} businesses added')
        db.session.commit()

        print('Everything committed')
        print('Seeding successful')
    except Exception as e:
        print('There was an error seeding')
        print(e)

