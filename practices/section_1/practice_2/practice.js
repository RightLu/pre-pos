function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
var collect_same=[];
  for(var i=0;i<collection_a.length;i++){
    for(var x=0;x<collection_b[0].length;x++){
      if(collection_a[i]==collection_b[0][x]){
        collect_same.push(collection_a[i]);
      }
    }
  }
  return collect_same;
}

module.exports = collect_same_elements;
