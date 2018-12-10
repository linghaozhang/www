//swiper-wrapper// 修改底部TAB颜色
$('.tabTou').css({color:"#dd514c"});
$('.zichanfangView').css({color:"#dd514c"});

// 页面跳转
function gotoTourongbao(url){
    window.location.href = url ;
}

var allConfig;

// 综合筛选
function shaixuan() {
	
var allConfig;
// 获取搜索列表的数据
$.ajax({
    url: WWW_URL+'/config',
    type: 'get',
    headers:HEADER,
    success:function(data){

        var d = data.data;
        allConfig = d;
        console.log(d);
        for (var i=0;i<d.length;i++) {
            // 风险偏好
            if (d[i].type == 22) {
                // var h = '<option value="'+d[i].id+'">'+d[i].cat+'</option>';
                var h = '<div class="am-u-sm-6 xnbtnbox"><button class="am-btn am-btn-default am-btn-xs xnbtn" style="width:95%;" type="button" configId="' + d[i].id + '">' + d[i].cat + '</button></div>';
                $('.diqu').append(h);
            }

            //机构类别
            if (d[i].type == 1) {
                // var h = '<option value="'+d[i].id+'">'+d[i].cat+'</option>';
                var h = '<div class="am-u-sm-6 xnbtnbox"><button class="am-btn am-btn-default am-btn-xs xnbtn" style="width:95%;" type="button" configId="' + d[i].id + '">' + d[i].cat + '</button></div>';
                $('.jigouleibie').append(h);
            }

            //资产行业
            if (d[i].type == 11) {
                // var h = '<option value="'+d[i].id+'">'+d[i].cat+'</option>';
                var h = '<div class="am-u-sm-6 xnbtnbox"><button class="am-btn am-btn-default am-btn-xs xnbtn" style="width:95%;" type="button" configId="' + d[i].id + '">' + d[i].cat + '</button></div>';
                $('.zichanhangye').append(h);
            }

            //资产信息对接
            if (d[i].type == 28) {
                // var h = '<option value="'+d[i].id+'">'+d[i].cat+'</option>';
                var h = '<div class="am-u-sm-6 xnbtnbox"><button class="am-btn am-btn-default am-btn-xs xnbtn" style="width:95%;" type="button" configId="' + d[i].id + '">' + d[i].cat + '</button></div>';
                $('.zichanxinxiduijie').append(h);
            }

        }
    }
})

    $('.xuanzeList').show();
    $('.btnsBoxx').show();
}

// 关闭筛选
function shaixuanhide() {
    $('.xuanzeList').hide();
    $('.btnsBoxx').hide();
}

// 打开地区
function diqu() {
    $('.diqu2').show();
    $('.diqubtnsBoxx').show();
}

//地区关闭
function diquhide() {
    $('.diqu2').hide();
    $('.diqubtnsBoxx').hide();
}


// 处理地区选择
$(document).on('click','.diqu .xnbtn',function () {
    console.log(888);
    $('.diqu').find('.xnbtn').removeClass('xnbtnSelected')
    $(this).addClass('xnbtnSelected')
});

// 资产类别选择
$(document).on('click','.jigouleibie .xnbtn',function () {
    console.log(888);
    $('.jigouleibie').find('.xnbtn').removeClass('xnbtnSelected')
    $(this).addClass('xnbtnSelected')
});

// 资产行业选择
$(document).on('click','.zichanhangye .xnbtn',function () {
    console.log(888);
    $('.zichanhangye').find('.xnbtn').removeClass('xnbtnSelected')
    $(this).addClass('xnbtnSelected')
});

// 资产信息对接
$(document).on('click','.zichanxinxiduijie .xnbtn',function () {
    console.log(888);
    $('.zichanxinxiduijie').find('.xnbtn').removeClass('xnbtnSelected')
    $(this).addClass('xnbtnSelected')
});

// 发布按钮跳转
function fabuBtn(){
    window.location.href = './fabu.html';
}

var allUser;
// 所有用户数据
/*$.ajax({
    url: WWW_URL+'/user/all',
    type: 'GET',
    async:false,
    headers:HEADER,
    success:function(data){
        allUser = data.data;
    }
})*/

//搜索取消
function sousuoquxiao() {
    $('.sousuoBox').hide();
}
// 搜索打开
function openSousuo() {
    $('.sousuoBox').show();
}

console.log(778899,allUser);

//加载全部数据
$.ajax({
    url: WWW_URL+'/buttJoin',
    type: 'GET',
    headers:HEADER,
    success:function(data){

        var d = data.data;
        for (var i=0;i<d.length;i++){
            var obj = d[i];
            var ID = obj.userId;
            
            for (var j=0;j<allUser.length;j++){


                if (allUser[j].id == obj.userId){
                    var userObj = allUser[j];

                    console.log(11223344,userObj);

                    var html = '';
                    html += '<div class="item" style="">';
                    html += '<div class="am-g">';
                    html += '<div class="am-u-sm-2">';
                    html += '<img src="'+IMG_URL+userObj.avatar+'"  class="logo" onclick="QJgotoGeren('+userObj.id+');">';
                    html += '</div>';
                    html += '<div class="am-u-sm-10">';
                    html += '<p class="nameBox">';
                    html += '<span class="name">'+userObj.name+'</span>';
                    html += ' <span class="sf">'+userObj.position+'</span>';
                    html += '</p><p class="zhiwei" style="margin-top:-5px;font-size: 13px;">'+userObj.orgName+'</p>';
                    html += '</div><div class="am-u-sm-3">';
                    html += '<p class="djBox">';
                    html += '<span class="dj"></span>';
                    html += '</p></div></div>';
                    html += '<div class="am-g" style="margin:10px 0;">';
                    html += '<div class="am-u-sm-12 am-u-sm-centered content"  style="padding:0px 10px;color:#333;text-align: justify;">'+obj.txt+'</div>';
                    html += '<div class="am-g lableBox" style="padding:0px 20px;font-size: 13px">';
                    html += '标签：';

                    html += '</div>';
                    html += '<div class="am-g">';
                    html += '<button type="button" class="am-btn am-btn-danger" style="width:92%;margin-left:4%;" onclick="yewuduijie('+obj.id+');">业务对接</button>';
                    html += '</div></div>';

                    $('.contentBox').unshift(html);

                }
            }
        }


    }
});

// 获取收藏列表
var shoucangList;
function shoucangList() {
    $.ajax({
        url: WWW_URL+'/favorite/get',
        type: 'get',
        async:false,
        headers:HEADER,
        data: {
            userId : localStorage.getItem('TRQuserid')
        },
        success:function(data){
            shoucangList = data.data;
            console.log(11,data);
            allSer();
        }
    })

}
shoucangList();

function allSer() {

    $('.contentBox').empty();

    sousuoquxiao(); //搜索取消
    diquhide(); //地区取消
    shaixuanhide(); //筛选取消

    // 要传得字段内容
    var region,propertyType,propertyTypeLabel,propertyTrade,propertyRole,searchTxt;

    //选中的地区处理
    var diquSelected = $('.diqu').find(' .xnbtnSelected');
    if (diquSelected.length==0){
        region = '';
    }else{
        if (diquSelected.html()=='全国'){
            region = '';
        }else{
            region = diquSelected.attr('configid');
        }
    }

    //资产类别
    var jigouleibie = $('.jigouleibie').find(' .xnbtnSelected');
    if (jigouleibie.length==0){
        propertyType = '';
    }else{
        if (jigouleibie.html()=='全部'){
            propertyType = '';
        }else{
            propertyType = jigouleibie.attr('configId');
        }
    }

    //资产行业
    var zichanhangye = $('.zichanhangye').find(' .xnbtnSelected');
    if (zichanhangye.length==0){
        propertyTrade = '';
    }else{
        if (zichanhangye.html()=='全部'){
            propertyTrade = '';
        }else{
            propertyTrade = zichanhangye.attr('configId');
        }
    }

    //资产对接信息
    var zichanxinxiduijie = $('.zichanxinxiduijie').find(' .xnbtnSelected');
    if (zichanxinxiduijie.length==0){
        propertyRole = '';
    }else{
        if (zichanxinxiduijie.html()=='全部'){
            propertyRole = '';
        }else{
            propertyRole = zichanxinxiduijie.attr('configId');
        }
    }

    // 搜索信息
     var searchTxt = $('.sousuoinput').val();


    console.log(111,region,propertyType,propertyTrade);

    if (propertyType != '') propertyType= '["'+propertyType+'"]';
    if (propertyTypeLabel != '') propertyTypeLabel= '["'+propertyTypeLabel+'"]';
    if (propertyTrade != '') propertyTrade= '["'+propertyTrade+'"]';
    if (propertyRole != '') propertyRole= '["'+propertyRole+'"]';



    $.ajax({
        url: WWW_URL+'/search/butt-join',
        type: 'GET',
        headers:HEADER,
        data: {
            region : region , //地区
            propertyType: propertyType,//资产类别
            propertyTypeLabel: '',//资产类别标签
            propertyTrade:  propertyTrade,//投资行业
            propertyRole:propertyRole,//资产对接行业
            searchTxt: searchTxt //搜索框文字
        },
        success:function(data){
            var d = data.data;
            for (var i=0;i<d.length;i++){

                var obj= d[i];

                var html = '';
                html += '<div class="item" style="">';
                html += '<div class="am-g">';
                html += '<div class="am-u-sm-2">';
                html += '<img src="'+IMG_URL+obj.avatar+'"  class="logo" onclick="QJgotoGeren('+obj.userId+');">';
                html += '</div>';
                html += '<div class="am-u-sm-10">';
                html += '<p class="nameBox">';
                html += '<span class="name">'+obj.name+'</span>';
                html += ' <span class="sf">'+obj.position+'</span>';
                html += '</p><p class="zhiwei" style="margin-top:-5px;font-size: 13px;">'+obj.orgName+'</p>';
                html += '</div>';

                // html += '<div class="am-u-sm-3">';
                // // html += '<p class="djBox">';
                //
                // // 判断当前是否已经收藏
                // var h=0;
                // var sdf;
                // for(var j=0;j<shoucangList.length;j++){
                //     if (shoucangList[j].collectId == obj.id){
                //         h=1;
                //         sdf = shoucangList[j];
                //     }
                // }
                // if (h ==0){
                //     html += '<span class="dj" style="padding:5px 10px;border:1px solid #dd514c;" onclick="shoucang(this, '+obj.id+');">收藏</span>';
                // }else{
                //     html += '<span class="dj am-btn xdbtn" style="padding:5px 10px;border:1px solid #dd514c;" onclick="quxiaoshoucang('+obj.id+');">已收藏</span>';
                //     // html += '<button type="button" class="am-btn am-btn-default xdbtn"  onclick="quxiaoshoucang('+ sdf.collectId +')");">已收藏</button>';
                // }
                //
                //
                // html += '<span class="dj"></span>';
                // html += '</p></div>';

                html += '</div>';
                html += '<div class="am-g" style="margin:10px 0;">';
                html += '<div class="am-u-sm-12 am-u-sm-centered content"  style="padding:0px 10px;color:#333;text-align: justify;">'+obj.txt+'</div>';
                html += '<p style="text-align: right;font-size: 12px;padding-right:10px;margin:0px 0px 5px;">发布时间：'+ obj.create_at +'</p>';
                html += '<div class="am-g lableBox" style="padding:0px 20px;font-size: 13px;margin-top:0px;">';
                html += '标签：';

                console.log(777666999999999999,obj);
                
                /*资产信息对接*/
                if (obj.propertyRoleStr != '' && obj.propertyRoleStr != null){
                    for (var j=0;j<obj.propertyRoleStr.length;j++) {
                        html += obj.propertyRoleStr[j] + '<span style="color:#dd514c;"> | </span>';
                    }
                }

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
                html += '</div></div>';

                $('.contentBox').append(html);
            }
        }
    })
}

function tuijianList() {
    $.ajax({
        url: WWW_URL+'/recommend/get',
        type: 'GET',
        headers:HEADER,
        data: {
            type:2,
            position:2
        },
        success:function(data){
            console.log('推荐',data);
            var d = data.data.recommendInfo;

            for (var i=0;i<d.length;i++){

                var obj= d[i];

                var html = '';
                html += '<div class="swiper-slide">';
                html += '<p style="position:absolute;width:20px;background:#dd514c;color:#fff;top:10px;right:12px;font-size: 10px;padding:2px 4px;">推荐</p>';
                html += '<div class="item" style="">';
                html += '<div class="am-g">';
                html += '<div class="am-u-sm-2">';
                html += '<img src="'+IMG_URL+obj.userInfo.avatar+'"  class="logo" onclick="QJgotoGeren('+obj.userInfo.id+');">';
                html += '</div>';
                html += '<div class="am-u-sm-10">';
                html += '<p class="nameBox">';
                html += '<span class="name">'+obj.userInfo.name+'</span>';
                html += ' <span class="sf">'+obj.userInfo.position+'</span>';
                html += '</p><p class="zhiwei" style="margin-top:-5px;font-size: 13px;">'+obj.userInfo.orgName+'</p>';
                html += '</div>';

                html += '</div>';
                html += '<div class="am-g" style="margin:10px 0;">';
                html += '<div class="am-u-sm-12 am-u-sm-centered content"  style="padding:0px 10px;color:#333;text-align:justify;">'+obj.txt+'</div>';
                html += '<p style="text-align: right;font-size: 12px;padding-right:10px;margin:0px 0px 5px;">发布时间：'+ obj.create_at +'</p>';
                html += '<div class="am-g lableBox" style="padding:0px 20px;font-size: 13px;margin-top:0px;">';
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

                console.log(998,html);
                $('.swiper-wrapper').append(html);
            }
            mySwiper.update();
        }
    })

}

tuijianList();

// 收藏方法
function shoucang(that,collectId) {
    $.ajax({
        url: WWW_URL+'/favorite/create',
        type: 'post',
        headers:HEADER,
        async:false,
        data: {
            userId : localStorage.getItem('TRQuserid'),
            type:'1', // 1是人 2是帖子
            collectId:collectId,
            txt:''
        },
        success:function(data){
            if(data.status==0){
                layer.msg('收藏成功')
                $(that).html('已收藏');

                $.ajax({
                    url: WWW_URL+'/favorite/get',
                    type: 'get',
                    async:false,
                    headers:HEADER,
                    data: {
                        userId : localStorage.getItem('TRQuserid')
                    },
                    success:function(data){
                        shoucangList();
                        allSer();
                    }
                })

            }
            console.log(234,data);
        }
    })

}


//取消收藏
function quxiaoshoucang(id){
    $.ajax({
        url: WWW_URL+'/favorite/delete',
        type: 'GET',
        headers:HEADER,
        async:false,
        data: {
            userId:localStorage.getItem('TRQuserid'),
            collectId:id,
        },
        success:function(data){
            if (data.status==0){
                layer.msg('取消收藏成功')
                $.ajax({
                    url: WWW_URL+'/favorite/get',
                    type: 'get',
                    async:false,
                    headers:HEADER,
                    data: {
                        userId : localStorage.getItem('TRQuserid')
                    },
                    success:function(data){
                        shoucangList = data.data;
                        console.log(11,data);
                        allSer();
                    }
                })
            }
            console.log(99,data);
        },
        error:function (XMLHttpRequest, textStatus, errorThrown) {
            if (XMLHttpRequest.status==401){
                    window.location.href = './login.html';
            }
        }
    })

}






