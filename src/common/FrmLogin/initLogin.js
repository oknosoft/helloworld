import providersDesc from './providers';

function yearByAbonent(abonent, yearState) {
  if(!abonent) {
    return yearState;
  }
  const yset = new Set([(new Date()).getFullYear()]);
  const years = [];
  abonent.servers.forEach(({key}) => {
    yset.add(key);
  });
  for(const v of yset) {
    years.push({value: v, name: v.toFixed()});
  }
  years.sort((a, b) => a.value - b.value);

  //.map((v) => ());
  let year = parseInt(sessionStorage.getItem('year'), 10);
  if(!year) {
    year = years[years.length - 1];
  }
  else {
    year = years.find((v) => v.value === year) || years[years.length - 1];
  }

  return [year, years];
}

export function abonentInit({setAbonent, setProvider, pfilter}) {
  const {cat: {abonents}, adapters: {pouch}, jobPrm} = $p;

  let abonent = parseInt(sessionStorage.getItem('zone'), 10);
  if(!abonent) {
    abonent = parseInt(jobPrm.get('zone'), 10);
  }
  if(!abonent) {
    abonent = parseInt(jobPrm.zone, 10);
  }
  setAbonent([abonent ? abonents.by_id(abonent) : abonents.get(), abonents.find_rows({})]);

  let provider = '';
  provider = pouch.props._auth_provider || '';
  if(!provider) {
    provider = jobPrm.get('auth_provider');
  }
  const providers = Object.keys(providersDesc)
    .filter((value) => !pfilter || pfilter(value))
    .map((value) => ({name: providersDesc[value].name, value}));
  setProvider([provider, providers]);
}

export function abonentDeps({setBranch, setYear, yearState, abonent}) {
  const {branches} = $p.cat;
  setBranch([branches.get(), branches.find_rows({owner: abonent})]);
  setYear(yearByAbonent(abonent, yearState));
}

