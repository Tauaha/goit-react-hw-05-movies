"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[758],{854:function(e,t,r){var n=r(691),i=r(184);t.Z=function(){return(0,i.jsx)(n.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})}},758:function(e,t,r){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}r.r(t),r.d(t,{default:function(){return b}});var o=r(439),s=r(791),c=r(689),a=r(87);var l={FetchMoviesDetails:function(e){return fetch("".concat("https://api.themoviedb.org/3/movie/").concat(e,"?language=en-US"),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwM2FlMjVjMDdmZmJkZTQ4MzNlOTI4MzAwODQ5MTY0ZSIsInN1YiI6IjY0NmNlYTMyYzM1MTRjMmIwYmY0MGJhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-xetNvo1KnrMsW_faMs9w9HxpC-ebylSqWAUjThjL_g"}}).then((function(e){return e.ok?e.json():Promise.reject(new Error("No movie"))}))}},u="MoviesGalleryItem_container__gxZyA",h="MoviesGalleryItem_image__DC9wH",d="MoviesGalleryItem_trumb__otXpu",j=r(184),m=function(e){var t,r=e.detailMovies,n=r.poster_path,i=r.title,o=r.vote_average,s=r.genres,c=r.overview;return(0,j.jsxs)("div",{className:u,children:[(0,j.jsx)("img",{className:h,src:n?"".concat("https://image.tmdb.org/t/p/w500").concat(n):"https://sd.keepcalms.com/i/keep-calm-poster-not-found.png",alt:"",width:"370"}),(0,j.jsxs)("div",{className:d,children:[(0,j.jsx)("h3",{children:i}),(0,j.jsxs)("p",{children:["User score: ",(t=o,(10*t).toFixed()),"%"]}),(0,j.jsxs)("p",{children:[(0,j.jsx)("span",{children:" Overview:"})," ",c]}),s?(0,j.jsxs)("ul",{children:[(0,j.jsx)("p",{children:"Genres:"}),s.map((function(e){var t=e.id,r=e.name;return(0,j.jsx)("li",{children:r},t)}))]}):null]})]})},f=r(854),p="MovieDetails_title__-2Xvc",v="MovieDetails_Link__ZXyTN",b=function(){var e,t,r=(0,s.useState)({}),u=(0,o.Z)(r,2),h=u[0],d=u[1],b=(0,s.useState)(!1),y=(0,o.Z)(b,2),w=y[0],x=y[1],O=(0,s.useState)(null),M=(0,o.Z)(O,2)[1],_=(0,c.TH)(),g=(0,s.useRef)(null!==(e=null===(t=_.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/"),I=(0,c.UO)().movieId;return(0,s.useEffect)((function(){I&&(x(!0),l.FetchMoviesDetails(I).then((function(e){d(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e))})).catch((function(e){M(e)})).finally((function(){x(!1)})))}),[I]),(0,j.jsxs)("div",{children:[(0,j.jsx)(a.rU,{to:g.current,className:v,children:"Go back"}),w&&(0,j.jsx)(f.Z,{}),(0,j.jsx)(m,{detailMovies:h}),(0,j.jsx)("h3",{className:p,children:"Additional information"}),(0,j.jsx)(a.rU,{to:"cast",className:v,children:"Cast"}),(0,j.jsx)(a.rU,{to:"Reviews",className:v,children:"Reviews"}),(0,j.jsx)(c.j3,{})]})}}}]);
//# sourceMappingURL=758.012d4397.chunk.js.map