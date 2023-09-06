/**
 * Дополнительная ссылка
 */

import React from 'react';
import Link from '@mui/icons-material/Link';
import {styled} from '@mui/material/styles';

const Anchor = styled('a')(({ theme }) => ({
  opacity: 0.4,
  marginLeft: theme.spacing(),
  color: theme.palette.text.secondary,
  // To prevent the link to get the focus.
  '&:hover': {
    //display: 'inline-block',
    opacity: 1,
    '& svg': {
      //width: size,
      fill: 'currentColor',
    },
  },
}));

export default function SubLink ({children, ...props}) {
  return <Anchor title="Прямая ссылка" {...props}>
    <Link />
    {children}
  </Anchor>;
}
