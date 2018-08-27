

// init
// 加载机构类别
$.ajax({
    url: WWW_URL+'/config',
    type: 'get',
    success:function(data){
        console.log(data);
        var d = data.data;
        for (var i=0;i<d.length;i++){
            // 机构类别
            if(d[i].type==18){
                var h = '<option value="'+d[i].id+'">'+d[i].cat+'</option>';
                $('.orgType').append(h);
            }

            // 机构选择
            if(d[i].type==12){
                var h = '<option value="'+d[i].id+'">'+d[i].cat+'</option>';
                $('.org').append(h);
            }
        }
    }
});


// 填写原资料
$.ajax({
    url: WWW_URL+'/user',
    type: 'GET',
    headers:HEADER,
    data: {
        userId:sessionStorage.getItem('TRQuserid'),
    },
    success:function(data){
        var d = data.data;
        console.log(999,d);
        console.log(333,IMG_URL+d.card);
        console.log(444,IMG_URL+d.avatar);

        $('.photoBox img').attr({src:IMG_URL+d.avatar});
        $('.cardBox img').attr({src:IMG_URL+d.card});
        $('#card').val(IMG_URL+d.card);

        $('#name').val(d.name);
        // $('#birthday').val(d.birthday);

        if(d.region!=''){
            var regionArr = eval(d.region);
            var regionStr = '';
            for (var i=0;i<regionArr.length;i++){
                if (i == 0){
                    regionStr+=regionArr[i]
                }else{
                    regionStr+= ' ' + regionArr[i];
                }
            }

            $('#diquDD').html(regionStr); //地区
        }


        $('#orgType').val(d.orgType); // 机构类别
        $('#org').val(d.org); // 机构选择
        $('#orgName').val(d.orgName); //
        $('#department').val(d.department); //
        $('#position').val(d.position); //
        $('#wechat').val(d.wechat); //
        $('#email').val(d.email); //
        // $('.cardBox').find(' img').attr({src:d.card})

        console.log(123,d);
    }
})

// 提交
function submitBtn() {

    var diquDD = $('#diquDD').html().replace(/\s/g, "");
    var diquDDArr = diquDD.split('&gt;');
    var diquStr = JSON.stringify(diquDDArr);

    /*头像图片*/
    var avatarArr = $('.photoBox img').attr('src').split('/');
    var avatarStr = 'file/'+ avatarArr[avatarArr.length-1];

    /*名片图片*/
    var cardArr = $('#card').val().split('/');
    console.log(112222222,cardArr);
    var cardStr = 'file/'+ cardArr[cardArr.length-1];

console.log(112233445566,cardStr);

    $.ajax({
        url: WWW_URL + '/user/update',
        type: 'POST',
        headers: HEADER,
        data: {
            id: sessionStorage.getItem('TRQuserid'),

            avatar:avatarStr,
            card:cardStr,
            name: $('#name').val(),
            // birthday:$('#birthday').val(),
            orgType:$('#orgType').val(),
            org:$('#org').val(),
            orgName:$('#orgName').val(),
            department:$('#department').val(),
            position:$('#position').val(),
            wechat:$('#wechat').val(),
            email:$('#email').val(),
            region:diquStr,
            // card:$('.cardBox').find(' img').attr('src')

        },
        success:function (data) {
            if (data.status==0){
                layer.msg('保存成功')
                setTimeout(function () {
                    window.location.href = './my.html';
                },1000)
            }else{
                console.log(111222,data);
                layer.msg(data.msg);
                setTimeout(function () {
                    window.location.href = './my.html';
                },1000)
            }
            console.log(123,data);
        }
    })
}