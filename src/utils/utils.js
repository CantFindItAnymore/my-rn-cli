/*
 * @Author: ranjun
 * @Date: 2020-07-17 10:52:27
 * @Last Modified by: ranjun
 * @Last Modified time: 2020-09-22 16:13:26
 */
// 判断两个对象值是否相等
const isObjectValueEqual = (a, b) => {
	var aProps = Object.getOwnPropertyNames(a)
	var bProps = Object.getOwnPropertyNames(b)
	if (aProps.length !== bProps.length) {
		return false
	}
	for (var i = 0; i < aProps.length; i++) {
		var propName = aProps[i]

		var propA = a[propName]
		var propB = b[propName]
		if (typeof propA === 'object') {
			if (this.isObjectValueEqual(propA, propB)) {
				return true
			} else {
				return false
			}
		} else if (propA !== propB) {
			return false
		} else {
			return true
		}
	}
}

/**
 * 添加 cookie
 * @param name 名称
 * @param value 值
 * @param expiresHours 过期时间
 */
const addCookie = (name, value, expiresHours) => {
	let cookieString = `${name}=${escape(value)}`
	// 判断是否设置过期时间,0代表关闭浏览器时失效
	if (expiresHours > 0) {
		const date = new Date()
		date.setTime(date.getTime() + expiresHours * 1000)
		cookieString = `${cookieString};expires=${date.toUTCString()}`
	}
	document.cookie = cookieString
}

/**
 * 修改 cookie
 * @param name 名称
 * @param value 值
 * @param expiresHours 过期时间
 */
const editCookie = (name, value, expiresHours) => {
	let cookieString = `${name}=${escape(value)}`
	if (expiresHours > 0) {
		const date = new Date()
		date.setTime(date.getTime() + expiresHours * 1000) // 单位是毫秒
		// @ts-ignore
		cookieString = `${cookieString};expires=${date.toGMTString()}`
	}
	document.cookie = cookieString
}

/**
 * 根据名字获取cookie的值
 * @param name
 */
const getCookieValue = (name) => {
	const strCookie = document.cookie
	const arrCookie = strCookie.split('; ')
	for (const cookie of arrCookie) {
		const arr = cookie.split('=')
		if (arr[0] === name) {
			// console.log('unescape(arr[1])', unescape(arr[1]));
			return unescape(arr[1])
		}
	}
}

function objectToFormData(obj, form, namespace) {
	const fd = form || new FormData()
	let formKey

	for (var property in obj) {
		if (obj.hasOwnProperty(property)) {
			let key = Array.isArray(obj) ? '[]' : `[${property}]`
			if (namespace) {
				formKey = namespace + key
			} else {
				formKey = property
			}

			// if the property is an object, but not a File, use recursivity.
			if (
				typeof obj[property] === 'object' &&
				!(obj[property] instanceof File)
			) {
				objectToFormData(obj[property], fd, formKey)
			} else {
				// if it's a string or a File object
				fd.append(formKey, obj[property])
			}
		}
	}

	return fd
}

export { isObjectValueEqual, addCookie, editCookie, getCookieValue, objectToFormData }

export function productInit(arr1,arr2,id){
	let arr=[...arr1,...arr2];
	let name="";
	for(let i=0;i<arr.length;i++){
		if(arr[i].id==id){
			name=arr[i].name
		}
	}
	return name
}
export function productInits(arr,id){
	let name="";
	for(let i=0;i<arr.length;i++){
		if(arr[i].id==id){
			name=arr[i].name
		}
	}
	return name
}


export function getHref(urlStr) {
	let url="";
	if (typeof urlStr == "undefined") {
         url = decodeURI(location.search); //获取url中"?"符后的字符串
    } else {
         url = "?" + urlStr.split("?")[1];
    }
    let theRequest = new Object();
    if (url.indexOf("?") != -1) {
        let str = url.substr(1);
       let strs = str.split("&");
        for (let i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
        }
    }
    return theRequest;
    // if (typeof urlStr == "undefined") {
    //     var url = decodeURI(location.search); //获取url中"?"符后的字符串
    // } else {
    //     var url = "?" + urlStr.split("?")[1];
    // }
    // var theRequest = '';
    // if (url.indexOf("?") != -1) {
    //    theRequest = url.substr(1);
    // }
    // return theRequest;
}
