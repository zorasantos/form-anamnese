import { TextField } from '@mui/material';
import Title from '../../Title';

const PersonalDetailForm = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-5 2sm:grid-cols-1 md:grid-cols-2">
      <div className="row-span-full col-span-full">
        <Title text="SEUS DADOS PESSOAIS" />
      </div>

      <TextField
        // value={formik.values.password}
        // onChange={formik.handleChange}
        // error={formik.touched.password && !!formik.errors.password}
        // helperText={formik.touched.password && formik.errors.password}
        label="Nome"
        name="name"
        id="name"
        placeholder="Digite seu nome"
        variant="outlined"
        size="small"
      />

      <TextField
        // value={formik.values.password}
        // onChange={formik.handleChange}
        // error={formik.touched.password && !!formik.errors.password}
        // helperText={formik.touched.password && formik.errors.password}
        label="Data de Nascimento"
        name="birthdate"
        id="birthdate"
        placeholder="Digite sua data de nascimento"
        variant="outlined"
        size="small"
      />

      <TextField
        // value={formik.values.password}
        // onChange={formik.handleChange}
        // error={formik.touched.password && !!formik.errors.password}
        // helperText={formik.touched.password && formik.errors.password}
        label="Estado civil"
        name="maritalStatus"
        id="maritalStatus"
        placeholder="Digite seu estado civil"
        variant="outlined"
        size="small"
      />

      <TextField
        // value={formik.values.password}
        // onChange={formik.handleChange}
        // error={formik.touched.password && !!formik.errors.password}
        // helperText={formik.touched.password && formik.errors.password}
        label="Sexo"
        name="gender"
        id="gender"
        placeholder="Digite seu sexo"
        variant="outlined"
        size="small"
      />

      <TextField
        // value={formik.values.password}
        // onChange={formik.handleChange}
        // error={formik.touched.password && !!formik.errors.password}
        // helperText={formik.touched.password && formik.errors.password}
        label="Religi??o"
        name="religion"
        id="religion"
        placeholder="Digite sua religi??o"
        variant="outlined"
        size="small"
      />

      <TextField
        // value={formik.values.password}
        // onChange={formik.handleChange}
        // error={formik.touched.password && !!formik.errors.password}
        // helperText={formik.touched.password && formik.errors.password}
        label="Endere??o"
        name="address"
        id="address"
        placeholder="Digite seu endere??o"
        variant="outlined"
        size="small"
      />

      <TextField
        // value={formik.values.password}
        // onChange={formik.handleChange}
        // error={formik.touched.password && !!formik.errors.password}
        // helperText={formik.touched.password && formik.errors.password}
        label="Telefone"
        name="phone"
        id=" phone"
        placeholder="Digite o n??mero de telefone"
        variant="outlined"
        size="small"
      />

      <TextField
        // value={formik.values.password}
        // onChange={formik.handleChange}
        // error={formik.touched.password && !!formik.errors.password}
        // helperText={formik.touched.password && formik.errors.password}
        label="Ocupa????o"
        name="occupation"
        id="occupation"
        placeholder="Digite sua ocupa????o"
        variant="outlined"
        size="small"
      />
    </div>
  );
};

export default PersonalDetailForm;
