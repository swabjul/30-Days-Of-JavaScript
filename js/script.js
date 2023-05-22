const sentence = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month."

let perMonth = sentence.replace(/per month/g, "* 12");

perMonth = perMonth.replace(/\,/g, " +");

const annual = perMonth.replace(/[a-zA-z]/g, "");



const result = eval(annual);


console.log(annual);
console.log(result);



