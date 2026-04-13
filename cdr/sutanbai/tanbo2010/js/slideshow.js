<!--
	var timerID = 0;
	// 自動再生
	var autoPlay = true;
	// 繰り返し再生
	var repeatPlay = false;
	// 繰り返し回数
	var repeatMax = -1;
	// 繰り返し回数カウント
	var repeatCount = 0;
	// 画像切り替え時間
	var interval = 800;
	// 画像フォルダ
	var imageDir = "photo/";
	// 画像ファイル
	var imgName = new Array("20100104.JPG","20100106.JPG","20100108.JPG","20100116.JPG","20100119.JPG","20100222.JPG","20100317.JPG","20100409.JPG","20100410.JPG","20100413.JPG","20100414.JPG","20100428.JPG","20100506.JPG","20100512.JPG","20100518.JPG","20100521.JPG","20100526.JPG","20100529.JPG","20100531.JPG","20100607.JPG","20100608.JPG","20100609.JPG","20100611.JPG","20100616.JPG","20100621.JPG","20100623.JPG","20100624.JPG","20100628.JPG","20100630.JPG","20100701.JPG","20100702.JPG","20100705.JPG","20100706.JPG","20100708.JPG","20100710.JPG","20100715.JPG","20100720.JPG","20100721.JPG","20100722.JPG","20100723.JPG","20100726.JPG","20100730.JPG","20100731.JPG","20100802.JPG","20100803.JPG","20100804.JPG","20100806.JPG","20100819.JPG","20100820.JPG","20100823.JPG","20100824.JPG","20100825.JPG","20100827.JPG","20100830.JPG","20100901.JPG","20100902.JPG","20100903.JPG","20100906.JPG","20100909.JPG","20100910.JPG","20100913.JPG","20100914.JPG","20100915.JPG","20100916.JPG","20100921.JPG","20100922.JPG","20100928.JPG","20100929.JPG","20101001.JPG","20101013.JPG","20101015.JPG");
	// コメント
	var comment = new Array("<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>","<br>");
	photo = new Array();
	var num = -1;
	for(i = 0; i < imgName.length; i++)
	{
		photo[i] = imageDir + imgName[i]
	}
	// 次へ
	function NextImgFrame()
	{
		if(num < photo.length - 1)
		{
			num++;
			DisplayItem();
		}else{
			if ( repeatPlay )
			{
				if(repeatMax == -1)
				{
					num = 0;
				}else if(repeatCount < repeatMax)
				{
					repeatCount++;
					num = 0;
				}
			}
			DisplayItem();
		}
	}
	// 前へ
	function PrevImgFrame()
	{
		if(num > 0)
		{
			num--;
			DisplayItem();
		}else{
			num = photo.length - 1;
			DisplayItem();
		}
	}
	function DisplayItem()
	{
		DisplayFileName();
		DisplayImg();
		DisplayComment();
	}
	// ファイル名表示
	function DisplayFileName()
	{
		if( num != -1)
		{
			document.getElementById("FILENAME").innerHTML = imgName[num];
		}
	}
	// 画像表示
	function DisplayImg()
	{
		if( num != -1)
		{
			document.getElementById("SLIDESHOW").src = photo[num];
		}
	}
	// コメント表示
	function DisplayComment()
	{
		if( num != -1)
		{
			document.getElementById("COMMENT").innerHTML = comment[num];
		}
	}
	// スライドショー開始
	function StartSlideShow()
	{
		clearInterval(timerID);
		NextImgFrame();
		timerID = setInterval("NextImgFrame();", interval);
	}
	// スライドショー停止
	function StopSlideShow()
	{
		clearInterval(timerID);
		DisplayItem();
	}
	
	// 自動再生
	function AutoPlay()
	{
		if ( autoPlay )
		{
			StartSlideShow();
		}else{
			DisplayItem();
		}
	}
//-->
