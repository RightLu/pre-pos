function count_same_elements(collection) {
  //在这里写入代码
    var array = [];

    for(var i = 0; i < collection.length; i++){
        var exist = false;

        for(var x = 0; x < array.length; x++){
            if(array[x].key == collection[i]){
                array[x].count ++;
                exist = true;
            }
        }
        if(!exist){
            var temp = {};
            temp.key = collection[i];
            temp.count = 1;
            array.push(temp);
        }
    }
    return array;
}

module.exports = count_same_elements;
