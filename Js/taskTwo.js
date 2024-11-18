//calculateSumAndAverage تأخذ مصفوفة أرقام، 
function calculateSumAndAverage(numbers) {
  //تستخدم دالة reduce لحساب المجموع الإجمالي
  const total = numbers.reduce((sum, number) => sum + number, 0);

  const average = total / numbers.length;
  //تحسب المتوسط بقسمة المجموع على عدد العناصر. تعيد النتيجة ككائن يحتوي على المجموع (total) والمتوسط (average).
  return { total, average };
}

const numbers = [10, 20, 30, 40];
const result = calculateSumAndAverage(numbers);
console.log(`Total Sum: ${result.total}`);
console.log(`Average: ${result.average}`);

