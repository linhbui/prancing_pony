# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# All users
arwen = User.create(
    username: "Arwen", 
    email: "arwen@prancingpony.rocks", 
    password: 'password',
    filepicker_url: "http://arwen-undomiel.com/images/arwen/Arwen_RotK_3.jpg"
)

king = User.create(
    username: "Witch King of Angmar",
    email: "king@prancingpony.rocks",
    password: "password",
    filepicker_url: "http://img4.wikia.nocookie.net/__cb20120303233955/lotr/images/6/6e/Witch_King.png"
)

sauron = User.create(
    username: "Sauron",
    email: "sauron@prancingpony.rocks",
    password: 'password', 
    filepicker_url: "http://www.desktopextreme.com/photos/Lord_of_the_Rings_Eye_of_Sauron_312200523253PM370.jpg"
)

gollum = User.create(
    username: "Gollum",
    email: "gollum@prancingpony.rocks",
    password: 'password', 
    filepicker_url: "http://www.washingtonindependentreviewofbooks.com/images/made/aadc04afc622ccbb/gollum_395_394.jpg"
)

galadriel = User.create(
    username: "Galadriel",
    email: "galadriel@prancingpony.rocks", 
    password: 'password',
    filepicker_url: "http://th02.deviantart.net/fs70/PRE/i/2014/074/4/e/galadriel_by_lotsoflowe-d7ac7tu.png"
)

elrond = User.create(
    username: "Elrond", 
    email: "elrond@prancingpony.rocks", 
    password: 'password', 
    filepicker_url: "http://wallpapertube.tk/wp-content/uploads/elrond-5.jpg"
)

pippin = User.create(
    username: "Pippin", 
    email: "pippin@prancingpony.rocks", 
    password: 'password',
    filepicker_url: "http://static.giantbomb.com/uploads/original/9/95613/2238536-pippin_sad_2.jpg"
)

sam = User.create(
    username: "Sam", 
    email: "sam@prancingpony.rocks", 
    password: 'password', 
    filepicker_url: "http://img4.wikia.nocookie.net/__cb20060508090312/lotr/images/4/45/Samwise2.jpg"
)

treebeard = User.create(
    username: "Treebeard", 
    email: "treebeard@prancingpony.rocks",
    password: 'password', 
    filepicker_url: "http://nickbsteves.files.wordpress.com/2014/03/torntreebeard.jpg"
)

frodo = User.create(
    username: "Frodo", 
    email: "frodo@prancingpony.rocks", 
    password: "password", 
    filepicker_url: "http://img1.wikia.nocookie.net/__cb20140709232205/eldragonverde/es/images/0/00/Frodo_anillo.jpg"
)

gandalf = User.create(
    username: "Gandalf", 
    email: "gandalf@prancingpony.rocks", 
    password: "password", 
    filepicker_url: "http://img3.wikia.nocookie.net/__cb20130209172436/lotr/images/8/8d/Gandalf-2.jpg"
)

merry = User.create(
    username: "Merry", 
    email: "merry@prancingpony.rocks", 
    password: "password", 
    filepicker_url: "http://s3.amazonaws.com/kidzworld_photo/images/2013111/1e0cf58a-2107-474a-b6c4-835da5041075/lotr.jpg"
)

saruman = User.create(
    username: "Saruman", 
    email: "saruman@prancingpony.rocks",
    password: "password", 
    filepicker_url: "http://s3.amazonaws.com/televicentro/portadas/saruman.jpg?mtime=20140528114103"
)

gimly = User.create(
    username: "Gimly",
    email: "gimly@prancingpony.rocks",
    password: "password",
    filepicker_url: "http://www.eonline.com/eol_images/Entire_Site/20101110/300.gimli.lr.121010.jpg"
)

# Items
ring = sauron.items.create!(
    title: "Ring",
    price: 1000000, 
    description: "Magical elven rings in limited quantity. Each ring is imbued with magical power that enhances user’s health and aids fighting depression, fatigue, indigestion, muscle cramp, headache, constipation, diarrhea, and death.*

*This statement has not been verified by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.",
   image_url: "http://transmissionsmedia.com/wp-content/uploads/2012/09/lotr.jpg",
   quantity: "19",
)

sword = elrond.items.create!(
    title: "Elrond's Sword Repair Service",
    price: 300,
    description: "Master blacksmith Elrond finally offers his service online. After buying the item, an email will be sent for instruction. Print the shipping label and ship your sword to Rivendell via Middle-earth Post Services. The sword will be returned in 10 days. 30-day money back guarantee.",
    image_url: "http://tolkiengateway.net/w/images/thumb/e/ea/Noble_Collection_-_And%C3%BAril.jpg/250px-Noble_Collection_-_And%C3%BAril.jpg",
    quantity: "unlimited"
)

draught = treebeard.items.create!(
    title: "Ent Draught",
    price: 30,
    description: "Best Ayurvedic medicine of all time, now available. Too short to court the ladies? Ever laughed at for being vertically challenged? Ent-draught is here to help. Regular consumption of ent-draught helps your physical growth even in adulthood.* All organic, non-GMO and growth hormone-free.
*This statement has not been verified by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.",
    image_url: "http://img2.wikia.nocookie.net/__cb20121201081302/lotr/images/a/a5/Pippin_and_Ent-Draught.png",
    quantity: "10"
)

entry = gollum.items.create!(
    title: "Secret Entry to Mordor",
    price: 10,
    description: "The front door of Mordor is closed, but Smeagol knows another way, yes we do. Discountes for hobbitses, especially for the thief hobbitses having my Precious, gollum, gollum.",
    image_url: "http://img1.wikia.nocookie.net/__cb20120621003755/lotr/images/e/ec/Mordor%27s_DuoSpire.png",
    quantity: "unlimited",
)

bread = galadriel.items.create!(
    title: "Lembas Bread", 
    price: 50,
    description: "The famous elven bread is now back, manufactured with the traditional recipe. One bite should fill a grown man’s stomach. Sold in bulk.",
    image_url: "http://img1.wikia.nocookie.net/__cb20121201075601/lotr/images/1/14/Lembas_bread.png",
    quantity: "unlimited"
)

hair = galadriel.items.create!(
    title: "Hair of Galadriel",
    price: 100,
    description: "The treasure that the mighty Feanor could not lay his hands on, now available in limited quantity. Get yours now today!",
    image_url: "http://1.bp.blogspot.com/-nLZljythoto/Ua5mw_1EtiI/AAAAAAAADKA/J_9krkaZQkM/s1600/galadriel+8.jpg",
    quantity: 10
)

cloak = galadriel.items.create!(
    title: "Elven cloak",
    price: 200,
    description: "This cloak helps blending with the nature. One size fits all.",
    image_url: "http://briellecostumes.typepad.com/.a/6a0134804df3cb970c016760554870970b-pi",
    quantity: 10
)

pipeweed = pippin.items.create!(
    title: "Shire Pipeweed",
    price: 5,
    description: "The backordered Southfarthing Longbottom pipeweed is now available! Simply the finest pipeweed on Middle-earth. Have a taste of hobbit-made, Maiar-approved smoke.",
    image_url: "http://img3.wikia.nocookie.net/__cb20121117101001/lotr/images/b/b9/Merry.jpg",
    quantity: "unlimited"
)

rope = galadriel.items.create!(
    title: "Elven Rope",
    price: 100,
    description: "A Swarovski crystal vial containing water from Galadriel’s fountain and the light of Eärendil's star. Usage: use as a lantern, or rub a drop of water in for a temporary alleviation of a curse.",
    image_url: "http://img2.wikia.nocookie.net/__cb20140428205712/lotr/images/f/fb/Tumblr_inline_mlndwhvKLr1qz4rgp.jpg",
    quantity: 1
)

gardening = sam.items.create!(
    title: "Sam's Gardening Service",
    price: 10,
    description: "Shire’s best gardener ever. Hourly wage is negotiable.",
    image_url: "http://media-cache-ak0.pinimg.com/236x/99/f6/8b/99f68b40b290dbfbadb4d3907e1d06e5.jpg"
)

bodyguard = sam.items.create!(
    title: "Sam's Bodyguard Service",
    price: 40,
    description: "Will follow anywhere to protect the client, even to the mountain of Mordor. Ask today!",
    image_url: "http://www.crankycritic.com/archive02/papers/lotr2/lotr2_sam-frodo_800.jpg"
)

light = galadriel.items.create!(
    title: "Light of Earendil",
    price: 50,
    description: "A Swarovski crystal vial containing water from Galadriel’s fountain and the light of Eärendil's star. 
    Usage: use as a lantern, or rub a drop of water in for a temporary alleviation of a curse.",
    image_url: "http://i.ytimg.com/vi/zp9ThyRK9IM/maxresdefault.jpg",
    quantity: 2
)

house = frodo.items.create!(
    title: "House on Side of Hill",
    price: 1000,
    description: "I received this house from my uncle. I need to leave Shire very soon, so I’m selling it for half the price.",
    image_url: "http://1.bp.blogspot.com/-3KI5fg3J7eU/UVKA6Hjn14I/AAAAAAAAAsY/ZypHvGe2egg/s1600/BILBO%27+S+HOUSE.jpg",
    quantity: 1
)

ringbearer = frodo.items.create!(
    title: "Ring-bearer Service",
    price: 30000,
    description: "Special courier service for ring. Will carry any kind of ring anywhere on Middle-earth. The price is negotiable.",
    image_url: "http://writerunboxed.com/wp-content/uploads/2006/04/Frodo20with20ring.jpg"
)

# Reviews
king.reviews.create!(
    content: "This precious ring has completely changed my life! Now I cannot sleep without my precious. My precious…",
    stars: 5,
    item_id: ring.id
)

