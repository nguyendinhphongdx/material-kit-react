import styled from '@emotion/styled';
import CancelIcon from '@mui/icons-material/Cancel';
import { Button, Dialog, DialogContent, DialogTitle } from '@mui/material';
import PropTypes from 'prop-types';
// ----------------------------------------------------------------------
ModalC.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool,
  toggleModal: PropTypes.func,
  submit: PropTypes.func,
  title: PropTypes.string
};
export default function ModalC({
  open = false,
  title,
  toggleModal = null,
  submit = null,
  children
}) {
  return (
    <div style={{ width: 500 }}>
      <Dialog open={open} onBackdropClick={toggleModal}>
        <HeaderModal title={title} close={toggleModal} />
        <DialogContent>{children}</DialogContent>
        <FooterModal submit={submit} close={toggleModal} />
      </Dialog>
    </div>
  );
}
HeaderModal.propTypes = {
  title: PropTypes.string,
  close: PropTypes.func
};
function HeaderModal({ title, close }) {
  const RootStyle = styled('div')({
    alignItems: 'center',
    whiteSpace: 'nowrap',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '5px 10px'
  });
  return (
    <RootStyle>
      <DialogTitle style={{ padding: 0 }}>{title}</DialogTitle>
      <CancelIcon style={{ cursor: 'pointer' }} onClick={close} />
    </RootStyle>
  );
}
FooterModal.propTypes = {
  submit: PropTypes.func,
  close: PropTypes.func
};
function FooterModal({ submit, close }) {
  const RootStyle = styled('div')({
    alignItems: 'center',
    whiteSpace: 'nowrap',
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '5px 10px',
    width: '100%'
  });
  return (
    <RootStyle>
      <Button variant="outlined" style={{ marginRight: 10 }} onClick={close}>
        Close
      </Button>
      <Button variant="contained" onClick={submit}>
        Submit
      </Button>
    </RootStyle>
  );
}
// ----------------------------------------------------------------------
