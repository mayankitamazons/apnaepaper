
    $(document).ready(function() {
	var base_url = window.location.origin+"/paper/paperadmin";
	
	    // alert(3);  
	// route form validation 
	$("input[name='tch3_22']").TouchSpin({
            initval: 0,
		 });
	// add product form 
	$('.price_type').change(function(e){
		var price_type = $(this).val();
		if(price_type=="daily")
		{
		  $('#daily_price').show();
		  $('#monthly_price').hide();
		  $('#fix_price').hide();
		}
		else
		{
			 $('#fix_price').show();
		   $('#daily_price').hide();
		  $('#monthly_price').hide();
		}
		
		
	});
	$('.user_code_validate').click(function(e) {
		   var user_code=$('#user_code').val();
		   // alert(user_code);
		    if(user_code=='')
		   {
				$("#user_code").addClass("danger");
				$('#user_code').focus();
				$('.user_code_error').show();
				return false; 
		   }
		   else
		   {
			  $("#user_code").removeClass("danger");
				$('.user_code_error').hide();
				
		   }
		   r_data={};
		   r_data['user_code']=user_code;
		   $.ajax({
                     url: base_url+"/user/checkusercode",
                    type: "post",
                    // dataType:"json",
                    data: r_data,
                    success: function (data) {
					     var jsonData = JSON.parse(data);
						 var status=jsonData.status;
						 var msg=jsonData.msg;
						 
						 if(status==true)
						 {
							 
							$('.user_code_error').html(msg);
							$('.user_code_error').css('color', 'black');
							$('.user_code_error').show();
						    
						 }
						 else
						 {
							 $('.user_code_error').html(msg);
						   $('.user_code_error').show();
						   
							return false;
						 }
						 
					 },
                    error: function () {
						//alert('fail');
                        loading = false;
                    }
                });
	});
	// submit product  form 
	$('.product_form').click(function(e) {
	   var product_name=$('#product_name').val();
	   var product_code=$('#product_code').val();
	    var price_type = $("input[name='price_type']:checked").val();
		
	   if(product_name=='')
	   {
			$("#product_name").addClass("danger");
			$('#product_name').focus();
			$('.prdouct_name_error').show();
			return false; 
	   }
	   else
	   {
	      $("#product_name").removeClass("danger");
			$('.prdouct_name_error').hide();
			
	   }
	   if(product_code=='')
	   {
			$("#product_code").addClass("danger");
			$('#product_code').focus();
			$('.prdouct_code_error').show();
			return false; 
	   }
	   else
	   {
	      $("#product_code").removeClass("danger");
		  $('.prdouct_code_error').hide();
			
	   }
	    if($("input:radio[name='price_type']").is(":checked")) {
	      
	      $('.price_error').hide();
		  <!-- return false; -->
	   }
	   else
	   {
	      $('.price_error').show();
		  return false;
	   }
	   if(price_type=="daily")
	   {
	       if($('.sun').val()=='')
			{
			  $(".sun").addClass("danger2");
			    return false
			}
			else
			{
			   $(".sun").removeClass("danger2");
			}
			if($('.mon').val()=='')
			{
			  $(".mon").addClass("danger2");
			    return false
			}
			else
			{
			   $(".mon").removeClass("danger2");
			}
			if($('.tue').val()=='')
			{
			  $(".tue").addClass("danger2");
			    return false
			}
			else
			{
			   $(".wed").removeClass("danger2");
			}
			if($('.wed').val()=='')
			{
			  $(".wed").addClass("danger2");
			    return false
			}
			else
			{
			   $(".wed").removeClass("danger2");
			}
			if($('.thu').val()=='')
			{
			  $(".thu").addClass("danger2");
			    return false
			}
			else
			{
			   $(".thu").removeClass("danger2");
			}
			if($('.fri').val()=='')
			{
			  $(".fri").addClass("danger2");
			    return false
			}
			else
			{
			   $(".fri").removeClass("danger2");
			}
			if($('.sat').val()=='')
			{
			  $(".sat").addClass("danger2");
			    return false
			}
			else
			{
			   $(".sat").removeClass("danger2");
			}
			
	   }
	  
	    if(price_type=="fix")
		{
	       if($('.fix_price').val()=='')
			{
			  $(".fix_price").addClass("danger2");
			    return false
			}
			else
			{
			   $(".fix_price").removeClass("danger2");
			}
		}
	  
	   <!-- return false; -->
	});
	$('.route_form').click(function(e) {
	    var route_name=$('.route_name').val();
		var route_code=$('.route_code').val();
	   if(route_name=='')
	   {
			$(".route_name").addClass("danger");
			$('.route_name').focus();
			$('.route_name_error').show();
			return false; 
	   }
	   else
	   {
	      $(".route_name").removeClass("danger");
			$('.route_name_error').hide();
			
	   }
	   if(route_code=='')
	   {
			$(".route_code").addClass("danger");
			$('.route_code').focus();
			$('.route_code_error').show();
			return false; 
	   }
	   else
	   {
	      $(".route_code").removeClass("danger");
			$('.route_code_error').hide();
			
	   }
	});
	$('.edit_route_form').click(function(e) {
	    var edit_route_name=$('.edit_route_name').val();
		var edit_route_code=$('.edit_route_code').val();
	   if(edit_route_name=='')
	   {
			$(".edit_route_name").addClass("danger");
			$('.edit_route_name').focus();
			$('.edit_route_name_error').show();
			return false; 
	   }
	   else
	   {
			$(".edit_route_name").removeClass("danger");
			$('.edit_route_name_error').hide();
			
	   }
	   if(edit_route_code=='')
	   {
			$(".edit_route_code").addClass("danger");
			$('.edit_route_code').focus();
			$('.edit_route_code_error').show();
			return false; 
	   }
	   else
	   {
	      $(".edit_route_code").removeClass("danger");
			$('.edit_route_code_error').hide();
			
	   }
	});
	$('.route_edit').click(function(e) {
	   r_data = {};
	   var route_id = $(this).attr('route_id');
	   r_data['route_id']=route_id;
			$.ajax({
                     url: base_url+"/setting/viewroute",
                    type: "post",
                    // dataType:"json",
                    data: r_data,
                    success: function (data) {
					     var jsonData = JSON.parse(data);
						 var status=jsonData.status;
						
						 if(status==true)
						 {
							var data=jsonData.data;
							$('#edit_route_id').val(data.id);
							$('.edit_route_name').val(data.route_name);
							$('.edit_route_code').val(data.route_code);
							$('.edit_delivery_charges').val(data.delivery_charge);
						    $('#editrouteModel').modal('show'); 
						 }
						 else
						 {
						    alert(jsonData.msg);
							return false;
						 }
						 
					 },
                    error: function () {
						//alert('fail');
                        loading = false;
                    }
                });
	});
	// area form 
	$('.area_form').click(function(e) {
	    var area_name=$('.area_name').val();
		var area_code=$('.area_code').val();
		
		// alert(strUser);
	   if(area_name=='')
	   {
			$(".area_name").addClass("danger");
			$('.area_name').focus();
			$('.area_name_error').show();
			return false; 
	   }
	   else
	   {
	      $(".area_name").removeClass("danger");
			$('.area_name_error').hide();
			
	   }
	   if(area_code=='')
	   {
			$(".area_code").addClass("danger");
			$('.area_code').focus();
			$('.area_code_error').show();
			return false; 
	   }
	   else
	   {
	      $(".area_code").removeClass("danger");
			$('.area_code_error').hide();
			
	   }   
	  
	});
	$('.area_edit').click(function(e) {
	   r_data = {};
	   var area_id = $(this).attr('area_id');
	   r_data['area_id']=area_id;
			$.ajax({
                     url: base_url+"/setting/viewarea",
                    type: "post",
                    // dataType:"json",
                    data: r_data,
                    success: function (data) {
					     var jsonData = JSON.parse(data);
						 var status=jsonData.status;
						
						 if(status==true)
						 {
							var data=jsonData.data;
							// var route=jsonData.data;
							$('#edit_area_id').val(data.id);
							$('.edit_area_name').val(data.area_name);
							$('.edit_area_code').val(data.area_code);
							$('.edit_delivery_charge').val(data.delivery_charge);
							
						    $('#editareaModel').modal('show'); 
						 }
						 else
						 {
						    alert(jsonData.msg);
							return false;
						 }
						 
					 },
                    error: function () {
						//alert('fail');
                        loading = false;
                    }
                });
	});
	// edit area form 
	$('.edit_area_form').click(function(e) {
	    var edit_area_name=$('.edit_area_name').val();
		var edit_area_code=$('.edit_area_code').val();
		
		// alert(strUser);
	   if(edit_area_name=='')
	   {
			$(".edit_area_name").addClass("danger");
			$('.edit_area_name').focus();
			$('.edit_area_name_error').show();
			return false; 
	   }
	   else
	   {
	      $(".edit_area_name").removeClass("danger");
			$('.edit_area_name_error').hide();
			
	   }
	   if(edit_area_code=='')
	   {
			$(".edit_area_code").addClass("danger");
			$('.edit_area_code').focus();
			$('.edit_area_code_error').show();
			return false; 
	   }
	   else
	   {
	      $(".edit_area_code").removeClass("danger");
			$('.edit_area_code_error').hide();
			
	   }
	  
	   
	});
	// hoker add form 
	$('.hoker_form').click(function(e) {
	    var hoker_name=$('#hoker_name').val();
		var e = document.getElementById("route_id");
		var selected_route_id = e.options[e.selectedIndex].value;
		var area_ids = [];
		var area_count=0;
		$.each($("input[name='selected_area[]']:checked"), function(){ 
				area_count=area_count+1;
				area_ids.push($(this).val());
		});
		// alert(area_ids);
		// alert(area_count);
	   if(hoker_name=='')
	   {
			$("#hoker_name").addClass("danger");
			$('#hoker_name').focus();
			$('.hoker_name_error').show();
			return false; 
	   }
	   else
	   {
	      $("#hoker_name").removeClass("danger");
			$('.hoker_name_error').hide();
			
	   }
	    if(selected_route_id==-1)
	   {
			$("#route_id").addClass("danger");
			$('#route_id').focus();
			$('.hoker_route_error').show();
			return false; 
	   }
	   else
	   {
	      $(".route_id").removeClass("danger");
			$('.hoker_route_error').hide();
			
	   }
	  
	});
	// create user route plan form
	$('.route_plan').click(function(e) {
		var e = document.getElementById("route_id");
		var selected_route_id = e.options[e.selectedIndex].value;
		var selected_route_user_id=$('#selected_route_user_id').val();
		// alert(selected_route_id);
		if(selected_route_id==-1)
		{
			$("#route_id").addClass("danger");
			$("#route_id").focus();
			$('.route_id_error').show();
			return false; 
		}
		else
		{
			 r_data = {};
			 r_data['route_id']=selected_route_id;
			 r_data['selected_route_user_id']=selected_route_user_id;
			$.ajax({
			type: "POST",
			url: base_url+"/user/routeplan",
			data:r_data,
			// return false;
			success: function(data){
				 $('#responsive-modal').modal('show'); 
				$(".route_plan_body").html(data);
				
			}
			});
		}
	});
	// product increase plan
	$("input[name=tch3_22]").change(function(){
		// alert($(this).val()); 
		counter_value=$(this).val();
		var product_id = $(this).attr('product_id');
		// alert(product_id);
		var product_value=product_id+"_"+counter_value;
		// alert(product_value);
		var set_id="product_"+product_id;
		document.getElementById(set_id).value =product_value;
	});
	// save route form 
	$('.save_route_form').click(function(e) {
		
		// alert(4;
		var selected_user_id = $("input[name='select_route_user']:checked").val();
		$('#selected_route_user_id').val(selected_user_id);
		  $('#responsive-modal').modal('hide'); 
	});
	// print plan form 
	// $('.print_plan').click(function(e) {
		$(document).on('click', ".print_plan" , function () {
		// alert(3);
		var e = document.getElementById("route_id");
		var selected_route_id = e.options[e.selectedIndex].value;
	
		 r_data = {};
		// alert(selected_route_id);
		
		if(selected_route_id==-1)
		{
			$("#route_id").addClass("danger");
			$("#route_id").focus();
			$('.route_id_error').show();
			return false; 
		}
		else
		{
			
			r_data['route_id']=selected_route_id;
			$.ajax({
			type: "POST",
			url: base_url+"/user/printplan",
			data:r_data,
			// return false;
			success: function(data){
				 $('#responsive-print-model').modal('show'); 
				$(".print_plan_body").html(data);
				
			}
			});
		}
	});
	// save print plan id 
	// $('.save_print_form').click(function(e) {
		$(document).on('click', ".save_print_form" , function () {
		
		// alert(4);
		var selected_user_id = $("input[name='select_print_user']:checked").val();
		$('#selected_print_user_id').val(selected_user_id);
		  $('#responsive-print-model').modal('hide'); 
	});
	// working days form 
		$('.working_type').change(function(e){
		var working_type = $(this).val();
		if(working_type=="fix")
		{
		  $('#fix_working_days').show();
		  $('#select_working_days').hide();
		 
		}
		if(working_type=="select")
		{
		  $('#select_working_days').show();
		  $('#fix_working_days').hide();
		 
		}
		
		
	});
	// save working days 
	// $('.save_print_form').click(function(e) {
		$(document).on('click', ".save_working_form" , function () {
		
		// alert(4);
		var working_type = $("input[name='working_type']:checked").val();
		var working_type ="select";   
		// alert(working_type);    
		var close_pop="y";
		if(working_type=="undefined")
		{
			 // alert(3);
			$('.select_working_days_error').show();
			return false;
		}
		else
		{
			 // alert(33);
			$('#working_days_type').val(working_type);
		   $('.select_working_days_error').hide();	
		}
		if(working_type=="fix")
		{
			var user_working_days=$('#user_working_days').val();
			if(user_working_days=='')
			{
			   $(".user_working_days_error").show();
			   $('#user_working_days').focus();
				return false;
			}
			else
			{
				$('#fix_user_working_days').val(user_working_days);
				$(".user_working_days_error").hide();
			}
			
			
		}
		else if(working_type=="select")
		{
			var day_ids = [];
			var day_count=0;
			$.each($("input[name='selected_working_days[]']:checked"), function(){ 
				day_count=day_count+1;
				day_ids.push($(this).val());
			});
			 if(day_count==0)
			   {
				   $('.work_day_error').show();
				   return false;
			   }
			   else
			   {
				    // alert(day_ids);
				   $('#working_week').val(day_ids);
				   $('.work_day_error').hide();   
			   }
		}
		else
		{
			$("#select_working_days_error").show();
			 //$('#user_working_days').focus();
			 var close_pop="n";
				return false;
		}
		// alert(close_pop);
		if(close_pop=="y")
		{
			
		   $('#working-modal').modal('hide');  	
		}
		 
	});
	// create user form 
	$('.user_form').click(function(e) {
		 // alert(3);
		 // return false;
		 var user_name=$('#name').val();
		 if(user_name=='')
	   {
			$("#name").addClass("danger");
			$('#name').focus();
			$('.user_name_error').show();
			return false; 
	   }
	   else
	   {
	      $("#name").removeClass("danger");
			$('.user_name_error').hide();
			
	   }
	   var e = document.getElementById("route_id");
		var selected_route_id = e.options[e.selectedIndex].value;
		// select area
		 var e2 = document.getElementById("route_id");
		var selected_area_id = e2.options[e2.selectedIndex].value;
		// alert(selected_route_id);
		if(selected_route_id==-1)
		{
			$("#route_id").addClass("danger");
			$("#route_id").focus();
			$('.route_id_error').show();
			return false; 
		}
		else
		{
			$("#route_id").removeClass("danger");
			$('.route_id_error').hide();
		}
		if(selected_area_id==-1)
		{
			$("#select_area").addClass("danger");
			$("#select_area").focus();
			$('.area_id_error').show();
			return false; 
		}
		else
		{
			$("#select_area").removeClass("danger");
			$('.area_id_error').hide();
		}
	});
		$('#myTable').DataTable();
	        // For select 2
        $(".select2").select2();
			$('#example23').DataTable({
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    });
	// hoker form 
	$('.hoker_edit').click(function(e) {
	   r_data = {};
	   var user_id = $(this).attr('user_id');
	   r_data['user_id']=user_id;
			$.ajax({
                     url: base_url+"/user/viewhoker",
                    type: "post",
                    // dataType:"json",
                    data: r_data,
                    success: function (data) {
					     var jsonData = JSON.parse(data);
						 var status=jsonData.status;
						
						 if(status==true)
						 {
							 
							var data=jsonData.data;
							// alert(data.route_id);
							// var area_html
							$('#edit_user_id').val(data.id);
							$('.edit_hoker_name').val(data.name);
							$('.edit_hoker_email').val(data.email);
							$('.edit_hoker_mobile').val(data.mobile);
							$('.edt_hoker_password').val(data.user_password);
							$('.edit_hoker_join_date').val(data.join_date);
							$('#edit_route_id').val(data.route_id);
						    $('#Hokermodal').modal('show'); 
						 }
						 else
						 {
						    alert(jsonData.msg);
							return false;
						 }
						 
					 },
                    error: function () {
						//alert('fail');
                        loading = false;
                    }
                });
	});
	// create bill form 
	$('.create_bill').click(function(e) {
		var bill_date=$('#bill_created_date').val();
		var bill_type = $("input[name='bill_type']:checked").val();
		r_data = {};
		 if(bill_date=='')
	   {
			$("#bill_created_date").addClass("danger");
			$('#bill_created_date').focus();
			$('#bill_created_date_error').show();
			return false; 
	   }
	   else
	   {
	      $("#bill_created_date").removeClass("danger");
		  $('#bill_created_date_error').hide();
			
	   }
		if(bill_type=="all")
		{
			// r_data['select_user_id']=
			r_data['bill_date']=bill_date;
			r_data['bill_type']=bill_type;
			$('.create_bill').hide();
			$.ajax({
				type: "POST",
				url: base_url+"/bill/billgeneration",
				data:r_data,
				// return false;
				success: function(data){
				   
				},
				error: function () {
							$('#bill_creating').show();
							 $('#bill_creating').html('<p>Something Went wrong to Create bill.</p>');
						}
				});
		}
		else if(bill_type=="single")
		{
		}
		
		
		
	 });
	 $("#search-box-2").keyup(function(){
		 alert(2);
	 });
	// open cashbook form 
	
		$(document).on('keyup', ".search-box",function () {
		// alert(3);
		var keywords=$(this).val();
		 var search_id = $(this).attr('field_id');
		// alert(search_id);
		if (keywords!='')    
		{   
	       
			var field_id="#search-box-"+search_id;
			var box_id="#suggesstion-box-"+search_id;
			 u_data = {};
			  u_data['search_id']=search_id;
			  u_data['keyword']=keywords;
			 // alert(box_id);
			$.ajax({
			type: "POST",
			url: base_url+"/user/usersearch",
			data: u_data,
			beforeSend: function(){
				$(field_id).css("background","#FFF url(http://localhost/paper/img/LoaderIcon.gif) no-repeat 165px");
			},
			success: function(data){
				$(box_id).show();
				$(box_id).html(data);
				$(field_id).css("background","#FFF");
			}
			});
		}
	});
	function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
	$(document).on('click', ".add_field",function () {
		   document.cookie = 'hokerlist'+ "=" + cvalue + ";" + expires + ";path=/";
		var hokerstr=getCookie("hokerlist");
		//alert(hokerstr);
		 var add_id = $(this).attr('add_id');
		 var add_field="#add_field_"+add_id;
		 $(add_field).hide();
		 var next_id=parseInt(add_id) + parseInt(1);
		 // alert(next_id);
		 //var hokerstr="<option>Mayank</option>";
		var h="<tr id='table_"+next_id+"'><td><input type='text' name='search_user[]' field_id='"+next_id+"' id='search-box-"+next_id+"'  class='search-box form-control form-control-danger' placeholder='Search user Name/ User code'><div id='suggesstion-box-"+next_id+"'></div></td><td><input type='number' id='rate_"+next_id+"' name='amount[]'  maxlength='5' class='form-control form-control-danger' placeholder='Enter Amount'></td><td><select name='hoker_ids[]' class='form-control form-control-danger'><option value='-1'>Select Hoker Name</option>"+hokerstr+"</select></td><td class='text-nowrap'><a href='#' add_id='"+next_id+"' id='add_field_"+next_id+"'  class='add_field' data-toggle='tooltip' data-original-title='Add'><i class='fa fa-plus text-inverse m-r-10'></i></a><a  remove_id='"+next_id+"' id='remove_"+next_id+"' class='remove_field' data-toggle='tooltip' data-original-title='Close'><i class='fa fa-close text-danger'></i></a></td></tr>";
	    $(".table_data").append(h);
	});
	$(document).on('click', ".remove_field",function () {
		// alert(3);
		var remove_id = $(this).attr('remove_id');
		var r_field="#table_"+remove_id;
		var rate_field="#rate_"+remove_id;
		var rate_value=$(rate_field).val();
		var totalamount=$('#totalamount').val();
		//alert(totalamount);
		
		var pending=totalamount-rate_value;
		//alert(pending);
		$('#totalamount').val(pending);
		$('#totalamountstr').html(pending);
		
		$(r_field).remove();
	});
	$(document).on('keyup', "input[name='amount[]']",function () {
      var totalamount = 0;
    $("tr").each(function() {
        var subtotal = +$(this).find("input[name='amount[]']").val() || 0;
        totalamount += subtotal;
    });
    $("#totalamount").val(totalamount);
    $("#totalamountstr").html(totalamount);
});  
    $('.save_cash').click(function(e) {
		 var entry_date=$('#entry_date').val();
		 var totalamount=$('#totalamount').val();
		  if(entry_date=='')
		   {
				$("#entry_date").addClass("danger");
				$('#entry_date').focus();
				$('.entry_date_error').show();
				return false; 
		   }
		   else
		   {
			  $("#entry_date").removeClass("danger");
				$('.entry_date_error').hide();
				
		   }
		    if(totalamount=='')
		   {
				
				$('.total_error').show();
				return false; 
		   }
		   else
		   {
			  $('.total_error').hide();
				
		   }
		   
	});
		$('#example24').DataTable({
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    });
		$('#routeplantable').DataTable({
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    });
	    $('.input-daterange-timepicker').daterangepicker({
        timePicker: true,
        format: 'MM/DD/YYYY h:mm A',
        timePickerIncrement: 30,
        timePicker12Hour: true,
        timePickerSeconds: false,
        buttonClasses: ['btn', 'btn-sm'],
        applyClass: 'btn-danger',
        cancelClass: 'btn-inverse'
    });
	 });
	 $('.selected_user').click(function(e) {
		  var search_id = $(this).attr('search_id');
		  alert(search_id);
		  $(field_id).val(val);
			$(box_id).hide();
	 });
// rejoin popup
     $('.close_account').click(function(e) {
		// alert(3);
		var account_user_code=$(this).attr('account_user_code');
		alert(account_user_code);
		$('#account_user_code').val(account_user_code);
		 $('#responsive-close-model').modal('show'); 
	 });		 
	function selectUser(val,search_id,user_id) {
		 // var search_id = $(this).html();
		 // var search_id = $(this).attr('search_id');
		  // alert(search_id);
		  var field_id="#search-box-"+search_id;
			var box_id="#suggesstion-box-"+search_id;
			$(field_id).val(val);
			$(field_id).attr('user_id',user_id);
			$(box_id).hide();
		}
