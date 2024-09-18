async function getData() {
  const lastName = document.getElementById('lastName').value;
  fetch(`https://t79y8f51c5.execute-api.us-east-2.amazonaws.com/latest?lastName=${lastName}`)
    .then((response) => response.json())
    .then((json) => {
      const result = JSON.parse(json.body).result;
      const target = document.getElementById('vehicle-results');
      target.textContent = '';
      if (result === undefined) {
          target.append('No vehicles found');
      } else {
          target.append(result);
      }
  })
}

export default function decorate(block) {
    const form = document.createElement('div');
    form.setAttribute('id', 'search-form');
    
    // Create Last Name input field
    const lastNameLabel = document.createElement('label');
    lastNameLabel.setAttribute('for', 'lastName');
    lastNameLabel.textContent = 'Last Name: ';
    const lastNameInput = document.createElement('input');
    lastNameInput.setAttribute('type', 'text');
    lastNameInput.setAttribute('id', 'lastName');
    lastNameInput.setAttribute('name', 'lastName');
    lastNameInput.setAttribute('required', 'true');
    
    // Create SSN input field
    const ssnLabel = document.createElement('label');
    ssnLabel.setAttribute('for', 'ssn');
    ssnLabel.textContent = 'Last 4 Digits of SSN: ';
    const ssnInput = document.createElement('input');
    ssnInput.setAttribute('type', 'text');
    ssnInput.setAttribute('id', 'ssn');
    ssnInput.setAttribute('name', 'ssn');
    ssnInput.setAttribute('maxlength', '4');
    
    // Create Zip Code input field
    const zipLabel = document.createElement('label');
    zipLabel.setAttribute('for', 'zip');
    zipLabel.textContent = 'Zip Code: ';
    const zipInput = document.createElement('input');
    zipInput.setAttribute('type', 'text');
    zipInput.setAttribute('id', 'zip');
    zipInput.setAttribute('name', 'zip');
    
    // Create submit button
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Search';
    submitButton.addEventListener('click', getData, false );

    // Append elements to form
    const lnSpan = document.createElement('span');
    lnSpan.appendChild(lastNameLabel);
    lnSpan.appendChild(lastNameInput);
    form.appendChild(lnSpan);

    const ssnSpan = document.createElement('span');
    ssnSpan.appendChild(ssnLabel);
    ssnSpan.appendChild(ssnInput);
    form.appendChild(ssnSpan);

    const zipSpan = document.createElement('span');
    zipSpan.appendChild(zipLabel);
    zipSpan.appendChild(zipInput);
    form.appendChild(zipSpan);

    form.appendChild(submitButton);

    const results = document.createElement('div');
    results.id = 'vehicle-results'

    block.textContent = '';
    block.append(form, results);
}