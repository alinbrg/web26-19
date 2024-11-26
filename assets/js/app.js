import { data, greetUser } from "./data.js";
// 1.დაწერეთ ფუნქცია რომელიც პარამეტრად მიიღებს ერთ მთელ რიცხვს და დააბრუნებს true თუ რიცხვი არის 5-ის ჯერადი, ხოლო თუ არაა მაშინ false.
function isMultipleOfFive(number) {
	if (number % 5 === 0) {
		return true;
	} else {
		return false;
	}

	// return number % 5 === 0 ? true : false;

	// return number % 5 === 0;
}

// console.log(isMultipleOfFive(5)); // true
// console.log(isMultipleOfFive(9)); // false

// 2. დაწერეთ ფუნცქია რომელიც პარამეტრად მიიღებს პროდუქტის საწყის ფასს და ფასდაკლების პროცენტს რიცხვების სახით (მაგ: (1000, 10)  >> ფასი 1000, ფასდაკლება 10%). და დააბრუნებს ფასდაკლების შემდეგ გადასახდელ თანხას.
function calculateDiscountedPrice(price, discount) {
	const percentage = discount / 100; // 30 / 100 = 0.3
	const discountedPrice = price * percentage; // 997 * 0.3 = 300
	return Math.round(price - discountedPrice); // 1000 - 300 = 700
}

// console.log(calculateDiscountedPrice(997, 30)); // 900

// 3.დაწერეთ ფუნქცია, getCurrencySymbolFromCode რომელიც პარამეტრად მიიღებს ვალუტის კოდს (USD ან EUR ან GEL) სტრინგის სახით და დააბრუნებს ამ კოდის შესაბამის სიმბოლოს ($, €, ლ) თუ ისეთი კოდს გადავცემ რომლის სიმბოლოც არ მაქვს დააბრუნოს შესაბამისი შეტყობინება
function getCurrencySymbolFromCode(code) {
	const formatedCode = code.toUpperCase();

	switch (formatedCode) {
		case "USD":
			return "$";
		case "EUR":
			return "€";
		case "GEL":
			return "₾";
		default:
			return "Unknown currency code";
	}
}

// console.log(getCurrencySymbolFromCode("Usd")); // $
// console.log(getCurrencySymbolFromCode("eur")); // €

// 4.დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს uppercase სტრინგს (მაგ: MY NAME IS JANE) და დააბრუნებს lowerCase სტრინგს (my name is jane)
function convertToLowerCase(string) {
	const formatedString = string.toLowerCase();
	return formatedString;
}

// console.log(convertToLowerCase("MY NAME IS JANE")); // my name is jane

// 5.დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს რიცხვების მასივს და დააბრუნებს გაფილტრულ მასივს, (.filter) სადაც მხოლოდ კენტი რიცხვები იქნება
function filterOddNumbers(numbers) {
	const filteredArray = numbers.filter((number) => number % 2 === 1);
	return filteredArray;
}

const numbersArr = [10, 2, 30, 4, 50, 6, 7, 8, 9];

const sum = numbersArr.reduce((initialValue, element) => {
	return initialValue + element;
}, 10);

// console.log(Math.max(...numbersArr));

// console.log(filterOddNumbers(numbersArr)); // [1, 3, 5, 7, 9]

// 6*. ლექციაზე დაწერილ რეპოზიტორში მოცემულია ფაილი data.js სადაც გვაქვს პროდუქტების მასივი . გადააკოპირეთ ეს მასივი თქვენთან, ან მთლიანი ფაილი შემოიტანეთ ისეთი ფორმატით როგორც კოდშია და შემდეგ შექმენით ფუნქცია,  რომელიც პარამეტრად მიიღებს ამ მასივს და დააბრუნებს იმ ელემენტს(ობიექტს), რომლის ფასიც (price) არის უმცირესი
function getCheapestProduct(products) {
	// const cheapestProductFromProducts = products.reduce(
	// 	(cheapestProduct, product) =>
	// 		+product.price < +cheapestProduct.price ? product : cheapestProduct
	// );

	const cheapestProductFromProducts = products.sort(
		(a, b) => +a.price - +b.price
	)[0];

	return cheapestProductFromProducts;
}

// console.log(getCheapestProduct(data));

// 7*. დაწერეთ ფუნქცია რომელიც პარამეტრად მიღებს ობიექტების მასივს (ობიექტს უნდა ჰქონდეს title ველი) და მეორე პარამეტრად მიიღებს სტრინგს. ამ მასივში  . find ის დახმარებით მოვძებნოთ ელემენტი რომლის title ველის მნიშვნელობა ემთხვევა ფუნქციის მეორე პარამეტრს და დავაბრუნოთ ნაპოვნი ობიექტი,

function findProductByTitle(products, productTitle) {
	const product = products.find((product) => product.title === productTitle);
	return product;
}

// console.log(
// 	findProductByTitle(
// 		data,
// 		"1-წლიანი გარანტიით.PS4  500gb 2ჯოისტიკით+ 400თამაში"
// 	)
// );

// greetUser();
