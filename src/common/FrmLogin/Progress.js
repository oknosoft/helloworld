import React from 'react';
import Typography from '@mui/material/Typography';
import Loading from '../App/Loading';

export default function ({user, page}) {
  if(user.try_log_in) {
    return <Loading />;
  }
  if(user.log_error) {
    return user.log_error;
  }
  if(user.logged_in) {
    const {manifest, page: step, total_rows, docs_written} = page;
    const progress = docs_written * 100 / total_rows;
    return <Loading progress={progress || 0}>
      <Typography>{`Шаг ${step || 1} из ${manifest?.length || 60}`}</Typography>
    </Loading>;
  }
}
