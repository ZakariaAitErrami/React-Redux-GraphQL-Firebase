import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "./styles.scss";
import Buttons from "../forms/Button";
import { signInWithGoogle, auth } from "../../firebase/utils";
import FormInput from "../forms/FormInput";
import Button from "../forms/Button";
import AuthWrapper from "../AuthWrapper";




const SignIn = props => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const resetForm = () => {
    setEmail('');
      setPassword('');
  }
  const handleSubmit = async e => {
    e.preventDefault();
    try {

      await auth.signInWithEmailAndPassword(email, password);
      resetForm();
      props.history.push('/');

    } catch(err) {
      // console.log(err);
    }
  }


    const configAuthWrapper = {
      headline: 'LogIn'
    };

    return (
      <AuthWrapper {...configAuthWrapper}>

          <div className="formWrap">
            <form onSubmit={handleSubmit}>

              <FormInput
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                handleChange={e => setEmail(e.target.value)}
              />

              <FormInput
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                handleChange={e => setPassword(e.target.value)}
              />

              <Buttons type="submit">
                LogIn
              </Buttons>


              <div className="socialSignin">
                <div className="row">
                  <Buttons onClick={signInWithGoogle}>
                    Sign in with Google
                  </Buttons>
                </div>
              </div>
              <div className="links">
                <Link to="/recovery">
                  Reset Password
                </Link>
              </div>
            </form>
          </div>
          </AuthWrapper>
    );
}

export default withRouter(SignIn);

// const initialState = {
//   email: '', 
//   password: ''
// }
// class SignIn extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       ...initialState
//     }
//     this.handleChange.bind(this);
//   }

//   handleChange(e){
//     const {name, value} = e.target;
//     this.setState({
//       [name]: value
//     });
//   }

//     handleSubmit = async e => {
//         e.preventDefault();
//         const { email, password } = this.state;
//         try{

//           await auth.signInWithEmailAndPassword(email, password);
//           //reset the form
//           this.setState({
//             ...initialState
//           })
//         } catch(err) {
//           console.log(err);
//         }
//       }
//   render() {
//     const { email, password} = this.state;
//     return (
//       <div className="signin">
//         <div className="wrap">
//           <h2>LogIn</h2>
//           <div className="formWrap">
//             <form onSubmit={this.handleSubmit}>


//               <FormInput type="email"
//               name="email"
//               value={email}
//               placeholder="Email"
//               handleChange={this.handleChange}/>

//               <FormInput type="password"
//               name="password"
//               value={password}
//               placeholder="Password"
//               handleChange={this.handleChange}/>

//               <Buttons type="submit">
//                 LogIn
//               </Buttons>

//               <div className="socialSignin">
//                 <div className="row">
//                   <Buttons onClick={signInWithGoogle}>
//                     Sign in with Google
//                   </Buttons>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default SignIn;
