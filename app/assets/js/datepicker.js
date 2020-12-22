/* datepicker */ 
$(function () {
  $("#fromDate").datepicker({
    format: "yyyy-mm-dd",
    autoclose: true,
    startDate: "today",
    todayHighlight: true
  });
  $("#toDate").datepicker({
    format: "yyyy-mm-dd",
    autoclose: true,
    startDate: "today",
  });
  $("#fromDate").on("changeDate", function (e) {
    $('#toDate').datepicker('setStartDate', e.date);
  });
  $("#toDate").on("changeDate", function (e) {
    $('#fromDate').datepicker('setEndDate', e.date);
  });
});