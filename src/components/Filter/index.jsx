import { Label, Input } from 'components/App.styled';

const FilterByName = ({ value, onChange }) => {
  return (
    <>
      <Label>
        Find contact by name
        <Input type="text" value={value} onChange={onChange} />
      </Label>
    </>
  );
};

export default FilterByName;
