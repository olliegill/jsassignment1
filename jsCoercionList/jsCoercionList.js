var coercionList =
 [undefined, null, true, false, "", "1.2", "one", 0, -0, NaN, Infinity, -Infinity, 1, {}, [], [12], ['something'], function(){} ];

coercionList.forEach(function(item){
  console.log("title: " + item + "\n\n" + (item + "") +"\n" + (+item) +"\n" + (!!item));
});
 /* If one operand of the + operator is a string, the other is coerced into a string.
The unary + operator always coerces to a Number.
The ! coerces to a Boolean and negates it. ## ==
null == undefined
When Number == String, types are coerced to Number
anything == true, first it will try strict equality, then it will change true to 1 and try again.
The same as above for false, but it coerces to 0
Object == Number or String, the Object is coerce to the type of other operand using .toString() or .valueOf()

*/
