/**
 * EmergencyLK 
 * Global API URL's
 */

//Protocol and Host Links
const PROTOCOL = 'http://';
const HOST = '10.0.2.2'; //For Android emulator we are using ip address instead of localhost name ios-> localhost
//API LINKS
const API_GET_CRIME_REPORTS = PROTOCOL+HOST+'/emeergency-lk/api/admin/view-crime-reports.php'
const API_GET_MISSING_PERSONS = PROTOCOL+HOST+'/emeergency-lk/api/get-missing-persons.php'
const API_GET_MEDHELP_REPORTS = PROTOCOL+HOST+'/emeergency-lk/api/get-medhelp-reports.php'
const API_SAVE_TSUNAMI_ALERT = PROTOCOL+HOST+'/emeergency-lk/api/admin/add-tsunami-alert.php'
const API_SAVE_FLOOD_ALERT = PROTOCOL+HOST+'/emeergency-lk/api/admin/add-flood-alert.php'
const API_SAVE_EARTHQUAKE_ALERT = PROTOCOL+HOST+'/emeergency-lk/api/admin/add-earthquake-alert.php'


//Exporting All API Links to Use
export default
{
    API_GET_CRIME_REPORTS:API_GET_CRIME_REPORTS,
    API_GET_MISSING_PERSONS:API_GET_MISSING_PERSONS,
    API_GET_MEDHELP_REPORTS:API_GET_MEDHELP_REPORTS,
    API_SAVE_TSUNAMI_ALERT:API_SAVE_TSUNAMI_ALERT,
    API_SAVE_FLOOD_ALERT:API_SAVE_FLOOD_ALERT,
    API_SAVE_EARTHQUAKE_ALERT:API_SAVE_EARTHQUAKE_ALERT
}
    
 