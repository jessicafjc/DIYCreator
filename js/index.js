

		Bmob.initialize("37cb635d256a5ff7494bb32edf741237", "b37ee761a08c5e11740d2c7cc83379c5");
		var Advertise = Bmob.Object.extend("advertise");
		var query = new Bmob.Query(Advertise);
		// 查询所有数据
		query.find({
			success: function(results) {
				//					alert("共查询到 " + results.length + " 条记录");
				//动态添加轮播图
				var testSlider = document.getElementById("testSlider");
				var strHtml = ""
				var object = results[results.length - 1];
				//第一个节点是最后一个广告
				strHtml += '<div class="mui-slider-item mui-slider-item-duplicate">';
				strHtml += '<a href="#">';
				strHtml += '<img src="' + AdImageUrl + '">';
				strHtml += '<p class="mui-slider-title">' + AdTitle + '</p>';
				strHtml += '</a>';
				strHtml += '</div>';
				for(var i = 0; i < results.length; i++) {
					var object = results[i];
//						alert(object.id + ' - ' + object.get('AdTitle') + object.get('AdImageUrl'));
					var AdTitle = object.get('AdTitle')
					var AdImageUrl = object.get('AdImageUrl')

					//循环
					strHtml += '<div class="mui-slider-item">';
					strHtml += '<a href="#">';
					strHtml += '<img src="' + AdImageUrl + '">';
					strHtml += '<p class="mui-slider-title">' + AdTitle + '</p>';

					strHtml += '</a>';
					strHtml += '</div>';
					//			alert(strHtml);
				}
				//最后一个节点是第一个广告
				object = results[0];
				strHtml += '<div class="mui-slider-item mui-slider-item-duplicate">';
				strHtml += '<a href="#">';
				strHtml += '<img src="' + AdImageUrl + '">';
				strHtml += '<p class="mui-slider-title">' + AdTitle + '</p>';
				strHtml += '</a>';
				strHtml += '</div>';
				testSlider.innerHTML = strHtml;
			},
			error: function(error) {
				alert("查询失败: " + error.code + " " + error.message);
			},
		});