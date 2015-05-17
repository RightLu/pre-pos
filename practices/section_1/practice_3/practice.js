function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var collect_same=[];
  for(var i=0;i<collection_a.length;i++){
    for(var x=0;x<object_b.value.length;x++){
      if(collection_a[i]==object_b.value[x]){
        collect_same.push(collection_a[i]);
      }
    }
  }
  return collect_same;
}
module.exports = collect_same_elements;
