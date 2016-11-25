<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html expr:dir='data:blog.languageDirection' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>
<head>
	<b:if cond='data:blog.url == data:blog.homepageUrl'>
		<title><data:blog.pageTitle/></title>
	<b:else/>
		<title><data:blog.pageName/></title>
	</b:if>
	<b:include data='blog' name='all-head-content'/>

		<b:if cond='data:blog.metaDescription == &quot;&quot;'>
		  <meta expr:content='data:blog.pageName + &quot; | Trung tâm đào tạo Faeseo. Hotline 0932523569 &quot;' name='description'/>
		</b:if>
		<meta content='Linh Nguyễn' name='author'/>		
		<link href='http://faceseo.vn/favicon.ico' rel='shortcut icon' type='image/vnd.microsoft.icon'/>
		<link href='http://fonts.googleapis.com/css?family=PT+Sans%3A400%2C700&amp;subset=latin%2Clatin-ext%2Ccyrillic&amp;ver=3.7.1' id='swt-fonts-css' media='all' rel='stylesheet' type='text/css'/>
		<b:skin><![CDATA[]]></b:skin>
		<script src='http://code.jquery.com/jquery-1.9.1.js' type='text/javascript'/>
		<link href='https://rawgithub.com/linhfaceseo/mysystemseo/master/tmpfaceseovietnam.css' rel='stylesheet' type='text/css'/>
		<script src='https://rawgithub.com/linhfaceseo/mysystemseo/master/tmpfaceseovietnam.js' type='text/javascript'/>
		<b:if cond='data:blog.pageType != &quot;static_page&quot;'>
			<b:if cond='data:blog.pageType != &quot;item&quot;'>
				<style type='text/css'>
				.post-content {float: right;width: 450px;}
				</style>
			</b:if>
		</b:if>
		<style>
		#content a{
		color:green !important;
		font-weight:bold;
		}
		</style>
</head>
<body>
<div style='position: absolute;top:-999px'>
<h1><data:blog.pageName/> trung tâm đào tạo seo Faceseo</h1>
</div>
<div id='container'>
<div id='headerwrapper'>
<div class='wrap'>
<div id='branding'>
<b:section class='headersec' id='headersec' maxwidgets='1' showaddelement='no'>
  <b:widget id='Header1' locked='true' title='Bảng Báo Giá Thiết Bị Hồ Bơi Giá Rẻ tại TPHCM (Tiêu đề)' type='Header' version='1' visible='true'>
    <b:includable id='main'>
  <b:if cond='data:useImage'>
    <b:if cond='data:imagePlacement == &quot;REPLACE&quot;'>
      <!--Show just the image, no text-->
      <div id='header-inner'>
        <a expr:href='data:blog.homepageUrl' style='display: block'>
          <img expr:alt='data:title' expr:height='data:height' expr:id='data:widget.instanceId + &quot;_headerimg&quot;' expr:src='data:sourceUrl' expr:width='data:width' style='display: block;padding-left:0px;padding-top:0px;'/>
        </a>
      </div>
    <b:else/>
      <!--
      Show image as background to text. You can't really calculate the width
      reliably in JS because margins are not taken into account by any of
      clientWidth, offsetWidth or scrollWidth, so we don't force a minimum
      width if the user is using shrink to fit.
      This results in a margin-width's worth of pixels being cropped. If the
      user is not using shrink to fit then we expand the header.
      -->
      <div expr:style='&quot;background-image: url(\&quot;&quot; + data:sourceUrl + &quot;\&quot;); &quot;                      + &quot;background-position: &quot;                      + data:backgroundPositionStyleStr + &quot;; &quot;                      + data:widthStyleStr                      + &quot;min-height: &quot; + data:height + &quot;px;&quot;                      + &quot;_height: &quot; + data:height + &quot;px;&quot;                      + &quot;background-repeat: no-repeat; &quot;' id='header-inner'>
        <div class='titlewrapper' style='background: transparent'>
          <h1 class='site-title' style='background: transparent; border-width: 0px'>
            <b:include name='title'/>
          </h1>
        </div>
        <b:include name='description'/>
      </div>
    </b:if>
  <b:else/>
    <!--No header image -->
    <div id='header-inner'>
      <div class='titlewrapper'>
        <h1 class='site-title'>
          <b:include name='title'/>
        </h1>
      </div>
      <b:include name='description'/>
    </div>
  </b:if>
</b:includable>
    <b:includable id='description'>
  <div class='descriptionwrapper'>
    <h2 class='site-description'><data:description/></h2>
  </div>
</b:includable>
    <b:includable id='title'>
<a expr:href='data:blog.homepageUrl'><data:title/></a>
</b:includable>
  </b:widget>
</b:section>
</div><!-- #branding -->
</div><!-- .wrap -->
</div><!-- #header -->

		
<div class='menu-container' id='menu-primary'>
<div class='wrap'>
<div class='menu'>

   <ul>
<li><a class='dropdown' href='http://thietkethiconghoboi.com/'>THIẾT BỊ HỒ BƠI</a>
<ul class='menus'>
<li><a href='http://thietkethiconghoboi.com/' title='Cung thiết bị hồ bơi giá rẻ'>Cung thiết bị hồ bơi giá rẻ</a></li>
<li><a href='http://thietkethiconghoboi.com/' title='Lắp đặt thiết bị hồ bơi giá rẻ'>Lắp đặt thiết bị hồ bơi giá rẻ</a></li>
<li><a href='http://thietkethiconghoboi.com/' title='Thiết bị bể bơi bốn mùa'>Thiết bị bể bơi bốn mùa</a></li>
<li><a href='http://thietkethiconghoboi.com/' title='Thiết bị bể bơi bốn mùa'>Lắp đặt thiết bị bể bơi gia đình</a></li>

</ul>
</li>
<li><a class='dropdown' href='http://thietkethiconghoboi.com/'>THIẾT KẾ HỒ BƠI</a>
<ul class='menus'>
<li><a href='http://thietkethiconghoboi.com/' title='Thiết kế hồ bơi gia đình'>Thiết kế hồ bơi gia đình</a></li>
<li><a href='http://thietkethiconghoboi.com/' title='Thiết kế hồ bơi mini trong nhà phố'>Thiết kế hồ bơi mini trong nhà phố</a></li>
<li><a href='http://thietkethiconghoboi.com/' title='Thiết kế hồ bơi kinh doanh'>Thiết kế hồ bơi kinh doanh</a></li>
<li><a href='http://thietkethiconghoboi.com/' title='Thiết kế hồ bơi trên sân thượng'>Thiết kế hồ bơi trên sân thượng</a></li>
<li><a href='http://thietkethiconghoboi.com/' title='Công ty thiết kế xây dựng hồ bơi'>Công ty thiết kế xây dựng hồ bơi</a></li>
<li><a href='http://thietkethiconghoboi.com/' title='Thiết kế bể bơi thông minh'>Thiết kế bể bơi thông minh</a></li>
<li><a href='http://thietkethiconghoboi.com/' title='Mẫu thiết kế hồ bơi'>Mẫu thiết kế hồ bơi</a></li>

</ul>
</li>
<li><a class='dropdown' href='http://www.giaiphapthuonghieu.net/2014/07/thiet-ke-website-bat-dong-san-bds-chuan-seo.html'>Menu chính 2</a>
<ul class='menus'>
<li><a href='#' title='Menu con 1'>Menu con 1</a></li>
<li><a href='#' title='Menu con 2'>Menu con 2</a></li>
<li><a href='#' title='Menu con 3'>Menu con 3</a></li>
</ul>
</li>
<li><a class='dropdown' href='http://www.giaiphapthuonghieu.net/2014/07/bang-bao-gia-dich-vu-seo-website-top-google.html'>Menu Chính 3</a>
<ul class='menus'>
<li><a href='#' title='Menu con 1'>Menu con 1</a></li>
<li><a href='#' title='Menu con 2'>Menu con 2</a></li>
<li><a href='#' title='Menu con 3'>Menu con 3</a></li>
</ul>
</li>
<li><a class='dropdown' href='http://www.giaiphapthuonghieu.net/2014/07/bang-gia-quang-cao-google-adwords-moi.html'>Menu Chính 4</a>
<ul class='menus'>
<li><a href='#' title='Menu con 1'>Menu con 1</a></li>
<li><a href='#' title='Menu con 2'>Menu con 2</a></li>
<li><a href='#' title='Menu con 3'>Menu con 3</a></li>
</ul>
</li>

<li><a href='#'>Hotline: 01694448411</a></li>
</ul>
</div>

<div id='social-wrap'>
<ul id='social'>
<li><a href='#' id='facebook' ref='nofollow' title='Facebook'/></li>
<li><a href='#' id='twitter' ref='nofollow' title='Twitter'/></li>
<li><a href='#' id='youtube' ref='nofollow' title='Youtube Channel'/></li>
<li><a href='#' id='linkedin' ref='nofollow' title='Linkedin'/></li>
<li><a href='#' id='pinterest' ref='nofollow' title='Pinterest'/></li>
</ul>
</div>
</div>
</div><!-- #menu-primary .menu-container -->

<!-- featured post slider started -->
<b:if cond='data:blog.pageType != &quot;static_page&quot;'>
<b:if cond='data:blog.pageType != &quot;item&quot;'>

<div id='slider-wrap'>
<div id='slider'>
<ul>

<!-- slide 1 code start -->
<li>
   <div class='slider-entry'>
      <h2 class='slider-entry-title'><a href='http://thietkethiconghoboi.com/nhung-mau-thiet-ke-ho-boi-dep-nhat-2/'>NHỮNG MẪU THIẾT KẾ HỒ BƠI ĐẸP NHẤT</a></h2>
      <p>Gía thành thiết kế hồ bơi chịu ảnh hưởng bởi nhiều yếu tố, do đó nếu bạn không phải người chuyên nghiệp về lĩnh vực này thì bạn sẽ không thể đưa ra giá chính xác, cũng như không thể biết được giá cả thế nào là hợp lý? Hãy đến với chúng tôi là doanh nghiệp chuyên về lĩnh vực thiết kế và thi công bể bơi. Đến với chúng tôi, quý khách sẽ có được một bể bơi như ý với giá cả phải chăng và dịch vụ bảo dưỡng, bảo hành tốt nhất. Minh Nhuận Phát là sự lựa chọn tốt nhất cho bạn, nơi thiết kế bể bơi giá rẻ tại thành phố Hồ Chí Minh. Công ty Minh Nhuận Phát chuyên xây dựng hồ bơi cho các công trình công cộng, nhà ở, khách sạn, trường học...</p>
      <a class='more-link' href='http://thietkethiconghoboi.com/nhung-mau-thiet-ke-ho-boi-dep-nhat-2/'>Đọc thêm</a>					
   </div>

   <a href='http://goo.gl/xr40Ak'><img height='340' src='http://thietkethiconghoboi.com/wp-content/uploads/2016/05/02-1050x300.jpg' width='750'/></a>
</li>
<!-- slide 1 code end -->

<!-- slide 2 code start -->
<li>
   <div class='slider-entry'>
      <h2 class='slider-entry-title'><a href='http://thietkethiconghoboi.com/cua-hang/cung-cap-thiet-bi-loc-nuoc-ho-boi-tuan-hoan/'>CUNG CẤP THIẾT BỊ LỌC NƯỚC HỒ BƠI TUẦN HOÀN GIÁ RẺ TẠI TPHCM</a></h2>
      <p>Ngoài phần thiết kế xây dựng. Thì một bể bơi hoàn chỉnh còn cần nhiều thiết bị đi kèm như: máy lọc, máy bơm, xử lý nước, đèn,&#8230;.Do đó, bảng báo giá thiết bị bể bơi là vấn đề mà các khách hàng quan tâm hàng đầu...</p>
      <a class='more-link' href='http://thietkethiconghoboi.com/cua-hang/cung-cap-thiet-bi-loc-nuoc-ho-boi-tuan-hoan/'>Đọc thêm</a>					
   </div>

   <a href='http://goo.gl/edvAkE'><img height='340' src='http://thietkethiconghoboi.com/wp-content/uploads/2016/05/01-1050x300.jpg' width='750'/></a>
</li>
<!-- slide 2 code end -->

<!-- slide 3 code start -->
<li>
   <div class='slider-entry'>
      <h2 class='slider-entry-title'><a href='http://thietkethiconghoboi.com/thiet-ke-thi-cong-ho-boi-tai-tphcm/'>THIẾT KẾ THI CÔNG HỒ BƠI TẠI TPHCM</a></h2>
      <p>Công ty Minh Nhuận Phát chuyên tư vấn, thi công xây dựng hồ bơi áp dụng những công nghệ mới, với đội ngũ thiết kế chuyên nghiệp, chúng tôi có thể tư vấn giúp quý khách chọn không gian cũng như kiểu thiết kế hồ bơi sao cho phù hợp nhất với căn nhà của bạn...</p>
      <a class='more-link' href='http://thietkethiconghoboi.com/thiet-ke-thi-cong-ho-boi-tai-tphcm/'>Đọc thêm
</a>					
   </div>

   <a href='http://goo.gl/kFEl9R'><img height='340' src='http://thietkethiconghoboi.com/wp-content/uploads/2016/05/03-1050x300.jpg' width='750'/></a>
</li>
<!-- slide 3 code end -->

</ul>		
</div><!--#slider-->
</div><!--#slider-wrap-->

</b:if>
</b:if>
<!-- featured post slider end -->

<div id='main'>
<div class='wrap'>
<div id='content'>
<div class='hfeedbsite'>
<b:section class='mainblogsec' id='mainblogsec' showaddelement='no'>
  <b:widget id='Blog1' locked='true' title='Bài đăng trên Blog' type='Blog' version='1' visible='true'>
    <b:includable id='main' var='top'>
  <b:if cond='data:mobile == &quot;false&quot;'>

    <!-- posts -->
    <div class='blog-posts hfeed'>

      <b:include data='top' name='status-message'/>

      <data:defaultAdStart/>
      <b:loop values='data:posts' var='post'>
        <b:if cond='data:post.isDateStart'>
          <b:if cond='data:post.isFirstPost == &quot;false&quot;'>
            &lt;/div&gt;&lt;/div&gt;
          </b:if>
        </b:if>
        <b:if cond='data:post.isDateStart'>
          &lt;div class=&quot;date-outer&quot;&gt;
        </b:if>
        <b:if cond='data:post.dateHeader'>
          <h2 class='date-header'><span><data:post.dateHeader/></span></h2>
        </b:if>
        <b:if cond='data:post.isDateStart'>
          &lt;div class=&quot;date-posts&quot;&gt;
        </b:if>
        <div class='post-outer'>
        <b:include data='post' name='post'/>
        <b:if cond='data:blog.pageType == &quot;static_page&quot;'>
          <b:if cond='data:post.showThreadedComments'>
            <b:include data='post' name='threaded_comments'/>
          <b:else/>
            <b:include data='post' name='comments'/>
          </b:if>
        </b:if>
        <b:if cond='data:blog.pageType == &quot;item&quot;'>
          <b:if cond='data:post.showThreadedComments'>
            <b:include data='post' name='threaded_comments'/>
          <b:else/>
            <b:include data='post' name='comments'/>
          </b:if>
        </b:if>
        </div>
        <b:if cond='data:post.includeAd'>
          <b:if cond='data:post.isFirstPost'>
            <data:defaultAdEnd/>
          <b:else/>
            <data:adEnd/>
          </b:if>
          <div class='inline-ad'>
            <data:adCode/>
          </div>
          <data:adStart/>
        </b:if>
      </b:loop>
      <b:if cond='data:numPosts != 0'>
        &lt;/div&gt;&lt;/div&gt;
      </b:if>
      <data:adEnd/>
    </div>

<div style='clear: both;'/>
<b:if cond='data:blog.pageType != &quot;item&quot;'>
<!-- navigation -->
<b:include name='nextprev'/>
</b:if>

    <!-- feed links -->
    <b:include name='feedLinks'/>

    <b:if cond='data:top.showStars'>
      <script src='//www.google.com/jsapi' type='text/javascript'/>
      <script type='text/javascript'>
        google.load(&quot;annotations&quot;, &quot;1&quot;, {&quot;locale&quot;: &quot;<data:top.languageCode/>&quot;});
        function initialize() {
          google.annotations.setApplicationId(<data:top.blogspotReviews/>);
          google.annotations.createAll();
          google.annotations.fetch();
        }
        google.setOnLoadCallback(initialize);
      </script>
    </b:if>

  <b:else/>
    <b:include name='mobile-main'/>
  </b:if>

  
  
  <b:if cond='data:top.showDummy'>
    <data:top.dummyBootstrap/>
  </b:if>

</b:includable>
    <b:includable id='backlinkDeleteIcon' var='backlink'>
  <span expr:class='&quot;item-control &quot; + data:backlink.adminClass'>
    <a expr:href='data:backlink.deleteUrl' expr:title='data:top.deleteBacklinkMsg'>
      <img src='https://resources.blogblog.com/img/icon_delete13.gif'/>
    </a>
  </span>
</b:includable>
    <b:includable id='backlinks' var='post'>
  <a name='links'/><h4><data:post.backlinksLabel/></h4>
  <b:if cond='data:post.numBacklinks != 0'>
    <dl class='comments-block' id='comments-block'>
      <b:loop values='data:post.backlinks' var='backlink'>
        <div class='collapsed-backlink backlink-control'>
          <dt class='comment-title'>
            <span class='backlink-toggle-zippy'>&#160;</span>
            <a expr:href='data:backlink.url' rel='nofollow'><data:backlink.title/></a>
            <b:include data='backlink' name='backlinkDeleteIcon'/>
          </dt>
          <dd class='comment-body collapseable'>
            <data:backlink.snippet/>
          </dd>
          <dd class='comment-footer collapseable'>
            <span class='comment-author'><data:post.authorLabel/> <data:backlink.author/></span>
            <span class='comment-timestamp'><data:post.timestampLabel/> <data:backlink.timestamp/></span>
          </dd>
        </div>
      </b:loop>
    </dl>
  </b:if>
  <p class='comment-footer'>
    <a class='comment-link' expr:href='data:post.createLinkUrl' expr:id='data:widget.instanceId + &quot;_backlinks-create-link&quot;' target='_blank'><data:post.createLinkLabel/></a>
  </p>
</b:includable>
    <b:includable id='comment-form' var='post'>
  <div class='comment-form'>
    <a name='comment-form'/>
    <b:if cond='data:mobile'>
      <h4 id='comment-post-message'>
        <a expr:id='data:widget.instanceId + &quot;_comment-editor-toggle-link&quot;' href='javascript:void(0)'><data:postCommentMsg/></a></h4>
      <p><data:blogCommentMessage/></p>
      <data:blogTeamBlogMessage/>
      <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
      <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' frameborder='0' height='410' id='comment-editor' name='comment-editor' src='' style='display: none' width='100%'/>
    <b:else/>
      <h4 id='comment-post-message'><data:postCommentMsg/></h4>
      <p><data:blogCommentMessage/></p>
      <data:blogTeamBlogMessage/>
      <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
      <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' frameborder='0' height='410' id='comment-editor' name='comment-editor' src='' width='100%'/>
    </b:if>
    <data:post.friendConnectJs/>
    <data:post.cmtfpIframe/>
    <script type='text/javascript'>
      BLOG_CMT_createIframe(&#39;<data:post.appRpcRelayPath/>&#39;, &#39;<data:post.communityId/>&#39;);
    </script>
  </div>
</b:includable>
    <b:includable id='commentDeleteIcon' var='comment'>
  <span expr:class='&quot;item-control &quot; + data:comment.adminClass'>
    <b:if cond='data:showCmtPopup'>
      <div class='goog-toggle-button'>
        <div class='goog-inline-block comment-action-icon'/>
      </div>
    <b:else/>
      <a class='comment-delete' expr:href='data:comment.deleteUrl' expr:title='data:top.deleteCommentMsg'>
        <img src='https://resources.blogblog.com/img/icon_delete13.gif'/>
      </a>
    </b:if>
  </span>
</b:includable>
    <b:includable id='comment_count_picker' var='post'>
  <b:if cond='data:post.commentSource == 1'>
    <span class='cmt_count_iframe_holder' expr:data-count='data:post.numComments' expr:data-onclick='data:post.addCommentOnclick' expr:data-post-url='data:post.url' expr:data-url='data:post.url.canonical.http'>
    </span>
  <b:else/>
    <a class='comment-link' expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'>
      <data:post.commentLabelFull/>:
    </a>
  </b:if>
</b:includable>
    <b:includable id='comment_picker' var='post'>
  <b:if cond='data:post.commentSource == 1'>
    <b:include data='post' name='iframe_comments'/>
  <b:else/>
    <b:if cond='data:post.showThreadedComments'>
      <b:include data='post' name='threaded_comments'/>
    <b:else/>
      <b:include data='post' name='comments'/>
    </b:if>
  </b:if>
</b:includable>
    <b:includable id='comments' var='post'>
<div class='cmt_iframe_holder' expr:data-href='data:post.canonicalUrl' expr:data-viewtype='data:post.viewType'/>
</b:includable>
    <b:includable id='feedLinks'>
  <b:if cond='data:blog.pageType != &quot;item&quot;'> <!-- Blog feed links -->
    <b:if cond='data:feedLinks'>
      <div class='blog-feeds'>
        <b:include data='feedLinks' name='feedLinksBody'/>
      </div>
    </b:if>

    <b:else/> <!--Post feed links -->
    <div class='post-feeds'>
      <b:loop values='data:posts' var='post'>
        <b:if cond='data:post.allowComments'>
          <b:if cond='data:post.feedLinks'>
            <b:include data='post.feedLinks' name='feedLinksBody'/>
          </b:if>
        </b:if>
      </b:loop>
    </div>
  </b:if>
</b:includable>
    <b:includable id='feedLinksBody' var='links'>
  <div class='feed-links'>
  <data:feedLinksMsg/>
  <b:loop values='data:links' var='f'>
     <a class='feed-link' expr:href='data:f.url' expr:type='data:f.mimeType' target='_blank'><data:f.name/> (<data:f.feedType/>)</a>
  </b:loop>
  </div>
</b:includable>
    <b:includable id='iframe_comments' var='post'>

  <b:if cond='data:post.allowComments'>
    <script expr:src='data:post.commentSrc' type='text/javascript'/>
    <div class='cmt_iframe_holder'/>

    <b:if cond='data:post.embedCommentForm == &quot;false&quot;'>
      <a expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'><data:postCommentMsg/></a>
    </b:if>
  </b:if>
</b:includable>
    <b:includable id='mobile-index-post' var='post'>
  <div class='mobile-date-outer date-outer'>
    <b:if cond='data:post.dateHeader'>
      <div class='date-header'>
        <span><data:post.dateHeader/></span>
      </div>
    </b:if>

    <div class='mobile-post-outer'>
      <a expr:href='data:post.url'>
        <h3 class='mobile-index-title entry-title'>
          <data:post.title/>
        </h3>

        <div class='mobile-index-arrow'>&amp;rsaquo;</div>

        <div class='mobile-index-contents'>
          <b:if cond='data:post.thumbnailUrl'>
            <div class='mobile-index-thumbnail'>
              <div class='Image'>
                <img expr:src='data:post.thumbnailUrl'/>
              </div>
            </div>
          </b:if>

          <div class='post-body'>
            <b:if cond='data:post.snippet'><data:post.snippet/></b:if>
          </div>
        </div>

        <div style='clear: both;'/>
      </a>

      <div class='mobile-index-comment'>
        <b:if cond='data:blog.pageType != &quot;static_page&quot;'>
          <b:if cond='data:post.allowComments'>
            <b:if cond='data:post.numComments != 0'>
              <a class='comment-link' expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'><b:if cond='data:post.numComments == 1'>1 <data:top.commentLabel/><b:else/><data:post.numComments/> <data:top.commentLabelPlural/></b:if></a>
            </b:if>
          </b:if>
        </b:if>
      </div>
    </div>
  </div>
</b:includable>
    <b:includable id='mobile-main' var='top'>
    <!-- posts -->
    <div class='blog-posts hfeed'>

      <b:include data='top' name='status-message'/>

      <b:if cond='data:blog.pageType == &quot;index&quot;'>
        <b:loop values='data:posts' var='post'>
          <b:include data='post' name='mobile-index-post'/>
        </b:loop>
      <b:else/>
        <b:loop values='data:posts' var='post'>
          <b:include data='post' name='mobile-post'/>
        </b:loop>
      </b:if>
    </div>

   <b:include name='mobile-nextprev'/>
</b:includable>
    <b:includable id='mobile-nextprev'>
  <div class='blog-pager' id='blog-pager'>
    <b:if cond='data:newerPageUrl'>
      <div class='mobile-link-button' id='blog-pager-newer-link'>
      <a class='blog-pager-newer-link' expr:href='data:newerPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-newer-link&quot;' expr:title='data:newerPageTitle'>&amp;lsaquo;</a>
      </div>
    </b:if>

    <b:if cond='data:olderPageUrl'>
      <div class='mobile-link-button' id='blog-pager-older-link'>
      <a class='blog-pager-older-link' expr:href='data:olderPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-older-link&quot;' expr:title='data:olderPageTitle'>&amp;rsaquo;</a>
      </div>
    </b:if>

    <div class='mobile-link-button' id='blog-pager-home-link'>
    <a class='home-link' expr:href='data:blog.homepageUrl'><data:homeMsg/></a>
    </div>

    <div class='mobile-desktop-link'>
      <a class='home-link' expr:href='data:desktopLinkUrl'><data:desktopLinkMsg/></a>
    </div>

  </div>
  <div class='clear'/>
</b:includable>
    <b:includable id='mobile-post' var='post'>
  <div class='date-outer'>
    <b:if cond='data:post.dateHeader'>
      <h2 class='date-header'><span><data:post.dateHeader/></span></h2>
    </b:if>
    <div class='date-posts'>
      <div class='post-outer'>

        <div class='post hentry uncustomized-post-template'>
          <a expr:name='data:post.id'/>
          <b:if cond='data:post.title'>
            <h3 class='post-title entry-title'>
              <b:if cond='data:post.link'>
                <a expr:href='data:post.link'><data:post.title/></a>
              <b:else/>
                <b:if cond='data:post.url'>
                  <b:if cond='data:blog.url != data:post.url'>
                    <a expr:href='data:post.url'><data:post.title/></a>
                  <b:else/>
                    <data:post.title/>
                  </b:if>
                <b:else/>
                  <data:post.title/>
                </b:if>
              </b:if>
            </h3>
          </b:if>

          <div class='post-header'>
            <div class='post-header-line-1'/>
          </div>

          <div class='post-body entry-content' expr:id='&quot;post-body-&quot; + data:post.id'>
            <data:post.body/>
            <div style='clear: both;'/> <!-- clear for photos floats -->
          </div>

          <div class='post-footer'>
            <div class='post-footer-line post-footer-line-1'>
              <span class='post-author vcard'>
                <b:if cond='data:top.showAuthor'>
                  <b:if cond='data:post.authorProfileUrl'>
                    <span class='fn'>
                      <a expr:href='data:post.authorProfileUrl' rel='author' title='author profile'>
                        <data:post.author/>
                      </a>
                    </span>
                  <b:else/>
                    <span class='fn'><data:post.author/></span>
                  </b:if>
                </b:if>
              </span>

              <span class='post-timestamp'>
                <b:if cond='data:top.showTimestamp'>
                  <data:top.timestampLabel/>
                  <b:if cond='data:post.url'>
                    <a class='timestamp-link' expr:href='data:post.url' rel='bookmark' title='permanent link'><abbr class='published' expr:title='data:post.timestampISO8601'><data:post.timestamp/></abbr></a>
                  </b:if>
                </b:if>
              </span>

              <span class='post-comment-link'>
                <b:if cond='data:blog.pageType != &quot;item&quot;'>
                  <b:if cond='data:blog.pageType != &quot;static_page&quot;'>
                    <b:if cond='data:post.allowComments'>
                      <a class='comment-link' expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'><b:if cond='data:post.numComments == 1'>1 <data:top.commentLabel/><b:else/><data:post.numComments/> <data:top.commentLabelPlural/></b:if></a>
                    </b:if>
                  </b:if>
                </b:if>
              </span>
            </div>

            <div class='post-footer-line post-footer-line-2'>
              <b:if cond='data:top.showMobileShare'>
                <div class='mobile-link-button goog-inline-block' id='mobile-share-button'>
                  <a href='javascript:void(0);'><data:shareMsg/></a>
                </div>
              </b:if>
              <b:if cond='data:top.showDummy'>
                <div class='goog-inline-block dummy-container'><data:post.dummyTag/></div>
              </b:if>
            </div>

          </div>
        </div>

        <b:if cond='data:blog.pageType == &quot;static_page&quot;'>
          <b:if cond='data:post.showThreadedComments'>
            <b:include data='post' name='threaded_comments'/>
          <b:else/>
            <b:include data='post' name='comments'/>
          </b:if>
        </b:if>
        <b:if cond='data:blog.pageType == &quot;item&quot;'>
          <b:if cond='data:post.showThreadedComments'>
            <b:include data='post' name='threaded_comments'/>
          <b:else/>
            <b:include data='post' name='comments'/>
          </b:if>
        </b:if>
      </div>
    </div>
  </div>
</b:includable>
    <b:includable id='nextprev'>
  <div class='blog-pager' id='blog-pager'>
    <b:if cond='data:newerPageUrl'>
      <span id='blog-pager-newer-link'>
      <a class='blog-pager-newer-link' expr:href='data:newerPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-newer-link&quot;' expr:title='data:newerPageTitle'><data:newerPageTitle/></a>
      </span>
    </b:if>

    <b:if cond='data:olderPageUrl'>
      <span id='blog-pager-older-link'>
      <a class='blog-pager-older-link' expr:href='data:olderPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-older-link&quot;' expr:title='data:olderPageTitle'><data:olderPageTitle/></a>
      </span>
    </b:if>

    <a class='home-link' expr:href='data:blog.homepageUrl'><data:homeMsg/></a>

    <b:if cond='data:mobileLinkUrl'>
      <div class='blog-mobile-link'>
        <a expr:href='data:mobileLinkUrl'><data:mobileLinkMsg/></a>
      </div>
    </b:if>

  </div>
  <div class='clear'/>
</b:includable>
    <b:includable id='post' var='post'>
<div class='post hentry'>

<a expr:name='data:post.id'/>
<b:if cond='data:blog.pageType != &quot;static_page&quot;'>
<b:if cond='data:blog.pageType != &quot;item&quot;'>
<script type='text/javascript'>
       var timestamp = &quot;<data:post.timestamp/>&quot;;
       if (timestamp != &#39;&#39;) {
               var timesplit = timestamp.split(&quot;,&quot;);
               var date_yyyy = timesplit[2];
               var timesplit = timesplit[1].split(&quot; &quot;);
               var date_dd = timesplit[2];
               var date_mmm = timesplit[1].substring(0, 3);
       }
</script>	
<div class='entry-info'>
<div class='top-info'><a class='comments-link' expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'><b:if cond='data:post.numComments == 0'><span class='emp'>0 </span>comments</b:if><b:if cond='data:post.numComments == 1'><span class='emp'>1 </span>comment</b:if><b:if cond='data:post.numComments &gt;= 2'><span class='emp'><data:post.numComments/> </span>comments</b:if></a> </div>
<div class='entry-meta'>
<span><data:post.author/></span><span class='category'><b:loop values='data:post.labels' var='label'><a expr:href='data:label.url' rel='tag'><data:label.name/></a><b:if cond='data:label.isLast != &quot;true&quot;'>, </b:if></b:loop></span>
</div>
</div>
</b:if>
</b:if>

<div class='post-content'>
      <h1 class='post-title entry-title'>
     <b:if cond='data:post.link'>
       <a expr:href='data:post.link'><data:post.title/></a>
     <b:else/>
        <b:if cond='data:post.url'>
          <a expr:href='data:post.url'><data:post.title/></a>
        <b:else/>
          <data:post.title/>
        </b:if>
     </b:if>
      </h1>
	  
<b:if cond='data:blog.pageType == &quot;item&quot;'>
<div style='margin:10px 0px;'>
Posted by <data:post.author/> on <data:post.timestamp/><b:if cond='data:post.allowComments'> with <a expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'><b:if cond='data:post.numComments == 0'>No comments</b:if><b:if cond='data:post.numComments == 1'>1 comment</b:if><b:if cond='data:post.numComments &gt;= 2'><data:post.numComments/> comments</b:if></a></b:if>
</div>
<div class='clear'/>
</b:if>

<div class='post-header-line-1'/>

<div class='post-body entry-content entry-summary'>

<b:if cond='data:blog.pageType != &quot;static_page&quot;'>
<b:if cond='data:blog.pageType != &quot;item&quot;'>
<div expr:id='&quot;summary&quot; + data:post.id'><data:post.body/></div>
<script type='text/javascript'>createSummaryAndThumb(&quot;summary<data:post.id/>&quot;);</script>
</b:if>
</b:if>
<b:if cond='data:blog.pageType == &quot;item&quot;'><data:post.body/></b:if>

<b:if cond='data:blog.pageType == &quot;static_page&quot;'><data:post.body/></b:if>

<b:if cond='data:blog.pageType != &quot;static_page&quot;'>
<b:if cond='data:blog.pageType != &quot;item&quot;'>
<div style='float:right;padding-right:10px;margin-top:10px;'>
<a class='more-link' expr:href='data:post.url'>Đọc thêm</a>
</div>
</b:if>
</b:if>

<b:if cond='data:blog.pageType == &quot;item&quot;'>
<div style='clear:both;'/>
<div class='post-share-buttons'>
<b:include data='post' name='shareButtons'/>
</div>
<span class='reaction-buttons'>
<b:if cond='data:top.showReactions'>
<table border='0' cellpadding='0' width='100%'><tr>
<td style='font-size:12px;padding-top:2px;' valign='top'><span class='reactions-label'><data:top.reactionsLabel/></span></td>
<td><iframe allowtransparency='true' class='reactions-iframe' expr:src='data:post.reactionsUrl' frameborder='0' name='reactions' scrolling='no'/></td>
</tr></table>
</b:if>
</span>
</b:if>

      <div style='clear: both;'/> <!-- clear for photos floats -->
</div>

<b:if cond='data:blog.pageType == &quot;item&quot;'>
<div style='margin:10px 0px;'>
<b:if cond='data:post.labels'>Categories: <b:loop values='data:post.labels' var='label'><a expr:href='data:label.url' rel='tag'><data:label.name/></a><b:if cond='data:label.isLast != &quot;true&quot;'>, </b:if></b:loop></b:if>			
</div>
<div style='clear: both;'/>
</b:if>

</div>

</div>
<div style='clear: both;'/>

<b:if cond='data:blog.pageType == &quot;item&quot;'>
<!-- navigation -->
<b:include name='nextprev'/>
</b:if>

</b:includable>
    <b:includable id='postQuickEdit' var='post'>
  <b:if cond='data:post.editUrl'>
    <span expr:class='&quot;item-control &quot; + data:post.adminClass'>
      <a expr:href='data:post.editUrl' expr:title='data:top.editPostMsg'>
        <img alt='' class='icon-action' height='18' src='http://img2.blogblog.com/img/icon18_edit_allbkg.gif' width='18'/>
      </a>
    </span>
  </b:if>
</b:includable>
    <b:includable id='shareButtons' var='post'>
  <b:if cond='data:top.showEmailButton'><a class='goog-inline-block share-button sb-email' expr:href='data:post.sharePostUrl + &quot;&amp;target=email&quot;' expr:title='data:top.emailThisMsg' target='_blank'><span class='share-button-link-text'><data:top.emailThisMsg/></span></a></b:if><b:if cond='data:top.showBlogThisButton'><a class='goog-inline-block share-button sb-blog' expr:href='data:post.sharePostUrl + &quot;&amp;target=blog&quot;' expr:onclick='&quot;window.open(this.href, \&quot;_blank\&quot;, \&quot;height=270,width=475\&quot;); return false;&quot;' expr:title='data:top.blogThisMsg' target='_blank'><span class='share-button-link-text'><data:top.blogThisMsg/></span></a></b:if><b:if cond='data:top.showTwitterButton'><a class='goog-inline-block share-button sb-twitter' expr:href='data:post.sharePostUrl + &quot;&amp;target=twitter&quot;' expr:title='data:top.shareToTwitterMsg' target='_blank'><span class='share-button-link-text'><data:top.shareToTwitterMsg/></span></a></b:if><b:if cond='data:top.showFacebookButton'><a class='goog-inline-block share-button sb-facebook' expr:href='data:post.sharePostUrl + &quot;&amp;target=facebook&quot;' expr:onclick='&quot;window.open(this.href, \&quot;_blank\&quot;, \&quot;height=430,width=640\&quot;); return false;&quot;' expr:title='data:top.shareToFacebookMsg' target='_blank'><span class='share-button-link-text'><data:top.shareToFacebookMsg/></span></a></b:if><b:if cond='data:top.showOrkutButton'><a class='goog-inline-block share-button sb-orkut' expr:href='data:post.sharePostUrl + &quot;&amp;target=orkut&quot;' expr:title='data:top.shareToOrkutMsg' target='_blank'><span class='share-button-link-text'><data:top.shareToOrkutMsg/></span></a></b:if><b:if cond='data:top.showDummy'><div class='goog-inline-block dummy-container'><data:post.dummyTag/></div></b:if>
</b:includable>
    <b:includable id='status-message'>
  <b:if cond='data:navMessage'>
  <div class='status-msg-wrap'>
    <div class='status-msg-body'>
      <data:navMessage/>
    </div>
    <div class='status-msg-border'>
      <div class='status-msg-bg'>
        <div class='status-msg-hidden'><data:navMessage/></div>
      </div>
    </div>
  </div>
  <div style='clear: both;'/>
  </b:if>
</b:includable>
    <b:includable id='threaded-comment-form' var='post'>
  <div class='comment-form'>
    <a name='comment-form'/>
    <b:if cond='data:mobile'>
      <p><data:blogCommentMessage/></p>
      <data:blogTeamBlogMessage/>
      <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
      <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' frameborder='0' height='410' id='comment-editor' name='comment-editor' src='' style='display: none' width='100%'/>
    <b:else/>
      <p><data:blogCommentMessage/></p>
      <data:blogTeamBlogMessage/>
      <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
      <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' frameborder='0' height='410' id='comment-editor' name='comment-editor' src='' width='100%'/>
    </b:if>
    <data:post.friendConnectJs/>
    <data:post.cmtfpIframe/>
    <script type='text/javascript'>
      BLOG_CMT_createIframe(&#39;<data:post.appRpcRelayPath/>&#39;, &#39;<data:post.communityId/>&#39;);
    </script>
  </div>
</b:includable>
    <b:includable id='threaded_comment_js' var='post'>
  <script async='async' expr:src='data:post.commentSrc' type='text/javascript'/>

  <script type='text/javascript'>
    (function() {
      var items = <data:post.commentJso/>;
      var msgs = <data:post.commentMsgs/>;
      var config = <data:post.commentConfig/>;

// <![CDATA[
      var cursor = null;
      if (items && items.length > 0) {
        cursor = parseInt(items[items.length - 1].timestamp) + 1;
      }

      var bodyFromEntry = function(entry) {
        if (entry.gd$extendedProperty) {
          for (var k in entry.gd$extendedProperty) {
            if (entry.gd$extendedProperty[k].name == 'blogger.contentRemoved') {
              return '<span class="deleted-comment">' + entry.content.$t + '</span>';
            }
          }
        }
        return entry.content.$t;
      }

      var parse = function(data) {
        cursor = null;
        var comments = [];
        if (data && data.feed && data.feed.entry) {
          for (var i = 0, entry; entry = data.feed.entry[i]; i++) {
            var comment = {};
            // comment ID, parsed out of the original id format
            var id = /blog-(\d+).post-(\d+)/.exec(entry.id.$t);
            comment.id = id ? id[2] : null;
            comment.body = bodyFromEntry(entry);
            comment.timestamp = Date.parse(entry.published.$t) + '';
            if (entry.author && entry.author.constructor === Array) {
              var auth = entry.author[0];
              if (auth) {
                comment.author = {
                  name: (auth.name ? auth.name.$t : undefined),
                  profileUrl: (auth.uri ? auth.uri.$t : undefined),
                  avatarUrl: (auth.gd$image ? auth.gd$image.src : undefined)
                };
              }
            }
            if (entry.link) {
              if (entry.link[2]) {
                comment.link = comment.permalink = entry.link[2].href;
              }
              if (entry.link[3]) {
                var pid = /.*comments\/default\/(\d+)\?.*/.exec(entry.link[3].href);
                if (pid && pid[1]) {
                  comment.parentId = pid[1];
                }
              }
            }
            comment.deleteclass = 'item-control blog-admin';
            if (entry.gd$extendedProperty) {
              for (var k in entry.gd$extendedProperty) {
                if (entry.gd$extendedProperty[k].name == 'blogger.itemClass') {
                  comment.deleteclass += ' ' + entry.gd$extendedProperty[k].value;
                }
              }
            }
            comments.push(comment);
          }
        }
        return comments;
      };

      var paginator = function(callback) {
        if (hasMore()) {
          var url = config.feed + '?alt=json&v=2&orderby=published&reverse=false&max-results=50';
          if (cursor) {
            url += '&published-min=' + new Date(cursor).toISOString();
          }
          window.bloggercomments = function(data) {
            var parsed = parse(data);
            cursor = parsed.length < 50 ? null
                : parseInt(parsed[parsed.length - 1].timestamp) + 1
            callback(parsed);
            window.bloggercomments = null;
          }
          url += '&callback=bloggercomments';
          var script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = url;
          document.getElementsByTagName('head')[0].appendChild(script);
        }
      };
      var hasMore = function() {
        return !!cursor;
      };
      var getMeta = function(key, comment) {
        if ('iswriter' == key) {
          var matches = !!comment.author
              && comment.author.name == config.authorName
              && comment.author.profileUrl == config.authorUrl;
          return matches ? 'true' : '';
        } else if ('deletelink' == key) {
          return config.baseUri + '/delete-comment.g?blogID='
               + config.blogId + '&postID=' + comment.id;
        } else if ('deleteclass' == key) {
          return comment.deleteclass;
        }
        return '';
      };

      var replybox = null;
      var replyUrlParts = null;
      var replyParent = undefined;

      var onReply = function(commentId, domId) {
        if (replybox == null) {
          // lazily cache replybox, and adjust to suit this style:
          replybox = document.getElementById('comment-editor');
          if (replybox != null) {
            replybox.height = '250px';
            replybox.style.display = 'block';
            replyUrlParts = replybox.src.split('#');
          }
        }
        if (replybox && (commentId !== replyParent)) {
          document.getElementById(domId).insertBefore(replybox, null);
          replybox.src = replyUrlParts[0]
              + (commentId ? '&parentID=' + commentId : '')
              + '#' + replyUrlParts[1];
          replyParent = commentId;
        }
      };

      var hash = (window.location.hash || '#').substring(1);
      var startThread, targetComment;
      if (/^comment-form_/.test(hash)) {
        startThread = hash.substring('comment-form_'.length);
      } else if (/^c[0-9]+$/.test(hash)) {
        targetComment = hash.substring(1);
      }

      // Configure commenting API:
      var configJso = {
        'maxDepth': config.maxThreadDepth
      };
      var provider = {
        'id': config.postId,
        'data': items,
        'loadNext': paginator,
        'hasMore': hasMore,
        'getMeta': getMeta,
        'onReply': onReply,
        'rendered': true,
        'initComment': targetComment,
        'initReplyThread': startThread,
        'config': configJso,
        'messages': msgs
      };

      var render = function() {
        if (window.goog && window.goog.comments) {
          var holder = document.getElementById('comment-holder');
          window.goog.comments.render(holder, provider);
        }
      };

      // render now, or queue to render when library loads:
      if (window.goog && window.goog.comments) {
        render();
      } else {
        window.goog = window.goog || {};
        window.goog.comments = window.goog.comments || {};
        window.goog.comments.loadQueue = window.goog.comments.loadQueue || [];
        window.goog.comments.loadQueue.push(render);
      }
    })();
// ]]>
  </script>
</b:includable>
    <b:includable id='threaded_comments' var='post'>
  <div class='comments' id='comments'>
    <a name='comments'/>
    <h4><data:post.commentLabelFull/>:</h4>

    <div class='comments-content'>
      <b:if cond='data:post.embedCommentForm'>
        <b:include data='post' name='threaded_comment_js'/>
      </b:if>
      <div id='comment-holder'>
         <data:post.commentHtml/>
      </div>
    </div>

    <p class='comment-footer'>
      <b:if cond='data:post.allowNewComments'>
        <b:include data='post' name='threaded-comment-form'/>
      <b:else/>
        <data:post.noNewCommentsText/>
      </b:if>
    </p>

    <b:if cond='data:showCmtPopup'>
      <div id='comment-popup'>
        <iframe allowtransparency='true' frameborder='0' id='comment-actions' name='comment-actions' scrolling='no'>
        </iframe>
      </div>
    </b:if>

    <div id='backlinks-container'>
    <div expr:id='data:widget.instanceId + &quot;_backlinks-container&quot;'>
       <b:if cond='data:post.showBacklinks'>
         <b:include data='post' name='backlinks'/>
       </b:if>
    </div>
    </div>
  </div>
</b:includable>
  </b:widget>
</b:section>
</div><!-- .hfeed -->
</div><!-- #content -->

<div class='sidebar' id='sidebar-primary'>

<div class='widget'>
   <div class='widget-wrap widget-inside'>
      <h3 class='widget-title'>Search</h3>
      <div class='search'>
         <form action='/search' class='search-form' id='searchform' method='get'>
            <div>
               <input class='search-text' name='q' onblur='if(this.value==&apos;&apos;)this.value=this.defaultValue;' onfocus='if(this.value==this.defaultValue)this.value=&apos;&apos;;' type='text' value='Search this site...'/>
               <input class='search-submit button' type='submit' value='Search'/>
            </div>
         </form>
         <!-- .search-form -->
      </div>
      <!-- .search -->    
   </div>
</div>

<b:section class='sidebartop' id='sidebartop' preferred='yes'>
  <b:widget id='HTML3' locked='false' title='KHÓA HỌC MỚI' type='HTML' version='1' visible='true'>
    <b:includable id='main'>
  <!-- only display title if it's non-empty -->
  <b:if cond='data:title != &quot;&quot;'>
    <h2 class='title'><data:title/></h2>
  </b:if>
  <div class='widget-content'>
    <a href='https://goo.gl/KfdjvB' rel='nofollow' target='_blank'>Cung cấp thiết bị hồ bơi giá rẻ tai TPHCM</a><br/>
	<a href='https://goo.gl/KfdjvB' rel='nofollow' target='_blank'>Thiết kế hồ bơi tai TPHCM</a><br/>
	<a href='https://goo.gl/KfdjvB' rel='nofollow' target='_blank'>Mẫu thiết kế hồ bơi đẹp</a><br/>
	<a href='https://goo.gl/KfdjvB' rel='nofollow' target='_blank'>Lắp đặt thiết bị hồ bơi giá rẻ tai </a><br/>
  </div>

  <b:include name='quickedit'/>
</b:includable>
  </b:widget>
  <b:widget id='HTML1' locked='false' title='LIKE ĐỂ NHẬN TÀI LIỆU SEO' type='HTML' version='1' visible='true'>
    <b:includable id='main'>
  <!-- only display title if it's non-empty -->
  <b:if cond='data:title != &quot;&quot;'>
    <h2 class='title'><data:title/></h2>
  </b:if>
  <div class='widget-content'>

	<iframe allowfullscreen='true' allowtransparency='true' class='' frameborder='0' height='432px' name='f7149a3eca550e' scrolling='no' src='https://www.facebook.com/v2.3/plugins/page.php?app_id=249643311490&amp;channel=https%3A%2F%2Fs-static.ak.facebook.com%2Fconnect%2Fxd_arbiter%2FxRlIuTsSMoE.js%3Fversion%3D41%23cb%3Df2bc201f0ac0b44%26domain%3Ddaotaoseophuyen.wordpress.com%26origin%3Dhttps%253A%252F%252Fdaotaoseophuyen.wordpress.com%252Ff384a87faac952a%26relation%3Dparent.parent&amp;container_width=300&amp;height=432&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Fthietkehoboichuyenghiep&amp;locale=vi_VN&amp;sdk=joey&amp;show_facepile=true&amp;show_posts=false' style='border: medium none; visibility: visible; width: 300px; height: 214px;' title='fb:page Facebook Social Plugin' width='1000px'/>&gt;
  </div>

  <b:include name='quickedit'/>
</b:includable>
  </b:widget>
  <b:widget id='PlusBadge1' locked='false' title='Google+ Badge' type='PlusBadge' version='1' visible='true'>
    <b:includable id='main'>

  <script type='text/javascript'>
  window.___gcfg = {
    lang: &#39;<data:language/>&#39;
  };
  </script>

  <b:if cond='data:title != &quot;&quot;'>
    <h2 class='title'>KẾT NỐI THU HIỀN</h2>
  </b:if>
  <div class='g-person' data-href='//plus.google.com/u/0/118267436462790569743/posts' data-rel='author'/>

<!-- Place this tag after the last widget tag. -->
<script type='text/javascript'>
  (function() {
    var po = document.createElement(&#39;script&#39;); po.type = &#39;text/javascript&#39;; po.async = true;
    po.src = &#39;https://apis.google.com/js/platform.js&#39;;
    var s = document.getElementsByTagName(&#39;script&#39;)[0]; s.parentNode.insertBefore(po, s);
  })();
</script>

</b:includable>
  </b:widget>
  <b:widget id='HTML2' locked='false' title='BÀI VIẾT ĐỌC NHIỀU NHẤT' type='HTML' visible='true'>
    <b:includable id='main'>
  <!-- only display title if it's non-empty -->
  <b:if cond='data:title != &quot;&quot;'>
    <h2 class='title'><data:title/></h2>
  </b:if>
  <div class='widget-content'>
    <data:content/>
  </div>

  <b:include name='quickedit'/>
</b:includable>
  </b:widget>
  <b:widget id='PopularPosts1' locked='false' title='Popular Posts' type='PopularPosts' version='1' visible='true'>
    <b:includable id='main'>
  <b:if cond='data:title'><h2><data:title/></h2></b:if>
  <div class='widget-content popular-posts'>
    <ul>
      <b:loop values='data:posts' var='post'>
      <li>
        <b:if cond='data:showThumbnails == &quot;false&quot;'>
          <b:if cond='data:showSnippets == &quot;false&quot;'>
            <!-- (1) No snippet/thumbnail -->
            <a expr:href='data:post.href'><data:post.title/></a>
          <b:else/>
            <!-- (2) Show only snippets -->
            <div class='item-title'><a expr:href='data:post.href'><data:post.title/></a></div>
            <div class='item-snippet'><data:post.snippet/></div>
          </b:if>
        <b:else/>
          <b:if cond='data:showSnippets == &quot;false&quot;'>
            <!-- (3) Show only thumbnails -->
            <div class='item-thumbnail-only'>
              <b:if cond='data:post.thumbnail'>
                <div class='item-thumbnail'>
                  <a expr:href='data:post.href' target='_blank'>
                    <img alt='' border='0' expr:height='data:thumbnailSize' expr:src='data:post.thumbnail' expr:width='data:thumbnailSize'/>
                  </a>
                </div>
              </b:if>
              <div class='item-title'><a expr:href='data:post.href'><data:post.title/></a></div>
            </div>
            <div style='clear: both;'/>
          <b:else/>
            <!-- (4) Show snippets and thumbnails -->
            <div class='item-content'>
              <b:if cond='data:post.thumbnail'>
                <div class='item-thumbnail'>
                  <a expr:href='data:post.href' target='_blank'>
                    <img alt='' border='0' expr:height='data:thumbnailSize' expr:src='data:post.thumbnail' expr:width='data:thumbnailSize'/>
                  </a>
                </div>
              </b:if>
              <div class='item-title'><a expr:href='data:post.href'><data:post.title/></a></div>
              <div class='item-snippet'><data:post.snippet/></div>
            </div>
            <div style='clear: both;'/>
          </b:if>
        </b:if>
      </li>
      </b:loop>
    </ul>
    <b:include name='quickedit'/>
  </div>
</b:includable>
  </b:widget>
</b:section>		
		
</div><!-- #sidebar-primary .aside -->

</div><!-- .wrap -->
</div><!-- #main -->

<div class='sidebar' id='sidebar-subsidiary'>	
<div class='wrap'>
<div style='float:left;width=20%; height:300px; text-align:center'><img height='100%' src='https://sites.google.com/site/thietkethiconghoboi/_/rsrc/1475733895133/home/cong-ty-xay-dung-ho-boi-tai-tphcm.jpg'/></div>
<div style='float:right; width:50%'>

<iframe frameborder='0' height='300' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.481210790202!2d106.73973215356783!3d10.850957118741498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527c1f286960b%3A0x857e2db7d6750b28!2zWMaw4bufbmcgUXXhuqNuZyBDw6FvIE1pbmggTmh14bqtbiBQaMOhdA!5e0!3m2!1svi!2s!4v1479737706208' style='border:0' width='100%'/>

  </div>
  <div style='clear:both'/>
<br/>
  <div style='color:#fff !important; text-align:center'>&#169; CUNG CẤP THIẾT BIIJ HỒ BƠI <a href='http://thietkethiconghoboi.com' style='color:#fff !important;'>Faceseo</a></div>
</div><!-- .wrap -->
</div><!-- #sidebar-subsidiary .aside -->

<div id='footer'>
<div class='wrap'>

</div><!-- .wrap -->
</div><!-- #footer -->

</div><!-- #container -->

<script type='text/javascript'>
//<![CDATA[

/*
 * 	Easy Slider 1.7 - jQuery plugin
 *	written by Alen Grakalic	
 *	http://cssglobe.com/post/4004/easy-slider-15-the-easiest-jquery-plugin-for-sliding
 *
 *	Copyright (c) 2009 Alen Grakalic (http://cssglobe.com)
 *	Dual licensed under the MIT (MIT-LICENSE.txt)
 *	and GPL (GPL-LICENSE.txt) licenses.
 *
 *	Built for jQuery library
 *	http://jquery.com
 *
 */
 
/*
 *	markup example for $("#slider").easySlider();
 *	
 * 	<div id="slider">
 *		<ul>
 *			<li><img src="images/01.jpg" alt="" /></li>
 *			<li><img src="images/02.jpg" alt="" /></li>
 *			<li><img src="images/03.jpg" alt="" /></li>
 *			<li><img src="images/04.jpg" alt="" /></li>
 *			<li><img src="images/05.jpg" alt="" /></li>
 *		</ul>
 *	</div>
 *
 */

(function($) {

	$.fn.easySlider = function(options){
	  
		// default configuration properties
		var defaults = {			
			prevId: 		'prevBtn',
			prevText: 		'',
			nextId: 		'nextBtn',	
			nextText: 		'',
			controlsShow:	true,
			controlsBefore:	'',
			controlsAfter:	'',	
			controlsFade:	true,
			firstId: 		'firstBtn',
			firstText: 		'First',
			firstShow:		false,
			lastId: 		'lastBtn',	
			lastText: 		'Last',
			lastShow:		false,				
			vertical:		false,
			speed: 			800,
			auto:			false,
			pause:			2000,
			continuous:		false, 
			numeric: 		false,
			numericId: 		'controls'
		}; 
		
		var options = $.extend(defaults, options);  
				
		this.each(function() {  
			var obj = $(this); 				
			var s = $("li", obj).length;
			var w = $("li", obj).width(); 
			var h = $("li", obj).height(); 
			var clickable = true;
			obj.width(w); 
			obj.height(h); 
			obj.css("overflow","hidden");
			var ts = s-1;
			var t = 0;
			$("ul", obj).css('width',s*w);			
			
			if(options.continuous){
				$("ul", obj).prepend($("ul li:last-child", obj).clone().css("margin-left","-"+ w +"px"));
				$("ul", obj).append($("ul li:nth-child(2)", obj).clone());
				$("ul", obj).css('width',(s+1)*w);
			};				
			
			if(!options.vertical) $("li", obj).css('float','left');
								
			if(options.controlsShow){
				var html = options.controlsBefore;				
				if(options.numeric){
					html += '<ol id="'+ options.numericId +'"></ol>';
				} else {
					if(options.firstShow) html += '<span id="'+ options.firstId +'"><a href=\"javascript:void(0);\">'+ options.firstText +'</a></span>';
					html += ' <span id="'+ options.prevId +'"><a href=\"javascript:void(0);\">'+ options.prevText +'</a></span>';
					html += ' <span id="'+ options.nextId +'"><a href=\"javascript:void(0);\">'+ options.nextText +'</a></span>';
					if(options.lastShow) html += ' <span id="'+ options.lastId +'"><a href=\"javascript:void(0);\">'+ options.lastText +'</a></span>';				
				};
				
				html += options.controlsAfter;						
				$(obj).after(html);										
			};
			
			if(options.numeric){									
				for(var i=0;i<s;i++){						
					$(document.createElement("li"))
						.attr('id',options.numericId + (i+1))
						.html('<a rel='+ i +' href=\"javascript:void(0);\">'+ (i+1) +'</a>')
						.appendTo($("#"+ options.numericId))
						.click(function(){							
							animate($("a",$(this)).attr('rel'),true);
						}); 												
				};							
			} else {
				$("a","#"+options.nextId).click(function(){		
					animate("next",true);
				});
				$("a","#"+options.prevId).click(function(){		
					animate("prev",true);				
				});	
				$("a","#"+options.firstId).click(function(){		
					animate("first",true);
				});				
				$("a","#"+options.lastId).click(function(){		
					animate("last",true);				
				});				
			};
			
			function setCurrent(i){
				i = parseInt(i)+1;
				$("li", "#" + options.numericId).removeClass("current");
				$("li#" + options.numericId + i).addClass("current");
			};
			
			function adjust(){
				if(t>ts) t=0;		
				if(t<0) t=ts;	<div id="left_ads_float">

        <a href="http://minhnhuanphat.com/" target="_blank"><img border="0" src="http://minhnhuanphat.com/wp-content/uploads/2016/11/baner-quang-cao-1.png" width="140" /></a>

    </div>

    <div id="right_ads_float">

       <a href="http://minhnhuanphat.com/" target="_blank"><img border="0" src="http://minhnhuanphat.com/wp-content/uploads/2016/11/baner-quang-cao-1.png" width="140" /></a>

    </div>

<style>

#left_ads_float

{

    bottom:24px;

    left: 10px;

    position:fixed; }

#right_ads_float

{

    bottom:24px;

    right: 10px;

    position:fixed;

}

</style>

<script>

var vtlai_remove_fads=false;

function vtlai_check_adswidth()

    {

        if(vtlai_remove_fads)

        {

            document.getElementById('left_ads_float').style.display='none';

            document.getElementById('right_ads_float').style.display='none';

            return;

        }else if(document.cookie.indexOf('vtlai_remove_float_ads')!=-1)

        {

            vtlai_remove_fads=true;

            vtlai_check_adswidth();

            return;

        }

        else

        {

            var lwidth=parseInt(document.body.clientWidth);

            if(lwidth<1110)

            {

                document.getElementById('left_ads_float').style.display='none';

                document.getElementById('right_ads_float').style.display='none';

            }

            else

            {

                document.getElementById('left_ads_float').style.display='block';

                document.getElementById('right_ads_float').style.display='block';

            }

            setTimeout('vtlai_check_adswidth()',10);

        }

    }

</script>
				if(!options.vertical) {
					$("ul",obj).css("margin-left",(t*w*-1));
				} else {
					$("ul",obj).css("margin-left",(t*h*-1));
				}
				clickable = true;
				if(options.numeric) setCurrent(t);
			};
			
			function animate(dir,clicked){
				if (clickable){
					clickable = false;
					var ot = t;				
					switch(dir){
						case "next":
							t = (ot>=ts) ? (options.continuous ? t+1 : ts) : t+1;						
							break; 
						case "prev":
							t = (t<=0) ? (options.continuous ? t-1 : 0) : t-1;
							break; 
						case "first":
							t = 0;
							break; 
						case "last":
							t = ts;
							break; 
						default:
							t = dir;
							break; 
					};	
					var diff = Math.abs(ot-t);
					var speed = diff*options.speed;						
					if(!options.vertical) {
						p = (t*w*-1);
						$("ul",obj).animate(
							{ marginLeft: p }, 
							{ queue:false, duration:speed, complete:adjust }
						);				
					} else {
						p = (t*h*-1);
						$("ul",obj).animate(
							{ marginTop: p }, 
							{ queue:false, duration:speed, complete:adjust }
						);					
					};
					
					if(!options.continuous && options.controlsFade){					
						if(t==ts){
							$("a","#"+options.nextId).hide();
							$("a","#"+options.lastId).hide();
						} else {
							$("a","#"+options.nextId).show();
							$("a","#"+options.lastId).show();					
						};
						if(t==0){
							$("a","#"+options.prevId).hide();
							$("a","#"+options.firstId).hide();
						} else {
							$("a","#"+options.prevId).show();
							$("a","#"+options.firstId).show();
						};					
					};				
					
					if(clicked) clearTimeout(timeout);
					if(options.auto && dir=="next" && !clicked){;
						timeout = setTimeout(function(){
							animate("next",false);
						},diff*options.speed+options.pause);
					};
			
				};
				
			};
			// init
			var timeout;
			if(options.auto){;
				timeout = setTimeout(function(){
					animate("next",false);
				},options.pause);
			};		
			
			if(options.numeric) setCurrent(0);
		
			if(!options.continuous && options.controlsFade){					
				$("a","#"+options.prevId).hide();
				$("a","#"+options.firstId).hide();				
			};				
			
		});
	  
	};

})(jQuery);

//]]>
</script>

<script type='text/javascript'>
//<![CDATA[

jQuery(document).ready(function(){	
        jQuery("#slider").easySlider({
                auto: true, 
                continuous: true,
        	pause: 4000
        });
});

//]]>
</script>

<script type='text/javascript'>
//<![CDATA[

;(function($){$.fn.superfish=function(op){var sf=$.fn.superfish,c=sf.c,$arrow=$(['<span class="',c.arrowClass,'"> &#187;</span>'].join('')),over=function(){var $$=$(this),menu=getMenu($$);clearTimeout(menu.sfTimer);$$.showSuperfishUl().siblings().hideSuperfishUl()},out=function(){var $$=$(this),menu=getMenu($$),o=sf.op;clearTimeout(menu.sfTimer);menu.sfTimer=setTimeout(function(){o.retainPath=($.inArray($$[0],o.$path)>-1);$$.hideSuperfishUl();if(o.$path.length&&$$.parents(['li.',o.hoverClass].join('')).length<1){over.call(o.$path)}},o.delay)},getMenu=function($menu){var menu=$menu.parents(['ul.',c.menuClass,':first'].join(''))[0];sf.op=sf.o[menu.serial];return menu},addArrow=function($a){$a.addClass(c.anchorClass).append($arrow.clone())};return this.each(function(){var s=this.serial=sf.o.length;var o=$.extend({},sf.defaults,op);o.$path=$('li.'+o.pathClass,this).slice(0,o.pathLevels).each(function(){$(this).addClass([o.hoverClass,c.bcClass].join(' ')).filter('li:has(ul)').removeClass(o.pathClass)});sf.o[s]=sf.op=o;$('li:has(ul)',this)[($.fn.hoverIntent&&!o.disableHI)?'hoverIntent':'hover'](over,out).each(function(){if(o.autoArrows)addArrow($('>a:first-child',this))}).not('.'+c.bcClass).hideSuperfishUl();var $a=$('a',this);$a.each(function(i){var $li=$a.eq(i).parents('li');$a.eq(i).focus(function(){over.call($li)}).blur(function(){out.call($li)})});o.onInit.call(this)}).each(function(){var menuClasses=[c.menuClass];if(sf.op.dropShadows&&!($.browser.msie&&$.browser.version<7))menuClasses.push(c.shadowClass);$(this).addClass(menuClasses.join(' '))})};var sf=$.fn.superfish;sf.o=[];sf.op={};sf.IE7fix=function(){var o=sf.op;if($.browser.msie&&$.browser.version>6&&o.dropShadows&&o.animation.opacity!=undefined)this.toggleClass(sf.c.shadowClass+'-off')};sf.c={bcClass:'sf-breadcrumb',menuClass:'sf-js-enabled',anchorClass:'sf-with-ul',arrowClass:'sf-sub-indicator',shadowClass:'sf-shadow'};sf.defaults={hoverClass:'sfHover',pathClass:'overideThisToUse',pathLevels:1,delay:800,animation:{opacity:'show'},speed:'normal',autoArrows:true,dropShadows:true,disableHI:false,onInit:function(){},onBeforeShow:function(){},onShow:function(){},onHide:function(){}};$.fn.extend({hideSuperfishUl:function(){var o=sf.op,not=(o.retainPath===true)?o.$path:'';o.retainPath=false;var $ul=$(['li.',o.hoverClass].join(''),this).add(this).not(not).removeClass(o.hoverClass).find('>ul').hide().css('visibility','hidden');o.onHide.call($ul);return this},showSuperfishUl:function(){var o=sf.op,sh=sf.c.shadowClass+'-off',$ul=this.addClass(o.hoverClass).find('>ul:hidden').css('visibility','visible');sf.IE7fix.call($ul);o.onBeforeShow.call($ul);$ul.animate(o.animation,o.speed,function(){sf.IE7fix.call($ul);o.onShow.call($ul)});return this}})})(jQuery);(function($){$.fn.supersubs=function(options){var opts=$.extend({},$.fn.supersubs.defaults,options);return this.each(function(){var $$=$(this);var o=$.meta?$.extend({},opts,$$.data()):opts;var fontsize=$('<li id="menu-fontsize">&#8212;</li>').css({'padding':0,'position':'absolute','top':'-999em','width':'auto'}).appendTo($$).width();$('#menu-fontsize').remove();$ULs=$$.find('ul');$ULs.each(function(i){var $ul=$ULs.eq(i);var $LIs=$ul.children();var $As=$LIs.children('a');var liFloat=$LIs.css('white-space','nowrap').css('float');var emWidth=$ul.add($LIs).add($As).css({'float':'none','width':'auto'}).end().end()[0].clientWidth/fontsize;emWidth+=o.extraWidth;if(emWidth>o.maxWidth){emWidth=o.maxWidth}else if(emWidth<o.minWidth){emWidth=o.minWidth}emWidth+='em';$ul.css('width',emWidth);$LIs.css({'float':liFloat,'width':'100%','white-space':'normal'}).each(function(){var $childUl=$('>ul',this);var offsetDirection=$childUl.css('left')!==undefined?'left':'right';$childUl.css(offsetDirection,emWidth)})})})};$.fn.supersubs.defaults={minWidth:9,maxWidth:25,extraWidth:0}})(jQuery);$j=jQuery.noConflict();$j(document).ready(function(){$j('div.menu ul:first-child').supersubs({minWidth:12,maxWidth:27,extraWidth:1}).superfish({delay:100,animation:{opacity:'show',height:'show'},dropShadows:false});$j('nav.menu ul:first-child').supersubs({minWidth:12,maxWidth:27,extraWidth:1}).superfish({delay:100,animation:{opacity:'show',height:'show'},dropShadows:false})});

//]]>
</script>
<div style='text-align:center'>
<h6><data:blog.pageName/>BẢNG BÁO GIÁ THIẾT BỊ HỒ BƠI GIÁ RẺ TẠI TPHCM</h6>
</div>

<script src='http://faceseo.vn/ungdung/chat/chatfbwp.js' type='text/javascript'/>
<div id='fb-root'/>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = &quot;//connect.facebook.net/vi_VN/sdk.js#xfbml=1&amp;version=v2.5&quot;;
  fjs.parentNode.insertBefore(js, fjs);
}(document, &#39;script&#39;, &#39;facebook-jssdk&#39;));</script>
<div class='support-icon-right' style='position:fixed; z-index:9999999; right:10px; bottom:10px;'>
	<h3 style='background-color:#000; margin: 0 !important; padding:5px !important; color:#fff'><i class='fa fa-weixin'/> TƯ VẤN TRỰC TUYẾN</h3>
	<div class='online-support'>
		<div class='fb-page' data-adapt-container-width='false' data-height='300' data-hide-cover='false' data-href='https://www.facebook.com/thietkehoboichuyenghiep/' data-show-facepile='false' data-show-posts='false' data-small-header='true' data-tabs='messages' data-width='250'>
		</div>
	</div>
</div>



<link href='https://rawgithub.com/nguyennhuan127/cssjs/master/bannerdautrang.css' rel='stylesheet'/>

<script src='https://rawgithub.com/nguyennhuan127/cssjs/master/bndautrang.js' type='text/javascript'/>

<script src='https://rawgithub.com/nguyennhuan127/cssjs/master/popupan.js'/>

<script src='https://rawgithub.com/nguyennhuan127/cssjs/master/redirectcopy.js' type='text/javascript'/> <!-- code điều hướng traffic -->


</body>
</html><!-- Content by http://baogiathietbihoboi.blogspot.com/ -->