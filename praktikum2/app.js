const app = new Vue({
  el: "#app",
  data: {
    // NAVBAR DATA (next: belajar vue-router)
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
    // 5
    resultCounter: 0,
    // 6
    celcius: 0,
    degrees: 0,
    // 7
    show: false,
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    birthDate: "",
    gender: "",
    register: true,
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
  methods: {
    // 5
    reset() {
      return (this.resultCounter = 0);
    },
    count() {
      return (this.resultCounter += 1);
    },
    // 6
    fahrenheit() {
      return (this.degrees = (this.celcius * 9) / 5 + 32 + "°F");
    },
    kelvin() {
      return (this.degrees = this.celcius + 273.15 + "K");
    },
    // 7
    showForm() {
      return (this.show = true);
    },
    message() {
      if (
        this.firstname &&
        this.lastname &&
        this.email &&
        this.password &&
        this.birthDate &&
        this.gender
      ) {
        this.register = false;
        return "Data sudah lengkap, silahkan registrasi.";
      } else {
        return "Data belum lengkap. Silahkan lengkapi data yang belum ter-isi.";
      }
    },
    closeRegisterPage() {
      return (this.show = false);
    },
  },
});
