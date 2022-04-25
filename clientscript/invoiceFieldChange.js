/**
 * @NApiVersion 2.x
 * @NScriptType clientScript
 */
 define(['N/error'], 
 function(error) {
   function fieldChanged(context){
   var CurrentRecord = context.currentRecord;
   var endate=  CurrentRecord.getValue({
       fieldId:'enddate'
     });
   var startdate=  CurrentRecord.getValue({
       fieldId:'startdate'
     });
     var po=  CurrentRecord.getValue({
       fieldId:'otherrefnum'
     });
     var memo=  CurrentRecord.getValue({
       fieldId:'memo'
     });
     if(endate || startdate ){
       if(!po){
         CurrentRecord.setValue({
           fieldId: 'otherrefnum',
           value: 'Quantity is less than 3',
           ignoreFieldChange: true
       });
       }
     if(!memo){
       CurrentRecord.setValue({
         fieldId: 'memo',
         value:7895,
         ignoreFieldChange:true
     })
     }
     }
   } 
   return {
     fieldChanged:fieldChanged
   } 
 });