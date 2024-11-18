//واجهة المنتج ووظيفة السعر الإجمالي
// نعمل على تحديد الهيكل 
//يحدد أن كل كائن في المصفوفة products
interface Product {
  name: string;
  price: number;
}

//ستفهم على الفور أن أي كائن من النوع Product يحتوي على خصائص محددة.


// تعريف دالة calculateTotalPrice
// تأخذ مصفوفة من الكائنات (المنتجات) التي تتبع هيكل Product.
function calculateTotalPrice(products: Product[]): number {
  // reduce لحساب مجموع أسعار جميع المنتجات.
  //total: متغير يحتفظ بالمجموع التراكمي للأسعار
  //لقيمة الابتدائية: هي 0، وتعني أن المجموع يبدأ من صفر.
  return products.reduce((total, product) => total + product.price, 0);
};

const products: Product[] = [
  { name: "one", price: 10 },
  { name: "two", price: 5 },
  { name: "three", price: 7 },
];
//يتم استدعاء الدالة وتمرير مصفوفة المنتجات إليها
//console.log: يعرض النتيجة النهائية (الإجمالي)
console.log(`Total Price: ${calculateTotalPrice(products)}`);


