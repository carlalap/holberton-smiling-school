# Build a web app in JavaScript

## Holberton Smiling School - Javascript

These group of web pages were coded from scratch with the help of the Boostrap Framework and based on some design models given on Figma.

The original design it was forked from [codebase](https://github.com/jzamora5/holberton-smiling-school), refer to Readme2.md file for more details.

[Figma Homepage](https://www.figma.com/file/QYQqMYbdpAHL5xTclwJKSI/Homepage)

[Figma Pricing](https://www.figma.com/file/KLAI53jdYpfFNEy0O79ymB/Pricing)

[Figma Courses](https://www.figma.com/file/ivg3abH1HLmMayBgjGg1Qf/Courses)

The designs were planned for Desktop, Tablet, and Mobile.

# Homepage

| **Desktop (Width: 1440 px)**                              | **Tablet (Width: 768 px)**                              | **Mobile (Width: 576 px)**                              |
| --------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| ![Desktop](https://i.ibb.co/pKGgC0J/Homepage-Desktop.png) | ![Tablet](https://i.ibb.co/6XBLwf9/Homepage-Tablet.png) | ![Mobile](https://i.ibb.co/NVBK21F/Homepage-Mobile.png) |

# Pricing

| **Desktop (Width: 1440 px)**                             | **Tablet (Width: 768 px)**                             | **Mobile (Width: 576 px)**                             |
| -------------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------ |
| ![Desktop](https://i.ibb.co/RvSJ2YS/Pricing-Desktop.png) | ![Tablet](https://i.ibb.co/Gkvsf0Y/Pricing-Tablet.png) | ![Mobile](https://i.ibb.co/6RwmYck/Pricing-Mobile.png) |

# Courses

| **Desktop (Width: 1440 px)**                             | **Tablet (Width: 768 px)**                             | **Mobile (Width: 576 px)**                             |
| -------------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------ |
| ![Desktop](https://i.ibb.co/y51S3HX/Courses-Desktop.png) | ![Tablet](https://i.ibb.co/28qK1g0/Courses-Tablet.png) | ![Mobile](https://i.ibb.co/f8zNgkx/Courses-Mobile.png) |

<h3>Requirements</h3>

<ul>
<li>You have to use Bootstrap</li>
<li>Your <code>styles.css</code> must be as small as you can - <strong>you must use as much as you can Bootstrap classes</strong></li>
<li>You have to use JQuery</li>
<li>Your <code>scripts.js</code> must contain all your Javascript part</li>
<li>Your Javascript must be executed only when the document is loaded</li>
</ul>

<h3>Imports</h3>

<p>For this project, you will need: fonts from Google, JQuery, Bootstrap CSS/JS</p>

<pre><code>&lt;link href=&quot;https://fonts.googleapis.com/css?family=Source+Sans+Pro&amp;display=swap&quot; rel=&quot;stylesheet&quot;&gt;
&lt;link href=&quot;https://fonts.googleapis.com/css?family=Coiny&amp;display=swap&quot; rel=&quot;stylesheet&quot;&gt;

&lt;script src=&quot;https://code.jquery.com/jquery-3.4.1.min.js&quot; integrity=&quot;sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=&quot; crossorigin=&quot;anonymous&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js&quot; integrity=&quot;sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6&quot; crossorigin=&quot;anonymous&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js&quot; integrity=&quot;sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q&quot; crossorigin=&quot;anonymous&quot;&gt;&lt;/script&gt;

&lt;link rel=&quot;stylesheet&quot; href=&quot;https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css&quot; integrity=&quot;sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh&quot; crossorigin=&quot;anonymous&quot;&gt;

&lt;link rel=&quot;stylesheet&quot; href=&quot;styles.css&quot;&gt;
&lt;script src=&quot;scripts.js&quot;&gt;&lt;/script&gt;
</code></pre>
  </div>
</div>

<h2 class="gap">Tasks</h2>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      0. Fork me if you can!
    </h3>
  </div>
  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

   <!-- Progress vs Score -->

   <!-- Task Body -->
   <p>For this project you will fork this <a href="/rltoken/TV15_xBJLHluq5jqTy8oXg" title="codebase" target="_blank">codebase</a>:</p>

<p>(<code>homepage.html</code> -&gt; <code>0-homepage.html</code>)</p>
<p>(<code>pricing.html</code> -&gt; <code>0-pricing.html</code>)</p>
<p>(<code>courses.html</code> -&gt; <code>0-courses.html</code>)</p>

<ul>
<li><p>Update the repository name to <code>holbertonschool-smiling-school-javascript</code></p></li>
<li><p>Update the <code>README.md</code>:</p>

<ul>
<li>Add yourself as an author of the project</li>
</ul></li>
</ul>

<p><strong>Interactions note:</strong></p>

<ul>
<li>Web pages must switch to the tablet version when the screen width is 768px</li>
<li>Web pages must switch to the mobile version when the screen width is 576px</li>
<li>button hover/active: <code>opacity: 0.9</code></li>
</ul>

  </div>

<h3 class="panel-title">
      1. Homepage - quotes
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

 <!-- Progress vs Score -->

<!-- Task Body -->
<p>From <code>0-homepage.html</code>, create <code>1-homepage.html</code>.</p>

<p>Replace static quotes by dynamic loading:</p>

<ul>
<li>URL: <code>https://smileschool-api.hbtn.info/quotes</code></li>
<li>No static quotes should be present in the quotes section</li>
<li>During the Ajax request, a loader should be present</li>
<li>Carousel should work like before</li>
</ul>

<p>Example of my loader:</p>

<pre><code>HTML:
&lt;div class=&quot;loader&quot;&gt;&lt;/div&gt;

CSS:
.loader {
    border: 10px solid #f3f3f3;
    border-top: 10px solid #C271FF;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    animation: spin 2s linear infinite;
    margin: auto;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</code></pre>

<p>Final result:</p>

[quotes carousel JQuery](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2020/4/044058b378bfef994b7c9dd672de1dca33d5f576.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20231204%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20231204T003310Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=7de36bbf1b59bcb150e78f67f70fb6a358a2d25960052ac3e01d71e207c6f95e)

  </div>

<h3 class="panel-title">
      2. Homepage - popular tutorials
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

<!-- Progress vs Score -->
<!-- Task Body -->
<p>From <code>1-homepage.html</code>, create <code>2-homepage.html</code>.</p>

<p>Replace static video cards by dynamic loading:</p>

<ul>
<li>URL: <code>https://smileschool-api.hbtn.info/popular-tutorials</code></li>
<li>No static video cards should be present in the section</li>
<li>During the Ajax request, a loader should be present</li>
<li>Carousel should work by sliding card by card (like GIF below) - this kind of carousel is not unique, make it generic to reuse it easily!</li>
<li>Don&rsquo;t forget the responsive part!</li>
</ul>

<p>Final result:</p>

[Popular Videos carousel JQuery](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2020/4/0efb5ff68c622f830a70e7aaf16bac87822462af.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20231204%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20231204T003310Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=6b77bbaed4c0e8da32e4570469472e1380ca491234c667ade436b8409b34c351)

</div>

<h3 class="panel-title">
      3. Homepage - latest videos
    </h3>
  </div>

<div class="panel-body">
    <span id="user_id" data-id="6138"></span>

<!-- Progress vs Score -->

 <!-- Task Body -->
<p>From <code>2-homepage.html</code>, create <code>homepage.html</code>.</p>

<p>Replace static video card by dynamic loading:</p>

<ul>
<li>URL: <code>https://smileschool-api.hbtn.info/latest-videos</code></li>
<li>No static video cards should be present in the section</li>
<li>During the Ajax request, a loader should be present</li>
<li>Carousel should work by sliding card by card (like GIF below) - this kind of carousel is not unique, make it generic to reuse it easily!</li>
<li>Don&rsquo;t forget the responsive part!</li>
</ul>

<p>Final result:</p>

[Lastest Videos carousel JQuery](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2020/4/c9a421edef604cee434f02f26328f6a549abd81a.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20231204%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20231204T003310Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=caa38923502be7b1f84ca9df6ca2071236065dad5ae2c221227fcdc31372ef96)

  </div>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      4. Pricing - quotes
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

<!-- Progress vs Score -->

<!-- Task Body -->
   <p>From <code>0-pricing.html</code>, create <code>pricing.html</code>.</p>
   <p>Replace static quotes by dynamic loading:</p>

<ul>
<li>URL: <code>https://smileschool-api.hbtn.info/quotes</code></li>
<li>No static quotes should be present in the quotes section</li>
<li>During the Ajax request, a loader should be present</li>
<li>Carousel should work like before</li>
</ul>

<p>Same as the <code>homepage.html</code></p>

  </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      5. Courses
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

   <!-- Progress vs Score -->

   <!-- Task Body -->
   <p>From <code>0-courses.html</code>, create <code>courses.html</code>.</p>

<p>Replace static video card by dynamic loading:</p>

<ul>
<li>URL: <code>https://smileschool-api.hbtn.info/courses</code>

<ul>
<li><code>GET</code> parameters:

<ul>
<li><code>q</code>: search value (in our case, the value of the field KEYWORDS)</li>
<li><code>topic</code>: topic filter value (in our case, the value of the field TOPICS)</li>
<li><code>sort</code>: order of all courses (in our case, the value of the field SORT BY)</li>
</ul></li>
</ul></li>
<li>No static video cards should be present in the section</li>
<li>During the Ajax request, a loader should be present</li>
<li>Dropdowns are dynamic (coming from the API):

<ul>
<li>Topic: list of <code>topics</code></li>
<li>Sort by: list of <code>sorts</code></li>
</ul></li>
<li>Search value should be initialized by the value <code>q</code> in the API response</li>
<li>The list of video cards is coming from <code>courses</code> in the API response</li>
<li>API request must be done when:

<ul>
<li>Search value is changing</li>
<li>A new Topic is selected</li>
<li>A new Sort by is selected</li>
</ul></li>
</ul>

[Search Section JQuery](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2020/4/b081f3358ab5e79f44afc847d882bcf6fd5ef517.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20231204%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20231204T003310Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=3644997245bf2cc5cef31d14bf6f2d7533c23d2eb61767e71d8cbb7f905e98ee)

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      6. JSON to XML (Advanced)
    </h3>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

<!-- Progress vs Score -->

<!-- Task Body -->
<p>Convert all your JSON Ajax call to another API&hellip; a XML API!</p>

<p>Copy files - same content, except loading <code>xml-scripts.js</code> instead of <code>script.js</code></p>

<ul>
<li><code>homepage.html</code> -&gt; <code>xml-homepage.html</code> </li>
<li><code>pricing.html</code> -&gt; <code>xml-pricing.html</code></li>
<li><code>courses.html</code> -&gt; <code>xml-courses.html</code></li>
</ul>

<p>And use this API:</p>

<ul>
<li>quotes: <code>https://smileschool-api.hbtn.info/xml/quotes</code></li>
<li>popular tutorials: <code>https://smileschool-api.hbtn.info/xml/popular-tutorials</code></li>
<li>latest videos: <code>https://smileschool-api.hbtn.info/xml/latest-videos</code></li>
<li>courses: <code>https://smileschool-api.hbtn.info/xml/courses</code></li>
</ul>

<p>Final result should be the same as the JSON API version</p>

</div>

# Authors:

<br>Carlos Alarcon: [carlalap](https://github.com/carlalap/)
<br>Jhoan Zamora: [jzamora5](https://github.com/jzamora5)
