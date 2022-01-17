// material
import { Card, Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
// ----------------------------------------------------------------------
KanbanCard.propTypes = {
  card: PropTypes.object
};
function KanbanCard({ card }) {
  console.log(card.id);
  const { id, title, description } = card;
  return (
    <Card key={id}>
      <Stack spacing={2} sx={{ p: 3 }}>
        <Typography variant="subtitle2" noWrap>
          {title}
        </Typography>
        <Typography variant="subtitle2" noWrap>
          {description}
        </Typography>
      </Stack>
    </Card>
  );
}
export default React.memo((props) => <KanbanCard {...props} />);
