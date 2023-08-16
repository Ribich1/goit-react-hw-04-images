import React, { useState } from 'react';
import '../styles.scss';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

const Searchbar = ({ onSubmit }) => {
  const [imgFind, setImgFind] = useState('');

  const imgRequestChange = event => {
    setImgFind(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (imgFind.trim() === '') {
      toast.error('Please, inpunt find request');
      return;
    }
    onSubmit(imgFind);
    setImgFind('');
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={imgRequestChange}
          value={imgFind}
        />
      </form>
    </header>
  );
};

export default Searchbar;

// class Searchbar extends Component {
//   state = {
//     imgFind: '',
//   };

//   imgRequestChange = event => {
//     this.setState({ imgFind: event.currentTarget.value.toLowerCase() });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     if (this.state.imgFind.trim() === '') {
//       toast.error('Please, inpunt find request');
//       return;
//     }
//     this.props.onSubmit(this.state.imgFind);
//     this.setState({ imgFind: '' });
//   };

//   render() {
//     return (
//       <header className="Searchbar">
//         <form className="SearchForm" onSubmit={this.handleSubmit}>
//           <button type="submit" className="SearchForm-button">
//             <span className="SearchForm-button-label">Search</span>
//           </button>

//           <input
//             className="SearchForm-input"
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             onChange={this.imgRequestChange}
//             value={this.state.imgFind}
//           />
//         </form>
//       </header>
//     );
//   }
// }

// export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
