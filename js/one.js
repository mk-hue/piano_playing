//电脑键盘和鼠标点击触发的js

var arc=[1000,1000,1000,1000,1000];//五线谱中同时按下键最多放五个数字简谱，该数组记录按下键的keyCode
var n=document.getElementsByClassName("child");
var isRunning=[];//数组记录相应键有无被按下，防止长按一直触发音频
//按下电脑键盘事件
	$(document).keydown(function(e){
		if(isRunning[e.keyCode]==false||isRunning[e.keyCode]==undefined)
		//判断按键有无被按下，若按下就不重复执行该方法
		{
			for(var i=0;i<n.length;i++)
			{		
				if(n[i].getAttribute("value")==e.keyCode)//找到对应键
				{
                    for(var j=0;j<arc.length;j++){//将数组最前面没有赋值的赋上keyCode
                    	if(arc[j]==1000){
                    		arc[j]=e.keyCode;
                    		break;
                    	}
                    }
					
					isRunning[e.keyCode]=true;						
					$(n[i]).css({"background":"#2f9ff1","box-shadow":"inset 0px 17px 10px -15px #969696,inset -12px 0px 12px -15px #969696,inset 12px 0px 12px -15px #969696,inset 0px -18px 12px -15px #EBEBEB,0.5px 1.5px 2px 0px #7F7F7F,-0.5px 1.5px 2px 0px #7F7F7F","border":"1px solid #929292"});
					playMusic(e.keyCode);	//通过keyCode触发音频文件
					pianoLight(e.keyCode);	//键盘触发钢琴高亮、五线谱显示音符和数字简谱
					break;									
				}
			}		
		}

		});
		
//电脑键盘放开事件
document.onkeyup=function(e){	
	for(var i=0;i<n.length;i++)
	{		
		if(n[i].getAttribute("value")==e.keyCode)
		{									
			$(n[i]).css({"background":/*"#ECECEC"*/ "none","box-shadow":"0.5px 1.5px 2px 0px #949494,-0.5px 1.5px 2px 0px #949494","border-top":"1px solid #DADADA"});	
			isRunning[e.keyCode]=false;
            pianoLow(e.keyCode);//恢复钢琴颜色、五线谱隐藏音符和数字简谱
		}
	}		
};

//鼠标点击键盘事件
$(document).ready(function(){
	$(".child").mousedown(function(){				
		var kc=parseInt($(this).attr("value"));//将value属性转化为数字		
		playMusic(kc);
		$(this).css({"background-color": "#2f9ff1",    
   "box-shadow":"inset 0px 17px 10px -15px #969696,inset -12px 0px 12px -15px #969696,inset 12px 0px 12px -15px #969696,inset 0px -18px 12px -15px #EBEBEB,0.5px 1.5px 2px 0px #7F7F7F,-0.5px 1.5px 2px 0px #7F7F7F", 
    "border":"1px solid #929292"});
		
		 for(var j=0;j<arc.length;j++){//将数组最前面没有赋值的赋上keyCode
            if(arc[j]==1000){
               arc[j]=kc;
               break;
            }
         }
		pianoLight(kc);	
	});
});
//鼠标放开键盘事件
$(document).ready(function(){
	$(".child").mouseup(function(){				
		var kc=parseInt($(this).attr("value"));//将value属性转化为数字
		$(this).css({"background":/*"#ECECEC"*/ "none","box-shadow":"0.5px 1.5px 2px 0px #949494,-0.5px 1.5px 2px 0px #949494","border-top":"1px solid #DADADA"});			
		pianoLow(kc);
	});
});
//在五线谱适合的位置上显示简谱数字，a1为keyCode，link为url
function draw(a1,link){
	if(a1==arc[0]){  //最先按下的键显示在五线谱中间的div中
		var obj=document.getElementById("png1");
        obj.style.backgroundImage=link;
        obj.style.backgroundSize='35px 35px';
	}
	else if(a1==arc[1]){
		var obj=document.getElementById("png2");
        obj.style.backgroundImage=link;
        obj.style.backgroundSize='35px 35px';
	}
	else if(a1==arc[2]){
		var obj=document.getElementById("png3");
        obj.style.backgroundImage=link;
		obj.style.backgroundSize='35px 35px';
	}
	 else if(a1==arc[3]){
		var obj=document.getElementById("png4");
        obj.style.backgroundImage=link;
        obj.style.backgroundSize='35px 35px';
	}
	else if(a1==arc[4]){
		var obj=document.getElementById("png5");
        obj.style.backgroundImage=link;
        obj.style.backgroundSize='35px 35px';
	}
}
//清空五线谱适合的位置上的简谱数字，a1为keyCode
function cancelDraw(a1){
	var b;
	if(a1==arc[0]){
		var obj=document.getElementById("png1");
        obj.style.backgroundImage="";
        arc[0]=1000;
	}
	else if(a1==arc[1]){
		var obj=document.getElementById("png2");
        obj.style.backgroundImage="";
        arc[1]=1000;
	}
	else if(a1==arc[2]){
		var obj=document.getElementById("png3");
        obj.style.backgroundImage="";
        arc[2]=1000;
	}
	 else if(a1==arc[3]){
		var obj=document.getElementById("png4");
        obj.style.backgroundImage="";
        arc[3]=1000;
	}
	else if(a1==arc[4]){
		var obj=document.getElementById("png5");
        obj.style.backgroundImage="";
        arc[4]=1000;
	 }
	 //若目前没有一个键被按下，清空5个div的数字简谱做背景图
	else if((arc[4]=1000)&&(acr[3]=1000)&&(arc[2]=1000)&&(arc[1]=1000)&&(arc[0]=1000)){
		var obj1=document.getElementById("png1");
		var obj2=document.getElementById("png2");
		var obj3=document.getElementById("png3");
		var obj4=document.getElementById("png4");
		var obj5=document.getElementById("png5");
		obj1.style.backgroundImage="";
		obj2.style.backgroundImage="";
		obj3.style.backgroundImage="";
		obj4.style.backgroundImage="";
		obj5.style.backgroundImage="";
		ctx1.clearRect(0,0,288,201);
	}
}

//键盘触发钢琴高亮、五线谱显示音符和数字简谱
function pianoLight(a)
	{
		var temp=a;
		switch(a)
		{
			//第一排键盘
			case 49:
			   changeWColor1(18*30,0,18,60);              //按下键盘时触发钢琴的右缺口白键高亮
		       ParamEllipse(ctx1, 178+15, 62.5, 10, 4.4); //在五线谱上显示音符
		       draw(a,"url(images/.1.png)");              //在五线谱上显示数字简谱
			   break;
			case 50:
			
			   changeWColor3(18*31,0,18,60);       //左右缺口
		       ParamEllipse(ctx1, 178-15, 57, 10, 4.4);
		       draw(a,"url(images/.2.png)");
			   break;
			case 51:
			   changeWColor2(18*32,0,18,60);       //左缺口
		       ParamEllipse(ctx1, 178+15, 52, 10, 4.4);
		       draw(a,"url(images/.3.png)");
			   break;
			case 52:
			case 144:
			   changeWColor1(18*33,0,18,60);
		       ParamEllipse(ctx1, 178-15, 46, 10, 4.4);
		       draw(a,"url(images/.4.png)");
			   break;			   
			case 53:
			case 111:
			   changeWColor3(18*34,0,18,60);
		       ParamEllipse(ctx1, 178+15, 40, 10, 4.4);
		       draw(a,"url(images/.5.png)");
			   break;
			case 54:
			case 106:
			case 220:
			   changeWColor3(18*35,0,18,60);
		       ParamEllipse(ctx1, 178-15, 35, 10, 4.4);
		       draw(a,"url(images/.6.png)");
			   break;
			case 55:
			case 109:
			   changeWColor2(18*36,0,18,60);
		       ParamEllipse(ctx1, 178+15, 30, 10, 4.4);
		       draw(a,"url(images/.7.png)");
			   break;
			case 56:
			case 46:
			   changeWColor1(18*37,0,18,60);
		       ParamEllipse(ctx1, 178-15, 23, 10, 4.4);
		       draw(a,"url(images/..1.png)");
			   break;	
			case 57:
			case 35:
			   changeWColor3(18*38,0,18,60);
               draw(a,"url(images/..2.png)");
			   break;
			case 48:
			case 34:
			   changeWColor2(18*39,0,18,60);
               draw(a,"url(images/..3.png)");
			   break;
			case 189:
			case 45:
			   changeWColor1(18*40,0,18,60);
               draw(a,"url(images/..4.png)");
			   break;
			case 187:
			case 36:
			   changeWColor3(18*41,0,18,60);
               draw(a,"url(images/..5.png)");
			   break;	
			case 33:
			   changeWColor3(18*42,0,18,60);
               draw(a,"url(images/..6.png)");
			   break;

			//第二排键盘
			case 81:
			case 97:
			   changeWColor1(18*23,0,18,60);
		       ParamEllipse(ctx1, 178-15, 100, 10, 4.4);
		       draw(a,"url(images/1.png)");
			   break;
			case 87:
			case 98:
			   changeWColor3(18*24,0,18,60);
		       ParamEllipse(ctx1, 178+15, 95, 10, 4.4);
		       draw(a,"url(images/2.png)");
			   break;
			case 69:
			case 99:
			   changeWColor2(18*25,0,18,60);
		       ParamEllipse(ctx1, 178-15, 89, 10, 4.4);
		       draw(a,"url(images/3.png)");
			   break;
			case 82:
			case 100:
			   changeWColor1(18*26,0,18,60);
		       ParamEllipse(ctx1, 178+15, 84, 10, 4.4);
		       draw(a,"url(images/4.png)");
			   break;			   
			case 84:
			case 101:
			   changeWColor3(18*27,0,18,60);
		       ParamEllipse(ctx1, 178-15, 78, 10, 4.4);
		       draw(a,"url(images/5.png)");
			   break;
			case 89:
			case 102:
			   changeWColor3(18*28,0,18,60);
		       ParamEllipse(ctx1, 178+15, 73, 10, 4.4);
		       draw(a,"url(images/6.png)");
			   break;
			case 85:
			case 103:
			   changeWColor2(18*29,0,18,60);
		       ParamEllipse(ctx1, 178-15, 67, 10, 4.4);
		       draw(a,"url(images/.7.png)");
			   break;
			case 73:
			case 104:
			   changeWColor1(18*30,0,18,60);
		       ParamEllipse(ctx1, 178+15, 63, 10, 4.4);
		       draw(a,"url(images/.1.png)");
			   break;	
			case 79:
			case 105:
			   changeWColor3(18*31,0,18,60);
		       ParamEllipse(ctx1, 178-15, 57, 10, 4.4);
		       draw(a,"url(images/.2.png)");
			   break;
			case 80:
			case 107:
			   changeWColor2(18*32,0,18,60);
		       ParamEllipse(ctx1, 178+15, 51, 10, 4.4);
		       draw(a,"url(images/.3.png)");
			   break;
			case 219:
			   changeWColor1(18*33,0,18,60);
		       ParamEllipse(ctx1, 178-15, 46, 10, 4.4);
		       draw(a,"url(images/.4.png)");
			   break;
			case 221:
			   changeWColor3(18*34,0,18,60);
		       ParamEllipse(ctx1, 178+15, 41, 10, 4.4);
		       draw(a,"url(images/.5.png)");

			   break;
			/*case 220:
			   changeWColor3(18*35,0,18,60);
		       ParamEllipse(ctx1, 178-15, 35, 10, 4.4);
		       draw(a,"url(images/.6.png)");
			   break;*/
			//第三排键盘
			case 65:
			case 37:
			   changeWColor1(18*16,0,18,60);
		       ParamEllipse(ctx1, 178+15, 139, 10, 4.4);
		       draw(a,"url(images/1..png)");		   
			   break;
			case 83:
			case 40:
			   changeWColor3(18*17,0,18,60);
		       ParamEllipse(ctx1, 178-15, 133, 10, 4.4);
		       draw(a,"url(images/2..png)");		   
			   break;
			case 68:
			case 39:
			   changeWColor2(18*18,0,18,60);
     	       ParamEllipse(ctx1, 178+15, 128, 10, 4.4);
               draw(a,"url(images/3..png)");	
			   break;
			case 70:
			case 38:
			   changeWColor1(18*19,0,18,60);
		       ParamEllipse(ctx1, 178-15, 122, 10, 4.4);
               draw(a,"url(images/4..png)");	
			   break;			   
			case 71:
			case 96:
			   changeWColor3(18*20,0,18,60);
		       ParamEllipse(ctx1, 178+15, 117, 10, 4.4);
               draw(a,"url(images/5..png)");
			   break;
			case 72:
			case 110:
			   changeWColor3(18*21,0,18,60);
		       ParamEllipse(ctx1, 178-15, 111, 10, 4.4);
               draw(a,"url(images/6..png)");
			   break;
			case 74:
			case 13:
			   changeWColor2(18*22,0,18,60);
		       ParamEllipse(ctx1, 178+15, 106, 10, 4.4);
               draw(a,"url(images/7..png)");
			   break;
			case 75:
			   changeWColor1(18*23,0,18,60);
		       ParamEllipse(ctx1, 178-15, 100, 10, 4.4);
               draw(a,"url(images/1.png)");
			   break;	
			case 76:
			   changeWColor3(18*24,0,18,60);
		       ParamEllipse(ctx1, 178+15, 95, 10, 4.4);
               draw(a,"url(images/2.png)");
			   break;
			case 186:
			   changeWColor2(18*25,0,18,60);
		       ParamEllipse(ctx1, 178-15, 89, 10, 4.4);
               draw(a,"url(images/3.png)");
			   break;
			case 222:
			   changeWColor1(18*26,0,18,60);
		       ParamEllipse(ctx1, 178+15, 84, 10, 4.4);
               draw(a,"url(images/4.png)");
			   break;
			//第四排键盘
			case 90:
			   changeWColor1(18*9,0,18,60);
		       ParamEllipse(ctx1, 178-15, 177, 10, 4.4);
               draw(a,"url(images/1...png)");
			   break;
			case 88:
			   changeWColor3(18*10,0,18,60);
		       ParamEllipse(ctx1, 178+15, 172, 10, 4.4);
               draw(a,"url(images/2...png)");
			   break;
			case 67:
			   changeWColor2(18*11,0,18,60);
		       ParamEllipse(ctx1, 178-15, 166, 10, 4.4);
               draw(a,"url(images/3...png)");
			   break;
			case 86:
			   changeWColor1(18*12,0,18,60);
			   ParamEllipse(ctx1, 178+15, 161, 10, 4.4);
               draw(a,"url(images/4...png)");
			   break;			   
			case 66:
			   changeWColor3(18*13,0,18,60);
		       ParamEllipse(ctx1, 178-15, 155, 10, 4.4);
               draw(a,"url(images/5...png)");
			   break;
			case 78:
			   changeWColor3(18*14,0,18,60);
		       ParamEllipse(ctx1, 178+15, 150, 10, 4.4);
               draw(a,"url(images/6...png)");
			   break;
			case 77:
			   changeWColor2(18*15,0,18,60);
		       ParamEllipse(ctx1, 178-15, 145, 10, 4.4);
               draw(a,"url(images/7...png)");
			   break;
			case 188:
			   changeWColor1(18*16,0,18,60);
		       ParamEllipse(ctx1, 178+15, 139, 10, 4.4);
               draw(a,"url(images/1..png)");
			   break;	
			case 190:
			   changeWColor3(18*17,0,18,60);
		       ParamEllipse(ctx1, 178-15, 133, 10, 4.4);
               draw(a,"url(images/2..png)");
			   break;
			case 191:
			   changeWColor2(18*18,0,18,60);
     	       ParamEllipse(ctx1, 178+15, 128, 10, 4.4);
               draw(a,"url(images/3..png)");
			   break;			
		    defalt:break;
		}
	}
//恢复钢琴颜色、五线谱隐藏音符和数字简谱
function pianoLow(a)
	{
		var temp=a;
		switch(a)
		{
			//第一排键盘
			case 49:
			   changeSWColor1(18*30,0,18,60);  //按下键盘时触发钢琴的右缺口恢复颜色
			   clear( 178+15, 62.5, 10, 4.4);  //隐藏五线谱上的音符
			   cancelDraw(a);                    //隐藏五线谱上的数字简谱
			   break;		    
            case 50:
			   changeSWColor3(18*31,0,18,60);  //左右缺口
			   clear( 178-15, 57, 10, 4.4);
			   cancelDraw(a);
			   break;
			case 51:
			   changeSWColor2(18*32,0,18,60);  //左缺口
			   clear( 178+15, 52, 10, 4.4);
			   cancelDraw(a);
			   break;
			case 52:
			case 144:
			   changeSWColor1(18*33,0,18,60);
			   clear(178-15, 46, 10, 4.4);
			   cancelDraw(a);
			   break;			   
			case 53:
			case 111:
			   changeSWColor3(18*34,0,18,60);
			   clear(178+15, 40, 10, 4.4);
			   cancelDraw(a);
			   break;
			case 54:
			case 106:
			   changeSWColor3(18*35,0,18,60);
			   clear(178-15, 35, 10, 4.4);
			   cancelDraw(a);
			   break;
			case 55:
			case 109:
			   changeSWColor2(18*36,0,18,60);
			   clear(178+15, 30, 10, 4.4);
			   cancelDraw(a);
			   break;
			case 56:
			case 46:
			   changeSWColor1(18*37,0,18,60);
			   clear(178-15, 23, 10, 4.4);
			   cancelDraw(a);
			   break;	
			case 57:
			case 35:
			   changeSWColor3(18*38,0,18,60);
			   cancelDraw(a);
			   break;
			case 48:
			case 34:
			   changeSWColor2(18*39,0,18,60);
			   cancelDraw(a);
			   break;
			case 189:
			case 45:
			   changeSWColor1(18*40,0,18,60);
			   cancelDraw(a);
			   break;
			case 187:
			case 36:
			   changeSWColor3(18*41,0,18,60);
			   cancelDraw(a);
			   break;
			case 33:
			   changeSWColor3(18*42,0,18,60);
			   cancelDraw(a);
			   break;
			//第二排键盘
			case 81:
			case 97:
			   changeSWColor1(18*23,0,18,60);
			   clear(178-15, 100, 10, 4.4);
			   cancelDraw(a);
			   break;
			case 87:
			case 98:
			   changeSWColor3(18*24,0,18,60);
			   clear(178+15, 95, 10, 4.4);
			   cancelDraw(a);
			   break;
			case 69:
			case 99:
			   changeSWColor2(18*25,0,18,60);
			   clear(178-15, 89, 10, 4.4);
			   cancelDraw(a);
			   break;
			case 82:
			case 100:
			   changeSWColor1(18*26,0,18,60);
			   clear(178+15, 84, 10, 4.4);
			   cancelDraw(a);
			   break;			   
			case 84:
			case 101:
			   changeSWColor3(18*27,0,18,60);
			   clear(178-15, 78, 10, 4.4);
			   cancelDraw(a);
			   break;
			case 89:
			case 102:
			   changeSWColor3(18*28,0,18,60);
			   clear(178+15, 73, 10, 4.4);
			   cancelDraw(a);
			   break;
			case 85:
			case 103:
			   changeSWColor2(18*29,0,18,60);
			   clear(178-15, 67, 10, 4.4);
			   cancelDraw(a);
			   break;
			case 73:
			case 104:
			   changeSWColor1(18*30,0,18,60);
			   clear(178+15, 63, 10, 4.4);
			   cancelDraw(a);
			   break;	
			case 79:
			case 105:
			   changeSWColor3(18*31,0,18,60);
			   clear(178-15, 57, 10, 4.4);
			   cancelDraw(a);
			   break;
			case 80:
			case 107:
			   changeSWColor2(18*32,0,18,60);
			   clear(178+15, 51, 10, 4.4);
			   cancelDraw(a);
			   break;
			case 219:
			   changeSWColor1(18*33,0,18,60);
			   clear(178-15, 46, 10, 4.4);
			   cancelDraw(a);
			   break;
			case 221:
			   changeSWColor3(18*34,0,18,60);
			   clear(178+15, 41, 10, 4.4);
			   cancelDraw(a);
			   break;
			case 220:
			   changeSWColor3(18*35,0,18,60);
			   clear(178-15, 35, 10, 4.4);
			   cancelDraw(a);
			   break;
			//第三排键盘
			case 65:
			case 37:
			   changeSWColor1(18*16,0,18,60);
			   clear(178+15, 139, 10, 4.4);
			   cancelDraw(a);
			   break;
			case 83:
			case 40:
			   changeSWColor3(18*17,0,18,60);
			   clear(178-15, 133, 10, 4.4);
			   cancelDraw(a);
			   break;
			case 68:
			case 39:
			   changeSWColor2(18*18,0,18,60);
			   clear(178+15, 128, 10, 4.4);
			   cancelDraw(a);
			   break;
			case 70:
			case 38:
			   changeSWColor1(18*19,0,18,60);
			   clear(178-15, 122, 10, 4.4);
			   cancelDraw(a);
			   break;			   
			case 71:
			case 96:
			   changeSWColor3(18*20,0,18,60);
			   clear(178+15, 117, 10, 4.4);
			   cancelDraw(a);
			   break;
			case 72:
			case 110:
			   changeSWColor3(18*21,0,18,60);
			   clear(178-15, 111, 10, 4.4);
			   cancelDraw(a);
			   break;
			case 74:
			case 13:
			   changeSWColor2(18*22,0,18,60);
			   clear(178+15, 106, 10, 4.4);
			   cancelDraw(a);
			   break;
			case 75:
			   changeSWColor1(18*23,0,18,60);
			   clear(178-15, 100, 10, 4.4);
			   cancelDraw(a);
			   break;	
			case 76:
			   changeSWColor3(18*24,0,18,60);
			   clear(178+15, 95, 10, 4.4);
			   cancelDraw(a);
			   break;
			case 186:
			   changeSWColor2(18*25,0,18,60);
			   clear(178-15, 89, 10, 4.4);
			   cancelDraw(a);
			   break;
			case 222:
			   changeSWColor1(18*26,0,18,60);
			   clear(178+15, 84, 10, 4.4);
			   cancelDraw(a);
			   break;
			//第四排键盘
			case 90:
			   changeSWColor1(18*9,0,18,60);
			   clear(178-15, 177, 10, 4.4);
			   cancelDraw(a);
			   break;
			case 88:
			   changeSWColor3(18*10,0,18,60);
			   clear(178+15, 172, 10, 4.4);
			   cancelDraw(a);
			   break;
			case 67:
			   changeSWColor2(18*11,0,18,60);
			   clear(178-15, 166, 10, 4.4);
			   cancelDraw(a);
			   break;
			case 86:
			   changeSWColor1(18*12,0,18,60);
			   clear(178+15, 161, 10, 4.4);
			   cancelDraw(a);
			   break;			   
			case 66:
			   changeSWColor3(18*13,0,18,60);
			   clear(178-15, 155, 10, 4.4);
			   cancelDraw(a);
			   break;
			case 78:
			   changeSWColor3(18*14,0,18,60);
			   clear(178+15, 150, 10, 4.4);
			   cancelDraw(a);
			   break;
			case 77:
			   changeSWColor2(18*15,0,18,60);
			   clear(178-15, 145, 10, 4.4);
			   cancelDraw(a);
			   break;
			case 188:
			   changeSWColor1(18*16,0,18,60);
			   clear(178+15, 139, 10, 4.4);
			   cancelDraw(a);
			   break;	
			case 190:
			   changeSWColor3(18*17,0,18,60);
			   clear(178-15, 133, 10, 4.4);
			   cancelDraw(a);
			   break;
			case 191:
			   changeSWColor2(18*18,0,18,60);
			   clear(178+15, 128, 10, 4.4);88888
			   cancelDraw(a);
			   break;
		    defalt:break;
		}
	}
//通过keyCode触发琴声，若为小键盘或控制键区域，则需将keyCode转换
function playMusic(a)
{
		var temp=a;
		switch(a)
		{
			//键盘第一行的转换
			case 45:
				temp=189;
				break;
			case 36:
				temp=187;
				break;
			case 144:
				temp=52;
				break;
			case 111:
				temp=53;
				break;
			case 106:
				temp=54;
				break;
			case 109:
				temp=55;
				break;
			//键盘第二行的转换
			case 73:
			case 104:						
				temp=49;
				break;
			case 79:
			case 105:
				temp=50;
				break;
			case 80:
			case 107:
				temp=51;
				break;
			case 219:
				temp=52;
				break;
			case 221:
				temp=53;
				break;
			case 220:
				temp=54;
				break;
			case 46:
				temp=56;
				break;
			case 35:
				temp=57;
				break;
			case 34:
				temp=48;
				break;
			case 103:
				temp=85;
				break;
			//键盘第三(四)行的转换
			case 75:
			case 97:
				temp=81;
				break;
			case 76:
			case 98:
				temp=87;
				break;
			case 186:
			case 99:
				temp=69;
				break;
			case 222:
			case 100:
				temp=82;
				break;
			case 101:
				temp=84;
				break;
			case 102:
				temp=89;
				break;
			//键盘第四(五)行的转换
			case 188:
			case 37:
				temp=65;
				break;
			case 190:
			case 40:
				temp=83;
				break;
			case 191:
			case 39:
				temp=68;
				break;			
			case 38:
				temp=70;
				break;
			case 13:
				temp=74;
				break;
			//键盘第五行的转换
			case 96:
				temp=71;
				break;
			case 110:
				temp=72;
				break;

			defalt:break;
		}		
		var src = "./music/"+temp+'.mp3';
		var audio = new Audio(src);	//创建媒体对象
		audio.play();               //调用play方法
	}