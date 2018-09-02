
var duijieHTML = '';

duijieHTML += '';
duijieHTML += '';
duijieHTML += '';
duijieHTML += '';
duijieHTML += '';
duijieHTML += '';
duijieHTML += '';


function guanbi() {
    $('.duijietanchu').hide();
}

// 当前用户数据
var userData;
// 当前用户邀请了多少个用户
var dqyhyqs = 0;
// 邀请人数的阀值
var yaoqingfz = 5;
var userId;

function init() {
    // 获取当前用户数据
    $.ajax({
        url: WWW_URL+'/user',
        type: 'GET',
        async:false,
        headers:HEADER,
        success:function(data){
            console.log('ddata',data);
            userData = data.data;
            userId=data.userid;
        }
    });

    // 获取所有用户
    $.ajax({
        url: WWW_URL + '/user/all',
        type: 'GET',
        async: false,
        headers: HEADER,
        success: function (data) {
            var all = data.data;
            console.log('已经获取的当前用户', userData);
            for (var i = 0; i < all.length; i++) {
                var d = all[i];
                if (d.inviteId == userData.phone){
                    dqyhyqs++;
                }
            }
        }
    })

};
init();

console.log('我邀请了几个好友?',dqyhyqs);

function yewuduijie(duijieId) {
    console.log('=============start yewuduijie================');
    var duijieData; // 被对接信息
    var duijieUserId; //被对接人


    
    // 获取被对接信息
    $.ajax({
        url: WWW_URL+'/user',
        type: 'get',
        async:false,
        headers:HEADER,
        data:{
            userId:duijieId,
        },
        success:function(data){
            var d = data.data;

            duijieData = d;
            $('.card2').css({display:'block'});
            $('.weixin2').css({display:'block'});
            $('.dianhua2').css({display:'block'});
            $('.youxiang2').css({display:'block'});
            console.log(888888,duijieData,userData);
            
            if (duijieData.openWechat==1){
                $('.weixin').html(duijieData.wechat);
            }else{
                $('.weixin2').css({display:'none'});
            }

            if (duijieData.openPhone==1){
                $('.dianhua').html(duijieData.phone);
            }else{
                $('.dianhua2').css({display:'none'});
            }
            if (duijieData.openEmail==1){
                $('.youxiang').html(duijieData.email);
            }else{
                $('.youxiang2').css({display:'none'});
            }
            if(duijieData.remark != ''){
                $('.beizhuxinxi').html(duijieData.remark);
            }
        }
    });

    // // 判断被对接人是否要求必须是会员 如果是就显示要会员才能对接
    // if (duijieData.beDockingType == 2){
    //     if (userData.payOk==0){
    //             $('#jiaonabaozhengjin').show();
    //             return false;
    //     }
    // }

    // 判断是不是为普通对接模式
    if(userData.dockingType==1){
        // 被对接人是限制模式
        if (duijieData.beDockingType == 2){
            $('#jiaonabaozhengjin').show();
            return false;
        }else {
            $('#chakanlianxifangshi').show();
            return false;
        }
    }

    //是不是要邀请好友
    if(userData.dockingType==2){
        console.log('走入这个逻辑');

        // 如果没邀请够人数
        if (dqyhyqs<yaoqingfz){
            $('#yaoqinghaoyou').show();
            return false;
        }else {
            console.log('走入这个逻辑22222');

            // 被对接人是限制模式
            if (duijieData.beDockingType == 2){
                $('#jiaonabaozhengjin').show();
                return false;
                // 被对接人是正常模式
            }else {
                $('#chakanlianxifangshi').show();
                return false;
            }
        }
    }

    //是不是要交钱
    if(userData.dockingType==3){
        $('#chengweihuiyuan').show();
        return false;
    }


    // 二选一
    // if(userData.dockingType==4){
    //     // 被对接人是限制模式
    //     if (duijieData.beDockingType == 2){
    //         $('#jiaonabaozhengjin').show();
    //         return false;
    //         // 被对接人是正常模式
    //     }else {
    //         $('#erxuanyi').show();
    //         return false;
    //     }
    // }
    // 二选一
    if(userData.dockingType==4){
        if (dqyhyqs<yaoqingfz) {
            $('#erxuanyi').show();
            return false;
        }else {
            // 被对接人为限制模式
            if (duijieData.beDockingType == 2) {
                $('#jiaonabaozhengjin').show();
                return false;
            }else {
                $('#erxuanyi').show();
                return false;
            }
        }
    }
}

// 对接资金方人员的时候调用的方法
function duiduiren(userId) {

    console.log('-----------------下面')

    var duijieData;
    // 获取被对接人的信息并写入页面
    $.ajax({
        url: WWW_URL+'/user',
        type: 'GET',
        async:false,
        headers:HEADER,
        data:{
            userId:userId
        },
        success:function(data){
            console.log('datadata',data);
            duijieData =data.data;
            $('.card2').css({display:'block'});
            $('.weixin2').css({display:'block'});
            $('.dianhua2').css({display:'block'});
            $('.youxiang2').css({display:'block'});
            console.log(11223344,duijieData);

            $('.cardImage').click(function () {
                window.open(IMG_URL+duijieData.card);
            });
            if (duijieData.openCard==0){
                $('.card2').css({display:'none'});
            }

            if (duijieData.openWechat==1){
                $('.weixin').html(duijieData.wechat);
            }else{
                $('.weixin2').css({display:'none'});
            }

            if (duijieData.openPhone==1){
                $('.dianhua').html(duijieData.phone);
            }else{
                $('.dianhua2').css({display:'none'});
            }

            if (duijieData.openEmail==1){
                $('.youxiang').html(duijieData.email);
            }else{
                $('.youxiang2').css({display:'none'});
            }
            if(duijieData.remark != ''){
                $('.beizhuxinxi').html(duijieData.remark);
            }else {
                $('.beizhuxinxi').html('对接前请说明来自太和投融宝，谢谢！');
            }


        }
    });
    console.log('===== duijieData',duijieData);
    console.log('==== userData',userData);
    // 判断被对接人是否要求必须是会员 如果是就显示要会员才能对接
    // if (duijieData.beDockingType == 2){
    //     if (userData.payOk==0){
    //         $('#jiaonabaozhengjin').show();
    //         return false;
    //     }
    // }
    // 判断是不是为普通对接模式
    if(userData.dockingType==1){
        // 被对接人为限制模式
        if (duijieData.beDockingType == 2){
            $('#jiaonabaozhengjin').show();
            return false;
        }else {
            if (duijieData.joinType == 2){
                $('#weituopxitong').show();
            }else{
                $('#chakanlianxifangshi').show();
            }
        }
        return false;
    }
    //是不是要邀请好友
    if(userData.dockingType==2){
        // 如果没邀请够人数
        if (dqyhyqs<yaoqingfz){
            $('#yaoqinghaoyou').show();
            return false;
        }else {
            console.log('走入这个逻辑22222');

            // 被对接人是限制模式
            if (duijieData.beDockingType == 2){
                $('#jiaonabaozhengjin').show();
                return false
            }else {
                $('#chakanlianxifangshi').show();
                return false;
            }
        }
    }
    //是不是要交钱
    if(userData.dockingType==3){
        if (userData.payOk == 0) {
            $('#chengweihuiyuan').show();
        }else {
            $('#chakanlianxifangshi').show();
        }
    }
    // 二选一
    if(userData.dockingType==4){
        if (dqyhyqs<yaoqingfz) {
            $('#erxuanyi').show();
            return false;
        }else {
            // 被对接人为限制模式
            if (duijieData.beDockingType == 2) {
                $('#jiaonabaozhengjin').show();
                return false;
            }else {
                $('#erxuanyi').show();
                return false;
            }
        }
    }
}


//邀请按钮
function yaoqingBtn() {
    console.log('邀请');
}


function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); // 构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  // 匹配目标参数
    if (r != null) return unescape(r[2]); return null; // 返回参数值
};

var weixinCode = getUrlParam('code');
if(weixinCode){
    $.ajax({
        url: 'http://www.taihetourongbao.com/xn203-backend/public/index.php/pay/wx?amount=1&code='+weixinCode,
        type: 'GET',
        success:function(data){
            console.log(123456,data);
            // var d = eval(data);
            WeixinJSBridge.invoke(
        		'getBrandWCPayRequest',
        		$.parseJSON(data),
        		function(res){
        			WeixinJSBridge.log(res.err_msg);
        			alert(res.err_code+res.err_desc+res.err_msg);
        		}
        	);
        }
    });
}



// function jsApiCall()
// {
// 	WeixinJSBridge.invoke(
// 		'getBrandWCPayRequest',
// 		data,
// 		function(res){
// 			WeixinJSBridge.log(res.err_msg);
// 			alert(res.err_code+res.err_desc+res.err_msg);
// 		}
// 	);
// }
// 
// function callpay()
// {
// 	if (typeof WeixinJSBridge == "undefined"){
// 	    if( document.addEventListener ){
// 	        document.addEventListener('WeixinJSBridgeReady', jsApiCall, false);
// 	    }else if (document.attachEvent){
// 	        document.attachEvent('WeixinJSBridgeReady', jsApiCall);
// 	        document.attachEvent('onWeixinJSBridgeReady', jsApiCall);
// 	    }
// 	}else{
// 	    jsApiCall();
// 	}
// }

function isWx(){
    var ua = navigator.userAgent.toLowerCase();
    var isWeixin = ua.indexOf('micromessenger') != -1;
    if (isWeixin) {
        return true;
    }else{
        return false;
    }
}
var chosePay=$('.chose-pay');
var chosePaySpan=$('.chose-pay-span');
var modalTitle=$('.modal-title');

chosePay.hide();
chosePaySpan.hide();
modalTitle.css('margin-bottom','75px');
if(!isWx()){
    chosePay.show();
    chosePaySpan.show();
    modalTitle.css('margin-bottom','0');
    chosePay.on('click',function(e){
        if(e.target.nodeName==='IMG'){
            $(e.target).addClass('cur').siblings().removeClass('cur');
        }
    });
}
$('._pay').on('click',function(e){
    pay(e);
});
// 支付
function pay(e) {


    if(isWx()){
        $.ajax({
            url: 'http://www.taihetourongbao.com/xn203-backend/public/index.php/pay/wx',
            type: 'GET',
            data:{
                amount:"0.01",
                userId:userId
            },
            success:function(data){
                var newHref = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxf3c87bb5dccc3789&redirect_uri='+ location.href +'&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect';
                location.href = newHref;
            }
        });
    }else{
        var type=$(e.target).prev().children('.cur').attr('alt');
        console.log(type);
        if(type==='wx'){
            console.log('微信h5支付');
            $.ajax({
                url:' http://www.taihetourongbao.com/xn203-backend/public/index.php/pay/wxh5',
                type: 'GET',
                async:false,
                headers:HEADER,
                data:{
                    userId:userId,
                    amount:"0.01"
                },
                success:function(data){
                    // alert(JSON.stringify(data));
                    $('#alipay').html(data).hide();
                    // console.log('wxdata',data);
                    // $('#chengweihuiyuan').fadeOut();
                    // $('#alipay').fadeIn().css({
                    //     position:"fixed",
                    //     top:'0',
                    //     left:'0',
                    //     right:'0',
                    //     bottom:'0',
                    //     background:'rgba(0,0,0,0.4)'
                    // }).html(data);
                    // $('#alipay h1').css({
                    //     position:'fixed',
                    //     bottom:'0',
                    //     right:'0',
                    //     left:'0',
                    //     background:"#dd514c",
                    //     height:'40px',
                    //     lineHeight:'40px',
                    //     textAlign:'center',
                    //     margin:'0',
                    //     color:'#fff'
                    // });
                    // $('#alipay h1 a').css({
                    //     display:'block',
                    //     color:'#fff',
                    //     fontSize:'15px',
                    //     fontWeight:'normal'
                    // });
                    // $('#alipay').on('click',function(){
                    //     $(this).fadeOut();
                    // })
                }
            });
        }else{
            console.log('支付宝h5支付');
            console.log({
                amount:0.01 ,
                callurl:location.href,
                userid:userId
            })
            $.ajax({
                 url: WWW_URL+'/pay/alipay',
                type: 'GET',
                headers:HEADER,
                data:{
                    amount:0.01 ,
                    callurl:location.href,
                    userid:userId
                },
                success:function(data){
                    console.log('data,',data);
                    $('#alipay').html(data)
                }
            });
        }
    }
}
