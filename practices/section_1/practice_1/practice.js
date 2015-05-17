function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var collect_same=[];
  for(var i=0;i<collection_a.length;i++){
    for(var x=0;x<collection_b.length;x++){
      if( collection_a[i]==collection_b[x]){
        collect_same.push(collection_b[x]);
      }
    }
  }
   return  collect_same;
}

module.exports = collect_same_elements;
