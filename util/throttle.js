/*
    函数节流操作
    可以绑定一些调用非常频繁的事件如 onresize onscroll 等
*/
//这里有两个参数一个是延迟执行的函数，第二个是延迟的时间
var throttle = function(fn,lazyTime){

    var __self = fn, //将这个要延迟执行的函数保存到内部以便下面调用
        timer, //因为是使用setTimeout来实现的所以这个是保存计时器
        firstTime = true; //是否为第一次执行

    return function()
    {
        //参数
        var args = arguments,
        //当前return的函数
            __me = this;
        //如果是第一次执行那么直接调用
        if(firstTime)
        {
            __self.apply(this,arguments);
            //将firstTime设置为false因为下次调用非第一次
            return firstTime = false;
        }
        //判断计时器是否还存在 如果存在就不执行
        if(timer)
        {
            return false;
        }
        //否则就延迟执行
        timer = setTimeout(function(){
            clearTimeout(timer);
            timer = null;
            __self.apply(__me,args);
        },lazyTime || 200);
    }
}

/*
    使用例子
    window.onresize = throttle(function(){...},300) 那么就会每300毫秒执行一次而不是拖动一次执行一次
*/
