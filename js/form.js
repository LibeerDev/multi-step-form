let currentStep = 0;

function updateButton(currentStep) {
    const allStepButtons = document.querySelectorAll('.step-btn');

    allStepButtons.forEach((button) => {
        button.classList.remove('selected');
    });

    allStepButtons[currentStep].classList.toggle('selected');
}

function goToStep(goToStepIndex) {

    document.getElementById(`step${currentStep}`).classList.add('hidden');

    // increment and show the next step window
    currentStep = goToStepIndex;


    document.getElementById(`step${goToStepIndex}`).classList.remove('hidden');

    updateButton(currentStep);

}

function nextStep() {
    const allStepButtons = document.querySelectorAll('.step-btn');


    // hide current step window
    document.getElementById(`step${currentStep}`).classList.add('hidden');

    // increment and show the next step window
    if (document.getElementById(`step${currentStep + 1}`) !== null) {
        currentStep++;


        document.getElementById(`step${currentStep}`).classList.remove('hidden');


        updateButton(currentStep);
    }

};

function selectButton(buttonId) {
    // Remove the "selected" class from all buttons
    const buttons = document.querySelectorAll('.billing-selection-btn');
    buttons.forEach(button => {
      button.classList.remove('selected');
    });

    // Add the "selected" class to the clicked button
    const selectedButton = document.getElementById(buttonId);
    selectedButton.classList.add('selected');

  }