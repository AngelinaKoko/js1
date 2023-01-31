class Button {
  constructor(width, height, typeButton, color) {
    this.width = width;
    this.height = height;
    this.typeButton = typeButton;
    this.color = color;
  }

  onClick = () => {
    console.log(
      `Properties of class Button: width:  ${this.width}, height: ${this.height}, typeButton: ${this.typeButton}, color: ${this.color}`
    );
  };
}

testButton = (button, testButton) => {
  button.height == testButton.height &&
  button.width == testButton.width &&
  button.color == testButton.color &&
  button.typeButton == testButton.typeButton
    ? console.log(`Button matches the test`)
    : console.log(`Button fails the test`);
};

let button1 = new Button(15, 5, "Button", "Green");

const testButtonObject = {
  width: "15",
  height: "5",
  typeButton: "Button",
  color: "Green",
};

button1.onClick();

testButton(button1, testButtonObject);
