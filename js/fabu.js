//初始化数据
$.ajax({
    url: WWW_URL+'/config',
    type: 'get',
    headers:HEADER,
    success:function(data){
        var d = data.data;
        console.log(d);
        for (var i=0;i<d.length;i++){

            // 资产类别标签-债券
            if(d[i].type==2){
                // var h = '<option value="'+d[i].id+'">'+d[i].cat+'</option>';
                var h = '<div class="am-u-sm-6 xnbtnbox"><button class="am-btn am-btn-default am-btn-xs xnbtn" type="button" configId="'+d[i].id+'">'+d[i].cat+'</button></div>';
                $('#propertyTypeLabel_zhaiquan').append(h);
            }

            // 资产类别标签-guquan
            if(d[i].type==3){
                // var h = '<option value="'+d[i].id+'">'+d[i].cat+'</option>';
                var h = '<div class="am-u-sm-6 xnbtnbox"><button class="am-btn am-btn-default am-btn-xs xnbtn" type="button" configId="'+d[i].id+'">'+d[i].cat+'</button></div>';
                $('#propertyTypeLabel_guquan').append(h);
            }

            // 资产类别标签-同业
            if(d[i].type==4){
                // var h = '<option value="'+d[i].id+'">'+d[i].cat+'</option>';
                var h = '<div class="am-u-sm-6 xnbtnbox"><button class="am-btn am-btn-default am-btn-xs xnbtn" type="button" configId="'+d[i].id+'">'+d[i].cat+'</button></div>';
                $('#propertyTypeLabel_tongye').append(h);
            }

            // 资产类别标签-非标
            if(d[i].type==5){
                // var h = '<option value="'+d[i].id+'">'+d[i].cat+'</option>';
                var h = '<div class="am-u-sm-6 xnbtnbox"><button class="am-btn am-btn-default am-btn-xs xnbtn" type="button" configId="'+d[i].id+'">'+d[i].cat+'</button></div>';
                $('#propertyTypeLabel_feibiao').append(h);
            }

            // 资产类别标签-投资银行
            if(d[i].type==6){
                // var h = '<option value="'+d[i].id+'">'+d[i].cat+'</option>';
                var h = '<div class="am-u-sm-6 xnbtnbox"><button class="am-btn am-btn-default am-btn-xs xnbtn" type="button" configId="'+d[i].id+'">'+d[i].cat+'</button></div>';
                $('#propertyTypeLabel_touziyinhang').append(h);
            }

            // 资产类别标签-信贷
            if(d[i].type==7){
                // var h = '<option value="'+d[i].id+'">'+d[i].cat+'</option>';
                var h = '<div class="am-u-sm-6 xnbtnbox"><button class="am-btn am-btn-default am-btn-xs xnbtn" type="button" configId="'+d[i].id+'">'+d[i].cat+'</button></div>';
                $('#propertyTypeLabel_xindai').append(h);
            }

            // 资产类别标签-衍生品
            if(d[i].type==8){
                // var h = '<option value="'+d[i].id+'">'+d[i].cat+'</option>';
                var h = '<div class="am-u-sm-6 xnbtnbox"><button class="am-btn am-btn-default am-btn-xs xnbtn" type="button" configId="'+d[i].id+'">'+d[i].cat+'</button></div>';
                $('#propertyTypeLabel_yanshengpin').append(h);
            }

            // 资产类别标签-其他
            if(d[i].type==10){
                // var h = '<option value="'+d[i].id+'">'+d[i].cat+'</option>';
                var h = '<div class="am-u-sm-6 xnbtnbox"><button class="am-btn am-btn-default am-btn-xs xnbtn" type="button" configId="'+d[i].id+'">'+d[i].cat+'</button></div>';
                $('#propertyTypeLabel_qita').append(h);
            }

            // 资产类别标签-专业
            if(d[i].type==9){
                // var h = '<option value="'+d[i].id+'">'+d[i].cat+'</option>';
                var h = '<div class="am-u-sm-6 xnbtnbox"><button class="am-btn am-btn-default am-btn-xs xnbtn" type="button" configId="'+d[i].id+'">'+d[i].cat+'</button></div>';
                $('#propertyTypeLabel_zhuanye').append(h);
            }

            // 资产行业
            if(d[i].type==11){
                // var h = '<option value="'+d[i].id+'">'+d[i].cat+'</option>';
                var h = '<div class="am-u-sm-6 xnbtnbox"><button class="am-btn am-btn-default am-btn-xs xnbtn" type="button" configId="'+d[i].id+'">'+d[i].cat+'</button></div>';
                $('#propertyTrade').append(h);
            }

            // 资产信息对接
            if(d[i].type==28){
                // var h = '<option value="'+d[i].id+'">'+d[i].cat+'</option>';
                var h = '<div class="am-u-sm-6 xnbtnbox"><button class="am-btn am-btn-default am-btn-xs xnbtn" type="button" configId="'+d[i].id+'">'+d[i].cat+'</button></div>';
                $('#propertyRole').append(h);
            }

            // 地区
            if(d[i].type==22){
                // var h = '<option value="'+d[i].id+'">'+d[i].cat+'</option>';
                var h = '<div class="am-u-sm-6 xnbtnbox"><button class="am-btn am-btn-default am-btn-xs xnbtn" type="button" configId="'+d[i].id+'">'+d[i].cat+'</button></div>';
                $('#diqu').append(h);
            }


        }
    }
});

// 标签选中与取消
$(document).on('click','.xnbtn',function () {
    
    console.log(1111);

    $(this).parent().find(' button').removeClass('xnbtnSelected');

    $(this).addClass('xnbtnSelected');
    // $(this).removeClass('xnbtn');
});


// 标签选中与取消 - 单选 - 资产行业
$(document).on('click','#propertyTrade .xnbtn',function () {

    $('#propertyTrade .xnbtn').removeClass('xnbtnSelected');

    $(this).addClass('xnbtnSelected');
});

// 标签选中与取消 - 单选 -资产信息对接
$(document).on('click','#propertyRole .xnbtn',function () {

    $('#propertyRole .xnbtn').removeClass('xnbtnSelected');

    $(this).addClass('xnbtnSelected');
});

// 标签选中与取消 - 单选 -地区
$(document).on('click','#diqu .xnbtn',function () {

    $('#diqu .xnbtn').removeClass('xnbtnSelected');

    $(this).addClass('xnbtnSelected');
});




$(document).on('click','.xnbtnSelected',function () {
    $(this).addClass('xnbtn');
    $(this).removeClass('xnbtnSelected');
});

//根据投资方式展示信息
// 债券
$('#xn_zqzc').click(function () {
    $('.biandong').hide();
    $('.biandong').removeClass('biandongSelected');
    $('.propertyTypeLabel_zhaiquan').show();
    $('.propertyTypeLabel_zhaiquan').addClass('biandongSelected');
});
// 股权
$('#gqzc').click(function () {
    $('.biandong').hide();
    $('.biandong').removeClass('biandongSelected');
    $('.propertyTypeLabel_guquan').show();
    $('.propertyTypeLabel_guquan').addClass('biandongSelected');

});
//同业
$('#tyyw').click(function () {
    $('.biandong').hide();
    $('.biandong').removeClass('biandongSelected');
    $('.propertyTypeLabel_tongye').show();
    $('.propertyTypeLabel_tongye').addClass('biandongSelected');

});
// 非标产品
$('#fbcp').click(function () {
    $('.biandong').hide();
    $('.biandong').removeClass('biandongSelected');
    $('.propertyTypeLabel_feibiao').show();
    $('.propertyTypeLabel_feibiao').addClass('biandongSelected');

});
//投资银行
$('#tzyh').click(function () {
    $('.biandong').hide();
    $('.biandong').removeClass('biandongSelected');
    $('.propertyTypeLabel_touziyinhang').show();
    $('.propertyTypeLabel_touziyinhang').addClass('biandongSelected');

});
//信贷业务
$('#xdyw').click(function () {
    $('.biandong').hide();
    $('.biandong').removeClass('biandongSelected');
    $('.propertyTypeLabel_xindai').show();
    $('.propertyTypeLabel_xindai').addClass('biandongSelected');

});
//金融衍生品
$('#jrysp').click(function () {
    $('.biandong').hide();
    $('.biandong').removeClass('biandongSelected');
    $('.propertyTypeLabel_yanshengpin').show();
    $('.propertyTypeLabel_yanshengpin').addClass('biandongSelected');

});
//专业服务
$('#zyfw').click(function () {
    $('.biandong').hide();
    $('.biandong').removeClass('biandongSelected');
    $('.propertyTypeLabel_zhuanye').show();
    $('.propertyTypeLabel_zhuanye').addClass('biandongSelected');

});
//其他业务
$('#qtyw').click(function () {
    $('.biandong').hide();
    $('.biandong').removeClass('biandongSelected');
    $('.propertyTypeLabel_qita').show();
    $('.propertyTypeLabel_qita').addClass('biandongSelected');

});

// 限制单选
$('.xnbtn2').click(function () {
    console.log(887);
    // $('#touzifangshi button').addClass('.xnbtn2');
    $('.xnbtn2').removeClass('xnbtnSelected2');
    $(this).addClass('xnbtnSelected2')
    // $(this).removeClass('xnbtn2')
});

// 提取被选中的id
function getSelectedId(id,selsect) {
    
    console.log(55555,id, selsect);
    
    
    var list = [];
    var len = $(id).find(selsect).length;
    
    console.log('len:',len);
    
    for (var i=0;i<len;i++){
        
        console.log(99999,$(id).find(selsect).eq(i).attr('configId'));
        
        list.push( $(id).find(selsect).eq(i).attr('configId') );
    }
    var o = JSON.stringify(list);
    return o;
}

// 提交信息
function tijiao() {

    /*判断资产描述是否够100个字*/
    var zichanmiaoshuStr = $('.zichanmiaoshu').val();
    if (zichanmiaoshuStr.length < 100){
        layer.msg('资产描述字数不能少于100');
        return false;
    }

    $.ajax({
        url: WWW_URL+'/buttJoin/create',
        type: 'post',
        headers:HEADER,
        data: {
            id  : sessionStorage.getItem('TRQuserid'),
            type:1,
            userId:sessionStorage.getItem('TRQuserid'),
            province:getSelectedId('#diqu','.xnbtnSelected'), //省份
            txt:$('#txt').val(), // 描述
            propertyType:getSelectedId('#propertyType','.xnbtnSelected2'), //资产类别
            propertyTypeLabel:getSelectedId('.biandongSelected','.xnbtnSelected'), //资产类别标签
            propertyTrade:getSelectedId('#propertyTrade','.xnbtnSelected'), //资产行业
            propertyRole:getSelectedId('#propertyRole','.xnbtnSelected'), //资产对接角色
        },
        success:function(data){
            if (data.status==0){
                layer.msg(data.msg);

                setTimeout(function () {
                    window.location.href = './tourongbao-zichanfang.html';
                },1500)
            }
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

}


$('.biandong').hide();
$('.propertyTypeLabel_zhaiquan').show();