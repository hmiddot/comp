for (let i = 0; i < document.getElementsByTagName('define').length; i++) {
    let define = document.getElementsByTagName('define')[i];
    define.style.display = 'none';
    let codes = define.innerHTML;
    let attrs = codes.match(/{([^}]+)}/g);
    if (attrs) {
        attrs = attrs.map(match => match.slice(1, -1));
    }
    for (let j = 0; j < document.getElementsByTagName(define.getAttribute('name')).length; j++) {
        let newCodes = codes;
        for (let k = 0; k < attrs.length; k++) {
            let attrContent = document.getElementsByTagName(define.getAttribute('name'))[j].getAttribute(attrs[k].split('=')[0]);
            if (attrContent == null) {
                newCodes = newCodes.replaceAll('{' + attrs[k] + '}', attrs[k].split('=').slice(1).join('='));
            } else {
                newCodes = newCodes.replaceAll('{' + attrs[k] + '}', attrContent);
            }
        }
        document.getElementsByTagName(define.getAttribute('name'))[j].innerHTML = newCodes;
    }
}
