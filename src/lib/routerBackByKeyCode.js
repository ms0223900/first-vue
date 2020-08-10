const routerBackByKeyCode = (keyCode = 8) => ({
  mounted() {
    window.addEventListener('keyup', (e) => {
      if (e.keyCode === keyCode) {
        this.handleBack();
      }
    });
  },
  methods: {
    handleBack() {
      // this.$router.go(-1);
      this.$router.back();
    },
  },
});

export default routerBackByKeyCode;
