// content script例
console.log("## OUTLOOKWEB_SCHEDULE_UTILITY_EXTENSION IS LOADED. ##");
$(document).click(function(e){
    
    //1.日付(YYYY-MM-DD)のdom要素id
    var date_elem_class_str = "div.lYGICBIAS4cJG5gzkQZy";
    //2.タイトル(スケジュールタスク名)のdom要素id
    var title_elem_class_str = "div.q2c0Pz_NVE8LxIICCwnB";
    //3.時間帯(ex.16:00 - 18:00)のdom要素id
    var time_elem_class_str = "div.vnvfDJzs7TEd2MGb7YZa";
    
    //クリック対象の検索結果パネルを見つける
    var $dom1 = $(e.target).closest('div[id^="SearchResultItem_"]');
    
	if($(e.target).closest('div[id^="SearchResultItem_"]').length){
		//日にちから曜日を作成
		var dayOfWeekStrJP = [ "日", "月", "火", "水", "木", "金", "土" ] ;
		dt_text = $dom1.find(date_elem_class_str).text().split("-");
		var date = new Date( +dt_text[0], +dt_text[1]-1, +dt_text[2]);
		//console.logに出力
		console.log($dom1.find(title_elem_class_str).text() 
			+ " " +  $dom1.find(date_elem_class_str).text() + "(" + dayOfWeekStrJP[date.getDay()] + ")" 
			+ " " + $dom1.find(time_elem_class_str).first().text());			
	} else {
		console.log('対象が存在しません');
	}
});
