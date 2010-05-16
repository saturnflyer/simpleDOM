/*
 * simpleDOM
 *
 * Copyright (c) 2006 Jim Gay (saturnflyer.com)
 * Licensed under the MIT (MIT-LICENSE.txt) license.
 *
 */

if (typeof DOM != ("undefined" ||  null)) {
	throw new Error("DOM is alredy defined. Your scripts overlap.");
}
var DOM = {
	version: "0.1.0",
	isNodeList: function(d) {
		if((d.length) && !(DOM.isArray(d)) && (d[0].nodeType)) {
			return true;
		} else {
			return false;
		}
		
	},
	isJSON: function(d) {
		if(!(d.length) && !(DOM.isArray(d)) && !(DOM.isRegExp(d)) && !(DOM.isDate(d)) && !(DOM.isNumber(d))) {
			return true;
		} else {
			return false;
		}
	},
	isDate: function(d) {
		return (d instanceof Date);
	},
	isNumber: function(d) {
		return (d instanceof Number);
	},
	isRegExp: function(d) {
		return (d instanceof RegExp);
	},
	isString: function(d) {
		if (typeof d == "string") {
			return true;
		} else {
			return false;
		}
	},
	isArray: function(d) {
		return (d instanceof Array);
	},
	create: function(obj) {
		// === Single argument rules:
		// DONE pass empty: return document fragment
		// DONE pass number: return array of document fragments
		// DONE pass string: return text node
		// DONE pass array: apply rules to each element and return array of elements
		// DONE pass date: return error
		// DONE pass regexp: return error
		// DONE pass nodelist: return array of cloned nodes
		// pass object: return document fragment === extended rules here!!! NEEDS ERROR CHECKING
		
		
		// tag refers to the tag name of a new element
		// text will become the child node of an element that allows it
		if (arguments.length <= 1) {
			if (!obj) { // if no object requested
				return document.createDocumentFragment(); // create an empty fragment
				
			} else if (DOM.isString(obj)) {
				var s = document.createTextNode(obj);
				return s;
				
			} else if (DOM.isNumber(obj)) {
				var narr = [];
				var ncount = 0;
				while(ncount < obj) {
					var nfrag = DOM.create();
					narr[ncount] = nfrag;
					ncount++;
				}
				return narr;
				
			} else if (DOM.isArray(obj)) {
				var newarray = [];
				var acount = 0;
				while(acount < obj.length) {
					var arrobj = DOM.create(obj[acount]);
					newarray[acount] = arrobj;
					acount++;
				}
				return newarray;
				
			} else if (DOM.isDate(obj) || DOM.isRegExp(obj)) {
				var errmsg = "The object passed to DOM.create is an invalid object type for this function.";
				var objtype;
				var msg;
				switch(obj.constructor) {
					case Date: 
						objtype = "Date";
						break;
					case RegExp:
						objtype = "RegExp";
						break;
				}
				msg = errmsg+" You passed a "+objtype+" object.";
				throw new Error(msg);
				
			} else if (DOM.isNodeList(obj)) {
				var frag = DOM.create(); //create a node to hold the clones
				var hcount = 0;
				while(hcount < obj.length) {
					if (obj[hcount].tagName.toLowerCase() == "body") {
						delete frag;
						throw new Error("The object passed to DOM.create is an invalid object type for this function. You are attempting to clone the entire body element.");
					}
					var newnode = obj[hcount].cloneNode(true);
					frag.appendChild(newnode);
					hcount++;
				}
				return frag;
				
			} else if (DOM.isJSON(obj)) {
				if(!obj.tag) obj.tag = "div"; // default tag
				var o = document.createElement(obj.tag);
				for (key in obj) {
					if (key != "tag" && key != "text" && !(obj[key] instanceof Object)) {
						o.setAttribute(key, obj[key]);
					} else if (key == "style" && obj[key] instanceof Object)  {
						for (att in obj["style"]) {
							var s = {}
							o.style[att] = obj["style"][att];
						}
					} else if (key == "text") {
						o.appendChild(DOM.create(obj.text));
					}
				}
				if (!obj.text) return o;
				return o;
			
			} else {
				var what = " ";
				for(i in obj) {
					what += (i + ": " +obj[i] +", ");
				}
				alert(what);
			}
		} else {
			throw new Error("DOM.create can operate with only one object passed. Check your scripts and only pass one object to this function.");	
		}
	}
}