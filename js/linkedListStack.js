// Zeynel Abidin Özkale
// 2014556052
// II education
function linkedListStack(){
  this.head=null;
}

linkedListStack.prototype.pop = function(){
    this.head = this.head.next;
//Bağlı listenin head kısmını
//çıkartıp bir önceki elemanı head olarak ayarlıyoruz.
}
linkedListStack.prototype.push = function(val){
  var newNode = {
    data: val,
    next: this.head
  }
  this.head = newNode;
//listeye (yığına) yeni eleman ekliyoruz
}
linkedListStack.prototype.size = function(){
  var current = this.head;
  var count = 0;
  while(current !== null){
    count++;
    current = current.next;
  }
  return count;
}
linkedListStack.prototype.printHtml = function(){
//Doğrudan tüm listeyi html formatında döndürüyoruz
  var htmlContent ="";
  var current = this.head;
  while (current !== null) {
    htmlContent += "<span class='stackElement'>";
    htmlContent += current.data;
    htmlContent +="</span>";
    current = current.next;
  }
  return htmlContent;
}
linkedListStack.prototype.printSortedStack = function(arr){
  // Sıralanmış isteyi html formatında döndürüyoruz
  var htmlContent ="";
  var current = this.head;
  if(arr){
    for(var i = 0; i < arr.length; i++){
      htmlContent += "<span class='stackElement'>";
      htmlContent += arr[i];
      htmlContent +="</span>";
    }
  }
  else{
    while (current !== null) {
      htmlContent += "<span class='stackElement'>";
      htmlContent += current.data;
      htmlContent +="</span>";
      current = current.next;
    }
  }
  return htmlContent;
}
linkedListStack.prototype.nonRecSelectionSort = function() {
  $('.fullStackNonRecResult').fadeIn(200).html(this.printSortedStack());
    var arr = [];
    var current = this.head;
    var index=0;
    while(current!=null){
      arr[index]=current.data;
      current=current.next;
      index++;
    }
    for(var i = 0; i < arr.length; i++){
      var min = i;
      for (var j = i+1; j < arr.length; j++) {
        if(parseInt(arr[j]) < parseInt(arr[min])){
            min = j;
        }
      }
      if(min != i){
      var temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
      $('.fullStackNonRecResult').fadeIn(500).append("<br>" + linkedListStack.printSortedStack(arr));
    }
  }
  return linkedListStack;
}
function minIndex(arr, i, j)
{
   if (i == j)
       return i;
   var k = minIndex(arr, i + 1, j);
   return (parseInt(arr[i]) < parseInt(arr[k]))? i : k;
}
function recurSelectionSort(arr, n, index)
{
    if (index == n)
       return;
    var k = minIndex(arr, index, n-1);

    if (k != index){
       var temp = arr[k];
       arr[k] = arr[index];
       arr[index] = temp;
      $('.fullStackRecResult').fadeIn(500).append("<br>" + linkedListStack.printSortedStack(arr));
    }
    recurSelectionSort(arr, n, index + 1);
}
linkedListStack.prototype.recSelectionSort = function() {
  $('.fullStackRecResult').fadeIn(200).html(this.printSortedStack());
    var arr = [];
    var current = this.head;
    var index=0;
    while(current!=null){
      arr[index]=current.data;
      current=current.next;
      index++;
    }
    recurSelectionSort(arr, arr.length, 0);
  return linkedListStack;
}
var linkedListStack = new linkedListStack();
