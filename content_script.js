// content script例
console.log("## MY EXTENSION IS ACTIVE ##");
$(document).click(function(e){
    e.preventDefault;
    var id = e.target.id;
    //1.日付(YYYY-MM-DD)のdom要素id
    var date_elem_class_str = "div.lYGICBIAS4cJG5gzkQZy";
    //2.タイトル位置のdom要素id
    var title_elem_class_str = "div.q2c0Pz_NVE8LxIICCwnB";
    //3.時間帯のdom要素id
    var time_elem_class_str = "div.vnvfDJzs7TEd2MGb7YZa";
    
    if (typeof id !== "undefined") {
		if(id.startsWith("SearchResultItem_")){
			var dayOfWeekStrJP = [ "日", "月", "火", "水", "木", "金", "土" ] ;
			dt_text = $("#"+id).find(date_elem_class_str).text().split("-");
			var date = new Date( +dt_text[0], +dt_text[1]-1, +dt_text[2]);
			console.log($("#"+id).find(title_elem_class_str).text() + " " +  $("#"+id).find(date_elem_class_str).text() + "(" + dayOfWeekStrJP[date.getDay()] + ")" + " " + $("#"+id).find(time_elem_class_str).first().text());			
		}
    } 
});
