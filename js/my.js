
// 修改底部TAB颜色
$('.tabMy').css({color:"#dd514c"});

/*
* 根据数据渲染UI
* */

$.ajax({
    url: WWW_URL+'/user',
    type: 'GET',
    headers:HEADER,
    success:function(data){
        var d = data.data;
        var wallet = d.wallet;//余额
        $('#yueNum').html(wallet);

        console.log(d);
        // 修改头像

        var imgElement = '<img id="phone" src='+IMG_URL+d.avatar+' alt="" class="logo" onclick="goto(./gerenxiangqing.html);">'
        $('#phoneImageBox').append(imgElement);


        // $('#phone').attr({src:IMG_URL+d.avatar});

        // 修改姓名、职位、公司
        $('.name').html(d.name);
        $('.sf').html(d.position);
        $('.zhiwei').html(d.orgName);

        var type = d.type;
        // 如果是资金方
        if (type == 1){

            // 显示修改资金投向偏好按钮
            $('#zijintouxiang').css({display:"block"});

            // 如果还没有付钱
            if (d.payOk == 0){
                $('.jbzj').show();
            }else{
                $('.yijiao').show();
            }

            // 如果是资产方
        }else{
            // 如果还没有付钱
            if (d.payOk == 0){
                $('.cwhy').show();
            }else{
                $('.yishihuiyuan').show();
            }
        }


    },
    error:function (XMLHttpRequest, textStatus, errorThrown) {
        if (XMLHttpRequest.status==401){
            layer.msg('您还未登录，请您先登陆！');
            setTimeout(function () {
                window.location.href = './login.html';
            },1500)
        }
    }

})

/*
* 页面跳转
* */
function goto(url){
    window.location.href = url+'?userId='+localStorage.getItem('TRQuserid');
}

$('._exit').on('click',function(){
    layer.msg('退出成功');
   localStorage.removeItem('TRQtoken') ;
    setTimeout(function () {
        window.location.href = './login.html';
    },1500)
});