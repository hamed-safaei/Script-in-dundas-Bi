var dataRetrievalService = this.getService("DataRetrievalService");
var DateArray = new Array()
const toCalendar1 = document.querySelector('shamsi-calendar-to1');
const toCalendar2 = document.querySelector('shamsi-calendar-to2');
////به ازای تمام تقویم های صفحه
const fromCalendar1 = document.querySelector('shamsi-calendar-from1');
const fromCalendar2 = document.querySelector('shamsi-calendar-from2');
const fromCalendar3 = document.querySelector('shamsi-calendar-from3');


// Create a Request object with our own paging settings:
var request = new dundas.data.Request({ objectId: tableVaction.metricSetBindings[0].metricSetId });
request.pagingOptions.pagingKind = dundas.data.PagingKind.SEQUENCE;
request.pagingOptions.rowSequenceSize = 500;
 
// Request the data:
var def = dataRetrievalService.getData(request);
 
def.done(function(results) {
   //     var DictArray = results[0].cellset.rows;
  var Rows = results[0].cellset.rows;
   for (k=0 ; k < Rows.length ; k++)
 { 
   var caption = Rows[k].members[0].caption;
   DateArray.push(caption)
 }
  toCalendar1.vactionIn = DateArray
  toCalendar2.vactionIn = DateArray

  fromCalendar1.vactionIn = DateArray
  fromCalendar2.vactionIn = DateArray
  fromCalendar3.vactionIn = DateArray

console.log(DateArray)
});
