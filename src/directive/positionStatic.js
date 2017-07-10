export default{
	inserted: function(el,binding,vnode){
		let navHeight = el.clientHeight;
		el.parentNode.parentNode.addEventListener('scroll',function(){
			let scrollTop= el.parentNode.parentNode.scrollTop;
			if(scrollTop>=40 ){
				el.style.position = "fixed";
				el.style.top = 0;
				el.style.zIndex = 100;
			}else{
				el.style.position = "relative";
			}
		},false)
		console.log(el)
	}
}
