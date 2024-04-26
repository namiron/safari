import accessories from '../image/Accessories.png'
import shoes from '../image/shoes.png'
import clothes from '../image/clothes.png'

export const BASE_URL = 'https://65a10699600f49256fb0bd21.mockapi.io/healthier/v1/safari'

//--------------------------------btn
export const BACK = 'Back';

export const HOME = 'Home';

export const SIG_IN = 'SIGN IN';

export const CONTINUE_SHOPPING = 'CONTINUE SHOPPING';

export const CREATE_ACCOUNT = 'CREATE ACCOUNT';

export const MOVE_TO_FAVORITES = 'MOVE TO FAVORITES';

export const REMOVE = 'REMOVE';
//--------------------------------btn


export const STARS_CONSTANT = 'Stars'


//-----------------------------------------------header
export const HOME_HEADER = 'Home';

export const CLOSES = 'Closes';

export const SHOES = 'Shoes'

export const ACCESSORIES = 'Accessories'

//-----------------------------------------------header

//-------------------------------------------------footer
export const FACEBOOK = 'Facebook'

export const TWITTER = 'Twitter'

export const INSTAGRAM = 'Instagram'
//-------------------------------------------------footer


//---------------------------------------pagination

export const ITEMS_PER_PAGE = 16;

//---------------------------------------pagination



//----------------------------------home

export const TITLE = 'Welcome to our online store!';

export const SUB_TITLE = ` Here, every shopper will find the product of their dreams. Our store offers a wide range of products for all ages, preferences, and budgets. 
Join our family of shoppers and bring your dreams to life with our online store!`


export const EXPLORE_MORE_ARRAY = [
	{
		id: 1,
		image: accessories,
		name: 'accessories'
	},
	{
		id: 2,
		image: clothes,
		name: 'clothes'
	},
	{
		id: 2,
		image: shoes,
		name: 'shoes'
	},


]

// const i = [
// 	создай 10 обьектов   {
// 		id: '0'
// 		"title": "имя известного бренда ",
// 		"image": [],
// 		"size": [несколько произвольных размеров товара],
// 		"color": [несколько цветов товара],
// 		"price": цена,
// 		"category": с одной из категорий Watches, Backpacks, Dresses, Booties, Bags, Sneakers, Sunglasses, Tops, Jeans, Boots
// 		"group": "ACCESSORIES",
// 		"rating": "1"
// 		"comments": [напиши несколько комментариев по поводу этого товара или один или не пиши совсем]
// 	},
// ]

//----------------------------------home

//--------------------------------group
export const CLOTHES = 'CLOTHES'

export const SHOES_GROUP = 'SHOES'

export const ACCESSORIES_GROUP = 'ACCESSORIES'
//--------------------------------group

//---------------------------------clothes


export const CATEGORY = 'CATEGORY'

export const PRICE = 'PRICE'

export const SIZE = 'SIZE'


//------------------------------------------------CATEGORY
export const ALL = 'All'

export const WATCHES = 'Watches'

export const BACKPACKS = 'Backpacks'

export const DRESSES = 'Dresses'

export const BOOTIES = 'Booties'

export const BAGS = 'Bags'

export const SNEAKERS = 'Sneakers'

export const SUNGLASSES = 'Sunglasses'

export const TOPS = 'Tops'

export const JEANS = 'Jeans'

export const BOOTS = 'Boots'

//------------------------------------------------/CATEGORY

//---------------------------------arrays

export const CATEGORY_ARRAY = [ALL, WATCHES, BACKPACKS, DRESSES, BOOTIES, BAGS, SNEAKERS, SUNGLASSES, TOPS, JEANS, BOOTS]

export const SIZE_ARRAY = [
	'S', 'M', 'L', 'XL', '30', '31', '32', '33', '34', '35', '35', '36.6', '37', '38', '39', '40', '41', '42', '43', '44',]
export const COLOR_ARRAY = [
	'Yellow', 'Grey', 'Black', 'Gold', 'Silver', 'Brown', 'Red', 'White', 'Orange', 'Green', 'Blue',]

export const PRICE_ARRAY = [
	{
		id: 1,
		filter: '20$ - 100$',
	},
	{
		id: 2,
		filter: '100$ - 1000$',
	},
	{
		id: 3,
		filter: '1000$ - 5000$',
	},
	{
		id: 4,
		filter: '5000$ - 10000$',
	},


]



//---------------------------------/arrays


//-----------------------------------------filter

export const APPLY = 'apply'

//-----------------------------------------filter



//------------------------------------------------------Select

export const options = [

	{ value: 'HighToLow', label: 'Price: High to Low' },
	{ value: 'LowToHigh', label: 'Price: Low to High' }
]




export const PRICE_HIGHT_TO_LOW = "HighToLow"

export const PRICE_LOW_TO_HIGHT = "LowToHigh"


//------------------------------------------------------Select


//----------------------------Tabs
export const TABS_1 = 'tab1'

export const TABS_2 = 'tab2'

export const TABS_3 = 'tab3'


export const GENERAL_INFO = 'General info'

export const REVIEWS = 'Reviews'

export const PRODUCT_DETAILS = 'Product details'




//----------------------------Tabs


//---------------------------------------------tabOne

export const COLOR = 'Color';

export const SIZE_CONST = 'Size';


export const SIZE_CHART = 'Size chart'

export const DELIVERY = 'Delivery'

export const FREE_TEXT_DELIVERY = ['Free standard shipping on orders over $35 before tax, plus free returns.',
	'You have 60 days to return the item(s) using any of the following methods:',
	'Free store return',
	'Free returns via USPS Dropoff Service']

export const TYPE_CONST = 'Type'

export const LONG_CONST = 'How long'

export const HOW_MUCH = 'How much'

export const STANDARD_DELIVERY = 'Standard delivery'

export const EXPRESS_DELIVERY = 'Express delivery'

export const PICK_DELIVERY = 'Pick up in store'

export const BUSINESS_DAYS = ['1-4 business days', '1 business day', '1-3 business days']

export const PRICE_ITEMS = ['$4.50', '$10.00', 'Free']

export const RETURN_CONST = 'Return'

export const SHARE = 'Share:'
//---------------------------------------------tabOne


//----------------------------------TabsThree

export const DESCRIPTION = ' Product Description'

export const SPECIFICATION = 'Specifications'

export const SAFARI_STORE = 'Safari store!'

export const WELCOME_TO_THE_PRODUCT = `Welcome to the product
description page at <span className={tabs.store}>Safari store!</span> Here you will find all the
necessary information about our product, which offers the perfect
combination of quality, functionality, and reliability.`



export const DIMENSIONS_AND_WEIGHT = 'Dimensions and Weight:'

export const MATERIALS = 'Materials:'

export const COLOR_AND_DESIGN = 'Color and Design:'

export const FUNCTIONALITY = 'Functionality'

export const PERFORMANCE = 'Performance:'

export const COMPATIBILITY = 'Compatibility:'

export const SAFETY = 'Safety:'

export const CONVENIENT_DIMENSIONS = 'Convenient dimensions and lightweight make our product perfect for use in any conditions.'

export const MADE_OF_HIGH_QUALITY = 'Made of high-quality materials ensuring durability and reliability in operation.'

export const AVAILABLE_IN_VARIOUS = 'Available in various color options to meet your preferences and stylistic choices.'

export const FEATURES_A_WIDE = 'Features a wide range of functions that make it versatile and easy to use'

export const GUARANTEES_HIGH_PERFORMANCE = 'Guarantees high performance and efficient operation throughout its service life.'

export const COMPATIBLE_WITH = 'Compatible with various devices and accessories for maximum comfort and convenience.'

export const COMPLIES_WITH_ALL = 'Complies with all necessary safety standards so you can use it with confidence and peace of mind.'

export const BENEFITS_OF_PURCHASE = 'Benefits of Purchase:'

export const HIGHT_QUANTITY = 'High Quality:'

export const VERSATILITY = 'Versatility:'

export const STYLISH_DESIGN = 'Stylish Design:'

export const OUR_PRODUCTS_ARE_MANUFACTURED = 'Our products are manufactured using the most advanced technologies and best materials to ensure durability and reliability.'

export const THANKS_TO_A_WIDE = 'Thanks to a wide range of features and capabilities, our product is suitable for various needs and situations.'

export const THE_ELEGANT_AND_MODERN = 'The elegant and modern design of our product will give your look a unique and distinctive appearance.'

export const PRODUCT = 'Product'

export const USER_MANUAL = 'User Manual'

export const INSTRUCTION = 'Instruction:'

export const PLEASE_CAREFULLY = `Please carefully read the accompanying user manual
before using the product to derive maximum benefit and avoid unforeseen situations.`


export const WARRANTY = 'Warranty:'

export const WE_GUARANTEE_THE_QUANTITY = `We guarantee the quality and reliability of our product
and provide a 1-year warranty from the date of purchase. In case of
defects or malfunctions, contact our support service for qualified assistance`

export const SUPPORT_AND = 'Support and Maintenance:'

export const OUR_SPECIALISTS = `Our specialists are ready to provide you with full support and assistance in any matters related to our product.
Contact us by any convenient means,
and we will be happy to help you solve any issues or questions that arise.`


//----------------------------------TabsThree


//-----------------------------------CommentsList

export const WRITE_A_REVIEW = 'Write a Review'

export const SHARE_YOUR_THOUGHTS = 'Share your thoughts with the community.'

//-----------------------------------/CommentsList


//---------------------------------CreateComments

export const OVERALL_RATING = 'Overall rating *'

export const NAME_CONSTANT = 'name'

export const REVIEW_CONSTANT = 'review'

export const PUBLISH_CONSTANT = 'publish'


//---------------------------------/CreateComments
