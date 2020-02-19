        //五线谱js
        var cvs1=document.getElementById("part2");
        var ctx1=cvs1.getContext("2d");

          //-----------用参数方程绘制椭圆-----------------        
        function ParamEllipse(context, x, y, a, b){
          //max是等于1除以长轴值a和b中的较大者
          //i每次循环增加1/max，表示度数的增加
          //这样可以使得每次循环所绘制的路径（弧线）接近1像素
          var step = (a > b) ? 1 / a : 1 / b;
          context.beginPath();
          context.fillStyle="#99CC32";
          context.strokeStyle="#99CC32";
          context.moveTo(x + a, y); //从椭圆的左端点开始绘制
          for (var i = 0; i < 2 * Math.PI; i += step)
          {
              //参数方程为x = a * cos(i), y = b * sin(i)，
              //参数为i，表示度数（弧度）
              context.lineTo(x + a * Math.cos(i), y + b * Math.sin(i));
          }
          context.closePath();
          context.stroke();
          context.fill();
        }

        function Jian(link){
          var obj=document.getElementById("png1");
          obj.style.backgroundImage=link;
        }

        function clear(x,y,a,b)
        {
          ctx1.clearRect(x-a-0.6,y-b-0.8,2*a+1.2,2*b+1.6);
        }

        function cancelBackground(){
          var obj=document.getElementById("png1");
          obj.style.backgroundImage="";

        }

       //琴键js
		var cvs=document.getElementById("all");
		var ctx=cvs.getContext("2d");

		ctx.lineWidth=1;
		ctx.shadowOffsetX=0;
        ctx.shadowOffsetY=6;
        ctx.shadowBlur=0;

        ctx.beginPath();
	 	for(var i=0;i<52;i++)//绘制白键
		{ 
           ctx.shadowColor="#CCCCCC";
		   ctx.fillStyle="white";
		   ctx.fillRect(i*18,0,18,60);
		   ctx.strokeStyle="black";
		   ctx.strokeRect(i*18,0,18,60);
		 }
		ctx.closePath();

        ctx.beginPath();
	    for(var i=0;i<7;i++)//绘制黑键
		{	
	       ctx.shadowColor="black";
		   ctx.fillStyle="black";
           ctx.fillRect(48+7*18*i,0,12,40);
           ctx.fillRect(66+7*18*i,0,12,40);
           ctx.fillRect(102+7*18*i,0,12,40);
           ctx.fillRect(120+7*18*i,0,12,40);
           ctx.fillRect(138+7*18*i,0,12,40);
           ctx.strokeStyle="black";
		   ctx.strokeRect(48+7*18*i,0,12,40);
		   ctx.strokeRect(66+7*18*i,0,12,40);
	       ctx.strokeRect(102+7*18*i,0,12,40);
	       ctx.strokeRect(120+7*18*i,0,12,40);
           ctx.strokeRect(138+7*18*i,0,12,40);
		 }
	    ctx.closePath();

        ctx.beginPath();//补充最开头的黑键
        ctx.fillStyle="black";
        ctx.fillRect(12,0,12,40);
        ctx.strokeStyle="black";
        ctx.strokeRect(12,0,12,40);  
        ctx.closePath();
        
        ctx.beginPath();
        ctx.strokeStyle="#665757";
        ctx.moveTo(0,60);
        ctx.lineTo(937,60);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        for(var i=0;i<54;i++)
        {
        	ctx.lineWidth=0.5;
            ctx.strokeStyle="#665757";
		    ctx.moveTo(0+18*i,53);
            ctx.lineTo(0+18*i,60);
            ctx.stroke();
        }
        ctx.closePath();
     
  
        function changeBColor(x,y,width,height){//改变黑键颜色
       	    ctx.beginPath();
       	    ctx.shadowOffsetX=0;
            ctx.shadowOffsetY=0;
            ctx.shadowBlur=0;
            ctx.lineWidth=1;

            ctx.clearRect(x, y, width, height+6);
       	    ctx.fillStyle="#99CC32";
       	    ctx.fillRect(x,y,width,height+6);
       	    ctx.strokeStyle="black";
       	    ctx.strokeRect(x,y,width,height+6);         
       	    ctx.closePath();
       }

        function changeWColor1(x,y,width,height){//改变右缺口白键颜色
       	    ctx.beginPath();//白键区域
       	    ctx.shadowOffsetX=0;
            ctx.shadowOffsetY=0;
            ctx.shadowBlur=0;
            ctx.lineWidth=1;

       	    ctx.clearRect(x, y, width, height+6);
       	    ctx.fillStyle="#99CC32";
       	    ctx.fillRect(x,y,width,height+6);
       	    ctx.strokeStyle="black";
       	    ctx.strokeRect(x,y,width,height+6);
       	    ctx.closePath();

            ctx.beginPath();//黑键区域
       	    ctx.shadowOffsetX=0;
            ctx.shadowOffsetY=0;
            ctx.shadowBlur=0;
       	    ctx.clearRect(x+12, y, 6,40+7);                   
       	    ctx.fillStyle="black";
       	    ctx.fillRect(x+12,y,6,40+7);
       	    ctx.closePath();

       }

       function changeSWColor1(x,y,width,height){//恢复右缺口白键颜色
            ctx.beginPath();//白键区域
            ctx.shadowColor="#CCCCCC";
            ctx.shadowOffsetX=0;
            ctx.shadowOffsetY=6;
            ctx.shadowBlur=0;
            ctx.lineWidth=1;

            ctx.clearRect(x, y, width, height);
            ctx.fillStyle="white";
            ctx.fillRect(x,y,width,height);
            ctx.strokeStyle="black";
            ctx.strokeRect(x,y,width,height);
            ctx.closePath();

            ctx.beginPath();//黑键区域
            ctx.shadowOffsetX=0;
            ctx.shadowOffsetY=0;
            ctx.shadowBlur=0;
            ctx.clearRect(x+12, y, 6,40+7);                   
            ctx.fillStyle="black";
            ctx.fillRect(x+12,y,6,40+7);
            ctx.closePath();

            ctx.beginPath();
            ctx.lineWidth=2;
            ctx.strokeStyle="#665757";
            ctx.moveTo(x,60+6);
            ctx.lineTo(x+18,60+6);
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.lineWidth=1;
            ctx.strokeStyle="black";
            ctx.moveTo(x,60);
            ctx.lineTo(x,67);
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.lineWidth=1;
            ctx.strokeStyle="black";
            ctx.moveTo(x+18,60)
            ctx.lineTo(x+18,67);
            ctx.stroke();
            ctx.closePath();
       }

        function changeWColor2(x,y,width,height){//改变左缺口白键颜色
       	    ctx.beginPath();//白键区域
       	    ctx.shadowOffsetX=0;
            ctx.shadowOffsetY=0;
            ctx.shadowBlur=0;
            ctx.lineWidth=1;

       	    ctx.clearRect(x, y, width, height+6);
       	    ctx.fillStyle="#99CC32";
       	    ctx.fillRect(x,y,width,height+6);
       	    ctx.strokeStyle="black";
       	    ctx.strokeRect(x,y,width,height+6);
       	    ctx.closePath();

            ctx.beginPath();//黑键区域
       	    ctx.shadowOffsetX=0;
            ctx.shadowOffsetY=0;
            ctx.shadowBlur=0;
       	    ctx.clearRect(x, y, 6,40+7);                   
       	    ctx.fillStyle="black";
       	    ctx.fillRect(x,y,6,40+7);
       	    ctx.closePath();
       }

       function changeSWColor2(x,y,width,height){//恢复左缺口白键颜色
            ctx.beginPath();//白键区域
            ctx.shadowColor="#CCCCCC";
            ctx.shadowOffsetX=0;
            ctx.shadowOffsetY=6;
            ctx.shadowBlur=0;
            ctx.lineWidth=1;

            ctx.clearRect(x, y, width, height);
            ctx.fillStyle="white";
            ctx.fillRect(x,y,width,height);
            ctx.strokeStyle="black";
            ctx.strokeRect(x,y,width,height);
            ctx.closePath();

            ctx.beginPath();//黑键区域
            ctx.shadowOffsetX=0;
            ctx.shadowOffsetY=0;
            ctx.shadowBlur=0;
            ctx.clearRect(x, y, 6,40+7);                   
            ctx.fillStyle="black";
            ctx.fillRect(x,y,6,40+7);
            ctx.closePath();

            ctx.beginPath();
            ctx.lineWidth=1.5;
            ctx.strokeStyle="#665757";
            ctx.moveTo(x,60+6);
            ctx.lineTo(x+18,60+6);
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.lineWidth=1;
            ctx.strokeStyle="black";
            ctx.moveTo(x,60);
            ctx.lineTo(x,67);
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.lineWidth=1;
            ctx.strokeStyle="black";
            ctx.moveTo(x+18,60)
            ctx.lineTo(x+18,67);
            ctx.stroke();
            ctx.closePath();
       }


       function changeWColor3(x,y,width,height){//改变左右缺口白键颜色
       	    ctx.beginPath();//白键区域
       	    ctx.shadowOffsetX=0;
            ctx.shadowOffsetY=0;
            ctx.shadowBlur=0;
            ctx.lineWidth=1;

       	    ctx.clearRect(x, y, width, height+6);
       	    ctx.fillStyle="#99CC32";
       	    ctx.fillRect(x,y,width,height+6);
       	    ctx.strokeStyle="black";
       	    ctx.strokeRect(x,y,width,height+6);
       	    ctx.closePath();

            ctx.beginPath();//黑键区域
       	    ctx.shadowOffsetX=0;
            ctx.shadowOffsetY=0;
            ctx.shadowBlur=0;
       	    ctx.clearRect(x, y, 6,40+7);                   
       	    ctx.fillStyle="black";
       	    ctx.fillRect(x,y,6,40+7);
       	    ctx.clearRect(x+12, y, 6,40+7);                   
       	    ctx.fillStyle="black";
       	    ctx.fillRect(x+12,y,6,40+7);
       	    ctx.closePath();
       }

       function changeSWColor3(x,y,width,height){//恢复左右缺口白键颜色
            ctx.beginPath();//白键区域
            ctx.shadowColor="#CCCCCC";
            ctx.shadowOffsetX=0;
            ctx.shadowOffsetY=6;
            ctx.shadowBlur=0;
            ctx.lineWidth=1;

            ctx.clearRect(x, y, width, height);
            ctx.fillStyle="white";
            ctx.fillRect(x,y,width,height);
            ctx.strokeStyle="black";
            ctx.strokeRect(x,y,width,height);
            ctx.closePath();

            ctx.beginPath();//黑键区域
            ctx.shadowOffsetX=0;
            ctx.shadowOffsetY=0;
            ctx.shadowBlur=0;
            ctx.clearRect(x, y, 6,40+7);                   
            ctx.fillStyle="black";
            ctx.fillRect(x,y,6,40+7);
            ctx.clearRect(x+12, y, 6,40+7);                   
            ctx.fillStyle="black";
            ctx.fillRect(x+12,y,6,40+7);
            ctx.closePath();

            ctx.beginPath();
            ctx.lineWidth=1.5;
            //ctx.strokeStyle="red";
            ctx.strokeStyle="#665757";
            ctx.moveTo(x,60+6);
            ctx.lineTo(x+18,60+6);
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.lineWidth=1;
            ctx.strokeStyle="black";
            ctx.moveTo(x,60);
            ctx.lineTo(x,67);
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.lineWidth=1;
            ctx.strokeStyle="black";
            ctx.moveTo(x+18,60)
            ctx.lineTo(x+18,67);
            ctx.stroke();
            ctx.closePath();
       }

       function changeWColor4(x,y,width,height){//改变全白的白键颜色
            ctx.beginPath();//白键区域
            ctx.shadowOffsetX=0;
            ctx.shadowOffsetY=0;
            ctx.shadowBlur=0;
            ctx.lineWidth=1;

            ctx.clearRect(x, y, width, height);
            ctx.fillStyle="#99CC32";
            ctx.fillRect(x,y,width,height);
            ctx.strokeStyle="black";
            ctx.strokeRect(x,y,width,height);
            ctx.closePath();
       }

       function changeSWColor4(x,y,width,height){//恢复全白的白键颜色
            ctx.beginPath();//白键区域
            ctx.shadowColor="#CCCCCC";
            ctx.shadowOffsetX=0;
            ctx.shadowOffsetY=6;
            ctx.shadowBlur=0;
            ctx.lineWidth=1;

            ctx.clearRect(x, y, width, height);
            ctx.fillStyle="white";
            ctx.fillRect(x,y,width,height);
            ctx.strokeStyle="black";
            ctx.strokeRect(x,y,width,height);
            ctx.closePath();

            ctx.beginPath();
            ctx.lineWidth=1.5;
            ctx.strokeStyle="#665757";
            ctx.moveTo(x,60+6);
            ctx.lineTo(x+18,60+6);
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.lineWidth=1;
            ctx.strokeStyle="black";
            ctx.moveTo(x,60);
            ctx.lineTo(x,67);
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.lineWidth=1;
            ctx.strokeStyle="black";
            ctx.moveTo(x+18,60)
            ctx.lineTo(x+18,67);
            ctx.stroke();
            ctx.closePath();

       }