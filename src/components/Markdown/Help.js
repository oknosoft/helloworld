// @flow

import React from 'react';
import MarkdownDocs from 'metadata-react/Markdown/MarkdownDocs';
import markdown from './Help.md';
import {description} from '../App/menu_items';

export default function Page() {
  return <MarkdownDocs markdown={markdown} descr={description} canonical="/help"/>;
}
