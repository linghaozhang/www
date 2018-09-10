// 修改底部TAB颜色
$('.tabTou').css({color:"#dd514c"});
$('.renmaiquanView').css({color:"#dd514c"});

// 页面跳转
function gotoTourongbao(url){
    window.location.href = url ;
}

// 综合筛选
function shaixuan() {
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
            // 地区
            if (d[i].type == 22) {
                // var h = '<option value="'+d[i].id+'">'+d[i].cat+'</option>';
                var h = '<div class="am-u-sm-6 xnbtnbox"><button class="am-btn am-btn-default am-btn-xs xnbtn" style="width:92%;" type="button" configId="' + d[i].id + '">' + d[i].cat + '</button></div>';
                $('.diqu').append(h);
            }

            //机构类别
            if (d[i].type == 18) {
                // var h = '<option value="'+d[i].id+'">'+d[i].cat+'</option>';
                var h = '<div class="am-u-sm-6 xnbtnbox"><button class="am-btn am-btn-default am-btn-xs xnbtn" style="width:92%;" type="button" configId="' + d[i].id + '">' + d[i].cat + '</button></div>';
                $('.jigouleibie').append(h);
            }

            //机构选择
            if (d[i].type == 12) {
                // var h = '<option value="'+d[i].id+'">'+d[i].cat+'</option>';
                var h = '<div class="am-u-sm-6 xnbtnbox"><button class="am-btn am-btn-default am-btn-xs xnbtn" style="width:92%;" type="button" configId="' + d[i].id + '">' + d[i].cat + '</button></div>';
                $('.jigouxuanze').append(h);
            }



        }
        console.log(data);
    },
    error:function (data) {
            window.location.href = './login.html';
    }
})

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

// 资产类别选择
$(document).on('click','.jigouxuanze .xnbtn',function () {
    console.log(888);
    $('.jigouxuanze').find('.xnbtn').removeClass('xnbtnSelected')
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
$.ajax({
    url: WWW_URL+'/user/all',
    type: 'GET',
    async:false,
    headers:HEADER,
    success:function(data){
        allUser = data.data;
    }
})

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
    var region,orgType,org,searchTxt;

    //选中的地区处理
    var diquSelected = $('.diqu').find(' .xnbtnSelected');
    if (diquSelected.length==0){
        region = '';
    }else{
        if (diquSelected.html()=='全国'){
            region = '';
        }else{
            region = diquSelected.html();
        }
    }

    //机构类别
    var jigouleibie = $('.jigouleibie').find(' .xnbtnSelected');
    if (jigouleibie.length==0){
        orgType = '';
    }else{
        if (jigouleibie.html()=='全部'){
            orgType = '';
        }else{
            orgType = jigouleibie.attr('configId');
        }
    }

    //投资选择
    var jigouxuanze = $('.jigouxuanze').find(' .xnbtnSelected');
    if (jigouxuanze.length==0){
        org = '';
    }else{
        if (jigouxuanze.html()=='全部'){
            org = '';
        }else{
            org = jigouxuanze.attr('configId');
        }
    }


    // 搜索信息
    var searchTxt = $('.sousuoinput').val();

    console.log(112233,region,orgType,org,searchTxt);

    if (orgType != '') orgType= '["'+orgType+'"]';
    if (org != '') org= '["'+org+'"]';


    $.ajax({
        url: WWW_URL+'/search/user',
        type: 'GET',
        headers:HEADER,
        data: {
            region : region , //地区
            orgType: orgType,//机构类别
            org:org,//机构选择
            searchTxt: searchTxt //搜索框文字
        },
        success:function(data){
            $('.box').empty();
            var d = data.data;

            for (var i=0;i<d.length;i++){
                var obj = d[i];

                var html = '';
                html += '<div class="item">';
                html += '<div class="logolist">';
                html += '<img src="'+IMG_URL+obj.avatar+'" alt="" onclick="QJgotoGeren('+obj.id+');">';
                html += '</div>';
                html += '<div class="main" onclick="QJgotoGeren('+obj.id+');" >';
                html += '<p class="tit">';
                html += '<span style="margin-right:5px;font-size: 16px;">'+obj.name+'</span>';
                html += '<span style="font-size: 16px;">'+obj.position+'</span>';
                html += '</p>';
                html += '<p class="lab">'+obj.orgName;
                html += '</p>';
                html += '</div>';


                // html += '<div class="btnbox">';
                //
                //
                // console.log(44565666,shoucangList);
                // // 判断当前是否已经收藏
                // var h=0;
                // var sdf;
                // for(var j=0;j<shoucangList.length;j++){
                //     console.log(77777,obj.id);
                //     console.log(88888,shoucangList[j].userId);
                //     if (shoucangList[j].collectId == obj.id){
                //         h=1;
                //         sdf = shoucangList[j];
                //     }
                // }
                // if (h ==0){
                //     html += '<button type="button" class="am-btn am-btn-default xdbtn" onclick="shoucang(this, '+obj.id+');">收藏</button>';
                // }else{
                //     html += '<button type="button" class="am-btn am-btn-default xdbtn"  onclick="quxiaoshoucang('+ sdf.collectId +')");">已收藏</button>';
                // }

                html += '</div>';


                html += '</div>';

                $('.box').prepend(html);
            }
            console.log(887,data);
        }
    })

}


allSer();


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
                        shoucangList = data.data;
                        console.log(11,data);
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