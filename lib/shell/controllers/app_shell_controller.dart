import 'package:get/get.dart';
import 'package:portfolio/core/services/asset_preloader.dart';

class AppShellController extends GetxController {
  final RxBool isReady = false.obs;
  final RxBool isPreloading = true.obs;
  final RxBool showCurtainLoader = false.obs;
  final AssetPreloader _assetPreloader = AssetPreloader();

  @override
  void onInit() {
    super.onInit();
    _preloadAssets();
  }

  Future<void> _preloadAssets() async {
    try {
      await _assetPreloader.preloadAssets();
      await Future.delayed(const Duration(milliseconds: 1500));
    } finally {
      isPreloading.value = false;
      showCurtainLoader.value = true;
    }
  }

  void onCurtainComplete() {
    // Called when curtain loader animation completes
    isReady.value = true;
  }

  bool get canShowApp => !isPreloading.value;
  bool get assetsPreloaded => _assetPreloader.isPreloaded;
}
