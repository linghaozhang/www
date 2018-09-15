
//初始化数据
$.ajax({
    url: WWW_URL+'/config',
    type: 'get',
    headers:HEADER,
    success:function(data){
        var d = data.data;
        console.log(d);
        for (var i=0;i<d.length;i++){

            // 风险偏好
            if(d[i].type==26){
                // var h = '<option value="'+d[i].id+'">'+d[i].cat+'</option>';
                var h = '<div class="am-u-sm-6 xnbtnbox"><button class="am-btn am-btn-default am-btn-xs xnbtn" type="button" configId="'+d[i].id+'" id='+d[i].id+'>'+d[i].cat+'</button></div>';
                $('#fengxianpianhao').append(h);
            }

            // 产品偏好
            if(d[i].type==27){
                // var h = '<option value="'+d[i].id+'">'+d[i].cat+'</option>';
                var h = '<div class="am-u-sm-6 xnbtnbox"><button class="am-btn am-btn-default am-btn-xs xnbtn" type="button" configId="'+d[i].id+'"  id='+d[i].id+'>'+d[i].cat+'</button></div>';
                $('#chanpinpianhao').append(h);
            }

            // 前期费用
            if(d[i].type==25){
                // var h = '<option value="'+d[i].id+'">'+d[i].cat+'</option>';
                var h = '<div class="am-u-sm-6 xnbtnbox"><button class="am-btn am-btn-default am-btn-xs xnbtn3" type="button" configId="'+d[i].id+'"  id='+d[i].id+'>'+d[i].cat+'</button></div>';
                $('#qianqifeiyong').append(h);
            }

            // 投资阶段
            if(d[i].type==14){
                // var h = '<option value="'+d[i].id+'">'+d[i].cat+'</option>';
                var h = '<div class="am-u-sm-6 xnbtnbox"><button class="am-btn am-btn-default am-btn-xs xnbtn" type="button" configId="'+d[i].id+'"  id='+d[i].id+'>'+d[i].cat+'</button></div>';
                $('#touzijieduan').append(h);
            }

            // 股权投资类型
            if(d[i].type==15){
                // var h = '<option value="'+d[i].id+'">'+d[i].cat+'</option>';
                var h = '<div class="am-u-sm-6 xnbtnbox"><button class="am-btn am-btn-default am-btn-xs xnbtn" type="button" configId="'+d[i].id+'"  id='+d[i].id+'>'+d[i].cat+'</button></div>';
                $('#guquanleixing').append(h);
            }

            // 需提供资料
            if(d[i].type==16){
                // var h = '<option value="'+d[i].id+'">'+d[i].cat+'</option>';
                var h = '<div class="am-u-sm-6 xnbtnbox"><button class="am-btn am-btn-default am-btn-xs xnbtn" type="button" configId="'+d[i].id+'"  id='+d[i].id+'>'+d[i].cat+'</button></div>';
                $('#tigongziliao').append(h);
            }

            // 资金来源
            if(d[i].type==17){
                // var h = '<option value="'+d[i].id+'">'+d[i].cat+'</option>';
                var h = '<div class="am-u-sm-6 xnbtnbox"><button class="am-btn am-btn-default am-btn-xs xnbtn" type="button" configId="'+d[i].id+'"  id='+d[i].id+' >'+d[i].cat+'</button></div>';
                $('#zijinlaiyuan').append(h);
            }

            // 机构类别
            if(d[i].type==18){
                // var h = '<option value="'+d[i].id+'">'+d[i].cat+'</option>';
                var h = '<div class="am-u-sm-6 xnbtnbox"><button class="am-btn am-btn-default am-btn-xs xnbtn3" type="button" configId="'+d[i].id+'"  id='+d[i].id+'>'+d[i].cat+'</button></div>';
                $('#jigouleibie').append(h);
            }

            // 投资行业
            if(d[i].type==19){
                // var h = '<option value="'+d[i].id+'">'+d[i].cat+'</option>';
                var h = '<div class="am-u-sm-6 xnbtnbox"><button class="am-btn am-btn-default am-btn-xs xnbtn" type="button" configId="'+d[i].id+'"  id='+d[i].id+'>'+d[i].cat+'</button></div>';
                $('#touzihangye').append(h);
            }

            // 资金偏好标签
            if(d[i].type==20){
                // var h = '<option value="'+d[i].id+'">'+d[i].cat+'</option>';
                var h = '<div class="am-u-sm-6 xnbtnbox"><button class="am-btn am-btn-default am-btn-xs xnbtn" type="button" configId="'+d[i].id+'"  id='+d[i].id+'>'+d[i].cat+'</button></div>';
                $('#zichanpianhaobiaoqian').append(h);
            }

            // 投资金额
            if(d[i].type==21){



                // var h = '<option value="'+d[i].id+'">'+d[i].cat+'</option>';
                var h = '<div class="am-u-sm-6 xnbtnbox"><button class="am-btn am-btn-default am-btn-xs xnbtn" type="button" configId="'+d[i].id+'"  id='+d[i].id+'>'+d[i].cat+'</button></div>';
                $('#touzijine').append(h);
            }

            // 投资地区
            if(d[i].type==22){
                // var h = '<option value="'+d[i].id+'">'+d[i].cat+'</option>';
                var h = '';
                /*判断是否是全国*/
                if (d[i].id ==326){
                    h = '<div class="am-u-sm-6 xnbtnbox"><button style="width:95%;" class="am-btn am-btn-default am-btn-xs quanguo" type="button" configId="'+d[i].id+'"  id='+d[i].id+'>'+d[i].cat+'</button></div>';
                }else{
                    h = '<div class="am-u-sm-6 xnbtnbox"><button class="am-btn am-btn-default am-btn-xs xnbtn diquxuanze" type="button" configId="'+d[i].id+'"  id='+d[i].id+'>'+d[i].cat+'</button></div>';
                }


                $('#touzidiqu').append(h);
            }

            // 投风控要求
            if(d[i].type==23){
                // var h = '<option value="'+d[i].id+'">'+d[i].cat+'</option>';
                var h = '<div class="am-u-sm-6 xnbtnbox"><button class="am-btn am-btn-default am-btn-xs xnbtn" type="button" configId="'+d[i].id+'"  id='+d[i].id+'>'+d[i].cat+'</button></div>';
                $('#toufengkongyaoqiu').append(h);
            }

            // 抵押物类型
            if(d[i].type==24){
                // var h = '<option value="'+d[i].id+'">'+d[i].cat+'</option>';
                var h = '<div class="am-u-sm-6 xnbtnbox"><button class="am-btn am-btn-default am-btn-xs xnbtn" type="button" configId="'+d[i].id+'"  id='+d[i].id+'>'+d[i].cat+'</button></div>';
                $('#diyawuleixing').append(h);
            }


        }
    }
});


function xunaze(arrStr) {
    if (arrStr==0||arrStr==null||arrStr==""||arrStr=="[]"||arrStr=="[0]") return false;
    var a = eval(arrStr);
    console.log(888999,a);
    for (var i=0;i<a.length;i++){
        $("#"+a[i]).addClass('xnbtnSelected');
    }
}

// 判断用户类型 显示对应内容  如果是资产方 删除资金配置相关
$.ajax({
    url: WWW_URL+'/user',
    type: 'GET',
    headers:HEADER,
    success:function(data){

        if (data.data.type==2){
            $('.zijinxiangxipeizhi').empty();
        }



    }
})

// 所有按钮选中与取消选中
$(document).on('click','.xnbtn',function () {
   $(this).addClass('xnbtnSelected');
   $(this).removeClass('xnbtn');
});

$(document).on('click','.xnbtnSelected',function () {
    $(this).addClass('xnbtn');
    $(this).removeClass('xnbtnSelected');
});

//根据投资方式展示信息
// 股权
$('#xn_gqtz').click(function () {
    $('.biandong').hide();
    $('.gqtzclass').show();
})
// 债券
$('#xn_zqtz').click(function () {
    $('.biandong').hide();
    $('.zqtzclass').show();
})
//金融
$('#xn_jrtz').click(function () {
    $('.biandong').hide();
    $('.jrtzclass').show();
})
// PPP
$('#xn_ppp').click(function () {
    $('.biandong').hide();
})
//其他
$('#xn_qttz').click(function () {
    $('.biandong').hide();
})

// 限制单选
$('.xnbtn2').click(function () {
    console.log(887);
    // $('#touzifangshi button').addClass('.xnbtn2');
    $('.xnbtn2').removeClass('xnbtnSelected2');
    $(this).addClass('xnbtnSelected2')
    // $(this).removeClass('xnbtn2')
})

// 提取被选中的id
function getSelectedId(id,selsect) {
    var list = [];
    var len = $(id).find(selsect).length;
    for (var i=0;i<len;i++){
        list.push( $(id).find(selsect).eq(i).attr('configId') );
    }
    var o = JSON.stringify(list);
    return o;
}

// 提交信息
function tijiao() {


    if ($('#touziyaoqiu').val().length < 100 ){
        layer.msg('投资要求不能少于100字');
        return false;
    }

    var data = $('#myForm').serialize()+"&id="+localStorage.getItem('TRQuserid')+"&detailedOk=1";

    $.ajax({
        url: WWW_URL+'/user/update',
        type: 'post',
        headers:HEADER,
        data:{
            id:localStorage.getItem('TRQuserid'),

            // introduce:$('#introduce').val(), // 自我介绍
            // workExp:$('#workExp').val(), // 工作经历
            // educationExp:$('#educationExp').val(), // 教育经历
            investStyle: getSelectedId('#touzifangshi','.xnbtnSelected2'), // 投资方式
            riskAppetite: getSelectedId('#fengxianpianhao','.xnbtnSelected'), // 风险偏好
            product: getSelectedId('#chanpinpianhao','.xnbtnSelected'), // 产品偏好
            preCost: getSelectedId('#qianqifeiyong','.xnbtnSelected'), // 前期费用
            investmentStage: getSelectedId('#touzijieduan','.xnbtnSelected'), // 投资阶段
            equity: getSelectedId('#guquanleixing','.xnbtnSelected'), // 投资阶段
            stake:$('#cangubili').val(), // 参股比例
            horizon:$('#touziqixian').val(), // 投资期限

            means: getSelectedId('#tigongziliao','.xnbtnSelected'), // 需要资料
            source: getSelectedId('#zijinlaiyuan','.xnbtnSelected'), // 资金来源
            mechanismSpecies: getSelectedId('#jigouleibie','.xnbtnSelected'), // 机构类别 mechanismSpecies  orgType
            industry: getSelectedId('#touzihangye','.xnbtnSelected'), // 投资行业
            Preference: getSelectedId('#zichanpianhaobiaoqian','.xnbtnSelected'), // 资金偏好标签
            investAmount: getSelectedId('#touzijine','.xnbtnSelected'), // 投资金额
            investRegion: getSelectedId('#touzidiqu','.xnbtnSelected'), // 投资地区
            minReturn:$('#zuidihuibaoyaoqiu').val(), // 最低回报要求

            riskControl: getSelectedId('#toufengkongyaoqiu','.xnbtnSelected'), // 投风控要求
            itemsType: getSelectedId('#diyawuleixing','.xnbtnSelected'), // 抵押物类型
            investAmount: getSelectedId('#touzijine','.xnbtnSelected'), // 投资金额
            discount:$('#zuidihuibaoyaoqiu2').val(), // 抵押物折扣率

            investReq:$('#touziyaoqiu').val(), // 投资要求
            investCase:$('#touzianli').val(), // 投资案例
            remark:$('#beizhu').val(), // 备注

            detailedOk:1  // 是否已完善详细信息
        },
        success:function(data){
            if (data.status==0){
                layer.msg('保存成功');

                setTimeout(function () {
                    window.location.href = './my.html';
                },1500)

            }else{
                layer.msg(data.data,msg);
            }
        },
        error:function (XMLHttpRequest, textStatus, errorThrown) {
            if (XMLHttpRequest.status==401){
                    window.location.href = './login.html';
            }
        }
    })

}

$('.biandong').hide();
$('.gqtzclass').show();


$(document).on('click','.xnbtn3',function () {
    console.log(8);
    $(this).parent().parent().find(' button').removeClass('xnbtnSelected');
    $(this).parent().parent().find(' button').css({color:'#444'});
    $(this).addClass('xnbtnSelected');
    console.log(123);
    $(this).css({color:'#fff'});
})


$('.fengxianpianhao')

$(document).on('click','#fengxianpianhao button',function () {
   console.log(2233);

   $('#fengxianpianhao button').removeClass('xnbtnSelected');
   $('#fengxianpianhao button').removeClass('xnbtn');
   $('#fengxianpianhao button').addClass('xnbtn');
   $(this).addClass('xnbtnSelected');
   $(this).removeClass('xnbtn');


});

/*全国*/
$(document).on('click','.quanguo',function () {
   $(this).parent().parent().find(' button').addClass('xnbtnSelected')
   $(this).removeClass('quanguo');
   $(this).addClass('quxiaoquanguo');
});
$(document).on('click','.quxiaoquanguo',function () {
    $(this).parent().parent().find(' button').removeClass('xnbtnSelected');
    $(this).parent().parent().find(' button').addClass('xnbtn');
    $(this).removeClass('quxiaoquanguo');
    $(this).addClass('quanguo');
});
$(document).on('click','.diquxuanze',function () {
    console.log(7777);

    // $('.quxiaoquanguo').css({color:'#444',background:'#d4d4d4'}) ;
    $('.quxiaoquanguo').addClass('quanguo');
    $('.quxiaoquanguo').removeClass('quxiaoquanguo');
});