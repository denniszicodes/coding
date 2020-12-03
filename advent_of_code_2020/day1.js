/*
--- Day 1: Report Repair ---

The tropical island has its own currency and is entirely cash-only. The gold coins used there have a little picture of a starfish; the locals just call them stars. None of the currency exchanges seem to have heard of them, but somehow, you'll need to find fifty of these coins by the time you arrive so you can pay the deposit on your room.

To save your vacation, you need to get all fifty stars by December 25th.

Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

Before you leave, the Elves in accounting just need you to fix your expense report (your puzzle input); apparently, something isn't quite adding up.

Specifically, they need you to find the two entries that sum to 2020 and then multiply those two numbers together.

For example, suppose your expense report contained the following:

1721
979
366
299
675
1456

In this list, the two entries that sum to 2020 are 1721 and 299. Multiplying them together produces 1721 * 299 = 514579, so the correct answer is 514579.

Of course, your expense report is much larger. Find the two entries that sum to 2020; what do you get if you multiply them together?
*/

//Part 1

const numbers = [1686,1337,1780,1305,1341,1120,1197,1786,1819,1414,1714,1232,1672,1617,817,1665,1603,1063,2007,1609,2008,1878,1660,1834,1901,323,1321,1380,1598,1938,1575,502,2010,1470,1902,1779,1081,1535,2002,1168,1702,1973,1866,1115,1774,1274,1845,1584,1574,1772,1735,1631,1628,1907,1466,756,1252,1627,1999,1826,1802,1921,1536,1549,1602,1421,1451,1709,1722,1951,1689,1106,1454,1384,1553,1604,1595,468,1082,1576,1958,1913,1075,1708,1775,701,1764,1439,1600,1922,1815,1839,1396,1974,1946,1965,1544,2003,1693,1594,1547,1054,1796,1945,1773,1483,1563,1721,1789,1427,1915,1069,1161,1551,1677,1692,2005,1770,1940,1346,1068,1588,1618,1468,1621,1749,1275,1315,1382,1847,1843,1751,1876,1667,1835,1848,1623,1810,1877,1438,968,1867,1763,1390,1967,1785,1530,1343,1423,415,1606,1928,1985,1781,1952,1459,1339,1644,1860,1646,1087,1880,1577,1759,1863,1766,1840,1613,1733,1808,1657,1169,1934,1729,1688,1138,1937,1112,1865,1853,1793,1292,1698,1624,1335,1264,1827,1874,1725,1378,1083,1173,1923,1842,1207,1614,1425,1794,1404,1862];

function findTwoEntriesForSum(arr, sum) {
    let foundNumbers = []
    for(const item of arr){
        if(arr.includes(sum - item)) {
            foundNumbers = foundNumbers.concat([item, sum-item])
            break
        }
    }
    return foundNumbers
}

const twoEntries = findTwoEntriesForSum(numbers, 2020)
const twoMultiplied = twoEntries.reduce((a,b) => a*b , 1)
console.log(`The entries are '${twoEntries[0]}' and '${twoEntries[1]}'. The result is ${twoEntriesFactor}`)

/*
--- Part Two ---
The Elves in accounting are thankful for your help; one of them even offers you a starfish coin they had left over from a past vacation. They offer you a second one if you can find three numbers in your expense report that meet the same criteria.

Using the above example again, the three entries that sum to 2020 are 979, 366, and 675. Multiplying them together produces the answer, 241861950.

In your expense report, what is the product of the three entries that sum to 2020?
*/

//Part 2

function findThreeEntriesForSum(arr, sum){
    let foundNumbers = []
    for(const firstItem of arr){
        let combinedResult = sum - firstItem
        for(const secondItem of arr){
            if(arr.includes(combinedResult - secondItem)){
                foundNumbers = foundNumbers.concat([firstItem, secondItem, combinedResult - secondItem])
                break
            }
        }
        if(foundNumbers.length > 0) break
    }
    return foundNumbers
}

const threeEntries = findThreeEntriesForSum(numbers, 2020)
const threeMultiplied = threeEntries.reduce((a, b) => a*b, 1)
console.log(`The entries are '${threeEntries[0]}' and '${threeEntries[1]}' and '${threeEntries[2]}'. The result is ${threeMultiplied}`)
