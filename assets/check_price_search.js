$(function(){
	if(typeof(_DefShoesMin) == "undefined") _DefShoesMin = '';
	if(typeof(_DefShoesMax) == "undefined") _DefShoesMax = '';
	if(typeof(_DefMaxSlide) == "undefined") _DefMaxSlide = '';


	if(_DefMaxSlide =="") _DefMaxSlide ="30.0";


	if(typeof(_DefPriceMin) == "undefined") _DefPriceMin = '';
	if(typeof(_DefPriceMax) == "undefined") _DefPriceMax = '';
	if(typeof(_DefPriceMaxSlide) == "undefined") _DefPriceMaxSlide = '';

	if(_DefPriceMaxSlide =="") _DefPriceMaxSlide ="300000";

	var priceValue=[0,100,500,1000,1500,2000,2500,3000,3500,4000,5000,6000,7000,8000,9000,10000,15000,20000,25000,30000,35000,40000,45000,50000,60000,70000,80000,90000,100000,150000,200000,250000,300000];
	var minPriceStep = 0;
	var maxPriceStep = 0;
	var slideMaxPriceStep = 0;

	ReflectArray();

	$('#searchPrice').slider({
		range: true,
		min: 0,
		max: 32,
		step:1,
		values: [minPriceStep,slideMaxPriceStep],
		slide: function( event, ui ) {
			if( ui.handleIndex == "0"){
				localStorage.setItem('minPrice', priceValue[ui.values[0]]);
				$('#p_pris').val(priceValue[ui.values[0]].toString ().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
			}
			if( ui.handleIndex == "1"){
				localStorage.setItem('maxPrice', priceValue[ui.values[1]]);
				$('#p_prie').val(priceValue[ui.values[1]].toString ().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
			}
		}
	});

	$("#p_pris, #p_prie").blur(function(){
		_DefPriceMin = $('#p_pris').val();
		_DefPriceMax = $('#p_prie').val();

		if (_DefPriceMin.match(/[^0-9]+/)||_DefPriceMax.match(/[^0-9]+/)){
		}else{
			ReflectArray();
			$('#searchPrice').slider({values: [minPriceStep, maxPriceStep]});
		}
	});

	$( "#advanced_search_popup .btn_reset" ).click(function(){
		$("#searchPrice").slider({values:[0,32]});
		$("#p_pris").val(0);
		$("#p_prie").val(300000);
        $(".normal_input").val('');
		$("#p_pri_max_slider").val(300000);
        $("input[type=checkbox]").prop('checked',false)
		$(".price .sliderError").remove();
		localStorage.setItem('minPrice', 0);
		localStorage.setItem('maxPrice', 300000);
		$('select').val('指定無し').trigger('change');
	});

	function ReflectArray(){
		for(i= 0; 0<=priceValue.length-1; i++){
			if( _DefPriceMin <= priceValue[i] ){
				minPriceStep = i;
				break;
			}else if(_DefPriceMin > priceValue[32]){
				minPriceStep = 0;
				break;
			}
		}

		for(i= 0; 0<=priceValue.length-1; i++){
			if( _DefPriceMax == priceValue[32] ){
				maxPriceStep = 32;
				break;
			}else if( _DefPriceMax <= priceValue[i] ){
				maxPriceStep = i;
				break;
			}else if( _DefPriceMax > priceValue[32] ){
				maxPriceStep = 32;
				break;
			}
		}

		for(i= 0; 0<=priceValue.length-1; i++){
			if( _DefPriceMaxSlide == priceValue[32] ){
				slideMaxPriceStep = 32;
				break;
			}else if( _DefPriceMaxSlide <= priceValue[i] ){
				slideMaxPriceStep = i;
				break;
			}else if(_DefPriceMaxSlide > priceValue[32]){
				slideMaxPriceStep = 32;
				break;
			}
		}
	}
});
