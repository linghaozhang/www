var allUser,shoucangList;function shoucangList(){$.ajax({url:WWW_URL+"/favorite/get",type:"get",async:!1,headers:HEADER,data:{userId:sessionStorage.getItem("TRQuserid")},success:function(s){console.log(s);for(var a=s.data,t=0;t<a.length;t++){var o=a[t],e=o.collectInfo,n="";n+='<div class="item">',n+='<div class="logolist">',n+='<img src="'+IMG_URL+e.avatar+'" alt="" onclick="QJgotoGeren('+o.id+');">',n+="</div>",n+='<div class="main">',n+='<p class="tit">',n+='<span onclick="QJgotoGeren('+o.id+');">'+e.name+"</span>",n+="<span>"+e.position+"</span>",n+="</p>",n+='<p class="lab">'+e.orgName,n+="</p>",n+="</div>",n+='<div class="btnbox">',n+='<button type="button" class="am-btn am-btn-default xdbtn" onclick="quxiaoshoucang('+e.id+')" );">取消收藏</button>',n+="</div>",n+="</div>",$(".box").append(n)}}})}function quxiaoshoucang(s){$.ajax({url:WWW_URL+"/favorite/delete",type:"GET",headers:HEADER,data:{userId:sessionStorage.getItem("TRQuserid"),collectId:s},success:function(s){0==s.status&&(layer.msg("取消收藏成功"),setTimeout(function(){window.location.href="./shoucangList.html"},1500)),console.log(99,s)},error:function(s,a,t){401==s.status&&(layer.msg("您还未登录，请您先登陆！"),setTimeout(function(){window.location.href="./login.html"},1500))}})}$.ajax({url:WWW_URL+"/user/all",type:"GET",async:!1,headers:HEADER,success:function(s){allUser=s.data}}),shoucangList();