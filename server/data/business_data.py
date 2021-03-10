from models.business_model import Business

business_list = [
    Business(
        name = 'The Fox & Firkin',
        location = {
            'line_1' : '316 Lewisham High St',
            'county' : 'Lewisham',
            'city' : 'London',
            'postcode' : 'SE13 6JZ'
        },
        category = 'Pubs/Bars',
        bio = 'Located in the heart of Lewisham, the Fox and Firkin is a home for live underground music, bringing a stellar cast of live acts, with an eclectic variety of sounds to get you moving. Punk, rave, reggae, ska, dub, drum n bass, gypsy, swing, blues, balkan, and everything in between! We’ve got a fantastic outdoor space for you to enjoy the sun in the summer months, where we host BBQs and outdoor parties. Innit Dough offer authentic stone baked pizzas made in our very own kitchen, and we\'ve got an ever-changing menu of artisan ales and craft beer. Kids welcome with adult supervision until 7pm. Well behaved dogs welcome until 7pm.',
        image = 'https://www.crowdfunder.co.uk/uploads/projects/1030786.jpg?1611064810',
        established = 1999,
        email = 'info@foxfirkin.com'
    )
]