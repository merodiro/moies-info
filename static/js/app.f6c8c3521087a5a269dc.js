webpackJsonp([1,2],[,,,,,,,,,,,,function(t,e,s){"use strict";var a=s(5),i=s(43),n=s(37),r=s.n(n),o=s(38),l=s.n(o);a.a.use(i.a),e.a=new i.a({routes:[{path:"/",name:"Index",component:r.a},{path:"/movie/:title",name:"movie",component:l.a}]})},function(t,e,s){var a=s(1)(s(31),s(39),null,null);t.exports=a.exports},,,,,,,,,,,,,,,,,,function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(36),i=s.n(a);e.default={name:"app",components:{Navbar:i.a}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(2),i=s.n(a),n=s(4),r=s.n(n);e.default={data:function(){return{query:"",movies:{}}},watch:{query:function(t){this.search()}},methods:{search:r.a.debounce(function(){var t=this;i.a.get("http://www.omdbapi.com/?s="+this.query).then(function(e){t.movies=e.data.Search})},500)}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(2),i=s.n(a);e.default={data:function(){return{movie:{}}},mounted:function(){var t=this;i.a.get("http://www.omdbapi.com/?t="+this.$route.params.title).then(function(e){t.movie=e.data})}}},,function(t,e,s){var a=s(1)(s(32),s(42),null,null);t.exports=a.exports},function(t,e,s){var a=s(1)(s(33),s(41),null,null);t.exports=a.exports},function(t,e,s){var a=s(1)(s(34),s(40),null,null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("navbar"),t._v(" "),s("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4"},[s("img",{staticClass:"img-responsive thumnail",attrs:{src:t.movie.Poster}})]),t._v(" "),s("div",{staticClass:"col-md-8"},[s("h3",[t._v(t._s(t.movie.Title))]),t._v(" "),s("ul",{staticClass:"list-group"},[s("li",{staticClass:"list-group-item"},[s("strong",[t._v("Genre:")]),s("span",{staticClass:"pull-right"},[t._v(t._s(t.movie.Genre))])]),t._v(" "),s("li",{staticClass:"list-group-item"},[s("strong",[t._v("Released:")]),s("span",{staticClass:"pull-right"},[t._v(t._s(t.movie.Released))])]),t._v(" "),s("li",{staticClass:"list-group-item"},[s("strong",[t._v("Rated:")]),s("span",{staticClass:"pull-right"},[t._v(t._s(t.movie.Rated))])]),t._v(" "),s("li",{staticClass:"list-group-item"},[s("strong",[t._v("IMDB Rating:")]),s("span",{staticClass:"pull-right"},[t._v(t._s(t.movie.imdbRating))])]),t._v(" "),s("li",{staticClass:"list-group-item"},[s("strong",[t._v("Director:")]),s("span",{staticClass:"pull-right"},[t._v(t._s(t.movie.Director))])]),t._v(" "),s("li",{staticClass:"list-group-item"},[s("strong",[t._v("Writer:")]),s("span",{staticClass:"pull-right"},[t._v(t._s(t.movie.Writer))])]),t._v(" "),s("li",{staticClass:"list-group-item"},[s("strong",[t._v("Actors:")]),s("span",{staticClass:"pull-right"},[t._v(t._s(t.movie.Actors))])])])])]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"well"},[s("h3",[t._v("Plot")]),t._v("\n      "+t._s(t.movie.Plot)+"\n      "),s("hr"),t._v(" "),s("a",{staticClass:"btn btn-primary",attrs:{href:"http://imdb.com/title/"+t.movie.imdbID,target:"_blank"}},[t._v("View IMDB")]),t._v(" "),s("router-link",{staticClass:"btn btn-default",attrs:{to:"/"}},[t._v("\n        Go back to search\n      ")])],1)])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-8 col-md-offset-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Type the name of movie here"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}})])]),t._v(" "),t.movies?s("div",{staticClass:"row"},t._l(t.movies,function(e){return s("div",{key:e,staticClass:"col-md-3"},[s("div",{staticClass:"panel panel-default"},[s("div",{staticClass:"panel-heading"},[s("router-link",{attrs:{to:{name:"movie",params:{title:e.Title}}}},[t._v("\n            "+t._s(e.Title)+"\n          ")])],1),t._v(" "),s("div",{staticClass:"panel-body"},[s("img",{staticClass:"img-responsive",attrs:{src:e.Poster}})])])])})):s("div",{staticClass:"lead text-center"},[s("br"),t._v("\n    No movies found\n  ")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"navbar navbar-inverse"},[s("div",{staticClass:"container"},[s("div",{staticClass:"navbar-header"},[s("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Movies info")])])])])}]}},,,function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(5),i=s(13),n=s.n(i),r=s(12);window.axios=s(2),window._=s(4),a.a.config.productionTip=!1,new a.a({el:"#app",router:r.a,render:function(t){return t(n.a)}})}],[45]);
//# sourceMappingURL=app.f6c8c3521087a5a269dc.js.map