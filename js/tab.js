var TABHTML = '';
    TABHTML += '<div class="am-g" style="height:50px;background:#f6f6f6;border-top:1px solid #dddddd;position:fixed;bottom:0px;left:0;width:100%;" id="qj_tab">';
    TABHTML += '<div class="am-u-sm-4" style="text-align:center;color:#484848;font-size: 14px;">';
    TABHTML += '<p style="margin:0;height:28px;"><i class="iconfont tabIndex" style="font-size:22px;color:#484848;">&#xe60c;</i></p>';
    TABHTML += '<p style="margin:0;color:#484848;font-size: 14px;" class="tabIndex" onclick="GOTOINDEX();">首页</p>';
    TABHTML += '</div>';
    TABHTML += '<div class="am-u-sm-4" style="text-align:center;color:#484848;">';
    TABHTML += '<p style="margin:0;height:28px;"><i class="iconfont tabTou" style="font-size:22px;color:#484848;">&#xe616;</i></p>';
    TABHTML += '<p style="margin:0;color:#484848;font-size: 14px;" class="tabTou" onclick="GOTOTOURONGBAO();">投融宝</p>';
    TABHTML += '</div>';
    TABHTML += '<div class="am-u-sm-4" style="text-align:center;color:#484848;">';
    TABHTML += '<p style="margin:0;height:28px;"><i class="iconfont tabMy" style="font-size:22px;color:#484848;">&#xe627;</i></p>';
    TABHTML += '<p style="margin:0;color:#484848;font-size: 14px;" class="tabMy" onclick="GOTOMY();">我的</p>';
    TABHTML += '</div>';
    TABHTML += '</div>';

$('body').append(TABHTML);
$('body').css({paddingBottom:'65px'});

function GOTOINDEX() {
    window.location.href = '/www/html/index.html'
}

function GOTOTOURONGBAO() {
    window.location.href = '/www/html/tourongbao-zichanfang.html'
}

function GOTOMY() {
    window.location.href = '/www/html/my.html'
}