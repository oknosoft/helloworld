import qs from 'qs';

export function utils({utils}, exclude)  {
  utils.prm = function prm() {
    return qs.parse(location.search.replace('?',''));
  };
}
