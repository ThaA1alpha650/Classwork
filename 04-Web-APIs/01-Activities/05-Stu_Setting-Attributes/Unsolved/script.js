//Better password generator 
// instead of just pick a random character which could be easy to track i think something maybe related to entropy?
//like lets password must be at least 10 characters long
//Must contain letters, numbers, special characters and at least one upper Case letter && and no spaces.
//instead of just index0= randomPick.ofArray && then on to the next index in the "sequence",
//--**
//you could do like a let array be letters = l numbers= n special characters = # and upper case be U
//instead of var password = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// and let our array be a string built from adding the corresponding value for each member of our password string [0, 1, 2 ...9]
// being chosen from our list of possible choices, picked randomly. however as math.random is really just up to vs code terminal it might be less random than we think. So...
//m We could have a randomly created array of 10 strings of 10 characters each chosen at random within the scope of randomPick[("l" + "n" + "#" + "U")]
// and then we get let choice1 be at math.random between 0 and 129 - each value corresponding to one of the possible selections within our scope. 
// and so a we have 10 strings each with 10 possible positions filled by a value chosen at random from our scope of 129 values, randomly repeated 10 times for each string.
// so we have 10 random values picked and assigned to 1 position in our array strings with 10 characters each and then so on, another ten values are chosen at random and assigned to each of our 10 positions within our string.
// then we use math.random to pick a value between 0 and 9 and the result will be the value used to pick a value and assign it to 1 of the 10 index positions of one of our strings in our array of 10 strings, which string being chose at random by assigning the result to the position of the targeted string within our array...
// And then repeat this process until we have a resulting value from each random pick operation.


//scope of possible values: 129 
// randomly selected value represented by : *
// [*, *, *, *, *, *, *, *, *, *] ; [* ... *] ; [*,*]  [*,*] and so on
//each randomly selected * within the array had a position within the array corresponding to a number between 0-9 : 0 for the first one, (the result of the first randomPick operation), 1 for the second, 2 for the 3 in line etc until the last 10th position, being 9. 
// and so once our 10 strings are populated with 10 randomPicks each,
// we pick a math.random number between 0 and 9, and that becomes the position of the value within one of the strings,
// saving that number, we then math.random another number between 0 and 9, the result being the position a string within our array
//and so we use that resulting value between 0 and 9 to fill our 10 position of our password repeating it ten times we use which ever value picked from each string from within our 10 arrays, 
// now having 10 very randomly picked characters, we can either 
// 0 - choose to use that string as the password
// 1 - or assign a number of 0-9 corresponding to each position in line and the math.random number between 0-9 to pick our 10 numbers, the first character being placed in the last position of the password, the second in first, the third in last, the 4th in first, the fifth in last , the sixth in first and so on
// and so that either or choice would be determined by either one being the number of wins or the numbers of losses resulting from 10 games of heads or tails prompted to the user, 
// with every time the user hits cancel, permutating the values of 0 and 1
// then each character of our password is chosen from the result of the random selection.