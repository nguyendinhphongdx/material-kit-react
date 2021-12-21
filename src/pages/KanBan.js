// material
import { Container } from '@mui/material';
import Board from '@asseinfo/react-kanban';
// components
import board from '../_mocks_/kanban';
import Page from '../components/Page';
import '@asseinfo/react-kanban/dist/styles.css';

export default function KanBan() {
  return (
    <Page title="Dashboard: Blog | Minimal-UI">
      <Container maxWidth="xl">
        <Board initialBoard={board} />
      </Container>
    </Page>
  );
}
