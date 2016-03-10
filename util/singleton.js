/*
	单例模式
		单独的单例模式
 */
var single = function(fn)
{
	var instance;

	return function()
	{
		return instance || (instance = fn.apply(this,arguments));
	}
}

/*
	var helloSingle = single(function(){
		console.log('hello');
	})
	var helloObj = helloSingle(); //这里就返回了唯一的对象


 */