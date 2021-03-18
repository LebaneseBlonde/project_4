from models.tier_model import Tier
from data.perk_data import perk_list

tier_list = [
    Tier(
        price = 5,
        perks = [perk_list[0]],
        name = 'Supporter',
        fund_id = 1
    ),
    Tier(
        price = 10,
        perks = [perk_list[1]],
        name = 'Strong Supporter',
        fund_id = 1
    ),
    Tier(
        price = 25,
        perks = [perk_list[2]],
        name = 'Serious Supporter',
        fund_id = 2
    ),
    Tier(
        price = 50,
        perks = [perk_list[3]],
        name = 'Big Bwoi Supporter',
        fund_id = 2
    ),
    Tier(
        price = 5,
        perks = [perk_list[4]],
        name = 'Supporter',
        fund_id = 3
    ),
    Tier(
        price = 10,
        perks = [perk_list[5]],
        name = 'Strong Supporter',
        fund_id = 3
    ),
    Tier(
        price = 25,
        perks = [perk_list[6]],
        name = 'Serious Supporter',
        fund_id = 4
    ),
    Tier(
        price = 50,
        perks = [perk_list[7]],
        name = 'Big Bwoi Supporter',
        fund_id = 4
    ),
    
]