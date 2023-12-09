import React, { useState } from 'react';
import css from './ContactForm.module.css';

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (name.trim() === '' || number.trim() === '') {
      return;
    }

    onAddContact(name, number);
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={css.inputItem}
        type="text"
        name="name"
        required
        value={name}
        onChange={handleNameChange}
      />
      <br />
      <input
        className={css.inputItem}
        type="text"
        name="number"
        required
        value={number}
        onChange={handleNumberChange}
      />
      <br />
      <button className={css.formButton} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleNameChange = event => {
//     this.setState({ name: event.target.value });
//   };

//   handleNumberChange = event => {
//     this.setState({ number: event.target.value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     if (this.state.name.trim() === '' || this.state.number.trim() === '') {
//       return;
//     }

//     this.props.onAddContact(this.state.name, this.state.number);
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input
//           className={css.inputItem}
//           type="text"
//           name="name"
//           required
//           value={this.state.name}
//           onChange={this.handleNameChange}
//         />
//         <br />
//         <input
//           className={css.inputItem}
//           type="text"
//           name="number"
//           required
//           value={this.state.number}
//           onChange={this.handleNumberChange}
//         />
//         <br />
//         <button className={css.formButton} type="submit">Add contact</button>
//       </form>
//     );
//   }
// }

// export default ContactForm;
