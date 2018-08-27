function apiCommonFun(url,type,data) {
    $.ajax({
        url: url,
        type: type,
        data: data,
        success:function(data){
            return 222233;
        }
    });
};


var Api = {
    /*
    * 提交意见反馈
    *
    * */
    getUserInfo : function (parameterObj) {
        return apiCommonFun('url','PIST',parameterObj);
    }




};




