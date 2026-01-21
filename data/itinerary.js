/*
obj.intro.title
obj.intro.description

obj.hotels
obj.hotels.title
obj.hotels.reviews
obj.hotels.distance
obj.hotels.stars
obj.hotels.price
obj.hotels.features
obj.hotels.description

obj.activities[x].title
obj.activities[x].image
obj.activities[x].features[n]
obj.activities[x].description

obj.items[x].url = [used as key]
obj.items[x].events[n]

itinerary.js = another name for posts. Contains the text and post specific info
location-activities.js = database that pairs location URLs to array that contains index numbers of activities that match location
activities.js (formerly viator-db.js) = database of ALL activites regardless of affiliate


*/


const itinerary = [

	{
		url:"atlanta-georgia-us",
		intro:{
			title:"Your trip to Atlanta for 3 days",
			description:"Atlanta is a vibrant city located in Georgia, United States. With its rich history and diverse culture, it offers a multitude of must-see attractions that cater to all interests. From iconic landmarks to world-class museums, there is something for everyone to explore and discover. Food enthusiasts will delight in the city's renowned culinary scene, with a wide range of restaurants offering delicious and diverse cuisine. For those who enjoy outdoor activities, Atlanta's pleasant April weather provides the perfect opportunity to explore its numerous parks, trails, and recreational areas. Additionally, the city is full of hidden gems waiting to be uncovered, adding an element of surprise and excitement to your solo adventure.",
		},

		hotels:[
			{
				title:"Stonehurst Place",
				date:"Tue Mar 05 2024 01:00:00 GMT-0500 (Eastern Standard Time)",
				reviews:670,
				distance:"1.7 miles from the center",
				stars:"4-star Hotel",
				price:"$273.00 - $473.00 per night",
				features: ["Free breakfast","Free parking","Free High Speed Internet (WiFi)"],
				description:"Charming hotel boasting delightful common spaces, sophisticated decor, and modern conveniences. Luxurious rooms with extravagant bathrooms, multi-head showers, deep soaking tubs, and heated towel racks. Delectable 3-course breakfasts, picturesque outdoor spaces, and convenient location in a lovely neighborhood."
			},
			{
				title:"2023 Glenn Hotel, Autograph Collection",
				date:"Tue Mar 05 2024 01:00:00 GMT-0500 (Eastern Standard Time)",
				reviews:605,
				distance:"0.1 miles from the center",
				stars:"4-star Hotel",
				price:"$195.00 - $362.00 per night",
				features: ["Valet parking","Free High Speed Internet (WiFi)","Fitness Center with Gym / Workout Room"],
				description:"Rooftop bar with stunning Atlanta skyline and Olympic park views, live music, and delicious cocktails. Flavorful and diverse dining options, including top-notch Brussels sprouts, inventive egg rolls, and incredible shrimp and grits. Conveniently located near State Farm Arena with comfortable rooms and friendly staff. Nearby attractions and restaurants add to the appeal."
			},
			{
				title:"Sugar Magnolia Bed & Breakfast",
				date:"Tue Mar 05 2024 01:00:00 GMT-0500 (Eastern Standard Time)",
				reviews:207,
				distance:"1.7 miles from the center",
				stars:"3-star Hotel",
				price:"$226.00 - $249.00 per night",
				features: ["Free breakfast","Free parking","Free High Speed Internet (WiFi)"],
				description:"Charming B&B with Victorian architecture, comfortable rooms, delicious breakfasts, and porches with great views. Located in a historic area, walking distance to restaurants and attractions."
			},
		],

		days:[
			{
				description:"Welcome to Atlanta, Georgia! Get ready for an exciting first day of your trip. Based on your interests in Must-see Attractions, Sports Culture, and Art and Culture, we have prepared a fantastic itinerary for you. First, head to the iconic <a href=\"\">Mercedes Benz Stadium</a>, a must-see attraction for sports enthusiasts. Experience the energy and history of this world-class stadium. Next, visit the renowned <a href=\"\">High Museum of Art</a>, where you can immerse yourself in the vibrant art and culture scene of Atlanta. For lunch, indulge in a classic Atlanta experience at <a href=\"\">The Varsity</a>, a beloved eatery known for its delicious burgers and hot dogs. Afterward, explore the beautiful <a href=\"\">Atlanta Botanical Garden</a>, a serene oasis filled with stunning flora and fauna. In the evening, enjoy a delightful dinner at <a href=\"\">South City Kitchen Midtown</a>, a top-rated eatery known for its Southern cuisine with a modern twist. Get ready for an unforgettable day filled with attractions, art, culture, and delicious food. Enjoy your trip to Atlanta!",
				activities:[
				{title:"Mercedes Benz Stadium",
				date:"Tue Mar 05 2024 01:00:00 GMT-0500 (Eastern Standard Time)",
				image:"",
				rating:100,
				features:["Arenas & Stadiums","Duration: More than 3 hours"],
				discription:"Mercedes Benz Stadium in Atlanta is a fantastic location for you to visit during your trip. As someone who is interested in sports culture, this stadium will surely captivate you. The stadium is well-known for its state-of-the-art design and impressive architecture. It is home to the Atlanta Falcons football team and Atlanta United FC soccer team, making it a hub for sports enthusiasts. The stadium also offers guided tours, which are highly recommended if you have the time. These tours allow you to explore the stadium's facilities and learn interesting facts about its history. The staff is known for being friendly and helpful, ensuring a pleasant experience. Additionally, the reasonably priced food and drinks make it convenient for you to enjoy a meal or a snack. If you want the best view, opt for the lower seats. Make sure to arrive early to avoid long lines getting in. Enjoy your visit!"},

				{title:"High Museum of Art",
				date:"Tue Mar 05 2024 01:00:00 GMT-0500 (Eastern Standard Time)",
				image:"",
				rating:1969,
				features:["Speciality Museums"],
				discription:"Located in Atlanta, Georgia, the High Museum of Art is a captivating destination that should be on your itinerary if you have a love for art. The museum showcases a diverse collection of art spanning various periods and styles, ensuring there is something to pique your interest. Past visitors highly recommend making it a priority stop, as the museum offers a fantastic photography exhibit that is sure to impress. If you prefer a quieter experience, consider visiting on a weekday when the museum is less crowded. In addition to its impressive art collection, the High Museum of Art is also architecturally stunning, making it a great place to visit and appreciate both art and culture."},

				{title:"The Varsity",
				date:"Tue Mar 05 2024 01:00:00 GMT-0500 (Eastern Standard Time)",
				image:"",
				rating:5551,
				features:["Restaurant","American • Fast Food • $","See Hours"],
				discription:"Located in Atlanta, Georgia, The Varsity is a beloved eatery that should be on your radar during your visit. Known for its delicious chili dogs and cheeseburgers, this iconic establishment is a must-do for any food enthusiast. The onion rings are a must-try, adding an extra layer of flavor to your meal. The Varsity offers good, cheap, and fast food, making it a convenient choice for a quick bite to eat. Beyond the culinary delights, the atmosphere and history of The Varsity add to its appeal. As a solo traveler interested in sports culture and art, you'll appreciate the vibrant energy and cultural significance of this Atlanta institution. Don't miss the chance to experience The Varsity's legendary fare and immerse yourself in the city's rich culinary heritage."},

				{title:"Atlanta Botanical Garden",
				date:"Tue Mar 05 2024 01:00:00 GMT-0500 (Eastern Standard Time)",
				image:"",
				rating:456,
				features:["Gardens","Duration:1-2 hours"],
				discription:"Located in Atlanta, Georgia, the Atlanta Botanical Garden is a captivating destination that will surely pique your interest. With its stunning Garden Lights, Holiday Nights event, you can immerse yourself in a magical experience during the Christmas holidays. Be sure to purchase tickets in advance and wear comfortable walking shoes to fully enjoy the spectacular view. As an art and culture enthusiast, you won't want to miss the Origami in the Garden exhibit, featuring intricate metal sculptures inspired by origami designs. Additionally, the Inside Out exhibit is worth exploring. If you're traveling with children, they can participate in a fun scavenger hunt in the garden, while the Children's Garden offers areas for climbing and exploration. Reserve your tickets online to make the most of your day at this enchanting botanical garden."},

				{title:"South City Kitchen Midtown",
				date:"Tue Mar 05 2024 01:00:00 GMT-0500 (Eastern Standard Time)",
				image:"",
				rating:1980,
				features:["Restaurant","American • $$","See Hours"],
				discription:"South City Kitchen Midtown in Atlanta is a fantastic choice for your visit. This charming restaurant offers fine southern dining with delightfully southern food and culinary flare. The casual atmosphere combined with an upscale menu and friendly staff make it a perfect spot for a memorable dining experience. You'll be pleased to know that South City Kitchen Midtown has received A++++ safety protocols for COVID, ensuring your safety and peace of mind. If you're looking for a nice brunch, their chicken & waffles come highly recommended. The portions are generous, and the prices are reasonable, allowing you to enjoy large portions of delicious Southern food without breaking the bank. With its combination of great food, warm ambiance, and excellent safety measures, South City Kitchen Midtown is a must-visit for any food lover traveling to Atlanta."},

			]},
			{
				description:"Start your day with a delicious breakfast at <a href=\"\">Bacchanalia</a>, where you can indulge in farm-to-table cuisine. After breakfast, head to the historic <a href=\"\">Fox Theatre</a> for a tour of this iconic Atlanta landmark. After your tour, grab a quick lunch at a nearby cafe before heading to <a href=\"\">Atlas</a> for a fine dining experience. Indulge in a multi-course meal paired with exquisite wines at this award-winning restaurant. After dinner, take a leisurely stroll around the nearby <a href=\"\">Piedmont Park</a> to enjoy the beautiful scenery. End your evening with a nightcap at a rooftop bar overlooking the city skyline.",
				activities:[
				{
					title:"Bacchanalia",
					date:"Tue Mar 05 2024 01:00:00 GMT-0500 (Eastern Standard Time)",
					image:"",
					rating:417,
					features:["Restaurant","American • Contemporary • $$$$"],
					discription:"Bacchanalia in Atlanta is a renowned eatery that offers an extraordinary dining experience. The restaurant has received accolades for its Michelin-star quality dishes, including delectable options like crab cakes, salmon, and the Savalin. Don't miss out on their delightful sweet potato dessert. While there have been occasional instances of slow service, the overall experience is exceptional. Bacchanalia boasts modern and tasteful decor, creating an inviting ambiance. Their four-course menu, paired with a well-curated wine list, ensures a memorable meal. For those seeking privacy, the restaurant offers a curtained off private area. The pace of the meal is well-timed, allowing you to savor each course. As an art and culture enthusiast, you'll appreciate the attention to detail and the culinary artistry at Bacchanalia."
				},
				{
					title:"Fox Theatre",
					date:"Tue Mar 05 2024 01:00:00 GMT-0500 (Eastern Standard Time)",
					image:"",
					rating:4468,
					features:["Architectural Buildings", "Duration: 2-3 hours"],
					discription:"Located in Atlanta, Georgia, the Fox Theatre is a stunningly beautiful and historic venue that will captivate you with its grandeur. As an art and culture enthusiast, you will be amazed by the architectural beauty and the rich history of this iconic theater. The seating is excellent, providing unobscured sight lines and great acoustics, ensuring an immersive experience. If you're interested in learning more about the secrets and history within the walls of the Fox Theatre, don't miss the VIP tour, where knowledgeable guides will take you on a journey through this beautifully restored landmark. As you explore the backstage areas, you'll gain a deeper appreciation for the magic that happens behind the curtains. A visit to the Fox Theatre is a must for anyone seeking a unique and enriching cultural experience."
				},
				{
					title:"Atlas",
					date:"Tue Mar 05 2024 01:00:00 GMT-0500 (Eastern Standard Time)",
					image:"",
					rating:175,
					features:["Restaurant","American • Bar • $$$$"],
					discription:"Atlas, located in Atlanta, Georgia, is a remarkable eatery that offers unparalleled cuisine and service in a serene and beautiful space. The restaurant boasts a traditional and elegant decor that exudes charm without being ostentatious. One of the highlights of Atlas is its impressive art collection, which sets it apart from other restaurants in Atlanta. The acoustics at Atlas are excellent, allowing for a pleasant dining experience where you can easily converse with your companions. The menu offers a variety of delicious dishes, including the cod, the 'winter' salad, the bread service, and the chocolate sphere, all of which have received positive reviews. If you appreciate art and culture, Atlas is a must-visit destination during your stay in Atlanta."
				},

			]},
			{
				description:"Start your day at the <a href=\"\">Children's Museum of Atlanta</a>, where kids can explore interactive exhibits and hands-on activities. Afterward, head to <a href=\"\">The Breman Museum</a> to learn about the history of Jewish culture in Atlanta. Grab lunch at <a href=\"\">The Capital Grille</a>, known for its delicious steaks and upscale dining experience. In the afternoon, visit the <a href=\"\">Atlanta History Center</a> to dive into the city's rich past through exhibits and guided tours. End your day with a stroll through the beautiful gardens and historic homes on the center's grounds. This itinerary offers a perfect mix of education, culture, and dining experiences in Atlanta.",
				activities:[
				{
					title:"Children's Museum of Atlanta",
					date:"Tue Mar 05 2024 01:00:00 GMT-0500 (Eastern Standard Time)",
					image:"",
					rating:348,
					features:["Children's Museums","Duration:1-2 hours"],
					discription:"The Children's Museum of Atlanta in Atlanta is a delightful destination that will keep you busy and entertained during your visit. This family-friendly museum offers a wide range of activities and exhibits that are perfect for children of all ages. From interactive displays to hands-on learning experiences, there is something for everyone to enjoy. The museum's friendly and helpful staff ensures that you have a memorable and enjoyable time exploring the various exhibits. Whether you're interested in art, culture, or simply looking for a fun-filled afternoon, the Children's Museum of Atlanta is a must-visit attraction. Kids love it here, and you will too!"
				},
				{
					title:"The Breman Museum",
					date:"Tue Mar 05 2024 01:00:00 GMT-0500 (Eastern Standard Time)",
					image:"",
					rating:90,
					features:["Speciality Museums","Duration:More than 3 hours"],
					discription:"The Breman Museum in Atlanta is a captivating destination that will surely pique your interest. This museum offers a comprehensive educational experience, focusing on Jews in the South, the Holocaust, and more. As someone who appreciates art and culture, you will be fascinated by the exhibits and displays that showcase the profound history of the Atlanta Jewish community. Take your time exploring the museum and make sure to watch the videos featuring local Holocaust survivors, as they provide a personal and moving perspective. Don't miss the opportunity to visit the gift shop, where you can find unique items related to Jewish culture and history. Allow yourself a good 3-hour window to fully immerse yourself in this significant and enriching museum."
				},
				{
					title:"The Capital Grille",
					date:"Tue Mar 05 2024 01:00:00 GMT-0500 (Eastern Standard Time)",
					image:"",
					rating:805,
					features:["Restaurant","American • Steakhouse • $$$$"],
					discription:"The Capital Grille in Atlanta is a renowned eatery that may be of particular interest to you during your visit. This upscale restaurant offers a consistent chain experience with impeccable service and delicious food. The atmosphere is elegant and inviting, providing a perfect setting for a memorable dining experience. The servers at The Capital Grille are known for their exceptional attention to detail and will make you feel like their top priority. You can ask them about their favorites and specials to enhance your dining experience. Additionally, there is a nice little bar where you can enjoy a predinner cocktail. As someone interested in art and culture, you will appreciate the restaurant's sophisticated ambiance. Don't forget to indulge in their complimentary dessert, which is said to be delicious!"
				},
				{
					title:"Atlanta History Center",
					date:"Tue Mar 05 2024 01:00:00 GMT-0500 (Eastern Standard Time)",
					image:"",
					rating:1464,
					features:["Historic Sites","Duration:2-3 hours"],
					discription:"The Atlanta History Center in Atlanta, Georgia is a captivating destination that is sure to pique your interest. This museum offers a wealth of information about the local history of Atlanta, providing a comprehensive overview of the city's past. From the informative history exhibits to the awe-inspiring Cyclorama, which showcases the Battle of Atlanta during the Civil War in a breathtaking 360° 'mural,' there is so much to explore and learn here. Additionally, the Atlanta History Center features the beautiful Swan House, a historical home that is adorned with a remarkable collection of period furniture, appliances, and decorative items. As someone interested in art and culture, you will appreciate the attention to detail and the rich historical context offered by this unique attraction."
				},
			]}
		],
	},

	{
		url:"chicago-illinois-us",
		intro:{
			title:"Your trip to Chicago for 3 days",
			description:"Chicago is a vibrant city located in Illinois, United States. With its rich history and diverse culture, it offers a multitude of must-see attractions that cater to all interests. From iconic landmarks to world-class museums, there is something for everyone to explore and discover. Food enthusiasts will delight in the city's renowned culinary scene, with a wide range of restaurants offering delicious and diverse cuisine. For those who enjoy outdoor activities, Atlanta's pleasant April weather provides the perfect opportunity to explore its numerous parks, trails, and recreational areas. Additionally, the city is full of hidden gems waiting to be uncovered, adding an element of surprise and excitement to your solo adventure.",
		},

		hotels:[
			{
				title:"Stonehurst Place",
				reviews:670,
				distance:"1.7 miles from the center",
				stars:"4-star Hotel",
				price:"$273.00 - $473.00 per night",
				features: ["Free breakfast","Free parking","Free High Speed Internet (WiFi)"],
				description:"Charming hotel boasting delightful common spaces, sophisticated decor, and modern conveniences. Luxurious rooms with extravagant bathrooms, multi-head showers, deep soaking tubs, and heated towel racks. Delectable 3-course breakfasts, picturesque outdoor spaces, and convenient location in a lovely neighborhood."
			},
			{
				title:"2023 Glenn Hotel, Autograph Collection",
				reviews:605,
				distance:"0.1 miles from the center",
				stars:"4-star Hotel",
				price:"$195.00 - $362.00 per night",
				features: ["Valet parking","Free High Speed Internet (WiFi)","Fitness Center with Gym / Workout Room"],
				description:"Rooftop bar with stunning Atlanta skyline and Olympic park views, live music, and delicious cocktails. Flavorful and diverse dining options, including top-notch Brussels sprouts, inventive egg rolls, and incredible shrimp and grits. Conveniently located near State Farm Arena with comfortable rooms and friendly staff. Nearby attractions and restaurants add to the appeal."
			},
			{
				title:"Sugar Magnolia Bed & Breakfast",
				reviews:207,
				distance:"1.7 miles from the center",
				stars:"3-star Hotel",
				price:"$226.00 - $249.00 per night",
				features: ["Free breakfast","Free parking","Free High Speed Internet (WiFi)"],
				description:"Charming B&B with Victorian architecture, comfortable rooms, delicious breakfasts, and porches with great views. Located in a historic area, walking distance to restaurants and attractions."
			},
		],

		days:[
			{
				description:"Welcome to Chicago, Illinois! Get ready for an exciting first day of your trip. Based on your interests in Must-see Attractions, Sports Culture, and Art and Culture, we have prepared a fantastic itinerary for you. First, head to the iconic <a href=\"\">Mercedes Benz Stadium</a>, a must-see attraction for sports enthusiasts. Experience the energy and history of this world-class stadium. Next, visit the renowned <a href=\"\">High Museum of Art</a>, where you can immerse yourself in the vibrant art and culture scene of Atlanta. For lunch, indulge in a classic Atlanta experience at <a href=\"\">The Varsity</a>, a beloved eatery known for its delicious burgers and hot dogs. Afterward, explore the beautiful <a href=\"\">Atlanta Botanical Garden</a>, a serene oasis filled with stunning flora and fauna. In the evening, enjoy a delightful dinner at <a href=\"\">South City Kitchen Midtown</a>, a top-rated eatery known for its Southern cuisine with a modern twist. Get ready for an unforgettable day filled with attractions, art, culture, and delicious food. Enjoy your trip to Atlanta!",
				activities:[
				{title:"Chicago Architecture River Cruise",
				image:"",
				rating:100,
				features:["1 hour 15 minutes (approx.)", "Mobile ticket", "Offered in: English"],
				discription:"Cruise down the Chicago River to see the city's famous architecture on this boat tour. With commentary from your onboard guide, watch the spectacular skyline glide by, including more than 40 notable buildings like the Wrigley Building and the John Hancock Building. Cover all three branches of the Chicago River, passing the East Bank Club, the old Post Office Building and the Willis Tower (formerly known as the Sears Tower).",
				url: "https://www.viator.com/tours/Chicago/Chicago-Architecture-River-Cruise/d673-5580ARC"},

				{title:"High Museum of Art",
				image:"",
				rating:1969,
				features:["Speciality Museums"],
				discription:"Located in Atlanta, Georgia, the High Museum of Art is a captivating destination that should be on your itinerary if you have a love for art. The museum showcases a diverse collection of art spanning various periods and styles, ensuring there is something to pique your interest. Past visitors highly recommend making it a priority stop, as the museum offers a fantastic photography exhibit that is sure to impress. If you prefer a quieter experience, consider visiting on a weekday when the museum is less crowded. In addition to its impressive art collection, the High Museum of Art is also architecturally stunning, making it a great place to visit and appreciate both art and culture."},

				{title:"The Varsity",
				image:"",
				rating:5551,
				features:["Restaurant","American • Fast Food • $","See Hours"],
				discription:"Located in Atlanta, Georgia, The Varsity is a beloved eatery that should be on your radar during your visit. Known for its delicious chili dogs and cheeseburgers, this iconic establishment is a must-do for any food enthusiast. The onion rings are a must-try, adding an extra layer of flavor to your meal. The Varsity offers good, cheap, and fast food, making it a convenient choice for a quick bite to eat. Beyond the culinary delights, the atmosphere and history of The Varsity add to its appeal. As a solo traveler interested in sports culture and art, you'll appreciate the vibrant energy and cultural significance of this Atlanta institution. Don't miss the chance to experience The Varsity's legendary fare and immerse yourself in the city's rich culinary heritage."},

				{title:"Atlanta Botanical Garden",
				image:"",
				rating:456,
				features:["Gardens","Duration:1-2 hours"],
				discription:"Located in Atlanta, Georgia, the Atlanta Botanical Garden is a captivating destination that will surely pique your interest. With its stunning Garden Lights, Holiday Nights event, you can immerse yourself in a magical experience during the Christmas holidays. Be sure to purchase tickets in advance and wear comfortable walking shoes to fully enjoy the spectacular view. As an art and culture enthusiast, you won't want to miss the Origami in the Garden exhibit, featuring intricate metal sculptures inspired by origami designs. Additionally, the Inside Out exhibit is worth exploring. If you're traveling with children, they can participate in a fun scavenger hunt in the garden, while the Children's Garden offers areas for climbing and exploration. Reserve your tickets online to make the most of your day at this enchanting botanical garden."},

				{title:"South City Kitchen Midtown",
				image:"",
				rating:1980,
				features:["Restaurant","American • $$","See Hours"],
				discription:"South City Kitchen Midtown in Atlanta is a fantastic choice for your visit. This charming restaurant offers fine southern dining with delightfully southern food and culinary flare. The casual atmosphere combined with an upscale menu and friendly staff make it a perfect spot for a memorable dining experience. You'll be pleased to know that South City Kitchen Midtown has received A++++ safety protocols for COVID, ensuring your safety and peace of mind. If you're looking for a nice brunch, their chicken & waffles come highly recommended. The portions are generous, and the prices are reasonable, allowing you to enjoy large portions of delicious Southern food without breaking the bank. With its combination of great food, warm ambiance, and excellent safety measures, South City Kitchen Midtown is a must-visit for any food lover traveling to Atlanta."},

			]},
			{
				description:"Start your day with a delicious breakfast at <a href=\"\">Bacchanalia</a>, where you can indulge in farm-to-table cuisine. After breakfast, head to the historic <a href=\"\">Fox Theatre</a> for a tour of this iconic Atlanta landmark. After your tour, grab a quick lunch at a nearby cafe before heading to <a href=\"\">Atlas</a> for a fine dining experience. Indulge in a multi-course meal paired with exquisite wines at this award-winning restaurant. After dinner, take a leisurely stroll around the nearby <a href=\"\">Piedmont Park</a> to enjoy the beautiful scenery. End your evening with a nightcap at a rooftop bar overlooking the city skyline.",
				activities:[
				{
					title:"Bacchanalia",
					image:"",
					rating:417,
					features:["Restaurant","American • Contemporary • $$$$"],
					discription:"Bacchanalia in Atlanta is a renowned eatery that offers an extraordinary dining experience. The restaurant has received accolades for its Michelin-star quality dishes, including delectable options like crab cakes, salmon, and the Savalin. Don't miss out on their delightful sweet potato dessert. While there have been occasional instances of slow service, the overall experience is exceptional. Bacchanalia boasts modern and tasteful decor, creating an inviting ambiance. Their four-course menu, paired with a well-curated wine list, ensures a memorable meal. For those seeking privacy, the restaurant offers a curtained off private area. The pace of the meal is well-timed, allowing you to savor each course. As an art and culture enthusiast, you'll appreciate the attention to detail and the culinary artistry at Bacchanalia."
				},
				{
					title:"Fox Theatre",
					image:"",
					rating:4468,
					features:["Architectural Buildings", "Duration: 2-3 hours"],
					discription:"Located in Atlanta, Georgia, the Fox Theatre is a stunningly beautiful and historic venue that will captivate you with its grandeur. As an art and culture enthusiast, you will be amazed by the architectural beauty and the rich history of this iconic theater. The seating is excellent, providing unobscured sight lines and great acoustics, ensuring an immersive experience. If you're interested in learning more about the secrets and history within the walls of the Fox Theatre, don't miss the VIP tour, where knowledgeable guides will take you on a journey through this beautifully restored landmark. As you explore the backstage areas, you'll gain a deeper appreciation for the magic that happens behind the curtains. A visit to the Fox Theatre is a must for anyone seeking a unique and enriching cultural experience."
				},
				{
					title:"Atlas",
					image:"",
					rating:175,
					features:["Restaurant","American • Bar • $$$$"],
					discription:"Atlas, located in Atlanta, Georgia, is a remarkable eatery that offers unparalleled cuisine and service in a serene and beautiful space. The restaurant boasts a traditional and elegant decor that exudes charm without being ostentatious. One of the highlights of Atlas is its impressive art collection, which sets it apart from other restaurants in Atlanta. The acoustics at Atlas are excellent, allowing for a pleasant dining experience where you can easily converse with your companions. The menu offers a variety of delicious dishes, including the cod, the 'winter' salad, the bread service, and the chocolate sphere, all of which have received positive reviews. If you appreciate art and culture, Atlas is a must-visit destination during your stay in Atlanta."
				},

			]},
			{
				description:"Start your day at the <a href=\"\">Children's Museum of Atlanta</a>, where kids can explore interactive exhibits and hands-on activities. Afterward, head to <a href=\"\">The Breman Museum</a> to learn about the history of Jewish culture in Atlanta. Grab lunch at <a href=\"\">The Capital Grille</a>, known for its delicious steaks and upscale dining experience. In the afternoon, visit the <a href=\"\">Atlanta History Center</a> to dive into the city's rich past through exhibits and guided tours. End your day with a stroll through the beautiful gardens and historic homes on the center's grounds. This itinerary offers a perfect mix of education, culture, and dining experiences in Atlanta.",
				activities:[
				{
					title:"Children's Museum of Atlanta",
					image:"",
					rating:348,
					features:["Children's Museums","Duration:1-2 hours"],
					discription:"The Children's Museum of Atlanta in Atlanta is a delightful destination that will keep you busy and entertained during your visit. This family-friendly museum offers a wide range of activities and exhibits that are perfect for children of all ages. From interactive displays to hands-on learning experiences, there is something for everyone to enjoy. The museum's friendly and helpful staff ensures that you have a memorable and enjoyable time exploring the various exhibits. Whether you're interested in art, culture, or simply looking for a fun-filled afternoon, the Children's Museum of Atlanta is a must-visit attraction. Kids love it here, and you will too!"
				},
				{
					title:"The Breman Museum",
					image:"",
					rating:90,
					features:["Speciality Museums","Duration:More than 3 hours"],
					discription:"The Breman Museum in Atlanta is a captivating destination that will surely pique your interest. This museum offers a comprehensive educational experience, focusing on Jews in the South, the Holocaust, and more. As someone who appreciates art and culture, you will be fascinated by the exhibits and displays that showcase the profound history of the Atlanta Jewish community. Take your time exploring the museum and make sure to watch the videos featuring local Holocaust survivors, as they provide a personal and moving perspective. Don't miss the opportunity to visit the gift shop, where you can find unique items related to Jewish culture and history. Allow yourself a good 3-hour window to fully immerse yourself in this significant and enriching museum."
				},
				{
					title:"The Capital Grille",
					image:"",
					rating:805,
					features:["Restaurant","American • Steakhouse • $$$$"],
					discription:"The Capital Grille in Atlanta is a renowned eatery that may be of particular interest to you during your visit. This upscale restaurant offers a consistent chain experience with impeccable service and delicious food. The atmosphere is elegant and inviting, providing a perfect setting for a memorable dining experience. The servers at The Capital Grille are known for their exceptional attention to detail and will make you feel like their top priority. You can ask them about their favorites and specials to enhance your dining experience. Additionally, there is a nice little bar where you can enjoy a predinner cocktail. As someone interested in art and culture, you will appreciate the restaurant's sophisticated ambiance. Don't forget to indulge in their complimentary dessert, which is said to be delicious!"
				},
				{
					title:"Atlanta History Center",
					image:"",
					rating:1464,
					features:["Historic Sites","Duration:2-3 hours"],
					discription:"The Atlanta History Center in Atlanta, Georgia is a captivating destination that is sure to pique your interest. This museum offers a wealth of information about the local history of Atlanta, providing a comprehensive overview of the city's past. From the informative history exhibits to the awe-inspiring Cyclorama, which showcases the Battle of Atlanta during the Civil War in a breathtaking 360° 'mural,' there is so much to explore and learn here. Additionally, the Atlanta History Center features the beautiful Swan House, a historical home that is adorned with a remarkable collection of period furniture, appliances, and decorative items. As someone interested in art and culture, you will appreciate the attention to detail and the rich historical context offered by this unique attraction."
				},
			]}
		],
	},

	{
		url:"los-angeles-california-us",
		intro:{
			title:"Your trip to Los Angeles for 3 days",
			description:"Los Angeles is a vibrant city located in California, United States. With its rich history and diverse culture, it offers a multitude of must-see attractions that cater to all interests. From iconic landmarks to world-class museums, there is something for everyone to explore and discover. Food enthusiasts will delight in the city's renowned culinary scene, with a wide range of restaurants offering delicious and diverse cuisine. For those who enjoy outdoor activities, Atlanta's pleasant April weather provides the perfect opportunity to explore its numerous parks, trails, and recreational areas. Additionally, the city is full of hidden gems waiting to be uncovered, adding an element of surprise and excitement to your solo adventure.",
		},

		hotels:[
			{
				title:"Stonehurst Place",
				reviews:670,
				distance:"1.7 miles from the center",
				stars:"4-star Hotel",
				price:"$273.00 - $473.00 per night",
				features: ["Free breakfast","Free parking","Free High Speed Internet (WiFi)"],
				description:"Charming hotel boasting delightful common spaces, sophisticated decor, and modern conveniences. Luxurious rooms with extravagant bathrooms, multi-head showers, deep soaking tubs, and heated towel racks. Delectable 3-course breakfasts, picturesque outdoor spaces, and convenient location in a lovely neighborhood."
			},
			{
				title:"2023 Glenn Hotel, Autograph Collection",
				reviews:605,
				distance:"0.1 miles from the center",
				stars:"4-star Hotel",
				price:"$195.00 - $362.00 per night",
				features: ["Valet parking","Free High Speed Internet (WiFi)","Fitness Center with Gym / Workout Room"],
				description:"Rooftop bar with stunning Atlanta skyline and Olympic park views, live music, and delicious cocktails. Flavorful and diverse dining options, including top-notch Brussels sprouts, inventive egg rolls, and incredible shrimp and grits. Conveniently located near State Farm Arena with comfortable rooms and friendly staff. Nearby attractions and restaurants add to the appeal."
			},
			{
				title:"Sugar Magnolia Bed & Breakfast",
				reviews:207,
				distance:"1.7 miles from the center",
				stars:"3-star Hotel",
				price:"$226.00 - $249.00 per night",
				features: ["Free breakfast","Free parking","Free High Speed Internet (WiFi)"],
				description:"Charming B&B with Victorian architecture, comfortable rooms, delicious breakfasts, and porches with great views. Located in a historic area, walking distance to restaurants and attractions."
			},
		],

		days:[
			{
				description:"Welcome to Los Angeles, California! Get ready for an exciting first day of your trip. Based on your interests in Must-see Attractions, Sports Culture, and Art and Culture, we have prepared a fantastic itinerary for you. First, head to the iconic <a href=\"\">Mercedes Benz Stadium</a>, a must-see attraction for sports enthusiasts. Experience the energy and history of this world-class stadium. Next, visit the renowned <a href=\"\">High Museum of Art</a>, where you can immerse yourself in the vibrant art and culture scene of Atlanta. For lunch, indulge in a classic Atlanta experience at <a href=\"\">The Varsity</a>, a beloved eatery known for its delicious burgers and hot dogs. Afterward, explore the beautiful <a href=\"\">Atlanta Botanical Garden</a>, a serene oasis filled with stunning flora and fauna. In the evening, enjoy a delightful dinner at <a href=\"\">South City Kitchen Midtown</a>, a top-rated eatery known for its Southern cuisine with a modern twist. Get ready for an unforgettable day filled with attractions, art, culture, and delicious food. Enjoy your trip to Atlanta!",
				activities:[
				{title:"Mercedes Benz Stadium",
				image:"",
				rating:100,
				features:["Arenas & Stadiums","Duration: More than 3 hours"],
				discription:"Mercedes Benz Stadium in Atlanta is a fantastic location for you to visit during your trip. As someone who is interested in sports culture, this stadium will surely captivate you. The stadium is well-known for its state-of-the-art design and impressive architecture. It is home to the Atlanta Falcons football team and Atlanta United FC soccer team, making it a hub for sports enthusiasts. The stadium also offers guided tours, which are highly recommended if you have the time. These tours allow you to explore the stadium's facilities and learn interesting facts about its history. The staff is known for being friendly and helpful, ensuring a pleasant experience. Additionally, the reasonably priced food and drinks make it convenient for you to enjoy a meal or a snack. If you want the best view, opt for the lower seats. Make sure to arrive early to avoid long lines getting in. Enjoy your visit!"},

				{title:"High Museum of Art",
				image:"",
				rating:1969,
				features:["Speciality Museums"],
				discription:"Located in Atlanta, Georgia, the High Museum of Art is a captivating destination that should be on your itinerary if you have a love for art. The museum showcases a diverse collection of art spanning various periods and styles, ensuring there is something to pique your interest. Past visitors highly recommend making it a priority stop, as the museum offers a fantastic photography exhibit that is sure to impress. If you prefer a quieter experience, consider visiting on a weekday when the museum is less crowded. In addition to its impressive art collection, the High Museum of Art is also architecturally stunning, making it a great place to visit and appreciate both art and culture."},

				{title:"The Varsity",
				image:"",
				rating:5551,
				features:["Restaurant","American • Fast Food • $","See Hours"],
				discription:"Located in Atlanta, Georgia, The Varsity is a beloved eatery that should be on your radar during your visit. Known for its delicious chili dogs and cheeseburgers, this iconic establishment is a must-do for any food enthusiast. The onion rings are a must-try, adding an extra layer of flavor to your meal. The Varsity offers good, cheap, and fast food, making it a convenient choice for a quick bite to eat. Beyond the culinary delights, the atmosphere and history of The Varsity add to its appeal. As a solo traveler interested in sports culture and art, you'll appreciate the vibrant energy and cultural significance of this Atlanta institution. Don't miss the chance to experience The Varsity's legendary fare and immerse yourself in the city's rich culinary heritage."},

				{title:"Atlanta Botanical Garden",
				image:"",
				rating:456,
				features:["Gardens","Duration:1-2 hours"],
				discription:"Located in Atlanta, Georgia, the Atlanta Botanical Garden is a captivating destination that will surely pique your interest. With its stunning Garden Lights, Holiday Nights event, you can immerse yourself in a magical experience during the Christmas holidays. Be sure to purchase tickets in advance and wear comfortable walking shoes to fully enjoy the spectacular view. As an art and culture enthusiast, you won't want to miss the Origami in the Garden exhibit, featuring intricate metal sculptures inspired by origami designs. Additionally, the Inside Out exhibit is worth exploring. If you're traveling with children, they can participate in a fun scavenger hunt in the garden, while the Children's Garden offers areas for climbing and exploration. Reserve your tickets online to make the most of your day at this enchanting botanical garden."},

				{title:"South City Kitchen Midtown",
				image:"",
				rating:1980,
				features:["Restaurant","American • $$","See Hours"],
				discription:"South City Kitchen Midtown in Atlanta is a fantastic choice for your visit. This charming restaurant offers fine southern dining with delightfully southern food and culinary flare. The casual atmosphere combined with an upscale menu and friendly staff make it a perfect spot for a memorable dining experience. You'll be pleased to know that South City Kitchen Midtown has received A++++ safety protocols for COVID, ensuring your safety and peace of mind. If you're looking for a nice brunch, their chicken & waffles come highly recommended. The portions are generous, and the prices are reasonable, allowing you to enjoy large portions of delicious Southern food without breaking the bank. With its combination of great food, warm ambiance, and excellent safety measures, South City Kitchen Midtown is a must-visit for any food lover traveling to Atlanta."},

			]},
			{
				description:"Start your day with a delicious breakfast at <a href=\"\">Bacchanalia</a>, where you can indulge in farm-to-table cuisine. After breakfast, head to the historic <a href=\"\">Fox Theatre</a> for a tour of this iconic Atlanta landmark. After your tour, grab a quick lunch at a nearby cafe before heading to <a href=\"\">Atlas</a> for a fine dining experience. Indulge in a multi-course meal paired with exquisite wines at this award-winning restaurant. After dinner, take a leisurely stroll around the nearby <a href=\"\">Piedmont Park</a> to enjoy the beautiful scenery. End your evening with a nightcap at a rooftop bar overlooking the city skyline.",
				activities:[
				{
					title:"Bacchanalia",
					image:"",
					rating:417,
					features:["Restaurant","American • Contemporary • $$$$"],
					discription:"Bacchanalia in Atlanta is a renowned eatery that offers an extraordinary dining experience. The restaurant has received accolades for its Michelin-star quality dishes, including delectable options like crab cakes, salmon, and the Savalin. Don't miss out on their delightful sweet potato dessert. While there have been occasional instances of slow service, the overall experience is exceptional. Bacchanalia boasts modern and tasteful decor, creating an inviting ambiance. Their four-course menu, paired with a well-curated wine list, ensures a memorable meal. For those seeking privacy, the restaurant offers a curtained off private area. The pace of the meal is well-timed, allowing you to savor each course. As an art and culture enthusiast, you'll appreciate the attention to detail and the culinary artistry at Bacchanalia."
				},
				{
					title:"Fox Theatre",
					image:"",
					rating:4468,
					features:["Architectural Buildings", "Duration: 2-3 hours"],
					discription:"Located in Atlanta, Georgia, the Fox Theatre is a stunningly beautiful and historic venue that will captivate you with its grandeur. As an art and culture enthusiast, you will be amazed by the architectural beauty and the rich history of this iconic theater. The seating is excellent, providing unobscured sight lines and great acoustics, ensuring an immersive experience. If you're interested in learning more about the secrets and history within the walls of the Fox Theatre, don't miss the VIP tour, where knowledgeable guides will take you on a journey through this beautifully restored landmark. As you explore the backstage areas, you'll gain a deeper appreciation for the magic that happens behind the curtains. A visit to the Fox Theatre is a must for anyone seeking a unique and enriching cultural experience."
				},
				{
					title:"Atlas",
					image:"",
					rating:175,
					features:["Restaurant","American • Bar • $$$$"],
					discription:"Atlas, located in Atlanta, Georgia, is a remarkable eatery that offers unparalleled cuisine and service in a serene and beautiful space. The restaurant boasts a traditional and elegant decor that exudes charm without being ostentatious. One of the highlights of Atlas is its impressive art collection, which sets it apart from other restaurants in Atlanta. The acoustics at Atlas are excellent, allowing for a pleasant dining experience where you can easily converse with your companions. The menu offers a variety of delicious dishes, including the cod, the 'winter' salad, the bread service, and the chocolate sphere, all of which have received positive reviews. If you appreciate art and culture, Atlas is a must-visit destination during your stay in Atlanta."
				},

			]},
			{
				description:"Start your day at the <a href=\"\">Children's Museum of Atlanta</a>, where kids can explore interactive exhibits and hands-on activities. Afterward, head to <a href=\"\">The Breman Museum</a> to learn about the history of Jewish culture in Atlanta. Grab lunch at <a href=\"\">The Capital Grille</a>, known for its delicious steaks and upscale dining experience. In the afternoon, visit the <a href=\"\">Atlanta History Center</a> to dive into the city's rich past through exhibits and guided tours. End your day with a stroll through the beautiful gardens and historic homes on the center's grounds. This itinerary offers a perfect mix of education, culture, and dining experiences in Atlanta.",
				activities:[
				{
					title:"Children's Museum of Atlanta",
					image:"",
					rating:348,
					features:["Children's Museums","Duration:1-2 hours"],
					discription:"The Children's Museum of Atlanta in Atlanta is a delightful destination that will keep you busy and entertained during your visit. This family-friendly museum offers a wide range of activities and exhibits that are perfect for children of all ages. From interactive displays to hands-on learning experiences, there is something for everyone to enjoy. The museum's friendly and helpful staff ensures that you have a memorable and enjoyable time exploring the various exhibits. Whether you're interested in art, culture, or simply looking for a fun-filled afternoon, the Children's Museum of Atlanta is a must-visit attraction. Kids love it here, and you will too!"
				},
				{
					title:"The Breman Museum",
					image:"",
					rating:90,
					features:["Speciality Museums","Duration:More than 3 hours"],
					discription:"The Breman Museum in Atlanta is a captivating destination that will surely pique your interest. This museum offers a comprehensive educational experience, focusing on Jews in the South, the Holocaust, and more. As someone who appreciates art and culture, you will be fascinated by the exhibits and displays that showcase the profound history of the Atlanta Jewish community. Take your time exploring the museum and make sure to watch the videos featuring local Holocaust survivors, as they provide a personal and moving perspective. Don't miss the opportunity to visit the gift shop, where you can find unique items related to Jewish culture and history. Allow yourself a good 3-hour window to fully immerse yourself in this significant and enriching museum."
				},
				{
					title:"The Capital Grille",
					image:"",
					rating:805,
					features:["Restaurant","American • Steakhouse • $$$$"],
					discription:"The Capital Grille in Atlanta is a renowned eatery that may be of particular interest to you during your visit. This upscale restaurant offers a consistent chain experience with impeccable service and delicious food. The atmosphere is elegant and inviting, providing a perfect setting for a memorable dining experience. The servers at The Capital Grille are known for their exceptional attention to detail and will make you feel like their top priority. You can ask them about their favorites and specials to enhance your dining experience. Additionally, there is a nice little bar where you can enjoy a predinner cocktail. As someone interested in art and culture, you will appreciate the restaurant's sophisticated ambiance. Don't forget to indulge in their complimentary dessert, which is said to be delicious!"
				},
				{
					title:"Atlanta History Center",
					image:"",
					rating:1464,
					features:["Historic Sites","Duration:2-3 hours"],
					discription:"The Atlanta History Center in Atlanta, Georgia is a captivating destination that is sure to pique your interest. This museum offers a wealth of information about the local history of Atlanta, providing a comprehensive overview of the city's past. From the informative history exhibits to the awe-inspiring Cyclorama, which showcases the Battle of Atlanta during the Civil War in a breathtaking 360° 'mural,' there is so much to explore and learn here. Additionally, the Atlanta History Center features the beautiful Swan House, a historical home that is adorned with a remarkable collection of period furniture, appliances, and decorative items. As someone interested in art and culture, you will appreciate the attention to detail and the rich historical context offered by this unique attraction."
				},
			]}
		],
	},

	{
		url:"new-york-new-york-us",
		intro:{
			title:"Your trip to New York City for 3 days",
			description:"New York City is a vibrant city located in New York State, United States. With its rich history and diverse culture, it offers a multitude of must-see attractions that cater to all interests. From iconic landmarks to world-class museums, there is something for everyone to explore and discover. Food enthusiasts will delight in the city's renowned culinary scene, with a wide range of restaurants offering delicious and diverse cuisine. For those who enjoy outdoor activities, Atlanta's pleasant April weather provides the perfect opportunity to explore its numerous parks, trails, and recreational areas. Additionally, the city is full of hidden gems waiting to be uncovered, adding an element of surprise and excitement to your solo adventure.",
		},

		hotels:[
			{
				title:"Stonehurst Place",
				reviews:670,
				distance:"1.7 miles from the center",
				stars:"4-star Hotel",
				price:"$273.00 - $473.00 per night",
				features: ["Free breakfast","Free parking","Free High Speed Internet (WiFi)"],
				description:"Charming hotel boasting delightful common spaces, sophisticated decor, and modern conveniences. Luxurious rooms with extravagant bathrooms, multi-head showers, deep soaking tubs, and heated towel racks. Delectable 3-course breakfasts, picturesque outdoor spaces, and convenient location in a lovely neighborhood."
			},
			{
				title:"2023 Glenn Hotel, Autograph Collection",
				reviews:605,
				distance:"0.1 miles from the center",
				stars:"4-star Hotel",
				price:"$195.00 - $362.00 per night",
				features: ["Valet parking","Free High Speed Internet (WiFi)","Fitness Center with Gym / Workout Room"],
				description:"Rooftop bar with stunning Atlanta skyline and Olympic park views, live music, and delicious cocktails. Flavorful and diverse dining options, including top-notch Brussels sprouts, inventive egg rolls, and incredible shrimp and grits. Conveniently located near State Farm Arena with comfortable rooms and friendly staff. Nearby attractions and restaurants add to the appeal."
			},
			{
				title:"Sugar Magnolia Bed & Breakfast",
				reviews:207,
				distance:"1.7 miles from the center",
				stars:"3-star Hotel",
				price:"$226.00 - $249.00 per night",
				features: ["Free breakfast","Free parking","Free High Speed Internet (WiFi)"],
				description:"Charming B&B with Victorian architecture, comfortable rooms, delicious breakfasts, and porches with great views. Located in a historic area, walking distance to restaurants and attractions."
			},
		],

		days:[
			{
				description:"Welcome to New York City! Get ready for an exciting first day of your trip. Based on your interests in Must-see Attractions, Sports Culture, and Art and Culture, we have prepared a fantastic itinerary for you. First, head to the iconic <a href=\"\">Mercedes Benz Stadium</a>, a must-see attraction for sports enthusiasts. Experience the energy and history of this world-class stadium. Next, visit the renowned <a href=\"\">High Museum of Art</a>, where you can immerse yourself in the vibrant art and culture scene of Atlanta. For lunch, indulge in a classic Atlanta experience at <a href=\"\">The Varsity</a>, a beloved eatery known for its delicious burgers and hot dogs. Afterward, explore the beautiful <a href=\"\">Atlanta Botanical Garden</a>, a serene oasis filled with stunning flora and fauna. In the evening, enjoy a delightful dinner at <a href=\"\">South City Kitchen Midtown</a>, a top-rated eatery known for its Southern cuisine with a modern twist. Get ready for an unforgettable day filled with attractions, art, culture, and delicious food. Enjoy your trip to Atlanta!",
				activities:[

				{title:"Empire State Building",
				date:"Tue Mar 05 2024 01:00:00 GMT-0500 (Eastern Standard Time)",
				image:"",
				rating:100,
				features:["Arenas & Stadiums","Duration: More than 3 hours"],
				discription:"Mercedes Benz Stadium in Atlanta is a fantastic location for you to visit during your trip. As someone who is interested in sports culture, this stadium will surely captivate you. The stadium is well-known for its state-of-the-art design and impressive architecture. It is home to the Atlanta Falcons football team and Atlanta United FC soccer team, making it a hub for sports enthusiasts. The stadium also offers guided tours, which are highly recommended if you have the time. These tours allow you to explore the stadium's facilities and learn interesting facts about its history. The staff is known for being friendly and helpful, ensuring a pleasant experience. Additionally, the reasonably priced food and drinks make it convenient for you to enjoy a meal or a snack. If you want the best view, opt for the lower seats. Make sure to arrive early to avoid long lines getting in. Enjoy your visit!"},

				{title:"Wrigley Field",
				date:"Tue Mar 05 2024 01:00:00 GMT-0500 (Eastern Standard Time)",
				image:"",
				rating:100,
				features:["seating", "stadium"],
				discription:"Iconic and second-oldest baseball stadium in the country"
				}

			]},
		],
	},

	{
		url:"tokyo-tokyo-jp",
		intro:{
			title:"Your trip to Japan for 3 days",
			description:"Tokyo is a vibrant city located in Japan. With its rich history and diverse culture, it offers a multitude of must-see attractions that cater to all interests. From iconic landmarks to world-class museums, there is something for everyone to explore and discover. Food enthusiasts will delight in the city's renowned culinary scene, with a wide range of restaurants offering delicious and diverse cuisine. For those who enjoy outdoor activities, Atlanta's pleasant April weather provides the perfect opportunity to explore its numerous parks, trails, and recreational areas. Additionally, the city is full of hidden gems waiting to be uncovered, adding an element of surprise and excitement to your solo adventure.",
		},

		hotels:[
			{
				title:"Stonehurst Place",
				reviews:670,
				distance:"1.7 miles from the center",
				stars:"4-star Hotel",
				price:"$273.00 - $473.00 per night",
				features: ["Free breakfast","Free parking","Free High Speed Internet (WiFi)"],
				description:"Charming hotel boasting delightful common spaces, sophisticated decor, and modern conveniences. Luxurious rooms with extravagant bathrooms, multi-head showers, deep soaking tubs, and heated towel racks. Delectable 3-course breakfasts, picturesque outdoor spaces, and convenient location in a lovely neighborhood."
			},
			{
				title:"2023 Glenn Hotel, Autograph Collection",
				reviews:605,
				distance:"0.1 miles from the center",
				stars:"4-star Hotel",
				price:"$195.00 - $362.00 per night",
				features: ["Valet parking","Free High Speed Internet (WiFi)","Fitness Center with Gym / Workout Room"],
				description:"Rooftop bar with stunning Atlanta skyline and Olympic park views, live music, and delicious cocktails. Flavorful and diverse dining options, including top-notch Brussels sprouts, inventive egg rolls, and incredible shrimp and grits. Conveniently located near State Farm Arena with comfortable rooms and friendly staff. Nearby attractions and restaurants add to the appeal."
			},
			{
				title:"Sugar Magnolia Bed & Breakfast",
				reviews:207,
				distance:"1.7 miles from the center",
				stars:"3-star Hotel",
				price:"$226.00 - $249.00 per night",
				features: ["Free breakfast","Free parking","Free High Speed Internet (WiFi)"],
				description:"Charming B&B with Victorian architecture, comfortable rooms, delicious breakfasts, and porches with great views. Located in a historic area, walking distance to restaurants and attractions."
			},
		],

		days:[
			{
				description:"Welcome to Tokyo, Japan! Get ready for an exciting first day of your trip. Based on your interests in Must-see Attractions, Sports Culture, and Art and Culture, we have prepared a fantastic itinerary for you. First, head to the iconic <a href=\"\">Mercedes Benz Stadium</a>, a must-see attraction for sports enthusiasts. Experience the energy and history of this world-class stadium. Next, visit the renowned <a href=\"\">High Museum of Art</a>, where you can immerse yourself in the vibrant art and culture scene of Atlanta. For lunch, indulge in a classic Atlanta experience at <a href=\"\">The Varsity</a>, a beloved eatery known for its delicious burgers and hot dogs. Afterward, explore the beautiful <a href=\"\">Atlanta Botanical Garden</a>, a serene oasis filled with stunning flora and fauna. In the evening, enjoy a delightful dinner at <a href=\"\">South City Kitchen Midtown</a>, a top-rated eatery known for its Southern cuisine with a modern twist. Get ready for an unforgettable day filled with attractions, art, culture, and delicious food. Enjoy your trip to Atlanta!",
				activities:[
				{title:"Mercedes Benz Stadium",
				image:"",
				rating:100,
				features:["Arenas & Stadiums","Duration: More than 3 hours"],
				discription:"Mercedes Benz Stadium in Atlanta is a fantastic location for you to visit during your trip. As someone who is interested in sports culture, this stadium will surely captivate you. The stadium is well-known for its state-of-the-art design and impressive architecture. It is home to the Atlanta Falcons football team and Atlanta United FC soccer team, making it a hub for sports enthusiasts. The stadium also offers guided tours, which are highly recommended if you have the time. These tours allow you to explore the stadium's facilities and learn interesting facts about its history. The staff is known for being friendly and helpful, ensuring a pleasant experience. Additionally, the reasonably priced food and drinks make it convenient for you to enjoy a meal or a snack. If you want the best view, opt for the lower seats. Make sure to arrive early to avoid long lines getting in. Enjoy your visit!"},

				{title:"High Museum of Art",
				image:"",
				rating:1969,
				features:["Speciality Museums"],
				discription:"Located in Atlanta, Georgia, the High Museum of Art is a captivating destination that should be on your itinerary if you have a love for art. The museum showcases a diverse collection of art spanning various periods and styles, ensuring there is something to pique your interest. Past visitors highly recommend making it a priority stop, as the museum offers a fantastic photography exhibit that is sure to impress. If you prefer a quieter experience, consider visiting on a weekday when the museum is less crowded. In addition to its impressive art collection, the High Museum of Art is also architecturally stunning, making it a great place to visit and appreciate both art and culture."},

				{title:"The Varsity",
				image:"",
				rating:5551,
				features:["Restaurant","American • Fast Food • $","See Hours"],
				discription:"Located in Atlanta, Georgia, The Varsity is a beloved eatery that should be on your radar during your visit. Known for its delicious chili dogs and cheeseburgers, this iconic establishment is a must-do for any food enthusiast. The onion rings are a must-try, adding an extra layer of flavor to your meal. The Varsity offers good, cheap, and fast food, making it a convenient choice for a quick bite to eat. Beyond the culinary delights, the atmosphere and history of The Varsity add to its appeal. As a solo traveler interested in sports culture and art, you'll appreciate the vibrant energy and cultural significance of this Atlanta institution. Don't miss the chance to experience The Varsity's legendary fare and immerse yourself in the city's rich culinary heritage."},

				{title:"Atlanta Botanical Garden",
				image:"",
				rating:456,
				features:["Gardens","Duration:1-2 hours"],
				discription:"Located in Atlanta, Georgia, the Atlanta Botanical Garden is a captivating destination that will surely pique your interest. With its stunning Garden Lights, Holiday Nights event, you can immerse yourself in a magical experience during the Christmas holidays. Be sure to purchase tickets in advance and wear comfortable walking shoes to fully enjoy the spectacular view. As an art and culture enthusiast, you won't want to miss the Origami in the Garden exhibit, featuring intricate metal sculptures inspired by origami designs. Additionally, the Inside Out exhibit is worth exploring. If you're traveling with children, they can participate in a fun scavenger hunt in the garden, while the Children's Garden offers areas for climbing and exploration. Reserve your tickets online to make the most of your day at this enchanting botanical garden."},

				{title:"South City Kitchen Midtown",
				image:"",
				rating:1980,
				features:["Restaurant","American • $$","See Hours"],
				discription:"South City Kitchen Midtown in Atlanta is a fantastic choice for your visit. This charming restaurant offers fine southern dining with delightfully southern food and culinary flare. The casual atmosphere combined with an upscale menu and friendly staff make it a perfect spot for a memorable dining experience. You'll be pleased to know that South City Kitchen Midtown has received A++++ safety protocols for COVID, ensuring your safety and peace of mind. If you're looking for a nice brunch, their chicken & waffles come highly recommended. The portions are generous, and the prices are reasonable, allowing you to enjoy large portions of delicious Southern food without breaking the bank. With its combination of great food, warm ambiance, and excellent safety measures, South City Kitchen Midtown is a must-visit for any food lover traveling to Atlanta."},

			]},
			{
				description:"Start your day with a delicious breakfast at <a href=\"\">Bacchanalia</a>, where you can indulge in farm-to-table cuisine. After breakfast, head to the historic <a href=\"\">Fox Theatre</a> for a tour of this iconic Atlanta landmark. After your tour, grab a quick lunch at a nearby cafe before heading to <a href=\"\">Atlas</a> for a fine dining experience. Indulge in a multi-course meal paired with exquisite wines at this award-winning restaurant. After dinner, take a leisurely stroll around the nearby <a href=\"\">Piedmont Park</a> to enjoy the beautiful scenery. End your evening with a nightcap at a rooftop bar overlooking the city skyline.",
				activities:[
				{
					title:"Bacchanalia",
					image:"",
					rating:417,
					features:["Restaurant","American • Contemporary • $$$$"],
					discription:"Bacchanalia in Atlanta is a renowned eatery that offers an extraordinary dining experience. The restaurant has received accolades for its Michelin-star quality dishes, including delectable options like crab cakes, salmon, and the Savalin. Don't miss out on their delightful sweet potato dessert. While there have been occasional instances of slow service, the overall experience is exceptional. Bacchanalia boasts modern and tasteful decor, creating an inviting ambiance. Their four-course menu, paired with a well-curated wine list, ensures a memorable meal. For those seeking privacy, the restaurant offers a curtained off private area. The pace of the meal is well-timed, allowing you to savor each course. As an art and culture enthusiast, you'll appreciate the attention to detail and the culinary artistry at Bacchanalia."
				},
				{
					title:"Fox Theatre",
					image:"",
					rating:4468,
					features:["Architectural Buildings", "Duration: 2-3 hours"],
					discription:"Located in Atlanta, Georgia, the Fox Theatre is a stunningly beautiful and historic venue that will captivate you with its grandeur. As an art and culture enthusiast, you will be amazed by the architectural beauty and the rich history of this iconic theater. The seating is excellent, providing unobscured sight lines and great acoustics, ensuring an immersive experience. If you're interested in learning more about the secrets and history within the walls of the Fox Theatre, don't miss the VIP tour, where knowledgeable guides will take you on a journey through this beautifully restored landmark. As you explore the backstage areas, you'll gain a deeper appreciation for the magic that happens behind the curtains. A visit to the Fox Theatre is a must for anyone seeking a unique and enriching cultural experience."
				},
				{
					title:"Atlas",
					image:"",
					rating:175,
					features:["Restaurant","American • Bar • $$$$"],
					discription:"Atlas, located in Atlanta, Georgia, is a remarkable eatery that offers unparalleled cuisine and service in a serene and beautiful space. The restaurant boasts a traditional and elegant decor that exudes charm without being ostentatious. One of the highlights of Atlas is its impressive art collection, which sets it apart from other restaurants in Atlanta. The acoustics at Atlas are excellent, allowing for a pleasant dining experience where you can easily converse with your companions. The menu offers a variety of delicious dishes, including the cod, the 'winter' salad, the bread service, and the chocolate sphere, all of which have received positive reviews. If you appreciate art and culture, Atlas is a must-visit destination during your stay in Atlanta."
				},

			]},
			{
				description:"Start your day at the <a href=\"\">Children's Museum of Atlanta</a>, where kids can explore interactive exhibits and hands-on activities. Afterward, head to <a href=\"\">The Breman Museum</a> to learn about the history of Jewish culture in Atlanta. Grab lunch at <a href=\"\">The Capital Grille</a>, known for its delicious steaks and upscale dining experience. In the afternoon, visit the <a href=\"\">Atlanta History Center</a> to dive into the city's rich past through exhibits and guided tours. End your day with a stroll through the beautiful gardens and historic homes on the center's grounds. This itinerary offers a perfect mix of education, culture, and dining experiences in Atlanta.",
				activities:[
				{
					title:"Children's Museum of Atlanta",
					image:"",
					rating:348,
					features:["Children's Museums","Duration:1-2 hours"],
					discription:"The Children's Museum of Atlanta in Atlanta is a delightful destination that will keep you busy and entertained during your visit. This family-friendly museum offers a wide range of activities and exhibits that are perfect for children of all ages. From interactive displays to hands-on learning experiences, there is something for everyone to enjoy. The museum's friendly and helpful staff ensures that you have a memorable and enjoyable time exploring the various exhibits. Whether you're interested in art, culture, or simply looking for a fun-filled afternoon, the Children's Museum of Atlanta is a must-visit attraction. Kids love it here, and you will too!"
				},
				{
					title:"The Breman Museum",
					image:"",
					rating:90,
					features:["Speciality Museums","Duration:More than 3 hours"],
					discription:"The Breman Museum in Atlanta is a captivating destination that will surely pique your interest. This museum offers a comprehensive educational experience, focusing on Jews in the South, the Holocaust, and more. As someone who appreciates art and culture, you will be fascinated by the exhibits and displays that showcase the profound history of the Atlanta Jewish community. Take your time exploring the museum and make sure to watch the videos featuring local Holocaust survivors, as they provide a personal and moving perspective. Don't miss the opportunity to visit the gift shop, where you can find unique items related to Jewish culture and history. Allow yourself a good 3-hour window to fully immerse yourself in this significant and enriching museum."
				},
				{
					title:"The Capital Grille",
					image:"",
					rating:805,
					features:["Restaurant","American • Steakhouse • $$$$"],
					discription:"The Capital Grille in Atlanta is a renowned eatery that may be of particular interest to you during your visit. This upscale restaurant offers a consistent chain experience with impeccable service and delicious food. The atmosphere is elegant and inviting, providing a perfect setting for a memorable dining experience. The servers at The Capital Grille are known for their exceptional attention to detail and will make you feel like their top priority. You can ask them about their favorites and specials to enhance your dining experience. Additionally, there is a nice little bar where you can enjoy a predinner cocktail. As someone interested in art and culture, you will appreciate the restaurant's sophisticated ambiance. Don't forget to indulge in their complimentary dessert, which is said to be delicious!"
				},
				{
					title:"Atlanta History Center",
					image:"",
					rating:1464,
					features:["Historic Sites","Duration:2-3 hours"],
					discription:"The Atlanta History Center in Atlanta, Georgia is a captivating destination that is sure to pique your interest. This museum offers a wealth of information about the local history of Atlanta, providing a comprehensive overview of the city's past. From the informative history exhibits to the awe-inspiring Cyclorama, which showcases the Battle of Atlanta during the Civil War in a breathtaking 360° 'mural,' there is so much to explore and learn here. Additionally, the Atlanta History Center features the beautiful Swan House, a historical home that is adorned with a remarkable collection of period furniture, appliances, and decorative items. As someone interested in art and culture, you will appreciate the attention to detail and the rich historical context offered by this unique attraction."
				},
			]}
		],
	},

];

export default itinerary;