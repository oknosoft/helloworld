import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearBuffer({html, children, progress}) {
  const [autoProgress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(12);
  if(!progress) {
    progress = autoProgress;
  }

  const progressRef = React.useRef(() => {});
  React.useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 9;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 300);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
      {html && <div dangerouslySetInnerHTML={{__html: html}} />}
      {children}
    </Box>
  );
}
