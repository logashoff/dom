(function(win, doc)
{
	"use strict"

	function _attributes(el, attrs)
	{
		if(!el || !attrs) return;

		for (var attr in attrs) 
		{
	      	if (attrs.hasOwnProperty(attr)) 
	      	{
	        	el.setAttribute(attr, attrs[attr]);
	    	}
	  	}
	}

	function _styles(el, styles)
	{
		if(!el || !styles) return;

		for(var prop in styles)
		{
			if(styles.hasOwnProperty(prop))
			{
				el.style[prop] = styles[prop];
			}
		}
	}

	function _create(type)
	{
		return doc.createElement(type);
	}

	function _createFrag()
	{
		return doc.createDocumentFragment();
	}

	function _parse(data, parent)
	{
		parent = (typeof parent === "undefined") ? _createFrag() : parent;

		var i = 0, d;
		for(;d = data[i]; i++)
		{
			if(d instanceof Node)
			{
				parent.appendChild(d);
			}
		}

		return parent;
	}

	function dom(data)
	{
		return _parse(data);
	}

	dom.create = function(type, data)
	{
		var el = _create(type),
			content = data.content;

		_attributes(el, data.attr);
		_styles(el, data.styles);

		("className" in data) && (el.className = data.className);
		("id" in data) && (el.id = data.id);
		
		if(content)
		{
			if(content instanceof Node)
			{
				el.appendChild(content)
			} 
			else if(typeof content === "string" || content instanceof String)
			{
				el.innerHTML = content;
			} 
			else if(typeof content === "array" || content instanceof Array) 
			{
				el.appendChild(dom(content));
			}
		}
		
		return el;
	}

	win.dom = dom;

	Object.seal(dom);

})(window, document);