import * as la from '.';

function main() {
  console.log(process.argv);
  console.log(la.file_name(process.argv[1]));
  // console.log(la.unparse_str(la.parse_str(`yarn dev --num 123 -b true1 ---u = NaN -a null -----a`)));
}

main();
