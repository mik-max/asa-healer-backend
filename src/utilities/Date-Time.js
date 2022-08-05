export function getCurrentTime(){
     let time = Math.floor(new Date().getTime()/1000.0);
     return time;
}
export function convertDateToHumanReadable(date){
     let myDate = new Date( date*1000);
     const wordFormart = myDate.toUTCString();
     const dateFormart = myDate.toLocaleString()
     return {wordFormart, dateFormart}
}

export function convertDateToEpoch(date){
     let myDate = new Date(date); // Your timezone!
     let epoch = myDate.getTime()/1000.0;
     return epoch;
}