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
          const num = Number(argv);
          if (!isNaN(num)) result[key] = num;
          else result[key] = argv;
        };
      }
    }
  });
  return result;
}

export
function unparse(object: any) {
  const result: string[] = [];
  Object.entries(object).forEach(([key, value]) => result.push(`-${key}`, `${value}`));
  return result;
}

export
function unparse_str(object: any) {
  return unparse(object).join(' ');
}

export
function file_name(path_str: string) {
  const segs = path_str.replace(/\\/g, '/').split(/\/+/);
  return segs[segs.length - 1];
}
