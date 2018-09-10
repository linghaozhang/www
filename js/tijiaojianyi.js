

function submitFun() {
    console.log(999);
    console.log(1111222,$('.title').val());

    if ($('.title').val()==''){
        layer.msg('请输入建议标题')
        return false;
    }else if ($('.content').val()==''){
        layer.msg('请输入建议内容')
        return false;
    }

    $.ajax({
        url: WWW_URL+'/feedback/create',
        type: 'POST',
        headers:HEADER,
        data: {
            userId : localStorage.getItem('TRQuserid'),
            title:$('.title').val(),
            content:$('.content').val()
        },
        success:function(data){
            if (data.status==0){
                layer.msg('您的建议已反馈给管理员');
                setTimeout(function () {
                    window.location.href = './my.html';
                },1500);

            }else{
                layer.msg(data.msg);
            }
        },
        error:function (XMLHttpRequest, textStatus, errorThrown) {
            if (XMLHttpRequest.status==401){
                    window.location.href = './login.html';
            }
        }
    })
}