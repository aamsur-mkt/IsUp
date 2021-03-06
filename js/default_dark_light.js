/*

	Theme Name: STRATUM
	Description: HTML template
	Author: AGATE 
	Version: 1.0
	
	1.  Layout         : this section includes Styles of core left panel and core right panel
	2.  Global         : This section includes global classes like Headings tags, fonts, floats, Columns, LI etc 
	3.  Nav Bar        : This section includes style for left navigation bar
	4.  Left Panel     : This section includes Logo + Social Icons
	5.  Slider         : This section includes styles for Slides
	6.  Services       : This section includes styles services Section
	7.  Portfolio      : This section includes styles Portfolio Items 
	8.  Blog           : This section includes styles Blog 
	9.  Form Elements  : This section includes styles Form and there all Elements
	10. Buttons        : This section includes styles of Bigger + Small btns with 10 color varioations
	11. Settings Panel : This section icludes styles for Setting panel which is used only for demo purpas
	12. Slider Start   : This section includes styles for Slides dnavigations btns 

*/

/* Import Reset CSS -------------------------------------------------------------- */

@import url('reset.css');


/* ----------------------1. Layout -------------------------------------------------------------- */

body {
	margin:0px;
	padding:0px;
	line-height:1.5;
	font-size:12px;
	font-family:Helvetica, Arial , sans-serif
}


a { 
	text-decoration: none;
	color:#cb483e;
	font-weight: bold;
	-moz-transition:color 0.2s linear 0.2s;
	-webkit-transition:color 0.2s linear 0.2s;
	-o-transition:color 0.2s linear 0.2s;
	transition:color 0.2s linear 0.2s;		
	}
a:hover { 
	text-decoration: none;
	color:#555555;
	font-weight: bold;
	}

.leftPanel {
	width:34%;
	float:left;
	position:fixed;
	background-color:#5b5b5b;
	background:url(../images/common/left_col_shadow.png) right repeat-y;
	color:#b4b4b4;
	height:100%;
	min-height:100%;
	}

.rightPanel {
	width:65%;
	float: right;
	color:#3d3d3d;
	}
.rightPannelInner {
	margin:30px 0px 30px 0px;
	width:655px;
	}
	

/* here you can change right panel color or texture you want */
.wrapper {
	margin:0px;
	padding:0px;
	height:100%;
	background-color:#FAFAFA;
	background:url(../images/dark_light/default_light.png) repeat fixed;
	overflow:auto;
	}
/* here you can change left panel color or texture you want */
.leftPanel_inner {
	background:url(../images/dark_light/default_dark.png) repeat;
	margin-right:23px;
	height:100%;
	min-height:100%	
	}	
	
.leftPanel_inner_border {
	background:url(../images/dark_light/left-panel-border.png) right repeat-y;
	padding:30px 30px 30px 10px;
	height:100%;
	min-height:100%;	
	}	
	


/* ----------------------2. Global -------------------------------------------------------------- */

h1 { font-size:36px; }
h2 { font-size:28px; }
h3 { font-size:22px; font-weight:normal; }
h4 { font-size:18px; }
h5 { font-size:14px; }
h6 { font-size:12px; }

h1 cufon { padding-bottom:14px; }
h2 cufon { padding-bottom:12px; }
h3 cufon { padding-bottom:10px; }
h4 cufon { padding-bottom:9px; }
h5 cufon { padding-bottom:8px; }
h6 cufon { padding-bottom:7px; }

blockquote { 
	padding:4px 0px 10px 50px;
	background:url(../images/dark_light/icons/blockquote.png) no-repeat left top;
	margin:10px;
	}

cite { 
	font-size:10px;
	color: #999999;
	display:inline-block;
	padding-bottom:10px;
	}	

cite a{ 
	color: #999999;
	}

cite a:hover{
	text-decoration:none;
	}	
	
.clear { clear:both; height:auto; overflow:auto; }

.marginRB20 { margin:0px 20px 20px 0px; }
.padding20 { padding:20px; }

.paddingTop10 { padding-top:10px; }
.paddingTop20 { padding-top:20px; }
.paddingTop40 { padding-top:40px; }
.paddingTop60 { padding-top:60px; }
.paddingTop80 { padding-top:80px; }

.paddingRight36 { padding-right:36px; }


.padding2 { padding:2px; }
.smallText { font-size:11px; }

.width100 { width:180px; }

.page_saperator { 
	background:url(../images/common/down_arrow.png) no-repeat center;
	margin-top:30px;
	margin-bottom:30px;
	padding:175px;
	
	}
	
.page_title {
	background:url(../images/dark_light/bg_title.png) center no-repeat;
	width:648px;
	padding:10px 0px;
	text-align:center;
	}


.pcfrm_smpl_white {
	border:0px solid #FFFFFF;
	border-bottom:6px solid #000000;
	}




.darkBorderFrame {
	display:block;
	background:url(../images/dark_light/photo_frame_gray.png) bottom right no-repeat;
	padding:10px 12px 13px 10px;
	}

.ovr_links {
	position:relative;
	}

.img_overlay {
	position:absolute;
	z-index:100;
	width:100%;
	text-align:center;
	margin:auto 0px;
	display: none;
	padding-top:42%;
	}	

#slider .img_overlay { padding-top:155px !important; } /*to adjust top margin of image over icons in slider image */
#portfolio .img_overlay { top:-20px !important; } /*to adjust top margin of image over icons in Portfolio full size image */
#blog .img_overlay { top:-40px !important; } /*to adjust top margin of image over icons in blog small size image */
#blog li.full_li .img_overlay { top:-160px !important; } /*to adjust top margin of image over icons in blog full size image */

.ovr_links img{
	display:block;
	} 
	

.icon_play, .icon_expose , .icon_link {
	background:url(../images/dark_light/photo_over_icons.png) no-repeat;
	background-position:-17px -17px;
	display: inline-block;
	width:40px;
	height:40px;
	overflow:hidden;
	margin:0px;
	margin-bottom:0px;
	text-align:center;
	margin:auto 0px;
	}


.icon_play:hover, .icon_expose:hover, .icon_link:hover {
	background-position:-17px -98px;
	}	


.icon_expose {
	background-position:-92px -17px;
	}

.icon_expose:hover {
	background-position:-92px -98px;
	}	


.icon_link {
	background-position:-168px -17px;
	}

.icon_link:hover {
	background-position:-168px -98px;
	}	

.slide_details {
	clear:both;
	width:940px;
	padding:20px;
	background:url(../images/dark_light/default_dark.png) repeat;
	color:#dbdbdb;
	height: auto;
	overflow:auto;
	}




/* Column Layouts  */

.one_half { width:48%; }
.one_third { width:30.66%; }
.two_third { width:65.33%; }
.one_fourth { width:22.4%; }
.three_fourth { width:74%; }
.one_fifth { width:16.8%; }
.two_fifth { width:37.6%; }
.three_fifth { width:58.4%; }
.four_fifth { width:79.2%; }

.custom_column { 
	position:relative;
	margin:0;float:left;
	}

.one_half,
.one_third,
.two_third,
.three_fourth,
.one_fifth,
.two_fifth,
.three_fifth,
.four_fifth {
	position:relative;
	margin-right:4%;
	float:left;
	min-height:1px;
	margin-bottom:0;
	}

.one_fourth {
	position:relative;
	margin-right:2.5%;
	float:left;
	min-height:1px;
	margin-bottom:0;
	}

.last {
	margin-right:0!important;
	clear:right;
	}

	
	
/* Column Layouts ended */



/* Bullets  */

ul.bullet_arrow,
ul.bullet_star,
ul.bullet_heart,
ul.bullet_gear,
ul.bullet_pluse,
ul.bullet_book {
	padding:none;
	margin:none;
	list-style:none;
	}

ul.bullet_arrow li,
ul.bullet_star li,
ul.bullet_heart li,
ul.bullet_gear li,
ul.bullet_pluse li,
ul.bullet_book li {
	padding:0px 0px 6px 25px;
	background: url(../images/dark_light/icons/bullets.png) no-repeat;	
	}
ul.bullet_arrow li { background-position:-175px -31px; }
ul.bullet_star li { background-position:-150px -60px; }
ul.bullet_heart li { background-position:-123px -93px; }
ul.bullet_gear li { background-position:-95px -120px; }
ul.bullet_pluse li { background-position:-70px -147px; }
ul.bullet_book li { background-position:-34px -177px; }

/* Bullets ended */







/* ----------------------3. Nav Bar -------------------------------------------------------------- */


ul.nav_bar { 
	clear:both;
	margin: 20px auto 30px auto;
	width:99%;	
	}

ul.nav_bar li{ 
	clear:both;
	margin: 5px auto;
	width:99%;
	text-align:center;
	}
	
ul.nav_bar li a{ 
	clear:both;
	text-align:center;
	text-decoration:none;
	font-size:12px;
	color:#b4b4b4;
	padding-bottom:1px;
	display:block;	
	background:url(../images/dark_light/navBG_light.png) bottom repeat-x;	
	}
ul.nav_bar li a span{ 
	clear:both;
	text-align:center;
	padding:6px 10px 11px 10px;
	display:block;
	background:url(../images/dark_light/navBG_dark.png) bottom repeat-x;
	font-weight:bold;	
	}
	

.active_link {
	background:url(../images/dark_light/icons/left-menu-pointer.png) no-repeat;
	background-position:right 10px;	
	}

.active_link a span {
	color:#686868 !important;	
	}


/* ----------------------4. Left Pannel -------------------------------------------------------------- */


.logo_container {
	margin:2px auto;
	text-align:center;
	}


.intro_text {
	width:200px;
	margin:10px auto 25px auto;
	padding:0px;
	text-align:center;
	line-height:1.6;
   color:#7F7F7F;	
	}

.socialIcon
  {
   width:auto;
   height:auto;
   clear:both;
   margin:0px auto;
   text-align:center;
   width: auto;
   padding-left:0px;
  
   } 

.socialIcon a{	
	margin:3px;
	background-repeat:no-repeat;
	background-position:0 -42px;
	display:inline-block;
	}
	
.socialIcon a span{
	width:37px;
	height:34px;
	display:block;
	background-repeat:no-repeat;	
	background-position:0 -2px;
	opacity:0.0;
	filter:alpha(opacity=0); /* For IE8 and earlier */
	}



.aim, .aim span { background-image:url(../images/dark_light/icons/social/aim.png); }
.amazon, .amazon span { background-image:url(../images/dark_light/icons/social/amazon.png); }
.buzzyahoo, .buzzyahoo span { background-image:url(../images/dark_light/icons/social/buzzyahoo.png); }
.delicious, .delicious span { background-image:url(../images/dark_light/icons/social/delicious.png); }
.deviantart, .deviantart span { background-image:url(../images/dark_light/icons/social/deviantart.png); }
.digg1, .digg1 span { background-image:url(../images/dark_light/icons/social/digg1.png); }
.digg2, .digg2 span { background-image:url(../images/dark_light/icons/social/digg2.png); }
.dribble, .dribble span { background-image:url(../images/dark_light/icons/social/dribble.png); }
.facebook, .facebook span { background-image:url(../images/dark_light/icons/social/facebook.png); }
.fffound, .fffound span { background-image:url(../images/dark_light/icons/social/fffound.png); }
.fireeagle, .fireeagle span { background-image:url(../images/dark_light/icons/social/fireeagle.png); }
.flickr, .flickr span { background-image:url(../images/dark_light/icons/social/flickr.png); }
.google, .google span { background-image:url(../images/dark_light/icons/social/google.png); }
.googletalk, .googletalk span { background-image:url(../images/dark_light/icons/social/googletalk.png); }
.itunes, .itunes span { background-image:url(../images/dark_light/icons/social/itunes.png); }
.lastfm, .lastfm span { background-image:url(../images/dark_light/icons/social/lastfm.png); }
.linkedin, .linkedin span { background-image:url(../images/dark_light/icons/social/linkedin.png); }
.messendertahoo, .messendertahoo span { background-image:url(../images/dark_light/icons/social/messendertahoo.png); }
.messenger, .messenger span { background-image:url(../images/dark_light/icons/social/messenger.png); }
.myspace, .myspace span { background-image:url(../images/dark_light/icons/social/myspace.png); }
.netvibes, .netvibes span { background-image:url(../images/dark_light/icons/social/netvibes.png); }
.openid, .openid span { background-image:url(../images/dark_light/icons/social/openid.png); }
.orkut, .orkut span { background-image:url(../images/dark_light/icons/social/orkut.png); }
.picasa, .picasa span { background-image:url(../images/dark_light/icons/social/picasa.png); }
.reddit, .reddit span { background-image:url(../images/dark_light/icons/social/reddit.png); }
.rss, .rss span { background-image:url(../images/dark_light/icons/social/rss.png); }
.shareit, .shareit span { background-image:url(../images/dark_light/icons/social/shareit.png); }
.skype, .skype span { background-image:url(../images/dark_light/icons/social/skype.png); }
.stumbleupon, .stumbleupon span { background-image:url(../images/dark_light/icons/social/stumbleupon.png); }
.technorati, .technorati span { background-image:url(../images/dark_light/icons/social/technorati.png); }
.tumbrl, .tumbrl span { background-image:url(../images/dark_light/icons/social/tumbrl.png); }
.twitter, .twitter span { background-image:url(../images/dark_light/icons/social/twitter.png); }
.twitter2, .twitter2 span { background-image:url(../images/dark_light/icons/social/twitter2.png); }
.upcoming, .upcoming span { background-image:url(../images/dark_light/icons/social/upcoming.png); }
.vcard, .vcard span { background-image:url(../images/dark_light/icons/social/vcard.png); }
.vimeo, .vimeo span { background-image:url(../images/dark_light/icons/social/vimeo.png); }
.wikipedia, .wikipedia span { background-image:url(../images/dark_light/icons/social/wikipedia.png); }
.yahoo, .yahoo span { background-image:url(../images/dark_light/icons/social/yahoo.png); }
.yelp, .yelp span { background-image:url(../images/dark_light/icons/social/yelp.png); }
.youtube, .youtube span { background-image:url(../images/dark_light/icons/social/youtube.png); }







/* ----------------------5. Slider -------------------------------------------------------------- */

.anything_slider {
	margin-top:50px;
	clear:both;
	}
.slide_left_content {
	clear:both;
	height:auto;
	overflow:auto;
	width: 645px;
	}

.slide_left_content .slide_content {
	float:left;
	line-height:1.5;
	width:280px;
	padding-right:10px;
	}

.slide_left_content .slide_contentL {
	float:right;
	line-height:1.5;
	width:280px;
	padding-left:10px;
	}
		
.slide_title {
	clear:both;
	padding:5px 0px;
	}	
	
.slide_description {
	clear:both;
	padding:5px 0px;
	}

.slide_left_content .slide_image {
	float:left;
	width:350px;
	text-align:right;
	}

.slide_left_content .slide_imageL {
	float:left;
	width:350px;
	text-align:left;
	}

.slide_left_content .slide_image_full {
	float:left;
	width:620px;
	text-align:right;	
	}	
	
.slide_btn {
	clear:both;
	padding:35px 0px;	
	}




/* ----------------------6. Services -------------------------------------------------------------- */

.services_title {
	width:99%;
	background:url(../images/dark_light/bottom_arrow.png) no-repeat bottom center;
	padding:10px 0px;
	text-align:center;
	margin-bottom:10px;
	}

/* ----------------------7. Portfolio -------------------------------------------------------------- */

ul#portfolio {
	padding:none;
	margin:none;
	list-style:none;
	}
	
ul#portfolio li{
	width:auto;
	float:left;
	margin:8px;
	}



/* ----------------------8. Blog -------------------------------------------------------------- */

ul#blog {
	padding:none;
	margin:none;
	list-style:none;
	}


ul#blog li{
	padding-bottom:60px;
	}
	
ul#blog .half_li { 
	width:305px;
	float:left;
	margin:8px;
	}

ul#blog .full_li { 
	clear:both;
	margin:0px;
	width:99%;
	}

ul#blog .half_li h1,
ul#blog .half_li h2,
ul#blog .half_li h3,
ul#blog .half_li h4
	{ 
	width:285px;
	}
	
ul#blog .full_li h1,
ul#blog .full_li h2,
ul#blog .full_li h3,
ul#blog .full_li h4
	{ 
	width:570px;
	}

.commentlist {
	clear:both;
	margin-top:10px;
	}

.comment_user_img {
	float:left;
	width:40px;
	margin-right:10px;
	}
	
.comment_text {
	float:left;
	width:90%;
	padding-bottom:10px;
	margin-bottom:10px;
	border-bottom:1px solid #494949;
	font-size:11px;
	}	

.commentlist ul {
	margin-left:48px;
	}

.comment_user {
	font-weight: bold;
	}

.comment_date {
	font-style:italic;
	font-size:11px;
	padding-left:10px;
	}
	
.fixed_block {
	height:560px;
	overflow:auto;
	width:940px;
	padding:20px;
	background:url(../images/dark_light/default_dark.png) repeat;
	color:#dbdbdb;	
	
	}
	




/* ----------------------9. Form elements -------------------------------------------------------------- */


.fancy_form input[type="text"], 
.fancy_form input[type="password"], 
.fancy_form select,
.fancy_form textarea
	{
		clear:both;
		padding:18px 18px 16px 18px;
		width:59%;
		background:url(../images/dark_light/input_bg.png) repeat;
		color: #3d3d3d;
		margin:0px 0px 20px 0px;
		border:none;
		border:1px solid #c2c2c2;
	}

.fancy_form input[type="text"]:focus, 
.fancy_form input[type="password"]:focus, 
.fancy_form select:focus,
.fancy_form textarea:focus,
.sml input[type="text"]:focus, 
.sml input[type="password"]:focus, 
.sml select:focus,
.sml textarea:focus
	{
		border:1px dotted #3d3d3d;		
	}

.sml input[type="text"], 
.sml input[type="password"], 
.sml select,
.sml textarea
	{
		clear:both;
		padding:4px 8px 8px 8px;
		width:63%;
		background:url(../images/dark_light/input_bg.png) repeat;
		color: #3d3d3d;
		margin:0px 0px 3px 0px;
		border:none;
		border:1px solid #c2c2c2;		
	}


.fancy_form textarea
	{
		width:93%;
		font-family:Helvetica, Arial , sans-serif;
		font-size:12px;		
	}
	


	
	
.sml input[type="button"],
.sml input[type="reset"], 
.sml input[type="submit"]
	{

	padding:0px 25px 2px;
	height:30px;
	margin:5px 3px 5px 3px;

	}	
	


	


/* ----------------------10. Buttons Start -------------------------------------------------------------- */

.btn_search,
.btn_plus {
	display: inline-block;
	-webkit-border-radius: 5px;
	-moz-border-radius: 5px;
	border-radius: 5px;
	-webkit-box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2); /* Saf3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
    -moz-box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2); /* FF3.5 - 3.6 */
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2); /* Opera 10.5, IE9, FF4+, Chrome 6+, iOS 5 */	
	height:44px;
	text-decoration:none;
	text-transform:uppercase;
	border:none;
	}
.btn_search span,
.btn_plus span {
	text-align:center;
	display:block;	
	padding:13px 35px 0px;
	height:31px;
	text-decoration:none;
	text-transform:uppercase;
	-webkit-border-radius: 5px;
	-moz-border-radius: 5px;
	border-radius: 5px;
	text-shadow: 0 1px 0 rgba(255,255,255,0.9);
	-moz-text-shadow: 0 1px 0 rgba(255,255,255,0.9);
	-webkit-text-shadow: 0 1px 0 rgba(255,255,255,0.9);	
	font-weight:bold;	
	}
a.btn_search,
a.btn_plus {
	text-decoration:none;
	}




.btn_search {
	background:url(../images/dark_light/icons/btnOver.png) right bottom no-repeat;
	}
.btn_search span{
	color:#464646;
	background: #ffffff; /* Old browsers */
	/* IE9 SVG, needs conditional override of 'filter' to 'none' */
	background: url(data:image/svg+xml;wrapper64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9Ijk5JSIgc3RvcC1jb2xvcj0iI2RiZGJkYiIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2dyYWQtdWNnZy1nZW5lcmF0ZWQpIiAvPgo8L3N2Zz4=);
	background: -moz-linear-gradient(top,  #ffffff 0%, #dbdbdb 99%); /* FF3.6+ */
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ffffff), color-stop(99%,#dbdbdb)); /* Chrome,Safari4+ */
	background: -webkit-linear-gradient(top,  #ffffff 0%,#dbdbdb 99%); /* Chrome10+,Safari5.1+ */
	background: -o-linear-gradient(top,  #ffffff 0%,#dbdbdb 99%); /* Opera 11.10+ */
	background: -ms-linear-gradient(top,  #ffffff 0%,#dbdbdb 99%); /* IE10+ */
	background: linear-gradient(top,  #ffffff 0%,#dbdbdb 99%); /* W3C */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#dbdbdb',GradientType=0 ); /* IE6-8 */	
	}	
	





.btn_plus {
	background:url(../images/dark_light/icons/btnOver-plus.png) right bottom no-repeat;
	}
.btn_plus span{
	color:#464646;
	background: #ffffff; /* Old browsers */
	/* IE9 SVG, needs conditional override of 'filter' to 'none' */
	background: url(data:image/svg+xml;wrapper64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9Ijk5JSIgc3RvcC1jb2xvcj0iI2RiZGJkYiIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2dyYWQtdWNnZy1nZW5lcmF0ZWQpIiAvPgo8L3N2Zz4=);
	background: -moz-linear-gradient(top,  #ffffff 0%, #dbdbdb 99%); /* FF3.6+ */
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ffffff), color-stop(99%,#dbdbdb)); /* Chrome,Safari4+ */
	background: -webkit-linear-gradient(top,  #ffffff 0%,#dbdbdb 99%); /* Chrome10+,Safari5.1+ */
	background: -o-linear-gradient(top,  #ffffff 0%,#dbdbdb 99%); /* Opera 11.10+ */
	background: -ms-linear-gradient(top,  #ffffff 0%,#dbdbdb 99%); /* IE10+ */
	background: linear-gradient(top,  #ffffff 0%,#dbdbdb 99%); /* W3C */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#dbdbdb',GradientType=0 ); /* IE6-8 */	
	}
 



a.link_updown {
	background: url(../images/dark_light/icons/up_down-icons.png) no-repeat;
	background-position:right -35px;
	padding-right:10px;
	display: inline-block;
	}


.btn_red,
.btn_yellow,
.btn_rgreen,
.btn_blue,
.btn_purple,
.btn_seagreen,
.btn_pink,
.btn_darkgray,
.btn_silver,
.btn_slategreen {
	display: inline-block;
	
	-webkit-box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6); /* Saf3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
    -moz-box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6); /* FF3.5 - 3.6 */
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6); /* Opera 10.5, IE9, FF4+, Chrome 6+, iOS 5 */	
	
	height: auto;
	text-decoration:none;
	text-transform:uppercase;
	border:none;
	text-align:center;
	display: inline-block;
	padding:13px 35px;
	margin:5px 5px 10px 4px;
	text-decoration:none;
	text-transform:uppercase;
	
	-webkit-border-radius: 5px;
	-moz-border-radius: 5px;
	border-radius: 5px;
	
	text-shadow: 0 1px 0 rgba(255,255,255,0.2);
	-moz-text-shadow: 0 1px 0 rgba(255,255,255,0.2);
	-webkit-text-shadow: 0 1px 0 rgba(255,255,255,0.2);
	
	font-weight:bold;
	font-size:12px;
	font-family:Helvetica, Arial , sans-serif;

	width: auto;
	cursor: pointer;
	
	}

.btn_darkgray {
	-webkit-box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1); /* Saf3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
    -moz-box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1); /* FF3.5 - 3.6 */
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1); /* Opera 10.5, IE9, FF4+, Chrome 6+, iOS 5 */	
	}	

a.btn_red:hover { color:#561617; }
a.btn_yellow:hover { color:#764b02; }
a.btn_rgreen:hover { color:#466513; }
a.btn_seagreen:hover { color:#157f78; }
a.btn_blue:hover { color:#165ca5; }
a.btn_purple:hover { color:#42294e; }
a.btn_pink:hover { color:#692b4b; }
a.btn_darkgray:hover { color:#bfbfbf; }
a.btn_silver:hover { color:#6a6a6a; }
a.btn_slategreen:hover { color:#1f4749; }


.btn_red {
	background:url(../images/common/btnShade.png) top repeat-x #b02b2c;
	color:#561617;
	}
.btn_yellow {
	background:url(../images/common/btnShade.png) top repeat-x #edae44;
	color:#764b02;
	}
.btn_rgreen {
	background:url(../images/common/btnShade.png) top repeat-x #83a846;
	color:#466513;
	}
.btn_seagreen {
	background:url(../images/common/btnShade.png) top repeat-x #4ecac2;
	color:#157f78;
	}
.btn_blue {
	background:url(../images/common/btnShade.png) top repeat-x #7bb0e7;
	color:#165ca5;
	}
.btn_purple {
	background:url(../images/common/btnShade.png) top repeat-x #745f7e;
	color:#42294e;
	}
.btn_pink {
	background:url(../images/common/btnShade.png) top repeat-x #d65799;
	color:#692b4b;
	}
.btn_darkgray {
	background:url(../images/common/btnShade.png) top repeat-x #555555;
	color:#bfbfbf;
	}
.btn_silver {
	background:url(../images/common/btnShade.png) top repeat-x #dbdbdb;
	color:#6a6a6a;
	}
.btn_slategreen {
	background:url(../images/common/btnShade.png) top repeat-x #5f8789;
	color:#1f4749;
	}

.small { 
	padding:5px 10px !important;
	text-transform: none !important;
	margin-right:1px !important;

	}

.active {
	-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=40)"; 
	filter: alpha(opacity=40);
	opacity: 0.4;
	}

/* ----------------------10. Buttons Stop -------------------------------------------------------------- */

	
	
	
	
/* ----------------------11. Settings Panel Start ------------------------------------------------------ */

.settings {
	position: fixed;
	top:30px;
	left:0px;
	z-index:100;
	overflow:auto;
	padding:10px 7px 7px 20px;
	background:#FFFFFF;
	width:30px;
	
	border:6px solid #C9564E;
	
	border-left:none;
	
	-webkit-box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4); /* Saf3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
    -moz-box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4); /* FF3.5 - 3.6 */
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4); /* Opera 10.5, IE9, FF4+, Chrome 6+, iOS 5 */	


	

	}
.settingsBtn {
	float:right;
	width:30px;
	}

#setting_options {
	width:200px;
	float:left;
	margin-bottom:20px;
	height:1px;
	overflow:auto;
	margin-top:-23px;
	}

.color_input_block {
	padding:0px;
	background:#EDEDED;
	color: #3d3d3d;
	border:1px solid #DBDBDB;
	margin:5px 5px 5px 0px;
	}

.color_input_block span{
	padding-left:6px;	
	}
	
.color_input_block input {
	background:#EDEDED url(../images/common/colorpicker/picker_icon.png) 152px 2px no-repeat;		
	border:none;
	padding:5px 35px 5px 0px;
	width:140px;
	}
.frm_row {
	margin-top:20px;
	}	
	
.frm_row .smallText {
	color: #BD5048 !important;
	}
	
.frm_row .smallTextgray {
	color: #666666 !important;
	font-size:11px;
	}	

.patterns { 
	clear:both;
	margin:0px;
	padding:0px;
	list-style:none;
	}

.patterns a {
	text-decoration:none;
	display:inline-block;
	width:30px;
	height:30px;
	overflow:hidden;
	margin:1px;
	}

#dark-1 { background:url(../images/xtras/patterns/thumbs/dark-1.jpg) left top; }
#dark-2 { background:url(../images/xtras/patterns/thumbs/dark-2.jpg) left top; }
#dark-3 { background:url(../images/xtras/patterns/thumbs/dark-3.jpg) left top; }
#dark-4 { background:url(../images/xtras/patterns/thumbs/dark-4.jpg) left top; }
#dark-5 { background:url(../images/xtras/patterns/thumbs/dark-5.jpg) left top; }
#dark-6 { background:url(../images/xtras/patterns/thumbs/dark-6.jpg) left top; }
#dark-7 { background:url(../images/xtras/patterns/thumbs/dark-7.jpg) left top; }
#dark-8 { background:url(../images/xtras/patterns/thumbs/dark-8.jpg) left top; }
#dark-9 { background:url(../images/xtras/patterns/thumbs/dark-9.jpg) left top; }
#dark-10 { background:url(../images/xtras/patterns/thumbs/dark-10.jpg) left top; }


#light-1 { background:url(../images/xtras/patterns/thumbs/light-1.jpg) left top; }
#light-2 { background:url(../images/xtras/patterns/thumbs/light-2.jpg) left top; }
#light-3 { background:url(../images/xtras/patterns/thumbs/light-3.jpg) left top; }
#light-4 { background:url(../images/xtras/patterns/thumbs/light-4.jpg) left top; }
#light-5 { background:url(../images/xtras/patterns/thumbs/light-5.jpg) left top; }
#light-6 { background:url(../images/xtras/patterns/thumbs/light-6.jpg) left top; }
#light-7 { background:url(../images/xtras/patterns/thumbs/light-7.jpg) left top; }
#light-8 { background:url(../images/xtras/patterns/thumbs/light-8.jpg) left top; }
#light-9 { background:url(../images/xtras/patterns/thumbs/light-9.jpg) left top; }
#light-10 { background:url(../images/xtras/patterns/thumbs/light-10.jpg) left top; }

/* ----------------------11. Settings Panel End ---------------------------------------------------------- */	








/* ----------------------12. Slider Start ---------------------------------------------------------- */	


div.anythingSlider-main .anythingControls ul a {
	background-image: url(../images/dark_light/icons/sprite-slider-icons.png) !important;
 
}


/* Autoplay Start/Stop button */
div.anythingSlider-main .start-stop {
	background-image: url(../images/dark_light/icons/sprite-slider-arrows.png) !important;

}


div.anythingSlider-main .arrow a {
	background: url(../images/dark_light/icons/sprite-slider-arrows.png) no-repeat !important;
}

/* ----------------------12. Slider End ---------------------------------------------------------- */	


