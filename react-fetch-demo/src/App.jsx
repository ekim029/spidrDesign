import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // Create a simple React app that contains a single-page form that contains the following fields:

  // First name
  // Last name
  // Phone number  
  // Email address
  // Guess the air fryer’s cost (dollar amount)
  // A very, very secret 16-digit Spidr PIN. Digits are formatted with dashes in groups of four “####-####-####-####”. 

  // There should be a submit button at the bottom of the form. This doesn’t need to do anything meaningful- 
  // just print the user’s form data to the console. 

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [cost, setCost] = useState("");
  const [pin, setPin] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (!firstName || !lastName || !phoneNumber || !emailAddress || !cost || !pin) {
      alert("WARNING! Missing Fields");
      return;
    }
    console.log({ firstName, lastName, phoneNumber, emailAddress, cost, pin });
  }

  return (
    <div className="outerLayer">

      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>

        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>

        <label>
          Phone Number:
          <input
            type="tel"
            value={phoneNumber}
            inputMode="numeric"   // brings up number keypad on mobiles
            maxLength={10}
            minLength={10}
            required
            onChange={(e) => {
              const onlyNumbers = e.target.value
                .split('')
                .filter((char) => '0123456789'.includes(char))
                .join('');
              setPhoneNumber(onlyNumbers);
            }}
          />
        </label>

        <label>
          Email Address:
          <input
            type="email"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
          />
        </label>

        <label>
          Guess the cost:
          <input
            type="text"
            value={cost}
            onChange={(e) => {
              const onlyNumbers = e.target.value
                .split('')
                .filter((char) => '0123456789'.includes(char))
                .join('');
              setCost(onlyNumbers)
            }}
          />
        </label>

        <label>
          Pin:
          <input
            type="password"
            value={pin}
            placeholder="####-####-####-####"
            maxLength={16}
            minLength={16}
            required
            onChange={(e) => {
              const onlyNumbers = e.target.value
                .split('')
                .filter((char) => '0123456789'.includes(char))
                .join('');
              setPin(onlyNumbers);
            }}
          />
        </label>

        <button type="submit"> Submit</button>

      </form>

    </div>
  )

}

export default App
