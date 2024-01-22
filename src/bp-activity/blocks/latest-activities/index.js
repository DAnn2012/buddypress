(()=>{"use strict";var e={n:t=>{var i=t&&t.__esModule?()=>t.default:()=>t;return e.d(i,{a:i}),i},d:(t,i)=>{for(var s in i)e.o(i,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:i[s]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.blocks,i=window.React,s=window.wp.blockEditor,a=window.wp.components,o=window.wp.i18n,r=window.wp.serverSideRender;var n=e.n(r);const l=window.bp.blockData,d=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"bp/latest-activities","title":"Latest Activities","category":"widgets","icon":"buddicons-activity","description":"Display the latest updates of the post author (when used into a page or post), of the displayed user (when viewing their profile) or of your community.","keywords":["BuddyPress","activity","community"],"textdomain":"buddypress","attributes":{"title":{"type":"string","default":"Latest updates"},"maxActivities":{"type":"number","default":5},"type":{"type":"array","default":["activity_update"]},"postId":{"type":"number","default":0}},"supports":{"align":true},"editorScript":"file:index.js","style":"file:index.css"}');(0,t.registerBlockType)(d,{icon:{background:"#fff",foreground:"#d84800",src:"buddicons-activity"},edit:({attributes:e,setAttributes:t})=>{const r=(0,s.useBlockProps)(),{postId:d,maxActivities:p,type:c,title:u}=e,y=(0,l.currentPostId)(),b=(0,l.activityTypes)();return!d&&y&&(t({postId:y}),e.postId||(e.postId=y)),(0,i.createElement)("div",{...r},(0,i.createElement)(s.InspectorControls,null,(0,i.createElement)(a.PanelBody,{title:(0,o.__)("Settings","buddypress"),initialOpen:!0,className:"bp-latest-activities"},(0,i.createElement)(a.TextControl,{label:(0,o.__)("Title","buddypress"),value:u,onChange:e=>{t({title:e})}}),(0,i.createElement)(a.RangeControl,{label:(0,o.__)("Maximum amount to display","buddypress"),value:p,onChange:e=>t({maxActivities:e}),min:1,max:10,required:!0}),(0,i.createElement)(a.SelectControl,{multiple:!0,label:(0,o.__)("Type","buddypress"),value:c,options:b,onChange:e=>{t({type:e})}}))),(0,i.createElement)(a.Disabled,null,(0,i.createElement)(n(),{block:"bp/latest-activities",attributes:e})))}})})();