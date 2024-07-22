
export function prepare({adapters: {pouch}}) {
  return pouch.local.ram.info()
    .then(({doc_count}) => doc_count < 2 ? import('./raw') : [])
    .then((raw) => raw.default?.length ? pouch.local.ram.bulkDocs(raw.default, {new_edits: false}) : []);
}

