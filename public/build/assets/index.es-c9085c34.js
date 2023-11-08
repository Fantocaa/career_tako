import{r as n,t as h}from"./app-0531c79f.js";import{n as F,s as p,X as nn}from"./styled-components.browser.esm-dc05e184.js";var K;function ie(e,t){return e[t]}function Ne(e,t){return t.split(".").reduce((o,a)=>{const l=a.match(/[^\]\\[.]+/g);if(l&&l.length>1)for(let i=0;i<l.length;i++)return o[l[i]][l[i+1]];return o[a]},e)}function on(e=[],t,o=0){return[...e.slice(0,o),t,...e.slice(o)]}function an(e=[],t,o="id"){const a=e.slice(),l=ie(t,o);return l?a.splice(a.findIndex(i=>ie(i,o)===l),1):a.splice(a.findIndex(i=>i===t),1),a}function gt(e){return e.map((t,o)=>{const a=Object.assign(Object.assign({},t),{sortable:t.sortable||!!t.sortFunction||void 0});return t.id||(a.id=o+1),a})}function pe(e,t){return Math.ceil(e/t)}function ze(e,t){return Math.min(e,t)}(function(e){e.ASC="asc",e.DESC="desc"})(K||(K={}));const k=()=>null;function xt(e,t=[],o=[]){let a={},l=[...o];return t.length&&t.forEach(i=>{if(!i.when||typeof i.when!="function")throw new Error('"when" must be defined in the conditional style object and must be function');i.when(e)&&(a=i.style||{},i.classNames&&(l=[...l,...i.classNames]),typeof i.style=="function"&&(a=i.style(e)||{}))}),{style:a,classNames:l.join(" ")}}function Oe(e,t=[],o="id"){const a=ie(e,o);return a?t.some(l=>ie(l,o)===a):t.some(l=>l===e)}function Se(e,t){return t?e.findIndex(o=>be(o.id,t)):-1}function be(e,t){return e==t}function ln(e,t){const o=!e.toggleOnSelectedRowsChange;switch(t.type){case"SELECT_ALL_ROWS":{const{keyField:a,rows:l,rowCount:i,mergeSelections:s}=t,g=!e.allSelected,b=!e.toggleOnSelectedRowsChange;if(s){const y=g?[...e.selectedRows,...l.filter(u=>!Oe(u,e.selectedRows,a))]:e.selectedRows.filter(u=>!Oe(u,l,a));return Object.assign(Object.assign({},e),{allSelected:g,selectedCount:y.length,selectedRows:y,toggleOnSelectedRowsChange:b})}return Object.assign(Object.assign({},e),{allSelected:g,selectedCount:g?i:0,selectedRows:g?l:[],toggleOnSelectedRowsChange:b})}case"SELECT_SINGLE_ROW":{const{keyField:a,row:l,isSelected:i,rowCount:s,singleSelect:g}=t;return g?i?Object.assign(Object.assign({},e),{selectedCount:0,allSelected:!1,selectedRows:[],toggleOnSelectedRowsChange:o}):Object.assign(Object.assign({},e),{selectedCount:1,allSelected:!1,selectedRows:[l],toggleOnSelectedRowsChange:o}):i?Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length>0?e.selectedRows.length-1:0,allSelected:!1,selectedRows:an(e.selectedRows,l,a),toggleOnSelectedRowsChange:o}):Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length+1,allSelected:e.selectedRows.length+1===s,selectedRows:on(e.selectedRows,l),toggleOnSelectedRowsChange:o})}case"SELECT_MULTIPLE_ROWS":{const{keyField:a,selectedRows:l,totalRows:i,mergeSelections:s}=t;if(s){const g=[...e.selectedRows,...l.filter(b=>!Oe(b,e.selectedRows,a))];return Object.assign(Object.assign({},e),{selectedCount:g.length,allSelected:!1,selectedRows:g,toggleOnSelectedRowsChange:o})}return Object.assign(Object.assign({},e),{selectedCount:l.length,allSelected:l.length===i,selectedRows:l,toggleOnSelectedRowsChange:o})}case"CLEAR_SELECTED_ROWS":{const{selectedRowsFlag:a}=t;return Object.assign(Object.assign({},e),{allSelected:!1,selectedCount:0,selectedRows:[],selectedRowsFlag:a})}case"SORT_CHANGE":{const{sortDirection:a,selectedColumn:l,clearSelectedOnSort:i}=t;return Object.assign(Object.assign(Object.assign({},e),{selectedColumn:l,sortDirection:a,currentPage:1}),i&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:o})}case"CHANGE_PAGE":{const{page:a,paginationServer:l,visibleOnly:i,persistSelectedOnPageChange:s}=t,g=l&&s,b=l&&!s||i;return Object.assign(Object.assign(Object.assign(Object.assign({},e),{currentPage:a}),g&&{allSelected:!1}),b&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:o})}case"CHANGE_ROWS_PER_PAGE":{const{rowsPerPage:a,page:l}=t;return Object.assign(Object.assign({},e),{currentPage:l,rowsPerPage:a})}}}const rn=F`
	pointer-events: none;
	opacity: 0.4;
`,sn=p.div`
	position: relative;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	max-width: 100%;
	${({disabled:e})=>e&&rn};
	${({theme:e})=>e.table.style};
`,dn=F`
	position: sticky;
	position: -webkit-sticky; /* Safari */
	top: 0;
	z-index: 1;
`,cn=p.div`
	display: flex;
	width: 100%;
	${({$fixedHeader:e})=>e&&dn};
	${({theme:e})=>e.head.style};
`,gn=p.div`
	display: flex;
	align-items: stretch;
	width: 100%;
	${({theme:e})=>e.headRow.style};
	${({$dense:e,theme:t})=>e&&t.headRow.denseStyle};
`,Ct=(e,...t)=>F`
		@media screen and (max-width: ${599}px) {
			${F(e,...t)}
		}
	`,un=(e,...t)=>F`
		@media screen and (max-width: ${959}px) {
			${F(e,...t)}
		}
	`,pn=(e,...t)=>F`
		@media screen and (max-width: ${1280}px) {
			${F(e,...t)}
		}
	`,bn=e=>(t,...o)=>F`
				@media screen and (max-width: ${e}px) {
					${F(t,...o)}
				}
			`,de=p.div`
	position: relative;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	line-height: normal;
	${({theme:e,$headCell:t})=>e[t?"headCells":"cells"].style};
	${({$noPadding:e})=>e&&"padding: 0"};
`,yt=p(de)`
	flex-grow: ${({button:e,grow:t})=>t===0||e?0:t||1};
	flex-shrink: 0;
	flex-basis: 0;
	max-width: ${({maxWidth:e})=>e||"100%"};
	min-width: ${({minWidth:e})=>e||"100px"};
	${({width:e})=>e&&F`
			min-width: ${e};
			max-width: ${e};
		`};
	${({right:e})=>e&&"justify-content: flex-end"};
	${({button:e,center:t})=>(t||e)&&"justify-content: center"};
	${({compact:e,button:t})=>(e||t)&&"padding: 0"};

	/* handle hiding cells */
	${({hide:e})=>e&&e==="sm"&&Ct`
    display: none;
  `};
	${({hide:e})=>e&&e==="md"&&un`
    display: none;
  `};
	${({hide:e})=>e&&e==="lg"&&pn`
    display: none;
  `};
	${({hide:e})=>e&&Number.isInteger(e)&&bn(e)`
    display: none;
  `};
`,mn=F`
	div:first-child {
		white-space: ${({$wrapCell:e})=>e?"normal":"nowrap"};
		overflow: ${({$allowOverflow:e})=>e?"visible":"hidden"};
		text-overflow: ellipsis;
	}
`,hn=p(yt).attrs(e=>({style:e.style}))`
	${({$renderAsCell:e})=>!e&&mn};
	${({theme:e,$isDragging:t})=>t&&e.cells.draggingStyle};
	${({$cellStyle:e})=>e};
`;var wn=n.memo(function({id:e,column:t,row:o,rowIndex:a,dataTag:l,isDragging:i,onDragStart:s,onDragOver:g,onDragEnd:b,onDragEnter:y,onDragLeave:u}){const{style:w,classNames:j}=xt(o,t.conditionalCellStyles,["rdt_TableCell"]);return n.createElement(hn,{id:e,"data-column-id":t.id,role:"cell",className:j,"data-tag":l,$cellStyle:t.style,$renderAsCell:!!t.cell,$allowOverflow:t.allowOverflow,button:t.button,center:t.center,compact:t.compact,grow:t.grow,hide:t.hide,maxWidth:t.maxWidth,minWidth:t.minWidth,right:t.right,width:t.width,$wrapCell:t.wrap,style:w,$isDragging:i,onDragStart:s,onDragOver:g,onDragEnd:b,onDragEnter:y,onDragLeave:u},!t.cell&&n.createElement("div",{"data-tag":l},function(R,f,D,x){if(!f)return null;if(typeof f!="string"&&typeof f!="function")throw new Error("selector must be a . delimited string eg (my.property) or function (e.g. row => row.field");return D&&typeof D=="function"?D(R,x):f&&typeof f=="function"?f(R,x):Ne(R,f)}(o,t.selector,t.format,a)),t.cell&&t.cell(o,a,t,e))}),Rt=n.memo(function({name:e,component:t="input",componentOptions:o={style:{}},indeterminate:a=!1,checked:l=!1,disabled:i=!1,onClick:s=k}){const g=t,b=g!=="input"?o.style:(u=>Object.assign(Object.assign({fontSize:"18px"},!u&&{cursor:"pointer"}),{padding:0,marginTop:"1px",verticalAlign:"middle",position:"relative"}))(i),y=n.useMemo(()=>function(u,...w){let j;return Object.keys(u).map(R=>u[R]).forEach((R,f)=>{typeof R=="function"&&(j=Object.assign(Object.assign({},u),{[Object.keys(u)[f]]:R(...w)}))}),j||u}(o,a),[o,a]);return n.createElement(g,Object.assign({type:"checkbox",ref:u=>{u&&(u.indeterminate=a)},style:b,onClick:i?k:s,name:e,"aria-label":e,checked:l,disabled:i},y,{onChange:k}))});const fn=p(de)`
	flex: 0 0 48px;
	min-width: 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
`;function xn({name:e,keyField:t,row:o,rowCount:a,selected:l,selectableRowsComponent:i,selectableRowsComponentProps:s,selectableRowsSingle:g,selectableRowDisabled:b,onSelectedRow:y}){const u=!(!b||!b(o));return n.createElement(fn,{onClick:w=>w.stopPropagation(),className:"rdt_TableCell",$noPadding:!0},n.createElement(Rt,{name:e,component:i,componentOptions:s,checked:l,"aria-checked":l,onClick:()=>{y({type:"SELECT_SINGLE_ROW",row:o,isSelected:l,keyField:t,rowCount:a,singleSelect:g})},disabled:u}))}const Cn=p.button`
	display: inline-flex;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	border: none;
	background-color: transparent;
	${({theme:e})=>e.expanderButton.style};
`;function yn({disabled:e=!1,expanded:t=!1,expandableIcon:o,id:a,row:l,onToggled:i}){const s=t?o.expanded:o.collapsed;return n.createElement(Cn,{"aria-disabled":e,onClick:()=>i&&i(l),"data-testid":`expander-button-${a}`,disabled:e,"aria-label":t?"Collapse Row":"Expand Row",role:"button",type:"button"},s)}const Rn=p(de)`
	white-space: nowrap;
	font-weight: 400;
	min-width: 48px;
	${({theme:e})=>e.expanderCell.style};
`;function vn({row:e,expanded:t=!1,expandableIcon:o,id:a,onToggled:l,disabled:i=!1}){return n.createElement(Rn,{onClick:s=>s.stopPropagation(),$noPadding:!0},n.createElement(yn,{id:a,row:e,expanded:t,expandableIcon:o,disabled:i,onToggled:l}))}const Sn=p.div`
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.expanderRow.style};
	${({$extendedRowStyle:e})=>e};
`;var En=n.memo(function({data:e,ExpanderComponent:t,expanderComponentProps:o,extendedRowStyle:a,extendedClassNames:l}){const i=["rdt_ExpanderRow",...l.split(" ").filter(s=>s!=="rdt_TableRow")].join(" ");return n.createElement(Sn,{className:i,$extendedRowStyle:a},n.createElement(t,Object.assign({data:e},o)))}),$e,We,ut;(function(e){e.LTR="ltr",e.RTL="rtl",e.AUTO="auto"})($e||($e={})),function(e){e.LEFT="left",e.RIGHT="right",e.CENTER="center"}(We||(We={})),function(e){e.SM="sm",e.MD="md",e.LG="lg"}(ut||(ut={}));const On=F`
	&:hover {
		${({$highlightOnHover:e,theme:t})=>e&&t.rows.highlightOnHoverStyle};
	}
`,$n=F`
	&:hover {
		cursor: pointer;
	}
`,Pn=p.div.attrs(e=>({style:e.style}))`
	display: flex;
	align-items: stretch;
	align-content: stretch;
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.rows.style};
	${({$dense:e,theme:t})=>e&&t.rows.denseStyle};
	${({$striped:e,theme:t})=>e&&t.rows.stripedStyle};
	${({$highlightOnHover:e})=>e&&On};
	${({$pointerOnHover:e})=>e&&$n};
	${({$selected:e,theme:t})=>e&&t.rows.selectedHighlightStyle};
`;function kn({columns:e=[],conditionalRowStyles:t=[],defaultExpanded:o=!1,defaultExpanderDisabled:a=!1,dense:l=!1,expandableIcon:i,expandableRows:s=!1,expandableRowsComponent:g,expandableRowsComponentProps:b,expandableRowsHideExpander:y,expandOnRowClicked:u=!1,expandOnRowDoubleClicked:w=!1,highlightOnHover:j=!1,id:R,expandableInheritConditionalStyles:f,keyField:D,onRowClicked:x=k,onRowDoubleClicked:P=k,onRowMouseEnter:H=k,onRowMouseLeave:S=k,onRowExpandToggled:E=k,onSelectedRow:L=k,pointerOnHover:M=!1,row:C,rowCount:v,rowIndex:U,selectableRowDisabled:A=null,selectableRows:N=!1,selectableRowsComponent:Q,selectableRowsComponentProps:$,selectableRowsHighlight:ne=!1,selectableRowsSingle:ce=!1,selected:oe,striped:ae=!1,draggingColumnId:Pe,onDragStart:ke,onDragOver:De,onDragEnd:He,onDragEnter:G,onDragLeave:he}){const[V,we]=n.useState(o);n.useEffect(()=>{we(o)},[o]);const Z=n.useCallback(()=>{we(!V),E(!V,C)},[V,E,C]),Fe=M||s&&(u||w),je=n.useCallback(O=>{O.target&&O.target.getAttribute("data-tag")==="allowRowEvents"&&(x(C,O),!a&&s&&u&&Z())},[a,u,s,Z,x,C]),fe=n.useCallback(O=>{O.target&&O.target.getAttribute("data-tag")==="allowRowEvents"&&(P(C,O),!a&&s&&w&&Z())},[a,w,s,Z,P,C]),Ie=n.useCallback(O=>{H(C,O)},[H,C]),X=n.useCallback(O=>{S(C,O)},[S,C]),q=ie(C,D),{style:xe,classNames:Ce}=xt(C,t,["rdt_TableRow"]),Te=ne&&oe,Le=f?xe:{},Me=ae&&U%2==0;return n.createElement(n.Fragment,null,n.createElement(Pn,{id:`row-${R}`,role:"row",$striped:Me,$highlightOnHover:j,$pointerOnHover:!a&&Fe,$dense:l,onClick:je,onDoubleClick:fe,onMouseEnter:Ie,onMouseLeave:X,className:Ce,$selected:Te,style:xe},N&&n.createElement(xn,{name:`select-row-${q}`,keyField:D,row:C,rowCount:v,selected:oe,selectableRowsComponent:Q,selectableRowsComponentProps:$,selectableRowDisabled:A,selectableRowsSingle:ce,onSelectedRow:L}),s&&!y&&n.createElement(vn,{id:q,expandableIcon:i,expanded:V,row:C,onToggled:Z,disabled:a}),e.map(O=>O.omit?null:n.createElement(wn,{id:`cell-${O.id}-${q}`,key:`cell-${O.id}-${q}`,dataTag:O.ignoreRowClick||O.button?null:"allowRowEvents",column:O,row:C,rowIndex:U,isDragging:be(Pe,O.id),onDragStart:ke,onDragOver:De,onDragEnd:He,onDragEnter:G,onDragLeave:he}))),s&&V&&n.createElement(En,{key:`expander-${q}`,data:C,extendedRowStyle:Le,extendedClassNames:Ce,ExpanderComponent:g,expanderComponentProps:b}))}const Dn=p.span`
	padding: 2px;
	color: inherit;
	flex-grow: 0;
	flex-shrink: 0;
	${({$sortActive:e})=>e?"opacity: 1":"opacity: 0"};
	${({$sortDirection:e})=>e==="desc"&&"transform: rotate(180deg)"};
`,Hn=({sortActive:e,sortDirection:t})=>h.createElement(Dn,{$sortActive:e,$sortDirection:t},"▲"),Fn=p(yt)`
	${({button:e})=>e&&"text-align: center"};
	${({theme:e,$isDragging:t})=>t&&e.headCells.draggingStyle};
`,jn=F`
	cursor: pointer;
	span.__rdt_custom_sort_icon__ {
		i,
		svg {
			transform: 'translate3d(0, 0, 0)';
			${({sortActive:e})=>e?"opacity: 1":"opacity: 0"};
			color: inherit;
			font-size: 18px;
			height: 18px;
			width: 18px;
			backface-visibility: hidden;
			transform-style: preserve-3d;
			transition-duration: 95ms;
			transition-property: transform;
		}

		&.asc i,
		&.asc svg {
			transform: rotate(180deg);
		}
	}

	${({sortActive:e})=>!e&&F`
			&:hover,
			&:focus {
				opacity: 0.7;

				span,
				span.__rdt_custom_sort_icon__ * {
					opacity: 0.7;
				}
			}
		`};
`,In=p.div`
	display: inline-flex;
	align-items: center;
	justify-content: inherit;
	height: 100%;
	width: 100%;
	outline: none;
	user-select: none;
	overflow: hidden;
	${({disabled:e})=>!e&&jn};
`,Tn=p.div`
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;var Ln=n.memo(function({column:e,disabled:t,draggingColumnId:o,selectedColumn:a={},sortDirection:l,sortIcon:i,sortServer:s,pagination:g,paginationServer:b,persistSelectedOnSort:y,selectableRowsVisibleOnly:u,onSort:w,onDragStart:j,onDragOver:R,onDragEnd:f,onDragEnter:D,onDragLeave:x}){n.useEffect(()=>{typeof e.selector=="string"&&console.error(`Warning: ${e.selector} is a string based column selector which has been deprecated as of v7 and will be removed in v8. Instead, use a selector function e.g. row => row[field]...`)},[]);const[P,H]=n.useState(!1),S=n.useRef(null);if(n.useEffect(()=>{S.current&&H(S.current.scrollWidth>S.current.clientWidth)},[P]),e.omit)return null;const E=()=>{if(!e.sortable&&!e.selector)return;let $=l;be(a.id,e.id)&&($=l===K.ASC?K.DESC:K.ASC),w({type:"SORT_CHANGE",sortDirection:$,selectedColumn:e,clearSelectedOnSort:g&&b&&!y||s||u})},L=$=>n.createElement(Hn,{sortActive:$,sortDirection:l}),M=()=>n.createElement("span",{className:[l,"__rdt_custom_sort_icon__"].join(" ")},i),C=!(!e.sortable||!be(a.id,e.id)),v=!e.sortable||t,U=e.sortable&&!i&&!e.right,A=e.sortable&&!i&&e.right,N=e.sortable&&i&&!e.right,Q=e.sortable&&i&&e.right;return n.createElement(Fn,{"data-column-id":e.id,className:"rdt_TableCol",$headCell:!0,allowOverflow:e.allowOverflow,button:e.button,compact:e.compact,grow:e.grow,hide:e.hide,maxWidth:e.maxWidth,minWidth:e.minWidth,right:e.right,center:e.center,width:e.width,draggable:e.reorder,$isDragging:be(e.id,o),onDragStart:j,onDragOver:R,onDragEnd:f,onDragEnter:D,onDragLeave:x},e.name&&n.createElement(In,{"data-column-id":e.id,"data-sort-id":e.id,role:"columnheader",tabIndex:0,className:"rdt_TableCol_Sortable",onClick:v?void 0:E,onKeyPress:v?void 0:$=>{$.key==="Enter"&&E()},sortActive:!v&&C,disabled:v},!v&&Q&&M(),!v&&A&&L(C),typeof e.name=="string"?n.createElement(Tn,{title:P?e.name:void 0,ref:S,"data-column-id":e.id},e.name):e.name,!v&&N&&M(),!v&&U&&L(C)))});const Mn=p(de)`
	flex: 0 0 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	font-size: unset;
`;function An({headCell:e=!0,rowData:t,keyField:o,allSelected:a,mergeSelections:l,selectedRows:i,selectableRowsComponent:s,selectableRowsComponentProps:g,selectableRowDisabled:b,onSelectAllRows:y}){const u=i.length>0&&!a,w=b?t.filter(f=>!b(f)):t,j=w.length===0,R=Math.min(t.length,w.length);return n.createElement(Mn,{className:"rdt_TableCol",$headCell:e,$noPadding:!0},n.createElement(Rt,{name:"select-all-rows",component:s,componentOptions:g,onClick:()=>{y({type:"SELECT_ALL_ROWS",rows:w,rowCount:R,mergeSelections:l,keyField:o})},checked:a,indeterminate:u,disabled:j}))}function vt(e=$e.AUTO){const t=typeof window=="object",[o,a]=n.useState(!1);return n.useEffect(()=>{if(t)if(e!=="auto")a(e==="rtl");else{const l=!(!window.document||!window.document.createElement),i=document.getElementsByTagName("BODY")[0],s=document.getElementsByTagName("HTML")[0],g=i.dir==="rtl"||s.dir==="rtl";a(l&&g)}},[e,t]),o}const _n=p.div`
	display: flex;
	align-items: center;
	flex: 1 0 auto;
	height: 100%;
	color: ${({theme:e})=>e.contextMenu.fontColor};
	font-size: ${({theme:e})=>e.contextMenu.fontSize};
	font-weight: 400;
`,zn=p.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-wrap: wrap;
`,pt=p.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	box-sizing: inherit;
	z-index: 1;
	align-items: center;
	justify-content: space-between;
	display: flex;
	${({$rtl:e})=>e&&"direction: rtl"};
	${({theme:e})=>e.contextMenu.style};
	${({theme:e,$visible:t})=>t&&e.contextMenu.activeStyle};
`;function Nn({contextMessage:e,contextActions:t,contextComponent:o,selectedCount:a,direction:l}){const i=vt(l),s=a>0;return o?n.createElement(pt,{$visible:s},n.cloneElement(o,{selectedCount:a})):n.createElement(pt,{$visible:s,$rtl:i},n.createElement(_n,null,((g,b,y)=>{if(b===0)return null;const u=b===1?g.singular:g.plural;return y?`${b} ${g.message||""} ${u}`:`${b} ${u} ${g.message||""}`})(e,a,i)),n.createElement(zn,null,t))}const Wn=p.div`
	position: relative;
	box-sizing: border-box;
	overflow: hidden;
	display: flex;
	flex: 1 1 auto;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	flex-wrap: wrap;
	${({theme:e})=>e.header.style}
`,Bn=p.div`
	flex: 1 0 auto;
	color: ${({theme:e})=>e.header.fontColor};
	font-size: ${({theme:e})=>e.header.fontSize};
	font-weight: 400;
`,Gn=p.div`
	flex: 1 0 auto;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	> * {
		margin-left: 5px;
	}
`,Vn=({title:e,actions:t=null,contextMessage:o,contextActions:a,contextComponent:l,selectedCount:i,direction:s,showMenu:g=!0})=>n.createElement(Wn,{className:"rdt_TableHeader",role:"heading","aria-level":1},n.createElement(Bn,null,e),t&&n.createElement(Gn,null,t),g&&n.createElement(Nn,{contextMessage:o,contextActions:a,contextComponent:l,direction:s,selectedCount:i}));function St(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(o[a[l]]=e[a[l]])}return o}const Un={left:"flex-start",right:"flex-end",center:"center"},Qn=p.header`
	position: relative;
	display: flex;
	flex: 1 1 auto;
	box-sizing: border-box;
	align-items: center;
	padding: 4px 16px 4px 24px;
	width: 100%;
	justify-content: ${({align:e})=>Un[e]};
	flex-wrap: ${({$wrapContent:e})=>e?"wrap":"nowrap"};
	${({theme:e})=>e.subHeader.style}
`,Xn=e=>{var{align:t="right",wrapContent:o=!0}=e,a=St(e,["align","wrapContent"]);return n.createElement(Qn,Object.assign({align:t,$wrapContent:o},a))},Yn=p.div`
	display: flex;
	flex-direction: column;
`,Jn=p.div`
	position: relative;
	width: 100%;
	border-radius: inherit;
	${({$responsive:e,$fixedHeader:t})=>e&&F`
			overflow-x: auto;

			// hidden prevents vertical scrolling in firefox when fixedHeader is disabled
			overflow-y: ${t?"auto":"hidden"};
			min-height: 0;
		`};

	${({$fixedHeader:e=!1,$fixedHeaderScrollHeight:t="100vh"})=>e&&F`
			max-height: ${t};
			-webkit-overflow-scrolling: touch;
		`};

	${({theme:e})=>e.responsiveWrapper.style};
`,bt=p.div`
	position: relative;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${e=>e.theme.progress.style};
`,Kn=p.div`
	position: relative;
	width: 100%;
	${({theme:e})=>e.tableWrapper.style};
`,Zn=p(de)`
	white-space: nowrap;
	${({theme:e})=>e.expanderCell.style};
`,qn=p.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${({theme:e})=>e.noData.style};
`,eo=()=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},h.createElement("path",{d:"M7 10l5 5 5-5z"}),h.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),to=p.select`
	cursor: pointer;
	height: 24px;
	max-width: 100%;
	user-select: none;
	padding-left: 8px;
	padding-right: 24px;
	box-sizing: content-box;
	font-size: inherit;
	color: inherit;
	border: none;
	background-color: transparent;
	appearance: none;
	direction: ltr;
	flex-shrink: 0;

	&::-ms-expand {
		display: none;
	}

	&:disabled::-ms-expand {
		background: #f60;
	}

	option {
		color: initial;
	}
`,no=p.div`
	position: relative;
	flex-shrink: 0;
	font-size: inherit;
	color: inherit;
	margin-top: 1px;

	svg {
		top: 0;
		right: 0;
		color: inherit;
		position: absolute;
		fill: currentColor;
		width: 24px;
		height: 24px;
		display: inline-block;
		user-select: none;
		pointer-events: none;
	}
`,oo=e=>{var{defaultValue:t,onChange:o}=e,a=St(e,["defaultValue","onChange"]);return n.createElement(no,null,n.createElement(to,Object.assign({onChange:o,defaultValue:t},a)),n.createElement(eo,null))},r={columns:[],data:[],title:"",keyField:"id",selectableRows:!1,selectableRowsHighlight:!1,selectableRowsNoSelectAll:!1,selectableRowSelected:null,selectableRowDisabled:null,selectableRowsComponent:"input",selectableRowsComponentProps:{},selectableRowsVisibleOnly:!1,selectableRowsSingle:!1,clearSelectedRows:!1,expandableRows:!1,expandableRowDisabled:null,expandableRowExpanded:null,expandOnRowClicked:!1,expandableRowsHideExpander:!1,expandOnRowDoubleClicked:!1,expandableInheritConditionalStyles:!1,expandableRowsComponent:function(){return h.createElement("div",null,"To add an expander pass in a component instance via ",h.createElement("strong",null,"expandableRowsComponent"),". You can then access props.data from this component.")},expandableIcon:{collapsed:h.createElement(()=>h.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},h.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),h.createElement("path",{d:"M0-.25h24v24H0z",fill:"none"})),null),expanded:h.createElement(()=>h.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},h.createElement("path",{d:"M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"}),h.createElement("path",{d:"M0-.75h24v24H0z",fill:"none"})),null)},expandableRowsComponentProps:{},progressPending:!1,progressComponent:h.createElement("div",{style:{fontSize:"24px",fontWeight:700,padding:"24px"}},"Loading..."),persistTableHead:!1,sortIcon:null,sortFunction:null,sortServer:!1,striped:!1,highlightOnHover:!1,pointerOnHover:!1,noContextMenu:!1,contextMessage:{singular:"item",plural:"items",message:"selected"},actions:null,contextActions:null,contextComponent:null,defaultSortFieldId:null,defaultSortAsc:!0,responsive:!0,noDataComponent:h.createElement("div",{style:{padding:"24px"}},"There are no records to display"),disabled:!1,noTableHead:!1,noHeader:!1,subHeader:!1,subHeaderAlign:We.RIGHT,subHeaderWrap:!0,subHeaderComponent:null,fixedHeader:!1,fixedHeaderScrollHeight:"100vh",pagination:!1,paginationServer:!1,paginationServerOptions:{persistSelectedOnSort:!1,persistSelectedOnPageChange:!1},paginationDefaultPage:1,paginationResetDefaultPage:!1,paginationTotalRows:0,paginationPerPage:10,paginationRowsPerPageOptions:[10,15,20,25,30],paginationComponent:null,paginationComponentOptions:{},paginationIconFirstPage:h.createElement(()=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},h.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),h.createElement("path",{fill:"none",d:"M24 24H0V0h24v24z"})),null),paginationIconLastPage:h.createElement(()=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},h.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),h.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"})),null),paginationIconNext:h.createElement(()=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},h.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),h.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),null),paginationIconPrevious:h.createElement(()=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},h.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),h.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),null),dense:!1,conditionalRowStyles:[],theme:"default",customStyles:{},direction:$e.AUTO,onChangePage:k,onChangeRowsPerPage:k,onRowClicked:k,onRowDoubleClicked:k,onRowMouseEnter:k,onRowMouseLeave:k,onRowExpandToggled:k,onSelectedRowsChange:k,onSort:k,onColumnOrderChange:k},ao={rowsPerPageText:"Rows per page:",rangeSeparatorText:"of",noRowsPerPage:!1,selectAllRowsItem:!1,selectAllRowsItemText:"All"},lo=p.nav`
	display: flex;
	flex: 1 1 auto;
	justify-content: flex-end;
	align-items: center;
	box-sizing: border-box;
	padding-right: 8px;
	padding-left: 8px;
	width: 100%;
	${({theme:e})=>e.pagination.style};
`,Ee=p.button`
	position: relative;
	display: block;
	user-select: none;
	border: none;
	${({theme:e})=>e.pagination.pageButtonsStyle};
	${({$isRTL:e})=>e&&"transform: scale(-1, -1)"};
`,ro=p.div`
	display: flex;
	align-items: center;
	border-radius: 4px;
	white-space: nowrap;
	${Ct`
    width: 100%;
    justify-content: space-around;
  `};
`,Et=p.span`
	flex-shrink: 1;
	user-select: none;
`,io=p(Et)`
	margin: 0 24px;
`,so=p(Et)`
	margin: 0 4px;
`;var co=n.memo(function({rowsPerPage:e,rowCount:t,currentPage:o,direction:a=r.direction,paginationRowsPerPageOptions:l=r.paginationRowsPerPageOptions,paginationIconLastPage:i=r.paginationIconLastPage,paginationIconFirstPage:s=r.paginationIconFirstPage,paginationIconNext:g=r.paginationIconNext,paginationIconPrevious:b=r.paginationIconPrevious,paginationComponentOptions:y=r.paginationComponentOptions,onChangeRowsPerPage:u=r.onChangeRowsPerPage,onChangePage:w=r.onChangePage}){const j=(()=>{const $=typeof window=="object";function ne(){return{width:$?window.innerWidth:void 0,height:$?window.innerHeight:void 0}}const[ce,oe]=n.useState(ne);return n.useEffect(()=>{if(!$)return()=>null;function ae(){oe(ne())}return window.addEventListener("resize",ae),()=>window.removeEventListener("resize",ae)},[]),ce})(),R=vt(a),f=j.width&&j.width>599,D=pe(t,e),x=o*e,P=x-e+1,H=o===1,S=o===D,E=Object.assign(Object.assign({},ao),y),L=o===D?`${P}-${t} ${E.rangeSeparatorText} ${t}`:`${P}-${x} ${E.rangeSeparatorText} ${t}`,M=n.useCallback(()=>w(o-1),[o,w]),C=n.useCallback(()=>w(o+1),[o,w]),v=n.useCallback(()=>w(1),[w]),U=n.useCallback(()=>w(pe(t,e)),[w,t,e]),A=n.useCallback($=>u(Number($.target.value),o),[o,u]),N=l.map($=>n.createElement("option",{key:$,value:$},$));E.selectAllRowsItem&&N.push(n.createElement("option",{key:-1,value:t},E.selectAllRowsItemText));const Q=n.createElement(oo,{onChange:A,defaultValue:e,"aria-label":E.rowsPerPageText},N);return n.createElement(lo,{className:"rdt_Pagination"},!E.noRowsPerPage&&f&&n.createElement(n.Fragment,null,n.createElement(so,null,E.rowsPerPageText),Q),f&&n.createElement(io,null,L),n.createElement(ro,null,n.createElement(Ee,{id:"pagination-first-page",type:"button","aria-label":"First Page","aria-disabled":H,onClick:v,disabled:H,$isRTL:R},s),n.createElement(Ee,{id:"pagination-previous-page",type:"button","aria-label":"Previous Page","aria-disabled":H,onClick:M,disabled:H,$isRTL:R},b),!E.noRowsPerPage&&!f&&Q,n.createElement(Ee,{id:"pagination-next-page",type:"button","aria-label":"Next Page","aria-disabled":S,onClick:C,disabled:S,$isRTL:R},g),n.createElement(Ee,{id:"pagination-last-page",type:"button","aria-label":"Last Page","aria-disabled":S,onClick:U,disabled:S,$isRTL:R},i)))});const te=(e,t)=>{const o=n.useRef(!0);n.useEffect(()=>{o.current?o.current=!1:e()},t)};var go=function(e){return function(t){return!!t&&typeof t=="object"}(e)&&!function(t){var o=Object.prototype.toString.call(t);return o==="[object RegExp]"||o==="[object Date]"||function(a){return a.$$typeof===uo}(t)}(e)},uo=typeof Symbol=="function"&&Symbol.for?Symbol.for("react.element"):60103;function me(e,t){return t.clone!==!1&&t.isMergeableObject(e)?se((o=e,Array.isArray(o)?[]:{}),e,t):e;var o}function po(e,t,o){return e.concat(t).map(function(a){return me(a,o)})}function mt(e){return Object.keys(e).concat(function(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter(function(o){return t.propertyIsEnumerable(o)}):[]}(e))}function ht(e,t){try{return t in e}catch{return!1}}function bo(e,t,o){var a={};return o.isMergeableObject(e)&&mt(e).forEach(function(l){a[l]=me(e[l],o)}),mt(t).forEach(function(l){(function(i,s){return ht(i,s)&&!(Object.hasOwnProperty.call(i,s)&&Object.propertyIsEnumerable.call(i,s))})(e,l)||(ht(e,l)&&o.isMergeableObject(t[l])?a[l]=function(i,s){if(!s.customMerge)return se;var g=s.customMerge(i);return typeof g=="function"?g:se}(l,o)(e[l],t[l],o):a[l]=me(t[l],o))}),a}function se(e,t,o){(o=o||{}).arrayMerge=o.arrayMerge||po,o.isMergeableObject=o.isMergeableObject||go,o.cloneUnlessOtherwiseSpecified=me;var a=Array.isArray(t);return a===Array.isArray(e)?a?o.arrayMerge(e,t,o):bo(e,t,o):me(t,o)}se.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(o,a){return se(o,a,t)},{})};var mo=se;const wt={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)"},background:{default:"#FFFFFF"},context:{background:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},divider:{default:"rgba(0,0,0,.12)"},button:{default:"rgba(0,0,0,.54)",focus:"rgba(0,0,0,.12)",hover:"rgba(0,0,0,.12)",disabled:"rgba(0, 0, 0, .18)"},selected:{default:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},highlightOnHover:{default:"#EEEEEE",text:"rgba(0, 0, 0, 0.87)"},striped:{default:"#FAFAFA",text:"rgba(0, 0, 0, 0.87)"}},ft={default:wt,light:wt,dark:{text:{primary:"#FFFFFF",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(0,0,0,.12)"},background:{default:"#424242"},context:{background:"#E91E63",text:"#FFFFFF"},divider:{default:"rgba(81, 81, 81, 1)"},button:{default:"#FFFFFF",focus:"rgba(255, 255, 255, .54)",hover:"rgba(255, 255, 255, .12)",disabled:"rgba(255, 255, 255, .18)"},selected:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},highlightOnHover:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},striped:{default:"rgba(0, 0, 0, .87)",text:"#FFFFFF"}}};function ho(e,t,o,a){const[l,i]=n.useState(()=>gt(e)),[s,g]=n.useState(""),b=n.useRef("");te(()=>{i(gt(e))},[e]);const y=n.useCallback(x=>{var P,H,S;const{attributes:E}=x.target,L=(P=E.getNamedItem("data-column-id"))===null||P===void 0?void 0:P.value;L&&(b.current=((S=(H=l[Se(l,L)])===null||H===void 0?void 0:H.id)===null||S===void 0?void 0:S.toString())||"",g(b.current))},[l]),u=n.useCallback(x=>{var P;const{attributes:H}=x.target,S=(P=H.getNamedItem("data-column-id"))===null||P===void 0?void 0:P.value;if(S&&b.current&&S!==b.current){const E=Se(l,b.current),L=Se(l,S),M=[...l];M[E]=l[L],M[L]=l[E],i(M),t(M)}},[t,l]),w=n.useCallback(x=>{x.preventDefault()},[]),j=n.useCallback(x=>{x.preventDefault()},[]),R=n.useCallback(x=>{x.preventDefault(),b.current="",g("")},[]),f=function(x=!1){return x?K.ASC:K.DESC}(a),D=n.useMemo(()=>l[Se(l,o==null?void 0:o.toString())]||{},[o,l]);return{tableColumns:l,draggingColumnId:s,handleDragStart:y,handleDragEnter:u,handleDragOver:w,handleDragLeave:j,handleDragEnd:R,defaultSortDirection:f,defaultSortColumn:D}}var xo=n.memo(function(e){const{data:t=r.data,columns:o=r.columns,title:a=r.title,actions:l=r.actions,keyField:i=r.keyField,striped:s=r.striped,highlightOnHover:g=r.highlightOnHover,pointerOnHover:b=r.pointerOnHover,dense:y=r.dense,selectableRows:u=r.selectableRows,selectableRowsSingle:w=r.selectableRowsSingle,selectableRowsHighlight:j=r.selectableRowsHighlight,selectableRowsNoSelectAll:R=r.selectableRowsNoSelectAll,selectableRowsVisibleOnly:f=r.selectableRowsVisibleOnly,selectableRowSelected:D=r.selectableRowSelected,selectableRowDisabled:x=r.selectableRowDisabled,selectableRowsComponent:P=r.selectableRowsComponent,selectableRowsComponentProps:H=r.selectableRowsComponentProps,onRowExpandToggled:S=r.onRowExpandToggled,onSelectedRowsChange:E=r.onSelectedRowsChange,expandableIcon:L=r.expandableIcon,onChangeRowsPerPage:M=r.onChangeRowsPerPage,onChangePage:C=r.onChangePage,paginationServer:v=r.paginationServer,paginationServerOptions:U=r.paginationServerOptions,paginationTotalRows:A=r.paginationTotalRows,paginationDefaultPage:N=r.paginationDefaultPage,paginationResetDefaultPage:Q=r.paginationResetDefaultPage,paginationPerPage:$=r.paginationPerPage,paginationRowsPerPageOptions:ne=r.paginationRowsPerPageOptions,paginationIconLastPage:ce=r.paginationIconLastPage,paginationIconFirstPage:oe=r.paginationIconFirstPage,paginationIconNext:ae=r.paginationIconNext,paginationIconPrevious:Pe=r.paginationIconPrevious,paginationComponent:ke=r.paginationComponent,paginationComponentOptions:De=r.paginationComponentOptions,responsive:He=r.responsive,progressPending:G=r.progressPending,progressComponent:he=r.progressComponent,persistTableHead:V=r.persistTableHead,noDataComponent:we=r.noDataComponent,disabled:Z=r.disabled,noTableHead:Fe=r.noTableHead,noHeader:je=r.noHeader,fixedHeader:fe=r.fixedHeader,fixedHeaderScrollHeight:Ie=r.fixedHeaderScrollHeight,pagination:X=r.pagination,subHeader:q=r.subHeader,subHeaderAlign:xe=r.subHeaderAlign,subHeaderWrap:Ce=r.subHeaderWrap,subHeaderComponent:Te=r.subHeaderComponent,noContextMenu:Le=r.noContextMenu,contextMessage:Me=r.contextMessage,contextActions:O=r.contextActions,contextComponent:Ot=r.contextComponent,expandableRows:ye=r.expandableRows,onRowClicked:Be=r.onRowClicked,onRowDoubleClicked:Ge=r.onRowDoubleClicked,onRowMouseEnter:Ve=r.onRowMouseEnter,onRowMouseLeave:Ue=r.onRowMouseLeave,sortIcon:$t=r.sortIcon,onSort:Pt=r.onSort,sortFunction:Qe=r.sortFunction,sortServer:Ae=r.sortServer,expandableRowsComponent:kt=r.expandableRowsComponent,expandableRowsComponentProps:Dt=r.expandableRowsComponentProps,expandableRowDisabled:Xe=r.expandableRowDisabled,expandableRowsHideExpander:Ye=r.expandableRowsHideExpander,expandOnRowClicked:Ht=r.expandOnRowClicked,expandOnRowDoubleClicked:Ft=r.expandOnRowDoubleClicked,expandableRowExpanded:Je=r.expandableRowExpanded,expandableInheritConditionalStyles:jt=r.expandableInheritConditionalStyles,defaultSortFieldId:It=r.defaultSortFieldId,defaultSortAsc:Tt=r.defaultSortAsc,clearSelectedRows:Ke=r.clearSelectedRows,conditionalRowStyles:Lt=r.conditionalRowStyles,theme:Ze=r.theme,customStyles:qe=r.customStyles,direction:ge=r.direction,onColumnOrderChange:Mt=r.onColumnOrderChange,className:At}=e,{tableColumns:et,draggingColumnId:tt,handleDragStart:nt,handleDragEnter:ot,handleDragOver:at,handleDragLeave:lt,handleDragEnd:rt,defaultSortDirection:_t,defaultSortColumn:zt}=ho(o,Mt,It,Tt),[{rowsPerPage:Y,currentPage:_,selectedRows:_e,allSelected:it,selectedCount:st,selectedColumn:W,sortDirection:le,toggleOnSelectedRowsChange:Nt},ee]=n.useReducer(ln,{allSelected:!1,selectedCount:0,selectedRows:[],selectedColumn:zt,toggleOnSelectedRowsChange:!1,sortDirection:_t,currentPage:N,rowsPerPage:$,selectedRowsFlag:!1,contextMessage:r.contextMessage}),{persistSelectedOnSort:dt=!1,persistSelectedOnPageChange:Re=!1}=U,ct=!(!v||!Re&&!dt),Wt=X&&!G&&t.length>0,Bt=ke||co,Gt=n.useMemo(()=>((c={},m="default",T="default")=>{const z=ft[m]?m:T;return mo({table:{style:{color:(d=ft[z]).text.primary,backgroundColor:d.background.default}},tableWrapper:{style:{display:"table"}},responsiveWrapper:{style:{}},header:{style:{fontSize:"22px",color:d.text.primary,backgroundColor:d.background.default,minHeight:"56px",paddingLeft:"16px",paddingRight:"8px"}},subHeader:{style:{backgroundColor:d.background.default,minHeight:"52px"}},head:{style:{color:d.text.primary,fontSize:"12px",fontWeight:500}},headRow:{style:{backgroundColor:d.background.default,minHeight:"52px",borderBottomWidth:"1px",borderBottomColor:d.divider.default,borderBottomStyle:"solid"},denseStyle:{minHeight:"32px"}},headCells:{style:{paddingLeft:"16px",paddingRight:"16px"},draggingStyle:{cursor:"move"}},contextMenu:{style:{backgroundColor:d.context.background,fontSize:"18px",fontWeight:400,color:d.context.text,paddingLeft:"16px",paddingRight:"8px",transform:"translate3d(0, -100%, 0)",transitionDuration:"125ms",transitionTimingFunction:"cubic-bezier(0, 0, 0.2, 1)",willChange:"transform"},activeStyle:{transform:"translate3d(0, 0, 0)"}},cells:{style:{paddingLeft:"16px",paddingRight:"16px",wordBreak:"break-word"},draggingStyle:{}},rows:{style:{fontSize:"13px",fontWeight:400,color:d.text.primary,backgroundColor:d.background.default,minHeight:"48px","&:not(:last-of-type)":{borderBottomStyle:"solid",borderBottomWidth:"1px",borderBottomColor:d.divider.default}},denseStyle:{minHeight:"32px"},selectedHighlightStyle:{"&:nth-of-type(n)":{color:d.selected.text,backgroundColor:d.selected.default,borderBottomColor:d.background.default}},highlightOnHoverStyle:{color:d.highlightOnHover.text,backgroundColor:d.highlightOnHover.default,transitionDuration:"0.15s",transitionProperty:"background-color",borderBottomColor:d.background.default,outlineStyle:"solid",outlineWidth:"1px",outlineColor:d.background.default},stripedStyle:{color:d.striped.text,backgroundColor:d.striped.default}},expanderRow:{style:{color:d.text.primary,backgroundColor:d.background.default}},expanderCell:{style:{flex:"0 0 48px"}},expanderButton:{style:{color:d.button.default,fill:d.button.default,backgroundColor:"transparent",borderRadius:"2px",transition:"0.25s",height:"100%",width:"100%","&:hover:enabled":{cursor:"pointer"},"&:disabled":{color:d.button.disabled},"&:hover:not(:disabled)":{cursor:"pointer",backgroundColor:d.button.hover},"&:focus":{outline:"none",backgroundColor:d.button.focus},svg:{margin:"auto"}}},pagination:{style:{color:d.text.secondary,fontSize:"13px",minHeight:"56px",backgroundColor:d.background.default,borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:d.divider.default},pageButtonsStyle:{borderRadius:"50%",height:"40px",width:"40px",padding:"8px",margin:"px",cursor:"pointer",transition:"0.4s",color:d.button.default,fill:d.button.default,backgroundColor:"transparent","&:disabled":{cursor:"unset",color:d.button.disabled,fill:d.button.disabled},"&:hover:not(:disabled)":{backgroundColor:d.button.hover},"&:focus":{outline:"none",backgroundColor:d.button.focus}}},noData:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:d.text.primary,backgroundColor:d.background.default}},progress:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:d.text.primary,backgroundColor:d.background.default}}},c);var d})(qe,Ze),[qe,Ze]),Vt=n.useMemo(()=>Object.assign({},ge!=="auto"&&{dir:ge}),[ge]),I=n.useMemo(()=>{if(Ae)return t;if(W!=null&&W.sortFunction&&typeof W.sortFunction=="function"){const c=W.sortFunction,m=le===K.ASC?c:(T,z)=>-1*c(T,z);return[...t].sort(m)}return function(c,m,T,z){return m?z&&typeof z=="function"?z(c.slice(0),m,T):c.slice(0).sort((d,ve)=>{let J,B;if(typeof m=="string"?(J=Ne(d,m),B=Ne(ve,m)):(J=m(d),B=m(ve)),T==="asc"){if(J<B)return-1;if(J>B)return 1}if(T==="desc"){if(J>B)return-1;if(J<B)return 1}return 0}):c}(t,W==null?void 0:W.selector,le,Qe)},[Ae,W,le,t,Qe]),ue=n.useMemo(()=>{if(X&&!v){const c=_*Y,m=c-Y;return I.slice(m,c)}return I},[_,X,v,Y,I]),Ut=n.useCallback(c=>{ee(c)},[]),Qt=n.useCallback(c=>{ee(c)},[]),Xt=n.useCallback(c=>{ee(c)},[]),Yt=n.useCallback((c,m)=>Be(c,m),[Be]),Jt=n.useCallback((c,m)=>Ge(c,m),[Ge]),Kt=n.useCallback((c,m)=>Ve(c,m),[Ve]),Zt=n.useCallback((c,m)=>Ue(c,m),[Ue]),re=n.useCallback(c=>ee({type:"CHANGE_PAGE",page:c,paginationServer:v,visibleOnly:f,persistSelectedOnPageChange:Re}),[v,Re,f]),qt=n.useCallback(c=>{const m=pe(A||ue.length,c),T=ze(_,m);v||re(T),ee({type:"CHANGE_ROWS_PER_PAGE",page:T,rowsPerPage:c})},[_,re,v,A,ue.length]);if(X&&!v&&I.length>0&&ue.length===0){const c=pe(I.length,Y),m=ze(_,c);re(m)}te(()=>{E({allSelected:it,selectedCount:st,selectedRows:_e.slice(0)})},[Nt]),te(()=>{Pt(W,le,I.slice(0))},[W,le]),te(()=>{C(_,A||I.length)},[_]),te(()=>{M(Y,_)},[Y]),te(()=>{re(N)},[N,Q]),te(()=>{if(X&&v&&A>0){const c=pe(A,Y),m=ze(_,c);_!==m&&re(m)}},[A]),n.useEffect(()=>{ee({type:"CLEAR_SELECTED_ROWS",selectedRowsFlag:Ke})},[w,Ke]),n.useEffect(()=>{if(!D)return;const c=I.filter(T=>D(T)),m=w?c.slice(0,1):c;ee({type:"SELECT_MULTIPLE_ROWS",keyField:i,selectedRows:m,totalRows:I.length,mergeSelections:ct})},[t,D]);const en=f?ue:I,tn=Re||w||R;return n.createElement(nn,{theme:Gt},!je&&(!!a||!!l)&&n.createElement(Vn,{title:a,actions:l,showMenu:!Le,selectedCount:st,direction:ge,contextActions:O,contextComponent:Ot,contextMessage:Me}),q&&n.createElement(Xn,{align:xe,wrapContent:Ce},Te),n.createElement(Jn,Object.assign({$responsive:He,$fixedHeader:fe,$fixedHeaderScrollHeight:Ie,className:At},Vt),n.createElement(Kn,null,G&&!V&&n.createElement(bt,null,he),n.createElement(sn,{disabled:Z,className:"rdt_Table",role:"table"},!Fe&&(!!V||I.length>0&&!G)&&n.createElement(cn,{className:"rdt_TableHead",role:"rowgroup",$fixedHeader:fe},n.createElement(gn,{className:"rdt_TableHeadRow",role:"row",$dense:y},u&&(tn?n.createElement(de,{style:{flex:"0 0 48px"}}):n.createElement(An,{allSelected:it,selectedRows:_e,selectableRowsComponent:P,selectableRowsComponentProps:H,selectableRowDisabled:x,rowData:en,keyField:i,mergeSelections:ct,onSelectAllRows:Qt})),ye&&!Ye&&n.createElement(Zn,null),et.map(c=>n.createElement(Ln,{key:c.id,column:c,selectedColumn:W,disabled:G||I.length===0,pagination:X,paginationServer:v,persistSelectedOnSort:dt,selectableRowsVisibleOnly:f,sortDirection:le,sortIcon:$t,sortServer:Ae,onSort:Ut,onDragStart:nt,onDragOver:at,onDragEnd:rt,onDragEnter:ot,onDragLeave:lt,draggingColumnId:tt})))),!I.length&&!G&&n.createElement(qn,null,we),G&&V&&n.createElement(bt,null,he),!G&&I.length>0&&n.createElement(Yn,{className:"rdt_TableBody",role:"rowgroup"},ue.map((c,m)=>{const T=ie(c,i),z=function(B=""){return typeof B!="number"&&(!B||B.length===0)}(T)?m:T,d=Oe(c,_e,i),ve=!!(ye&&Je&&Je(c)),J=!!(ye&&Xe&&Xe(c));return n.createElement(kn,{id:z,key:z,keyField:i,"data-row-id":z,columns:et,row:c,rowCount:I.length,rowIndex:m,selectableRows:u,expandableRows:ye,expandableIcon:L,highlightOnHover:g,pointerOnHover:b,dense:y,expandOnRowClicked:Ht,expandOnRowDoubleClicked:Ft,expandableRowsComponent:kt,expandableRowsComponentProps:Dt,expandableRowsHideExpander:Ye,defaultExpanderDisabled:J,defaultExpanded:ve,expandableInheritConditionalStyles:jt,conditionalRowStyles:Lt,selected:d,selectableRowsHighlight:j,selectableRowsComponent:P,selectableRowsComponentProps:H,selectableRowDisabled:x,selectableRowsSingle:w,striped:s,onRowExpandToggled:S,onRowClicked:Yt,onRowDoubleClicked:Jt,onRowMouseEnter:Kt,onRowMouseLeave:Zt,onSelectedRow:Xt,draggingColumnId:tt,onDragStart:nt,onDragOver:at,onDragEnd:rt,onDragEnter:ot,onDragLeave:lt})}))))),Wt&&n.createElement("div",null,n.createElement(Bt,{onChangePage:re,onChangeRowsPerPage:qt,rowCount:A||I.length,currentPage:_,rowsPerPage:Y,direction:ge,paginationRowsPerPageOptions:ne,paginationIconLastPage:ce,paginationIconFirstPage:oe,paginationIconNext:ae,paginationIconPrevious:Pe,paginationComponentOptions:De})))});export{xo as Q};
