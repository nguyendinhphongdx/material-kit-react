import Board from '@asseinfo/react-kanban';
import '@asseinfo/react-kanban/dist/styles.css';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Icon } from '@iconify/react';
// material
import { Button, Container, Stack, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import ModalC from '../../components/common/Modal';
import Page from '../../components/Page';
import KanbanCard from '../../components/_dashboard/kanban/CardKanban';
import KanbanForm from '../../components/_dashboard/kanban/FormAdd';
import KanBanProvider, { KanBanContext } from './KanbanContext';
// components
import './kanban.css';

export default function CT() {
  return (
    <KanBanProvider>
      <KanBan />
    </KanBanProvider>
  );
}
function KanBan() {
  const { open, list, state, setState, toggleModal, addColumn, handleOnRename } =
    useContext(KanBanContext);
  useEffect(() => {
    console.log('reload', list);
  }, [list]);
  return (
    <Page title="Dashboard: Blog | Minimal-UI" style={{ height: '100%' }}>
      <Container maxWidth="xl" style={{ height: 'inherit' }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            User
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            onClick={toggleModal}
            to="#"
            startIcon={<Icon icon={plusFill} />}
          >
            New User
          </Button>
        </Stack>
        <Board
          renderCard={(card) => <KanbanCard card={card} />}
          initialBoard={list || { column: [] }}
          allowRemoveLane
          allowRenameColumn
          allowRemoveCard
          onLaneRemove={console.log}
          onCardRemove={console.log}
          onLaneRename={handleOnRename}
          allowAddCard={{ on: 'top' }}
          onNewCardConfirm={(draftCard) => ({
            id: new Date().getTime(),
            ...draftCard
          })}
          onCardNew={console.log}
        />
      </Container>
      <ModalC title="Add New" open={open} toggleModal={toggleModal} submit={addColumn}>
        <KanbanForm
          value={state.input}
          setValue={(value) => setState({ ...state, input: value })}
        />
      </ModalC>
    </Page>
  );
}
