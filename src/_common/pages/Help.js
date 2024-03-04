import React from 'react';
import MarkdownDocs from '../../packages/ui/Markdown/MarkdownDocs';
import {useMatches } from 'react-router-dom';
import {useTitleContext} from '../App';

const opt = {baseUrl: '/help/'};
export default function HelpRoute(props) {
  const {description, title, setTitle} = useTitleContext();
  const matches = useMatches();
  const {pathname} = matches[matches.length-1];
  const [markdown, setMarkdown] = React.useState('Получаем файл с сервера...');

  let fname = pathname.replace('/help', '');
  if(fname.startsWith('/')) {
    fname = fname.substring(1);
  }

  React.useEffect(() => {
    fetch(`${$p.jobPrm.docs_root}${fname || 'index.md'}`)
      .then((res) => res.text())
      .then((markdown) => setMarkdown(markdown))
      .catch((err) => setMarkdown(err.message || err));
  }, [fname]);

  return <MarkdownDocs
    {...props}
    markdown={markdown}
    opt={opt}
    setTitle={setTitle}
  />;
}
