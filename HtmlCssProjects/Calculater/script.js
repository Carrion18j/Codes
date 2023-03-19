let result = document.getElementById("result");

const operation = (value) => {
  result.value += value;
};

const clear = () => {
  result.value = "";
};

const back = () => {
  result.value = result.value.slice(0, -1);
};

const calculate = () => {
  try {
    result.value = eval(result.value);
  } catch (error) {
    alert("Invalid calculation");
  }
};
