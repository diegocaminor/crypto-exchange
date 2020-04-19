const app = new Vue({
  el:'#app',
  data () {
      return {
        name: 'Bitcoin',
        symbol: 'BTC',
        img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
        changePercent: 0,
        color: 'f4f4f4',
        price: 8400,
        pricesWithDays: [
            { day: 'Lunes', value: 8400 },
            { day: 'Martes', value: 7900 },
            { day: 'Miercoles', value: 8200 },
            { day: 'Jueves', value: 9000 },
            { day: 'Viernes', value: 9400 },
            { day: 'Sabado', value: 10000 },
            { day: 'Domingo', value: 10200 },
        ],
        showPrices: false
      }
  },
  // Propiedades computadas (Computed) = propiedades que se calculan en tiempo real en base a los valores de otras propiedades.
  // Watcher = Funciones que ejecutan un código es decir que por medio de un cambio de la observación de una variable se puede disparar determinado código o ejecutar una función.
  // Podemos pensarlo como un Disparador de código.
  computed: {
    title() {
      return ` ${this.name} + ${this.symbol}`
    }
  },

  // El nombre de la función se tiene que corresponder con el nombre de una propiedad en data
  watch: {
    showPrices(newVal, oldVal) {
      console.log(newVal, oldVal)
    }
  },

  methods: {
    toogleShowPrices() {
      this.showPrices = !this.showPrices
      this.color = this.color.split('')
        .reverse().join('')
    }
  }
})