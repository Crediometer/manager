import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./sidebar.css";
import $ from "jquery";
import Navr from "../navbr/Navr";
import Rectangle from "../../image/Rectangle.png";
import Girl from "../../image/Girl.png";
import Send from "../../image/Send.png";

const Sidebar = () => {

    const handleClick = () => {
        $('#msbo').on('click', function(){
          $('body').toggleClass('msb-x');
        });
    };


    return(
        <>
        <nav class="mnb navbar navbar-default navbar-fixed-top">
            <div class="container-fluid">
                <div class="navbar-header" style={{display:"flex", flexDirection: "row"}}>
                    <div style={{padding: "15px 0"}}>
                        <a onClick={handleClick} href="#" id="msbo"><i class="ic fa fa-bars"></i></a>
                    </div>
                    <div className="navbar-brand mx-2">
                        <span className="brand">BestAppEver</span>
                    </div>
                    <i class="far fa-star mx-4 my-3" style={{color: "#F0D000"}}></i>
                    <button className="btn btn-outline-danger mx-3" style={{height:"40px"}}>
                        Team Visible
                    </button>
                    <div className="img-grp">
                        <img src={Girl} alt="" className="mx-1" style={{width: "45px", height: "45px"}} />
                        <img src={Girl} alt="" className="mx-1" style={{width: "45px", height: "45px"}}/>
                        <img src={Girl} alt="" className="mx-1" style={{width: "45px", height: "45px"}}/>
                        <img src={Girl} alt="" className="mx-1" style={{width: "45px", height: "45px"}}/>
                        <img src={Girl} alt="" className="mx-1" style={{width: "45px", height: "45px"}}/>
                    </div>
                </div>
            </div>
        </nav>

        <div class="msb" id="msb">
		    <nav class="navbar navbar-default" role="navigation">
			    <div class="navbar-header">
				    <div class="brand-wrapper">
					    <div class="brand-name-wrapper">
						    <a class="navbar-brand" href="#">
							    CREDIOMETER
						    </a>
					    </div>
                    </div>
                </div>
                <div class="side-menu-container">
                <div class="sidebar">
	<div class="upper">
		<h3 class="upper1">
			Activity
		</h3>
		<div class="underline"></div>
		<div class="upper12">
			<h3 class="upper2">
				Filter
			</h3>
		</div>
		<br/>
		<br/>
		<h3 style={{marginLeft: "28px"}}>
			Brian Cervino
		</h3>
		<h4 style={{marginLeft: "28px", marginTop: "7px"}}>
			Good app names
		</h4>
		<h4 style={{marginLeft: "28px", marginTop: "13px", color: "darkgrey", opacity: "0.8"}}>
			36 min ago
		</h4>
		<br/>
		<h3 style={{marginLeft: "28px"}}>
			Brian Cervino
		</h3>
		<h4 style={{marginLeft: "28px", marginTop: "7px"}}>
			Good app names
		</h4>
		<h4 style={{marginLeft: "28px", marginTop: "13px", color: "darkgrey", opacity: "0.8"}}>
			36 min ago
		</h4>
		<br/>
		<h3 style={{marginLeft: "28px"}}>
			Brian Cervino
		</h3>
		<h4 style={{marginLeft: "28px", marginTop: "7px"}}>
			Good app names
		</h4>
		<h4 style={{marginLeft: "28px", marginTop: "13px", color: "darkgrey", opacity: "0.8"}}>
			36 min ago
		</h4>
		<br/>
		<h3 style={{marginLeft: "28px"}}>
			Brian Cervino
		</h3>
		<h4 style={{marginLeft: "28px", marginTop: "7px"}}>
			Good app names
		</h4>
		<h4 style={{marginLeft: "28px", marginTop: "13px", color: "darkgrey", opacity: "0.8"}}>
			36 min ago
		</h4>
	</div>
</div>
			</div>
		</nav>  
    </div>

    <div class="mcw">
        <div class="cv">
    <div>
    <div class="inbox">
       <div class="inbox-sb">
         
       </div>
       <div class="inbox-bx container-fluid">
            <div class="row">
                <div className="card todo-card">
                    <div className="card rectangle1">
                        <div className="card-body">
                            <span className="rectangle1-heading">TO DO</span>
                            <i class="fas fa-angle-left"></i>
                        </div>
                    </div>
                    <div className="card rectangle2">
                        <div className="card-body">
                            <span className="rectangle2-heading">Add more images</span>
                            <i class="fas fa-angle-left"></i>
                            <div className="rectangle2-info">
                                <img src={Rectangle} alt="" style={{width: "220px", height: "100px"}} />
                                <i class="fa fa-circle my-1" aria-hidden="true"></i>
                                <hr style={{border:"1px solid grey", marginTop: "-0.1rem"}}/>
                                <div className="dp-grp">
                                    <img src={Girl} alt="" style={{width: "40px", height:"40px"}}/>
                                    <img className="mx-2" src={Girl} alt="" style={{width: "40px", height:"40px"}} />
                                </div>
                                <hr style={{border:"1px solid grey", marginTop: "0rem"}}/>
                                <div className="icon-grp">
                                    <i class="fas fa-bars mx-1 "></i>
                                    <i class="far fa-comment-alt mx-2 "></i>
                                    <img class='mx-2' src={Send} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card rectangle3">
                        <span className="rectangle3-heading mx-2">Flatter than a pancake design</span>
                        <i class="fa fa-circle my-0 mx-2" aria-hidden="true"></i>
                    </div>
                    <div className="card rectangle4">
                        <span className="rectangle3-heading mx-2 my-1">Viral marketing compaign</span>
                        <i class="fa fa-circle my-0 mx-2" aria-hidden="true"></i>
                        <hr style={{border:"1px solid grey", marginTop:"0.1rem"}}/>
                        <div className="icon-grp">
                            <i class="far fa-calendar-alt mx-2" style={{fontSize:"24px"}}></i>
                            <span className="today-date">05 Nov</span>
                        </div>
                    </div>
                    <div className="buttons">
                        <button className="btn btn-light">+ Card</button>
                        <button className="btn btn-light mx-3">+ Check list</button>
                    </div>
                </div>
                <div className="card doing-card">
                    <div className="card rectangle1">
                        <div className="card-body">
                            <span className="rectangle1-heading">Doing</span>
                            <i class="fas fa-angle-left"></i>
                        </div>
                    </div>
                    <div className="card rectangle2" style={{height: "155px"}}>
                        <div className="card-body">
                            <span className="rectangle2-heading">More buttons</span>
                            <div className="rectangle2-info">
                                <i class="fa fa-circle my-1" aria-hidden="true"></i>
                                <hr style={{border:"1px solid grey", marginTop: "-0.1rem"}}/>
                                <div className="dp-grp">
                                    <img src={Girl} alt="" style={{width: "40px", height:"40px"}}/>
                                    <img className="mx-2" src={Girl} alt="" style={{width: "40px", height:"40px"}} />
                                </div>
                                <hr style={{border:"1px solid grey", marginTop: "0rem"}}/>
                                <div className="icon-grp">
                                    <i class="fas fa-bars mx-1 "></i>
                                    <i class="far fa-comment-alt mx-2 "></i>
                                    <img class='mx-2' src={Send} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card rectangle3" style={{height: "200px"}}>
                        <span className="rectangle2-heading mx-2 my-2">More buttons</span>
                        <div class="progress mx-2 my-1" style={{height:"5px", width: "200px"}}>
                            <div class="progress-bar" role="progressbar" aria-valuenow="70"
                            aria-valuemin="0" aria-valuemax="100" style={{width:"25%"}}>
                                <span class="sr-only">70% Complete</span>
                            </div>
                        </div>
                        <div class="checkbox mx-2 my-1">
                            <label><input type="checkbox" value=""/>Elvish</label>
                        </div>
                        <div class="checkbox mx-2 my-1">
                            <label><input type="checkbox" value=""/>Kingon</label>
                        </div>
                        <div class="checkbox disabled mx-2 my-1">
                            <label><input type="checkbox" value=""/>Tamil</label>
                        </div>
                        <div class="checkbox disabled mx-2 my-1">
                            <label><input type="checkbox" value=""/>Hustese</label>
                        </div>
                        <div className="circle-icon">
                            <i class="fa fa-circle mx-2" aria-hidden="true" style={{color:"yellow"}}></i>
                            <i class="fa fa-circle mx-2" aria-hidden="true" style={{color:"red"}}></i>
                        </div>
                    </div>
                    <div className="buttons">
                        <button className="btn btn-light">+ Card</button>
                        <button className="btn btn-light mx-3">+ Check list</button>
                    </div>
                </div>
                <div className="card question-card">
                    <div className="card rectangle1">
                        <div className="card-body">
                            <span className="rectangle1-heading">QA Review</span>
                            <i class="fas fa-angle-left"></i>
                        </div>
                    </div>
                    <div className="card rectangle2" style={{height: "125px"}}>
                        <div className="card-body">
                            <span className="rectangle2-heading">More buttons</span>
                            <div className="rectangle2-info">
                                <i class="fa fa-circle my-1" aria-hidden="true"></i>
                                <hr style={{border:"1px solid grey", marginTop: "-0.1rem"}}/>
                                <div className="dp-grp">
                                    <img src={Girl} alt="" style={{width: "40px", height:"40px"}}/>
                                    <img className="mx-2" src={Girl} alt="" style={{width: "40px", height:"40px"}} />
                                </div>
                                
                            </div>
                        </div>
                        <div className="buttons" style={{marginTop:"-0.5rem"}}>
                                <button className="btn btn-light">+ Card</button>
                                <button className="btn btn-light mx-3">+ Check list</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         </div>
        </div>
            </div>
        </div>
       
        </>
    )
}


export default Sidebar;