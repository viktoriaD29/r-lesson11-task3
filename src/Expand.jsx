import React from 'react';

class Expand extends React.Component {
  state = {
    isOpen: false,
  };

  showText = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button onClick={this.showText} className="expand__toggle-btn">
            {this.state.isOpen ? (
              <i className="fas fa-chevron-up"></i>
            ) : (
              <i className="fas fa-chevron-down"></i>
            )}
          </button>
        </div>
        {this.state.isOpen ? <div className="expand__content">{this.props.children}</div> : null}
      </div>
    );
  }
}

export default Expand;

// class Expand extends React.Component {
//   state = {
//     hide: false,
//   };

//   render() {
//     const { hide } = this.state;
//     return (
//       <div className="app">
//         <div className="expand border">
//           <div className="expand__header">
//             <span className="expand__title">{this.props.title}</span>
//             <button
//               onClick={() => this.setState({ hide: !hide })}
//               className="expand__toggle-btn"
//             >
//               {this.state.hide ? (
//                 <i className="fas fa-chevron-up"></i>
//               ) : (
//                 <i className="fas fa-chevron-down"></i>
//               )}
//             </button>
//           </div>
//           <div className="expand__content">
//             {this.state.hide ? this.props.elem : null}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
