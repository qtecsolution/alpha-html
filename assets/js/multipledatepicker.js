$(document).ready(function () {
    let dates = [];
    const calander = $("#cal");
    if(calander.length > 0) {
        calander.daterangepicker();
        calander.on('apply.daterangepicker', function (e, picker) {
            e.preventDefault();
            const obj = {
                "key": dates.length + 1,
                "start": picker.startDate.format('MM/DD/YYYY'),
                "end": picker.endDate.format('MM/DD/YYYY')
            }
            dates.push(obj);
        })
    }
});


// $(".remove").on('click', function () {
//     removeDate($(this).attr('key'));
// })
// function showDates() {
//     $("#ranges").html("");
//     $.each(dates, function () {
//         const el = "<li>" + this.start + "-" + this.end + "<button class='remove' onClick='removeDate(" + this.key + ")'>-</button></li>";
//         $("#ranges").append(el);
//     })
// }

// function removeDate(i) {
//     dates = dates.filter(function (o) {
//         return o.key !== i;
//     })
//     showDates();
// }