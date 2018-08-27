
$.ajax({
    url: WWW_URL+'/user',
    type: 'GET',
    headers:HEADER,
    success:function(data){
        var d = data.data;
        console.log(123,d);

        $('#headerPic').attr({src:IMG_URL+d.avatar});
        $('.name').html(d.name);  //
        $('.riqi').html(d.birthday);  //
        $('.diqu').html(d.region);  //
        $('.jigouleibie').html(d.orgTypeStr);  //
        $('.jigouxuan').html(d.orgStr);  //
        $('.jigoumingcheng').html(d.orgName);  //
        $('.bumenmingcheng').html(d.department);  //
        $('.zhiweimingcheng').html(d.position);  //
        $('.weixin').html(d.wechat);  //
        $('.youxiang').html(d.email);  //
        $('.shouji').html(d.phone);  //
        // $('.ziwojieshao').html(d.introduce);  //
        // $('.gongzuojingli').html(d.workExp);  //
        // $('.jiaoyujingli').html(d.educationExp);  //
        $('.gongjiziyuan').html(d.supplyDesc);  //
        $('.xuqiuziyuan').html(d.demandDesc);  //
        $('.wodebeijing').html(d.backgroundDesc);  //

    },
    error:function (XMLHttpRequest, textStatus, errorThrown) {
        if (XMLHttpRequest.status==401){
            layer.msg('您还未登录，请您先登陆！')
            setTimeout(function () {
                window.location.href = './login.html';
            },1500)
        }
    }

})
