import { LightningElement , track} from 'lwc';

import { createRecord } from 'lightning/uiRecordApi';

import USER_DETAIL from '@salesforce/schema/User_Detail__c';
import CLIENT_NAME from '@salesforce/schema/User_Detail__c.Client_Name__c';
import COMPANY_NAME from '@salesforce/schema/User_Detail__c.Company_Name__c';
import DURATION_OF_PROJECT from '@salesforce/schema/User_Detail__c.Duration_of_Project__c';
import EMPLOYEE_NAME from '@salesforce/schema/User_Detail__c.Employee_Name__c';
import LOCATION from '@salesforce/schema/User_Detail__c.Location__c';
import POSITION from '@salesforce/schema/User_Detail__c.Position__c';
import REQUIREMENTS from '@salesforce/schema/User_Detail__c.Requirements__c';
import TECHNOLOGY from '@salesforce/schema/User_Detail__c.Technology__c';
import NAME from '@salesforce/schema/User_Detail__c.Name';
import VENDOR_COMPANY_NAME from '@salesforce/schema/User_Detail__c.Vendor_Company_Name__c';
import VENDOR_RECRUITER_EMAIL from '@salesforce/schema/User_Detail__c.Vendor_Recruiter_Email__c';
import VENDOR_RECRUITER_NAME from '@salesforce/schema/User_Detail__c.Vendor_Recruiter_Name__c';
import VENDOR_RECRUITER_NUMBER from '@salesforce/schema/User_Detail__c.Vendor_Recruiter_Number__c';


export default class UserPage extends LightningElement 
{
   
    @track employeeName = ' ';
    @track companyName  = ' ';
    @track technology   = ' ';
    @track vendorCompanyName = ' ';
    @track vendorRecruiterName = ' ';
    @track vendorRecruiterEmail = ' ';
    @track vendorRecruiterNumber = ' ';
    @track clientName = ' ';
    @track position = ' ';
    @track location = ' ';
    @track durationOfProject = ' ';
    @track requirement = ' ';
   

    handleCompanyName(event)
    {
        this.companyName = event.target.value;
    }

    handleEmployeeName(event)
    {
        this.employeeName = event.target.value;
    }

    handleTechnology(event)
    {
        this.technology = event.target.value;
    }
    
    handleVendorCompanyName(event)
    {
        this.vendorCompanyName = event.target.value;
    }
    handleVendorRecruiterName(event)
    {
        this.vendorRecruiterName = event.target.value;
    }

    handleVendorRecruiterEmail(event)
    {
        this.vendorRecruiterEmail = event.target.value;
    }

    handleVendorRecruiterNumber(event)
    {
       this.vendorRecruiterNumber = event.target.value;
    }

    handleClientName(event)
    {
       this.clientName = event.target.value;
    }

    handlePosition(event)
    {
       this.position = event.target.value;
    }

    handleLocation(event)
    { 
        this.location = event.target.value;
    }

    handleDurationOfProject(event)
    {
        this.durationOfProject = event.target.value;
    }

    handleRequirement(event)
    {
        this.requirement = event.target.value;
    }

    //user clicks the submit button it will creates the record
    createRecord()
    {
         const fields = {};

         fields[EMPLOYEE_NAME.fieldApiName]= this.employeeName;
         fields[COMPANY_NAME.fieldApiName] = this.companyName;
         fields[TECHNOLOGY.fieldApiName]= this.technology;
         fields[VENDOR_COMPANY_NAME.fieldApiName] = this.vendorCompanyName;
         fields[VENDOR_RECRUITER_NAME.fieldApiName] = this.vendorRecruiterName;
         fields[VENDOR_RECRUITER_EMAIL.fieldApiName] = this.vendorRecruiterEmail;
         fields[VENDOR_RECRUITER_NUMBER.fieldApiName] = this.vendorRecruiterNumber;
         fields[CLIENT_NAME.fieldApiName] = this.clientName;
         fields[POSITION.fieldApiName] = this.position;
         fields[LOCATION.fieldApiName] = this.location;
         fields[DURATION_OF_PROJECT.fieldApiName] = this.durationOfProject;
         fields[REQUIREMENTS.fieldApiName] = this.requirement;


        const recordInput = {apiName : USER_DETAIL.objectApiName, fields};


        createRecord(recordInput)
           .then(result => 
            {
                console.log('record created with Id', result.id);
                location.reload();//refresh the current page
            })

            .catch(error => {
                
                console.error('record creating book', error);
            });


    }

}