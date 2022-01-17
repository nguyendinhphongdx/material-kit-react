// material
import { Stack, TextField } from '@mui/material';
import { FormikProvider, useFormik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
// ----------------------------------------------------------------------
KanbanForm.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func
};
export default function KanbanForm({ value, setValue }) {
  const LoginSchema = Yup.object().shape({
    name: Yup.string().required('Name is required')
  });

  const formik = useFormik({
    initialValues: {
      name: value
    },
    validationSchema: LoginSchema
  });

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <FormikProvider value={formik}>
      <Stack spacing={3}>
        <TextField
          fullWidth
          autoComplete="name"
          type="text"
          label="Name"
          onChange={handleChange}
          value={value}
        />
      </Stack>
    </FormikProvider>
  );
}
