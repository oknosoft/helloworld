export default function (theme) {
  return {
    root: {
      flex: '1 0 100%',
    },
    hero: {
      minHeight: '90vh', // Makes the hero full height until we get some more content.
      flex: '0 0 auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.palette.grey[100],
    },
    content: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        paddingBottom: theme.spacing(4),
      },
    },
    text: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headline: {
      maxWidth: 500,
      textAlign: 'center',
    },
    button: {
      marginTop: theme.spacing(3),
    },
    logo: {
      margin: '20px 0',
      width: '100%',
      maxHeight: 230,
    },
  };
}
