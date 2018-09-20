
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
function goPage(url) {
    window.location.href = url + '?userId=' + userData.id;
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
    console.log('-----------------下面')
    var duijieData;
    // 获取被对接人的信息并写入页面
    $.ajax({
        url: WWW_URL+'/user/getmsg',
        type: 'GET',
        async:false,
        headers:HEADER,
        data:{
            userId:duijieId
        },
        success:function(data){
            console.log('datadata',data);

            duijieData =data.data;
            $('.card2').css({display:'block'});
            $('.weixin2').css({display:'block'});
            $('.dianhua2').css({display:'block'});
            $('.youxiang2').css({display:'block'});
            console.log('被对接数据',duijieData);
            console.log('登录人数据',userData);
            if(duijieData.card==='1'){
                $('.card2').html("");
            }else{
                $('.cardImage').click(function () {
                    window.open(IMG_URL+duijieData.card);
                });
            }
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

            console.log('===== duijieData',duijieData);
            console.log('==== userData',userData);

            // 判断是不是为普通对接模式
            if(userData.dockingType==1){
                if (userData.payOk == 1){
                    if (duijieData.joinType == 2){
                        $('#weituopxitong').show();
                    }else{
                        if(data.times===0){
                            layer.msg(data.msg);
                            return false
                        }
                        $('#chakanlianxifangshi').show();
                    }
                    return false
                }
                // 被对接人为限制模式
                if (duijieData.beDockingType == 2){
                    $('#chengweihuiyuan').show();
                    return false;
                }else {
                    if (duijieData.joinType == 2){
                        $('#weituopxitong').show();
                    }else{
                        if(data.times===0){
                            layer.msg(data.msg);
                            return false
                        }
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
                    // 被对接人是限制模式
                    if (duijieData.beDockingType == 2){
                        $('#chengweihuiyuan').show();
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
                    if (duijieData.joinType == 2){
                        $('#weituopxitong').show();
                    }else{
                        if(data.times===0){
                            layer.msg(data.msg);
                            return false
                        }
                        $('#chakanlianxifangshi').show();
                    }
                }
            }
            // 二选一
            if(userData.dockingType==4){
                if (userData.payOk == 1){
                    if (duijieData.joinType == 2){
                        $('#weituopxitong').show();
                    }else{
                        if(data.times===0){
                            layer.msg(data.msg);
                            return false
                        }
                        $('#chakanlianxifangshi').show();
                    }
                    return false
                }
                if (dqyhyqs<yaoqingfz) {
                    $('#erxuanyi').show();
                    return false;
                }else {
                    // 被对接人为限制模式
                    if (duijieData.beDockingType == 2) {
                        $('#chengweihuiyuan').show();
                        return false;
                    }else {
                        $('#erxuanyi').show();
                        return false;
                    }
                }
            }
        }
    });

}

// 对接资金方人员的时候调用的方法
function duiduiren(userId) {

    var duijieData;
    // 获取被对接人的信息并写入页面
    $.ajax({
        url: WWW_URL+'/user/getmsg',
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
            if(duijieData.card==='1'){
                $('.card2').html("");
            }else{
                $('.cardImage').click(function () {
                    window.open(IMG_URL+duijieData.card);
                });
            }
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

            console.log('===== duijieData',duijieData);
            console.log('==== userData',userData);

            // 判断是不是为普通对接模式
            if(userData.dockingType==1){
                if (userData.payOk == 1){
                    if (duijieData.joinType == 2){
                        $('#weituopxitong').show();
                    }else{
                        if(data.times===0){
                            layer.msg(data.msg);
                            return false
                        }
                        $('#chakanlianxifangshi').show();
                    }
                    return false
                }
                // 被对接人为限制模式
                if (duijieData.beDockingType == 2){
                    $('#chengweihuiyuan').show();
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
                        $('#chengweihuiyuan').show();
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
                    if (duijieData.joinType == 2){
                        $('#weituopxitong').show();
                    }else{
                        if(data.times===0){
                            layer.msg(data.msg);
                            return false
                        }
                        $('#chakanlianxifangshi').show();
                    }
                }
            }
            // 二选一
            if(userData.dockingType==4){
                if (userData.payOk == 1){
                    if (duijieData.joinType == 2){
                        $('#weituopxitong').show();
                    }else{
                        if(data.times===0){
                            layer.msg(data.msg);
                            return false
                        }
                        $('#chakanlianxifangshi').show();
                    }
                    return false
                }
                if (dqyhyqs<yaoqingfz) {
                    $('#erxuanyi').show();
                    return false;
                }else {
                    // 被对接人为限制模式
                    if (duijieData.beDockingType == 2) {
                        $('#chengweihuiyuan').show();
                        return false;
                    }else {
                        $('#erxuanyi').show();
                        return false;
                    }
                }
            }
        }
    });

}

$('._invite').on('click',function(){
    location.href='./yaoqinghaoyou.html'
});


function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); // 构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  // 匹配目标参数
    if (r != null) return unescape(r[2]); return null; // 返回参数值
};

var weixinCode = getUrlParam('code');
if(weixinCode){
    $.ajax({
        url: WWW_URL+'/pay/wx?amount=1&sss=3333333&code='+weixinCode,
        type: 'GET',
        success:function(data){
            console.log(123456,data);
			
			function onBridgeReady(){
			   WeixinJSBridge.invoke(
				   'getBrandWCPayRequest', temp,
					function(res){     
					   if(res.err_msg == "get_brand_wcpay_request:ok" ) {
						   alert('恭喜你，把你钱扣走了。');
						//window.location.href = '/home/?gzh={gzh}&soure={soure}';
					   }     // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。 
				   }
			   ); 
			}
			
			if (typeof WeixinJSBridge == "undefined"){
			   if( document.addEventListener ){
				   document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
			   }else if (document.attachEvent){
				   document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
				   document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
			   }
			}else{
			   onBridgeReady();
			}
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
    console.log(ua);
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
window.onload=function(){
    if(location.search){
        let search=location.search;
        let code=search.split('&')[0].split('=')[1];
        if(code){
            wxPay(code);
        }
    }
};
function wxPay(code){
    $.ajax({
        url: WWW_URL+'/pay/wx',
        type: 'GET',
        data:{
            amount:"0.01",
            userId:userId,
            code:code
        },
        success:function(data){
        }
    });
}
// 支付
function pay(e) {
    if(isWx()){
        var openId = localStorage.getItem('openId');
        $.ajax({
        url: WWW_URL+'/pay/wx'+openId+'&amount=1&userId='+userId,
        type: 'GET',
        success:function(data){
			var val=JSON.parse(data);
			var temp = {};
			temp.appId = val.appId;
			temp.timeStamp = val.timeStamp;
			temp.nonceStr = val.nonceStr;
			temp.package = val.package;
			temp.signType = val.signType;
			temp.paySign = val.paySign;
			function onBridgeReady(){
			   WeixinJSBridge.invoke(
				   'getBrandWCPayRequest', temp,
					function(res){
					   if(res.err_msg == "get_brand_wcpay_request:ok" ) {
						   alert('恭喜您，您已成为会员，邀请金融圈好友赚取奖金。');
					   }     // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。 
				   }
			   ); 
			}
			
			if (typeof WeixinJSBridge == "undefined"){
			   if( document.addEventListener ){
				   document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
			   }else if (document.attachEvent){
				   document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
				   document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
			   }
			}else{
			   onBridgeReady();
			}
        }
    });
    }else{
        var type=$(e.target).prev().children('.cur').attr('alt');
        if(type==='wx'){
            console.log('微信h5支付');
            $.ajax({
                url:WWW_URL+'/pay/wxh5',
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
