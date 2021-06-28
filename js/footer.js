var svgActive = '<svg aria-hidden="true" width="12" height="12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <path fill="currentColor" d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z" class=""></path> </svg>';
$(document).ready(function() {
    var pathName = window.location.pathname;
    $(".lang__menu li").each(function(){
        var a = $(this).find("a");
        var href = a.attr("href");
        var text = a.text();
        if(pathName.indexOf(href) !== -1){
            a.addClass("active").prepend(svgActive);
        }if((pathName === "" || pathName === "/" )&& (href === "/" || href === "/zh-cn")){
            a.addClass("active").prepend(svgActive);
        }
    })
});

document.writeln('<div class="footer">\n' +
    '    <div class="footer__copy">\n' +
    '        &copy; '+app_domain+' 2021 &reg;\n' +
    '    </div>\n' +
    '</div>');

document.writeln('<div id="network" class="network"> <i class="ico ico--network"></i> <div class="network__text"> Woops! Something is wrong with your Internet connection...    </div> </div>');
document.writeln('<script src="'+cdn_static+'/js/analysis.js"></script>');

loadJs("5cb7168f45116391");
function loadJs(id) {
    setTimeout(function () {
        (function () {
            var d = document, s = d.createElement('script');
            s.src = '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-' + id;
            (d.head || d.body).appendChild(s);
        })();
    }, 3000);
}