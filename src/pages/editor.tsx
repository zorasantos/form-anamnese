import { Button } from '@mui/material';
import { LongTextField } from 'uniforms-mui';
// import { useNavigate } from 'react-router-dom';
import useStore from '../store';
import Preview from './preview';

const Editor = () => {
  const addProperty = useStore((state) => state.addProperties);
  // const navigate = useNavigate();

  const addProps = () => {
    const rating = {
      firstName: { type: 'string' },
      lastName: { type: 'string' },
      workExperience: {
        description: 'Work experience in years',
        type: 'integer',
        minimum: 0,
        maximum: 100
      },
      profession: {
        type: 'string',
        options: [
          {
            label: 'Developer',
            value: 'developer'
          },
          {
            label: 'Tester',
            value: 'tester'
          },
          {
            label: 'Product owner',
            value: 'product-owner'
          },
          {
            label: 'Project manager',
            value: 'project-manager'
          },
          {
            label: 'Businessman',
            value: 'businessman'
          }
        ]
      },
      additionalInfo: {
        type: 'string',
        uniforms: { component: LongTextField }
      }
    };
    addProperty(rating);
  };

  return (
    <>
      <Button onClick={addProps}>Add input</Button>
      <Preview />
    </>
  );
};

export default Editor;
