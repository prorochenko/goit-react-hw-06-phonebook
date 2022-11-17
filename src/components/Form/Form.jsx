import { useState } from 'react';
import { InputName, InputNumber } from '../Input/input';
import Title from '../Title/Title';
import Button from '../Button/Button';

export default function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChane = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const contact = { name, number };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(contact);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Title title="Name">
        <InputName name={name} onChange={handleInputChane} />
      </Title>

      <Title title="Number">
        <InputNumber number={number} onChange={handleInputChane} />
      </Title>
      <Button title="Add contact" />
    </form>
  );
}
