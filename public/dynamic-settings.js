/**
 * Здесь определяем специфичные для хоста параметры
 */

(() => {
  window._dynamic_patch_ = {

    predefined: {
      zone: 1,
    },

  };

  // заглушка
  try {
    sessionStorage.setItem('zone', window._dynamic_patch_.predefined.zone);
    sessionStorage.setItem('year', new Date().getFullYear());
  }
  catch (e) {}
  // при желании-необходимости, здесь можно разместить...

})();

