import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import board from '../../_mocks_/kanban';

export const KanBanContext = createContext();
export default function KanBanProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [list, setList] = useState(() => board);
  const [state, setState] = useState({
    input: ''
  });
  const toggleModal = () => {
    setOpen(!open);
  };
  const addColumn = () => {
    const newList = [...list.columns];
    newList.push({
      id: list.columns[list.columns.length - 1].id + 1,
      title: state.input || 'new Value',
      cards: []
    });
    setList({
      ...list,
      columns: newList
    });
  };
  const handleOnRename = (item) => {
    console.log(item);
  };
  const contexData = {
    open,
    setOpen,
    list,
    setList,
    state,
    setState,
    toggleModal,
    addColumn,
    handleOnRename
  };
  return <KanBanContext.Provider value={contexData}>{children}</KanBanContext.Provider>;
}
KanBanProvider.propTypes = {
  children: PropTypes.node
};
