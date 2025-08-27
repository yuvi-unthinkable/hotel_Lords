// import React from 'react';

// function verifyEmail() {
//   const [message, setMessage] = useState('Verifying...');
//   const searchParams = new URLSearchParams(window.location.search);
//   const token = searchParams.get('token');

//   useEffect(() => {
//     const verify = async () => {
//       try {
//         await axios.get(`/api/v1/users/verify/:token`);
//         setMessage('Email verified successfully!');
//         console.log(message);
//       } catch {
//         setMessage('Verification failed. The link may have expired.');
//         console.log(message);
//       }
//     };
//     verify();
//   }, [token]);

//   return (
//     <div>
//       <h2>Email Verification</h2>
//       <p>{message}</p>
      // <p>hi this is email verification and ur mail will be verified now</p>
//     </div>
//   );
// };


// export default verifyEmail;
