
import React from 'react';
import MarkdownDocs from '../../packages/ui/Markdown/MarkdownDocs';
import {useMatches } from 'react-router-dom';
import {useTitleContext} from '../App';

export default function Page(props) {
  const {description, title, setTitle} = useTitleContext();
  const matches = useMatches();
  const {pathname} = matches[matches.length-1];
  const [markdown, setMarkdown] = React.useState('');

  React.useEffect(() => {
    import(`.${pathname}.md`)
      .then((module) => {
        setMarkdown(module.default);
      });
  }, [pathname]);

  return <MarkdownDocs
    {...props}
    markdown={markdown}
    //subtitle="Окнософт"
    //descr={description}
    setTitle={setTitle}
  />;
}
