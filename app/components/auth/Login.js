import React from 'react';

// import auth from 'app/util/auth';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null
    };
  }

  // onLogin(ev) {
  //   ev.preventDefault();
  //   auth({
  //     username: this.refs.email.value,
  //     password: this.refs.password.value
  //   }).then(() =>{
  //     this.props.history.pushState(null, '/start');
  //   }).catch((err) => {
  //     this.setState({
  //       error: err
  //     });
  //   });
  // }

  render() {
    return (
      <div className="ibox-content">
        <form className="m-t">
          <div className="form-group" onSubmit={(ev) => this.onLogin(ev)}>
            <input ref="email" type="email" className="form-control" placeholder="username" />
          </div>
          <div className="form-group">
            <input type="password" ref="password" className="form-control" placeholder="password" />
          </div>
          <button className="btn btn-primary block full-width m-b" type="submit">
            Login
          </button>
        </form>
        {(() => {
          if(this.state.error) {
            return <p className="text-danger"> invalid credential</p>;
          }
        })}
      </div>
    );
  }
}
