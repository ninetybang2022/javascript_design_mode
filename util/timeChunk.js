/*
    分时函数，用于处理一次性要生成多个元素导致
    浏览器压力的解决方法
    ary为数据
    fn处理ary每个元素的逻辑函数
    count每200毫秒生成的元素的数量
*/
var timeChunk = function(ary,fn,count){
    var t;
    var len = ary.length;
    var start = function(){
        for(var i =0,l=Math.min(count || 1,ary.length);i<l;i++)
        {
            var obj = ary.shift();
            //将每次循环的数据放入fn函数中进行逻辑处理
            fn(obj);
        }
    }
    //返回一个函数
    return function(){
        t = setInterval(function(){
            //判断上面的那个数据数组，如果全部弹出那么清除这个计时器
            if(ary.length ===0)
            {
                clearInterval(t);
            }
            start();
        },200);
    }
}
