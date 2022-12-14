import * as la from '.';

function main() {
  console.log(process.argv);
  console.log(la.file_name(process.argv[1]));
  console.log(la.stringify(la.parse(process.argv)));
}

main();
