## Marc's Cakewalk


Marc loves cupcakes, but he also likes to stay fit. Each cupcake has a calorie count, and Marc can walk a distance to expend those calories. If Marc has eaten  cupcakes so far, after eating a cupcake with  calories he must walk at least  miles to maintain his weight.

### Example

If he eats the cupcakes in the order shown, the miles he will need to walk are . This is not the minimum, though, so we need to test other orders of consumption. In this case, our minimum miles is calculated as .

Given the individual calorie counts for each of the cupcakes, determine the minimum number of miles Marc must walk to maintain his weight. Note that he can eat the cupcakes in any order.

### Function Description

Complete the marcsCakewalk function in the editor below.

marcsCakewalk has the following parameter(s):

int calorie[n]: the calorie counts for each cupcake
**Returns**

long: the minimum miles necessary
Input Format

The first line contains an integer , the number of cupcakes in .
The second line contains  space-separated integers, .
