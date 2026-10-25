import { Panel } from "@components/setting/panel";

/**
 * Opt-in-for-this-build default preset, applied once on upgrade as requested.
 * All controls remain individually adjustable after this initial migration.
 */
export function applyDouYinCleanDefaultsOnce(): void {
  const versionKey = "dy-clean-preset-20261025-v1";
  if (Panel.getValue<boolean>(versionKey, false)) return;

  const enabled = [
    "shieldVideo-exec-network-enable",
    "dy-video-filter-default-ads",
    "shieldLeftNavigator-tab-follow-red-dot",
    "shieldLeftNavigator-tab-ai-search",
    "shieldLeftNavigator-tab-activity",
    "shieldLeftNavigator-tab-vs",
    "shieldLeftNavigator-tab-series",
    "shieldLeftNavigator-tab-microgame",
    "shieldLeftNavigator-panel-menu-survey",
    "shield-topNav-ai-search",
    "shieldQuickAccess",
    "shieldWallpaper",
    "shieldSearchGuessYouWantToSearch",
    "shieldSearchTiktokHotspot",
    "blockAIDouYin",
    "shieldListenDouYinButton",
    "shieldRelatedRecommendationsButton",
    "dy-video-blockAIIdentifyTheScreen",
    "dy-video-blockClickUpdateReminder",
    "shieldBottomVideoToolbar-aiNotes",
    "dy-video-blockDanmaku",
    "shieldSearchFloatingBar",
    "dy-video-live-block-yellowCar",
    "dy-recommend-disableVideoSatisfaction",
  ];
  for (const key of enabled) Panel.setValue(key, true);

  // Prevent the filter's debugging button cluttering the player.
  Panel.setValue("shieldVideo-add-parseVideoInfoButton", false);
  // Never enable "only show filtered" mode (it would hide regular videos).
  Panel.setValue("shieldVideo-only-show-filtered-video", false);
  // Preserve the original Settings / Search / Feed / Comments / Messages.
  Panel.setValue("shieldLeftNavigator-panel-menu-setting", false);
  Panel.setValue(versionKey, true);
}
