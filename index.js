const OSinfo = require("./module/OSinfo"),
  EventEmitter = require("events").EventEmitter,
  emitter = new EventEmitter();

emitter.on("beforeCommand", function(instruction) {
  console.log("You wrote: " + instruction + " trying to run command.");
});
emitter.on("afterCommand", function() {
  console.log("Finished command");
});

process.stdin.setEncoding("utf-8");

process.stdin.on("readable", function() {
  // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
  let input = process.stdin.read();
  if (input !== null) {
    let instruction = input.toString().trim();

    emitter.emit("beforeCommand", instruction);
    switch (instruction) {
      case "/version":
        process.stdout.write(
          "Lang: " +
            process.env.LANG +
            "\nNode version: " +
            process.versions.node +
            "\n"
        );
        process.exit();
        break;
      case "/getOSinfo":
        OSinfo.print();
        break;
      case "/exit":
        process.stdout.write("Quitting app!\n");
        process.exit();
        break;
      default:
        process.stderr.write("Wrong instruction!\n");
    }
    emitter.emit("afterCommand");
  }
});
