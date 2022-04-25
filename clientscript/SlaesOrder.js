/**
 * @NApiVersion 2.x
 * @NScriptType clientScript
 */
 define([
  'N/currentRecord',
  'N/format' 
], function( currentRecord,format) {
   function pageInit(context){
      var CurrentRecord = context.currentRecord;
          CurrentRecord.setValue({
            fieldId:'salesrep',
            value:34
          });
          CurrentRecord.setValue({
            fieldId:'partner',
            value:778
          });
     var startDate = format.parse({
  		 value: '4/24/2022',
  		 type: format.Type.DATE
		});
     var endDate = format.parse({
  		 value: '12/24/2022',
  		 type: format.Type.DATE
		});
     CurrentRecord.setValue({
            fieldId:'startdate',
            value:startDate
          });
       CurrentRecord.setValue({
            fieldId:'enddate',
            value:endDate
          })
   }
   return{
     pageInit:pageInit
    }
});