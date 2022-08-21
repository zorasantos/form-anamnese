import useStore from '../../store';

const EditPreview = ({ name = 'Edit Preview' }) => {
  const schema = useStore((state) => state.schema);
  return (
    <>
      <div className="bg-yellow-300 col-start-1 col-end-4">
        {Object.keys(schema.properties).length !== 0 && (
          <div className="bg-pink-600 w-1/3 text-center mx-auto">{name}</div>
        )}
      </div>
    </>
  );
};

export default EditPreview;
