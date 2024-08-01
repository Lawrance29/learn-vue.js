const app = new Vue({
  el: "#app",
  data: {
    // NAVBAR DATA
    home: "index.html",
    profile: "pages/profile.html",
    product: "pages/product.html",
    about: "pages/about.html",
    // 2
    inputColor: "",
    // 3
    textAlign: "",
    // 4
    num1: null,
    num2: null,
    operator: null,
  },
  computed: {
    textColor() {
      switch (this.inputColor.toLowerCase()) {
        case "merah":
          return "red";
        case "kuning":
          return "yellow";
        case "biru":
          return "blue";
        default:
          return "grey";
      }
    },
    changeTextAlign() {
      switch (this.textAlign) {
        case "center":
          return "center";
        case "left":
          return "left";
        case "right":
          return "right";

        default:
          return "justify";
      }
    },
    countResult() {
      if (this.num1 && this.num2 != null) {
        const num1 = parseFloat(this.num1);
        const num2 = parseFloat(this.num2);
        switch (this.operator) {
          case "+":
            return num1 + num2;
          case "-":
            return num1 - num2;
          case "*":
            return num1 * num2;
          case "/":
            return num1 / num2;
          default:
            return "";
        }
      } else {
        return "";
      }
    },
  },
});
