<script language="javascript"type="javascript">
var i = 1;
var x = Math.floor(Math.random() * 100);
var fanhuizhuye = "你猜对了,你猜了" + i + "次";
function myFunction()
{
        // hanshu = document.getElementById("hanshu").value;
        // alert(hanshu)
        shu = document.getElementById("shuzi").value;
        // if(shu == x)
        // {
        // throw "你猜对了"
        // document.write("<a href='https://zengjunyu2012.github.io/html/c.html'>返回主页</a>")
        // document.write("<a href='https://zengjunyu2012.github.io/html/c.html'>猜数游戏</a>")
        // }
        // if(shu - 30 > x) throw "你猜的太大了"
        // if(shu > x) throw "你猜大了"
        // if(shu + 30 < x) throw "你猜的太小了"
        // if(shu < x) throw "你猜小了"
        // if(shu !== "") throw "请重新输入数字"
        if (shu == x)
        {
          // document.write("你猜对了")
          document.getElementById("bijiaojieguo").innerHTML = fanhuizhuye;
          document.write("<a href='https://zengjunyu2012.github.io/html/index.html'>返回主页</a>")
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
        i = i + 1
}
</script>
