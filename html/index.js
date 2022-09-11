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
  else
  {
    // alert("你猜小了")
    tag.innerHTML += "<p>" + i + ".你猜小了</p>";
  }
  if (shu == 50)
  {
      alert("成功率为50%")
  }
  else if (shu == 75)
  {
      alert("成功率为75%")
  }
  else if (shu < 75 and shu > 75)
  {
      alert("成功率为90%")
  }
  else if (shu < 75)
  {
      alert("成功率为99%到100%")
  }
  else if (shu > 75)
  {
      alert("成功率为90到100%")
  }
  else{}
  i = i + 1;
}
