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
        default: {
          const num = parseFloat(argv);
          if (!isNaN(num)) result[key] = num;
          else result[key] = argv;
        };
      }
    }
  });
  return result;
}

function parse_str(str: string) {
  return parse(str.split(/\s+/).filter((item) => item));
}

function unparse(object: any) {
  const result: string[] = [];
  Object.entries(object).forEach(([key, value]) => result.push(`-${key}`, `${value}`));
  return result;
}

function unparse_str(object: any) {
  return unparse(object).join(' ');
}

function file_name(path_str: string) {
  const segs = path_str.replace(/\\/g, '/').split(/\/+/);
  return segs[segs.length - 1];
}
