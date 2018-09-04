// 获取余额
$.ajax({
    url: WWW_URL+'/user',
    type: 'GET',
    headers:HEADER,
    success:function(data){
        var d = data.data;
        var wallet = d.wallet;//余额
        $('#yueNum').html(wallet);
        $('#shouru').html(wallet);

        console.log(1122,data);
    }
})

// 获取总收入和收入列表
$.ajax({
    url: WWW_URL+'/fund/get',
    type: 'get',
    headers:HEADER,
    data: {
        userId : localStorage.getItem('TRQuserid')
    },
    success:function(data){
        var d = data.data;
        var allNumber = 0;
        for (var i=0;i<d.length;i++){
            allNumber += d[i].price;

            var typeStr = d[i].type==1? '好友邀请':''; //类型文字


            var html = '';
            html += '<tr>';
            html += '<td>'+typeStr+'</td>';
            html += '<td>'+d[i].price+'</td>';
            html += '<td>2017/11/11</td>';
            html += '</tr>';

            $('#content').append(html);





        }
        $('#leijishouru').html(allNumber);
        console.log(allNumber);
        console.log(data);
    },
    error:function (XMLHttpRequest, textStatus, errorThrown) {
        if (XMLHttpRequest.status==401){
            layer.msg('您还未登录，请您先登陆！')
            setTimeout(function () {
                window.location.href = './login.html';
            },1500)
        }
    }
});
//弹出客服提示框
function tixian() {
    $('.bigBox').show();
}
//关闭联系客服提示框
function gb() {
    $('.bigBox').hide();
}

