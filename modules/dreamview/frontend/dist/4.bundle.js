(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{457:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(66)),l=r(n(1)),a=r(n(2)),i=n(155);function r(e){return e&&e.__esModule?e:{default:e}}var s=function(){function e(){(0,l.default)(this,e),this.map=null,this.controls=[]}return(0,a.default)(e,[{key:"isInitialized",value:function(){return null!==this.map}},{key:"loadMap",value:function(e,t){var n={center:e,zoom:20,mapTypeId:google.maps.MapTypeId.ROADMAP,fullscreenControl:!1};this.map=new google.maps.Map(document.getElementById(t),n)}},{key:"setCenter",value:function(e){this.map.setCenter(e)}},{key:"setZoom",value:function(e){this.map.setZoom(e)}},{key:"addEventHandler",value:function(e,t){google.maps.event.addListener(this.map,e,function(e){var n=e.latLng;t(n)})}},{key:"createPoint",value:function(e){var t=e.lat,n=e.lng;return new google.maps.LatLng(t,n)}},{key:"createMarker",value:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return new google.maps.Marker({position:e,label:t,draggable:n,map:this.map})}},{key:"createPolyline",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2;return new google.maps.Polyline({path:e,geodesic:!0,strokeColor:t,strokeOpacity:n,strokeWeight:o,map:this.map})}},{key:"createControl",value:function(e){var t=e.text,n=e.tip,o=e.color,l=(e.offsetX,e.offsetY,e.onClickHandler),a=document.createElement("div"),i=document.createElement("div");i.style.backgroundColor=o,i.style.border="2px solid #fff",i.style.borderRadius="3px",i.style.boxShadow="0 2px 6px rgba(0,0,0,.3)",i.style.cursor="pointer",i.style.marginBottom="22px",i.style.textAlign="center",i.title=n,a.appendChild(i);var r=document.createElement("div");r.style.color="rgb(25,25,25)",r.style.fontFamily="Roboto,Arial,sans-serif",r.style.fontSize="16px",r.style.lineHeight="38px",r.style.paddingLeft="5px",r.style.paddingRight="5px",r.innerHTML=t,i.appendChild(r),i.addEventListener("click",function(){l(r)}),this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(a),this.controls.push(a)}},{key:"disableControls",value:function(){this.controls.forEach(function(e){e.style.display="none"})}},{key:"enableControls",value:function(){this.controls.forEach(function(e){e.style.display="block"})}},{key:"getMarkerPosition",value:function(e){var t=e.getPosition();return{lat:t.lat(),lng:t.lng()}}},{key:"updatePolyline",value:function(e,t){e.setPath(t)}},{key:"removePolyline",value:function(e){e.setMap(null)}},{key:"applyCoordinateOffset",value:function(e){var t=(0,o.default)(e,2),n=t[0],l=t[1];return(0,i.WGS84ToGCJ02)(n,l)}}]),e}();t.default=s}}]);
//# sourceMappingURL=4.bundle.js.map