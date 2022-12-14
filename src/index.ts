export
function parse(args: string[]) {
  const result: any = { };
  let opend = false;
  let key = '';
  args.forEach((argv) => {
    if (/^\-+(?!\-).+/.test(argv)) {
      opend = true;
      key = argv.replace(/^\-+/, '');
    } else if (opend) {
      opend = false;
      switch (argv) {
        case 'null': result[key] = null; break;
        case 'undefined': result[key] = undefined; break;
        case 'NaN': result[key] = NaN; break;
        case 'true': result[key] = true; break;
        case 'false': result[key] = false; break;
        case 'Infinity': result[key] = Infinity; break;
        case '-Infinity': result[key] = -Infinity; break;
        default: {
          const num = argv.trim() ? Number(argv) : NaN;
          if (!isNaN(num)) result[key] = num;
          else result[key] = argv;
        };
      }
    }
  });
  return result;
}

export
function stringify(object: any) {
  return Object.entries(object)
    .map(([key, value]) => `-${key} ${`${value}`.trim() ? value : `'${value}'`}`)
    .join(' ');
}

export
function file_name(path_str: string) {
  const segs = path_str.replace(/\\/g, '/').split(/\/+/);
  return segs[segs.length - 1];
}
