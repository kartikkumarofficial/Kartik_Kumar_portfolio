import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:portfolio/shell/app_shell.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  await SystemChrome.setPreferredOrientations([DeviceOrientation.portraitUp, DeviceOrientation.portraitDown]);

  runApp(const AppShell());
}
