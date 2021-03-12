from models.fund_model import Fund
from data.endorsement_data import endorsement_list
from data.update_data import update_list
from data.pledge_data import pledge_list

fund_list = [
    Fund(
        subscription = True,
        fund_goal = 14000,
        funds_raised = 13276,
        description = 'The Fox and Firkin doors have sadly closed! We are facing one of the most challenging times, struggling to survive and plan for the future of one of our community’s favourite grass roots live music venues. We have been forced to close to support the UK’s health service and reduce the risk to the public – however we are still faced with £14K a month in running costs of the venue. Since 16th December we have lost over £80K and day by day we continue to mount up more debt. We have listened to our community and decided to ask for your help...if we could survive without it, then we would not be asking. Our venue is what it is because of YOU and if you can offer any support to HELP us to keep it going and keep our doors open in the future, we will be grateful and continue to give you the experience that so many love at The Fox and Firkin!',
        business_id = 1,
        endorsements = [endorsement_list[0], endorsement_list[1], endorsement_list[2]],
        updates = [update_list[1]],
        pledges = [pledge_list[0], pledge_list[1]]
    ),
    Fund(
        subscription = False,
        fund_goal = 35000,
        funds_raised = 24232,
        description = 'Once again, The Jazz Cafe is forced to close in line with government regulations regarding the coronavirus pandemic. We are incredibly grateful for the support we have received to date from our community, our sincere thanks go out to all the donators who purchased a reward from our Crowdfunder over the summer. We truly look forward to welcoming you back if you haven’t joined us this Autumn. We are now closed but even our new, socially distanced format at less than a third of capacity is impossible to sustain long term. The venue continues to lose tens of thousands per month off the back of incalculable losses throughout lockdown. Your support will help us secure the future of the venue and ensure that we can pay staff, musicians and freelancers whilst keeping live music opportunities available for as many as possible.',
        business_id = 2,
        updates = [update_list[0]],
        pledges = [pledge_list[2], pledge_list[3]]
    ),
    Fund(
        subscription = True,
        fund_goal = 10000,
        funds_raised = 8296,
        description = "Yuu employs 18 staff and has managed to successfully keep the team together through the lockdown, and has also succeeded in getting them back working and doing what they love! We are looking for support to keep our doors open to all our guests and friends coming to experience a gastronomic delight and keep our guys cooking and creating. We plan to use the support to continue to make sure we are a COVID-safe venue, and upgrade Yuu to be able to continue to give the best experience possible for all those that come down to dine with us.  We feel the area has changed a lot over the past few years and with venues like Yuu and other local small businesses, the area is starting to thrive.",
        business_id = 3,
        updates = [update_list[2]],
        pledges = [pledge_list[4], pledge_list[5]]
    ),
    Fund(
        subscription = False,
        fund_goal = 11000,
        funds_raised = 11715,
        description = "We are dreaming of the end of the pandemic. We strongly believe that once the lockdowns are over, the world will see a surge of creativity; including a mini clay revolution! We would love to help the pottery students and teachers of the future to maximise their potential during that period, by opening our third studio with more of an all inclusive community reach. That is our dream; a slightly ambitious one right now, but we know we can realise it! The Covid-19 pandemic forced us to shut down our studios in spring of 2020 and again in the autumn of 2020. Our studios remain closed. The lockdowns have had a big impact on our finances. They have also prevented our students from accessing a vital creative outlet, proven to improve mental health. We would use financial assistance to: help us pay rent and bills, fund the raw materials and logistics needed to get this initiative off the ground, purchase recording equipment needed to run the online classes, and fund website upgrades to securely host videos that are only accessible to students.",
        business_id = 4,
        updates = [update_list[3], update_list[4]],
        pledges = [pledge_list[6], pledge_list[7], pledge_list[8]]
    )
]