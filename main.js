//https://jsrepos.com/lib/isagalaev-highlight-js-javascript-code-highlighting
// Prism.languages
//api https://highlightjs.readthedocs.io/en/latest/api.html

//https://github.com/PrismJS/prism/issues/1424

//https://github.com/PrismJS/prism/blob/master/plugins/autoloader/prism-autoloader.js

//https://cdn.jsdelivr.net/npm/prismjs@1.28.0/components/

//supported languages
//https://codepen.io/suin/full/XWmYZXz

//https://github.com/PrismJS/prism/issues/1881
function highlight(code, language) {
    
	if (Prism.languages[language]) {
		return Prism.highlight(code, Prism.languages[language], language);
	} else {
		return Prism.util.encode(code);
	}
}

function highlight_code(input = null){
    if(input == null) input = $('#scode').val()
    let language = $('#language-selector').val()
    let success = ""
    let error = ""
    Prism.plugins.autoloader.loadLanguages(language, success, error)

    let highlighted_code = highlight(input, language)
    $('code').html(highlighted_code)
    return false;
}

window.onload = () => {
    highlight_code($('#scode').attr('placeholder'))
};

/*
#include &lt;stdio.h&gt;
int main() {
    printf("Hello, World!");
    return 0;
}
*/