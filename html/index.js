var i = 1
var x = Math.floor(Math.random() * 100);
function myFunction()
{
  var shu = document.getElementById("shuzi").value;
  var tag = document.getElementById("bijiaojieguo");

  if (shu == x)
  {
    // document.write("你猜对了")
    tag.innerHTML += "<p>" + i + ".你猜对了,你猜了" + i + "次</p>";
  }
  else if (shu - 30 > x)
  {
    // alert("你猜的太大了")
    tag.innerHTML += "<p>" + i + ".你猜的太大了</p>";
  }
  else if (shu > x)
  {
    // alert("你猜大了")
    tag.innerHTML += "<p>" + i + ".你猜大了</p>";
  }
  else if (shu + 30 < x)
  {
    // alert("你猜的太小了")
    tag.innerHTML += "<p>" + i + ".你猜的太小了</p>";
  }
  else if
  {
    // alert("你猜小了")
    tag.innerHTML += "<p>" + i + ".你猜小了</p>";
  }
  else
  {

  }
  i = i + 1;
}
