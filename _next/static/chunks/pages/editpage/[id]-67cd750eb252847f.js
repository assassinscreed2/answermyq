(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[69],{1017:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/editpage/[id]",function(){return t(3519)}])},7854:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var i=t(5893),r=t(2734),s=t(8396),o=t(6886),c=t(6242),u=t(4267),l=t(5861),a=t(7720),d=t(3321),x=t(8262),h=t(8462),f=t(891),m=t(214),p=t.n(m),j=t(7294),Z=t(6727),g=t(4713),w=t(1163);function b(e){var n=e.question,t=(0,r.Z)(),m=(0,s.Z)(t.breakpoints.down("sm")),b=(0,s.Z)(t.breakpoints.down("md")),y=(0,g.aF)(),P=y.user,C=(y.error,y.isLoading,(0,j.useState)(!1)),v=C[0],k=C[1],_=(0,w.useRouter)(),q=function(){k(!v)};return(0,i.jsx)(o.ZP,{container:!0,className:p().questionBackground,sx:{backgroundColor:"red",width:"100%",height:"100vh"},justifyContent:"center",children:(0,i.jsx)(o.ZP,{item:!0,children:(0,i.jsxs)(c.Z,{sx:{bgcolor:"#B8FFF9",maxWidth:m?"28em":"60em",mt:"2em",boxShadow:"21"},children:[(0,i.jsx)(u.Z,{sx:{pt:"0",pb:"0",boxShadow:"5"},children:(0,i.jsx)(l.Z,{variant:"h4",sx:{pt:"5px",pb:"10px",fontFamily:"Bree Serif"},children:n.title})}),(0,i.jsx)(a.Z,{}),(0,i.jsxs)(o.ZP,{container:!0,direction:"column",justifyContent:"space-between",children:[(0,i.jsx)(o.ZP,{item:!0,children:(0,i.jsx)(u.Z,{sx:{minHeight:"5.5em"},children:(0,i.jsx)(l.Z,{fontFamily:"Cairo",children:n.question})})}),(0,i.jsx)(a.Z,{}),(0,i.jsxs)(o.ZP,{container:!0,justifyContent:"flex-end",sx:{pr:"1em"},children:[(0,i.jsx)(o.ZP,{item:!0,children:(0,i.jsx)(l.Z,{sx:{fontSize:"0.8em",display:"inline",px:"7px",py:"4px"},children:"Tags:"})}),n.tags.map((function(e){return(0,i.jsx)(o.ZP,{item:!0,sx:{pr:"0.3em"},children:(0,i.jsx)(l.Z,{sx:{fontSize:"0.8em",bgcolor:"#D9D9D9",display:"inline",px:"7px",py:"4px",borderRadius:"30%"},children:e.label})})}))]})]}),(0,i.jsxs)(o.ZP,{container:!0,direction:"row",justifyContent:"center",alignContent:"space-between",sx:{minHeight:"24em"},children:[(0,i.jsx)(o.ZP,{item:!0,children:v?(0,i.jsx)(x.Z,{fullWidth:"true",open:v,children:(0,i.jsx)(Z.Z,{question:n,handleOpen:q})}):(0,i.jsx)(d.Z,{onClick:function(){P?q():_.push("/api/auth/login")},children:"Answer This Question"})}),(0,i.jsxs)(o.ZP,{item:!0,sx:{width:"90%",minWidth:b?void 0:"57em"},children:[(0,i.jsx)(l.Z,{children:"Answers"}),(0,i.jsx)(h.Z,{sx:{bgcolor:"#EEEEEE",position:"relative",overflow:"scroll",maxHeight:300,minHeight:"20em",marginTop:"1em"},children:n.answer.map((function(e){return(0,i.jsx)(f.ZP,{children:(0,i.jsx)(l.Z,{children:e})})}))})]})]}),(0,i.jsx)(o.ZP,{container:!0,direction:"row",sx:{mt:"1em"},justifyContent:"flex-end",children:(0,i.jsx)(o.ZP,{item:!0,sx:{mr:"2em"},children:(0,i.jsx)(d.Z,{color:"error",children:"Close"})})})]})})})}},3519:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return b}});var i=t(7568),r=t(655),s=t(5893),o=(t(7854),t(1163)),c=t(7294),u=t(797),l=t(6886),a=t(6242),d=t(4267),x=t(5861),h=t(5441),f=t(7720),m=t(3321),p=t(214),j=t.n(p),Z=(t(6727),t(7918)),g=t(1496);function w(e){var n=e.question,t=(0,c.useState)(!1),p=(t[0],t[1],(0,c.useState)(n.tags)),w=p[0],b=p[1],y=(0,c.useRef)(),P=(0,c.useRef)(),C=(0,c.useRef)(),v=(0,o.useRouter)();function k(){return(k=(0,i.Z)((function(){var e;return(0,r.__generator)(this,(function(t){switch(t.label){case 0:return e={title:y.current.value,question:P.current.value,tags:w,answer:n.answer},[4,fetch("/api/question/".concat(n._id),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(){v.push("/question")}))];case 1:return t.sent(),[2]}}))}))).apply(this,arguments)}var _=(0,g.ZP)("li")((function(e){return{margin:e.theme.spacing(.5)}}));return(0,s.jsx)(l.ZP,{container:!0,className:j().questionBackground,sx:{backgroundColor:"red",width:"100%",height:"100vh"},justifyContent:"center",children:(0,s.jsx)(l.ZP,{item:!0,children:(0,s.jsxs)(a.Z,{sx:{bgcolor:"#B8FFF9",maxWidth:"60em",width:"57em",boxShadow:"21",marginTop:"1em"},children:[(0,s.jsxs)(d.Z,{sx:{pt:"0",pb:"0"},children:[(0,s.jsx)(x.Z,{variant:"h4",sx:{mt:"5px",mb:"8px",fontFamily:"Bree Serif"},children:"Enter Title"}),(0,s.jsx)(h.Z,{inputRef:y,sx:{backgroundColor:"white"},fullWidth:!0,defaultValue:n.title})]}),(0,s.jsx)(f.Z,{}),(0,s.jsxs)(l.ZP,{container:!0,direction:"column",justifyContent:"space-between",children:[(0,s.jsx)(l.ZP,{item:!0,children:(0,s.jsx)(d.Z,{children:(0,s.jsx)(h.Z,{sx:{width:"100%",backgroundColor:"white"},inputRef:P,multiline:!0,rows:15,defaultValue:n.question})})}),(0,s.jsx)(f.Z,{}),(0,s.jsxs)(l.ZP,{item:!0,container:!0,direction:"row",children:[(0,s.jsx)(l.ZP,{item:!0,sx:{display:"flex",justifyContent:"center",flexWrap:"wrap",listStyle:"none",p:.5,m:0},component:"ul",sm:!0,children:w.map((function(e){return(0,s.jsx)(_,{children:(0,s.jsx)(Z.Z,{sx:{backgroundColor:"white"},label:e.label,onDelete:(n=e,function(){b((function(e){return e.filter((function(e){return e.key!==n.key}))}))})})},e.key);var n}))}),(0,s.jsxs)(l.ZP,{item:!0,container:!0,sm:!0,alignItems:"center",children:[(0,s.jsx)(l.ZP,{item:!0,children:(0,s.jsx)(m.Z,{onClick:function(e){return function(){var e=C.current.value;w.length<4?""!=e&&(e.length>10&&(e=e.substring(0,10)),b((function(n){return(0,u.Z)(n).concat([{key:w.length,label:e}])}))):alert("Maximum can be 3")}()},children:"Add Tags"})}),(0,s.jsx)(l.ZP,{item:!0,children:(0,s.jsx)(h.Z,{inputRef:C,size:"small",sx:{backgroundColor:"white"}})})]})]})]}),(0,s.jsx)(l.ZP,{container:!0,direction:"row",sx:{mt:"1em"},justifyContent:"flex-end",children:(0,s.jsx)(l.ZP,{item:!0,sx:{mr:"2em"},children:(0,s.jsx)(m.Z,{color:"error",onClick:function(){!function(){k.apply(this,arguments)}()},children:"Update"})})})]})})})}function b(){var e=(0,o.useRouter)(),n=(0,c.useState)(null),t=n[0],u=n[1];return(0,c.useEffect)((function(){function n(){return n=(0,i.Z)((function(){var n;return(0,r.__generator)(this,(function(t){switch(t.label){case 0:return[4,fetch("/api/question/".concat(e.query.id))];case 1:return[4,t.sent().json()];case 2:return n=t.sent(),u(n),[2]}}))})),n.apply(this,arguments)}e.query.id&&function(){n.apply(this,arguments)}()}),[e.query.id]),t&&(0,s.jsx)(w,{question:t})}}},function(e){e.O(0,[486,441,464,886,774,888,179],(function(){return n=1017,e(e.s=n);var n}));var n=e.O();_N_E=n}]);