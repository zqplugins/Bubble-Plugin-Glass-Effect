function(properties, context) {
    
	var idStrings = properties.glasselementid.replace(/\s/g, '')
    var idArray = idStrings.toString().split(',');
    
    var appendedGlassName = properties.glassname.replace(/\s/g, '')
    
    idArray.forEach((element)=> {
        document.getElementById(element.replace(/\s/g, '')).classList.remove(appendedGlassName);
    })

}