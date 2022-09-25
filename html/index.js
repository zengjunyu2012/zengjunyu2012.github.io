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
  else if (i == 1)
  {
    alert("这个数不错哦！")
  }
  else if (i == 2)
  {
    alert("哇！你真棒！！！")
  }
  else if (i == 3)
  {
    alert("good！")
  }
  else if (i == 4)
  {
    alert("我的天吶！你怎么这么快就离答案这么近了")
  }
  else if (i == 5)
  {
    alert("你还有1半时间呢！")
  }
  else if (i == 6)
  {
    alert("马上要结束了！")
  }
  else if (i == 7)
  {
    alert("真不错！对了，你要猜的数是从100～0的哦～")
  }
  else if (i == 8)
  {
    alert("你还有不到5次的机会了！")
  }
  else if (i == 9)
  {
    alert("加油！！！")
  }
  else if (i == 10)
  {
    alert("呀！你只有1次机会了！！！")
  }
  else if (i == 11)
  {
    alert("你输了！再来一局吧！")
  }
  else{}
  i = i + 1;
}
