function isValidEmail(email: string): boolean {
  //   للتحقق من صحة البريد الإلكتروني الأساسي
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const testEmail1 = "example@domain.com";
const testEmail2 = "example@domain";
const testEmail3 = "example@domain.org";

console.log(`Is "${testEmail1}" valid?`, isValidEmail(testEmail1)); // true
console.log(`Is "${testEmail2}" valid?`, isValidEmail(testEmail2)); // false
console.log(`Is "${testEmail3}" valid?`, isValidEmail(testEmail3)); // true


// وظيفة في TypeScript للتحقق مما إذا كانت سلسلة نصية (string) تمثل بريدًا إلكترونيًا صالحًا باستخدام التعبيرات النمطية (Regular Expressions).