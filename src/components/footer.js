import React from 'react';
import Button from './Button.js';
function Footer() {
  return (
    <div>
      <p>
        <Button value="All" />
        <Button value="Completed" />
        <Button value="Active" />
      </p>
    </div>
  );
}
export default Footer;
