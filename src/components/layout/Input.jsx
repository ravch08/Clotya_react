import React from 'react';

const Input = () => {

   return (
      <form action="#!">
         <input type="email" name="email" id="email" placeholder='Enter your email address' />
         <input type="submit" name='submit' value="Subscribe" />
      </form>
   );
};

export default Input;   