from models.tier_model import Tier

tier_list = [
    Tier(
        price = 5,
        perks = ['Our deepest gratitude for your support'],
        name = 'Supporter'
    ),
    Tier(
        price = 10,
        perks = ['Buy one get one free voucher for your next drink once we re-open'],
        name = 'Strong Supporter'
    ),
    Tier(
        price = 25,
        perks = ['Free entry to one live music event'],
        name = 'Serious Supporter'
    ),
    Tier(
        price = 50,
        perks = ['Free entry to two live music events', 'Buy one get one free voucher for your next drink once we re-open'],
        name = 'Big Bwoi Supporter'
    )
]