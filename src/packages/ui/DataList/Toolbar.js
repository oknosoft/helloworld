import React from 'react';

import {Toolbar, HtmlTooltip} from '../../../_common/App/styled';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import AddIcon from '@mui/icons-material/AddBoxOutlined';
import CopyIcon from '@mui/icons-material/PostAdd';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import DriveFileMoveOutlinedIcon from '@mui/icons-material/DriveFileMoveOutlined';
import EditIcon from '@mui/icons-material/DriveFileRenameOutline';

export default function (props) {
  const {selectionMode, meta} = props;
  return <Toolbar disableGutters>
    {selectionMode && <>
      <Button startIcon={<PlaylistAddCheckIcon/>} onClick={null}>Выбрать</Button>
      <Divider orientation="vertical" flexItem />
    </>}
    <HtmlTooltip title="Создать папку">
      <IconButton disabled onClick={null}><CreateNewFolderOutlinedIcon/></IconButton>
    </HtmlTooltip>
    <HtmlTooltip title="Переместить текущий элемент в папку">
      <IconButton disabled onClick={null}><DriveFileMoveOutlinedIcon/></IconButton>
    </HtmlTooltip>
    <HtmlTooltip title="Создать элемент">
      <IconButton disabled onClick={null}><AddIcon/></IconButton>
    </HtmlTooltip>
    <HtmlTooltip title="Создать элемент копированием текущего">
      <IconButton disabled onClick={null}><CopyIcon/></IconButton>
    </HtmlTooltip>
    <HtmlTooltip title="Изменить элемент">
      <IconButton onClick={null}><EditIcon/></IconButton>
    </HtmlTooltip>
  </Toolbar>;
}
