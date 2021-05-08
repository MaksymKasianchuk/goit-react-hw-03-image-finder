(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{12:function(e,t,a){e.exports={galleryItem:"ImageGalleryItem_galleryItem__3WkZU",galleryImage:"ImageGalleryItem_galleryImage__99SGX"}},13:function(e,t,a){e.exports={overlay:"Modal_overlay__3DIQD",modal:"Modal_modal__2DuYC"}},23:function(e,t,a){e.exports={gallery:"ImageGallery_gallery__W3Dpk"}},24:function(e,t,a){e.exports={button:"Button_button__3lmQA"}},26:function(e,t,a){e.exports={loader:"Loader_loader__11iM1"}},31:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(9),c=a.n(o),s=(a(31),a(14)),l=a(4),i=a(5),u=a(7),h=a(6),d="https://pixabay.com/api",m="20725860-716e2490a7269985c8ea1b39a",g=a(11),p=a.n(g),f=d,b=m;p.a.defaults.baseURL=f;var y={fetchPhotos:function(e){var t=e.query,a=e.page,n=e.perPage,r=void 0===n?12:n;return p.a.get("/?q=".concat(t,"&page=").concat(a,"&key=").concat(b,"&image_type=photo&orientation=horizontal&per_page=").concat(r)).then((function(e){return e.data}))}},j=a(8),v=a.n(j),O=a(0),_=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){var a=t.target.value;e.setState({query:a})},e.handleSubmit=function(t){var a=e.state.query;t.preventDefault(),e.props.onSubmit(a),e.reset()},e.reset=function(){e.setState({query:""})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.query;return Object(O.jsx)("header",{className:v.a.searchBar,children:Object(O.jsxs)("form",{className:v.a.searchForm,onSubmit:this.handleSubmit,children:[Object(O.jsx)("button",{type:"submit",className:v.a.button,children:"Search"}),Object(O.jsx)("input",{className:v.a.input,type:"text",value:e,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleChange})]})})}}]),a}(r.a.Component),x=a(12),k=a.n(x),C=function(e){var t=e.webformatURL,a=e.largeImageURL;return Object(O.jsx)("li",{className:k.a.galleryItem,children:Object(O.jsx)("img",{src:t,alt:"","data-source":a,className:k.a.galleryImage})})},w=a(23),S=a.n(w),I=function(e){var t=e.images,a=e.onClick;return Object(O.jsx)("ul",{className:S.a.gallery,onClick:a,children:t.map((function(e){var t=e.id,a=e.webformatURL,n=e.largeImageURL;return Object(O.jsx)(C,{webformatURL:a,largeImageURL:n},t)}))})};I.defaultProps={onClick:function(){}};var L=I,M=a(24),U=a.n(M),D=function(e){var t=e.onClick;return Object(O.jsx)("button",{type:"button",onClick:t,className:U.a.button,children:"Load more"})},B=a(25),N=a.n(B),P=a(26),Q=a.n(P),q=function(){return Object(O.jsx)(N.a,{type:"ThreeDots",color:"#DA2C43",className:Q.a.loader})},R=a(13),A=a.n(R),E=document.querySelector("#modal-root"),F=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){27===t.keyCode&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(O.jsx)("div",{className:A.a.overlay,onClick:this.handleBackdropClick,children:Object(O.jsx)("div",{className:A.a.modal,children:this.props.children})}),E)}}]),a}(r.a.Component),G=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],searchQuery:"",currentPage:1,isLoading:!1,showModal:!1,imageUrl:""},e.hendleQueryChange=function(t){e.setState({images:[],searchQuery:t,currentPage:1})},e.fetchImages=function(){var t=e.state,a=t.currentPage,n={query:t.searchQuery,page:a};y.fetchPhotos(n).then((function(t){var a=t.hits;e.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(a)),currentPage:e.currentPage+1}}))})).then((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(e){alert("Error occured, please try again"),console.log(e)})).finally((function(){return e.setState({isLoading:!1})}))},e.openModal=function(t){var a=t.target;"IMG"===a.nodeName&&e.setState({showModal:!0,imageUrl:a.dataset.source})},e.closeModal=function(){e.setState({showModal:!1,imageUrl:""})},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){this.state.searchQuery!==t.searchQuery&&this.fetchImages()}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.isLoading,n=e.showModal,r=e.imageUrl,o=t.length>0;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(_,{onSubmit:this.hendleQueryChange}),Object(O.jsx)(L,{images:t,onClick:this.openModal}),n&&Object(O.jsx)(F,{onClose:this.closeModal,children:Object(O.jsx)("img",{src:r,alt:""})}),a&&Object(O.jsx)(q,{}),o&&!a&&Object(O.jsx)(D,{onClick:this.fetchImages})]})}}]),a}(r.a.Component);c.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(G,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={searchBar:"SearchBar_searchBar__1RuQB",searchForm:"SearchBar_searchForm__3ha9X",button:"SearchBar_button__SvYk1",input:"SearchBar_input__2--DC"}}},[[71,1,2]]]);
//# sourceMappingURL=main.43998c20.chunk.js.map