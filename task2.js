//task 1
const products = [
  { name: "protein bar", price: 5, quantity: 2 },
  { name: "apple sauce", price: 7, quantity: 1 },
  { name: "tofu", price: 10, quantity: 2 },
  { name: "water", price: 0.6, quantity: 10 },
];

let totalCost = 0;

for (let i = 0; i < products.length; i++) {
  totalCost += products[i].price * products[i].quantity;
}
console.log("კალათის სრული ღირებულება " + totalCost + "₾");
if (totalCost > 100) {
  console.log("გილოცავთ! თქვენ მიირეთ უფასო მიტანის სერვისი!");
} else {
  console.log("მიტანის სერვისისთვის საჭიროა 100₾-ზე მეტი თანხა.");
}

//task 2

const items = [
  { name: "პროტეინის ფილა", price: 5 },
  { name: "ვაშლის ფაფა", price: 7 },
  { name: "ტოფუ", price: 10 },
  { name: "წყალი", price: 0.6 },
];
export let higestPrice = 0;
export let mostExpensiveitem;

for (const item of items) {
  if (item.price > higestPrice) {
    higestPrice = item.price;
    mostExpensiveitem = item.name;
  }
}
console.log(
  "ყველაზე ძვირადღირებული პროდუქტია : " +
    mostExpensiveitem +
    " , ფასი: " +
    higestPrice +
    "₾"
);

//task 3

const fruits = ["მანგო", "ანანასი", "პაპაია", "ბანანი", "ქოქოსი", "გუავა"];
let fruitList = fruits.join(", ");
console.log(fruitList);
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reversed = numbers.reverse();
alert(reversed);

const nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const nums2 = [10, 20, 30, 40, 50];
let concatenated = nums1.concat(nums2);
console.log(concatenated);

const colors = ["იისფერი", "მწვანე", "ლურჯი", "ვარდისფერი", "ყვითელი", "შავი"];
colors.push("ვერცხლისფერი");
console.log(colors);

const animals = ["ჯირაფი", "პანდა", "კატა", "სპილო", "პანტერა"];
let updated = animals.pop();
console.log(`ახალი სია: ${animals}`);
console.log(`წაშლილი ცხოველი: ${animals.pop()}`);
