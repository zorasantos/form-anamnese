import { TextField } from '@mui/material';
import Text from '../../Text';
import Title from '../../Title';

const DifficultiesAndObjectivesForm = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-3 gap-3">
      <Title text="SUAS DIFICULDADES E OBJETIVOS" />

      <Text text="Por favor, liste resumidamente as três dificuldades principais que o levaram a buscar ajuda." />
      <TextField
        // value={formik.values.password}
        // onChange={formik.handleChange}
        // error={formik.touched.password && !!formik.errors.password}
        // helperText={formik.touched.password && formik.errors.password}
        label="1"
        multiline
        maxRows={2}
        name="difficultyFirst"
        id="difficultyFirst"
        variant="standard"
        size="small"
      />

      <TextField
        // value={formik.values.password}
        // onChange={formik.handleChange}
        // error={formik.touched.password && !!formik.errors.password}
        // helperText={formik.touched.password && formik.errors.password}
        label="2"
        multiline
        maxRows={2}
        name="difficultySecond"
        id="difficultySecond"
        variant="standard"
        size="small"
      />

      <TextField
        // value={formik.values.password}
        // onChange={formik.handleChange}
        // error={formik.touched.password && !!formik.errors.password}
        // helperText={formik.touched.password && formik.errors.password}
        label="3"
        multiline
        maxRows={2}
        name="difficultyThird"
        id="difficultyThird"
        variant="standard"
        size="small"
      />

      <Text text="Por favor, diga o que você deseja alcançar com a terapia." />
      <TextField
        // value={formik.values.password}
        // onChange={formik.handleChange}
        // error={formik.touched.password && !!formik.errors.password}
        // helperText={formik.touched.password && formik.errors.password}
        multiline
        required
        maxRows={5}
        name="objective"
        id="objective"
        variant="standard"
        size="small"
      />
    </div>
  );
};

export default DifficultiesAndObjectivesForm;
