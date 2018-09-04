
var userObj;
// 所有用户数据
$.ajax({
    url: WWW_URL+'/user',
    type: 'GET',
    async:false,
    headers:HEADER,
    success:function(data){
        userObj = data.data;
    }
});

var allConfig;
// 获取搜索列表的数据
$.ajax({
    url: WWW_URL+'/config',
    type: 'get',
    async:false,
    headers:HEADER,
    success:function(data) {

        var d = data.data;
        allConfig = d;
    }

})





$.ajax({
    url: WWW_URL+'/buttJoin',
    type: 'get',
    headers:HEADER, 
    success:function(data){
        var d = data.data;
        for (var i=0;i<d.length;i++){
            var obj = d[i];

            if (d[i].userId == localStorage.getItem('TRQuserid')){
                
                console.log(111);
                var html = '';
                html += '<div class="item" style="">';
                html += '<div class="am-g">';
                html += '<div class="am-u-sm-2">';
                html += '<img src="'+IMG_URL+userObj.avatar+'"  class="logo" onclick="QJgotoGeren('+obj.id+');">';
                html += '</div>';
                html += '<div class="am-u-sm-7">';
                html += '<p class="nameBox">';
                html += '<span class="name" onclick="QJgotoGeren('+obj.id+');">'+userObj.name+'</span>';
                html += ' <span class="sf">'+userObj.position+'</span>';
                html += '</p><p class="zhiwei">'+userObj.orgName+'</p>';
                html += '</div><div class="am-u-sm-3">';
                html += '<p class="djBox">';
                html += '<span class="dj"></span>';
                html += '</p></div></div>';
                html += '<div class="am-g">';
                html += '<div class="am-u-sm-12 am-u-sm-centered content">'+obj.txt+'</div>';
                html += '<div class="am-g lableBox">';

                var r = eval(obj.propertyTypeLabel);
                for (var t=0;t<r.length;t++){

                    for (var g=0;g<allConfig.length;g++){
                        if (allConfig[g].id == r[t]){

                            if (g ==allConfig.length){
                                html += '<div class="am-u-sm-6 .am-u-end">';
                            }else{
                                html += '<div class="am-u-sm-6 .am-u-end">';
                            }

                            html += '<button class="am-btn am-btn-default am-btn-xs label" style="width:95%;">'+allConfig[g].cat+'</button></div>';

                        }
                    }

                }

                html += '</div>';
                // html += '<div class="am-g">';
                // html += '<button type="button" class="am-btn am-btn-danger" style="width:100%;" onclick="yewuduijie('+obj.id+');">业务对接</button>';
                // html += '</div>';
                html += '</div>';

                $('.contentBox').append(html);


            }

        }
        console.log(data);
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
