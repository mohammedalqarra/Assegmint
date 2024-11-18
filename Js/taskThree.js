// removeDuplicates 
// تأخذ مصفوفة نصوص وتزيل القيم المكررة باستخدام Set

function removeDuplicates(strings) {
  const uniqueStrings = [...new Set(strings)];
  return uniqueStrings;
}

const strings = ["one", "two", "one", "three", "two", "foure"];
const uniqueArray = removeDuplicates(strings);
console.log("Unique values:", uniqueArray);
