const fs = require('fs');
const p = require('path');

function walk(d) {
  fs.readdirSync(d).forEach(f => {
    let fp = p.join(d, f);
    if (fs.statSync(fp).isDirectory()) {
      walk(fp);
    } else if (fp.endsWith('.tsx')) {
      let c = fs.readFileSync(fp, 'utf8');
      if (c.includes('SectionUnlocker')) {
        c = c.replace(/import SectionUnlocker from ['"].*?SectionUnlocker['"][\r\n]*/g, '');
        c = c.replace(/<SectionUnlocker[^>]*>/g, '');
        c = c.replace(/<\/SectionUnlocker>/g, '');
        fs.writeFileSync(fp, c, 'utf8');
        console.log('Fixed', fp);
      }
    }
  });
}

walk('./src/components');
