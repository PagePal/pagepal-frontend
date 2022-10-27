(window.webpackJsonp=window.webpackJsonp||[]).push([[15,3],{312:function(t,e,o){var content=o(328);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(40).default)("2cb078f8",content,!0,{sourceMap:!1})},317:function(t,e,o){"use strict";o.r(e);var n={name:"BookPreview",props:{title:{type:String,required:!0},main_img:{type:String,default:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png"}}},l=o(20),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("NuxtLink",{attrs:{to:"/book/"+t.title}},[e("img",{staticClass:"h-56 m-5 rounded-xl",attrs:{src:t.main_img}})])],1)}),[],!1,null,null,null);e.default=component.exports},325:function(t,e,o){t.exports=o.p+"img/BookThumbsUp.b164dff.png"},326:function(t,e,o){t.exports=o.p+"img/GreenReadBook.cede39c.png"},327:function(t,e,o){"use strict";o(312)},328:function(t,e,o){var n=o(39)((function(i){return i[1]}));n.push([t.i,".accent-underline[data-v-0397d825]{text-decoration-color:#2fb195}.button[data-v-0397d825]{background-color:#f6a50c}.button[data-v-0397d825]:hover{background-color:#f6a000}",""]),n.locals={},t.exports=n},335:function(t,e,o){"use strict";o.r(e);var n=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"max-w-4xl w-full flex flex-row flex-wrap justify-center items-center mx-auto"},[e("img",{staticClass:"w-80",attrs:{src:o(326),alt:"Green creature reading book"}}),t._v(" "),e("div",{staticClass:"w-96 -ml-12"},[e("h2",{staticClass:"text-5xl font-semibold text-center"},[t._v("\n          Making emotional"),e("br"),t._v("development easy!\n        ")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"max-w-3xl py-24 text-2xl text-center"},[t._v("\n      PagePal is the emotional development tool for your child.\n      "),e("br"),t._v("\n      Start right away with one of our books!\n    ")])}],l=(o(15),{name:"IndexPage",data:function(){return{books:[]}},methods:{getPosts:function(){var t=this;fetch("http://pagepal-backend-dev.ap-southeast-1.elasticbeanstalk.com/books/").then((function(t){return t.json()})).then((function(data){return t.books=data.books}))}},mounted:function(){this.getPosts()}}),r=(o(327),o(20)),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"w-full flex flex-col items-center p-20"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("div",[e("img",{staticClass:"w-64 mx-auto",attrs:{src:o(325),alt:"Green thumbs up"}}),t._v(" "),e("NuxtLink",{attrs:{to:"#"}},[e("div",{staticClass:"rounded-lg shadow hover:shadow-xl button p-4"},[e("p",{staticClass:"text-2xl font-bold text-center text-white"},[t._v("Start reading now!")])])])],1)]),t._v(" "),e("div",{staticClass:"w-full flex flex-col items-center p-20"},[e("div",{staticClass:"max-w-6xl w-full flex flex-col"},[e("h2",{staticClass:"text-5xl font-semibold"},[t._v("More books")]),t._v(" "),e("div",{staticClass:"w-full mt-5 flex flex-row flex-wrap"},t._l(t.books,(function(t){return e("BookPreview",{key:t.title,attrs:{title:t.title,main_img:t.main_img}})})),1)])])])}),n,!1,null,"0397d825",null);e.default=component.exports;installComponents(component,{BookPreview:o(317).default})}}]);