
// init
// 判断详细资料是否填写
$.ajax({
    url: WWW_URL+'/user',
    type: 'GET',
    headers:HEADER,
    success:function(data){

        /*如果是资产方  则return */
        if(data.data.type == 2) return false;


        var detailedOk = data.data.detailedOk;
        // 未完善
        if (detailedOk==0){
            window.location.href = '/www/html/shezhixiangxiziliao.html'

            //已完善
        }else if (detailedOk==1){

        }

        console.log(987,data);
    },
    error:function (data) {
        window.location.href = '/www/html/login.html';
    }
});


$.ajax({
    url: WWW_URL+'/recommend/get',
    type: 'GET',
    headers:HEADER,
    data: {
        type:1,
        position:1,
    },
    success:function(data){
        console.log(333666999,data);
        var d= data.data.recommendInfo;
        for (var i=0;i<d.length;i++){
            var obj = d[i];

            console.log(456,obj);

            var html = '';
            html += '<div class="item" style="">';
            html += '<div class="am-g">';
            html += '<div class="am-u-sm-2">';
            html += '<img src="'+IMG_URL+obj.avatar+'" alt="" class="logo" onclick="QJgotoGeren('+obj.id+');">';
            html += '</div>';
            html += '<div class="am-u-sm-10">';
            html += '<p class="nameBox">';
            html += '<span class="name" style="margin-right:10px">'+obj.name+'</span>';
            html += '<span class="sf">'+obj.position+'</span>';
            html += '</p>';
            html += ' <p class="zhiwei" style="margin-top:-5px;">'+obj.orgName+'</p>';
            html += '</div>';
            // html += '<div class="am-u-sm-3">';
            // html += '<p class="djBox">';
            // html += '<span class="dj">123</span>次对接';
            // html += '</p>';
            // html += '</div>';
            html += '</div>';
            html += '<div class="am-g" style="margin:10px 0px;">';

            var investReq = obj.investReq == null ? '' : obj.investReq;

            html += '<div class="am-u-sm-12 am-u-sm-centered content" style="padding:0px 10px;color:#333;" onclick="QJgotoGeren('+obj.id+');">'+investReq+'</div></div>';
            html += '<div class="am-g lableBox" style="padding:0px 20px;font-size: 13px">';
            html += '标签：';


            /*机构类别*/
            if (obj.mechanismSpeciesStr != '' && obj.mechanismSpeciesStr != null ){
                    html += obj.mechanismSpeciesStr+'<span style="color:#dd514c;"> | </span>';

            }

            console.log('投资方式',obj.investStyleStr);
            /*投资方式*/
            if (obj.investStyleStr != '' && obj.investStyleStr != undefined && obj.investStyleStr != 'undefined'){
                for (var j=0;j<obj.investStyleStr.length;j++) {
                    html += obj.investStyleStr[j]+'<span style="color:#dd514c;"> | </span>';
                }

            }

            /*资金偏好标签*/
            if (obj.Preference != ''&& obj.investStyleStr != undefined){
                for (var k=0;k<obj.preferenceStr.length;k++){
                    html += obj.preferenceStr[k]+'<span style="color:#dd514c;"> | </span>';
                }

            }



            html += '</div>';
            html += '<div class="am-g">';
            html += ' <button type="button" class="am-btn am-btn-danger" style="width:92%;margin-left:4%;" onclick="duiduiren('+obj.id+');">业务对接</button>';
            html += '</div></div>';

            $('#contentM').append(html);

        }
        console.log(789,data);
    }
})



function gotoTourongbao(id) {

    if(id==88888){
        window.location.href = '/www/html/tourongbao.html';
    }else{
        window.location.href = '/www/html/tourongbao.html?id='+id;

    }
}


// 修改底部TAB颜色
$('.tabIndex').css({color:"#dd514c"});

/*
* 跳转到 投融宝-资金方中，参数为
* */
function goToZijifangView(type){
    window.location.href = './tourongbao'
}



