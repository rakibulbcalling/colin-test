$('#form-calendar .calendar').datepicker({
    autoclose: true,
    todayHighlight: true,
    beforeShowMonth: function (date) {
        if (date.getMonth() == 8) {
            return false;
        }
    },
    beforeShowYear: function (date) {
        if (date.getFullYear() == 2007) {
            return false;
        }
    },
    datesDisabled: ['08/06/2023'],
    toggleActive: true,
    templates: {
        leftArrow: '<i class="bx bxs-chevron-left" ></i>',
        rightArrow: '<i class="bx bxs-chevron-right" ></i>'
    },
});