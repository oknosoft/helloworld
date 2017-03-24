/** This file override default configuration in app.settings.default.js */
import appSettingsDefault from "./app.settings.default"
const applicationConfig = {
  // Insert your configuration here
}

/**
 * ### При установке параметров сеанса
 * Процедура устанавливает параметры работы программы при старте веб-приложения
 *
 * @param prm {Object} - в свойствах этого объекта определяем параметры работы программы
 */
export default function settings(prm) {
  Object.assign(prm, appSettingsDefault, applicationConfig)
}

export function getAppSettings() {
  return Object.assign({}, appSettingsDefault, applicationConfig);
}