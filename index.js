//获取dom对象
	var g=function(id){
		return document.getElementById(id);
	}
	// TimeLine时间轴对象的构造器
	var TimeLine=function(){
		this.order = [];//动画序列
		this.add=function(timeout,func,log){//初始化add
			this.order.push({
				timeout:timeout,
				func:func,
				log,log
			});
		}
		//参数ff 支持快进
		this.start = function(ff){
			for(s in this.order){
				(function(me){//定义一个闭包函数。如果是一个函数的话输出的就是最后一个数据
					var fn = me.func;
					var timeout = me.timeout;
					var log = me.log;
					timeout=Math.max(timeout-(ff||0),0);
					setTimeout(fn,timeout);
					setTimeout(function() {
						console.log('time->',timeout,'log->',log);
					},timeout);
				})(this.order[s])
			}
		}
	}
	//初始的场景
	var s1 = new TimeLine();
	//粽子展开的场景
	var s2 = new TimeLine();
	//粽子旋转的场景
	var s3 = new TimeLine();
	s1.add(1,function(){
		g('c_zong_box').className = 'c_zong_box c_zong_box_rock';//添加抖动
		g('c_shengzi1').onclick=function(){
			//s2.start();
		}
	})
	//定义粽子展开的动画
	s2.add(1,function(){
		g('c_zong_box').className = 'c_zong_box';//停止抖动
		g('text').className= 'text text_in';//显示动画文字
	})
	//绳子的四个过程
	s2.add(100,function(){
		g('c_shengzi1').className = 'c_shengzi2';//
	})
	s2.add(500,function(){
		g('c_shengzi1').className = 'c_shengzi3';//
	})
	s2.add(1000,function(){
		g('c_shengzi1').className = 'c_shengzi4';//
	})
	s2.add(1500,function(){
		g('c_shengzi1').className = 'c_shengzi0';//
	})
	s2.add(2000,function(){
		g('c_zongzi').className = 'c_zongzi_out c_zongzi';//隐藏粽子
		g('c_zongzirou').className = 'c_zongzirou c_zongzirou_in';//显示粽子肉
		g('c_zuoye').className = 'c_zuoye c_zuoye_in';//显示左叶
		g('c_youye').className = 'c_youye c_youye_in';//显示右页
		g('c_t_1').className = 'c_t_1 ct_in';//显示右页
		g('c_t_2').className = 'c_t_2 c_t_mirror_0';//显示右页

	})
	s2.add(3000,function(){
		
		g('c_zuoye').className = 'c_zuoye c_zuoye_in c_zuoye_out';//
		g('c_youye').className = 'c_youye c_youye_in c_youye_out';
		g('c_diye').className = 'c_diye c_diye_in ';
		s3.start();
	})
	//粽子肉托盘旋转动画定义
	s3.add('1000',function(){
		g('c_zongzirou').className = 'c_zongzirou c_zongzirou_in ';//显示粽子肉
	})
	s3.add('2000',function(){
		g('c_zongzirou').className = 'c_zongzirou c_zongzirou_in c_zongzirou_view_2';//显示粽子肉
		g('c_t_1').className = "c_t_1 ct_in c_t_view_2"//显示视图2
		g('c_t_2').className = "c_t_2 ct_in c_t_mirror_2"//显示视图2
	})
	s3.add('3000',function(){
		g('c_zongzirou').className = 'c_zongzirou c_zongzirou_in c_zongzirou_view_3';//显示粽子肉
		g('c_t_1').className = "c_t_1 ct_in c_t_view_3"//显示视图2
		g('c_t_2').className = "c_t_2 ct_in c_t_mirror_3"//显示视图2
	})
	s3.add('4000',function(){
		g('c_zongzirou').className = 'c_zongzirou c_zongzirou_in c_zongzirou_view_4';//显示粽子肉
		g('c_t_1').className = "c_t_1 ct_in c_t_view_4"//显示视图2
		g('c_t_2').className = "c_t_2 ct_in c_t_mirror_4"//显示视图2
	})
	s3.add('5000',function(){
		g('c_zongzirou').className = 'c_zongzirou c_zongzirou_in c_zongzirou_view_0';//显示粽子肉
		g('c_t_1').className = "c_t_1 ct_in c_t_view_0"//显示视图2
		g('c_t_2').className = "c_t_2 ct_in c_t_mirror_0"//显示视图2
	})


	// s3.add('3000',function(){
	// 	g('c_zongzirou').className = 'c_zongzirou c_zongzirou_in c_zongzirou_view_4';//显示粽子肉
	// })
	// s3.add('3200',function(){
	// 	g('c_zongzirou').className = 'c_zongzirou c_zongzirou_in c_zongzirou_view_3';//显示粽子肉
	// })
	// s3.add('3400',function(){
	// 	g('c_zongzirou').className = 'c_zongzirou c_zongzirou_in c_zongzirou_view_2';//显示粽子肉
	// })
	// s3.add('3600',function(){
	// 	g('c_zongzirou').className = 'c_zongzirou c_zongzirou_in c_zongzirou_view_1';//显示粽子肉
	// })
	// s3.add('5000',function(){
	// 	s3.start();
	// })
	// s2.start(1000);
//图片加载器
var imgs = ['img/zzr_2.png','img/zzr_3.png','img/zzr_4.png'];
 var imgs_onload = function(){
 	imgs.pop();
 	if(imgs.length == 0){
 		s2.start();
 	}
 }
 for(s in imgs){
 	var img=new Image;//在脚本中创建图片的放啊
 	img.onload=imgs_onload;
 	img.src = imgs[s];
 }