import 'package:redstone/redstone.dart' as app;
import 'dart:io' show Platform;
import "package:path/path.dart" as Path;
import 'package:shelf_static/shelf_static.dart';


@app.Route("/hi")
greeting(){
  return "Guy!!";
}

@app.Route("/bye")
goodbye() {
  return "Bye mip";
}

main() {
  String scriptPath = Path.dirname(Path.fromUri(Platform.script));
  String pathToWeb = Path.normalize("./web");

  app.setShelfHandler(createStaticHandler(pathToWeb,
                                         defaultDocument: "index.html",
                                         serveFilesOutsidePath: true));
  app.setupConsoleLog();
  app.start(port: 9050);
}
