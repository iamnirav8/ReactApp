import {EventEmitter} from 'events';

class DataStore extends EventEmitter{
 constructor(){
     super()
     let id = 0;
    function createData(matterNumber, matterDescription, clientName, partnerResponsible, personActing,currentFee,currentDisbursmentEstimate,lastTimeSheetDate) {
            id += 1;
            return { id, matterNumber, matterDescription, clientName, partnerResponsible, personActing,currentFee,currentDisbursmentEstimate,lastTimeSheetDate };
    }
    this.GridData =  [
        createData('120-234-09','Prject bufalo','Nippon Steel data','Andew Tye','Andew type',124,10,'2018-08-12'),
        createData('4567','Prject NX','HDFC LTD','R C Tye','C K type',54678,14,'2018-01-12'),
        createData('76855','Prject Siri','Apple Pvt Ltd','Time Cook','Time Cook',723,78,'2018-02-23'),
        createData('20-234-09','Prject Cortana','Microsoft Pvt Ltd','Satya Nadella','Satya Nadella',567,23,'2018-12-27'),
        createData('98235','Prject Tango','Google Inc','Eric Schedmt','Sundar Pichai',2345,44,'2018-01-30'),
        createData('67543','Prject X','Samsung Inc','Pranav Mistry','Pranav Mistry',67,7,'2018-04-12')
     ];
    getAllData()
    {
        return this.GridData;
    }
    //   var data = [
    //        {
    //         matterNumber:'120-234-09',
    //          matterDescription:, 
    //          clientName:
    //          , partnerResponsible, personActing,currentFee,currentDisbursmentEstimate,lastTimeSheetDate
    //        }

    //   ];
 }

}
const dataStore = new DataStore;
export default DataStore;