
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

function getUrlStr(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}
// 拿到邀请人
var inviteId = getUrlStr('inviteId');
if(inviteId!=null) {
    $('#inviteId').val(inviteId);
}else{
    $('#inviteId').val('-1');
}
var yzm;  // 短信验证码



// 初始化Web Uploader
// var uploader = WebUploader.create({
//
//     // 选完文件后，是否自动上传。
//     auto: true,
//
//     // swf文件路径
//     swf: BASE_URL + '/js/Uploader.swf',
//
//     // 文件接收服务端。
//     server: 'http://webuploader.duapp.com/server/fileupload.php',
//
//     // 选择文件的按钮。可选。
//     // 内部根据当前运行是创建，可能是input元素，也可能是flash.
//     pick: '#filePicker',
//
//     // 只允许选择图片文件。
//     accept: {
//         title: 'Images',
//         extensions: 'gif,jpg,jpeg,bmp,png',
//         mimeTypes: 'image/*'
//     }
// });


// 选择用户身份
function selectType(type){
    $('#userType').val(type);
    $('#formReg').css({display:'block'});
    $('.usertypeBox').fadeOut();
}

// 发送验证码 yzm
function yanzhengma() {
    var phone = $('#phone').val();
    console.log(phone);
    if (phone.length != 11){
        layer.msg('请输入正确的手机号');
        return false;
    }

    // 按钮倒计时
    $('#yanzheng').html(60);
    $('#yanzheng').css({background:'#999',border:'#999'})
    var yanzheng = setInterval(function () {
        var s = $('#yanzheng').html();
        if(s==0){
            $('#yanzheng').html('发送')
            $('#yanzheng').css({background:'#dd514c',border:'#dd514c'})
            clearInterval(yanzheng);
        }else{
            $('#yanzheng').html(s-1)
        }
    },1000)


    // 发送短信
    // 准备短信接口相关数据
    var date= new Date();
    var nowtime = date.getFullYear().toString()+((date.getMonth()+1).toString().length==1?0+(date.getMonth()+1).toString():(date.getMonth()+1).toString())+(date.getDate().toString().length==1?0+date.getDate().toString():date.getDate().toString())+(date.getHours().toString().length==1?0+date.getHours().toString():date.getHours().toString())+(date.getMinutes().toString().length ==1?0+date.getMinutes().toString():date.getMinutes().toString())+(date.getSeconds().toString().length==1?0+date.getSeconds().toString():date.getSeconds().toString());

    console.log(3333,((date.getMonth()+1).toString().length==1));

    var AuthorizationStr = 'N00000014371:'+nowtime;
    var Authorization = window.btoa(AuthorizationStr);

    var sigStr = "N0000001437153e67950-6774-11e7-a03d-25548cb1958d" + nowtime;
    var sig = calcMD5(sigStr).toUpperCase();
    console.log(6666,nowtime);
    console.log(7777,sigStr);

    var yzmStr = (parseInt(Math.random()*(100000-999999+1)+999999)).toString();
    console.log('yzm',yzmStr);
    yzm = calcMD5(yzmStr); // 随机验证码

    var jsonData = '{"password":"YLHdmFoX7C","num":"'+phone+'","templateNum":"6","var1":"'+yzmStr+'","var2":"10"}';

    $.ajax({
        headers:{
            "Accept":'application/json',
            "Authorization":Authorization,
            "Content-Type":'application/json;charset=utf-8'
        },
        url: 'http://apis.7moor.com/v20160818/sms/sendInterfaceTemplateSms/N00000014371?sig='+sig,
        type: 'POST',
        dataType:'json',
        data: jsonData,
        success:function(data){
            console.log(data);
        }
    })
}

function getUrlPar(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
};

// 提交注册
function submitBtn(){

    // 判断验证码是否正确
    var yzmInput = $('#yanzmtxt').val();
    var yanzhengma = calcMD5(yzmInput);
    if (yanzhengma!=yzm){
        layer.msg('验证码错误');
        return false;
    }

    // 记录所在地区
    var diquDD = $('#diquDD').html().replace(/\s/g, "");
    var diquDDArr = diquDD.split('&gt;');
    var diquStr = JSON.stringify(diquDDArr);
    $('#regionInput').val(diquStr);

    // 判断是否填写完整
    // var content = $('#formReg').serialize();
    // var patt1=new RegExp("=&");
    // if (patt1.test(content)){
    //     layer.msg('请将注册信息填写完整');
    //     return false;
    // }
    //


    // 提交注册信息
    $.ajax({
        url: WWW_URL+'/user/register',
        type: 'POST',
        data: $('#formReg').serialize(),
        success:function(data){
            console.log(112233445566,data);
            if (data.status=="0"){
                layer.msg('提交注册信息成功，请等待管理员审核！');

                var uid = getUrlPar('userId');
                if (uid != null){

                    $.ajax({
                        url: WWW_URL+'/invite/create',
                        type: 'POST',
                        headers:HEADER,
                        data: {
                            userId : data.data.id, //被邀请人
                            inviteId:uid  //邀请人
                        },
                        success:function(data){

                            return false;

                            setTimeout(function () {
                                window.location.href = './login.html'; //跳转至登录页
                            },1200)


                        }
                    })


                }else{
                    setTimeout(function () {
                        window.location.href = './login.html'; //跳转至登录页
                    },1200)
                }



            }else{
                layer.msg(data.msg);
            }
        }
    })

}
