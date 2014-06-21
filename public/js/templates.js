/*! mpdisco 2014-06-22 */
!function(){var a=Handlebars.template,b=Handlebars.templates=Handlebars.templates||{};b.listener=a(function(a,b,c,d,e){function f(a){var b,c="";return c+=k((b=a.name,b=null==b||b===!1?b:b.givenName,typeof b===j?b.apply(a):b))+" "+k((b=a.name,b=null==b||b===!1?b:b.familyName,typeof b===j?b.apply(a):b))}function g(a,b){var d;return(d=c.displayName)?d=d.call(a,{hash:{},data:b}):(d=a.displayName,d=typeof d===j?d.apply(a):d),k(d)}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var h,i="",j="function",k=this.escapeExpression,l=this;return i+='<img src="',(h=c.thumbnailUrl)?h=h.call(b,{hash:{},data:e}):(h=b.thumbnailUrl,h=typeof h===j?h.apply(b):h),i+=k(h)+'?s=48" alt="',(h=c.displayName)?h=h.call(b,{hash:{},data:e}):(h=b.displayName,h=typeof h===j?h.apply(b):h),i+=k(h)+'" />\n<span>',h=c["if"].call(b,b.name,{hash:{},inverse:l.program(3,g,e),fn:l.program(1,f,e),data:e}),(h||0===h)&&(i+=h),i+="</span>"}),b.album=a(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g="",h="function",i=this.escapeExpression;return g+='<a class="name" href="#" data-id="',(f=c.album)?f=f.call(b,{hash:{},data:e}):(f=b.album,f=typeof f===h?f.apply(b):f),g+=i(f)+'" title="',(f=c.album)?f=f.call(b,{hash:{},data:e}):(f=b.album,f=typeof f===h?f.apply(b):f),g+=i(f)+'">',(f=c.album)?f=f.call(b,{hash:{},data:e}):(f=b.album,f=typeof f===h?f.apply(b):f),g+=i(f)+'</a>\n<ol class="songs tree collapsed"></ol>'}),b.user=a(function(a,b,c,d,e){function f(a){var b,c="";return c+=k((b=a.name,b=null==b||b===!1?b:b.givenName,typeof b===j?b.apply(a):b))+" "+k((b=a.name,b=null==b||b===!1?b:b.familyName,typeof b===j?b.apply(a):b))}function g(a,b){var d;return(d=c.displayName)?d=d.call(a,{hash:{},data:b}):(d=a.displayName,d=typeof d===j?d.apply(a):d),k(d)}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var h,i="",j="function",k=this.escapeExpression,l=this;return i+='<div class="">\n  <div class="content">\n    <p>Current Master</p>\n    <img src="',(h=c.thumbnailUrl)?h=h.call(b,{hash:{},data:e}):(h=b.thumbnailUrl,h=typeof h===j?h.apply(b):h),i+=k(h)+'?s=48" alt="',(h=c.displayName)?h=h.call(b,{hash:{},data:e}):(h=b.displayName,h=typeof h===j?h.apply(b):h),i+=k(h)+'" />\n    <h2>\n      ',h=c["if"].call(b,b.name,{hash:{},inverse:l.program(3,g,e),fn:l.program(1,f,e),data:e}),(h||0===h)&&(i+=h),i+="\n    </h2>\n  </div>\n</div>"}),b.error=a(function(a,b,c,d,e){return this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{},'<button class="close"></button>\n<p>Whoops. Looks like something didn\'t work on my end.</p>\n<p>If this keeps happening, please <a href="https://github.com/gerev/mpdisco/issues">let my author know</a>.</p>'}),b.player=a(function(a,b,c,d,e){function f(a,b){var d,e="";return e+=" - ",(d=c.album)?d=d.call(a,{hash:{},data:b}):(d=a.album,d=typeof d===j?d.apply(a):d),e+=k(d)}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var g,h,i="",j="function",k=this.escapeExpression,l=this,m=c.helperMissing;return i+='<div class="image play" style="background-image: url(\'',(g=c.coverart)?g=g.call(b,{hash:{},data:e}):(g=b.coverart,g=typeof g===j?g.apply(b):g),i+=k(g)+'\')">\n  <span class="indicator"></span>\n</div>\n<div class="info">\n  <h1>',(g=c.title)?g=g.call(b,{hash:{},data:e}):(g=b.title,g=typeof g===j?g.apply(b):g),i+=k(g)+"</h1>\n  <h2>",(g=c.artist)?g=g.call(b,{hash:{},data:e}):(g=b.artist,g=typeof g===j?g.apply(b):g),i+=k(g),g=c["if"].call(b,b.album,{hash:{},inverse:l.noop,fn:l.program(1,f,e),data:e}),(g||0===g)&&(i+=g),i+='</h2>\n  <h2 class="duration">',h={hash:{},data:e},i+=k((g=c.time||b.time,g?g.call(b,b.time,h):m.call(b,"time",b.time,h)))+"</h2>\n</div>"}),b.song=a(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g="",h="function",i=this.escapeExpression;return g+='<a class="name" href="#" data-id="',(f=c.title)?f=f.call(b,{hash:{},data:e}):(f=b.title,f=typeof f===h?f.apply(b):f),g+=i(f)+'" title="',(f=c.title)?f=f.call(b,{hash:{},data:e}):(f=b.title,f=typeof f===h?f.apply(b):f),g+=i(f)+'">',(f=c.title)?f=f.call(b,{hash:{},data:e}):(f=b.title,f=typeof f===h?f.apply(b):f),g+=i(f)+"</a>"}),b.library=a(function(a,b,c,d,e){return this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{},'<header>Library</header>\n<div class="content">\n  <ul class="artists tree"></ul>\n  <ul class="upload"></ul>\n  <menu>\n    <input type="text" id="search" class="search" placeholder="Search">\n  </menu>\n  <input type="file" id="fileupload" name="files[]" data-url="upload" multiple="multiple" />\n</div>\n<div id="overlay"></div>'}),b.scrubber=a(function(a,b,c,d,e){return this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{},'<div class="progress"></div>'}),b.layout=a(function(a,b,c,d,e){return this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{},'<div id="player-head" class="grid_12 alpha omega">\n  <section id="player" class="grid_9 alpha"></section>\n  <section id="user" class="grid_3 omega"></section>\n  <section id="scrubber" class="grid_12 alpha omega"></section>\n</div>\n<div class="grid_12 alpha omega">\n  <section id="library" class="grid_3 alpha omega"></section>\n  <section id="playlist"></section>\n  <section id="listeners" class="grid_3 alpha omega"></section>\n</div>\n<div id="error"></div>'}),b.playlist=a(function(a,b,c,d,e){return this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{},'<header>\n  <div class="button-group pull-right">\n    <a class="shuffle" href="#"><i class="icon-random"></i></a>\n    <a class="repeat" href="#"><i class="icon-refresh"></i></a>\n    <span class="separator"></span>\n    <a class="remove disabled" href="#"><i class="icon-trash"></i></a>\n  </div>\n  <span>Playlist</span>\n</header>\n<ul class="list"></ul>\n<menu>\n  <input type="text" id="url" name="url" placeholder="Add a link" />\n</menu>'}),b.listeners=a(function(a,b,c,d,e){return this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{},'<header>Listeners</header>\n<div class="content">\n  <ul class="list"></ul>\n  <menu></menu>\n</div>'}),b.playlist_item=a(function(a,b,c,d,e){function f(a,b){var d,e="";return e+='\n  <p class="title">',(d=c.title)?d=d.call(a,{hash:{},data:b}):(d=a.title,d=typeof d===o?d.apply(a):d),e+=p(d)+'</p>\n  <p class="details">\n  ',d=c["if"].call(a,a.artist,{hash:{},inverse:q.noop,fn:q.program(2,g,b),data:b}),(d||0===d)&&(e+=d),e+="\n  ",d=c["if"].call(a,a.album,{hash:{},inverse:q.noop,fn:q.program(4,h,b),data:b}),(d||0===d)&&(e+=d),e+="\n  </p>\n"}function g(a,b){var d,e="";return e+='<span class="artist">',(d=c.artist)?d=d.call(a,{hash:{},data:b}):(d=a.artist,d=typeof d===o?d.apply(a):d),e+=p(d)+"</span>"}function h(a,b){var d,e="";return e+='(<span class="album">',(d=c.album)?d=d.call(a,{hash:{},data:b}):(d=a.album,d=typeof d===o?d.apply(a):d),e+=p(d)+"</span>",d=c["if"].call(a,a.date,{hash:{},inverse:q.noop,fn:q.program(5,i,b),data:b}),(d||0===d)&&(e+=d),e+=")"}function i(a,b){var d,e="";return e+=', <span class="year">',(d=c.date)?d=d.call(a,{hash:{},data:b}):(d=a.date,d=typeof d===o?d.apply(a):d),e+=p(d)+"</span>"}function j(a,b){var d,e="";return e+='\n  <span class="url">',(d=c.file)?d=d.call(a,{hash:{},data:b}):(d=a.file,d=typeof d===o?d.apply(a):d),e+=p(d)+"</span>\n"}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var k,l,m,n="",o="function",p=this.escapeExpression,q=this,r=c.helperMissing;return m={hash:{},data:e},n+=p((k=c.time||b.time,k?k.call(b,b.time,m):r.call(b,"time",b.time,m)))+'\n<div class="image"></div>\n',l=c["if"].call(b,b.title,{hash:{},inverse:q.program(7,j,e),fn:q.program(1,f,e),data:e}),(l||0===l)&&(n+=l),n}),b.user_identify=a(function(a,b,c,d,e){return this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{},'<input type="text" placeholder="E-mail or Nickname" />'}),b.artist=a(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g="",h="function",i=this.escapeExpression;return g+='<a class="name" href="#" data-id="',(f=c.artist)?f=f.call(b,{hash:{},data:e}):(f=b.artist,f=typeof f===h?f.apply(b):f),g+=i(f)+'" title="',(f=c.artist)?f=f.call(b,{hash:{},data:e}):(f=b.artist,f=typeof f===h?f.apply(b):f),g+=i(f)+'">',(f=c.artist)?f=f.call(b,{hash:{},data:e}):(f=b.artist,f=typeof f===h?f.apply(b):f),g+=i(f)+'</a>\n<ul class="albums tree collapsed"></ul>'})}();