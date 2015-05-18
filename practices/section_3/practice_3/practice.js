function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
    var array = [];

    for(var i = 0; i < collection_a.length; i++){
        var exist = false;

        for(var x = 0; x < array.length; x++){
            if(array[x].key == collection_a[i]){
                array[x].count ++;
                exist = true;
            }
        }
        if(!exist){
            var temp = {};
            temp.key = collection_a[i];
            temp.count = 1;
            array.push(temp);
        }
    }

    for(var i  = 0; i < object_b.value.length; i++){
      for(var j = 0; j < array.length; j++){
        if(object_b.value[i] == array[j].key){
          array[j].count = array[j].count - Math.floor(array[j].count/3);
        }
      }
    }
    return array;
}

module.exports = create_updated_collection;
