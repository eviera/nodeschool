console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(texts, ...args) {
  args = args.map(x => x.replace('&', '&amp;')
                        .replace('\'', '&apos;')
                        .replace('\"', '&quot;')
                        .replace('<', '&lt;')
                        .replace('>', '&gt;')
                      );
  var result='';
  for(var i=0;i<texts.length-1;i++) {
    result+=texts[i]+args[i];
  }
  return result+texts[texts.length-1];
}
