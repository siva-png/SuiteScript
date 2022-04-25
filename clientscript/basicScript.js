/**
 @NApiVersion 2.0
 @NScriptType ClientScript
 @NModuleScope public
 */
 define([], function() {
  function pageInit(context){
    // alert('hi')
    var rec = context.currentRecord
    // var custId = 
    var cust = rec.getValue({
      fieldId:"entityid"
    });
    log.debug('context',cust)
    // var msg = "This customer has not provided an email address.";
    // var email = context.currentRecord.getValue({
    //   fieldId:"email"
    // });
    // if(!email){
    //    log.debug('custid',cust)
    //   alert(msg)

    // }

  }
  return {
    pageInit:pageInit
  }
});