import { TextField } from '@mui/material';
import Text from '../../Text';
import Title from '../../Title';

const FamilyAndYouForm = () => {
  return (
    <>
      <Title text="VOCÊ E SUA FAMÍLIA" />
      <div className="flex flex-col">
        <Text text="1. Qual seu local de nascimento?" />
        <TextField
          // value={formik.values.password}
          // onChange={formik.handleChange}
          // error={formik.touched.password && !!formik.errors.password}
          // helperText={formik.touched.password && formik.errors.password}
          name="birthPlace"
          id="birthPlace"
          variant="standard"
          size="small"
        />
      </div>

      <div className="flex flex-col">
        <Text text="2. Por favor, dê alguns detalhes sobre seu PAI (se souber)" />
        <TextField
          // value={formik.values.password}
          // onChange={formik.handleChange}
          // error={formik.touched.password && !!formik.errors.password}
          // helperText={formik.touched.password && formik.errors.password}
          name="birthPlace"
          id="birthPlace"
          variant="standard"
          size="small"
        />
      </div>
    </>
  );
};

export default FamilyAndYouForm;
