/*
	使用javascript来创建名字空间
	这样做可以避免变量在全局变量中被染污
 */
//用于保存名字空间
var MyApp = {};
MyApp.namespace = function(name)
{
	//因为传入的名字可能存在二级三级所以这里要将他使用.点进行分割
	var name = name.split('.');
	//将MyApp指向另一个内部变量中
	var current = MyApp;
	//循环遍历，查看是否存在名字空间
	for(var i in name)
	{
		//如果不存在这个名字空间那么创建他
		if(!current[name[i]]){
			current[name[i]] = {};
		}
		//再将创建好的名字空间赋值回去
		current = current[name[i]];
	}
}