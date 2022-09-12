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
  else if (shu < x)
  {
    // alert("你猜小了")
    tag.innerHTML += "<p>" + i + ".你猜小了</p>";
  }
  // Bootstrap 与 JavaScript的合体版div
  else if (shu == 50)
  {
        <div class="bar" style="width: 50%;">胜算:50%</div>
  }
  else if (shu == 75)
  {
        <div class="bar" style="width: 75%;">胜算:75%</div>
  }
  else if (shu > 75)
   {
        <div class="bar" style="width: 90%;">胜算:90%</div>
   }
  else if (shu < 75)
  {
        <div class="bar" style="width: 90%;">胜算:90%</div>
        \
        <div class="bar" style="width: 99%;">胜算:99%</div>
        \
        <div class="bar" style="width: 100%;">胜算:100%</div>
   }
  i = i + 1;
}
