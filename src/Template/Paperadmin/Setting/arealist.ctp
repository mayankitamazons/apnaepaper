<!-- ============================================================== -->
                <!-- Start Page Content -->
                <!-- ============================================================== -->
                <div class="row">
                   
                  
                    <!-- column -->
                    
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Area Data</h4>
								<?= $this->Flash->render() ?>
                                <h6 class="card-subtitle">Export data to Copy, CSV, Excel, PDF & Print</h6>
								 <button type="button"  data-toggle="modal" data-target="#responsive-modal" style="float:right;" class="btn waves-effect waves-light btn-rounded btn-primary">Create</button>
                               <!-- sample modal content -->
                                <div id="responsive-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                                <h4 class="modal-title">Create New Area</h4>
                                            </div>
                                            <div class="modal-body">
                                                <form method="post">
                                                    <div class="form-group">
                                                        <label for="recipient-name" class="control-label">  Area Name: <span style="color:red;">* </span></label>
                                                        <input type="text" class="form-control area_name"  name="area_name">
														<small class="area_name_error" style="color:#fc4b6c;display:none;">Area Name is Required </small> 
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="message-text" class="control-label">Area Code: <span style="color:red;">* </span></label>
                                                        <input type="text" class="form-control area_code"  name="area_code">
														<small class="area_code_error" style="color:#fc4b6c;display:none;">Area Code is Required </small> 
                                                    </div>
													<div class="form-group">
                                        <h5 class="m-t-30 m-b-10">Route Name <span style="color:red;">* </span></h5>
										<small class="area_route_error" style="color:#fc4b6c;display:none;">Route Name is Required </small> 
                                        <select name="route_id" id="route_id" class="form-control" data-style="form-control btn-secondary">
										<option value="-1"> Select Route Name</option>
										<?php foreach($routedata as $route){   ?>
                                            <option value="<?php echo $route['id']; ?>"> <?php echo $route['route_name']; ?></option> 
										<?php } ?>
                                            
                                        </select>
                                    </div>
                                               
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">Close</button>
                                                <input type="submit" class="btn btn-danger waves-light area_form" value="Save"/>
                                            </div>
											 </form>
                                        </div>
                                    </div>
                                </div>
								<div id="editareaModel" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                                <h4 class="modal-title">Edit Area</h4>
                                            </div>
                                            <div class="modal-body">
                                                <form method="post">
                                                    <div class="form-group">
                                                        <label for="recipient-name" class="control-label">Area Name:<span style="color:red;">* </span></label>
                                                        <input type="text" class="form-control edit_area_name"  name="area_name">
														<small class="edit_area_name_error" style="color:#fc4b6c;display:none;">Area Name is Required </small> 
                                                        <input type="hidden" class="form-control"  id="edit_area_id"  name="edit_area_id">
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="message-text" class="control-label">Area Code:<span style="color:red;">* </span></label>
                                                        <input type="text" class="form-control edit_area_code"  name="area_code">
                                                    </div>
													<div class="form-group">
                                        <h5 class="m-t-30 m-b-10">Route Name <span style="color:red;">* </span></h5>
										
                                        <select name="route_id" class="form-control" id="edit_route_id" data-style="form-control btn-secondary">
										<option value="-1"> Select Route Name</option> 
										<?php foreach($routedata as $route){   ?>
                                            <option value="<?php echo $route['id']; ?>"> <?php echo $route['route_name']; ?></option> 
										<?php } ?>
                                            
                                        </select>
                                    </div>
                                               
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">Close</button>
                                                <input type="submit" class="btn btn-danger waves-light edit_area_form" value="Save"/>
                                            </div>
											 </form>
                                        </div>
                                    </div>
                                </div>
								
                                <div class="table-responsive m-t-40">
								<?php if(count($areadata)>0){ ?>
                                    <table id="example23" class="display nowrap table table-hover table-striped table-bordered" cellspacing="0" width="100%">
                                        <thead>
                                            <tr>
                                                <th>Area Name</th>
                                                <th>Area code</th>
                                                <th>Route Name</th>
                                                <th>Route Code</th>
                                                <th>Action</th>
                                              
                                            </tr>
                                        </thead>
                                       
                                        <tbody>
										<?php foreach($areadata as $area){  $area_id=$area['id'];?>
                                            <tr>
                                                <td><?php echo $area['area_name'];?></td>
                                                <td><?php echo $area['area_code'];?></td>
                                                <td><?php echo $area['route']['route_name'];?></td>
                                                <td><?php echo $area['route']['route_code'];?></td>
                                                
                                                <td class="text-nowrap">
                                                     <a class="area_edit" area_id="<?php echo $area_id; ?>" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
                                                    <a href="<?php echo $this->Url->build(['controller'=>'setting','action'=>'deletearea',$area_id]);?>" data-toggle="tooltip" data-original-title="Delete"> <i class="fa fa-close text-danger"></i> </a>
                                                   
                                                </td>
                                             
                                            </tr>
                                           
                                            <?php } ?>
                                           
                                        </tbody>
                                    </table>
								<?php } else{ echo "No area Found";} ?>
                                </div>
                            </div>
                        </div>
                       
                    </div>
               
                <!-- ============================================================== -->
                <!-- End PAge Content -->
                <!-- ============================================================== -->