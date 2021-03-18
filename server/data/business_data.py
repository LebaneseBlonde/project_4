from models.business_model import Business
from data.fund_data import fund_list
from data.image_data import image_list


business_list = [
    Business(
        name = 'The Fox & Firkin', 
        address_1 = '316 Lewisham High St',
        address_2 =  'Lewisham',
        address_city = 'London',
        address_postcode = 'SE13 6JZ',
        category = 'Pubs & Bars',
        bio = 'Located in the heart of Lewisham, the Fox and Firkin is a home for live underground music, bringing a stellar cast of live acts, with an eclectic variety of sounds to get you moving. Punk, rave, reggae, ska, dub, drum n bass, gypsy, swing, blues, balkan, and everything in between! We’ve got a fantastic outdoor space for you to enjoy the sun in the summer months, where we host BBQs and outdoor parties. Innit Dough offer authentic stone baked pizzas made in our very own kitchen, and we\'ve got an ever-changing menu of artisan ales and craft beer. Kids welcome with adult supervision until 7pm. Well behaved dogs welcome until 7pm.',
        image = 'https://www.crowdfunder.co.uk/uploads/projects/1030786.jpg?1611064810',
        established = '1999',
        email = 'info@foxfirkin.com',
        password = 'password',
        fund = [fund_list[0]],
        gallery = [image_list[0], image_list[1], image_list[2]]
    ),
    Business(
        name = 'The Jazz Cafe',
        address_1 = '5 Parkway',
        address_2 =  'Camden',
        address_city = 'London',
        address_postcode = 'NW1 7PG',
        category = 'Venues',
        bio = "Jazz Café Camden is one of London's must iconic live music venues, and has played host to the likes of Cameo, Faithless, Bobby Womack, Grandmaster Flash and Alton Ellis to name but a few. With a capacity of 500, it is London's Premier intimate venue.",
        image = 'https://www.crowdfunder.co.uk/uploads/projects/895408.jpg?1590509554',
        established = '1990',
        email = 'info@thejazzcafelondon.com',
        password = 'password',
        fund = [fund_list[1]],
        gallery = [image_list[3], image_list[4]]
    ),
    Business(
        name = 'Yuu kitchen',
        address_1 = '29 Commercial St',
        address_2 =  'Spitalfields',
        address_city = 'London',
        address_postcode = 'E1 6NE',
        category = 'Restaurants',
        bio = "Yuu Kitchen opened its doors in October 2016 with Australian friends, Stephen Lowe (General Manager), a long time London restaurant manager and Jon de Villa (Head Chef), previously of Nobu, Nobu Berkeley, Zafferano and Bone Daddies. The restaurant is inspired by the flavours of south-east Asia and the Pacific rim in a nod to Jon’s heritage and travels. Yuu Kitchen collaborated with Hong Kong based artist, Lunatic, to commission some original artwork. The Illustrations that have been created have strong influences from Manga, Asian fashion, comic-book and pop culture – styles synonymous with Lunatic’s work.",
        image = 'https://www.thefoodaholic.co.uk/wp-content/uploads/2019/08/909-den-room.jpg',
        established = '2011',
        email = 'info@yuukitchen.com',
        password = 'password',
        fund = [fund_list[2]],
        gallery = [image_list[5], image_list[6]]
    ),
    Business(
        name = 'SkandiHus Pottery Studios',
        address_1 = '4 Tilia Road',
        address_2 =  'Clapton',
        address_city = 'London',
        address_postcode = 'E5 8JB',
        category = 'The Arts',
        bio = "The SkandiHus brand is inspired by a love for Scandinavian design in which beauty is radiated through light colours, the ample use of natural materials, minimalism and functionality. Like many Scandinavian designers before her, Stine believes that quality design should be affordable, stylish and relevant to the modern human being by providing minimal distraction and maximum aesthetic value. When Stine is not busy making her own designs, she teaches classes and events from her studio in de Beauvoir, Hackney. She is slowly building the clay revolution, one ball of mud at a time.",
        image = 'https://www.crowdfunder.co.uk/uploads/projects/1049509.jpg?1612647702',
        established = '2010',
        email = 'info@skandihusstudios.com',
        password = 'password',
        fund = [fund_list[3]],
        gallery = [image_list[7], image_list[8]]
    ),
    Business(
        name = "Jim's Cafe",
        address_1 = '4 Tilia Road',
        address_2 =  'Clapton',
        address_city = 'London',
        address_postcode = 'E5 8JB',
        category = 'The Arts',
        bio = "Jim’s Cafe has been a Chatsworth Road stalwart since the 1960’s, serving as a cafe and an ice cream factory, for six decades. Almost four years ago we took over the reigns, bringing our iconic burger and some great cocktails to the heart of Clapton. Over the past year we adapted our offering as much as we possibly could, offering takeaway food, cocktails and box meals both directly and through suppliers like Deliveroo to help us stay afloat.",
        image = 'https://www.crowdfunder.co.uk/uploads/projects/1059506.jpg?1613990240',
        established = '2010',
        email = 'info@jimscafe.com',
        password = 'password',
        fund = [fund_list[4]],
        gallery = [image_list[7], image_list[8]]
    ),
    Business(
        name = "The Mensroom Clothes Shop",
        address_1 = '4 Tilia Road',
        address_2 =  'Clapton',
        address_city = 'London',
        address_postcode = 'E5 8JB',
        category = 'The Arts',
        bio = "We've been privileged to run the Mensroom Clothing shop for the last 24 years serving the clientele of Winchmore Hill and the surrounding areas. We take great pride in providing good quality clothing at great prices in a friendly and relaxed environment. ",
        image = 'https://www.crowdfunder.co.uk/uploads/projects/1021384.jpg?1613586109',
        established = '2010',
        email = 'info@mensroom.com',
        password = 'password',
        fund = [fund_list[5]],
        gallery = [image_list[7], image_list[8]]
    )
]