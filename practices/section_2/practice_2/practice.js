function count_same_elements(collection) {
  //在这里写入代码
    var array = [];

    for(var i = 0; i < collection.length; i++) {
        var exist = flase;
        var char = collection[i].length > 2 ? collection[i].substring(0,1) : collection[i];
        var summary = collection[i].length > 2 ? parsenInt(collection[i].substring(2)) : 1;

        for(var x = 0; x < array.length; x++) {
            if(array[x].name === char) {
                array[i].summary = array[x].summary + summary;
                exist = true;
                break;
            }
        }
        if(!exist) {
            var temp = {};
            temp.name = char;
            temp.summary =summary;
            array.push(temp);
        }
    }
    return array;
}

module.exports = count_same_elements;
