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
            console.log(data);
            var d = data.data;
            for (var i=0;i<d.length;i++){
                var obj = d[i];
                var o = obj.collectInfo;

                var html = '';
                html += '<div class="item">';
                html += '<div class="logolist">';
                html += '<img src="'+IMG_URL+o.avatar+'" alt="" onclick="QJgotoGeren('+obj.id+');">';
                html += '</div>';
                html += '<div class="main">';
                html += '<p class="tit">';
                html += '<span onclick="QJgotoGeren('+obj.id+');">'+o.name+'</span>';
                html += '<span>'+o.position+'</span>';
                html += '</p>';
                html += '<p class="lab">'+o.orgName;
                html += '</p>';
                html += '</div>';
                html += '<div class="btnbox">';

                html += '<button type="button" class="am-btn am-btn-default xdbtn" onclick="quxiaoshoucang('+o.id+')" );">取消收藏</button>';

                html += '</div>';
                html += '</div>';

                $('.box').append(html);



            }

        }
    })

}
shoucangList();

function quxiaoshoucang(id){
    $.ajax({
        url: WWW_URL+'/favorite/delete',
        type: 'GET',
        headers:HEADER,
        data: {
            userId:localStorage.getItem('TRQuserid'),
            collectId:id, 
        },
        success:function(data){
            if (data.status==0){
                layer.msg('取消收藏成功')
                setTimeout(function () {
                    window.location.href = './shoucangList.html'
                },1500)
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