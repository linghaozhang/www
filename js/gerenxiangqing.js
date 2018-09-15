
// 将数组字符串 转为字符串 ['a','b'] => a*b
function arrToStr(arrStr,type) {
    if(arrStr==0) return '';
    if(!arrStr){return ''}
    console.log(11,arrStr);
    var arr = eval(arrStr);
    var r = '';
    for (var i=0;i<arr.length;i++){
        if (i == 0){
            r += arr[i]
        }else{
            r += (type + arr[i])
        }
    }
    return r;
}

// 取出用户ID
function getUrlPar(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
};
var userId = getUrlPar('userId');
$('#yewuduijieBtn').attr({onclick:'yewuduijie('+userId+');'})

// 获取资料，显示tab栏，装入数据
$.ajax({
    url: WWW_URL + '/user',
    type: 'GET',
    headers: HEADER,
    data: {
        userId: userId,
    },
    success:function (data) {

        var d = data.data;
        if (d.type == 2){
            $('.tabClass').eq(0).css({display:'none'});
            $('.content').eq(0).css({display:'none'});
            $('.content').eq(1).css({display:'block'});
            $('.tabClass').eq(1).css({color:'#dd514c'});
        }else{
            $('.tabClass').css({display:'block'});
            $('.content').eq(0).css({display:'block'});
            $('.tabClass').eq(0).css({color:'#dd514c'});
        }
        
        console.log('tqr',d);
        // console.log(11223366,arrToStr(d.investmentStageStr,' '));

        var headerPicElement = '<img src='+IMG_URL+d.avatar+' alt="" style="width: 50px;height: 50px;border-radius: 50%;border:0;" id="headerPic">';

        $('.headePicBox').append(headerPicElement);



        $('#name').html(d.name);
        $('#zhiwei').html(d.position);
        $('#gongsi').html(d.orgName);
        $('#gongzuojingli').html(d.workExp);
        $('#jiaoyujingli').html(d.educationExp);

        $('#guquantouzi').html(arrToStr(d.equityStr,' | '));
        if($('#guquantouzi').html()=='') $('#guquantouzi').parent().remove();

        $('#touzijieduan').html(arrToStr(d.investmentStageStr,' | '));
        if($('#touzijieduan').html()=='') $('#touzijieduan').parent().remove();

        // var qianqifeiyong = d.preCostStr==0?'无前期费用':'有前期费用';

        $('#touziqixian').html(d.horizon);
        if($('#touziqixian').html()=='') $('#touziqixian').parent().remove();

        $('#qianqifeiyong').html(d.preCostStr);
        if($('#qianqifeiyong').html()=='') $('#qianqifeiyong').parent().remove();

        $('#tigongziliao').html(arrToStr(d.meansStr,' | '));
        if($('#tigongziliao').html()=='') $('#tigongziliao').parent().remove();

        $('#zijinlaiyuan').html(arrToStr(d.sourceStr,' | '));
        if($('#zijinlaiyuan').html()=='') $('#zijinlaiyuan').parent().remove();

        $('#touzifangshi').html(arrToStr(d.investStyleStr,' | '));
        if($('#touzifangshi').html()=='') $('#touzifangshi').parent().remove();

        $('#touzihangye').html(arrToStr(d.industryStr,' | '));
        if($('#touzihangye').html()=='') $('#touzihangye').parent().remove();

        $('#touzifengkong').html(arrToStr(d.riskControlStr,' | '));
        if($('#touzifengkong').html()=='') $('#touzifengkong').parent().remove();

        $('#diyawuleixing').html(arrToStr(d.itemsTypeStr,' | '));
        if($('#diyawuleixing').html()=='') $('#diyawuleixing').parent().remove();

        $('#fengxianpianhao').html(arrToStr(d.riskAppetiteStr,' | '));
        if($('#fengxianpianhao').html()=='') $('#fengxianpianhao').parent().remove();

        $('#chanpinpianhao').html(arrToStr(d.productStr,' | '));
        if($('#chanpinpianhao').html()=='') $('#chanpinpianhao').parent().remove();

        $('#zhidihuibaoyaoqiu').html(d.minReturn);
        if($('#zhidihuibaoyaoqiu').html()=='') $('#zhidihuibaoyaoqiu').parent().remove();

        $('#diyawuzhekoulv').html(d.discount);
        if($('#diyawuzhekoulv').html()=='') $('#diyawuzhekoulv').parent().remove();

        $('#jigouleibie').html(arrToStr(d.mechanismSpeciesStr,' | '));
        if($('#jigouleibie').html()=='') $('#jigouleibie').parent().remove();

        $('#diqu').html(arrToStr(d.investRegionStr,' | '));
        if($('#diqu').html()=='') $('#diqu').parent().remove();

        $('#touzijine').html(arrToStr(d.investAmountStr,' | '));
        if($('#touzijine').html()=='') $('#touzijine').parent().remove();

        $('#touziyaoqiu').html(d.investReq);
        if($('#touziyaoqiu').html()=='') $('#touziyaoqiu').parent().remove();

        $('#touzianli').html(d.investCase);
        if($('#touzianli').html()=='') $('#touzianli').parent().remove();

        $('#zijinpianhaobiaoqian').html(arrToStr(d.preferenceStr,' | '));
        if($('#zijinpianhaobiaoqian').html()=='') $('#zijinpianhaobiaoqian').parent().remove();


        // $('#touzihangye').html(arrToStr(d.industryStr,' '));
        // if($('#touzihangye').html()=='') $('#touzihangye').parent().remove();

        $('#caogubili').html(d.stake);
        $('#beizhu').html(d.beizhu);
        if($('#beizhu').html()=='') $('#beizhu').parent().remove();

        console.log(888666,$('#touzifangshi').html());

        var tzfsHtml = $('#touzifangshi').html();

        console.log(999,tzfsHtml);
        console.log(888,tzfsHtml=="其他投资");
        
        //股权投资
        if (tzfsHtml=='股权投资'){
            $('#touzifengkong').parent().hide();
            $('#diyawuleixing').parent().hide();
            $('#zhidihuibaoyaoqiu').parent().hide();
            $('#diyawuzhekoulv').parent().hide();
            $('#fengxianpianhao').parent().hide();
            $('#chanpinpianhao').parent().hide();

        // 债权投资
        }else if (tzfsHtml=='债权投资'){
            $('#touzijieduan').parent().hide();
            $('#guquantouzi').parent().hide();
            $('#caogubili').parent().hide();
            $('#touziqixian').parent().hide();
            $('#fengxianpianhao').parent().hide();
            $('#chanpinpianhao').parent().hide();

        // 金融投资
        }else if (tzfsHtml=='金融投资'){
            $('#touzijieduan').parent().hide();
            $('#guquantouzi').parent().hide();
            $('#caogubili').parent().hide();
            $('#touzifengkong').parent().hide();
            $('#diyawuleixing').parent().hide();
            $('#zhidihuibaoyaoqiu').parent().hide();
            $('#diyawuzhekoulv').parent().hide();
            $('#touziqixian').parent().hide();

        // PPP投资
        }else if(tzfsHtml=='PPP/BT/BOT项目投资'||tzfsHtml=='其他投资'){
            console.log(11111112234555);
            $('#touzijieduan').parent().hide();
            $('#guquantouzi').parent().hide();
            $('#caogubili').parent().hide();
            $('#touzifengkong').parent().hide();
            $('#diyawuleixing').parent().hide();
            $('#zhidihuibaoyaoqiu').parent().hide();
            $('#diyawuzhekoulv').parent().hide();
            $('#fengxianpianhao').parent().hide();
            $('#chanpinpianhao').parent().hide();
            $('#touziqixian').parent().hide();

        }else{
            $('#touzijieduan').parent().hide();
            $('#guquantouzi').parent().hide();
            $('#caogubili').parent().hide();
            $('#touzifengkong').parent().hide();
            $('#diyawuleixing').parent().hide();
            $('#zhidihuibaoyaoqiu').parent().hide();
            $('#diyawuzhekoulv').parent().hide();
            $('#fengxianpianhao').parent().hide();
            $('#chanpinpianhao').parent().hide();
            $('#touziqixian').parent().hide();
        }




    }
});

// 获取个人发布记录，装入页面
$.ajax({
    url: WWW_URL + '/buttJoin/get',
    type: 'GET',
    headers: HEADER,
    data: {
        userId: userId,
    },
    success: function (data) {
        var d = data.data;
        
        console.log(1234,data);
        


        for (var i=0;i<d.length;i++){

            var obj= d[i];

            var html = '';
            html += '<div class="swiper-slide">';
            // html += '<p style="position:absolute;width:20px;background:#dd514c;color:#fff;top:10px;right:12px;font-size: 10px;padding:2px 4px;">推荐</p>';
            html += '<div class="item" style="">';
            html += '<div class="am-g">';
            html += '<div class="am-u-sm-2">';
            html += '<img src="'+IMG_URL+obj.avatar+'"  class="logo" onclick="QJgotoGeren('+obj.userId+');">';
            html += '</div>';
            html += '<div class="am-u-sm-10">';
            html += '<p class="nameBox">';
            html += '<span class="name" style="color:#333;font-size: 14px;">'+obj.name+'</span>';
            html += ' <span class="sf" style="color:#333;font-size: 14px;">'+obj.position+'</span>';
            html += '</p><p class="zhiwei" style="margin-top:-5px;font-size: 13px;color:#333;font-size: 12px;">'+obj.orgName+'</p>';
            html += '</div>';

            html += '</div>';
            html += '<div class="am-g" style="margin:10px 0;">';
            html += '<div class="am-u-sm-12 am-u-sm-centered content2"  style="padding:0px 10px;color:#333;text-align:justify;display:block;">'+obj.txt+'</div>';
            html += '<p style="text-align: right;font-size: 12px;padding-right:10px;margin:0px 0px 5px;color:#333;">发布时间：'+ obj.create_at +'</p>';
            html += '<div class="am-g lableBox" style="padding:0px 20px;font-size: 13px;margin-top:0px;color:#333;">';
            html += '标签：';

            /*资产信息对接*/
            if (obj.propertyRoleStr != '' && obj.propertyRoleStr != null){
                for (var j=0;j<obj.propertyRoleStr.length;j++) {
                    html += obj.propertyRoleStr[j] + '<span style="color:#dd514c;"> | </span>';
                }
            }
            //
            /*资产所在地区*/
            if (obj.provinceStr != '' && obj.provinceStr != null){
                for (var j=0;j<obj.provinceStr.length;j++) {
                    html += obj.provinceStr[j] + '<span style="color:#dd514c;"> | </span>';
                }
            }
            //
            /*资产类别*/
            if (obj.propertyTypeStr != '' && obj.propertyTypeStr != null){
                for (var j=0;j<obj.propertyTypeStr.length;j++) {
                    html += obj.propertyTypeStr[j] + '<span style="color:#dd514c;"> | </span>';
                }
            }

            /*资产类别标签*/
            if (obj.propertyTypeLabelStr != '' && obj.propertyTypeLabelStr != null){
                for (var j=0;j<obj.propertyTypeLabelStr.length;j++) {
                    html += obj.propertyTypeLabelStr[j] + '<span style="color:#dd514c;"> | </span>';
                }
            }

            /*资产行业*/
            if (obj.propertyTradeStr != '' && obj.propertyTradeStr != null){
                for (var j=0;j<obj.propertyTradeStr.length;j++) {
                    html += obj.propertyTradeStr[j] + '<span style="color:#dd514c;"> | </span>';
                }
            }

            html += '</div>';
            html += '<div class="am-g">';
            html += '<button type="button" class="am-btn am-btn-danger" style="width:92%;margin-left:4%;" onclick="yewuduijie('+obj.userId+');">业务对接</button>';
            html += '</div></div></div>';

            $('#wodefabu').prepend(html);
        }

        
        console.log(7777666666,d.length);
        
        if (d.length == 0){
             var ids=location.search.split('=')[1];
            var htmls = '';
            htmls += '<p style="text-align: center;margin:20px 0px 10px;padding:0 24px;">项目信息我正在整理中，请稍等片刻，要想联系本人，请点击下方业务对接。</p>';

            htmls += '<div class="am-g" style="text-align: center;margin-bottom:30px;"><button type="button" class="am-btn am-btn-danger" id="yewuduijieBtn" style="width:88%;" onclick="yewuduijie('+ids+');">业务对接</button> </div>'
            console.log(111222333,htmls);
            $('#wodefabu').prepend(htmls);
        }


    }
})

// tab切换
function tabList(index) {
    console.log(123,index);
    $('.tabClass').css({color:'',fontWeight:100});
    $('.tabClass').eq(index).css({color:'#dd514c',fontWeight:900});
    $('.content').css({display:'none'});
    $('.content').eq(index).css({display:'block'});
}

//收藏
function shoucang() {
    $.ajax({
        url: WWW_URL + '/favorite/create',
        type: 'post',
        headers: HEADER,
        async: false,
        data: {
            userId: localStorage.getItem('TRQuserid'),
            type: '1', // 1是人 2是帖子
            collectId: userId,
            txt: ''
        },
        success: function (data) {
            if (data.status == 0) {
                layer.msg('收藏成功')
            }else{
                layer.msg(data.msg)
            }

        }
    })
}

// 举报
function jubao() {
    window.location.href = './jubao.html?userId='+userId;
}