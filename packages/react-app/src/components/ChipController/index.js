import React from 'react';
import { LiteralChip } from '../LiteralChip';
import { LiteralDetailsDialog } from './LiteralDetailsDialog';
import { lit } from '../lit/index';

export function ChipController({ tag, jwt, verification }) {
  const { accessControlConditions } = tag;
  const [readableConditions, setReadableConditions] = React.useState('');
  React.useEffect(() => {
    const getHumanConditions = async () => {
      const humanConditions = await lit.getHumanizedAccessControlConditions(
        accessControlConditions
      );
      setReadableConditions(humanConditions);
    };

    getHumanConditions();
  }, [accessControlConditions]);
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const onClick = () => {
    handleClickOpen();
  };
  return (
    <>
      <LiteralDetailsDialog
        tag={tag}
        jwt={jwt}
        verification={verification}
        open={open}
        handleClose={handleClose}
        readableConditions={readableConditions}
      />
      <LiteralChip tag={tag} onClick={onClick} />
    </>
  );
}
