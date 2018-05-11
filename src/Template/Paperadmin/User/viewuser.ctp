     <!-- ============================================================== -->
                <!-- Start Page Content -->
                <!-- ============================================================== -->
                <div class="row">
                   
                  
                    <!-- column -->
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Create New User</h4>
							<!-- Row -->
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card card-outline-info">
                            <div class="card-header">
                                <h4 class="m-b-0 text-white">Basic Info</h4>
                            </div>
                            <div class="card-body">
                                <form action="#">
                                    <div class="form-body">
                                       
                                        <div class="row p-t-20">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="control-label"> Name <span style="color:red;">* </span></label>
                                                    <input type="text" id="first_name" name="first_name" class="form-control" placeholder="Enter first name">
                                                    <small class="form-control-feedback"> This is inline help </small> </div>
                                            </div>
                                            <!--/span-->
                                            <div class="col-md-6">
                                                
                                            </div>
                                            <!--/span-->
                                        </div>
                                        <!--/row-->
                                        <div class="row">
										 <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="control-label">Email</label>
                                                    <input type="text" id="email" name="email" class="form-control email" placeholder= "example@gmail.com">
                                                    <small class="form-control-feedback"> This field has error. </small>
													</div>
                                            </div>
											 <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="control-label">Mobile</label>
                                                    <input type="text" id="mobile" name="mobile" class="form-control mobile" placeholder="Enter mobile Number">
                                                    <small class="form-control-feedback"> This field has error. </small> </div>
                                            </div>
                                            
                                            <!--/span-->
                                           
                                            <!--/span-->
                                        </div>
                                        <!--/row-->
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="control-label">Route <span style="color:red;">* </span></label>
													<small class="route_id_error" style="color:#fc4b6c;display:none;">Route Name is Required  </small> 
                                                    <select class="form-control custom-select" id="route_id" name="route_id" data-placeholder="Choose a Route" tabindex="1">
                                                        <option value="-1">Select Route</option>
                                                        <?php foreach($routedata as $route){   ?>
                                            <option value="<?php echo $route['id']; ?>"> <?php echo $route['route_name']; ?></option> 
										<?php } ?>
                                                    </select>
                                                </div>
                                            </div>
                                            <!--/span-->
                                           <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="control-label">Joining Date</label>
                                                    <div class="col-md-9">
                                                        <input type="date" class="form-control form-control" id="joining_date" name="joining_date" placeholder="dd/mm/yyyy">
                                                    </div>
                                                </div>
                                            </div>
											<div class="col-md-12">
											<span style="color:red;">* </span>
											   <select class="select2" id="select_area" name="select_area" style="width: 100%">
                                    <option>Select Area</option>
									<?php foreach($routedata as $route){   ?>
                                    <optgroup label="<?php echo $route['route_name']; ?>">
										<?php foreach($route['area'] as $area){ ?>
											<option value="<?php echo $area['id']; ?>"><?php echo $area['area_name']; ?></option>
                                      
										<?php } ?>
                                    </optgroup>
									<?php } ?>
                                    
                                </select>
											</div>
                                            <!--/span-->
                                        </div>
                                        <!--/row-->
                                        <h3 class="box-title m-t-40">Additional info </h3>
                                        <hr>
                                       
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Pan No</label>
                                                    <input type="text" id="pan_no" name="pan_no" class="form-control">
                                                </div>
                                            </div>
                                            <!--/span-->
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Aadhar No</label>
                                                    <input type="text" id="aadhar_no" name="aadhar_no" class="form-control">
                                                </div>
                                            </div>
                                            <!--/span-->
                                        </div>
                                        <!--/row-->
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Extra Phone No</label>
                                                    <input type="text" id="extra_phoneno" name="extra_phoneno"class="form-control">
                                                </div>
                                            </div>
                                            <!--/span-->
                                             <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="control-label">Date of Birth</label>
                                                    <div class="col-md-9">
                                                        <input type="date" class="form-control" id="dob" name="dob" placeholder="dd/mm/yyyy">
                                                    </div>
                                                </div>
                                            </div>
                                            <!--/span-->
                                        </div>
										<div class="row">
                                            <div class="col-md-12 ">
                                                <div class="form-group">
                                                    <label>Address</label>
                                                   <textarea class="form-control" id="address" name="address"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Row -->
                <!-- Row -->
				<div class="row">
                    <div class="col-lg-6">
					   <div class="card">
                            <div class="card-body">
							  paper detail
							</div>
						</div>
					</div>
					 <div class="col-lg-6">
                        <div class="card">
                            <div class="card-body">
                               
                                 <div class="row">
                                            <div class="col-md-12 ">
                                                <div class="form-group">
                                                    <label>Opening Balance</label>
                                                    <input type="text" class="form-control" id="opening_balance" name="opening_balance">
                                                </div>
                                            </div>
                                        </div>
								  <div class="row">
                                           <div class="col-md-12">
                                                <div class="form-group">
                                                    
                                                    <div class="form-check">
                                                        <label class="custom-control custom-radio">
                                                            <input id="radio1" name="balance_type" type="radio" class="custom-control-input">
                                                            <span class="custom-control-indicator"></span>
                                                            <span class="custom-control-description">Advance</span>
                                                        </label>
                                                        <label class="custom-control custom-radio">
                                                            <input id="radio2" name="balance_type" type="radio" checked class="custom-control-input">
                                                            <span class="custom-control-indicator"></span>
                                                            <span class="custom-control-description">OutStanding</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                </div>
								 <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                 
                                                 <button type="button"    class="btn waves-effect waves-light btn-primary route_plan">Route Plan</button>
												</div>
                                            </div>
											 <div class="col-md-6">
                                                <div class="form-group">
												<button type="button"  data-toggle="modal" data-target="#responsive-print-model"  class="btn waves-effect waves-light btn-primary">Print Plan</button>
                                                  
                                                </div>
                                            </div>
											
                                   </div>
								 <div class="form-actions" style="float:right;">
                                        <button type="submit" class="btn btn-success"> <i class="fa fa-check"></i> Save</button>
                                        <button type="button" class="btn btn-inverse">Cancel</button>
                                    </div>
                            </div>
                        </div>
                    </div>
                <!-- Row -->
							<!-- sample modal content -->
                                <div id="responsive-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
                                    <div class="modal-dialog" style="max-width:1200px !important;">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                                <h4 class="modal-title">Define User Route</h4>
                                            </div>
                                            <div class="modal-body">
                                                <div class="row">
                    
                        <div class="col-12 table-responsive m-t-40">
                                    <table id="example23" class="display nowrap table table-hover table-striped table-bordered" cellspacing="0" width="100%">
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>User Name</th>
                                                <th>User code</th>
                                                <th>Mobile</th>
                                                <th>Route/Area</th>
                                              
                                                
                                              
                                            </tr>
                                        </thead>
                                       
                                        <tbody>
                                            <tr>
                                                <td> <input style="position:static;opacity:1;" id="radio9" name="radio9" type="radio"  class="custom-control-input"></td>
                                                <td>USSS</td>
                                                <td>Edinburgh</td>
                                                <td>9001025477</td>
                                                <td>61</td>
                                                
                                             
                                            </tr>
                                           
                                            
                                           
                                        </tbody>
                                    </table>
                                </div>
                       
                    
                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-danger waves-effect waves-light">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- /.modal -->
	<!-- sample modal content -->
                                <div id="responsive-print-model" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
                                    <div class="modal-dialog" style="max-width:1200px !important;">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
										 <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="control-label">Route</label>
                                                    <select class="form-control custom-select" data-placeholder="Choose a Category" tabindex="1">
                                                        <option value="Category 1">Category 1</option>
                                                        <option value="Category 2">Category 2</option>
                                                        <option value="Category 3">Category 5</option>
                                                        <option value="Category 4">Category 4</option>
                                                    </select>
                                                </div>
                                            </div>
											
											</div>
											 <div class="row" style="width:40%">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="control-label">Area</label>
                                                     <select class="select2" style="width: 100%">
                                    <option>Select Area</option>
                                    <optgroup label="Alaskan/Hawaiian Time Zone">
                                        <option value="AK">Alaska</option>
                                        <option value="HI">Hawaii</option>
                                    </optgroup>
                                    <optgroup label="Pacific Time Zone">
                                        <option value="CA">California</option>
                                        <option value="NV">Nevada</option>
                                        <option value="OR">Oregon</option>
                                        <option value="WA">Washington</option>
                                    </optgroup>
                                    <optgroup label="Mountain Time Zone">
                                        <option value="AZ">Arizona</option>
                                        <option value="CO">Colorado</option>
                                        <option value="ID">Idaho</option>
                                        <option value="MT">Montana</option>
                                        <option value="NE">Nebraska</option>
                                        <option value="NM">New Mexico</option>
                                        <option value="ND">North Dakota</option>
                                        <option value="UT">Utah</option>
                                        <option value="WY">Wyoming</option>
                                    </optgroup>
                                    <optgroup label="Central Time Zone">
                                        <option value="AL">Alabama</option>
                                        <option value="AR">Arkansas</option>
                                        <option value="IL">Illinois</option>
                                        <option value="IA">Iowa</option>
                                        <option value="KS">Kansas</option>
                                        <option value="KY">Kentucky</option>
                                        <option value="LA">Louisiana</option>
                                        <option value="MN">Minnesota</option>
                                        <option value="MS">Mississippi</option>
                                        <option value="MO">Missouri</option>
                                        <option value="OK">Oklahoma</option>
                                        <option value="SD">South Dakota</option>
                                        <option value="TX">Texas</option>
                                        <option value="TN">Tennessee</option>
                                        <option value="WI">Wisconsin</option>
                                    </optgroup>
                                    <optgroup label="Eastern Time Zone">
                                        <option value="CT">Connecticut</option>
                                        <option value="DE">Delaware</option>
                                        <option value="FL">Florida</option>
                                        <option value="GA">Georgia</option>
                                        <option value="IN">Indiana</option>
                                        <option value="ME">Maine</option>
                                        <option value="MD">Maryland</option>
                                        <option value="MA">Massachusetts</option>
                                        <option value="MI">Michigan</option>
                                        <option value="NH">New Hampshire</option>
                                        <option value="NJ">New Jersey</option>
                                        <option value="NY">New York</option>
                                        <option value="NC">North Carolina</option>
                                        <option value="OH">Ohio</option>
                                        <option value="PA">Pennsylvania</option>
                                        <option value="RI">Rhode Island</option>
                                        <option value="SC">South Carolina</option>
                                        <option value="VT">Vermont</option>
                                        <option value="VA">Virginia</option>
                                        <option value="WV">West Virginia</option>
                                    </optgroup>
                                </select>
                                                </div>
                                            </div>
											
											</div>
                                                <h4 class="modal-title">Define User Print Route</h4>
                                            </div>
                                            <div class="modal-body">
                                                <div class="row">
                    
                        <div class="col-12 table-responsive m-t-40">
                                    <table id="example24" class="display nowrap table table-hover table-striped table-bordered" cellspacing="0" width="100%">
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>User Name</th>
                                                <th>User code</th>
                                                <th>Mobile</th>
                                                <th>Route/Area</th>
                                              
                                                
                                              
                                            </tr>
                                        </thead>
                                       
                                        <tbody>
                                            <tr>
                                                <td> <input style="position:static;opacity:1;" id="radio9" name="radio9" type="radio"  class="custom-control-input"></td>
                                                <td>USSS</td>
                                                <td>Edinburgh</td>
                                                <td>9001025477</td>
                                                <td>61</td>
                                                
                                             
                                            </tr>
                                           
                                            
                                           
                                        </tbody>
                                    </table>
                                </div>
                       
                    
                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-danger waves-effect waves-light">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- /.modal -->								
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                <!-- ============================================================== -->
                <!-- End PAge Content -->
                <!-- ============================================================== -->