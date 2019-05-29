module.exports = function main(str) {
    var len = str.length;
	var numHead = ["._.", "...", "._.", "._.","...","._.","._.","._.","._.","._."];
	var numMid = ["|.|","..|","._|","._|","|_|","|_.","|_.","..|","|_|","|_|"];
	var numFoot = ["|_|","..|","|_.","._|","..|","._|","|_|","..|","|_|","..|"];
	var result = "";
	for(var i=0;i<len;i++){
		var index = parseInt(str.charAt(i));
		result = result + numHead[index];
		if(i<len-1){
			result = result + " ";
		}else{
			result = result + "\n";
		}
	}
	for(var i=0;i<len;i++){
		var index = parseInt(str.charAt(i));
		result = result + numMid[index];
		if(i<len-1){
			result = result + " ";
		}else{
			result = result + "\n";
		}
	}
	for(var i=0;i<len;i++){
		var index = parseInt(str.charAt(i));
		result = result + numFoot[index];
		if(i<len-1){
			result = result + " ";
		}else{
			result = result + "\n";
		}
	}
    return result;
};