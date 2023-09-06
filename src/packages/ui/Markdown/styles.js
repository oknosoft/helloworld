
const anchorLinkStyle = (theme, size) => ({
  '& .anchor-link-style': {
    opacity: 0,
    // To prevent the link to get the focus.
    display: 'none',
  },
  '&:hover .anchor-link-style': {
    display: 'inline-block',
    opacity: 1,
    padding: theme.spacing(),
    color: theme.palette.text.hint,
    '&:hover': {
      color: theme.palette.text.secondary,
    },
    '& svg': {
      width: size,
      fill: 'currentColor',
    },
  },
});

const styles = theme => ({
  root: {
    fontFamily: theme.typography.fontFamily,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    padding: `0 ${theme.spacing()}`,
    color: theme.palette.text.primary,
    [theme.breakpoints.up('lg')]: {
      maxWidth: 1280,
    },
    '& .anchor-link': {
      marginTop: -theme.spacing(12), // Offset for the anchor.
      position: 'absolute',
    },
    '& pre': {
      margin: `${theme.spacing(3)} 0`,
      padding: '12px 18px',
      backgroundColor: theme.palette.background.paper,
      borderRadius: 3,
      overflow: 'auto',
    },
    '& code': {
      display: 'inline-block',
      lineHeight: 1.6,
      fontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace',
      padding: '3px 6px',
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.background.paper,
      fontSize: 14,
    },
    '& p code, & ul code, & pre code': {
      fontSize: 14,
      lineHeight: 1.6,
    },
    '& h1 code, & h2 code, & h3 code, & h4 code': {
      fontSize: 'inherit',
      lineHeight: 'inherit',
    },
    '& h1': {
      ...theme.typography.display2,
      fontSize: '2rem',
      color: theme.palette.text.secondary,
      margin: '0 0 0.7em 0',
      ...anchorLinkStyle(theme, 20),
    },
    '& h2': {
      ...theme.typography.display1,
      color: theme.palette.text.secondary,
      margin: '1em 0 0.7em',
      ...anchorLinkStyle(theme, 18),
    },
    '& h3': {
      ...theme.typography.headline,
      color: theme.palette.text.secondary,
      margin: '1em 0 0.7em',
      ...anchorLinkStyle(theme, 16),
    },
    '& h4': {
      ...theme.typography.title,
      color: theme.palette.text.secondary,
      margin: '1em 0 0.7em',
      ...anchorLinkStyle(theme, 14),
    },
    '& p, & ul, & ol': {
      lineHeight: 1.6,
    },
    '& img': {
      maxWidth: '100%',
    },
    '& table': {
      width: '100%',
      display: 'block',
      overflowX: 'auto',
      borderCollapse: 'collapse',
      borderSpacing: 0,
      overflow: 'hidden',
    },
    '& thead': {
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.palette.text.secondary,
    },
    '& tbody': {
      lineHeight: 1.6,
      color: theme.palette.text.primary,
    },
    '& td': {
      borderBottom: `1px solid ${theme.palette.primary.A100}`,
      padding: `${theme.spacing(.5)} ${theme.spacing(2)} ${theme.spacing(.5)} ${theme.spacing(.5)}`,
      textAlign: 'left',
    },
    '& td:last-child': {
      paddingRight: theme.spacing(2),
    },
    '& td compact': {
      paddingRight: theme.spacing(2),
    },
    '& td code': {
      lineHeight: 1.6,
    },
    '& th': {
      whiteSpace: 'pre',
      borderBottom: `1px solid ${theme.palette.primary.A100}`,
      padding: `0 ${theme.spacing(2)} 0 0`,
      textAlign: 'left',
    },
    '& th:last-child': {
      paddingRight: theme.spacing(3),
    },
    '& strong': {
      fontWeight: theme.typography.fontWeightMedium,
    },
    '& blockquote': {
      borderLeft: `5px solid ${theme.palette.text.hint}`,
      background: theme.palette.background.paper,
      padding: `${theme.spacing(.5)} ${theme.spacing()}`,
      margin: `${theme.spacing()} 0`,
    },
    '& a, & a code': {
      // Style taken from the Link component
      color: theme.palette.secondary.A400,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
});

export default styles;
