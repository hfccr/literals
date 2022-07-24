import React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { CategoryIcon } from './CategoryIcon';

export function LiteralChip({ tag, address, onClick }) {
  const { name, icon, category } = tag;
  return (
    <Chip
      label={name}
      variant="outlined"
      avatar={<Avatar src={icon} />}
      onClick={onClick}
    />
  );
}
