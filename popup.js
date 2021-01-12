window.onload = function(){
	gmail.onclick = () =>{chrome.tabs.create({"url": "https://mail.google.com/"})};	
	gdrive.onclick = () =>{chrome.tabs.create({"url": "https://drive.google.com/"})};
	meet.onclick = () =>{chrome.tabs.create({"url": "https://meet.google.com/"})};
	calendar.onclick = () =>{chrome.tabs.create({"url": "https://calendar.google.com/"})}; 
	docs.onclick = () =>{chrome.tabs.create({"url": "https://docs.google.com/document/"})};
	sheet.onclick = () =>{chrome.tabs.create({"url": "https://docs.google.com/spreadsheets/"})};
	present.onclick = () =>{chrome.tabs.create({"url": "https://docs.google.com/presentation/"})};
	notes.onclick = () =>{chrome.tabs.create({"url": "https://keep.google.com/"})};
	ghub.onclick = () =>{chrome.tabs.create({"url": "https://github.com/eliascav/gaps4edge"})};
}

