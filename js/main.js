function initSnippet() {
    var snippet = $('pre');
    
    var i = snippet.length;

    while (i--) {
        hljs.highlightBlock(snippet.get(i));
    }
    var style = $('#style-link').text();
    $('.codestyle').each(function(i, e) {
        e.rel = 'stylesheet';
        e.disabled = !e.href.match(style + '\\.css$');
    });
    $('#language-link').html(snippet.get(0).result.language);
    $('#control a').click(function(e) {
        e.preventDefault();
        $('#snippet').load(this.href, initSnippet);
    });
}

function addCodeTypeClass(){
    $(".src-PHP").addClass("php");
    $(".src-python").addClass("python");
    $(".src-emacs-lisp").addClass("lisp");
}

$(document).ready(function(){
    //hljs.initHighlighting();
    addCodeTypeClass();
    initSnippet();
});
