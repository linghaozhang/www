function submitFun(){return console.log(999),console.log(1111222,$(".title").val()),""==$(".title").val()?(layer.msg("请输入建议标题"),!1):""==$(".content").val()?(layer.msg("请输入建议内容"),!1):void $.ajax({url:WWW_URL+"/feedback/create",type:"POST",headers:HEADER,data:{userId:sessionStorage.getItem("TRQuserid"),title:$(".title").val(),content:$(".content").val()},success:function(t){0==t.status?(layer.msg("您的建议已反馈给管理员"),setTimeout(function(){window.location.href="./my.html"},1500)):layer.msg(t.msg)},error:function(t,e,o){401==t.status&&(layer.msg("您还未登录，请您先登陆！"),setTimeout(function(){window.location.href="./login.html"},1500))}})}