window.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    let userName = document.querySelector('H1')
    let textNodes = [];

    function recurcy (element) {
        element.childNodes.forEach(node => {
            
            if (node.nodeName === 'DD') {
                const obj = {
                    url: node.baseURI,
                    Name: userName.textContent,
                    content: node.textContent.replace(/ +/g, ' ').trim()
                };
                
                textNodes.push(obj);
            } else {
                recurcy(node);
            }

        });
    }
    recurcy(body);
    console.log(JSON.stringify(textNodes));
    
    function download(content, fileName, contentType) {
        var a = document.createElement("a");
        var file = new Blob([content], {type: contentType});
        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();
    }

    //download(JSON.stringify(textNodes), 'json.txt', 'text/plain');
});