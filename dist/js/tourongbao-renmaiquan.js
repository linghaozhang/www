function gotoTourongbao(n){window.location.href=n}function shaixuan(){$(".xuanzeList").show(),$(".btnsBoxx").show()}function shaixuanhide(){$(".xuanzeList").hide(),$(".btnsBoxx").hide()}function diqu(){$(".diqu2").show(),$(".diqubtnsBoxx").show()}function diquhide(){$(".diqu2").hide(),$(".diqubtnsBoxx").hide()}var allConfig,allUser,shoucangList;function fabuBtn(){window.location.href="./fabu.html"}function sousuoquxiao(){$(".sousuoBox").hide()}function openSousuo(){$(".sousuoBox").show()}function shoucangList(){$.ajax({url:WWW_URL+"/favorite/get",type:"get",async:!1,headers:HEADER,data:{userId:sessionStorage.getItem("TRQuserid")},success:function(n){shoucangList=n.data,console.log(11,n),allSer()}})}function allSer(){var n,t,e;$(".contentBox").empty(),sousuoquxiao(),diquhide(),shaixuanhide();var o=$(".diqu").find(" .xnbtnSelected");n=0==o.length?"":"全国"==o.html()?"":o.html();var s=$(".jigouleibie").find(" .xnbtnSelected");t=0==s.length?"":"全部"==s.html()?"":s.attr("configId");var a=$(".jigouxuanze").find(" .xnbtnSelected");e=0==a.length?"":"全部"==a.html()?"":a.attr("configId");var i=$(".sousuoinput").val();console.log(112233,n,t,e,i),""!=t&&(t='["'+t+'"]'),""!=e&&(e='["'+e+'"]'),$.ajax({url:WWW_URL+"/search/user",type:"GET",headers:HEADER,data:{region:n,orgType:t,org:e,searchTxt:i},success:function(n){$(".box").empty();for(var t=n.data,e=0;e<t.length;e++){var o=t[e],s="";s+='<div class="item">',s+='<div class="logolist">',s+='<img src="'+IMG_URL+o.avatar+'" alt="" onclick="QJgotoGeren('+o.id+');">',s+="</div>",s+='<div class="main" onclick="QJgotoGeren('+o.id+');" >',s+='<p class="tit">',s+='<span style="margin-right:5px;font-size: 16px;">'+o.name+"</span>",s+='<span style="font-size: 16px;">'+o.position+"</span>",s+="</p>",s+='<p class="lab">'+o.orgName,s+="</p>",s+="</div>",s+="</div>",s+="</div>",$(".box").prepend(s)}console.log(887,n)}})}function shoucang(t,n){$.ajax({url:WWW_URL+"/favorite/create",type:"post",headers:HEADER,async:!1,data:{userId:sessionStorage.getItem("TRQuserid"),type:"1",collectId:n,txt:""},success:function(n){0==n.status&&(layer.msg("收藏成功"),$(t).html("已收藏"),$.ajax({url:WWW_URL+"/favorite/get",type:"get",async:!1,headers:HEADER,data:{userId:sessionStorage.getItem("TRQuserid")},success:function(n){shoucangList=n.data,console.log(11,n),allSer()}})),console.log(234,n)}})}function quxiaoshoucang(n){$.ajax({url:WWW_URL+"/favorite/delete",type:"GET",headers:HEADER,async:!1,data:{userId:sessionStorage.getItem("TRQuserid"),collectId:n},success:function(n){0==n.status&&(layer.msg("取消收藏成功"),$.ajax({url:WWW_URL+"/favorite/get",type:"get",async:!1,headers:HEADER,data:{userId:sessionStorage.getItem("TRQuserid")},success:function(n){shoucangList=n.data,console.log(11,n),allSer()}})),console.log(99,n)},error:function(n,t,e){401==n.status&&(layer.msg("您还未登录，请您先登陆！"),setTimeout(function(){window.location.href="./login.html"},1500))}})}$(".tabTou").css({color:"#dd514c"}),$(".renmaiquanView").css({color:"#dd514c"}),$.ajax({url:WWW_URL+"/config",type:"get",headers:HEADER,success:function(n){var t=n.data;allConfig=t,console.log(t);for(var e=0;e<t.length;e++){if(22==t[e].type){var o='<div class="am-u-sm-6 xnbtnbox"><button class="am-btn am-btn-default am-btn-xs xnbtn" style="width:92%;" type="button" configId="'+t[e].id+'">'+t[e].cat+"</button></div>";$(".diqu").append(o)}if(18==t[e].type){o='<div class="am-u-sm-6 xnbtnbox"><button class="am-btn am-btn-default am-btn-xs xnbtn" style="width:92%;" type="button" configId="'+t[e].id+'">'+t[e].cat+"</button></div>";$(".jigouleibie").append(o)}if(12==t[e].type){o='<div class="am-u-sm-6 xnbtnbox"><button class="am-btn am-btn-default am-btn-xs xnbtn" style="width:92%;" type="button" configId="'+t[e].id+'">'+t[e].cat+"</button></div>";$(".jigouxuanze").append(o)}}console.log(n)},error:function(n){layer.msg("您还未登录，请先登录"),setTimeout(function(){window.location.href="./login.html"},1500),console.log(666,n)}}),$(document).on("click",".diqu .xnbtn",function(){console.log(888),$(".diqu").find(".xnbtn").removeClass("xnbtnSelected"),$(this).addClass("xnbtnSelected")}),$(document).on("click",".jigouleibie .xnbtn",function(){console.log(888),$(".jigouleibie").find(".xnbtn").removeClass("xnbtnSelected"),$(this).addClass("xnbtnSelected")}),$(document).on("click",".jigouxuanze .xnbtn",function(){console.log(888),$(".jigouxuanze").find(".xnbtn").removeClass("xnbtnSelected"),$(this).addClass("xnbtnSelected")}),$(document).on("click",".zichanhangye .xnbtn",function(){console.log(888),$(".zichanhangye").find(".xnbtn").removeClass("xnbtnSelected"),$(this).addClass("xnbtnSelected")}),$(document).on("click",".zichanxinxiduijie .xnbtn",function(){console.log(888),$(".zichanxinxiduijie").find(".xnbtn").removeClass("xnbtnSelected"),$(this).addClass("xnbtnSelected")}),$.ajax({url:WWW_URL+"/user/all",type:"GET",async:!1,headers:HEADER,success:function(n){allUser=n.data}}),shoucangList(),allSer();