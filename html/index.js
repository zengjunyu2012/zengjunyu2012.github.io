var i = 1;
var x = Math.floor(Math.random() * 100);
var fanhuizhuye = "你猜对了,你猜了" + i + "次";
var id = bijiaojieguo;
function myFunction()
{
  if (shu == x)
  {
    // document.write("你猜对了")
    document.getElementById("bijiaojieguo").innerHTML = fanhuizhuye;
    document.write("https://zengjunyu2012.github.io/html/index.htmlvar i = 1;
    var x = Math.floor(Math.random() * 100);
    var fanhuizhuye = "你猜对了,你猜了" + i + "次";
    var id = bijiaojieguo
    function myFunction()
    {
      document.getElementById("shuzi").value;
      if (shu == x)
      {
        // document.write("你猜对了")
        document.getElementById("bijiaojieguo").innerHTML = i. + id + fanhuizhuye;
        document.write("https://zengjunyu2012.github.io/html/index.html")
      }
      else if (shu - 30 > x)
      {
        // alert("你猜的太大了")
        document.getElementById("bijiaojieguo").innerHTML = i. + id + "你猜的太大了";
      }
      else if (shu > x)
      {
        // alert("你猜大了")
        document.getElementById("bijiaojieguo").innerHTML = i. + id + "你猜大了";
      }
      else if (shu + 30 < x)
      {
        // alert("你猜的太小了")
        document.getElementById("bijiaojieguo").innerHTML = i. + id + "你猜的太小了";
      }
      else
      {
        // alert("你猜小了")
        document.getElementById("bijiaojieguo").innerHTML = i. + id + "你猜小了";
      }
      i = i + 1;
    })
  }
  else if (shu - 30 > x)
  {
    // alert("你猜的太大了")
    document.getElementById("bijiaojieguo").innerHTML = "你猜的太大了";
  }
  else if (shu > x)
  {
    // alert("你猜大了")
    document.getElementById("bijiaojieguo").innerHTML = "你猜大了";
  }
  else if (shu + 30 < x)
  {
    // alert("你猜的太小了")
    document.getElementById("bijiaojieguo").innerHTML = "你猜的太小了";
  }
  else
  {
    // alert("你猜小了")
    document.getElementById("bijiaojieguo").innerHTML = "你猜小了";
  }
  i = i + 1;
}
