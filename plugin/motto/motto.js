/**
  随机获取名言.

  author:prd.
  version:2016.7.22
  note:名言均来自[一个](https://www.wufazhuce.com)

  使用示例(关于使用的调用,请参考最底部的函数.):
        1.先引入本js.
        2.在想使用的地方,调用getMingYan()函数即可获取名言.[getMingYanHref()获取可以跳转至One的名言,getMingYanContent():只获取名言内容]
        3.名言中存储为json数据,index对应One的每一期号,content是名言.
        4.请尊重版权,在展示名言的同时,可将名言链接至One.例如:<a href="https://wufazhuce.com/one/14">是狼是人，日久见心。</br> - </br>小饭</a>其中的14为期号.
*/
var mingyan=new Array();
mingyan.push("{'index':1165,'content':'失眠就像是，一个无人认领的梦，一段言无所向的人生，和一场明知故犯的恋情。你不愿这些发生，但你也清楚这些早晚要发生，就像终于盼来了困意，却也迎来了黎明。</br> - </br>郑执'}");
mingyan.push("{'index':1212,'content':'道路虽然拥挤，却是寂寞的，因为它不是被爱的。 </br> - </br>《像个孩子》'}");
mingyan.push("{'index':563,'content':'如果我不想被悲伤和怀疑打倒，就非得好好吃饭不可。</br> - </br>方悄悄'}");
mingyan.push("{'index':1291,'content':'每个人都是孤独发光的星体，至亲、爱人、朋友，构成了我们的星系。星辰会陨落，轨道会迁移，或许再也见不到你。我会记得，你的光芒温暖过我的眼睛。而我，也曾闪耀在你的夜空里。 </br> - </br>路明'}");
mingyan.push("{'index':855,'content':'我觉得世界上所有事情都在你没有准备好的时候，就开始；在你准备好的时候，就结束了。</br> - </br>《年华似水》'}");

/**
    随机获取名言.

    直接调用此函数即可.
*/
function getMingYan(){
  return (mingyan[parseInt(Math.random()*(mingyan.length-1)+1)]);
}

/*
  获取名言,并链接至One.
*/
function getMingYanHref(){
  var item = getItem();
  return "<a href='https://wufazhuce.com/one/"+item.index+"' target='_blank'>"+item.content+"</a>";
}

function getItem(){
  return eval('(' +(mingyan[parseInt(Math.random()*(mingyan.length-1)+1)])+ ')');
}

/*
  只获取内容.
*/
function getMingYanContent(){
  var item = getItem();
  return item['content'];
}