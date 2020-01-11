function defaultOpen(){
  document.getElementById("defaultOpen").click();
  $('.fullStackNonRecResult').hide();
  $('.fullStackRecResult').hide();
}
$('#pushButton').on('click', function() {
  var inputValue = $('#popInput').val();
  if(inputValue){
   $('.fullList').fadeOut(1);
    linkedListStack.push(inputValue);
    document.getElementById('popInput').value = '';
  }
  if(linkedListStack.size() === 0){
    $('.fullList').html("Yığın boş");
  }else {
    $('.fullList').fadeIn(200).html(linkedListStack.printHtml());
  }
});
$('#popButton').on('click', function() {
   $('.fullList').fadeOut(1);
    if(linkedListStack.size() >= 1){
      linkedListStack.pop();
      if(linkedListStack.size()>0){
        $('.fullList').fadeIn(200).html(linkedListStack.printHtml());
      }else {
        $('.fullList').fadeIn(200).html("Yığın boş");
      }
  }else {
    $('.fullList').fadeIn(200).html("Yığın boş");
  }
});

$('#searchStach').on('click',function(){
  var inputValue = $('#popInput').val();
  if(inputValue){
    document.getElementById('popInput').value = '';
  }
  if(linkedListStack.size() === 0){
    $('.fullList').html("Yığın boş");
  }else {
    alert("none");
  }
});
$('#nonRecSortButton').on('click', function() {
   $('.fullStackNonRecResult').fadeOut(1);
    if(linkedListStack.size() === 0){
    $('.fullStackNonRecResult').fadeIn(200).html("Yığın boş");
  }else {
        linkedListStack.nonRecSelectionSort();
  }
});
$('#recSortButton').on('click', function() {
   $('.fullStackRecResult').fadeOut(1);
    if(linkedListStack.size() === 0){
    $('.fullStackRecResult').fadeIn(200).html("Yığın boş");
  }else {
        linkedListStack.recSelectionSort();
  }
});
/*Menu tabları*/
function openTab(evt, tabname) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabname).style.display = "block";
  evt.currentTarget.className += " active";
}
