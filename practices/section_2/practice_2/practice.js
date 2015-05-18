function count_same_elements(collection) {
  //在这里写入代码
    var array = [];

    for(var i = 0; i < collection.length; i++) {
        var exist = false;
        var key = collection[i].length > 2 ? collection[i].substring(0,1) : collection[i];
        var count = collection[i].length > 2 ? parseInt(collection[i].substring(2)) : 1;

        for(var x = 0; x < array.length; x++) {
            if(array[x].key === key) {
                array[x].count = array[x].count + count;
                exist = true;
                break;
            }
        }
        if(!exist) {
            var temp = {};
            temp.key = key;
            temp.count = count;
            array.push(temp);
        }
    }
    return array;
}

module.exports = count_same_elements;
