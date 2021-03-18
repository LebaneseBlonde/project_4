from models.user_model import User
from data.pledge_data import pledge_list
from data.endorsement_data import endorsement_list

user_list = [
    User(
        username = 'ollie',
        email = 'ollie@ollie.com',
        password = 'password',
        pledges = [pledge_list[0], pledge_list[1], pledge_list[2], pledge_list[3]],
        endorsement = [endorsement_list[0], endorsement_list[1]]
    ),
    User(
        username = 'cal',
        email = 'cal@cal.com',
        password = 'password',
        pledges = [pledge_list[4], pledge_list[5], pledge_list[6], pledge_list[7], pledge_list[8]],
        endorsement = [endorsement_list[2]]
    )
]