import { HomeAssistant } from "../types";

export const FORMAT_TEXT = "text";
export const FORMAT_NUMBER = "number";

export const enum AlarmControlPanelEntityFeature {
  ARM_HOME = 1,
  ARM_AWAY = 2,
  ARM_NIGHT = 4,
  TRIGGER = 8,
  ARM_CUSTOM_BYPASS = 16,
  ARM_VACATION = 32,
}

export const callAlarmAction = (
  hass: HomeAssistant,
  entity: string,
  action:
    | "arm_away"
    | "arm_home"
    | "arm_night"
    | "arm_vacation"
    | "arm_custom_bypass"
    | "disarm",
  code?: string
) => {
  hass!.callService("alarm_control_panel", `alarm_${action}`, {
    entity_id: entity,
    code,
  });
};
