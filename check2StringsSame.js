function stringSame(value1, value2){
    function sortString(value){
        return  value.split('').sort().join('')

    }
return sortString(value1)===sortString(value2)
}
const string1 = "yxxy"
const string2 = "pxxy"
const string3 = "xyxy"


console.log("case 1:",stringSame(string1,string2),"; case 2:", stringSame(string1,string3))
