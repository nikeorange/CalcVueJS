Vue.filter('currency', function (value) {
    return '' + value.toFixed(2);
});

var app = new Vue({
    el: "#main",
    data: {
        services: [{
                name: 'Пакет 1 (16 000р.)',
                value: 16000,
                active: false
            },
            {
                name: 'Пакет 2 (17 000р.)',
                value: 17000,
                active: false
            },
            {
                name: 'Пакет 3 (18 000р.)',
                value: 18000,
                active: false
            },
            {
                name: 'Пакет 4 (19 000р.)',
                value: 19000,
                active: false
            },
            {
                name: 'Пакет 5 (20 000р.)',
                value: 20000,
                active: false
            },
            {
                name: 'Пакет 6 (21 000р.)',
                value: 21000,
                active: false
            },
            {
                name: 'Пакет 7 (22 000р.)',
                value: 22000,
                active: false
            },
            {
                name: 'Пакет 8 (23 000р.)',
                value: 23000,
                active: false
            },
            {
                name: 'Пакет 9 (24 000р.)',
                value: 24000,
                active: false
            },
            {
                name: 'Пакет 10 (25 000р.)',
                value: 25000,
                active: false
            },
            {
                name: 'Пакет 11 (26 000р.)',
                value: 26000,
                active: false
            },
            {
                name: 'Пакет 12 (27 000р.)',
                value: 27000,
                active: false
            }
        ],

        basic_services: [{
                name: 'Свойство 1 (10 000р.)',
                value: 10000,
                active: true
            },
            {
                name: 'Свойство 2 (11 000р.)',
                value: 11000,
                active: true
            },
            {
                name: 'Свойство 3 (12 000р.)',
                value: 12000,
                active: true
            },
            {
                name: 'Свойство 4 (13 000р.)',
                value: 13000,
                active: true
            },
            {
                name: 'Свойство 5 (14 000р.)',
                value: 14000,
                active: true
            }
        ]
    },
    methods: {
        toggleActive: function (a) {
            a.active = !a.active;
        },
        basicTotal: function () {
            var basicTotal = 0;
            
            this.basic_services.forEach(function (a) {
                if (a.active) {
                    basicTotal += a.value;
                }
            });

            return basicTotal

        },
        toggleActive: function (b) {
            b.active = !b.active;
        },
        DopTotal: function () {
            var DopTotal = 0;
            
            this.services.forEach(function (b) {
                if (b.active) {
                    DopTotal += b.value;
                }
            });

            return DopTotal

        },
        
        toggleCheckbox() {
            this.checkbox = !this.checkbox
            this.$emit('setCheckboxVal', this.checkbox)
        }
    }
});