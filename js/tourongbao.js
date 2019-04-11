// 修改底部TAB颜色
$('.tabTou').css({color: "#dd514c"});
$('.zijinfangView').css({color: "#dd514c"});

// 页面跳转
function gotoTourongbao(url) {
    window.location.href = url;
}

var allConfig;
$.ajax({
    url: WWW_URL + '/config',
    type: 'get',
    async: false,
    headers: HEADER,
    success: function (data) {

        var d = data.data;
        allConfig = d;
        console.log(d);
        for (var i = 0; i < d.length; i++) {
            // 地区
            if (d[i].type == 22) {
                // var h = '<option value="'+d[i].id+'">'+d[i].cat+'</option>';
                var h = '<div class="am-u-sm-6 xnbtnbox"><button class="am-btn am-btn-default am-btn-xs xnbtn" style="width:95%;" type="button" configId="' + d[i].id + '">' + d[i].cat + '</button></div>';
                $('.diqu').append(h);
            }

            //机构类别
            if (d[i].type == 18) {
                // var h = '<option value="'+d[i].id+'">'+d[i].cat+'</option>';
                var h = '<div class="am-u-sm-6 xnbtnbox"><button class="am-btn am-btn-default am-btn-xs xnbtn" style="width:95%;" type="button" configId="' + d[i].id + '">' + d[i].cat + '</button></div>';
                $('.jigouleibie').append(h);
            }

            //投资方式
            if (d[i].type == 13) {
                // var h = '<option value="'+d[i].id+'">'+d[i].cat+'</option>';
                var h = '<div class="am-u-sm-6 xnbtnbox"><button class="am-btn am-btn-default am-btn-xs xnbtn" style="width:95%;" type="button" configId="' + d[i].id + '">' + d[i].cat + '</button></div>';
                $('.touzifangshi').append(h);
            }

            //资产偏好标签
            if (d[i].type == 20) {
                // var h = '<option value="'+d[i].id+'">'+d[i].cat+'</option>';
                var h = '<div class="am-u-sm-6 xnbtnbox"><button class="am-btn am-btn-default am-btn-xs xnbtn" style="width:95%;" type="button" configId="' + d[i].id + '">' + d[i].cat + '</button></div>';
                $('.zichanpianhaobiaoqian').append(h);
            }


            //资金来源
            if (d[i].type == 17) {
                // var h = '<option value="'+d[i].id+'">'+d[i].cat+'</option>';
                var h = '<div class="am-u-sm-6 xnbtnbox"><button class="am-btn am-btn-default am-btn-xs xnbtn" style="width:95%;" type="button" configId="' + d[i].id + '">' + d[i].cat + '</button></div>';
                $('.zichanxinxiduijie').append(h);
            }

            //投资金额
            if (d[i].type == 21) {
                // var h = '<option value="'+d[i].id+'">'+d[i].cat+'</option>';
                var h = '<div class="am-u-sm-6 xnbtnbox"><button class="am-btn am-btn-default am-btn-xs xnbtn" style="width:95%;" type="button" configId="' + d[i].id + '">' + d[i].cat + '</button></div>';
                $('.touzijine').append(h);
            }
        }
    }
})

// 综合筛选
function shaixuan() {
	// 获取搜索列表的数据

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
$(document).on('click', '.diqu .xnbtn', function () {
    console.log(888);
    $('.diqu').find('.xnbtn').removeClass('xnbtnSelected')
    $(this).addClass('xnbtnSelected')
});

// 投资方式选择
$(document).on('click', '.touzifangshi .xnbtn', function () {
    console.log(888);
    $('.touzifangshi').find('.xnbtn').removeClass('xnbtnSelected')
    $(this).addClass('xnbtnSelected')
});

// 资金偏好设置
$(document).on('click', '.zichanpianhaobiaoqian .xnbtn', function () {
    console.log(888);
    $('.zichanpianhaobiaoqian').find('.xnbtn').removeClass('xnbtnSelected')
    $(this).addClass('xnbtnSelected')
});


// 资产类别选择
$(document).on('click', '.jigouleibie .xnbtn', function () {
    console.log(888);
    $('.jigouleibie').find('.xnbtn').removeClass('xnbtnSelected')
    $(this).addClass('xnbtnSelected')
});

// 资产行业选择
$(document).on('click', '.zichanhangye .xnbtn', function () {
    console.log(888);
    $('.zichanhangye').find('.xnbtn').removeClass('xnbtnSelected')
    $(this).addClass('xnbtnSelected')
});

// 资产信息对接
$(document).on('click', '.zichanxinxiduijie .xnbtn', function () {
    console.log(888);
    $('.zichanxinxiduijie').find('.xnbtn').removeClass('xnbtnSelected')
    $(this).addClass('xnbtnSelected')
});

// 资金选择
$(document).on('click', '.touzijine .xnbtn', function () {
    console.log(888);
    $('.touzijine').find('.xnbtn').removeClass('xnbtnSelected')
    $(this).addClass('xnbtnSelected')
});

// 发布按钮跳转
function fabuBtn() {
    window.location.href = './fabu.html';
}

var allUser;
// 所有用户数据
/*$.ajax({
    url: WWW_URL + '/user/all',
    type: 'GET',
    async: false,
    headers: HEADER,
    success: function (data) {
        allUser = data.data;
    }
})
*/
//搜索取消
function sousuoquxiao() {
    $('.sousuoBox').hide();
}

// 搜索打开
function openSousuo() {
    $('.sousuoBox').show();
}


// 获取收藏列表
var shoucangList;

function shoucangList() {
    $.ajax({
        url: WWW_URL + '/favorite/get',
        type: 'get',
        async: false,
        headers: HEADER,
        data: {
            userId: localStorage.getItem('TRQuserid')
        },
        success: function (data) {
            shoucangList = data.data;
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
    var region, orgType, investStyle, preference, investAmount, searchTxt, source;

    //选中的地区处理
    var diquSelected = $('.diqu').find(' .xnbtnSelected');
    if (diquSelected.length == 0) {
        region = '';
    } else {
        if (diquSelected.html() == '全国') {
            region = '';
        } else {
            region = diquSelected.html();
        }
    }

    //机构类别
    var jigouleibie = $('.jigouleibie').find(' .xnbtnSelected');
    if (jigouleibie.length == 0) {
        orgType = '';
    } else {
        if (jigouleibie.html() == '全部') {
            orgType = '';
        } else {
            orgType = jigouleibie.attr('configId');
        }
    }

    //投资方式
    var touzifangshi = $('.touzifangshi').find(' .xnbtnSelected');
    if (touzifangshi.length == 0) {
        investStyle = '';
    } else {
        if (touzifangshi.html() == '全部') {
            investStyle = '';
        } else {
            investStyle = touzifangshi.attr('configId');
        }
    }

    //资金偏好设置
    var zichanpianhaobiaoqian = $('.zichanpianhaobiaoqian').find(' .xnbtnSelected');
    if (zichanpianhaobiaoqian.length == 0) {
        preference = '';
    } else {
        if (zichanpianhaobiaoqian.html() == '全部') {
            preference = '';
        } else {
            preference = zichanpianhaobiaoqian.attr('configId');
        }
    }
    //资金来源
    var zichanxinxiduijie = $('.zichanxinxiduijie').find(' .xnbtnSelected');
    if (zichanxinxiduijie.length == 0) {
        source = '';
    } else {
        if (zichanxinxiduijie.html() == '全部') {
            source = '';
        } else {
            source = zichanxinxiduijie.attr('configId');
        }
    }
    //投资金额
    var touzijine = $('.touzijine').find(' .xnbtnSelected');
    if (touzijine.length == 0) {
        investAmount = '';
    } else {
        if (touzijine.html() == '不限') {
            investAmount = '';
        } else {
            investAmount = touzijine.attr('configId');
        }
    }

    var page=1;
    var isBottom=false;
    // 搜索信息
    var searchTxt = $('.sousuoinput').val();
    if (orgType != '') orgType = '["' + orgType + '"]';
    if (investStyle != '') investStyle = '["' + investStyle + '"]';
    if (preference != '') preference = '["' + preference + '"]';
    if (source != '') source = '["' + source + '"]';
    if (investAmount != '') investAmount = '["' + investAmount + '"]';
    console.log(99991, region, orgType, investStyle, preference, source, investAmount, searchTxt);
    $('.contentBox')
        .append('<div class="inner"></div>')
        .dropload({
        scrollArea : window,
        domDown : {
            domClass   : 'dropload-down',
            domRefresh : '<div class="dropload-refresh">↑上拉加载更多</div>',
            domLoad    : '<div class="dropload-load"><span class="loading"></span>加载中</div>',
            domNoData  : '<div class="dropload-noData" >—— 我是有底线的 ——</div>'
        },
        loadDownFn : function(me){
            if(isBottom){
                me.noData(true);
                me.resetload();
                return false
            }
            $.ajax({
                url: WWW_URL + '/search/fund-user',
                type: 'GET',
                headers: HEADER,
                data: {
                    region: region, //地区
                    mechanismSpecies: orgType,//机构类别
                    investStyle: investStyle,//投资方式
                    preference: preference,//资金偏好标签
                    source: source, //投资来源
                    investAmount: investAmount,//投资金额
                    searchTxt: searchTxt, //搜索框文字
                    page:page
                },
                success: function (data) {
                    var d = data.data;
                    console.log(9123992, d);
                    if(!d.length){
                        isBottom=true;
                        me.noData(true);
                    }
                    for (var i = 0; i < d.length; i++) {
                        var obj = d[i];
                        var html = '';
						if(obj.avatar.length > 10){
							var avatar = obj.avatar
						}else{
							var avatar = 'file/defult.jpg';
						}
                        html += '<div class="item" style="">';
                        html += '<div class="am-g">';
                        html += '<div class="am-u-sm-2">';
                        html += '<img src="' + IMG_URL + avatar + '"  class="logo" onclick="QJgotoGeren(' + obj.id + ');">';
                        html += '</div>';
                        html += '<div class="am-u-sm-10">';
                        html += '<p class="nameBox">';
                        html += '<span class="name">' + obj.name + '</span>';
                        html += ' <span class="sf">' + obj.position + '</span>';
                        html += '</p><p class="zhiwei" style="margin-top:-5px;">' + obj.orgName + '</p>';
                        html += '</div>';
                        var investReq = obj.investReq == null ? '' : obj.investReq;
                        html += '</div>';
                        html += '<div class="am-g" style="margin:10px 0;">';
                        html += '<div class="am-u-sm-12 am-u-sm-centered content" style="padding:0px 10px;color:#333;text-align: justify;" onclick="QJgotoGeren(' + obj.id + ');" >' + investReq + '</div>';
                        html += '<div class="am-g lableBox" style="padding:0px 20px;font-size: 13px">';
                        html += '标签：';
                        /*机构类别*/
                        if (obj.mechanismSpeciesStr) {
                            obj.mechanismSpeciesStr.forEach(function (i) {
                                html += i + '<span style="color:#dd514c;"> | </span>';
                            })
                        }
                        /*投资方式*/
                        // if (obj.investStyle != '' && obj.investStyle != null) {
                        //     for (var j = 0; j < obj.investStyleStr.length; j++) {
                        //         html += obj.investStyleStr[j] + '<span style="color:#dd514c;"> | </span>';
                        //     }
                        // }
                        /*前期费用*/
                        if(obj.preCost&&obj.preCostStr){
                            obj.preCostStr.forEach(function(i){
                                html += i+'<span style="color:#dd514c;"> | </span>';
                            })
                        }
                        /*资金偏好标签*/
                        if (preference != null && obj.preferenceStr) {
                            for (var k = 0; k < obj.preferenceStr.length; k++) {
                                html += obj.preferenceStr[k] + '<span style="color:#dd514c;"> | </span>';
                            }
                        }
                        html += '</div>';
                        html += '<div class="am-g">';
                        html += '<button type="button" class="am-btn am-btn-danger" style="width:92%;margin-left:4%" onclick="yewuduijie(' + obj.id + ');">业务对接</button>';
                        html += '</div></div>';
                        $('.contentBox .inner').append(html);
                    }
                    page++;
                    me.resetload();
                }
            })
        }
    });
}


//获取域名栏参数
function getUrlStr(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

// 判断是否是从首页过来的

var indexId = getUrlStr('id');

if (indexId != null) {


    //遍历资金方，找到id项并选中
    var indexIdObj = $('.zichanpianhaobiaoqian').find('.xnbtn');

    console.log(9598, indexId, indexIdObj.length);

    for (var i = 0; i < indexIdObj.length; i++) {
        if (indexIdObj.eq(i).attr('configid') == indexId) {
            indexIdObj.eq(i).addClass('xnbtnSelected')
        }
    }
}

// 收藏方法
function shoucang(that, collectId) {
    $.ajax({
        url: WWW_URL + '/favorite/create',
        type: 'post',
        headers: HEADER,
        async: false,
        data: {
            userId: localStorage.getItem('TRQuserid'),
            type: '1', // 1是人 2是帖子
            collectId: collectId,
            txt: ''
        },
        success: function (data) {
            if (data.status == 0) {
                layer.msg('收藏成功')
                $(that).html('已收藏');

                $.ajax({
                    url: WWW_URL + '/favorite/get',
                    type: 'get',
                    async: false,
                    headers: HEADER,
                    data: {
                        userId: localStorage.getItem('TRQuserid')
                    },
                    success: function (data) {
                        shoucangList();
                        allSer();
                    }
                })

            }
            console.log(234, data);
        }
    })

}


//取消收藏
function quxiaoshoucang(id) {
    $.ajax({
        url: WWW_URL + '/favorite/delete',
        type: 'GET',
        headers: HEADER,
        async: false,
        data: {
            userId: localStorage.getItem('TRQuserid'),
            collectId: id,
        },
        success: function (data) {
            if (data.status == 0) {
                layer.msg('取消收藏成功')
                $.ajax({
                    url: WWW_URL + '/favorite/get',
                    type: 'get',
                    async: false,
                    headers: HEADER,
                    data: {
                        userId: localStorage.getItem('TRQuserid')
                    },
                    success: function (data) {
                        shoucangList = data.data;
                        allSer();
                    }
                })
            }
            console.log(99, data);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            if (XMLHttpRequest.status == 401) {
                layer.msg('您还未登录，请您先登陆！')
                setTimeout(function () {
                    window.location.href = './login.html';
                }, 1500)
            }
        }
    })

}

//推荐
function tuijianList() {
    $.ajax({
        url: WWW_URL + '/recommend/get',
        type: 'GET',
        headers: HEADER,
        data: {
            type: 1,
            position: 3
        },
        success: function (data) {
            console.log('推荐', data);
            var d = data.data.recommendInfo;
            for (var i = 0; i < d.length; i++) {
                var obj = d[i];
                var html = '';
				if(obj.avatar.length > 10){
					var avatar = obj.avatar
				}else{
					var avatar = 'file/defult.jpg';
				}
                // if(obj.investReq){
                html += '<div class="swiper-slide" style="position: relative;">';
                html += '<p style="position:absolute;width:20px;background:#dd514c;color:#fff;top:10px;right:12px;font-size: 10px;padding:2px 4px;">推荐</p>';
                html += '<div class="item" style="">';
                html += '<div class="am-g">';
                html += '<div class="am-u-sm-2">';
                html += '<img src="' + IMG_URL + avatar + '"  class="logo" onclick="QJgotoGeren(' + obj.id + ');">';
                html += '</div>';
                html += '<div class="am-u-sm-10">';
                html += '<p class="nameBox">';
                html += '<span class="name">' + obj.name + '</span>';
                html += ' <span class="sf">' + obj.position + '</span>';
                html += '</p><p class="zhiwei" style="margin-top:-5px;">' + obj.orgName + '</p>';
                html += '</div>';

                var investReq = obj.investReq ? obj.investReq : '';

                html += '</div>';
                html += '<div class="am-g" style="margin:10px 0;">';
                html += '<div class="am-u-sm-12 am-u-sm-centered content" style="padding:0px 10px;color:#333;text-align: justify;" onclick="QJgotoGeren(' + obj.id + ');">' + investReq + '</div>';
                html += '<div class="am-g lableBox" style="padding:0px 20px;font-size: 13px">';
                html += '标签：';

                /*机构类别*/
                if (obj.mechanismSpeciesStr) {
                    obj.mechanismSpeciesStr.forEach(function (i) {
                        html += i + '<span style="color:#dd514c;"> | </span>';
                    })

                }

                /*投资方式*/
                // if (obj.investStyleStr&&obj.investStyleStr instanceof Array ){
                //     for (var j=0;j<obj.investStyleStr.length;j++) {
                //         html += obj.investStyleStr[j] + '<span style="color:#dd514c;"> | </span>';
                //     }
                // }
                /*前期费用*/
                if (obj.preCost) {
                    obj.preCostStr.forEach(function (i) {
                        html += i + '<span style="color:#dd514c;"> | </span>';
                    })
                }

                /*资金偏好标签*/
                if (obj.preference != '') {
                    for (var k = 0; k < obj.preferenceStr.length; k++) {
                        // html += '<div class="am-u-sm-6" style="margin-bottom: 5px;"><button class="am-btn am-btn-default am-btn-xs label" style="width:100%;">'+obj.sourceStr[k]+'</button></div>';
                        html += obj.preferenceStr[k] + '<span style="color:#dd514c;"> | </span>';
                    }
                }
                html += '</div>';
                html += '<div class="am-g" style="text-align: center;">';
                html += '<button type="button" class="am-btn am-btn-danger" style="width:92%;" onclick="yewuduijie(' + obj.id + ');">业务对接</button>';
                html += '</div></div></div>';
                // }

                console.log(html);
                $('.swiper-wrapper').append(html);

            }
            mySwiper.update();
        }
    })

}


tuijianList();
allSer();



