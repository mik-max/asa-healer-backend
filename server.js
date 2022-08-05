import express from 'express'
import { convertDateToHumanReadable, getCurrentTime, convertDateToEpoch } from './src/utilities/Date-Time.js';
// The following code are only for testing purposes and should not be used in production!
const time = getCurrentTime();
console.log(time)
const date = convertDateToHumanReadable(time)
console.log(date);
console.log(convertDateToEpoch(date.wordFormart));