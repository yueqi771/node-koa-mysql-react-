(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{515:function(e,t){},520:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=o(a(64)),n=o(a(4)),c=o(a(8)),r=o(a(3)),i=o(a(5)),s=a(1),u=o(s),d=o(a(139)),m=o(a(105));function o(e){return e&&e.__esModule?e:{default:e}}a(515);var f=function(e){function t(e,a){(0,n.default)(this,t);var c=(0,r.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e,a));return c.state={title:"",content:""},c}return(0,i.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id?this.props.match.params.id:"";m.default.post({url:"/article/getConetent",data:{id:t}}).then(function(t){1==t.code&&e.setState({title:t.data.title,content:t.data.content})})}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.content;return u.default.createElement("div",{className:"article-detail"},u.default.createElement(d.default,null),u.default.createElement("div",{className:"detail-container"},u.default.createElement("div",{className:"author-info"},u.default.createElement("img",{className:"avatar",src:"http://localhost:3000/images/classify2.jpg",alt:""}),u.default.createElement("p",{className:"author-name"},"越祈"),u.default.createElement("div",{className:"relate-artile"},u.default.createElement("p",{className:"relate-artile-title"},"相关文章"),u.default.createElement("p",{className:"relate-article-item"},"这里是香瓜文章标题"),u.default.createElement("p",{className:"relate-article-item"},"这里是香瓜文章标题"),u.default.createElement("p",{className:"relate-article-item"},"这里是香瓜文章标题"),u.default.createElement("p",{className:"relate-article-item"},"这里是香瓜文章标题"))),u.default.createElement("div",{className:"contant-wrapper"},u.default.createElement("p",{className:"article-title"},t),u.default.createElement("div",{className:"article-content",dangerouslySetInnerHTML:{__html:a}}))))}}]),t}(s.Component);t.default=f}}]);